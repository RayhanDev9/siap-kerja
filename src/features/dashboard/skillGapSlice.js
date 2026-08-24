import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  skillGapData: null,
  marketDemandData: [],
  roleSkillGroups: [],
  dataChart: [],
  overallReadiness: [],
  isLoading: false,
  error: null,
};

export const fetchSkillGap = createAsyncThunk(
  "skillGap/fetchSkillGap",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/user/skill-gap`, {
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

const skillGapSlice = createSlice({
  name: "skillGap",
  initialState,
  reducers: {
    selectAllData(state, action) {
      const key = action.payload;
      const rawData = state.skillGapData?.data;

      if (rawData && key) {
        state.marketDemandData = rawData.marketDemandData?.[key] || [];
        state.roleSkillGroups = rawData.roleSkillGroups?.[key] || [];
        state.dataChart = rawData.dataChart?.[key] || [];
        state.overallReadiness = rawData.overallReadiness?.[key] || [];
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchSkillGap.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSkillGap.fulfilled, (state, action) => {
        state.isLoading = false;
        state.skillGapData = action.payload;
      })
      .addCase(fetchSkillGap.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { selectAllData } = skillGapSlice.actions;
export default skillGapSlice.reducer;
