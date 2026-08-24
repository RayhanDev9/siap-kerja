import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  selectedCategoryData: null,
  selectedCourses: [],
  selectedPath: null,
  courseStepComplated: [],
  error: null,
};

// 1. FETCH ROADMAP
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
      if (!res.ok) return thunkAPI.rejectWithValue(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// 2. UPDATE STEP STATUS
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
      if (!res.ok) return thunkAPI.rejectWithValue(data);

      return { stepId, status, responseData: data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateCourseDirectStatus = createAsyncThunk(
  "learningRoadmap/updateCourseDirectStatus",
  async function ({ courseId, status }, thunkAPI) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/v1/user/roadmap/courses/${courseId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify({ status }), // misal: { status: "in_progress" } atau { status: "completed" }
        },
      );

      const data = await res.json();
      if (!res.ok) return thunkAPI.rejectWithValue(data);

      return { courseId, status, responseData: data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const learningRoadmapSlice = createSlice({
  name: "learningRoadmap",
  initialState,
  reducers: {
    selectCategoryCareer(state, action) {
      const selectedCategory = action.payload;
      if (state.data?.data && selectedCategory) {
        const keyPilihan = selectedCategory.toLowerCase();
        state.selectedCategoryData = state.data.data[keyPilihan] || [];
      }
    },

    selectedPathName(state, action) {
      const targetPath = action.payload;
      if (state?.selectedCategoryData && targetPath) {
        const matchedPath = state.selectedCategoryData.find((item) => {
          const normalize = (str) =>
            str?.toLowerCase().replace(/[-_]/g, " ").trim();
          return normalize(item.path) === normalize(targetPath);
        });

        if (matchedPath) {
          state.selectedPath = matchedPath.path;
        }
      }
    },

    selectPathCourses(state, action) {
      const selectedPathName = action.payload;
      if (state.selectedCategoryData?.length > 0) {
        const matchedPath = state.selectedCategoryData.find(
          (item) => item.path === selectedPathName,
        );
        if (matchedPath) {
          state.selectedCourses = matchedPath.courses || [];
        }
      }
    },

    selectCourseStepComplated(state) {
      state.courseStepComplated = state.selectedCourses.flatMap(
        (item) =>
          item.steps?.filter((step) => step.status === "completed") || [],
      );
    },
  },

  extraReducers: (builder) => {
    builder
      // FETCH ROADMAP CASES
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

      // UPDATE STEP & COURSE STATUS CASE
      .addCase(updateCourseStatus.fulfilled, (state, action) => {
        const { stepId, status } = action.payload;

        // 1. Temukan HANYA course yang memuat step target
        const targetCourse = state.selectedCourses.find((course) =>
          course.steps?.some(
            (step) => String(step.id || step.step) === String(stepId),
          ),
        );

        if (targetCourse && targetCourse.steps) {
          // 2. Temukan dan perbarui status step yang bersangkutan
          const targetStep = targetCourse.steps.find(
            (step) => String(step.id || step.step) === String(stepId),
          );

          if (targetStep) {
            targetStep.status = status;
          }

          // 3. Evaluasi kondisi bisnis menggunakan .every() dan .some()
          const isAllCompleted = targetCourse.steps.every(
            (step) => step.status === "completed",
          );

          const hasProgress = targetCourse.steps.some(
            (step) =>
              step.status === "completed" || step.status === "in_progress",
          );

          // 4. Update status course sesuai prioritas
          if (isAllCompleted) {
            targetCourse.status = "completed";
          } else if (hasProgress) {
            targetCourse.status = "in_progress";
          }
          // Jika tidak memenuhi keduanya (belum dimulai/masih locked), status course tidak diubah (tetap aslinya).
        }
      })
      .addCase(updateCourseDirectStatus.fulfilled, (state, action) => {
        const { courseId, status } = action.payload;

        const targetCourse = state.selectedCourses.find(
          (c) => String(c.course_id) === String(courseId),
        );

        if (targetCourse) {
          targetCourse.status = status;
        }
      });
  },
});

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
