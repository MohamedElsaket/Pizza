import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Ui/Home";
import Error from "./Ui/Error";
import Menu, { loader as menuLoader} from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, { action as CreateOrderAction } from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./Ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { 
        path: '/', 
        element: <Home />
      },
      { 
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      { 
        path: '/order/new',
        element: <CreateOrder />,
        action: CreateOrderAction
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />
      },
    ]
  }

])

const App = () => {
  return ( <RouterProvider router={router} /> );
}
 
export default App;