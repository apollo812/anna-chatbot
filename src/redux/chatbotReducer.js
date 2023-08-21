import { createSlice } from "@reduxjs/toolkit";
import { openSnackBar } from "./snackBarReducer";
import { chatbotService } from "../services/chatbot.service";

export const chatbotSlice = createSlice({
    name: "chatbot",
    initialState: {
        sendUserInputState: false
    },
    reducers: {
        sendUserInputRequest: state => {
            state.sendUserInputState = true
        },
        sendUserInputSuccess: (state, action) => {
            state.sendUserInputState = false;
        },
        sendUserInputFailure : state => {
            state.sendUserInputState = false;
        },
    }
});

const {
    sendUserInputFailure, sendUserInputRequest, sendUserInputSuccess
} = chatbotSlice.actions;

export const sendUserInput = (user_input) => async (dispatch) => {
    dispatch(sendUserInputRequest());

    try {
        const payload = await chatbotService.sendUserInput({user_input});
        dispatch(sendUserInputSuccess(payload));

        return payload
    } catch (error) {
        dispatch(sendUserInputFailure());
        return false
    }
}

export default chatbotSlice.reducer;