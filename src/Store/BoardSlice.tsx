import { createSlice } from "@reduxjs/toolkit";

interface BoardState {
    value: string[]
}

const initialState:BoardState  = {
    value:[],
}

const BoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        addBoard: (state , action) => {
            state.value.push(action.payload)
        },
    }
})

export const { addBoard } = BoardSlice.actions
export default BoardSlice.reducer