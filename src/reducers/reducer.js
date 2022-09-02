import { USERS_REQUESTED } from "../actions/actions";


export const reducer = (
    state = {
        users: []
    }, 
    action
) => {
    switch(action.type) {
        case USERS_REQUESTED: {
            const users = action.payload
            console.log(users)
            return {
                ...state,
        
            }
        }
        default: {
            return state
        }
    }
}