import React from "react";
import home from "./assets/home-image.png";

function Contact(){
    return(
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">Contact Us</h1>
                <p className="text-center text-gray-600 mb-12">We'd love to hear from you. Get in touch with us.</p>

                {/* Contact Info */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <span className="text-2xl mr-4">📍</span>
                            <div>
                                <h3 className="font-bold text-gray-800">Address</h3>
                                <p className="text-gray-600">123 Electronic Street, Tech City</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-2xl mr-4">📞</span>
                            <div>
                                <h3 className="font-bold text-gray-800">Phone</h3>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="text-2xl mr-4">✉️</span>
                            <div>
                                <h3 className="font-bold text-gray-800">Email</h3>
                                <p className="text-gray-600">support@eshop.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
                    <form className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea 
                            placeholder="Your Message" 
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button 
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;