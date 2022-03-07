export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
    type : "LOGIN_SUCCESS",
    payload : user
});

export const loginFailed = ()=> ({
    type: "LOGIN_FAILED"
});

export const logout = ()=> ({
    type : "LOGOUT"
})

export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
  });
  
  export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
  });
  
  export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
  });
