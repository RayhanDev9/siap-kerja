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

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // 1. Tunggu sampai profile selesai di-fetch dan masuk ke Redux
        await dispatch(fetchProfile()).unwrap();

        // 2. Setelah profile aman, eksekusi API lainnya secara paralel
        dispatch(fetchMarketTrends());
        dispatch(fetchLearningRoadmap());
        dispatch(fetchAnalytics());
        dispatch(fetchSkillGap());
        dispatch(fetchDashboard());
      } catch (error) {
        console.error("Gagal mengambil data profil:", error);
      }
    };

    fetchInitialData();
  }, [dispatch]);
}

export default useFetch;
