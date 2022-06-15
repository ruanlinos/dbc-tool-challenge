import { call, CallEffect, PutEffect, put, takeLatest } from "@redux-saga/core/effects";
import axios from "axios";
import { toolActions, ToolState } from "./duck";

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/ditto'
})

const fetchTools = async () => {
  const response = await api.get('')
  return response.data
}

function* load(): Generator<CallEffect<ToolState> | PutEffect, void, ToolState> {
  try {
    const response = yield call(fetchTools)
    yield put(toolActions.set(response))
  } catch (error) {
    // do something
  }
}

export default function* toolSaga(): Generator {
  yield takeLatest(toolActions.set.type, () => {})
}
