import {createStore} from "redux"
import noteReducer from "../reducers/noteReducer"



let Store= createStore(noteReducer);

export default Store;