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
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        formDataToSend.append('email', formData.email);
        formDataToSend.append('password', formData.password);
        const data ={
            email: formData.email,
            password: formData.password
        }
        console.log(formDataToSend);
        axios.post('http://localhost:3000/login', data, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "X-Powered-By": "Express",
                "Connection": "keep-alive"
            }
        })
            .then((response) => {
                console.log(response.data);
                navigate('/mentors/home')
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
                    Login to your Xers account
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Email" className="text-center" onChange={handleChange} name="email" value={formData.email} />
                        <Input size="lg" label="Password" className="text-center" onChange={handleChange} name="password" value={formData.password} />
                    </div>
                    <Button className="mt-6" fullWidth type="submit">
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    );
}