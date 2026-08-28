import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  isError: null,
  passwordSuccess: false,
};

// 1. FETCH PROFILE
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        `https://spotted-stoke-flattered.ngrok-free.dev/api/v1/user/profile`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "X-Requested-With": "XMLHttpRequest", //
            "ngrok-skip-browser-warning": "true",
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        return thunkAPI.rejectWithValue(
          data.message || "Profile tidak ditemukan datanya",
        );
      }

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// 2. UPDATE PROFILE
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async function (payload, thunkAPI) {
    // Ubah param jadi 'payload' agar lebih umum
    const token = localStorage.getItem("token");

    // Jika token tidak ada, langsung tolak dari frontend
    if (!token) {
      return thunkAPI.rejectWithValue(
        "Sesi telah habis, silakan login kembali.",
      );
    }

    // 🚀 CEK TIPE DATA: Apakah ini FormData atau Object JSON biasa?
    const isFormData = payload instanceof FormData;

    // Susun header bawaan
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "X-Requested-With": "XMLHttpRequest",
      "ngrok-skip-browser-warning": "true",
    };

    // 🚀 JIKA BUKAN FORMDATA, WAJIB TAMBAHKAN CONTENT-TYPE JSON
    if (!isFormData) {
      headers["Content-Type"] = "application/json";
    }

    try {
      const res = await fetch(
        `https://spotted-stoke-flattered.ngrok-free.dev/api/v1/user/profile`,
        {
          method: "PUT", // PUT cocok untuk update email
          headers: headers,
          // 🚀 UBAH KE STRING JIKA BUKAN FORMDATA
          body: isFormData ? payload : JSON.stringify(payload),
        },
      );

      // Tangani error 401 Unauthorized secara manual
      if (res.status === 401) {
        return thunkAPI.rejectWithValue(
          "Sesi kedaluwarsa. Silakan login ulang.",
        );
      }

      const data = await res.json();

      if (!res.ok) {
        return thunkAPI.rejectWithValue(
          data.message || "Gagal memperbarui profil",
        );
      }

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// 3. UPDATE PASSWORD
export const updatePassword = createAsyncThunk(
  "profile/updatePassword",
  async function (payload, thunkAPI) {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(
        `https://spotted-stoke-flattered.ngrok-free.dev/api/v1/user/password`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "X-Requested-With": "XMLHttpRequest", //
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        return thunkAPI.rejectWithValue(
          data.message || "Gagal mengganti password",
        );
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfileState(state) {
      state.isError = null;
      state.passwordSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // FETCH PROFILE
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })

      // UPDATE PROFILE
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = {
          ...state.data,
          ...action.payload,
        };
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })

      // UPDATE PASSWORD
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
        state.passwordSuccess = false;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.isLoading = false;
        state.passwordSuccess = true;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
        state.passwordSuccess = false;
      });
  },
});

export const { clearProfileState } = profileSlice.actions;
export default profileSlice.reducer;
