import { LOGIN_USER_HANDLER,  LOGOUT_USER_HANDLER} from "../Actions/authUsers.js";

export default function authorizeUser(state = null, action){
    switch(action.type) {
        case LOGIN_USER_HANDLER:
            return action.id;

    case LOGOUT_USER_HANDLER:
        return null;

        default:
            return state;
    };
};