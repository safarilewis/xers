import { Card, CardBody, IconButton, Typography } from '@material-tailwind/react';
import React from 'react'
import SimpleFooter from './Footer';
import NavBar from './Navigator';
import People from '../assets/people.jpg'




export default function Home() {
  return (
    <>

      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-cover bg-center" style={{backgroundImage: `url(${People})`}}/>
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
                Unleashing Potential, Showcasing Brilliance.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                A community that seeks to help ALX students in their journey from complete beginners to extraordinary software engineers while documenting their awesome projects.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="h-screen mx-auto mt-12 max-w-3xl text-center font-bold text-2xl">About Us</div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <Card className="rounded-2xl shadow-2xl shadow-gray-500/10">
            <CardBody className="px-8 text-center">
              <IconButton
                variant="gradient"
                size="lg"
                //color="blue"
                className="pointer-events-none mb-6 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </IconButton>
              <a href='/hof'>
                <Typography variant="h5" className="mb-2" color="blue-gray">

                  Hall of Fame
                </Typography>
              </a>
              <Typography className="font-normal text-blue-gray-600">
                Get your cool projects featured in the hall of fame for everyone to see.
              </Typography>
            </CardBody>
          </Card>
          <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
            <CardBody className="px-8 text-center">
              <IconButton
                variant="gradient"
                size="lg"
                color="blue"
                className="pointer-events-none mb-6 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>

              </IconButton>
              <Typography variant="h5" className="mb-2" color="blue-gray">
                Mentorship
              </Typography>
              <Typography className="font-normal text-blue-gray-600">
                Interact with senior students in the program who are willing to hold your hand and guide you in your daring journey.
              </Typography>
            </CardBody>
          </Card>
        </div>

      </section>
      <div className="bg-blue-gray-50/50">
        <SimpleFooter />
      </div>

    </>
  )
}
