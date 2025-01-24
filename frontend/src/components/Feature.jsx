import React from 'react';
import { TbNetwork } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbClockEdit } from "react-icons/tb";

export const Feature = () => {
  return (
    <section className="bg-gradient-to-t  from-gray-500 via-gray-900 to-gray-950 p-4 text-white">

      <div class="relative flex items-center justify-center space-x-8 lg:w-fit">
          <div class="w-1/2 animate-fade-left relative flex justify-center">
            <img src="./img/feature.png" alt="feature Image" class="w-full" />
          </div>
          <div class="w-1/2 animate-fade-right relative flex justify-center">
            <h1 className="text-4xl font-semibold text-center mb-12">Our Features</h1>
          </div>

    
      </div>
  
     

      {/* 3 items in a row */}
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-12">
        
        {/* Feature 1 */}
          <div className="feature text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300">
            <div className="icon mb-4 flex justify-center items-center">
              <TbNetwork size="60px" color="white"  />
            </div>
            <h2 className="text-xl font-semibold mb-4">Online Work</h2>
            <p className="font-light text-gray-300">
              Online work offers flexibility, reduces commute time, and gives access to global talent. It allows for more efficient collaboration but requires balancing work and communication challenges.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300">
            <div className="icon mb-4 flex justify-center items-center">
              <HiOutlineBuildingOffice2 size="60px" color="white" />
            </div>
            <h2 className="text-xl font-semibold mb-4">Comfortable Place</h2>
            <p className="font-light text-gray-300">
              A comfortable workspace boosts productivity. We provide ergonomic furniture, natural light, and spaces for collaboration, all to enhance well-being and creativity.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature text-center p-6 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300">
            <div className="icon mb-4 flex justify-center items-center">
              <TbClockEdit size="60px" color="white" />
            </div>
            <h2 className="text-xl font-semibold mb-4">Hours of Your Choice</h2>
            <p className="font-light text-gray-300">
              We offer flexible hours to help employees balance work and personal life. This flexibility leads to higher satisfaction, reduced stress, and increased productivity.
            </p>
          </div>

      </div>
    </section>
  );
};
