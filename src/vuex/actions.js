import types from './types'
const actions = {
	[types.INCREMENT]({commit}){
	    commit(types.INCREMENT)
	}
}
export default actions;