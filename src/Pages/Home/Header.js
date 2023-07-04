import React from "react";

const Header = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="text-blue-700/95 mb-5">
              THE HEALTH INSURANCE SPECIALIST
            </div>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              We have the answer to your happy
              <br className="hidden lg:inline-block" />
              and secure future
            </h1>
            <p className="mb-8 leading-relaxed">
              Health plans for every stage of your life.
            </p>
            <div className="flex justify-center">
              <a
                href="/"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  light:bg-gray-800 light:border-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
