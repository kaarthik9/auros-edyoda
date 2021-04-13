import {createStore} from "redux"
// import {composeWithDevTools} from "react-devtools-extension"
import rootReducer from "./rootReducer" 

const store = createStore(rootReducer)

export default store;