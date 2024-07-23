import { Link } from "react-router-dom";
import Search from "./Search";
import UserName from "../features/user/UserName";

const Header = () => {
    return (
    <header className="bg-yellow-400 uppercase p-4 border-b
    border-stone-300 sm:px-6 flex items-center justify-between">
        <Link to='/' className="tracking-widest"> <span className="text-2xl">🍕</span> Fast React Pizza Co. </Link>
        <Search />
        <UserName />
    </header>
    );
}

export default Header;