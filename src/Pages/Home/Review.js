import React from "react";

const Review = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Customer Reviews
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 w-full">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <p className="leading-relaxed mb-3">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque varius magna sit amet ex condimentum, eu volutpat arcu
                  malesuada. Phasellus pellentesque orci ut lacus posuere
                  suscipit."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mb-6"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  John Doe
                </h2>
                <p className="text-gray-500">Policyholder</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 w-full">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <p className="leading-relaxed mb-3">
                  "Vestibulum vel interdum ligula. Curabitur consequat dignissim
                  sapien a ultricies. Nunc sed orci eget erat vehicula
                  hendrerit."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mb-6"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Jane Smith
                </h2>
                <p className="text-gray-500">Policyholder</p>
              </div>
            </div>
          </div>
          <p className="text-sm mt-4 text-gray-500 mb-8 w-full">
            Read more customer reviews on our website.
          </p>
          <a
            href="/"
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            View All Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Review;
