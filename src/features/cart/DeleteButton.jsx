import { useDispatch } from "react-redux";
import Button from "../../Ui/Button";
import { deleteItem } from "./cartSlice";


const DeleteButton = ({ pizzaId }) => {
    const dispatch = useDispatch()

    return ( 
        <Button type='small' onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
     );
}
 
export default DeleteButton;