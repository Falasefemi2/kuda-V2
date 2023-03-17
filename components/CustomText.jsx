"use client"

const CustomText = ({ text, para, img,className }) => {
  return <div className="mt-[12.5%]">
    <div className="flex items-center justify-between">
      <div className="w-[45%]">
        <div className="max-w-[420px]">
          <h1 className="leading-[1.38] text-4xl mb-5 font-black text-primary-color">
            <span>{text}</span>
          </h1>
          <p className="max-w-[350px] text-black-color text-base">{para}</p>
        </div>
      </div>
      <div className="w-[55%]">
        <img src={img} alt="img" />
      </div>
    </div>
  </div>;
};

export default CustomText;
