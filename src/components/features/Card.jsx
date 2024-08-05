import React from 'react';

const Card = ({ item: { title, icon } }) => {
  return (
    <div className="w-3/4 px-6 h-40 py-5 mx-auto rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r
     from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] 
     transition-colors duration-100 group">
      <div className="h-36 overflow-y-hidden">
        <div className="flex h-full flex-col gap-5 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-5 h-4 flex flex-col justify-between">
            {icon ? (
              <span className="text-2xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[1px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[1px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[1px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[1px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg md:text-xl font-titleFont font-bold text-gray-300 ">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
