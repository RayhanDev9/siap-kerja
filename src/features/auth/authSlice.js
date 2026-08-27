import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://spotted-stoke-flattered.ngrok-free.dev/api/v1";

// Helper membaca safe localStorage
const getStoredData = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

const initialState = {
  user: getStoredData("user"),
  token: localStorage.getItem("token") || null,
  isLoading: false,
  error: null,
};

// ==========================================
// REGISTER THUNK
// ==========================================
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async function (userData, thunkAPI) {
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (!res.ok) {
        // Ambil string pesan error agar tidak menyebabkan Minified React Error #31
        const errorMsg =
          data.message ||
          (data.errors ? Object.values(data.errors).flat().join(", ") : "Gagal mendaftar");
        return thunkAPI.rejectWithValue(errorMsg);
      }

      // Normalisasi payload response
      const token = data.access_token || (data.data && data.data.access_token);
      const user = data.user || (data.data && data.data.user);

      if (token) localStorage.setItem("token", token);
      // if (user) localStorage.setItem("user", JSON.stringify(user));

      return { user, access_token: token };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Terjadi kesalahan koneksi");
    }
  }
);

// ==========================================
// LOGIN THUNK
// ==========================================
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async function (userData, thunkAPI) {
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (!res.ok) {
        const errorMsg = data.message || "Email atau password salah.";
        return thunkAPI.rejectWithValue(errorMsg);
      }

      const token = (data.data && data.data.access_token) || data.access_token;
      const user = (data.data && data.data.user) || data.user;

      if (token) localStorage.setItem("token", token);
      if (user) localStorage.setItem("user", JSON.stringify(user));

      return { user, access_token: token };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || "Terjadi kesalahan koneksi");
    }
  }
);

// ==========================================
// LOGOUT THUNK
// ==========================================
export const logoutUserThunk = createAsyncThunk(
  "auth/logoutUserThunk",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${BASE_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "ngrok-skip-browser-warning": "true",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        return thunkAPI.rejectWithValue(data.message || "Gagal melakukan logout");
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || "Terjadi kesalahan koneksi");
    }
  }
);

// ==========================================
// SLICE DEFINITION
// ==========================================
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) =>
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.access_token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.access_token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Logout
      .addCase(logoutUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUserThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.error = null;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.user = null;
        state.token = null;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }),
});

export const { clearAuthError, logoutUser } = authSlice.actions;
export default authSlice.reducer;