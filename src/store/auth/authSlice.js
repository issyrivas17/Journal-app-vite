import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
  status: 'cheking', // not-authenticated,'authenticateda' 
  uid: null,
  email: null,
  displayName: null,
  photoURL: null, 
  errorMessage: null, 
 },
    reducers: {
    login : (state,action) => {

    },

    logout : (state,payload) => {

    },

    checkingCredentials : (state) => {

    }
  } 
});

export const { login,logout, checkingCredentials} = authSlice.actions; 