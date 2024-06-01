import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from 'react-hot-toast'


const initialState = {
    user: null,
    status: 'idle',
    error: null,
    token: null
}

export const signup = createAsyncThunk('user/signup', async(userData) => {
    try {
        const res = await fetch('api/todo/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        const data = await res.json()
        if(data.user) {
            toast.success('signup successful')
            
        }else if (data.errors) {
            Object.entries(data.errors).forEach(([key, value]) => {
                if(value){
                    toast.error(value)
                }
            })
        }
        return data
    } catch (error) {
        console.log(error)
    }
})


export const login = createAsyncThunk('user/login', async(userData) => {
    try {
        const res = await fetch('api/todo/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        const data = await res.json()
        console.log(data)
        if(data.user) {
            toast.success('login successful')
            
        }else if (data.errors) {
            Object.entries(data.errors).forEach(([key, value]) => {
                if(value){
                    toast.error(value)
                }
            })
        }
        return data
    } catch (error) {
        console.log(error)
    }
})




export const logout = createAsyncThunk('user/logout', async() => {
    try {
        const res = await fetch('api/todo/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        if(data) {
            toast.success('logout successful')
        }
        return data
    } catch (error) {
        console.log(error)
    }
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(signup.fulfilled, (state, action)=>{
                state.status ='succeeded'
                state.user = action.payload.user
                state.token = action.payload.user.token
            })
            .addCase(signup.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(login.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action)=>{
                state.status ='succeeded'
                state.user = action.payload.user
                state.token = action.payload.user.token
            })
            .addCase(login.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(logout.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(logout.fulfilled, (state)=>{
                state.status ='succeeded'
                state.user = null
                state.token = null
            })
            .addCase(logout.rejected, (state, action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectUser = ((state) => state.user.user)
export default userSlice.reducer 