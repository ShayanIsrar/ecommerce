import React, { useState } from "react";
import UploadProduct from "../UploadProduct";
import SummaryApi from "../../common";
import { useEffect } from "react";
import AdminProductCart from "../AdminProductCart";

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url);
    const dataResponse = await response.json();

    // console.log("Product data ", dataResponse);

    setAllProduct(dataResponse?.data || []);
  };
  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Products</h2>
        <button
          className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full"
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>

      {/* All Product */}

      <div className="flex items-center gap-5 py-4">
        {allProduct.map((product, index) => {
          return <AdminProductCart data={product} key={index + "allProduct"} />;
        })}
      </div>

      {/* Upload Products component */}
      {openUploadProduct && (
        <UploadProduct onClose={() => setOpenUploadProduct(false)} />
      )}
    </div>
  );
};

export default AllProducts;
