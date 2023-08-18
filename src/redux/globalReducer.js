import { createSlice } from "@reduxjs/toolkit";
import { openSnackBar } from "./snackBarReducer";

export const globalSlice = createSlice({
    name: "global",
    initialState: {
        language: "en",
        setLanguageState: false,
        setLoadingState: false,
        loading: false,
        mode: "dark",
        setModeState: false
    },
    reducers: {
        setLanguageRequest: state => {
            state.setLanguageState = true
        },
        setLanguageSuccess: (state, action) => {
            state.setLanguageState = false;
            state.language = action.payload;
        },
        setLanguageFailed: (state, action) => {
            state.setLanguageState = false;
        },
        setLoadingRequest: state => {
            state.setLoadingState = true
        },
        setLoadingSuccess: (state, action) => {
            state.setLoadingState = false;
            state.loading = action.payload;
        },
        setLoadingFailed: (state, action) => {
            state.setLoadingState = false;
        },
        setModeRequest: state => {
            state.setModeState = true
        },
        setModeSuccess: (state, action) => {
            state.setModeState = false;
            state.mode = action.payload;
        },
        setModeFailed: (state, action) => {
            state.setModeState = false;
        }
    }
});

const {
    setLanguageFailed, setLanguageRequest, setLanguageSuccess,
    setLoadingFailed, setLoadingRequest, setLoadingSuccess,
    setModeFailed, setModeRequest, setModeSuccess
} = globalSlice.actions;

export const setCurrentLanguage = (lang) => async (dispatch) => {

    dispatch(setLanguageRequest());

    try {
        dispatch(setLanguageSuccess(lang));
    } catch (error) {
        dispatch(setLanguageFailed());
        dispatch(openSnackBar({ message: error["message"], status: 'error' }));
        throw new Error(error);
    }
}

export const setLoading = (state) => async (dispatch) => {

    dispatch(setLoadingRequest());

    try {
        dispatch(setLoadingSuccess(state));
    } catch (error) {
        dispatch(setLoadingFailed());
        dispatch(openSnackBar({ message: error["message"], status: 'error' }));
        throw new Error(error);
    }
}

export const setMode = (state) => async (dispatch) => {

    dispatch(setModeRequest());

    try {
        dispatch(setModeSuccess(state));
    } catch (error) {
        dispatch(setModeFailed());
        dispatch(openSnackBar({ message: error["message"], status: 'error' }));
        throw new Error(error);
    }
}

export default globalSlice.reducer;