import {error as errorModule} from './error'
// ------------------------------------
// Constants
// ------------------------------------

export const POST_LOGIN = '[USER]_POST_LOGIN';

// ------------------------------------
// Actions
// ------------------------------------

export function loginSync({ userName, token }) {
    return {
        type: POST_LOGIN,
        payload: { userName, token }
    }
}

export function login({ userName, passWord }) {
    return api.login({ userName, passWord }).then(
        token => dispatch(loginSync(userName, token)),
        error => dispatch(errorModule.errorSync(POST_LOGIN, error))
      );
}
export const actions = {
    login
}
// ------------------------------------
// Action Handlers
// ------------------------------------

const loginHandler = (state, action) => {
    const userName = action.payload.userName;
    const token = action.payload.token;
    return { ...state, userName, token };
}

const ACTION_HANDLERS = {
    [POST_LOGIN]: loginHander
}

const initialState = {
    userName: '',
}
export default function counterReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
