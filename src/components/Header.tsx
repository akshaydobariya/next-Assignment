import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-11 py-6 w-full text-center whitespace-nowrap bg-white border border-gray-200 border-solid shadow-lg max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className=" text-xl font-semibold text-black">CheckOut</div>
      <div className="flex items-center text-sm leading-5 text-gray-600 font-[510]">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 my-auto w-4 aspect-square"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 12C9.3141 12 12 9.3137 12 6C12 2.68629 9.3141 0 6 0C2.68594 0 0 2.68629 0 6C0 9.3137 2.68594 12 6 12ZM4.44825 2.75068L3.27049 1.57311C2.58145 1.99887 1.99926 2.58099 1.57343 3.26998L2.75107 4.44743C3.10591 3.70622 3.70694 3.10534 4.44825 2.75068ZM9.2491 4.44778C8.8943 3.70652 8.2934 3.10558 7.5521 2.75084L8.7297 1.57326C9.4188 1.99905 10.0009 2.58121 10.4267 3.27022L9.2491 4.44778ZM9.2494 7.55166L10.4268 8.7296C10.0011 9.4186 9.4189 10.0008 8.7299 10.4267L7.55218 9.2491C8.2936 8.8943 8.8946 8.2931 9.2494 7.55166ZM4.44802 9.2492L3.27015 10.4267C2.58112 10.0009 1.99896 9.4187 1.57318 8.7296L2.75074 7.55189C3.10551 8.2933 3.70658 8.8944 4.44802 9.2492ZM6 8.8C4.4536 8.8 3.2 7.5464 3.2 6C3.2 4.4536 4.4536 3.2 6 3.2C7.5464 3.2 8.8 4.4536 8.8 6C8.8 7.5464 7.5464 8.8 6 8.8Z"
            fill="#464F60"
          />
        </svg>

        <div className="grow">Help & Support</div>
      </div>
    </div>
  );
};

export default Header;
