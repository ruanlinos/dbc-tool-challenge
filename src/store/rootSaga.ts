import {all} from 'redux-saga/effects'
import toolSaga from './tools/saga'

export default function* rootSaga(): Generator {
  yield all([toolSaga()])
}