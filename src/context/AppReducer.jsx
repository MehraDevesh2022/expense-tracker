export default (state , action) =>{
    switch(action.type){
       case 'Add_Transection':
        return {
            ...state,
            transection : [action.payLoad , ...state.transection]
        } 
        case  'Delete_Transection'  :
            return{
                ...state,
              transection : state.transection.filter(obj => obj.id != action.payLoad)
            } 
       default :
       return state;
    }
}