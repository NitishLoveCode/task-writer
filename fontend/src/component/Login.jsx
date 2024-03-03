import {useLayoutEffect, useState } from "react";
import { getUserLogin } from "../services/GetUserLogin";
import {useNavigate} from "react-router-dom"
import { Auth } from "../services/Auth";

const Login = () => {
  const navigate = useNavigate()
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginUser = async () => {
    const { email, password } = signUpData;
    if (!email || !password) {
      alert("All field required");
    }
    const data = await getUserLogin(email, password);
    if(data.name){
      navigate("/")
    }
  };

  useLayoutEffect(() => {
    const fetchData = async () => {
      const data = await Auth();
      if(data === 200){
        navigate("/")
      }
    };
  
    fetchData();
  }, []);
  return (
    <div className="bg-green-600 p-8 w-[40%] mx-auto mt-9 rounded-lg">
      <div>
        <h1 className="text-white text-2xl font-bold">Login here</h1>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <input
          className="border outline-none pl-2 h-10 rounded-md border-gray-300"
          value={signUpData.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="border outline-none pl-2 h-10 rounded-md border-gray-300"
          value={signUpData.password}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div
        onClick={() => loginUser()}
        className="mt-8 bg-white p-2 flex justify-center cursor-pointer hover:bg-gray-200"
      >
        <button>Login</button>
      </div>
    </div>
  );
};
export default Login;
