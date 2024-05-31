import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    tasks: [],
    status: 'idle',
    error: null
}

export const createTask = createAsyncThunk('user/createTask', async(task)=>{
    try {
        const res = await fetch('api/todo/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        
    }

})

export const getTasks = createAsyncThunk('user/getTasks', async() => {
    const res =await fetch('api/todo/tasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()
    console.log(data)
    return data
})


const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(getTasks.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(getTasks.fulfilled, (state, action)=>{
                state.status ='succeeded'
                state.tasks = action.payload.tasks
            })
            .addCase(getTasks.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(createTask.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(createTask.fulfilled, (state, action)=>{
                state.status ='succeeded'
                state.tasks = [...state.tasks, action.payload.task]
            })
            .addCase(createTask.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
    } 
})

export const selectAllTasks = ((state) => state.task.tasks)

export default taskSlice.reducer