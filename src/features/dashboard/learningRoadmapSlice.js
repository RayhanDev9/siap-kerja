import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
      const res = await fetch(`${BASE_URL}/user/roadmap`, {
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
        `${BASE_URL}/user/roadmap/steps/${stepId}/status`,
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

// 3. UPDATE COURSE DIRECT STATUS
export const updateCourseDirectStatus = createAsyncThunk(
  "learningRoadmap/updateCourseDirectStatus",
  async function ({ courseId, status }, thunkAPI) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `${BASE_URL}/user/roadmap/courses/${courseId}/status`,
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

      return { courseId, status, responseData: data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// 4. SUBMIT COURSE RATING
export const submitCourseRating = createAsyncThunk(
  "learningRoadmap/submitCourseRating",
  async function ({ courseId, rating, review = "" }, thunkAPI) {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${BASE_URL}/courses/${courseId}/rating`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify({ rating, review }),
      });

      const data = await res.json();
      if (!res.ok) return thunkAPI.rejectWithValue(data);

      return {
        courseId,
        rating,
        newRatingFromBackend: data.data?.rating || rating,
        responseData: data,
      };
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
        const normalize = (str) =>
          str?.toLowerCase().replace(/[-_]/g, " ").trim();

        const matchedPath = state.selectedCategoryData.find(
          (item) => normalize(item.path) === normalize(targetPath),
        );

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

        const targetCourse = state.selectedCourses.find((course) =>
          course.steps?.some(
            (step) => String(step.id || step.step) === String(stepId),
          ),
        );

        if (targetCourse && targetCourse.steps) {
          const targetStep = targetCourse.steps.find(
            (step) => String(step.id || step.step) === String(stepId),
          );

          if (targetStep) {
            targetStep.status = status;
          }

          const isAllCompleted = targetCourse.steps.every(
            (step) => step.status === "completed",
          );

          const hasProgress = targetCourse.steps.some(
            (step) =>
              step.status === "completed" || step.status === "in_progress",
          );

          if (isAllCompleted) {
            targetCourse.status = "completed";
          } else if (hasProgress) {
            targetCourse.status = "in_progress";
          }
        }
      })

      // UPDATE COURSE DIRECT STATUS
      .addCase(updateCourseDirectStatus.fulfilled, (state, action) => {
        const { courseId, status } = action.payload;

        const targetCourse = state.selectedCourses.find(
          (c) => String(c.course_id || c.id) === String(courseId),
        );

        if (targetCourse) {
          targetCourse.status = status;
        }
      })

      // SUBMIT RATING CASE
      .addCase(submitCourseRating.fulfilled, (state, action) => {
        const { courseId, rating, newRatingFromBackend } = action.payload;

        const targetCourse = state.selectedCourses.find(
          (c) => String(c.course_id || c.id) === String(courseId),
        );

        if (targetCourse) {
          targetCourse.user_rating = rating;
          targetCourse.rating = newRatingFromBackend;
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