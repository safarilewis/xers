import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MentorsCard from './MentorsCard';
import NavBar from './Navigator';
import { Typography } from '@material-tailwind/react';


export default function Dashboard() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/mentors/auth/getUsers", {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                setUsers(response.data.user)
            })
    }, [])
    return (
        <>
            <div className="relative text-center flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className=" absolute top-0 h-full w-full bg-cover bg-center ">
                    <div className="absolute top-0 h-0 w-full bg-black/75 bg-cover bg-center ">
                        <NavBar />
                    </div>

                    <div className="flex h-full w-full items-center justify-center bg-black/50 ">
                        <div className="items-center content-center">
                            <Typography>
                                Our Members
                            </Typography>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 ">
                                {users.map((user) => {
                                    return (
                                        <MentorsCard key={user.id} name={user.firstName} title={user.title} description={user.description} cohort={user.cohort} />
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
