import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import DisplayPkrCurrency from "../helpers/DisplayCurrency";

const AdminProductCart = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div className="bg-white p-4 rounded">
      <div className="">
        <div className="w-40 h-40 overflow-hidden flex items-center justify-center bg-gray-50 rounded">
          <img
            src={data?.productImage[0]}
            alt={data?.productName || "Product"}
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="text-ellipsis line-clamp-2">{data.productName}</h1>
        <div>
          <p className="font-semibold">
            {DisplayPkrCurrency(data.sellingPrice)}
            {/* {data.sellingPrice} */}
          </p>
          <div
            className="w-fit ml-auto p-2 bg-green-100 hover:cursor-pointer hover:bg-green-600 rounded-full hover:text-white"
            onClick={() => setEditProduct(true)}
          >
            <MdModeEditOutline />
          </div>
        </div>
      </div>
      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductCart;
