//src/store/reducers/index.js 中导出counter
import { combineReducers } from 'redux'
import counter from './counter'

let resucers = combineReducers({
    counter
})

export default resucers;