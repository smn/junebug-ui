export const LOGIN = 'LOGIN'
export const REFRESH_CHANNELS = 'REFRESH_CHANNELS'

export const doLogin = (username, password) => {
    return {
        type: LOGIN,
        credentials: {
            username: username,
            password: password
        }
    }
};
