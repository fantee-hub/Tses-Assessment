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
  user: {
    id: "1",
    name: "Madison Greg",
    email: "madison.reertr@soludesk.com",
    isAuthenticated: true,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
