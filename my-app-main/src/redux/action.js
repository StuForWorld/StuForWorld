import { ADDNEWUSER } from "./content"
import { DELLET } from "./content"


export function addNewUser(userNews){
   return{
    type:ADDNEWUSER,
    userNews


   }

}
export function needDelete(id){
    return {
        type:DELLET,
        id
    }
}