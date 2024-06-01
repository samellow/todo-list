import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: [],
    status: 'idle',
    error: null
}

export const createTask = createAsyncThunk('user/createTask', async(task, {rejectWithValue})=>{
    try {
        const res = await fetch('api/todo/task/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const data = await res.json()
        console.log(data)
        if(data.errors) {

            return  rejectWithValue(data.errors)
            
        }else{
            return data
        }
    } catch (error) {
        rejectWithValue({general: 'an error occurred'})
    }

})

export const getTasks = createAsyncThunk('user/getTasks', async() => {
    const res = await fetch('api/todo/tasks', {
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
    reducers: {
        clearErrors :(state)=>{
                state.error = null
            }
        
    },
    extraReducers: (builder) => {
        builder 
            .addCase(getTasks.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(getTasks.fulfilled, (state, action)=>{
                state.status ='succeeded'
                state.tasks = action.payload
                console.log(action.payload)
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
                state.error = null
            })
            .addCase(createTask.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.payload || action.error.message
            })
    } 
})

export const { clearErrors } = taskSlice.actions

export const selectAllTasks = (state) => state.task.tasks
export const selectTaskError = (state) => state.task.error;
export const selectTaskStatus = (state) => state.task.status

export default taskSlice.reducer