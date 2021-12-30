import axios from 'axios';
//pure redux
const redux = require('redux')
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

//create action
const GET_ITEMS_REQUEST = 'Get_Items';
const GET_ITEMS_SUCCESS = 'Get_Items_Suc';
const GET_ITEMS_FAILURE = 'Get_Items_Fail';

const getItems = () => {
    return {
        type: GET_ITEMS_REQUEST
    }
}

const getItemsSuc = (itemsInfor) => {
    return {
        type: GET_ITEMS_SUCCESS,
        payload: itemsInfor
    }
}

const getItemsFail = (err) => {
    return {
        type: GET_ITEMS_FAILURE,
        payload: err
    }
}


//create define state
const initialState = {
    items: [],
    paginate:{},
    loading: false,
    error: ''
}

//create reducer
export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ITEMS_SUCCESS:
            return {
                loading: false,
                items: action.payload.items,
                paginate:action.payload.paginate,
                error:''
            }
        case GET_ITEMS_FAILURE:
            return {
                loading: false,
                error: action.payload,
                items:[],
                paginate:{}
            }
        default: return state;
    }
}

export const fetchItems = ()=>(dispatch) =>{
    return function(dispatch){
        //set loading to true
        dispatch(getItems())
        //fetch data
        axios.get('https://localhost:44340/api/item/all-item')
        .then(response =>{
            const itemsInfor = {
                items: response.data.items,
                paginate: response.data.paginate
            }
            dispatch(getItemsSuc(itemsInfor))
        })
        .catch(error=>{
            dispatch(getItemsFail(error.message))
        })
    }
}
