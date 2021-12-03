import { Link } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Plan your Mealboard!</h1>
      <div className="links">
        <Link to="/home" style={{
          color: "white",
          backgroundColor: '#4A8140',
          borderRadius: '8px'
        }}>Home</Link>
        <Link to="./Recipebox"
          style={{
            color: "white",
            backgroundColor: '#4A8140',
            borderRadius: '8px'
          }}>Meal Board</Link>
        <Link to="./About"
          style={{
            color: "white",
            backgroundColor: '#4A8140',
            borderRadius: '8px'
          }}>About</Link>
        <Link to="./Contact"
          style={{
            color: "white",
            backgroundColor: '#4A8140',
            borderRadius: '8px'
          }}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
