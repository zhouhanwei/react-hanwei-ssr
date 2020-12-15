import { createStore, applyMiddleware } from 'redux'
import saga from 'redux-saga';
import logger from 'redux-logger';
import reducers from './reducers/index'
// 注意：因为服务端和客户端store不一样，所以分别创建，后期会看到代码不同处理
export function getServerStore () {
    return createStore(
        reducers,
        applyMiddleware(saga(), logger)
    )
}


export function getClientStore () {
    return createStore(
        reducers,
        applyMiddleware(saga(), logger)
    )
}
