export const LOGIN_USER_HANDLER = "LOGIN_USER_HANDLER";
export const LOGOUT_USER_HANDLER = "LOGOUT_USER_HANDLER";

export function authenticatedUser(id){
    return{
        type: LOGIN_USER_HANDLER,
        id
    };
};

export function logoutUser(){
    return{
        type: LOGOUT_USER_HANDLER,
    };
};