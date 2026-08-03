import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import marketTrendsReducer from "./features/auth/dashboard/MarketTrendsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    marketTrends: marketTrendsReducer,
  },
});

export default store;
