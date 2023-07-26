import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import NavBar from './Navigator'

export default function Mentors() {
    return (
        <div className="text-center backdrop-blur-2xl bg-gradient-to-r from-green-400 to-blue-500 w-screen h-screen">
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
                <div className="absolute top-0 w-full">
                    <NavBar />
                </div>
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-6 font-black"
                            >
                                Welcome to the Mentors Hall
                            </Typography>
                            <Typography variant="lead" color="white" className="opacity-80">
                                Join today to find a peer mentor or to become one.
                            </Typography>
                            <div className='flex justify-center items-center'>
                                <a href='/mentors/login'>
                                    <Button className="m-5">Login</Button>
                                </a>
                                <Typography color='white' className="font-bold">or</Typography>
                                <a href='/mentors/register'>
                                    <Button className="m-5">register</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
