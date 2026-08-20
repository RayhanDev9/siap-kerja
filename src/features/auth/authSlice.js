import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("token");
const userData = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: userData ? userData : null,
  token: userToken ? userToken : null,
  isLoading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async function (userData, thunkAPI) {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (!res.ok) {
        return thunkAPI.rejectWithValue(data);
      }

      // 2. SIMPAN KE LOCAL STORAGE JIKA SUKSES (Ditambahkan pengecekan untuk mencegah undefined)
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async function (userData, thunkAPI) {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true", // <-- Tambahkan baris ini
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (!res.ok) {
        const errorMessage = data.message || "Email atau password salah.";
        return thunkAPI.rejectWithValue(errorMessage);
      }
      // 2. SIMPAN KE LOCAL STORAGE JIKA SUKSES (Ditambahkan pengecekan untuk mencegah undefined)
      if (data.data && data.data.access_token) {
        localStorage.setItem("token", data.data.access_token);
      }
      if (data.data && data.data.user) {
        localStorage.setItem("user", JSON.stringify(data.data.user));
      }
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const logoutUserThunk = createAsyncThunk(
  "auth/logoutUserThunk",
  async function (_, thunkAPI) {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/auth/logout`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        return thunkAPI.rejectWithValue(
          data.message || "Gagal melakukan logout",
        );
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder

      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Diperbaiki: menggunakan 1 sama dengan (=)
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.access_token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Diperbaiki: ditambahkan 'action.' di depannya
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

        // if(action.payload)
        state.error = action.payload;
      })

      // Logout
      .addCase(logoutUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUserThunk.fulfilled, (state, action) => {
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

// Diperbaiki: Menambahkan export agar bisa dipakai di tempat lain
// export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
