import { call, all, put, takeEvery } from 'redux-saga/effects'
import { get } from './apiCalls'

function* doTest() {
    console.log('just a test call. This file is just to show how to root several saga-files into one ref.')
}
function* callTest() {
    yield takeEvery('DO_TEST', doTest)
}

export default function* exampleSaga() {
    yield all([callTest()])
}
