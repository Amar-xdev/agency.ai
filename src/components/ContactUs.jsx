import React, { useState } from "react";
import { Mail, User } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", formData);

      
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      alert("Message sent successfully ✅");
    }
  };

  return (
    <section
      id="contact-us"
      className="bg-[#f5f7fb] dark:bg-[#0f172a] py-20 px-4 sm:px-10 lg:px-24"
    >
   
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-700 dark:text-white mb-4">
          Reach out to us
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
      </div>

     
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">

       
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-gray-600 dark:text-gray-300">
              Your name
            </label>

            <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-[#1e293b]">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none text-gray-700 dark:text-white"
              />
            </div>

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

         
          <div>
            <label className="block mb-2 text-gray-600 dark:text-gray-300">
              Email id
            </label>

            <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-[#1e293b]">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-gray-700 dark:text-white"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

       
        <div>
          <label className="block mb-2 text-gray-600 dark:text-gray-300">
            Message
          </label>

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-[#1e293b] text-gray-700 dark:text-white outline-none resize-none"
          ></textarea>

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

       
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition"
        >
          Submit →
        </button>
      </form>
    </section>
  );
};

export default ContactUs;