import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        Phone: '',
        message: '',
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for form submission here
        console.log('Form submitted:', formData);
    };

    return (
        
        <div className="bg-[#001b39] hover:bg-neutral-700 text-white text-left p-6 border-2 border-neutral-600 rounded-2xl flex flex-col gap-16">
             <div>
                <h1 className='text-3xl font-bold'> <span>LET'S WORK</span> <span className='text-[#e1fe7e]'>TOGETHER</span></h1>
                <h1 className='text-slate-300'> Tell us about yourself and we will figoure about best solution for you.</h1>
                
                
            </div>
            <form onSubmit={handleSubmit}>
                
                <div className="flex gap-8 text-[#7defe0] rounded-2xl">
                    <div className="w-1/2 ">
                        <label htmlFor="fname" className=" mb-1 block">First Name</label>
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            value={formData.fname}
                            onChange={handleInputChange}
                            className="w-full rounded mb-3 bg-[#001b39] p-4 border-2"
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="lname" className=" mb-1 block">Last Name</label>
                        <input
                            type="text"
                            id="lname"
                            name="lname"
                            value={formData.lname}
                            onChange={handleInputChange}
                            className="w-full rounded mb-3 bg-[#001b39] p-4 border-2"
                        />
                    </div>
                </div>
                <div className="flex gap-8 text-[#7defe0]">

                    <div>
                        <label htmlFor="email" className=" mb-1 block">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full rounded mb-3 bg-[#001b39] p-4 border-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="Phone" className=" mb-1 block">Phone Number</label>
                        <input
                            type="Phone"
                            id="Phone"
                            name="Phone"
                            value={formData.Phone}
                            onChange={handleInputChange}
                            className="w-full rounded mb-3 bg-[#001b39] p-4  border-2"
                        />
                    </div>
                </div>

                <div className="flex gap-8 rounded-2xl text-[#7defe0]">
                    <label htmlFor="message" className=" mb-1 block">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full h-32 rounded mb-3 bg-[#001b39] p-4 border-2"
                    />
                </div>

                <div className="rounded-2xl px-4 py-2 bg-[#e1fe7e] drop-shadow-2xl text-black">
                    <button className="w-full" type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
