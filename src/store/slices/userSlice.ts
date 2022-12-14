import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TAppDispatch } from '../store';

interface IUserState {
  users: any;
  isLoading: boolean;
  errors: string;
}

const initialState: IUserState = {
  users: [],
  isLoading: true,
  errors: '',
};

export const fetchUsers = () => async (dispatch: TAppDispatch) => {
  try {
    dispatch(usersSlice.actions.usersFetching());
    const { data } = await axios.get('http://localhost:3001/users');
    dispatch(usersSlice.actions.usersFetchingSuccess(data as any));
  } catch (e) {
    dispatch(usersSlice.actions.usersFetchingError((e as Error).message));
  }
};

export const userDelete = (id: number) => async (dispatch: TAppDispatch) => {
  try {
    await axios.delete(`http://localhost:3001/users/${id}`);
    dispatch(usersSlice.actions.usersDelete(id));
  } catch (e) {
    console.log(e);
  }
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUserState>) {
      state.isLoading = false;
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errors = action.payload;
    },
    usersDelete(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user: any) => user.id !== action.payload);
    },
  },
});

export default usersSlice.reducer;
