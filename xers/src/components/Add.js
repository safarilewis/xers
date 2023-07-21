import {
    Card,
    Input,
    Button,
    Checkbox,
    Typography,
    Alert
} from "@material-tailwind/react";
import { useState } from 'react';
import axios from 'axios'

export default function Add() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        image: null, // Store the image file
        title: '',
        location: '',
        isMentor: false,
    });
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const handleChange = (event) => {
        const { name, value, type, checked, files } = event.target;
        const fieldValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: fieldValue,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);
        // Send form data in Axios POST request
        const formDataToSend = new FormData();
        formDataToSend.append('firstName', formData.firstName);
        formDataToSend.append('lastName', formData.lastName);
        formDataToSend.append('image', formData.image);
        formDataToSend.append('title', formData.title);
        formDataToSend.append('location', formData.location);
        formDataToSend.append('isMentor', formData.isMentor);
        console.log(formDataToSend);
        axios.post('http://localhost:3000/users/register', formDataToSend, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                "X-Powered-By": "Express",
                "Connection": "keep-alive"
            }
        })
            .then((response) => {
                // Handle the response if needed
                console.log(response.data);
                setSuccess(response.data.message)
            })
            .catch((error) => {
                // Handle any errors that occurred during the request
                console.error(error);
                setError(error.message)
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
                        <Input size="lg" label="Last Name" placeholder="e.g Lewis" className="text-center" onChange={handleChange} name="lastName" value={formData.lastName}/>
                        <Input size="lg" label="Location" placeholder="e.g Nairobi" className="text-center" onChange={handleChange} name="location" value={formData.location}/>
                        <Input size="lg" label="Title" placeholder="e.g Snr. Software Engineer" className="text-center" onChange={handleChange} name="title" value={formData.title} />
                        <Typography>
                            Choose your profile picture
                        </Typography>
                        <input type="file" onChange={handleChange} accept="image/*" name="image" />
                        <Checkbox
                            name="isMentor"
                            checked={formData.isMentor}
                            value={formData.isMentor}
                            label={
                                (
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex items-center font-normal"
                                    >
                                        Would you like to be a mentor?
                                    </Typography>
                                )
                            }
                            containerProps={{ className: "-ml-2.5 " }}
                        />
                    </div>
                    <Button className="mt-6" fullWidth type="submit">
                        Add
                    </Button>
                </form>
            </Card>
            {error ? <Alert className="h-1/2 text-white">{error.message}</Alert> : <Alert className="h-1/2 text-white">{success}</Alert>}
        </div>
    );
}