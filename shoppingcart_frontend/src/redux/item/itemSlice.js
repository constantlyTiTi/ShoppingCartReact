import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getItemById= createAsyncThunk(
    'items/fetchById',
    async(itemId, thunkAPI) =>{
        const response = await axios.get(`https://localhost:44340/api/item/${itemId}`)
        .then(resp =>{return resp.data})
        .catch(error => {return error.response.data})
        
        if(response.status !== 200){
            return thunkAPI.rejectWithValue(response);
        }

        return response;
    }
)

export const postItem = createAsyncThunk(
    'item/postItem',
    async(item, token, thunkAPI) =>{
        const response = await axios.post('https://localhost:44340/api​/item​/post-item',{
           headers:{
               token: token
           },
           item:item
        })
        .then(resp => {return resp.data})
        .catch(error => {return error.response.data})

        if(response.status !== 200){
            return thunkAPI.rejectWithValue(response);
        }

        return response;
    }
)

const itemSlice = createSlice({
    name:'item',
    initialState:{item:{},loading:true, error:[]},
    reducers:{
        itemAction:(state, action)=>{
            state.item = action.payload.item
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(getItemById.fulfilled,(state,action)=>{
            state.item = action.payload.item;
            state.loading = false;
            state.error = [];
        });

        builder.addCase(getItemById.pending,(state,action)=>{
            state.item = {};
            state.loading = true;
            state.error = [];
        });

        builder.addCase(getItemById.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(postItem.fulfilled,(state,action)=>{
            state.loading = false;
            state.error = [];
        });

        builder.addCase(postItem.pending,(state,action)=>{
            state.loading = true;
            state.error = [];
        });

        builder.addCase(postItem.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export const {itemAction} = itemSlice.actions 
export const itemReducer =  itemSlice.reducer
