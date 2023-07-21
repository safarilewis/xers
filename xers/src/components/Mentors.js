import { Typography } from '@material-tailwind/react'
import React from 'react'
import '../App.css'

export default function Mentors() {
    return (
        <div className="bg-teal-600 h-screen">
            <div class="loop-wrapper">
                <div class="mountain"></div>
                <div class="hill"></div>
                <div class="tree"></div>
                <div class="tree"></div>
                <div class="tree"></div>
                <div class="rock"></div>
                <div class="truck"></div>
                <div class="wheels"></div>
            </div>
            <div className='justify-center place-items-center w-screen text-center'>
                <Typography
                    className="justify-self-auto text-center p-6"
                    variant="h1"
                >
                    Hey there!
                </Typography>
                <div className='grid   justify-items-center'>
                   
                    <Typography
                    className="w-1/3 font-sans text-center justify-self-auto align-self-center text-xl"
                >
                    We are working around the clock to ship this feature to you. In the meantime, feel free to check out this <a className="underline text-white" href='https://vadimkravcenko.com/shorts/good-mentor/?utm_source=leadershipintech&utm_medium=newsletter&utm_campaign=being-a-good-mentor'>link</a> about mentor-mentee relationships. Cheers!
                </Typography>
                   
                </div>
                
            </div>
        </div>
    )
}
