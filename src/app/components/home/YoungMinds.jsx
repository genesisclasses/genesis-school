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

// Glass-style box (do NOT remove, per your request)
const cardStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 17px',
  gap: '10px',
  position: 'relative',
  width: '100%',
  maxWidth: '280px',
  minWidth: '0',
  height: '170px',
  background: 'rgba(255, 255, 255, 0.2)',
  border: '1px solid #EFEFEF',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  borderRadius: '8px',
};

const textBox = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
};

// Internal CSS for font sizes and margins
const styles = `
  .youngminds-icon {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  .youngminds-title {
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 4px;
    text-align: left;
  }
  .youngminds-desc {
    font-size: 0.93rem;
    color: #444;
    text-align: left;
  }

  @media (min-width: 480px) {
    .youngminds-icon {
      font-size: 1.24rem;
      margin-bottom: 10px;
    }
    .youngminds-title {
      font-size: 1.11rem;
      margin-bottom: 6px;
    }
    .youngminds-desc {
      font-size: 1.01rem;
    }
  }
  @media (min-width: 768px) {
    .youngminds-icon {
      font-size: 1.35rem;
      margin-bottom: 12px;
    }
    .youngminds-title {
      font-size: 1.17rem;
    }
    .youngminds-desc {
      font-size: 1.08rem;
    }
  }
  @media (min-width: 1024px) {
    .youngminds-title {
      font-size: 16px;
    }
    .youngminds-desc {
      font-size: 14px;
    }
  }
`;

const YoungMinds = () => {
  return (
    <div
      className="w-full xl:min-h-[800px] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('assets/home/young-minds/young-mind-bg.svg')"
      }}
    >
      {/* Internal Responsive Styles */}
      <style>{styles}</style>
      <div className="max-w-[1240px] 2xl:max-w-[1340px] mx-auto px-2 md:px-6 py-24 flex flex-col lg:flex-row items-stretch gap-12">
        {/* Left Side: SVG/Image */}
        <div className="shrink-0 flex items-center justify-center min-h-[340px]">
          <img 
            src="/assets/home/young-minds/young-minds.png"
            alt="Young Minds Grid"
            className="w-[280px] sm:w-[260px] md:w-[400px] lg:w-[300px] xl:w-[450px] 2xl:w-[500px] h-auto"
            draggable={false}
          />
        </div>
        {/* Right Side: Content & Card Grid */}
        <div className="flex-1 2xl:ml-12 flex flex-col justify-center">
          <h2 className="text-center md:text-left text-[28px] sm:text-[29px] md:text-[35px] lg:text-[40px] 2xl:text-[48px] font-bold leading-tight text-[#002650] mb-6">
            Inspiring Young Minds,<br/>Building Bright Futures
          </h2>
          <p className="text-center md:text-left  text-gray-600 mb-7 text-[16px] sm:text-[18px] ">
            At Genesis, we go beyond textbooks to create an environment where every child can learn, grow, and lead with confidence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-x-0 lg:gap-x-4 gap-y-4">
            {glassBoxes.map((box, i) => (
              <div
                key={i}
                style={cardStyle}
                className="hover:scale-[1.025] transition mx-auto"
              >
                <div style={textBox}>
                  <span className="youngminds-icon">{box.icon}</span>
                  <div className="youngminds-title">{box.title}</div>
                  <div className="youngminds-desc">{box.description}</div>
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
