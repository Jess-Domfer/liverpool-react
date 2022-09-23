import { checkingCredentials } from "./authSlice"

export const chekingAutentication=(email, password)=>{
    return async( dispatch )=>{

        dispatch( checkingCredentials() );

    }
}

export const startGoogleSignIn=(email, password)=>{
    return async( dispatch )=>{

        dispatch( checkingCredentials() );

    }
}