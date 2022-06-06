import { ADDTASK, EDITTASK,DELETE_TASK,COMPLETE_TASK, FILTER_TASK } from "./typeAction"



const init ={
    TASK:[
        {
            id : Math.random(),
            description : "wake up",
            completed : true
        
        },
        {
            id : Math.random(),
            description : "make a coffee",
            completed : false
        
        },
        {
            id : Math.random(),
            description : "go out",
            completed : false
        
        }
    ],
    isFiltered:false,
};

const reducer =(state=init,{type,payload})=>{
    switch (type) {

        case ADDTASK:
            return{ ...state,TASK:[...state.TASK,payload] }

    case EDITTASK:
        return {...state,TASK:state.TASK.map((el)=>el.id==payload.id? payload : el)};
    
    case DELETE_TASK:
      return {...state,TASK:state.TASK.filter((el) => el.id !== payload)};
    
      case FILTER_TASK:
          return {
              ...state,isFiltered:!state.isFiltered
          }
      case COMPLETE_TASK:
      return{ ...state,TASK:state.TASK.map((el) => el.id === payload ? { ...el, completed: !el.completed } : el  )};
    
      default:
           return state
    }
}

export default reducer