import React from "react";

const Header = () => {
    return (
        <div className="bg-white w-full">
            <div className="flex items-center">
                {/* Logo Section */}
                <div className="bg-gray-100 p-10">
                    <img
                        className="w-42 h-14"
                        src="/src/assets/Aventisia.png"
                        alt="Logo"
                    />
                </div>

                {/* Title Section */}
                <div className="bg-white px-4 mr-16">

                    <h1 className="text-2xl font-bold">AI/ML Model Builder</h1>
                </div>

                <div className="flex items-center gap-x-44">
                    {/* Search Bar Section */}
                    <div className="w-full max-w-sm min-w-[500px]">
                        <div className="relative flex bg-gray-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="absolute w-5 h-5 top-3 left-3 text-slate-600"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <input
                                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Search..."
                            />
                        </div>
                    </div>

                    {/* Notification Section */}
                    <div className="relative ml-4">
                        <div className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                            <span className="text-xs text-white">12</span>
                        </div>

                        <div className="p-2 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="text-gray-600 w-6 h-6"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Like Icon Section */}
                <div className="relative ml-8 ">
                    <div className="bg-gray-100 rounded-full ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="text-gray-600 w-6 h-6"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1.01 4.13 2.44h1.74C15.09 6.01 16.76 5 18.5 5 20.58 5 22 6.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                </div>

                {/* Vertical Line */}
                <div className="h-14 w-px bg-gray-300 ml-8 ">
                </div>
                {/* Profile */}
                <div class="flex items-center ml-8">

                    <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg
                            class="absolute w-12 h-12 text-gray-400 -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>


                    <div class="ml-4 font-medium dark:text-white">
                        <div>Jese Leos</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">jeseleos@gmail.com</div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Header;
