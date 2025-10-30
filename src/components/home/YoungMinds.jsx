import React from 'react';

const glassBoxes = [
  {
    icon: '🏆',
    title: 'Strong Academics',
    description: 'BSE curriculum with expert faculty and proven results.',
  },
  {
    icon: '📘',
    title: 'Strong Academics',
    description: 'BSE curriculum with expert faculty and proven results.',
  },
  {
    icon: '🎨',
    title: 'Holistic Growth',
    description: 'Sports, clubs, arts, and cultural activities.',
  },
  {
    icon: '🌎',
    title: 'Future Ready Career',
    description: 'Counseling, global tie-ups, and college placements.',
  },
  {
    icon: '🛡️',
    title: 'Safe & Nurturing Campus',
    description: 'Secure, supportive, and inclusive environment.',
  },
  {
    icon: '🏆',
    title: 'Strong Academics',
    description: 'BSE curriculum with expert faculty and proven results.',
  },
];

// Glassmorphism card style per your specs
const cardStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 17px',
  gap: '10px',
  position: 'relative',
  width: '243px',
  height: '170px',
  background: 'rgba(255, 255, 255, 0.2)',
  border: '1px solid #EFEFEF',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  borderRadius: '8px',
};

const YoungMinds = () => {
  return (
    <div
      className="w-full min-h-[800px] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/young-minds/young-mind-bg.svg')"
      }}
    >
      {/* Main container */}
      <div className="max-w-[1240px] 2xl:max-w-[1340px] mx-auto px-6 py-24 flex items-stretch gap-12">
        {/* Left Side: SVG/Image */}
        <div className="shrink-0 flex items-center min-h-[400px]">
          <img 
            src="/young-minds/young-minds.png"
            alt="Young Minds Grid"
            className="w-[300px] lg:w-[300px] xl:w-[450px] 2xl:w-[500px] h-auto"
            draggable={false}
          />
        </div>
        {/* Right Side: Content & Card Grid */}
        <div className="flex-1 2xl:ml-12 flex flex-col justify-center">
          <h2 className="text-[28px] md:text-[35px] lg:text-[40px] 2xl:text-[48px] font-bold leading-tight text-[#002650] mb-6">
            Inspiring Young Minds,<br/>Building Bright Futures
          </h2>
          <p className="text-gray-600 mb-7 text-[18px] font-[Lato,sans-serif]">
            At Genesis, we go beyond textbooks to create an environment where every child can learn, grow, and lead with confidence.
          </p>
          {/* Use gap-x and gap-y for even spacing between rows and columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16 gap-y-3">
            {glassBoxes.map((box, i) => (
              <div
                key={i}
                style={cardStyle}
                className="hover:scale-[1.025] transition"
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start', // left-align contents
                    width: '100%',
                  }}
                >
                  <span style={{ fontSize: '1.7rem', marginBottom: '12px', textAlign: 'left' }}>{box.icon}</span>
                  <div style={{ fontWeight: 500, fontSize: '18px', marginBottom: '6px', textAlign: 'left' }}>{box.title}</div>
                  <div style={{ fontSize: '16px', color: '#444', textAlign: 'left' }}>{box.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoungMinds;
