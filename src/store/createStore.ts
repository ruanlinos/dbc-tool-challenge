/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware, Reducer, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { SagaMiddleware } from 'redux-saga';
import { History } from 'history';

const isDevelopMode = process.env.NODE_ENV === 'development';

export default (reducers: Reducer, sagaMiddleware: SagaMiddleware, history: History): Store => {
  if (isDevelopMode) {
    const storeEnhacer = composeWithDevTools({ trace: true, traceLimit: 30 })(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    );
    return createStore(reducers, storeEnhacer);
  }
  return createStore(reducers, applyMiddleware(sagaMiddleware, routerMiddleware(history)));
};
