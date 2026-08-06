import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMarketTrends } from "../features/dashboard/marketTrendsSlice";
import { fetchCareerExplorer } from "../features/dashboard/careerExplorerSlice";
import { fetchLearningRoadmap } from "../features/dashboard/learningRoadmapSlice";
import { fetchSetting } from "../features/dashboard/settingSlice";
import { fetchAnalytics } from "../features/dashboard/analyticsSlice";
import { fetchSkillGap } from "../features/dashboard/skillGapSlice";
import { fetchDashboard } from "../features/dashboard/dashboardSlice";
import { fetchSavedCareers } from "../features/dashboard/savedCareersSlice";
import { fetchProfile } from "../features/dashboard/profileSlice";

function useFetch() {
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(fetchMarketTrends());
      dispatch(fetchCareerExplorer());
      dispatch(fetchLearningRoadmap());
      dispatch(fetchSetting());
      dispatch(fetchAnalytics());
      dispatch(fetchSkillGap());
      dispatch(fetchDashboard());
      dispatch(fetchSavedCareers());
      dispatch(fetchProfile());
    },
    [dispatch],
  );
}

export default useFetch;
