import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser'
import Button from './Button';

function Home() {
  const userName = useSelector(state => state.user.userName)

  return (
    <div className="my-10 lg:my-16 text-center px-6">
      <h1 className="text-xl font-semibold mb-8 md-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === '' ? <CreateUser /> : <Button to={'/Pizza/menu'} type='primary'>Continue Ordering, {userName}</Button>}
    </div>
  );
}

export default Home;
