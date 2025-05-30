import bannerImg from "../assets/banner-img-1.png";

const Banner = () => {
  return (
    <div className="relative">
      <img className="rounded-2xl" src={bannerImg} alt="" />
      <div className="inset-0 flex justify-center items-center absolute flex-col">
        <h3 className="text-3xl font-bold text-white w-5/12">
          It avoids subjective claims or exaggeration that might raise red flags
          legally
        </h3>
        <p className="text-sm text-gray-400 mt-4 w-7/12">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
    </div>
  );
};

export default Banner;
