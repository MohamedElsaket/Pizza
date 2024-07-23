import Button from "../../Ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItem, increaseItem } from "./cartSlice";

const UpdatingItemQauntity = ({ pizzaId, currentQuantity }) => {
    const dispatch = useDispatch();
    
    return ( 
        <div className="flex gap-1 items-center md:gap-3">
            <Button onClick={() => dispatch(decreaseItem(pizzaId))} type='round'>-</Button>
            {currentQuantity}
            <Button onClick={() => dispatch(increaseItem(pizzaId))} type='round'>+</Button>
        </div>
     );
}
 
export default UpdatingItemQauntity;