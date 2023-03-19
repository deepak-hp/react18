import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})

export default store;

/**
 * create Store
 *  - configureStore() - rtk
 * 
 * Provide my store to app
 *  <Provider store= {store}> - import from react-redux
 * 
 * Slice
 *  - createSlice( - rtk
 *  {
 *      name: "",
 *      initialState: {},
 *      reducers: {
 *          add: ()=>{},
 *          remove: ()=> {}
 *          ...
 *      }
 *  })
 * export const {} = cartSlice.actions;
 * export default cartSlice.reducer;
 * 
 * put that Slice into store
 * 
 *      -configureStore({
 *          reducer: {
 *              cart: cartSlice,
 *              user: userSlice,
 *          }
 *      })
 * 
 */