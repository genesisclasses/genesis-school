import Image from 'next/image';

const eventsData = [
  {
    title: "Events & Sports",
    description: [
      "At The Genesis School, we believe that true learning extends beyond classrooms. Our vibrant calendar of events and sports activities encourages students to discover their strengths, showcase talents, and build lifelong values of teamwork and discipline. From annual cultural celebrations to inter-house competitions, every occasion is an opportunity to learn collaboration, leadership, and sportsmanship.",
      "Our well-equipped playgrounds and professional guidance ensure active participation in games such as basketball, cricket, skating, and athletics. Each event at The Genesis School reflects our commitment to holistic education — shaping students who are not only academically accomplished but also confident, spirited, and resilient individuals prepared to excel in every sphere of life."
    ],
    image: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762408444/Frame_48095600_1_w3sqc1.webp",
    imgWidth: 555,
    imgHeight: 560,
    reverse: true,
  },
  {
    title: "Co-Curricular Activities",
    description: [
      "At The Genesis School, learning finds life beyond the classroom. Our co-curricular activities open doors to imagination, expression, and discovery. Whether through music, dance, theatre, or art, every child learns to communicate ideas and emotions creatively. Sports, debates, and club projects strengthen collaboration and confidence, teaching lessons that extend far beyond school walls. ",
      "Each initiative is thoughtfully designed to balance intellect with empathy, helping students build character while exploring their passions. By celebrating individuality and teamwork in equal measure, The Genesis School shapes learners who not only perform well academically but also shine with creativity, courage, and compassion in everything they do."
    ],
    image: "https://res.cloudinary.com/dluulfzrc/image/upload/v1764306893/co-activities_hknam0.webp",
    imgWidth: 555,
    imgHeight: 436,
    reverse: false,
  },
  {
    title: "Events",
    description: [
      "Events at The Genesis School bring learning to life through celebration and creativity. From cultural performances and art exhibitions to science fairs and literary fests, every occasion encourages students to express themselves with confidence. These experiences foster teamwork, leadership, and respect for diversity, helping learners grow beyond academics.",
      "Annual functions, assemblies, and inter-house activities build community spirit and strengthen the bond between students, teachers, and parents. Each event is thoughtfully designed to balance joy with purpose, ensuring that every child finds a platform to shine. Every applause becomes motivation, every stage a stepping stone — inspiring students to embrace excellence and carry these lessons far beyond school life."
    ],
    image: "https://res.cloudinary.com/dluulfzrc/image/upload/v1764306894/co-events_qqzf5d.webp",
    imgWidth: 537,
    imgHeight: 508,
    reverse: true,
  },
  {
    title: "Parent Communication",
    description: [
      "At The Genesis School, we believe that education thrives on partnership; between students, teachers, and parents. Open, consistent communication helps us understand every child better and support their growth effectively. Through regular meetings, progress reports, and interactive sessions, parents stay informed and involved in their child’s learning journey. Our digital communication platforms ensure timely updates, while personalised feedback helps parents track both academic and emotional development.",
      "Parent-Teacher Meetings, counselling sessions, and community events provide space for open dialogue and shared responsibility. This transparent relationship builds trust and ensures that every decision taken is in the best interest of the child. At The Genesis School, parents are not just observers but active partners in shaping confident, capable, and compassionate learners for tomorrow."
    ],
    image: "https://res.cloudinary.com/dluulfzrc/image/upload/v1762409795/event-4-1_diqwfc.webp",
    imgWidth: 555,
    imgHeight: 560,
    reverse: false,
  }
];

const Events = () => (
  <div
    id="co-curricular-section"
    className="w-full flex justify-center pt-12 lg:pt-12 lg:pb-12 bg-white"
  >
    <div className="max-w-[1417px] w-full">
      {eventsData.map((event, idx) => (
        <div
          key={event.title}
          id={
            event.title === "Events & Sports"
              ? "events-sports"
              : event.title === "Co-Curricular Activities"
              ? "arts-culture"
              : `event-${idx}-${event.title.replace(/\s+/g, "-").toLowerCase()}`
          }
          className={`flex flex-col lg:flex-row items-center mb-20 ${
            event.reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:w-1/2 flex justify-center px-4">
            <div
              className="
                w-full max-w-[390px] sm:max-w-[350px] md:max-w-[420px]
                lg:max-w-[480px] xl:max-w-[555px]
              "
            >
              <Image
                src={event.image}
                alt={event.title}
                width={event.imgWidth}
                height={event.imgHeight}
                className="w-full h-auto rounded-2xl"
                style={{ objectFit: "contain" }}
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
              ${idx % 2 === 0 ? "text-left" : "text-right"}
            `}
          >
            <h2 className="text-[32px] md:text-[40px] xl:text-[48px] font-semibold text-[#002650] mb-2">
              {event.title}
            </h2>

            {event.description.map((para, dIdx) => (
              <p
                key={dIdx}
                className={`text-[#777777] text-[16px] font-medium ${
                  dIdx !== event.description.length - 1 ? "mb-4" : ""
                }`}
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
