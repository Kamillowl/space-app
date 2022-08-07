import { call, all, put, takeEvery } from 'redux-saga/effects'

export const fetchApi = async (uri, method, body) => {
    let response

    try {
        response = await fetch(uri, {
            method,
            body: JSON.stringify(body)
        })
        if (!response.ok) {
            throw new Error('response not OK')
        }
    } catch (error) {
        console.log('Fetch error', uri, error)
        return { error: true }
    }

    try {
        return await response.json()
    } catch (error) {
        // logg at feil inntraff
        console.log('Fetch JSON error', uri, error)

        return { error: true }
    }
}

export const get = (uri) => fetchApi(uri, 'get')

export const post = (uri, data) => fetchApi(uri, 'post', data)


function* getPhoto() {
    let dogPhoto = yield call(get, 'https://dog.ceo/api/breeds/image/random');
    if (dogPhoto.status = 'success')
    {
        console.log(dogPhoto)
        yield put({type: 'ADD_DOG_URL', payLoad: dogPhoto})
    } else {
        console.log(dogPhoto)
        yield put({type: 'DOG_URL_FAILED', payLoad: dogPhoto})
    }
}
function* logOutUser() {
    yield takeEvery('GET_DOG_PHOTO', getPhoto)
}

export default function* rootSaga() {
    yield all([logOutUser()])
}
