import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { click: false };

const menuSlice = createSlice({
    name: 'click',
    initialState: initialState,
    reducers: {
        setShow(state) {
            state.click = !state.click;
        }
    }
});

const store = configureStore({
    reducer: {
        showMenu: menuSlice.reducer
    }
});

export const { setShow } = menuSlice.actions;

export default store;
