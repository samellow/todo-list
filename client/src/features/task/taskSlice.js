import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    tasks: [],
    status: 'idle',
    error: null
}


const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
})


export default taskSlice.reducer