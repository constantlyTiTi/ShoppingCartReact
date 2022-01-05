import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const login = createAsyncThunk(
    'auth/login',
    async (loginUserState, thunkAPI) => {
        const response = await axios.post(`https://localhost:44340/api/home/login`, loginUserState, {
            headers: {
                "Content-Type": "Application/json"
            }
        }).catch(error => {
            return error.response;
        });

        if(response.status !== 200){
            return thunkAPI.rejectWithValue(response);
        }

        return response;
    }

)

export const register = createAsyncThunk(
    'auth/register',
    async (registerUserState, thunkAPI) =>{
        const response = axios.post(`https://localhost:44340/api/home/Register`, registerUserState,{
            headers:{
                "Content-Type": "Application/json"
            }
        }).catch(error => {
            return error.response;
        })

        if(response.status !== 200){
            return thunkAPI.rejectWithValue(response);
        }

        return response;
    }

)

const athenSlice = createSlice({
    name:'authication',
    initialState:{
        user:{},
        token:"",
        loading: true,
        errors:[]
    },
    reducers:{
        setUser:(state,action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) =>(
        // builder.addCase(register.fulfilled, (state, action) => {
		// 	// Add user to the state array
		// 	state.user = action.payload.data
		// 	state.token = action.payload.data.token
		// 	state.loading = false
		// 	state.errors = []
		// }),
		// builder.addCase(register.rejected, (state, action) => {
		// 	// Add user to the state array
		// 	state.errors = action.payload.data.errors
		// 	state.loading = false
		// }),
		// builder.addCase(register.pending, (state) => {
		// 	// Add user to the state array
		// 	state.loading = true
		// }),
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.data
			state.token = action.payload.data.token
			state.loading = false
			state.errors = []
		}),
		builder.addCase(login.pending, (state) => {
			state.loading = true
		}),
		builder.addCase(login.rejected, (state, action) => {
			// Add user to the state array
			state.errors = action.payload.data.errors
			state.loading = false
		})
    )
})

export const {setUser} = athenSlice.actions 
export const userReducer =  athenSlice.reducer