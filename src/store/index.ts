import createSagaMiddleware from "redux-saga";
import createStore from "./createStore";
import rootReducer from "./rootReducer";
import history from "./history";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import rootSaga from "./rootSaga";
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(persistReducer({key: 'store', storage },rootReducer), sagaMiddleware, history);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;

export {store, persistor}