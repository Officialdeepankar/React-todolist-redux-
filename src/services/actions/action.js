export function Add_to_cart(data) 
{
    console.warn("action data",data)
    return{
        
        type: "add_to_cart",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export function Delete_to_cart(Id)
{
    console.warn("id is ",Id)
    return{
        type:"delete_to_cart",
        Id:Id
    }
    
}
