import { configureStore } from '@reduxjs/toolkit'
//import authenRedux from './auth/AuthenSlice'
import {itemsReducer} from './item/itemsSlice'
import {itemSlice} from './item/itemSlice'

export default configureStore({
  reducer: {
    items: itemsReducer,
    item: itemSlice
  }
})

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// const reducer = combineReducers({
//   items: itemsReducer
// }
// )
// // applyMiddleware supercharges createStore with middleware:

//   const composedEnhancers = composeWithDevTools(applyMiddleware(thunk))
// export default createStore(reducer, composedEnhancers)