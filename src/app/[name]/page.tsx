import React from "react";

interface IProps {
  params: {
    name: string;
  };
}

const Detail = ({ params }: IProps) => {
  return (
    <div>
      <h1>Detail</h1>
      <p>{params.name}</p>
    </div>
  );
};

export default Detail;
