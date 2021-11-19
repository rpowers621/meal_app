const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Plan your Mealboard!</h1>
      <div className="links">
        <a href="/" style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>Home</a>
        <a href="/Recipebox" style={{
          color: "white",
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>Meal Board</a>
      </div>
    </nav>
  )
}

export default Navbar;