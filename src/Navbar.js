import { Link} from 'react-router-dom';

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
        <Link to="./Recipebox" 
          style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>Meal Board</Link>
      </div>
    </nav>
  )
}

export default Navbar
