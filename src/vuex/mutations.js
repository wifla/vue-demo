// 定义所需的 mutations
import types from './types'
const mutations ={
    [types.INCREMENT](state){
        state.count++;
    }
}
export default mutations
