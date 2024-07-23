import { useDispatch, useSelector } from "react-redux";
import Button from "../../Ui/Button";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import DeleteButton from '../cart/DeleteButton'
import UpdatingItemQauntity from "../cart/UpdatingItemQauntity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantity(id));
  const isInCart = currentQuantity > 0

  function handleAddItem() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitprice: unitPrice,
      totalPrice: unitPrice * 1,
  }
  dispatch(addItem(newItem))
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} 
      alt={name}
      className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`} />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">{ingredients.join(' / ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">${unitPrice.toFixed(2)}</p> : 
          <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>}
          {isInCart && 
            <div className="flex items-center gap-3 sm:gap-6">
              <UpdatingItemQauntity pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteButton pizzaId={id} />
            </div>
          }
          {!soldOut && !isInCart && <Button type='small' onClick={handleAddItem}>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
