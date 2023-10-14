import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { uploadToCloudinary } from "../utils";

export default function Add() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        image: '', // Store the image file
        title: '',
        location: '',
        description: '',
    });
    const [userImage, setUserImage] = useState(null);
    const handleChange = (event) => {
        const { name, value, type, checked, files } = event.target;
        const fieldValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: fieldValue,
        }));
    };

    const handleImageUpload = async (event) => {
        console.log(event.target)
        setUserImage(event.target.files[0])

        // let result = await uploadToCloudinary(formData.firstName, userImage)
        //     .then(() => {
        //         setFormData((prevData) => ({
        //             ...prevData,
        //             image: result.secure_url
        //         }));
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        let result = await uploadToCloudinary(formData.firstName, userImage);
        let data = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            image: result.secure_url,
            title: formData.title,
            location: formData.location,
            description: formData.description

        }

        axios.post('http://localhost:3000/hof/add', data, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "X-Powered-By": "Express",
                "Connection": "keep-alive"
            }
        })
            .then((response) => {
                // Handle the response if needed
                console.log(response.data);

                navigate('/hof')
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error(error);

            });
    };

    return (
        <div className="grid justify-items-center items-center h-screen">
            <Card color="transparent" shadow={true} className="p-6">
                <Typography variant="h4" color="blue-gray">
                    Xers
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Add someone to the Hall of Fame
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="First Name" placeholder="e.g Safari" className="text-center" onChange={handleChange} name="firstName" value={formData.firstName} />
                        <Input size="lg" label="Last Name" placeholder="e.g Lewis" className="text-center" onChange={handleChange} name="lastName" value={formData.lastName} />
                        <Input size="lg" label="Location" placeholder="e.g Nairobi" className="text-center" onChange={handleChange} name="location" value={formData.location} />
                        <Input size="lg" label="Title" placeholder="e.g Snr. Software Engineer" className="text-center" onChange={handleChange} name="title" value={formData.title} />
                        <Input size="lg" label="Description" className="text-center" onChange={handleChange} name="description" value={formData.description} />
                        <Typography>
                            Choose your profile picture
                        </Typography>
                        <input type="file" onChange={handleImageUpload} accept="image/*" name="image" />
                    </div>
                    <Button className="mt-6" fullWidth type="submit">
                        Add
                    </Button>
                </form>
            </Card>
        </div>
    );
}