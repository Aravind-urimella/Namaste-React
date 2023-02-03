import React from "react" ;
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Body from "./components/Body";
import { SkeletonTheme } from "react-loading-skeleton";







const AppLayout = () => {
return (
  
  <React.Fragment>
  <SkeletonTheme >
  <Header/>
  <Body/>
  <Footer/>
  </SkeletonTheme>
  </React.Fragment>
);

}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
