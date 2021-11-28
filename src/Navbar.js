import { Link} from 'react-router-dom';
import Login from './Login'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Plan your Mealboard!</h1>
      <div className="links">
        <Link to="/" style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>Home</Link>
        <Link to="./About" 
          style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>About</Link>
        <Link to="./Contact" 
          style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>Contact</Link>
        <Link to="./Recipebox" 
          style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>Meal Board</Link>
        <Link to="./LoginPage" 
          style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>Login</Link>
      </div>
      {/* <div className="g-signin">
        <Login/>
      </div> */}
      
      
     
    </nav>
  )
}

export default Navbar
