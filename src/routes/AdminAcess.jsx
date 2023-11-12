import ClientsInfo from "../components/Admin/Acess/Clients";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { AdminButtons } from "../components/Admin/Acess/style";
import { useNavigate } from "react-router-dom";
const AdminAcess = () => {

  const navigate = useNavigate()

  const handleLogout = async () => {
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("senhaData");
    alert("Saindo da sessão");
    navigate("/");
  };

  return (
    <div className="container admin">
      <AdminButtons>
        <button onClick={()=>navigate('/')}>
          <AiOutlineHome />
        </button>
        <button onClick={()=> handleLogout()}>
          <BiLogOut />
        </button>
      </AdminButtons>
      <ClientsInfo />
    </div>
  );
};
export default AdminAcess;
