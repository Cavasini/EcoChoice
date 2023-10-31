import { Outlet } from "react-router-dom";
import "./assets/styles/index.scss";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header sectionIds={["Home", "Features", "Overview", 'FAQ']} />
      <Outlet/>
      {/* <Footer/>  */}
    </main>
  );
}

export default App;
