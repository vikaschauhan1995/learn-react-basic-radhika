import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchUser = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response?.data; 
});


const initialState = {
    users: [],
    loading: false,
    error: false,
    count: 0
}
export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        incrementCount: (state, action) => {
            state.count = state.count + 1;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUser.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.users = action?.payload;
            state.loading = false;
        })
        .addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.payload?.error;
        })
    }
});

export const { incrementCount } = userSlice.actions;

export default userSlice.reducer;