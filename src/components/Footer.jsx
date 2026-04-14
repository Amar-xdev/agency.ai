import React from "react";
import assets from "../assets/assets";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#f5f7fb] dark:bg-[#0f172a] px-4 sm:px-10 lg:px-24 py-16 transition-colors duration-300">


            <div className="grid gap-10 md:grid-cols-2 items-start">

                <div>
                    <img
                        src={assets.logo}
                        alt="logo"
                        className="w-36 mb-4 dark:hidden"
                    />
                    <img
                        src={assets.logo_dark}
                        alt="logo"
                        className="w-36 mb-4 hidden dark:block"
                    />

                    <p className="text-gray-500 dark:text-gray-400 max-w-md mb-6">
                        From strategy to execution, we craft digital solutions that move your
                        business forward.
                    </p>


                    <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-300">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#services" className="hover:underline">Services</a>
                        <a href="#our-work" className="hover:underline">Our Work</a>
                        <a href="#contact-us" className="hover:underline">Contact Us</a>
                    </div>
                </div>


                <div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                        Subscribe to our newsletter
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                        The latest news, articles, and resources, sent to your inbox weekly.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e293b] text-gray-700 dark:text-white outline-none"
                        />

                        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>


            <div className="border-t border-gray-300 dark:border-gray-700 my-10"></div>


            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Copyright 2026 © GreatStack - All Right Reserved.
                </p>

                <div className="flex gap-4 text-gray-500 dark:text-gray-400">
                    <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-indigo-500" />
                    <FaTwitter className="w-5 h-5 cursor-pointer hover:text-indigo-500" />
                    <FaInstagram className="w-5 h-5 cursor-pointer hover:text-indigo-500" />
                    <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-indigo-500" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;