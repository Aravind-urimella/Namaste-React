const heading = React.createElement("h1",{
    id : "title",
   
},"Hello World!");
console.log(heading);

const heading2 = React.createElement("h2",{
    id : "title",
    
},"Hello World!");
// console.log(heading2);


/*Complex HTML structure using React
     <div id = "container">
        <h1 id = "heading1" > Heading1 </h1>
        <h2 id = "heading2" > Heading2 </h2>
     </div>
 -->*/



// creating div by using React 

const container = React.createElement("div",{
  id : "container",
}, [heading,heading2]);



const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a element React element inside the root
// root.render(heading);  this will print only heading one 
root.render(container); //this will render both heading and heading2 ,here root is container .