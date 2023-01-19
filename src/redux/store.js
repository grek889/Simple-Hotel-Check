import createSagaMiddleware from "@redux-saga/core";
import {createStore, applyMiddleware, compose} from "redux"
import reducer from "./reducers/index";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadetState => createStore(
    reducer,
    preloadetState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
); 

const store = configureStore({});

sagaMiddleware.run(rootSaga)

export default store;