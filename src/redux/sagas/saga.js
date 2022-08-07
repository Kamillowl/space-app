import { call, all, put, takeEvery } from 'redux-saga/effects'
import { get } from './apiCalls'
import exampleSaga from "./exampleSaga";

function* getPhoto() {
    let dogPhoto = yield call(get, 'https://dog.ceo/api/breeds/image/random');
    if (dogPhoto.status = 'success')
    {
        const arr = dogPhoto.message.split('/');
        let indBreed = arr.findIndex(el => el === 'breeds');
        if (indBreed && indBreed > 0) dogPhoto = { ...dogPhoto, breed: arr[indBreed + 1]}
        yield put({type: 'ADD_DOG_URL', payLoad: dogPhoto})
    } else {
        yield put({type: 'DOG_URL_FAILED', payLoad: dogPhoto})
    }
}
function* callGetPhoto() {
    yield takeEvery('GET_DOG_PHOTO', getPhoto)
}

export default function* rootSaga() {
    yield all([callGetPhoto(), exampleSaga()])
}
