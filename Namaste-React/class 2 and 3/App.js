import React from "react" ;
import ReactDOM from "react-dom/client";


// Create a Nested header Element using React.createElement (h1,h2,inside div with class title)

const heading = React.createElement("h1",{
    id : "head1",
    key :"h1"
   
},"Hello World! for parcel");


const heading2 = React.createElement("h2",
{
    id : "head2",
    key :"h2"
}
,"Hello World!");

const heading3 = React.createElement("h3",{
  id:"head3",
  key :"h3",
},"Hello world");



const container = React.createElement("div",{
  id : "container",
  className:"title",
}, [heading,heading2,heading3]);



// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container); 


// Create a Nested header Element using JSX (h1,h2,inside div with class title)

const jsx1 = (
 <h1 id ="title1" key ="jsxh1">
  Namaste React from jsx1
  </h1>)  

// jsx1 ans jsx2 are variables 
const jsx2 =(
<h2 id ="title2" key ="jsxh2">
  Namaste React from jsx2
  </h2>);

// JSx3 is  function component 
const Jsx3 = ()=> {
  return (
      <h3> Namaste React from Function </h3>
  );
};


const HeadingJsx = () =>{
  return ( <div>
    {jsx1}
    {jsx2}
    {Jsx3()}
    
    {/* {Jsx3()}   it is a js function     */}
    
     {/* <Jsx3/>  it can also write like this */}
  </div>);
};

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingJsx/>); 

//  Create a header component from scratch using functional component with JSX 
// --> add logo on left 
// --> search bar in middle
// --> 3- add user icon in right 
// --> add css to look good 

const logo = (
<div>
<img className="logo" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRcKIq3ZLxA9Zg6mrPJbmzdvZksYWe4sHpQ&usqp=CAU" alt="react logo" />
   </div>


);

const searchBar = (
  <div>
    <input className ="search-bar " type="search" placeholder ="type of search"/>
    <button  className ="button"type ="search">search</button>
    {/* <input className ="submit" type = "submit" ></input> */}
  </div>
);

const userIcon = (
  <div>
    
    <img className="icon" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5536ZO01HjjuwHHjTcxkt851iVgPuRsR9ww&usqp=CAU" alt="user icon"/>
  </div>
)


const HeaderComponent = () => {
  return (
    <div className="headerContainer">
      {logo}
      {searchBar}
      {userIcon}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
