import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import marketTrendsReducer from "./features/dashboard/marketTrendsSlice";
import careerExplorerReducer from "./features/dashboard/careerExplorerSlice";
import learningRoadmapReducer from "./features/dashboard/learningRoadmapSlice";
import settingReducer from "./features/dashboard/settingSlice";
import analyticsReducer from "./features/dashboard/analyticsSlice";
import skillGapReducer from "./features/dashboard/skillGapSlice";
import dashboardReducer from "./features/dashboard/dashboardSlice";
import onBoardingReducer from "./features/onBoarding/onBoardingSlice";
import savedCareersReducer from "./features/dashboard/savedCareersSlice";
import profileReducer from "./features/dashboard/profileSlice";
import courseReducer from "./features/course/courseSlice";

import { errorMiddleware } from "./features/errorSlice/errorMiddleware";

const store = configureStore({
  reducer: {
    auth: authReducer,

    onBoarding: onBoardingReducer,

    marketTrends: marketTrendsReducer,
    careerExplorer: careerExplorerReducer,
    learningRoadmap: learningRoadmapReducer,
    course: courseReducer,
    setting: settingReducer,
    analytics: analyticsReducer,
    skillGap: skillGapReducer,
    dashboard: dashboardReducer,
    savedCareers: savedCareersReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorMiddleware),
});

export default store;

// profile
// SavedCareers
