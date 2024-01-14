import Home from "../component/Home"
import {connect} from 'react-redux'
import {Add_to_cart, Delete_to_cart} from "../services/actions/action"

const maptoprops=state=>(
    {
        items:state.handlereducer.List
    }
)
const maptodispatch=dispatch=>({
    addtolisthandler:data=>dispatch(Add_to_cart(data)),
    deletetolisthandler:id=>dispatch(Delete_to_cart(id))
})
export default connect(maptoprops,maptodispatch)(Home); 