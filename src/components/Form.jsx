import React, { useState } from 'react';
import form from '/assets/atg_illustration.png';
import heroImage from '/assets/banner.webp';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission (e.g., send data to server)
        console.log('Form Data:', formData);
        // Reset form fields after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-gray-900 text-white " style={{height: 35+"rem"}}>
            <div className="max-w-7xl mx-auto px-4 py-8 md:pb-0 h-full flex flex-col md:flex-row">
                <div className='flex w-full md:w-1/2 flex-col gap-4'>
                    <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
                    <form onSubmit={handleSubmit} className=" w-full">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-400 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-gray-600 rounded-md py-2 px-3 bg-gray-800 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-400 font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-gray-600 rounded-md py-2 px-3 bg-gray-800 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-400 font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full border-gray-600 rounded-md py-2 px-3 bg-gray-800 focus:outline-none focus:border-blue-500"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div className=' w-1/2 hidden md:flex justify-end items-start'>
                    <img src={form} alt="" className=' md:flex sm:hidden w-full h-full ' />
                </div>
            </div>
        </div>
    )
}
