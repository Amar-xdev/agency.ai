import React from "react";
import assets from "../assets/assets";

const OurWork = () => {
  return (
    <section id="our-work" className="bg-[#f5f7fb] dark:bg-[#0f172a] py-20 px-4 sm:px-10 lg:px-24 transition-colors duration-300">

      <div className="text-center max-w-2xl mx-auto mb-16 relative">

       

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-700 dark:text-white mb-6">
          Our latest work
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
      </div>

      
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        
        <div className="bg-[#dde6f2] dark:bg-[#1e293b] rounded-3xl p-6 transition hover:shadow-xl">
          
          <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-4 shadow-sm">
            <img
              src={assets.work_mobile_app}
              alt="Mobile App"
              className="rounded-xl w-full object-cover"
            />
          </div>

          <h3 className="mt-6 text-xl font-semibold text-gray-700 dark:text-white">
            Mobile app marketing
          </h3>

          <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 leading-relaxed">
            We turn bold ideas into powerful digital solutions that connect,
            engage...
          </p>
        </div>

       
        <div className="bg-[#dde6f2] dark:bg-[#1e293b] rounded-3xl p-6 transition hover:shadow-xl">
          
          <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-4 shadow-sm">
            <img
              src={assets.work_dashboard_management}
              alt="Dashboard"
              className="rounded-xl w-full object-cover"
            />
          </div>

          <h3 className="mt-6 text-xl font-semibold text-gray-700 dark:text-white">
            Dashboard management
          </h3>

          <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 leading-relaxed">
            We help you execute your plan and deliver results.
          </p>
        </div>

      
        <div className="bg-[#dde6f2] dark:bg-[#1e293b] rounded-3xl p-6 transition hover:shadow-xl">
          
          <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-4 shadow-sm">
            <img
              src={assets.work_fitness_app}
              alt="Fitness App"
              className="rounded-xl w-full object-cover"
            />
          </div>

          <h3 className="mt-6 text-xl font-semibold text-gray-700 dark:text-white">
            Fitness app promotion
          </h3>

          <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 leading-relaxed">
            We help you create a marketing strategy that drives results.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurWork;