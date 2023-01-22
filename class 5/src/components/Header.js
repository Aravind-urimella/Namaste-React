import pic from "../../logos/foodadda.png";


const Title = ()=> {
    return (
      <a href="/">
        {/* <h1> Foodies Adda </h1> */}
        <img className = "logo" src ={pic} alt = "logo"></img>
        </a>
    );
  };
  
  
  
  const Header= () => {
    return ( 
      <div className="header">
       <Title/>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
          <li>Cart</li>
        </ul>
      </div>
      </div>
    );
  };

  export default Header;