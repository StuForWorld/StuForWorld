import { ADDNEWUSER,DELLET } from "../content";
const Defaultdata = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },]
    // {
    //   key: '2',
    //   firstName: 'Jim',
    //   lastName: 'Green',
    //   age: 42,
    //   address: 'London No. 1 Lake Park',
    //   tags: ['loser'],
    // },
    // {
    //   key: '3',
    //   firstName: 'Joe',
    //   lastName: 'Black',
    //   age: 32,
    //   address: 'Sidney No. 1 Lake Park',
    //   tags: ['cool', 'teacher'],
    // },  
  ;
  

function counterReducer(state=Defaultdata,action){
   switch(action.type){
        case ADDNEWUSER:
            state.push(action.userNews)
            return state
        case DELLET:
            for(let i=0 ; i<state.length ; i++){
               if(state[i].key === action.id){
                
                    state.splice(i,1)
               }
            }
            console.log(state)
            return state
        default:
            return state





   }



}
export default counterReducer;