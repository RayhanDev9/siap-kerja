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

const store = configureStore({
  reducer: {
    auth: authReducer,
    marketTrends: marketTrendsReducer,
    careerExplorer: careerExplorerReducer,
    learningRoadmap: learningRoadmapReducer,
    setting: settingReducer,
    analytics: analyticsReducer,
    skillGap: skillGapReducer,
    dashboard: dashboardReducer,
    onBoarding: onBoardingReducer,
    savedCareers: savedCareersReducer,
    profile: profileReducer,
  },
});

export default store;

// profile
// SavedCareers
