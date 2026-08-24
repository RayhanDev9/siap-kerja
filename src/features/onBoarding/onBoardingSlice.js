import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

// ==========================================

// 1. INITIAL STATE

// ==========================================

const initialState = {
  data: null,

  isLoading: false,

  isError: false,
};

// ==========================================

// 2. ASYNC THUNK (Fungsi Fetch API)

// ==========================================

export const fetchOnboarding = createAsyncThunk(
  "onboarding/submitOnboarding",

  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://127.0.0.1:8000/api/v1/user/profile`,

        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",

            Accept: "application/json",

            Authorization: `Bearer ${token}`,

            "ngrok-skip-browser-warning": "true",
          },
        },
      );

      const data = await response.json();

      console.info(data);

      if (!response.ok) {
        return thunkAPI.rejectWithValue(
          data.message || "Terjadi kesalahan pada server.",
        );
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Gagal menghubungi server.",
      );
    }
  },
);

export const updateCourseStatus = createAsyncThunk(
  "learningRoadmap/updateCourseStatus",
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
          // Mengirim status baru (misal: "completed") ke backend
          body: JSON.stringify({ status }),
        },
      );

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

export const fetchSendOnboarding = createAsyncThunk(
  "onboarding/sendOnboarding",

  async (dataSend, thunkAPI) => {
    console.info("Data to send (FormData):", dataSend);

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();

      // Append semua field teks

      if (dataSend.fullName) formData.append("fullName", dataSend.fullName);

      if (dataSend.description)
        formData.append("description", dataSend.description);

      if (dataSend.current_role)
        formData.append("current_role", dataSend.current_role);

      if (dataSend.target_role_slug)
        formData.append("target_role_slug", dataSend.target_role_slug);

      if (dataSend.category_slug)
        formData.append("category_slug", dataSend.category_slug);

      // --- INI BAGIAN YANG BARU DIMASUKIN BRO ---

      // Looping array skills biar diformat ala FormData Laravel: skills[0][id] = ...

      if (dataSend.skills && dataSend.skills.length > 0) {
        dataSend.skills.forEach((skill, index) => {
          formData.append(`skills[${index}][id]`, skill.id);

          formData.append(`skills[${index}][level]`, skill.level);
        });
      }

      // ------------------------------------------

      // Pastikan ngecek file aslinya di sini

      if (dataSend.foto_profile instanceof File) {
        formData.append("photo", dataSend.foto_profile);
      }

      const response = await fetch(
        `http://127.0.0.1:8000/api/v1/user/profile`,

        {
          method: "POST",

          headers: {
            Accept: "application/json",

            Authorization: `Bearer ${token}`,

            "ngrok-skip-browser-warning": "true",
          },

          body: formData,
        },
      );

      const data = await response.json();

      console.info(data);

      if (!response.ok) {
        return thunkAPI.rejectWithValue(
          data.message || "Terjadi kesalahan pada server.",
        );
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Gagal menghubungi server.",
      );
    }
  },
);

// ==========================================

// 3. CREATE SLICE

// ==========================================

const onboardingSlice = createSlice({
  name: "onboarding",

  initialState,

  reducers: {
    resetOnboardingState: (state) => {
      state.isLoading = false;

      state.isSuccess = false;

      state.isError = false;
    },

    // Complete Your Profile (CUMA PAKAI foto_profile)

    completeYourProfile: {
      prepare({ fullName = "", description = "", foto_profile = null } = {}) {
        return {
          payload: { fullName, description, foto_profile },
        };
      },

      reducer(state, action) {
        console.info(current(state.data));

        if (state.data && state.data.data) {
          state.data.data = {
            ...state.data.data,

            fullName: action.payload.fullName,

            description: action.payload.description,

            foto_profile: action.payload.foto_profile, // Isi langsung dari payload (berupa file asli)
          };
        }
      },
    },

    explorasiCareer: (state, action) => {
      if (state.data.data && state.data) {
        state.data.data = {
          ...state.data.data,

          category_slug: action.payload,
        };
      }
    },

    RoleSelection: {
      prepare({ current_role = "", target_role_slug = "" } = {}) {
        return {
          payload: { current_role, target_role_slug },
        };
      },

      reducer(state, action) {
        if (state.data && state.data) {
          state.data.data = {
            ...state.data.data,

            current_role: action.payload.current_role,

            target_role_slug: action.payload.target_role_slug,
          };
        }
      },
    },

    SkillsSelection: (state, action) => {
      if (state.data && state.data.data) {
        state.data.data = {
          ...state.data.data,

          initial_skills: action.payload,
        };
      }
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchOnboarding.pending, (state) => {
        state.isLoading = true;

        state.isError = null;
      })

      .addCase(fetchOnboarding.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload; // Timpa pakai data dari backend

        // 🔍 CARI DATA SKILL DI MEMORI FISIK BROWSER
        const savedSkills = localStorage.getItem("my_saved_skills");
        if (savedSkills && state.data && state.data.data) {
          // Suntikin lagi ke dalam state secara otomatis
          state.data.data.initial_skills = JSON.parse(savedSkills);
        }
      })

      .addCase(fetchOnboarding.rejected, (state, action) => {
        state.isLoading = false;

        state.isError = action.payload;
      })

      .addCase(fetchSendOnboarding.pending, (state) => {
        console.info("fetchSendOnboarding: Pending");

        state.isLoading = true;

        state.isError = null;
      })

      .addCase(fetchSendOnboarding.fulfilled, (state, action) => {
        console.info(
          "fetchSendOnboarding: Fulfilled, payload:",
          action.payload,
        );
        state.isLoading = false;
        state.data = action.payload; // Timpa pakai data dari backend

        // 🔍 CARI DATA SKILL DI MEMORI FISIK BROWSER
        const savedSkills = localStorage.getItem("my_saved_skills");
        if (savedSkills && state.data && state.data.data) {
          // Suntikin lagi ke dalam state secara otomatis
          state.data.data.initial_skills = JSON.parse(savedSkills);
        }
      })

      .addCase(fetchSendOnboarding.rejected, (state, action) => {
        console.error("fetchSendOnboarding: Rejected, error:", action.payload);

        state.isLoading = false;

        state.isError = action.payload;
      });
  },
});

export const {
  resetOnboardingState,

  completeYourProfile,

  explorasiCareer,

  RoleSelection,
  SkillsSelection,
} = onboardingSlice.actions;

export default onboardingSlice.reducer;
