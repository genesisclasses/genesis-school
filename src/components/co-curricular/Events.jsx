import Image from 'next/image';

const eventsData = [
  {
    title: "Events & Sports",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    ],
    image: "/assets/co-curricular/event-sports.png",
    imgWidth: 555,
    imgHeight: 560,
    reverse: true,
  },
  {
    title: "Co-Curricular Activities",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    ],
    image: "/assets/co-curricular/curricular-activites.png",
    imgWidth: 555,
    imgHeight: 436,
    reverse: false,
  },
  {
    title: "Events",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    ],
    image: "/assets/co-curricular/events.png",
    imgWidth: 537,
    imgHeight: 508,
    reverse: true,
  },
  {
    title: "Parent Communication",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
    ],
    image: "/assets/co-curricular/parent-communication.png",
    imgWidth: 555,
    imgHeight: 560,
    reverse: false,
  }
];

const Events = () => (
  <div className="w-full flex justify-center pt-12 lg:pt-12 lg:pb-12 bg-white">
    <div className="max-w-[1417px] w-full">
{eventsData.map((event, idx) => ( // <-- ADDED idx here
        <div
          key={event.title}
          className={`flex flex-col lg:flex-row items-center mb-20 ${event.reverse ? 'lg:flex-row-reverse' : ''}`}
        >
          <div className="w-full lg:w-1/2 flex justify-center px-4">
            <div className="
              w-full max-w-[390px] sm:max-w-[350px] md:max-w-[420px]
              lg:max-w-[480px] xl:max-w-[555px]
            ">
              <Image
                src={event.image}
                alt={event.title}
                width={event.imgWidth}
                height={event.imgHeight}
                className="w-full h-auto rounded-2xl"
                style={{objectFit: "contain"}}
                sizes="
                  (max-width: 640px) 80vw, 
                  (max-width: 1024px) 40vw, 
                  (max-width: 1280px) 32vw, 
                  25vw
                "
                priority
              />
            </div>
          </div>
          <div
            className={`
              w-full px-4 lg:px-8 py-6
              ${idx % 2 === 0 ? 'text-left' : 'text-right'}
              lg:w-1/2 lg:text-left
            `}
          >
            <h2 className="text-[32px] sm:text-[32px] md:text-[35px] xl:text-[45px] 2xl:text-[48px] font-semibold text-[#002650] mb-2 ">
              {event.title}
            </h2>
            {event.description.map((para, idx) => (
              <p
                key={idx}
                className={`text-[#777777] text-[16px] font-medium ${idx !== event.description.length - 1 ? 'mb-4' : ''}`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Events;
