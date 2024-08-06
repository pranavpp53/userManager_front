import React, { useState } from 'react';
import './AddUser.css';
import { addNewUser } from '../service/allapi';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const navigate = useNavigate();
    const initialFormState = {
        userName: '',
        address: '',
        email: '',
        password: '',
        image: null
    };

    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.userName) newErrors.username = 'Username is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.image) newErrors.image = 'Image is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('userName', formData.userName);
            formDataToSend.append('address', formData.address);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('password', formData.password);
            formDataToSend.append('image', formData.image);

            const response = await addNewUser(formDataToSend);
            if (response.status < 300) {
                alert(response.data.message);
                setFormData(initialFormState);
                setErrors({});
                navigate('/view')

            } else {
                alert(response.data.error || 'An error occurred');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form');
        }
    };

    return (
        <>
            <div className="container mt-5 w-50">
                <h2 className="text-center">User Data Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="Enter username"
                        />
                        {errors.username && <small className="text-danger">{errors.username}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter address"
                        />
                        {errors.address && <small className="text-danger">{errors.address}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                        />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                        />
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="image"
                            name="image"
                            onChange={handleChange}
                            accept="image/*"
                        />
                        {errors.image && <small className="text-danger">{errors.image}</small>}
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        </>
    );
}

export default AddUser;