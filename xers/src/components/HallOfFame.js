import React, { useEffect } from 'react';
import NavBar from './Navigator';
import HOF from '../assets/hof-back.jpg'
import axios from 'axios';

//const url = "http://localhost:3000/users"

//Fetch user data 



export default function HallOfFame() {
  //const [user, setUser] = useState();
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/users',
      headers: {}
    }
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
 
  return (
    <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
      <div className="absolute top-0 h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${HOF})` }}>
        <div className="absolute top-0 h-0 w-full bg-black/75 bg-cover bg-center">
          <NavBar />

        </div>
      </div>
    </div>
  )
}
