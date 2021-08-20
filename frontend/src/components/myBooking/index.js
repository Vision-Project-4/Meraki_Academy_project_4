
import React, {useState,useEffect}from "react";
import axios from "axios";
require("dotenv").config();

const MyBooking = () =>{
    const [userData, setUserData] = useState("")
//     console.log("ppppppppppppppppppppppppp");
//     console.log(token,"token");
//     const secret = process.env.SECRET;
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("userId");
    console.log(token,"jjjjjjjjjjjjjjjjjjjj");
    
        

    useEffect(() => {
        
        axios
      .get(`http://localhost:5000/user/${id}`)
      .then((result) => {
          console.log(result,"llllllllllllllllllllllllll");
        if (result.status == 200) {
            setUserData(result.data);
        }
      })
      .catch((err) => {});
  }, []);
      return( 
      <>
      <div>
          <h3>{userData.id_number}</h3>
          <h3>{userData.name}</h3>
          <h3>{userData.email}</h3>
          
      </div>
      </>
      )

    

}
export default MyBooking;