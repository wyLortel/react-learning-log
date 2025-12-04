type UserState = {
    name : string;
}

type UserAction =
| {type:'SET_USER',payload:string}
| {type:"RESET_USER"}

export function userReducer(state:UserState,action:UserAction){
    switch(action.type){
        case 'SET_USER':
            return{...state,name:action.payload};
    
    case 'RESET_USER':
        return{name:""};
    default:
        throw new Error('Unhandled action type');
    }
}