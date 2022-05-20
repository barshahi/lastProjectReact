import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const store = configureStore({
  reducer: reducer,
});

console.log("Store : ",store)

export default store;




// import { configureStore } from "@reduxjs/toolkit";
// import { reducer } from "./reducer";
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
// import {
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//     key: 'root',
//     storage,
// };
// console.log("Store , ",reducer)

// const reducers = combineReducers({ todos: reducer});
// // const reducers = combineReducers({ counter: counterSlice });
// const persistedReducer = persistReducer(persistConfig, reducers);



// const persistor = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });


// const store = configureStore({
//     reducer: reducer,
//   });
    
//     // const persistor = persistStore(store);
    
//     export default { store, persistor };