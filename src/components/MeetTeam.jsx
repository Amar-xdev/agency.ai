import React from "react";

const teamData = [
  {
    name: "Haley Carter",
    role: "CEO & founder",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "James Walker",
    role: "Ads manager",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Jessica Morgan",
    role: "Vice president",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ashley Bennett",
    role: "Marketing & sales",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Emily Parker",
    role: "Content marketer",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Ryan Mitchell",
    role: "Content writer",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Megan Brooks",
    role: "Performance manager",
    img: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "Amber Foster",
    role: "Senior writer",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const MeetTeam = () => {
  return (
    <section className="bg-[#f5f7fb] dark:bg-[#0f172a] py-20 px-4 sm:px-8 lg:px-24 transition-colors duration-300">

      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-700 dark:text-white mb-4">
          Meet the team
        </h1>

        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">
          A passionate team of digital experts dedicated to your brands success.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {teamData.map((member, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition"
          >
            
            <img
              src={member.img}
              alt={member.name}
              className="w-14 h-14 rounded-full object-cover"
            />

           
            <div>
              <h3 className="text-gray-700 dark:text-white font-semibold">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default MeetTeam;