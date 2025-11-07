import Image from 'next/image'

const bannerImg = 'https://res.cloudinary.com/dluulfzrc/image/upload/v1762401405/dmyx5uktdglunds3p94m_v7oi4q.webp'

const CocurricularBanner = () => {
  return (
    <div className="relative w-full h-[389px] md:h-[300px] lg:h-[300px] xl:h-[387px] flex items-center justify-center">
      <Image
        src={bannerImg}
        alt="Co-curricular Activities"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-[32px] sm:text-[32px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[48px] font-semibold text-center">
          This Is Where Talent Finds Its Stage
        </h1>
        <p className="text-white text-[16px] md:text-lg mt-4 text-center md:max-w-[630px] lg:max-w-[710px] xl:max-w-4xl font-medium">
          At The Genesis School, we blend traditional Indian values with modern pedagogy to nurture confident, compassionate global citizens.
        </p>
      </div>
    </div>
  )
}

export default CocurricularBanner
