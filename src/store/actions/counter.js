// 计数器的基本配置
import * as types from '../action-types'
export default {
    increment (number) {
        return {
            type: types.INCREMENT,
            number  // 改变值
        }
    }
}