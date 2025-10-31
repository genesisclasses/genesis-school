// import React from 'react'
    
// import bannerImage from '../../assets/banner.png'; 
// import centralLogo from '../../assets/Logo.svg'; // Assuming the school crest logo is now correctly named/imported


// const Herocard = () => {
    
//         // --- Placeholder Icons for Feature Cards (Replace with your actual SVGs/images) ---
//         const placeholderIcons = {
//             // NOTE: Ensure these paths are correct relative to your project structure
//             academics: 'src/assets/1.svg',
//             athletics: 'src/assets/2.svg',
//             artsCulture: 'src/assets/3.svg',
//             campusLife: 'src/assets/4.svg',
//           };
          
//           // Data for the feature cards
//           const featureCards = [
//             { title: 'Academics', iconPath: placeholderIcons.academics },
//             { title: 'Athletics', iconPath: placeholderIcons.athletics },
//             { title: 'Arts & Culture', iconPath: placeholderIcons.artsCulture },
//             { title: 'Campus Life', iconPath: placeholderIcons.campusLife },
//           ];
          
//   return (

//         // *********************************************************
//         // ADJUSTED FEATURE CARD COMPONENT
//         // *********************************************************
//         const FeatureCard = ({ title, iconPath }) => (
//           // Use a defined height (e.g., h-64) or increased vertical padding (py-10) to make the card taller.
//           // We'll use increased vertical padding and flex-grow to ensure the title and icon are well-separated.
//           <div className="flex flex-col bg-white px-6 py-10 shadow-xl w-full font-lato h-64  "> 
            
//             {/* Card Title (font-kameron, large text) */}
//             {/* Increased mb-8 (or more) to push the title down/separate it from the icon section */}
//             <h4 className="text-xl font-bold text-gray-900 mb-12 font-kameron">{title}</h4> 
            
//             {/* Icon and Arrow Row */}
//             <div className="flex items-center justify-between mt-auto">
//               <div className="flex-shrink-0">
//                 {/* The icon seems positioned lower in the visual area, hence the larger separation above */}
//                 <img src={iconPath} alt={`${title} Icon`} className="h-16 w-auto" /> 
//               </div>
//               {/* Arrow */}
//               <span className="text-amber-400 text-4xl font-light ml-4">→</span>
//             </div>
//           </div>
//         );
        
    
//   )
// // }
// import React from 'react';

// // --- 1. Custom Icon Placeholders (Replace with your actual SVGs/Images) ---

// // NOTE: In a real app, you would define or import the actual SVG components
// // for each illustration (Academics, Athletics, Arts, Campus Life).
// // For this example, we'll use a functional component that accepts a title
// // to represent the style of the custom illustrations in the image.

// const IllustrationPlaceholder = ({ title }) => {
//     // Basic styling to mimic the black and yellow sketch-like illustrations
//     const getIconStyles = (t) => {
//         // Simple switch to vary the placeholder appearance slightly
//         switch (t) {
//             case 'Academics':
//                 return "bg-yellow-100 border-2 border-gray-800 text-gray-800";
//             case 'Athletics':
//                 return "bg-yellow-400 border-2 border-gray-800 text-gray-800";
//             case 'Arts & Culture':
//                 return "bg-yellow-200 border-2 border-gray-800 text-gray-800";
//             case 'Campus Life':
//                 return "bg-yellow-500 border-2 border-gray-800 text-gray-800";
//             default:
//                 return "bg-yellow-300 border-2 border-gray-800 text-gray-800";
//         }
//     };

//     return (
//         <div 
//             className={`w-full h-full flex items-center justify-center text-xs font-bold rounded-lg p-2 ${getIconStyles(title)}`}
//         >
//             {/* The actual custom illustration would be here */}
//             {title.split(' ')[0]} Icon
//         </div>
//     );
// };


// // --- 2. The Reusable Card Component ---

// const Card = ({ title, illustration }) => {
//   return (
//     <div className="flex flex-col w-full bg-white shadow-xl rounded-lg p-6 transition duration-300 ease-in-out hover:shadow-2xl cursor-pointer overflow-hidden">
      
//       {/* Card Title */}
//       <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>

//       {/* Illustration Area */}
//       {/* We use flex-grow and a fixed height to ensure consistent card size */}
//       <div className="flex-grow flex items-center justify-start h-24 mb-4">
//         {illustration}
//       </div>

//       {/* Arrow (Icon from the original image) */}
//       <div className="flex justify-end pt-2">
//         <svg
//           className="w-8 h-8 text-yellow-600 transform transition duration-300 ease-in-out hover:translate-x-1"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M13 5l7 7-7 7M5 12h14"
//           ></path>
//         </svg>
//       </div>
//     </div>
//   );
// };


// // --- 3. Card Data Structure ---

// const CARD_DATA = [
//   {
//     title: "Academics",
//     illustration: <IllustrationPlaceholder title="Academics" />,
//   },
//   {
//     title: "Athletics",
//     illustration: <IllustrationPlaceholder title="Athletics" />,
//   },
//   {
//     title: "Arts & Culture",
//     illustration: <IllustrationPlaceholder title="Arts & Culture" />,
//   },
//   {
//     title: "Campus Life",
//     illustration: <IllustrationPlaceholder title="Campus Life" />,
//   },
// ];


// // --- 4. Main Exported Component (The Section Container) ---

// const Herocard = () => {
//   return (
//     // The key styling for the overlap: -mt-20 pulls the section up over the hero.
//     // relative z-10 ensures it sits on top.
//     <section className="relative z-10 -mt-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Responsive grid for the four cards */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {CARD_DATA.map((card) => (
//             <Card
//               key={card.title}
//               title={card.title}
//               illustration={card.illustration}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };







// Herocard.jsx (or CardsSection.jsx)
import React from 'react';

// --- 1. Your Provided Data Structure ---

// Define the paths for your SVG icons
const placeholderIcons = {
  // NOTE: Ensure these paths are correct relative to your project structure
  academics: 'src/assets/1.svg',
  athletics: 'src/assets/2.svg',
  artsCulture: 'src/assets/3.svg',
  campusLife: 'src/assets/4.svg',
  // ADDED: Path for the arrow SVG
  arrow: 'src/assets/arrow.svg', 
};

// Data for the feature cards
const featureCards = [
  { title: 'Academics', iconPath: placeholderIcons.academics },
  { title: 'Athletics', iconPath: placeholderIcons.athletics },
  { title: 'Arts & Culture', iconPath: placeholderIcons.artsCulture },
  { title: 'Campus Life', iconPath: placeholderIcons.campusLife },
];


// --- 2. The Reusable Card Component (Adjusted) ---

const Card = ({ title, iconPath }) => {
  return (
    // Card styling
    <div className="flex flex-col w-full bg-white shadow-xl rounded-lg p-6 transition duration-300 ease-in-out hover:shadow-2xl cursor-pointer">
      
      {/* Card Title */}
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>

      {/* Main Content Area (Illustration and Arrow) */}
      {/* flex-col flex-grow ensures this area takes up remaining space and arranges content vertically */}
     <div className='flex'>
      <div className="flex flex-col flex-grow justify-end">
        
        {/* Illustration/Icon Area */}
        {/* We use items-end to push the image to the bottom of this container, lowering it. */}
        
          <img 
            src={iconPath} 
            alt={`${title} Icon`} 
            className="h-full w-auto max-h-24 flex items-end justify-start h-24 mt-3 mb-0"
          />
        </div>

        {/* Arrow at the bottom, aligned with the image's "line" */}
        {/* Using a bottom margin on the image and top padding on the arrow container 
           helps align them visually near the baseline. */}
        <div className="flex justify-end pt-2">
          {/* Replaced SVG path with img tag for arrow.svg */}
          <img 
            src={placeholderIcons.arrow} // Uses the new arrow SVG path
            alt="Arrow" 
            // Tailwind classes for size and hover effect
            className="w-8 h-8 transform transition duration-300 ease-in-out hover:translate-x-1" 
          />
        </div>
      </div>
      </div>
    
  );
};


// --- 3. Main Exported Component for Home.jsx (Unchanged) ---

const Herocard = () => {
  return (
    // THE KEY FOR OVERLAP: -mt-20 and relative z-10
    <section className="relative z-10 -mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Responsive grid for the four cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              iconPath={card.iconPath}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Herocard;
// // export default Herocard;
// import React from 'react';

// // --- 1. Your Provided Data Structure ---

// // Define the paths for your SVG icons
// const placeholderIcons = {
//   // NOTE: Ensure these paths are correct relative to your project structure
//   // In a real React app, you often need to 'import' SVGs instead of using a string path
//   // unless you're serving them from the 'public' folder.
//   academics: 'src/assets/1.svg',
//   athletics: 'src/assets/2.svg',
//   artsCulture: 'src/assets/3.svg',
//   campusLife: 'src/assets/4.svg',
// };

// // Data for the feature cards
// const featureCards = [
//   { title: 'Academics', iconPath: placeholderIcons.academics },
//   { title: 'Athletics', titleClass: 'mt-1', iconPath: placeholderIcons.athletics }, // Added mt-1 to align Athletics title better if needed
//   { title: 'Arts & Culture', iconPath: placeholderIcons.artsCulture },
//   { title: 'Campus Life', iconPath: placeholderIcons.campusLife },
// ];


// // --- 2. The Reusable Card Component ---

// const Card = ({ title, iconPath }) => {
//   return (
//     // The card styling for shadow, background, and hover effect
//     <div className="flex flex-col w-full bg-white shadow-xl rounded-lg p-6 transition duration-300 ease-in-out hover:shadow-2xl cursor-pointer">
      
//       {/* Card Title - Exact look from the image: Bold, clean text */}
//       <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>

//       {/* Illustration/Icon Area */}
//       <div className="flex-grow flex items-center justify-start h-24 mb-4">
//         {/*
//           Using the img tag to load your provided SVG path.
//           The h-full and w-auto ensure the image scales correctly within the container.
//         */}
//         <img 
//           src={iconPath} 
//           alt={`${title} Icon`} 
//           className="h-full w-auto max-h-24"
//         />
//       </div>

//       {/* Arrow (Icon from the original image) */}
//       <div className="flex justify-end pt-2">
//         {/* This creates the right-pointing arrow icon (similar to the image) */}
//         <svg
//           className="w-8 h-8 text-amber-600 transform transition duration-300 ease-in-out hover:translate-x-1"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M13 5l7 7-7 7M5 12h14"
//           ></path>
//         </svg>
//       </div>
//     </div>
//   );
// };


// // --- 3. Main Exported Component for Home.jsx ---

// const Herocard = () => {
//   return (
//     // THE KEY FOR OVERLAP: 
//     // -mt-20 pulls the component up over the Hero.jsx component.
//     // relative z-10 ensures the cards are drawn on top of the hero's background.
//     <section className="relative z-10 -mt-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Responsive grid for the four cards */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {featureCards.map((card) => (
//             <Card
//               key={card.title}
//               title={card.title}
//               iconPath={card.iconPath}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Herocard;

