import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { data } from "react-router";

const initialState = {
  // Bungkus utama data roadmap
  data: null,
  // Status untuk mengatur animasi skeleton/loading
  isLoading: false,
  selectedCategoryData: null,
  // Menyimpan array daftar kursus yang sedang aktif/dipilih
  selectedCourses: [],
  selectedPath: null,
  courseStepComplated: null,
  // Menyimpan pesan error jika API gagal
  error: null,
};

export const fetchLearningRoadmap = createAsyncThunk(
  "learningRoadmap/fetchLearningRoadmap",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/user/roadmap`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        return thunkAPI.rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateCourseStatus = createAsyncThunk(
  "learningRoadmap/updateCourseStatus",
  async function ({ stepId, status }, thunkAPI) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/v1/user/roadmap/steps/${stepId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify({ status }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        return thunkAPI.rejectWithValue(data);
      }

      // Kembalikan stepId dan status agar reducer Redux bisa langsung update state
      return { stepId, status, responseData: data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateCourseStepStatus = createAsyncThunk(
  "learningRoadmap/updateCourseStepStatus",
  async ({ courseId, stepNumber, newStatus }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/v1/roadmaps/courses/${courseId}/steps/${stepNumber}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return { courseId, stepNumber, newStatus: response.data.data.status };
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Gagal mengupdate status step",
      );
    }
  },
);

const learningRoadmapSlice = createSlice({
  name: "learningRoadmap",
  initialState,
  reducers: {
    // 1. REDUCER UNTUK PILIH KATEGORI (Teknologi, Bisnis, Kreatif)
    selectCategoryCareer(state, action) {
      const selectedCategory = action.payload; // misal: "Teknologi"

      if (state.data && state.data.data && selectedCategory) {
        const keyPilihan = selectedCategory.toLowerCase();
        const dataKategori = state.data.data[keyPilihan] || [];

        // Simpan data path (FE, BE, dll) ke state
        state.selectedCategoryData = dataKategori;
      }
    },

    selectedPathName(state, action) {
      const targetPath = action.payload; // Misal dikirim: "Frontend Developer" atau slug "frontend-developer"
      // console.info(current(state.isLoading));

      if (state?.selectedCategoryData && targetPath) {
        // 1. Ambil array yang berisi 3 path tersebut
        // (Sesuaikan keyCategory dengan cara Anda mengambil data kategorinya)
        const dataKategori = state.selectedCategoryData;

        // 2. Cari objek path yang sesuai
        const matchedPath = dataKategori.find((item) => {
          // Normalisasi teks agar pencocokan tidak sensitif huruf besar/kecil atau tanda strip
          const normalize = (str) =>
            str?.toLowerCase().replace(/[-_]/g, " ").trim();
          return normalize(item.path) === normalize(targetPath);
        });

        if (matchedPath) {
          // Simpan objek utuh, nama path, atau langsung courses-nya
          state.selectedPath = matchedPath.path; // "Frontend Developer"
        }
      }
    },
    // 2. REDUCER BARU: UNTUK GANTI COURSES BERDASARKAN PATH YANG DIKLIK (FE, BE, dll)
    selectPathCourses(state, action) {
      const selectedPathName = action.payload; // misal: "Frontend Developer"

      // Cek apakah data kategori saat ini ada isinya
      if (state.selectedCategoryData && state.selectedCategoryData.length > 0) {
        // Cari path yang namanya sama persis dengan yang diklik user
        const matchedPath = state.selectedCategoryData.find(
          (item) => item.path === selectedPathName,
        );

        // Kalau ketemu, timpa state selectedCourses dengan courses milik path tersebut
        if (matchedPath) {
          state.selectedCourses = matchedPath.courses || [];
        }
      }
    },
    selectCourseStepComplated(state) {
      state.selectedCourseComplated = state.selectedCourses.flatMap((item) =>
        item.steps.filter((step) => step.status === "completed"),
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchLearningRoadmap.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLearningRoadmap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchLearningRoadmap.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateCourseStatus.fulfilled, (state, action) => {
        const { stepId, status } = action.payload;

        // Looping setiap course di dalam array selectedCourses
        state.selectedCourses.forEach((course) => {
          // 1. Cari apakah step yang di-update ada di dalam course ini
          const targetStep = course.find(
            (item) => String(item.course_id || item.status) === String(stepId),
          );
          console.info(current(targetStep));

          // 2. Hanya jalankan jika step ditemukan di course ini
          if (targetStep) {
            // targetStep.status = status;

            // Cek apakah semua step sudah completed
            const allCompleted = course.every((s) => s.status === "completed");

            // Cek apakah ada minimal satu step yang completed atau in_progress
            const hasProgress = course.some(
              (s) => s.status === "completed" || s.status === "in_progress",
            );

            // Tentukan status course
            if (allCompleted) {
              course.status = "completed";
            } else if (hasProgress) {
              course.status = "in_progress";
            }
          }

        });
      })
      .addCase(updateCourseStepStatus.fulfilled, (state, action) => {
        const { courseId, stepNumber, newStatus } = action.payload;

        // Cari course aktif
        const course = state.selectedCourses.find(
          (c) => String(c.course_id) === String(courseId),
        );

        if (course) {
          // Jika course tadinya locked, ubah jadi in_progress
          if (course.status === "locked") {
            course.status = "in_progress";
          }

          // Update status step yang diselesaikan
          const currentStepIndex = course.steps.findIndex(
            (s) => s.step === stepNumber,
          );
          if (currentStepIndex !== -1) {
            course.steps[currentStepIndex].status = newStatus;

            // Otomatis buka step berikutnya jika masih locked
            const nextStep = course.steps[currentStepIndex + 1];
            if (nextStep && nextStep.status === "locked") {
              nextStep.status = "in_progress";
            }
          }

          // Jika seluruh step sudah completed, ubah status course jadi completed
          const isAllDone = course.steps.every((s) => s.status === "completed");
          if (isAllDone) {
            course.status = "completed";
          }
        }
      }),
});

// Jangan lupa export reducer yang baru dibikin!
export const {
  selectCategoryCareer,
  selectPathCourses,
  selectedPathName,
  selectCourseStepComplated,
} = learningRoadmapSlice.actions;
export default learningRoadmapSlice.reducer;

//  .addCase(updateCourseStatus.fulfilled, (state, action) => {
//         const { stepId, status } = action.payload;

//         // Cari dan ubah status step di selectedCourses
//         state.selectedCourses.forEach((course) => {
//           course.steps?.forEach((step) => {
//             if (String(step.id || step.step) === String(stepId)) {
//               step.status = status;
//             }
//           });

//           // Jika course tadinya locked dan ada step yang jalan, aktifkan course-nya
//           if (course.status === "locked") {
//             course.status = "in_progress";
//           }

//           // Jika semua step selesai, set course menjadi completed
//           const allCompleted = course.steps?.every(
//             (s) => s.status === "completed",
//           );
//           if (allCompleted) {
//             course.status = "completed";
//           }
//         });
//       })
