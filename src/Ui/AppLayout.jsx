import Header from "./Header";
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
    const navigation = useNavigation()
    // console.log(navigation);
    const isLoading = navigation.state === 'loading';

    return ( <div className="h-screen grid grid-rows-[auto_1fr_auto]">
    {isLoading && <Loader /> }

    <Header />
    <div className="overflow-scroll">
        <main className="max-w-3xl mx-auto">
            {/* <h1>[That's The AppLayout]</h1> */}
            <Outlet />
        </main>
    </div>

    <CartOverview />
    </div> );
}
 
export default AppLayout;