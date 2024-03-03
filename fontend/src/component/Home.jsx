import AddToDo from "./todo/AddToDo";
import AllToDo from "./todo/AllToDo";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { Auth } from "../services/Auth";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await Auth();
      if(data !== 200) {
        navigate("/login");
      }
      
    };
    fetchData();
  },[navigate]);
  return (
    <div>
      <AddToDo />
      <AllToDo/>
    </div>
  );
};

export default Home;
