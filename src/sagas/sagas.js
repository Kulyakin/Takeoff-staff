import {put, call, takeEvery} from 'redux-saga/effects'

import { 
    USERS_REQUESTED, 
    USERS_SUCCEEDED, 
    USERS_FAILED 
} from "../actions/actions";
import { getUsers2 } from '../api/users'






function * fetchUsers(action) {
    try {
        const users = yield call(getUsers2)   /// эффект который запускает какую-то функцию
        console.log(users)
        yield put({ //  аналог диспатч
            type: USERS_SUCCEEDED,
            payload: {
                data: users
            }
        })
    } catch(e) {
        yield put({
            type: USERS_FAILED,
            payload: {
                message: e.message,
            }
        })
    }

}


export function * saga() {
    yield takeEvery(USERS_REQUESTED, fetchUsers)

}