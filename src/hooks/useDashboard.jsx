import { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMarketTrends } from "../features/auth/dashboard/MarketTrendsSlice";

function useDashboard() {
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(fetchMarketTrends());
    },
    [dispatch],
  );
}

export default useDashboard;
