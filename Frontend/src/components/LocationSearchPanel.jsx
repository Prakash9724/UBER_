import React from "react";
import "remixicon/fonts/remixicon.css";
const LocationSearchPanel = (props) => {
  const location = [
    "123 Main St, Springfield, IL, 62701, USA",
    "456 Elm St, Shelbyville, IL, 62565, USA",
    "789 Oak St, Capital City, IL, 62702, USA",
    "101 Maple St, Ogdenville, IL, 62629, USA",
    "202 Pine St, North Haverbrook, IL, 62630, USA",
  ];

  return (
    <div>
      {location.map((e) => {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(true);
            }}
            className="flex gap-4 border-2 p-3 mx-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium text-sm ">{e}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
