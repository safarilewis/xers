import React, { useEffect, useState } from 'react';
import NavBar from './Navigator';
import HOF from '../assets/hof-back.jpg'
import axios from 'axios';
import TeamCard from './feature-card';

//const url = "http://localhost:3000/users"

//Fetch user data 
export default function HallOfFame() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/users',
      headers: {}
    }
    axios.request(config)
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  return (
    <>
      <div className="relative text-center flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className=" absolute top-0 h-full w-full bg-cover bg-center " style={{ backgroundImage: `url(${HOF})` }}>
          <div className="absolute top-0 h-0 w-full bg-black/75 bg-cover bg-center ">  
              <NavBar />
          </div>
          <div className="flex h-full w-full items-center justify-center bg-black/50 ">
            <div className="items-center content-center">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
              {user.map((user) => {
                return (
                  <TeamCard key={user.id} name={user.name} title={user.title} location={user.location} techStacks={user.techStacks} description={user.description} image={user.image} />
                )
              })
              }
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
