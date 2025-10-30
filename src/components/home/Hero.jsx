// import React from 'react'
// import Banner from '../../assets/banner.png'

// const Hero = () => {
//   return (
//     <div style={{
//       backgroundImage: `url(${Banner})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       height: '100vh',
//       width: '100%'
//     }}>
//       <div className='text-red-800'>
//         home
//       </div>
//     </div>
//   )
// }

// export default Hero
// src/components/Hero.jsx
// src/components/Hero.jsx

// src/components/Hero.jsx

// src/components/Hero.jsx

import React from 'react';
import bannerImage from '../../assets/banner.png'; 
import centralLogo from '../../assets/Logo.svg'; // Assuming the school crest logo is now correctly named/imported

// // --- Placeholder Icons for Feature Cards (Replace with your actual SVGs/images) ---
// const placeholderIcons = {
//   // NOTE: Ensure these paths are correct relative to your project structure
//   academics: 'src/assets/1.svg',
//   athletics: 'src/assets/2.svg',
//   artsCulture: 'src/assets/3.svg',
//   campusLife: 'src/assets/4.svg',
// };

// // Data for the feature cards
// const featureCards = [
//   { title: 'Academics', iconPath: placeholderIcons.academics },
//   { title: 'Athletics', iconPath: placeholderIcons.athletics },
//   { title: 'Arts & Culture', iconPath: placeholderIcons.artsCulture },
//   { title: 'Campus Life', iconPath: placeholderIcons.campusLife },
// ];

// // *********************************************************
// // ADJUSTED FEATURE CARD COMPONENT
// // *********************************************************
// const FeatureCard = ({ title, iconPath }) => (
//   // Use a defined height (e.g., h-64) or increased vertical padding (py-10) to make the card taller.
//   // We'll use increased vertical padding and flex-grow to ensure the title and icon are well-separated.
//   <div className="flex flex-col bg-white px-6 py-10 shadow-xl w-full font-lato h-64  "> 
    
//     {/* Card Title (font-kameron, large text) */}
//     {/* Increased mb-8 (or more) to push the title down/separate it from the icon section */}
//     <h4 className="text-xl font-bold text-gray-900 mb-12 font-kameron">{title}</h4> 
    
//     {/* Icon and Arrow Row */}
//     <div className="flex items-center justify-between mt-auto">
//       <div className="flex-shrink-0">
//         {/* The icon seems positioned lower in the visual area, hence the larger separation above */}
//         <img src={iconPath} alt={`${title} Icon`} className="h-16 w-auto" /> 
//       </div>
//       {/* Arrow */}
//       <span className="text-amber-400 text-4xl font-light ml-4">→</span>
//     </div>
//   </div>
// );


const Hero = () => {
  return (
    <div className="relative"> 
      
      {/* Hero Content & Background Section */}rel
      <div className="min-h-screen flex items-center justify-center  sm:pt-[100px]  ">
        
        {/* Background Image (Non-fixed) */}
        <div 
          className=" bg-cover bg-center " 
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
      

        {/* Hero Text Content (Centered) */}
        <div className="relative z-10 text-center text-white p-4 max-w-4xl mx-auto">
          <img 
            className="mx-auto h-28 w-auto mb-5 drop-shadow-lg" 
            src={centralLogo} // Corrected: Using centralLogo import
            alt="Genesis School Crest" 
          />
          
          {/* Kameron: Primary Title */}
          <h1 className="text-5xl font-bold mb-1 tracking-wide font-kameron">Genesis School</h1>
          
          {/* Lato: Subtitle (Large Text) */}
          <h2 className="text-xl font-normal tracking-wider mb-6 italic font-lato">The Genesis School</h2>
          
          {/* Kameron: Tagline */}
          <h3 className="text-4xl font-extrabold mb-5 leading-tight font-kameron">
            Excellence in <span className="text-amber-400">Education</span>, Excellence in <span className="text-amber-400">Life</span>
          </h3>
          
          {/* Lato: Description (Para) */}
          <p className="max-w-3xl mx-auto text-base mb-8 font-light leading-relaxed px-2 font-lato">
            From the first step in pre-primary to the final years of senior secondary, we guide every learner with a world-class curriculum, expert faculty, Olympiad and competitive exam training, and holistic support that ensures success in higher education and beyond.
          </p>
          
          {/* Lato: Button Text (Large Text) */}
          <button 
            className="bg-amber-500 text-[#001f3f] font-semibold px-8 py-3 rounded-sm text-lg hover:bg-amber-400 transition duration-200 shadow-xl font-lato"
          >
            Book Campus Tour
          </button>
        </div>
      </div>
      </div>
      
      {/* Feature Cards Section */}
      <div className="relative z-20 -mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featureCards.map((card) => (
              <FeatureCard 
                key={card.title} 
                title={card.title} 
                iconPath={card.iconPath}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;