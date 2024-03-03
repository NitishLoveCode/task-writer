import {useLayoutEffect, useState } from "react";
import { getUserSignUp } from "../services/getUserSignUp";
import {useNavigate} from "react-router-dom"
import { Auth } from "../services/Auth";



const SignUp = () => {
  const navigate = useNavigate()
  const [signUpData, setSignUpData] = useState({
    name: "",
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

  // Sending data to server
  const signUpUser = async () => {
    const { name, email, password } = signUpData;
    if (!name || !email || !password) {
      alert("All field fill required.");
      return;
    }
    const data = await getUserSignUp(name, email, password);
    console.log(data);
    if (data.name) {
      navigate("/");
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
        <h1 className="text-white text-2xl font-bold">SignUp here</h1>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <input
          className="border outline-none pl-2 h-10 rounded-md border-gray-300"
          value={signUpData.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
        />
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
        onClick={() => signUpUser()}
        className="mt-8 bg-white p-2 flex justify-center cursor-pointer hover:bg-gray-200"
      >
        <button>SignUp</button>
      </div>
    </div>
  );
};
export default SignUp;
