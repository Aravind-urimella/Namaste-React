import React from "react" ;
import ReactDOM from "react-dom/client";
import src from "./logos/foodadda.png";

const Title = ()=> {
  return (
    <a href="/">
      {/* <h1> Foodies Adda </h1> */}
      <img className = "logo" src ={src} alt = "logo"></img>
      {/* <img className = "logo" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD2Qka3PDM2-khDbNMbGpBgDkZFEp_4H6c8g&usqp=CAU" alt = "logo"></img> */}

      </a>
  );
};



const Header= () =>{
  return ( <div className="header">
  <Title/>
  <div className ="nav-bar">
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>

  </div>
</div>);
};





const biryani = {
  name : "Chicken Biryani",
  image :"https://www.forbesindia.com/media/images/2021/Dec/img_175063_whyisbiryanigettingbrandedalloverthecountry.jpg",
  cusines: ["Biryani","Indian"],
  rating:"4.3",
}
const restaurantList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "4320",
      "name": "Mehfil",
      "uuid": "4dee4970-8673-42b6-8a49-cab0efdb258f",
      "city": "3",
      "area": "Narayanguda",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "esp0fhddgfgdss5hyhpi",
      "cuisines": [
        "Biryani",
        "Chinese",
        "Indian",
        "Kebabs",
        "Tandoor",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 2,
      "slugs": {
        "restaurant": "mehfil-narayanguda-himayath-nagar",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "Near Narayanguda Flyover, Narayanguda, Hyderabad",
      "locality": "Near Narayanguda Flyover",
      "parentId": 637,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "4320",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 2,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "538659",
      "name": "Pista House Restaurant",
      "uuid": "564d61ba-35c4-452e-bcbe-2aafb69452cc",
      "city": "3",
      "area": "Eden Garden Road",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "hoh1ve0xnvonyt1f6ata",
      "cuisines": [
        "Biryani",
        "Tandoor",
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 1.2000000476837158,
      "slugs": {
        "restaurant": "pista-house-restaurant-himayath-nagar-himayath-nagar",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "Door No. 3-5-142, Eden Garden Road, Ramkoti, Kingkoti, Abids, Hyderabad, Telangana 500095",
      "locality": "Eden Garden Road",
      "parentId": 158135,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5658789~p=4~eid=00000185-9b73-022e-21a3-9c100093041b",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "538659",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 1.2000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "4650",
      "name": "Bawarchi",
      "uuid": "4e784916-87ff-4951-9c21-2f0c1df1fb31",
      "city": "3",
      "area": "New Nallakunta",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "smfhai0o8rnjuzp3ngxu",
      "cuisines": [
        "Biryani",
        "Tandoor",
        "Chinese",
        "Indian",
        "Desserts",
        "Kebabs",
        "Mughlai"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 2.799999952316284,
      "slugs": {
        "restaurant": "bawarchi-nallakunta-vidyanagar",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "Beside Astoria Hotel, RTC Cross Road, Chikkadpally, Nallakunta, Hyderabad",
      "locality": "RTC X roads",
      "parentId": 100,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "4650",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 2.799999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "630722",
      "name": "Landmaark Family Restaurant",
      "uuid": "a1ebee40-e6cf-4d7d-9c8d-f8bae680557e",
      "city": "3",
      "area": "Uppal",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "oz15eyx1kz5p3hcxd1v9",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Mughlai",
        "Hyderabadi",
        "Biryani",
        "Seafood"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 5.900000095367432,
      "slugs": {
        "restaurant": "landmaark-family-restaurant-uppal-uppal",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "H.NO.3-10-1/3 RAMANTHAPUR, Uppal Circle, NO.2, Hyderabad, 500013",
      "locality": "Ramanthapur",
      "parentId": 376580,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5589616~p=7~eid=00000185-9b73-022e-21a3-9c110093075f",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5.9 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "630722",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 5.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.8",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "4138",
      "name": "Grand Hotel",
      "uuid": "c1a1d888-51b7-4bcc-b539-f884c796a015",
      "city": "3",
      "area": "Koti",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "g1arzw6qd7g9affkmgzk",
      "cuisines": [
        "Biryani",
        "Chinese",
        "Tandoor",
        "Haleem"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 1.100000023841858,
      "slugs": {
        "restaurant": "grand-hotel-abids-himayath-nagar",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "Opposite Big Bazaar, 4-1-395,Abids Road, Hyderabad",
      "locality": "Abids Road",
      "parentId": 4001,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "4138",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 1.100000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "210403",
      "name": "Milan Juice Centre",
      "uuid": "d1e24f57-70fb-4f31-8746-655431dd2605",
      "city": "3",
      "area": "Nampally",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "luay5ylr2smzrtyqkmpe",
      "cuisines": [
        "Arabian",
        "Juices"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 3.5999999046325684,
      "slugs": {
        "restaurant": "milan-juice-centre-nampally-nampally",
        "city": "hyderabad"
      },
      "cityState": "3",
      "address": "11-3-836/1, Opposite to Badi Masjid Main Gate, New Mallepally Main Road, Nampally, Hyderabad,Nampally,Hyderabad",
      "locality": "New Mallepally Main Road",
      "parentId": 19521,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code WELCOME50",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=5669617~p=10~eid=00000185-9b73-022e-21a3-9c1200930a67",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "210403",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 3.5999999046325684,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
];
const RestaurantCard =({
  name,cuisines,cloudinaryImageId,lastMileTravelString
}) => {
  
  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId }/>
       <h2>{name}</h2>
       <h3>{cuisines.join(", ")} </h3>
       <h4>{lastMileTravelString} Minutes</h4>
    </div>
  );
};

const Body = ()=>{
  return (
    <div className="card-items">
      {
        restaurantList.map((restaurant)=>{
          return <RestaurantCard {...restaurant.data} key ={restaurant.data}/>
        })
      }
    
    
    
 
   </div>

  );
};

const Footer = ()=>{
  return (
    <h4>Footer</h4>
  );
};

const AppLayout = () =>{
  return (
    <React.Fragment>
      <React.Fragment>
      <Header/>
      <Body/>
      <Footer/>
      </React.Fragment>
      </React.Fragment>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>); 






