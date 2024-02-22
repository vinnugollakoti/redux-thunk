import { applyMiddleware, legacy_createStore } from "redux"
import reduser from './reduser'
import { thunk } from "redux-thunk"
const store=legacy_createStore(reduser,applyMiddleware(thunk))
export default store