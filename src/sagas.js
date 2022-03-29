import { takeEvery, call, put } from 'redux-saga/effects'
import Axios from 'axios'
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions'

function usersFetch() {
    return Axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
}
function addUsers(users) {
    users.map(user => {
        let body = {
            description: user.name,
            isCompleted: false
        }
        Axios.post('http://localhost:8000/new', body).then(res => res)
    })
    return users
    // return Axios.post('http://localhost:8000/new', body).then(res => res)
}

function* workGetUserFetch() {

    const users = yield call(usersFetch)
    const xx = yield call(addUsers(users))
    console.log(xx)
    yield put({ type: GET_USERS_SUCCESS, users: users })
}

function* mySaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUserFetch)
}

export default mySaga