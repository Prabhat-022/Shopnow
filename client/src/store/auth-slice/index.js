import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated :false,
    isLoading:false,
    user:null,
    error:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const {setUser, setIsAuthenticated, setError, setIsLoading } = authSlice.actions
export default authSlice.reducer

