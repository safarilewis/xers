import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        cohort: 0,
        password: '',
        description: '',
        title: ''
    });

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
        const formDataToSend = JSON.stringify(formData);
        // formDataToSend.append('firstName', formData.firstName);
        // formDataToSend.append('lastName', formData.lastName);
        // formDataToSend.append('email', formData.email);
        // formDataToSend.append('password', formData.password);
        // formDataToSend.append('cohort', formData.cohort);
        // console.log(formDataToSend);
        axios.post('http://localhost:3000/mentors/auth/register', formDataToSend, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "X-Powered-By": "Express",
                "Connection": "keep-alive"
            }
        })
            .then((response) => {
                if (response.data.message === "User created successfully") {
                    setSuccess(true);
                    navigate('/mentors/home')
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleLogin = () => {
        
    }
    return (
        <div className="grid justify-items-center items-center h-screen">
            <Card color="transparent" shadow={true} className="p-6">
                <Typography variant="h4" color="blue-gray">
                    Xers
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Create your Xers Account
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="First Name" onChange={handleChange} name="firstName" value={formData.firstName} />
                        <Input size="lg" label="Last Name" onChange={handleChange} name="lastName" value={formData.lastName} />
                        <Input size="lg" label="Email" onChange={handleChange} name="email" value={formData.email} />
                        <Input size="lg" label="Password" type="password" onChange={handleChange} name="password" value={formData.password} />
                        <Input size="lg" label="Cohort" onChange={handleChange} name="cohort" value={formData.cohort} />
                        <Input size="lg" label="Description" onChange={handleChange} name="description" value={formData.description} />
                        <Input size="lg" label="Title" onChange={handleChange} name="title" value={formData.title} />
                    </div>
                    <Button className="mt-6" fullWidth type="submit" onClick={handleLogin}>
                        Add
                    </Button>
                </form>
            </Card>
        </div>
    );
}