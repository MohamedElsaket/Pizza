import { useSelector } from "react-redux";

const UserName = () => {
    const userName = useSelector(state => state.user.userName)

    if(!userName) return null;

    return ( <div className="text-sm font-semibold hidden sm:block">{userName}</div> );
}
 
export default UserName;