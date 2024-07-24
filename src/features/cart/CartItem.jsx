import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getCurrentQuantity } from "./cartSlice";
import DeleteButton from "./DeleteButton";
import UpdatingItemQauntity from "./UpdatingItemQauntity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));

  return (
      <li className="py-3 sm:flex sm:items-center sm:justify-between">
        <p className="mb-1 sm:mb-0">
          {quantity}&times; {name}
        </p>
        <div className="flex items-center justify-between sm:gap-6">
          <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
          {/* <UpdatingItemQauntity pizzaId={pizzaId} currentQuantity={currentQuantity} />
          <DeleteButton pizzaId={pizzaId} /> */}
          <div className="flex items-center gap-3 sm:gap-6">
            <UpdatingItemQauntity pizzaId={pizzaId} currentQuantity={currentQuantity} />
            <DeleteButton pizzaId={pizzaId} />
          </div>
        </div>
      </li>
  );
}

export default CartItem;