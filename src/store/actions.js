// import * as  types from './types'

// export default{
//   'increment':({commit})=>{
//       commit(types.INCREMENT);

//   },
//   'decrement':({commit})=>{
//       commit(types.DECREMENT);

//   },
//   'oddAdd':({commit,state})=>{
      
//       if(state.mutations.count%2==0){
//           commit(types.INCREMENT);

//       }
//   }
// }

import * as types from './types'

export default{
    'increment':({commit})=>{
        commit(types.INCREMENT);
    },
    'decrement':({commit})=>{
        commit(types.DECREMENT);

    },
    'oddAdd':({commit,state})=>{
        if(state.mutations.count%2==0){
            commit(types.INCREMENT);
            
        }
    }
}