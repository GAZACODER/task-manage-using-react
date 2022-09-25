import { configureStore } from "@reduxjs/toolkit";
import boardreduce from "./BoardSlice"


export const store = configureStore({
    reducer: {
        boards: boardreduce, 
      

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch