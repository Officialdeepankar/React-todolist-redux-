const Initialstate={
    List:[]
}
export function handlereducer(state=Initialstate,action)
{
      switch(action.type)
      {
        case "add_to_cart":
            
            return{
                ...state,
                List:[
                    ...state.List,
                    {
                      Id:action.payload.id,
                      data:action.payload.data

                    }
                ]
                
            }
        case "delete_to_cart":
            console.warn("state in delete_to_cart",state)
            console.warn("purani list",state.List)
            const newlist=state.List.filter((ele)=>ele.Id!==action.Id)
            console.warn("nayi list",newlist)
            return{
                ...state,
                List:newlist
            }
       
     default:
        return state;

      }
}