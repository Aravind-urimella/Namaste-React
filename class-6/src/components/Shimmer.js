import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// imported react skeleton from react by  npm i react-loading-skeleton .  .

export const  SearchShimmer = () =>{
  return (
<div className="search-skeleton">
             <Skeleton height={"41px"} width={"850px"}  margin-bottom={"50px"}/>
        </div> 
  )
  
}


const CardSkeleton =()=>{
  return (
    <>
    
    <div className="card-skeleton" >
    <Skeleton height={140} width={"100%"} borderRadius={"10px"} />
  <h3 className="shimmer-title">
    <Skeleton height={20} />
  </h3>
  <h5 >
    <Skeleton count={2} />
  </h5>
  <h5 className="shimmer-area">
    <Skeleton height={10} style={{marginTop:"10px"} }/>
  </h5>
  <h6>
    <Skeleton />
  </h6>
</div>
</>
  )
}


const Shimmer = ({cards}) => {
    return (
 
          <div className="shimmer-container">
            {Array(cards).fill(0).map((element, index) => {
        return <CardSkeleton key={index} />;
      })}
            
         </div>
    )
       
       
   
}

export default Shimmer;