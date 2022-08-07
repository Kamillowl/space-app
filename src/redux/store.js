import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas/saga'
import myReducer from "./reducers/myReducer";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        myReducer
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ serializableCheck: false }),
        sagaMiddleware
    ]
}) //initialState

// then run the saga
sagaMiddleware.run(rootSaga)

export default store
