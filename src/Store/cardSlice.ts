import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    card: {
        cardNumber: '', 
        cardHolder: '', 
        cardDate: '', 
        cardCVV: ''
    },
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        updateCardValues: (state, action) => {
            state.card[action.payload.field] = action.payload.value;
            console.log(state);
            
        },
    },
});

export const { updateCardValues } = cardSlice.actions;

export default cardSlice.reducer;