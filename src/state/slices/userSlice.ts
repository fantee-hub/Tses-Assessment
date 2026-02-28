import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    login: (state, action: PayloadAction<Omit<User, "isAuthenticated">>) => {
      state.user = { ...action.payload, isAuthenticated: true };
    },

    logout: (state) => {
      state.user = null;
    },

    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, login, logout, clearUser } = userSlice.actions;

export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectIsAuthenticated = (state: { user: UserState }) =>
  state.user.user?.isAuthenticated ?? false;

export default userSlice.reducer;
