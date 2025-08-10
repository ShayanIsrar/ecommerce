import React from "react";

const AdminProductCart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded">
      <img src={data?.productImage[0]} width={120} height={120} alt="" />
      <h1>{data.productName}</h1>
      {/* 7:40 33 */}
    </div>
  );
};

export default AdminProductCart;
