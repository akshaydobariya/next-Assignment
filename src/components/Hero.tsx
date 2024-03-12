"use client";
import { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("payment");
  const [selectedOption, setSelectedOption] = useState("products");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdvance, setIsOpenAdvance] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownAdvance = () => {
    setIsOpenAdvance(!isOpenAdvance);
  };

  return (
    <>
      <div className="flex gap-5 justify-between px-6 py-5 vw-100 whitespace-nowrap border-b border-gray-200 border-solid max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-3 my-auto text-2xl leading-8 font-[590] text-zinc-900">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 w-6 aspect-square m-auto"
          >
            <path
              d="M1 13L7 7M7 7L13 1M7 7L1 1M7 7L13 13"
              stroke="#111111"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="grow">Create Payment Link</div>
        </div>
        <div className="justify-center px-3 py-2 text-sm text-white rounded-lg border border-indigo-200  border-solid bg-indigo-600">
          Create Link
        </div>
      </div>
      <div className="flex gap-1">
        <div className="flex-10 p-3 w-90">
          <div className="flex flex-col mt-4 text-black max-md:mt-10">
            <div className="text-2xl text-center font-[590] text-zinc-900">
              Choose Link Type
            </div>
            <div className="flex flex-col py-5 pr-20 pl-5 mt-5 w-full bg-white rounded-xl border border-indigo-400 border-solid max-md:pr-5">
              <div className="flex gap-5 text-base font-[590] max-md:mr-1.5">
                <input
                  type="radio"
                  value="products"
                  name="payment"
                  checked={selectedOption === "products"}
                  onChange={() => setSelectedOption("products")}
                />
                <div className="flex-auto">Products or Subscriptions</div>
              </div>
              <div className="self-end text-xs whitespace-nowrap font-[274] max-md:mr-1.5 ml-7">
                Best for e-commerce or Software-as-a-Service
              </div>
            </div>
            <div className="flex flex-col py-4 pr-16 pl-5 mt-4 w-full bg-white rounded-xl border border-solid border-neutral-200 max-md:pr-5">
              <div className="flex gap-5 text-base font-[590]">
                <input
                  type="radio"
                  value="customers"
                  name="payment"
                  checked={selectedOption === "customers"}
                  onChange={() => setSelectedOption("customers")}
                />
                <div className="flex-auto">Customers choose what to pay</div>
              </div>
              <div className="self-end text-xs whitespace-nowrap font-[274]">
                Best for tipping, donations or pay-what-you-want.
              </div>
            </div>
            <div className="flex gap-5 justify-between  mt-5 text-xs leading-6 border border-gray-200 border-solid shadow-sm bg-neutral-100 font-[510] rounded-[48.889px] ">
              <button
                className={`${
                  activeTab === "payment"
                    ? "px-14 py-2 whitespace-nowrap bg-white border border-gray-200 border-solid shadow-lg rounded-[52.593px]"
                    : "px-14 py-2"
                }`}
                onClick={() => setActiveTab("payment")}
              >
                Payment
              </button>

              <button
                className={`${
                  activeTab === "After Payment"
                    ? "px-14 py-2 whitespace-nowrap bg-white border border-gray-200 border-solid shadow-lg rounded-[52.593px]"
                    : "px-14 py-2 "
                }`}
                onClick={() => setActiveTab("After Payment")}
              >
                After Payment
              </button>
            </div>
            {activeTab === "After Payment" && selectedOption === "products" ? (
              <>
                <div className="mt-6 text-2xl font-[590] text-zinc-900">
                  Confirmation page
                </div>
                <div className="flex gap-2 mt-5 text-base text-gray-500 font-[510]">
                  <input type="checkbox" className="w-5" checked />
                  <div className="flex-auto">Show confirmation page.</div>
                </div>
                <div className="flex gap-2 mt-3 text-base text-gray-500 font-[510]">
                  <input type="checkbox" className="w-5" checked />
                  <div className="flex-auto">
                    Replace default with custom message
                  </div>
                </div>
                <div className="self-end px-4 pt-2 pb-8 mt-3 max-w-full text-sm text-gray-400 bg-white rounded-lg border border-solid border-neutral-300 font-[510] w-[355px]">
                  include details, such as delivery date estimates
                  <br />
                  or any other order related information
                </div>
                <div className="flex gap-2 mt-3 text-base text-gray-500 font-[510]">
                  <div className="shrink-0 fill-white h-[18px] w-[18px]" />
                  <input type="checkbox" className="w-5" />
                  <div className="flex-auto">Don’t Show confirmation page</div>
                </div>
                <div className="self-start mt-3.5 ml-7 text-sm text-gray-400 whitespace-nowrap font-[510] max-md:ml-2.5">
                  Redirect customers to your website.
                </div>
              </>
            ) : null}

            {activeTab === "payment" && selectedOption === "products" ? (
              <>
                <div className="mt-6 text-2xl px-2 font-[590] text-zinc-900">
                  Product
                </div>
                <div className="flex gap-5 justify-between px-3.5 py-3 mt-6 w-full text-black whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-200">
                  <div className="flex gap-3">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 w-11 rounded-md aspect-square m-auto"
                    >
                      <g opacity="0.28">
                        <path
                          d="M11.1521 1.58545C11.7112 1.47152 12.2887 1.47152 12.8478 1.58545C13.4842 1.7151 14.0667 2.03793 14.8558 2.47524L19.1172 4.83377C19.902 5.26749 20.488 5.59137 20.9281 6.05989C20.939 6.07147 20.9498 6.08311 20.9605 6.09481L11.9999 10.867L3.03943 6.09486C3.05017 6.08314 3.06099 6.07149 3.07188 6.05989C3.51195 5.59137 4.09798 5.26749 4.88275 4.83377L9.14416 2.47524C9.93327 2.03793 10.5158 1.7151 11.1521 1.58545Z"
                          fill="#13171F"
                        />
                        <path
                          d="M12.9999 22.3797C13.5789 22.2324 14.1299 21.927 14.8558 21.5248L19.1172 19.1662C19.902 18.7325 20.488 18.4086 20.9281 17.9401C21.3168 17.5263 21.6128 17.0361 21.7945 16.5002C22.0011 15.8905 22.0007 15.2292 22.0001 14.365V9.635C22.0005 8.93952 22.0009 8.37547 21.8934 7.86394L12.9999 12.6003L12.9999 22.3797Z"
                          fill="#13171F"
                        />
                      </g>
                      <path
                        d="M2.10661 7.864C1.99905 8.37551 1.99945 8.93954 1.99994 9.63498V14.365C1.99933 15.2292 1.99886 15.8905 2.20552 16.5002C2.38715 17.0361 2.68322 17.5263 3.07191 17.9401C3.51198 18.4086 4.09801 18.7325 4.88279 19.1662L9.1442 21.5248C9.87 21.927 10.4211 22.2324 11 22.3797L10.9999 12.6003L2.10661 7.864Z"
                        fill="#13171F"
                      />
                    </svg>

                    <div className="flex flex-col flex-1 my-auto">
                      <div className="text-base font-[590]">Landing Page</div>
                      <div className="mt-2.5 text-xs font-[510]">$499.00</div>
                    </div>
                  </div>

                  <svg
                    width="4"
                    height="18"
                    viewBox="0 0 4 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 my-auto w-6 aspect-square"
                  >
                    <path
                      d="M2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55228 1 3 1.44772 3 2C3 2.55228 2.55228 3 2 3Z"
                      stroke="#111111"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 10C1.44772 10 1 9.55228 1 9C1 8.44772 1.44772 8 2 8C2.55228 8 3 8.44772 3 9C3 9.55228 2.55228 10 2 10Z"
                      stroke="#111111"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 17C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15C2.55228 15 3 15.4477 3 16C3 16.5523 2.55228 17 2 17Z"
                      stroke="#111111"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex gap-5 justify-between px-3.5 py-3 mt-6 w-full text-black whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-200">
                  <div className="flex gap-3">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 w-11 rounded-md aspect-square m-auto"
                    >
                      <g opacity="0.28">
                        <path
                          d="M11.1521 1.58545C11.7112 1.47152 12.2887 1.47152 12.8478 1.58545C13.4842 1.7151 14.0667 2.03793 14.8558 2.47524L19.1172 4.83377C19.902 5.26749 20.488 5.59137 20.9281 6.05989C20.939 6.07147 20.9498 6.08311 20.9605 6.09481L11.9999 10.867L3.03943 6.09486C3.05017 6.08314 3.06099 6.07149 3.07188 6.05989C3.51195 5.59137 4.09798 5.26749 4.88275 4.83377L9.14416 2.47524C9.93327 2.03793 10.5158 1.7151 11.1521 1.58545Z"
                          fill="#13171F"
                        />
                        <path
                          d="M12.9999 22.3797C13.5789 22.2324 14.1299 21.927 14.8558 21.5248L19.1172 19.1662C19.902 18.7325 20.488 18.4086 20.9281 17.9401C21.3168 17.5263 21.6128 17.0361 21.7945 16.5002C22.0011 15.8905 22.0007 15.2292 22.0001 14.365V9.635C22.0005 8.93952 22.0009 8.37547 21.8934 7.86394L12.9999 12.6003L12.9999 22.3797Z"
                          fill="#13171F"
                        />
                      </g>
                      <path
                        d="M2.10661 7.864C1.99905 8.37551 1.99945 8.93954 1.99994 9.63498V14.365C1.99933 15.2292 1.99886 15.8905 2.20552 16.5002C2.38715 17.0361 2.68322 17.5263 3.07191 17.9401C3.51198 18.4086 4.09801 18.7325 4.88279 19.1662L9.1442 21.5248C9.87 21.927 10.4211 22.2324 11 22.3797L10.9999 12.6003L2.10661 7.864Z"
                        fill="#13171F"
                      />
                    </svg>

                    <div className="flex flex-col flex-1 my-auto">
                      <div className="text-base font-[590]">UX Consultancy</div>
                      <div className="mt-2.5 text-xs font-[510]">$900.00</div>
                    </div>
                  </div>

                  <svg
                    width="4"
                    height="18"
                    viewBox="0 0 4 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 my-auto w-6 aspect-square"
                  >
                    <path
                      d="M2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55228 1 3 1.44772 3 2C3 2.55228 2.55228 3 2 3Z"
                      stroke="#111111"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 10C1.44772 10 1 9.55228 1 9C1 8.44772 1.44772 8 2 8C2.55228 8 3 8.44772 3 9C3 9.55228 2.55228 10 2 10Z"
                      stroke="#111111"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 17C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15C2.55228 15 3 15.4477 3 16C3 16.5523 2.55228 17 2 17Z"
                      stroke="#111111"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex gap-2 justify-center self-center px-3.5 py-1.5 mt-4 text-xs text-center text-blue-600 whitespace-nowrap rounded-3xl border border-blue-600 border-solid bg-blue-600 bg-opacity-10 font-[590]">
                  <div className="grow">Add new Product</div>

                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 aspect-[0.93] w-[13px] m-auto"
                  >
                    <path
                      d="M4.6658 8.88436V4.99932M4.6658 4.99932V1.11427M4.6658 4.99932L0.780762 4.99932M4.6658 4.99932L8.55085 4.99932"
                      stroke="#3461FF"
                      stroke-width="1.11001"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex flex-col text-base text-gray-500 font-[510] max-w-[400px]">
                  <div
                    onClick={toggleDropdown}
                    className="flex gap-5 mt-5 justify-between px-5 w-full text-2xl whitespace-nowrap rounded-md font-[590] text-zinc-900 "
                  >
                    <button
                      type="button"
                      className="inline-flex font-bold text-2xl  outline-none w-full px-4 py-2 bg-white   text-gray-700"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      Option
                    </button>

                    <svg
                      className="-mr-1 ml-2 h-5 w-5 m-auto"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9.5C7.57701 11.6808 9.42293 13.6364 11.4899 15.3172C11.7897 15.5609 12.2103 15.5609 12.5101 15.3172C14.5771 13.6364 16.423 11.6808 18 9.5"
                        stroke="#111111"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  {isOpen && (
                    <div
                      className="flex gap-2 px-5 mt-4"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="py-1" role="none">
                        <div className="flex  gap-2 px-5 mt-4 ">
                          <input
                            type="checkbox"
                            className="block px-4 w-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            checked
                          />
                          Collect name
                        </div>
                        <div className="flex  gap-2 px-5 mt-4 ">
                          <input
                            type="checkbox"
                            className="block px-4 w-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            checked
                          />
                          Collect email
                        </div>
                        <div className="flex  gap-2 px-5 mt-4 ">
                          <input
                            type="checkbox"
                            className="block px-4 w-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          />
                          Collect Customer address
                        </div>
                        <div className="flex  gap-2 px-5 mt-4 ">
                          <input
                            type="checkbox"
                            className="block px-4 w-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          />
                          Add a Custom Field
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col text-base text-gray-500 font-[510] max-w-[400px]">
                  <div
                    onClick={toggleDropdownAdvance}
                    className="flex gap-5 mt-5 justify-between px-5 w-full text-2xl whitespace-nowrap rounded-md font-[590] text-zinc-900 "
                  >
                    <button
                      type="button"
                      className="inline-flex font-bold text-2xl  outline-none w-full px-4 py-2 bg-white   text-gray-700"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      Advanced
                    </button>

                    <svg
                      className="-mr-1 ml-2 h-5 w-5 m-auto"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9.5C7.57701 11.6808 9.42293 13.6364 11.4899 15.3172C11.7897 15.5609 12.2103 15.5609 12.5101 15.3172C14.5771 13.6364 16.423 11.6808 18 9.5"
                        stroke="#111111"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  {isOpenAdvance && (
                    <div
                      className="flex gap-2 px-5 mt-4"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="py-1" role="none">
                        <div className="flex flex-col gap-2 px-5  ">
                          <div className="text-base text-gray-500 font-[510]">
                            Label for Call-To-Action
                          </div>
                          <div className="flex gap-5 w-80 justify-between px-1.5 py-0.5 mt-1 text-sm text-black whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-300 font-[510] ">
                            <button
                              type="button"
                              className="inline-flex text-sm  outline-none w-full px-4 py-2 bg-white   text-gray-700"
                              id="options-menu"
                              aria-haspopup="true"
                              aria-expanded="true"
                            >
                              pay
                            </button>

                            <svg
                              className="-mr-1 ml-2 h-5 w-5 m-auto"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 9.5C7.57701 11.6808 9.42293 13.6364 11.4899 15.3172C11.7897 15.5609 12.2103 15.5609 12.5101 15.3172C14.5771 13.6364 16.423 11.6808 18 9.5"
                                stroke="#111111"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="flex  gap-2 px-5 mt-4 ">
                            <input
                              type="checkbox"
                              className="block px-4 w-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                              checked
                            />
                            Allow Promo codes
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : null}

            {activeTab === "payment" && selectedOption === "customers" ? (
              <>
                <div className="flex flex-col text-base text-gray-500 font-[510] max-w-[400px]">
                  <div
                    onClick={toggleDropdown}
                    className="flex gap-5 mt-5 justify-between px-5 w-full text-2xl whitespace-nowrap rounded-md font-[590] text-zinc-900 "
                  >
                    <button
                      type="button"
                      className="inline-flex font-bold text-2xl  outline-none w-full px-4 py-2 bg-white   text-gray-700"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      Option
                    </button>

                    <svg
                      className="-mr-1 ml-2 h-5 w-5 m-auto"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9.5C7.57701 11.6808 9.42293 13.6364 11.4899 15.3172C11.7897 15.5609 12.2103 15.5609 12.5101 15.3172C14.5771 13.6364 16.423 11.6808 18 9.5"
                        stroke="#111111"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  {isOpen && (
                    <div
                      className="flex gap-2 px-5 mt-4"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="py-1" role="none">
                        <div className="flex  gap-2 px-5 mt-4 ">
                          <input
                            type="checkbox"
                            className="block px-4 w-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            checked
                          />
                          Collect name
                        </div>
                        <div className="flex  gap-2 px-5 mt-4 ">
                          <input
                            type="checkbox"
                            className="block px-4 w-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            checked
                          />
                          Collect email
                        </div>
                        <div className="flex  gap-2 px-5 mt-4 ">
                          <input
                            type="checkbox"
                            className="block px-4 w-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          />
                          Collect Customer address
                        </div>
                        <div className="flex  gap-2 px-5 mt-4 ">
                          <input
                            type="checkbox"
                            className="block px-4 w-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          />
                          Add a Custom Field
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col text-base text-gray-500 font-[510] max-w-[400px]">
                  <div
                    onClick={toggleDropdownAdvance}
                    className="flex gap-5 mt-5 justify-between px-5 w-full text-2xl whitespace-nowrap rounded-md font-[590] text-zinc-900 "
                  >
                    <button
                      type="button"
                      className="inline-flex font-bold text-2xl  outline-none w-full px-4 py-2 bg-white   text-gray-700"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      Advanced
                    </button>

                    <svg
                      className="-mr-1 ml-2 h-5 w-5 m-auto"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9.5C7.57701 11.6808 9.42293 13.6364 11.4899 15.3172C11.7897 15.5609 12.2103 15.5609 12.5101 15.3172C14.5771 13.6364 16.423 11.6808 18 9.5"
                        stroke="#111111"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  {isOpenAdvance && (
                    <div
                      className="flex gap-2 px-5 mt-4"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="py-1" role="none">
                        <div className="flex flex-col gap-2 px-5  ">
                          <div className="text-base text-gray-500 font-[510]">
                            Label for Call-To-Action
                          </div>
                          <div className="flex gap-5 w-80 justify-between px-1.5 py-0.5 mt-1 text-sm text-black whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-300 font-[510] ">
                            <button
                              type="button"
                              className="inline-flex text-sm  outline-none w-full px-4 py-2 bg-white   text-gray-700"
                              id="options-menu"
                              aria-haspopup="true"
                              aria-expanded="true"
                            >
                              pay
                            </button>

                            <svg
                              className="-mr-1 ml-2 h-5 w-5 m-auto"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 9.5C7.57701 11.6808 9.42293 13.6364 11.4899 15.3172C11.7897 15.5609 12.2103 15.5609 12.5101 15.3172C14.5771 13.6364 16.423 11.6808 18 9.5"
                                stroke="#111111"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="flex  gap-2 px-5 mt-4 ">
                            <input
                              type="checkbox"
                              className="block px-4 w-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                              checked
                            />
                            Allow Promo codes
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex-1 ">
          <div className="flex flex-col grow px-5 py-20 w-full rounded-xl border border-solid shadow-lg bg-neutral-100 border-stone-300 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-center px-3 py-1.5 bg-white rounded-lg max-w-[684px] max-md:flex-wrap">
              <div className="flex gap-3 self-stretch my-auto">
                <div className=" flex  gap-1.5">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="3.39424"
                      cy="3.32857"
                      r="2.67885"
                      fill="#ED6B5D"
                    />
                  </svg>

                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="3.32375"
                      cy="3.32857"
                      r="2.67885"
                      fill="#F4BE50"
                    />
                  </svg>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 6 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="3.25325"
                      cy="3.32857"
                      r="2.67885"
                      fill="#61C554"
                    />
                  </svg>
                </div>
                <div className="flex gap-1.5">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 5 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.737366 4.32858C0.737366 4.43145 0.773989 4.52198 0.851303 4.60016L4.07818 7.78927C4.14735 7.86334 4.23688 7.90038 4.34268 7.90038C4.55427 7.90038 4.71704 7.73989 4.71704 7.52591C4.71704 7.41893 4.67228 7.3284 4.60717 7.25844L1.6448 4.32858L4.60717 1.39871C4.67228 1.32876 4.71704 1.23411 4.71704 1.13124C4.71704 0.917259 4.55427 0.756775 4.34268 0.756775C4.23688 0.756775 4.14735 0.79381 4.07818 0.863764L0.851303 4.05699C0.773989 4.13106 0.737366 4.2257 0.737366 4.32858Z"
                      fill="#8C8C8C"
                    />
                  </svg>

                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 5 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.36194 4.32858C4.36194 4.2257 4.32125 4.13106 4.24393 4.05699L1.02113 0.863764C0.947882 0.79381 0.858359 0.756775 0.75256 0.756775C0.545031 0.756775 0.382263 0.917259 0.382263 1.13124C0.382263 1.23411 0.422955 1.32876 0.488062 1.39871L3.45044 4.32858L0.488062 7.25844C0.422955 7.3284 0.382263 7.41893 0.382263 7.52591C0.382263 7.73989 0.545031 7.90038 0.75256 7.90038C0.858359 7.90038 0.947882 7.86334 1.02113 7.78927L4.24393 4.60016C4.32125 4.52198 4.36194 4.43145 4.36194 4.32858Z"
                      fill="black"
                      fill-opacity="0.1"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex gap-1 self-stretch px-1 py-px text-xs text-center text-black whitespace-nowrap rounded bg-zinc-100">
                <div className="flex grow shrink-0 justify-center items-center px-16 basis-0 w-fit max-md:px-5">
                  <div className="flex  justify-center items-center gap-0.5">
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path
                        d="M4.37598 9.00742H6.8468C7.24376 9.00742 7.45438 8.78895 7.45438 8.35749V6.47602C7.45438 6.04457 7.24376 5.82884 6.8468 5.82884H4.37598C3.97903 5.82884 3.7684 6.04457 3.7684 6.47602V8.35749C3.7684 8.78895 3.97903 9.00742 4.37598 9.00742ZM4.24096 6.03911H4.67032V5.11612C4.67032 4.42798 5.10507 4.06206 5.61004 4.06206C6.11501 4.06206 6.55516 4.42798 6.55516 5.11612V6.03911H6.98182V5.1762C6.98182 4.14944 6.31753 3.64972 5.61004 3.64972C4.90525 3.64972 4.24096 4.14944 4.24096 5.1762V6.03911Z"
                        fill="#8C8C8C"
                      />
                    </svg>

                    <div className=" my-auto flex  justify-center items-center ">
                      figma.com
                    </div>
                  </div>
                </div>

                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M3.91263 6.80511C3.91263 8.02695 4.88218 9.00742 6.08797 9.00742C7.29377 9.00742 8.26086 8.02695 8.26086 6.80511C8.26086 6.68568 8.17718 6.59858 8.05661 6.59858C7.94094 6.59858 7.86467 6.68568 7.86467 6.80511C7.86467 7.80548 7.07474 8.60677 6.08797 8.60677C5.10119 8.60677 4.30882 7.80548 4.30882 6.80511C4.30882 5.80723 5.10119 5.00843 6.08797 5.00843C6.27499 5.00843 6.44972 5.02336 6.59489 5.0582L5.85912 5.79479C5.8222 5.83461 5.80252 5.88438 5.80252 5.93663C5.80252 6.0511 5.88619 6.13571 5.99692 6.13571C6.05844 6.13571 6.1052 6.1158 6.13965 6.07848L7.15349 5.04825C7.19779 5.00594 7.21502 4.95617 7.21502 4.89894C7.21502 4.84419 7.19287 4.78944 7.15349 4.74963L6.13965 3.70944C6.1052 3.66963 6.05598 3.64972 5.99692 3.64972C5.88619 3.64972 5.80252 3.7393 5.80252 3.85377C5.80252 3.90603 5.8222 3.9558 5.85666 3.99562L6.51123 4.65009C6.38327 4.6252 6.23808 4.60779 6.08797 4.60779C4.88218 4.60779 3.91263 5.58576 3.91263 6.80511Z"
                    fill="#8C8C8C"
                  />
                </svg>
              </div>
              <div className="flex gap-2.5 self-stretch my-auto">
                <svg
                  width="39"
                  height="15"
                  viewBox="0 0 39 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96356 8.42211C8.09966 8.42211 8.21677 8.30817 8.21677 8.17524V4.92469L8.19778 4.44993L8.40984 4.67465L8.89093 5.18739C8.93524 5.23804 8.99854 5.26336 9.06185 5.26336C9.19162 5.26336 9.2929 5.1684 9.2929 5.03864C9.2929 4.97217 9.26441 4.92153 9.21694 4.87405L8.14714 3.84223C8.08383 3.77893 8.03003 3.75677 7.96356 3.75677C7.90026 3.75677 7.84645 3.77893 7.77999 3.84223L6.71019 4.87405C6.66271 4.92153 6.63739 4.97217 6.63739 5.03864C6.63739 5.1684 6.73234 5.26336 6.86528 5.26336C6.92541 5.26336 6.99504 5.23804 7.03936 5.18739L7.51728 4.67465L7.73251 4.44993L7.71352 4.92469V8.17524C7.71352 8.30817 7.82746 8.42211 7.96356 8.42211ZM6.14997 10.9004H9.78032C10.4418 10.9004 10.7742 10.5712 10.7742 9.9192V6.76044C10.7742 6.10843 10.4418 5.77927 9.78032 5.77927H8.89726V6.28885H9.77083C10.0842 6.28885 10.2646 6.45976 10.2646 6.78893V9.89071C10.2646 10.2199 10.0842 10.3908 9.77083 10.3908H6.1563C5.83979 10.3908 5.66571 10.2199 5.66571 9.89071V6.78893C5.66571 6.45976 5.83979 6.28885 6.1563 6.28885H7.03303V5.77927H6.14997C5.48846 5.77927 5.15613 6.10843 5.15613 6.76044V9.9192C5.15613 10.5712 5.48846 10.9004 6.14997 10.9004Z"
                    fill="#8C8C8C"
                  />
                  <path
                    d="M27.5692 7.32858C27.5692 7.54072 27.7467 7.7139 27.9545 7.7139H30.7557V10.5151C30.7557 10.7229 30.9289 10.9004 31.141 10.9004C31.3531 10.9004 31.5307 10.7229 31.5307 10.5151V7.7139H34.3275C34.5353 7.7139 34.7128 7.54072 34.7128 7.32858C34.7128 7.11643 34.5353 6.93893 34.3275 6.93893H31.5307V4.1421C31.5307 3.93428 31.3531 3.75677 31.141 3.75677C30.9289 3.75677 30.7557 3.93428 30.7557 4.1421V6.93893H27.9545C27.7467 6.93893 27.5692 7.11643 27.5692 7.32858Z"
                    fill="#8C8C8C"
                  />
                </svg>
              </div>
            </div>
            <div className="flex overflow-hidden relative flex-col justify-center p-1 w-full rounded-none min-h-[447px] max-md:max-w-full">
              <div className="relative py-2.5 pr-2.5 pl-10 rounded bg-stone-50 max-md:pl-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                    <div className="flex relative flex-col mt-8 font-[510] max-md:mt-10">
                      <div className="flex gap-1.5 text-xs text-black">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="m-auto"
                        >
                          <path
                            d="M5.01878 3.40704C4.07966 4.10156 3.2362 4.91291 2.5092 5.82055C2.44683 5.89841 2.41565 5.99215 2.41565 6.08589M5.01878 8.76475C4.07966 8.07023 3.2362 7.25888 2.5092 6.35124C2.44683 6.27338 2.41565 6.17964 2.41565 6.08589M2.41565 6.08589H9.55925"
                            stroke="black"
                            stroke-width="0.89295"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <div className="flex flex-auto gap-1 justify-center px-4 py-1 bg-white rounded-2xl">
                          <img
                            loading="lazy"
                            srcSet="https://s3-alpha-sig.figma.com/img/7568/3fd5/7261c2ae940abab762a6e0130b36b3a9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AJV3FBot7gsql511O6RJ2JrZT1wA0uV9Rlt6F0ymfR-vJiiQaVZYnD6y75-DgPMEXPljNNojobT9i07cnMKhj3R-3KqWmSHf4T8epNAdoLUJMKOcOdNpbkYh59Us65c7qjsdVIFDygzSsWVuvBnHDPKWANp4bVDw7I45rdvAiSS6LBpPhg3DvqpY7378rkbLxA~KKQIyJAuiUkiIOYbIybxrUxTQyN4u54a1EuDcr0d2oEPq9zL0~jgzPd0OTsKMeAaaPSAddciTS0AtcO-DgyC59LfoLj76muy-yQnqFnxIGwMvszY1tsGzfuydxtfAQnoj6dhDi3xTKR3GknaorA__"
                            className="shrink-0 w-3.5 border-0 border-gray-200 border-solid aspect-square rounded-full"
                          />
                          <div className="flex-auto my-auto">
                            Shivam Studios
                          </div>
                        </div>
                      </div>
                      <div className="mt-2.5 text-xs leading-loose text-neutral-400">
                        Pay
                      </div>
                      {selectedOption === "products" ? (
                        <>
                          <div className="mt-2.5 text-2xl text-neutral-50">
                            <span className="text-2xl text-black">$1399</span>
                          </div>
                          <div className="mt-4 text-xs leading-loose text-neutral-400">
                            Items
                          </div>
                          <div className="flex gap-5 justify-between mt-3.5 w-full whitespace-nowrap">
                            <div className="flex gap-2">
                              <div className="justify-center align-center p-1 text-xs text-gray-500 bg-white rounded-sm border border-gray-200 border-solid">
                                1
                              </div>
                              <div className="grow text-xs leading-loose text-black">
                                Landing page
                              </div>
                            </div>
                            <div className="text-xs leading-loose text-right text-black">
                              $499.00
                            </div>
                          </div>
                          <div className="flex gap-5 justify-between mt-2.5 w-full whitespace-nowrap">
                            <div className="flex gap-2">
                              <div className="justify-center align-center p-1 text-xs text-gray-500 bg-white rounded-sm border border-gray-200 border-solid">
                                2
                              </div>
                              <div className="grow text-xs leading-loose text-black">
                                UX Consultancy
                              </div>
                            </div>
                            <div className="text-xs leading-loose text-right text-black">
                              $900.00
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <input
                            type="email"
                            className="border border-radish bg-white rounded px-2 py-2 w-full"
                            placeholder="$0.00"
                          />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                    <div className="flex relative flex-col grow pb-20 w-full bg-white rounded-lg border-0 border-solid shadow-sm border-zinc-300 max-md:mt-10">
                      <div className="flex flex-col px-8 mt-6 text-xs leading-loose text-neutral-400 max-md:px-5">
                        <div className="justify-center items-start py-3 pr-16 pl-3.5 text-sm text-black whitespace-nowrap bg-white font-[590] max-md:pr-5">
                          Payment Details
                        </div>
                        <div>
                          <div className="text-xs leading-loose text-gray-500 font-[510]">
                            Email
                          </div>
                          <div>
                            <input
                              type="email"
                              className="border border-radish bg-white rounded px-2 py-1 w-full"
                            />
                          </div>
                        </div>
                        <div className="mt-2 text-xs leading-loose text-gray-500 font-[510]">
                          Billing address
                        </div>
                        <div className="flex gap-5 justify-between px-2.5 py-2 mt-1 text-black bg-white rounded border border-radish">
                          <div className="my-auto">United States</div>
                          <svg
                            width="7"
                            height="5"
                            viewBox="0 0 7 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-2"
                          >
                            <path
                              d="M0.72377 0.897687C1.42786 1.87136 2.25203 2.74449 3.17486 3.49491C3.30872 3.60375 3.49653 3.60375 3.63038 3.49491C4.55322 2.74449 5.37738 1.87136 6.08147 0.897687"
                              stroke="#111111"
                              stroke-width="0.89295"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          className="justify-center py-1.5 px-1 bg-white rounded border border-radish"
                          placeholder=" Address line 1"
                        />

                        <input
                          type="text"
                          className="justify-center py-1.5 px-1 bg-white rounded border border-radish"
                          placeholder=" Address line 2"
                        />
                        <div className="flex z-10 gap-0 whitespace-nowrap">
                          <div className="grow justify-center py-2 px-1 bg-white rounded border border-radish">
                            <input
                              type="text"
                              placeholder="City"
                              className="w-20"
                            />
                          </div>
                          <div className="grow justify-center py-2 px-1 bg-white rounded border border-radish">
                            <input
                              type="text"
                              placeholder="Zip"
                              className="w-20"
                            />
                          </div>
                        </div>
                        <div className="justify-center py-2.5 px-1 whitespace-nowrap bg-white rounded border border-radish">
                          <input type="text" placeholder="State" />
                        </div>
                        <button className="justify-center items-center px-16 py-2.5 mt-7 text-xs text-center text-white whitespace-nowrap border-indigo-400  bg-indigo-600 border-solid shadow-sm border-[0.446px] font-[510] rounded-[29.467px] max-md:px-5">
                          Pay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
