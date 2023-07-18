import React from "react";
import Hplandata from "./Hplandata.json";

const Hplan = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-blue-600 font-bold my-5">ALL HEALTH PLANS</div>
        <div className="font-bold my-3 text-5xl">
          Best Health Insurance Plans to secure yourself
        </div>

        {Hplandata.map((item) => (
          <div key={item.id} className="max-w-7xl">
            <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row">
              <div className="w-48 h-48 md:w-1/3 md:h-auto">
                <div
                  className="object-cover w-full h-full"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={item.img}
                    alt="Caresure Health Insurance Plans"
                    className="w-full h-full"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="grid p-4 w-full md:w-2/3">
                {" "}
                <div className="font-bold text-black mt-10 text-2xl">
                  {item.title}
                </div>
                <div className="text-gray-500 my-1 text-md leading-6">
                  <p className="font-medium">{item.content1}</p>
                  <p className="font-medium">{item.content2}</p>
                  <p className="font-medium">{item.content3}</p>
                </div>
                <button className="inline-flex items-center w-32 justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-500 h-10">
                  View Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hplan;
