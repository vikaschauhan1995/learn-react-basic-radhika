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
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

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

export default userSlice.reducer;