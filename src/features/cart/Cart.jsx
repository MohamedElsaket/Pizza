import { Link } from 'react-router-dom';
import Button from '../../Ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const name = useSelector(state => state.user.userName);
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch()
  // console.log(cart);

  function handleDelete() {
    dispatch(clearCart())
  }

  if(!cart.length) return <EmptyCart />
  // console.log(cart.length);

  return (
    <div className='px-4 py-3'>
      <Link to="/Pizza/menu" className='text-sm text-blue-500 hover:text-blue-700 hover:underline'>&larr; Back to menu</Link>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, <span className='uppercase'>{name}</span></h2>

      <ul className='mt-3 divide-y divide-stone-200 border-b'>
        {cart.map(item => <CartItem item={item} key={item.pizzaId} />)}
      </ul>

      <div className='mt-6 space-x-3'>
        <Button to="/Pizza/order/new" type='primary'>
         Order pizzas
        </Button>
        <Button type='secondary' onClick={handleDelete}>Clear cart</Button>
     </div>
    </div>
  );
}

export default Cart;
