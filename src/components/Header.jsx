import { Link } from "react-router-dom";


const  Header = ()=> {
    return (
      <>
        <header>
            <a href="/" className="link_github">Github</a>
            <h1>Eco Choice</h1>
            <Link to={'/register'} className="link_get">Get the app</Link>
        </header>
      </>
    );
  }

  export default Header