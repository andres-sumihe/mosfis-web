import React from 'react';

interface CustomHeader1Props {
  title: string;
}

const CustomHeader1 = (props: CustomHeader1Props) => {
  return (
    <div>
      <div className="flex h-[70px] bg-[#00AAAD]">
        <h1 className="mx-auto my-[10px] text-[21px] font-semibold text-white">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default CustomHeader1;
