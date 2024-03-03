import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between p-4 bg-green-600 text-white">
      <div className="text-4xl font-bold tracking-tighter">
        <Link to={"/"}>
          <h1>MrTodo</h1>
        </Link>
      </div>
      <div className="flex gap-9 text-xl">
        <Link to={"/login"}>
          <p>LogIn</p>
        </Link>
        <Link to={"/signup"}>
          <p>SignIn</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
