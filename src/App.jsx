import "./assets/index.scss";
import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
