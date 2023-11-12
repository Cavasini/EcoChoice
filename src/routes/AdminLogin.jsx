import Login from "../components/Admin/Login/Login";

const AdminLogin = () => {
  const getUser = sessionStorage.getItem("userData");
  const getSenha = sessionStorage.getItem("senhaData");

  return (
    <>
      {getUser && getSenha ? (
        ( window.location = `/admin/${getSenha}`)
      ) : (
        <div className="LoginPage">
          <Login/>
        </div>
      )}
    </>
  );
};
export default AdminLogin;
