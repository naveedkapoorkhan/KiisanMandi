import React, { useState } from "react";
import { images } from "../../constants";
import { Seller_myproductcard } from "../../components";

const Admin_usersproducts = () => {
  const [productData, setProductData] = useState({
    productname: "",
    price: "",
    location: "",
    stock: "",
    userID: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/productsearchid/${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Product");
      }
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      alert("Product not found");
    }
  };

  const deleteProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/delete_products/${searchTerm}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      alert("Product deleted successfully");

      console.log("Product deleted successfully");
      // Perform any other actions after successful deletion
    } catch (error) {
      console.error("Error deleting user:", error.message);
      // Handle error scenarios
    }
  };

  return (
    <>
      <div>
        <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white p-5">
          Product Details
        </h2>
      </div>

      <div>
        {" "}
        <form class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Product By ID Here..."
              required
            />
            <button
              onClick={(e) => handleSearch(e)}
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {productData && (
        <div className="flex flex-col md:flex-row gap-3">
          {/* <!-- Left side: Image upload box --> */}
          <div className="w-full md:w-1/3 p-4">
            {/* Image upload box */}
            <div className="flex flex-col items-center justify-center">
              {/* <label htmlFor="profile_image" className="block py-3 text-sm font-medium text-gray-700">
                        User ID
                    </label> */}
              <div className="mt-1 flex items-center justify-center h-32 w-32  border-gray-400 rounded-lg font-bold relative ">
                #{searchTerm}
              </div>
            </div>
          </div>

          {/* <!-- Right side: Profile form --> */}
          <div className=" w-full md:w-2/3 bg-white p-4 rounded-lg">
            {/* <!-- Profile form --> */}
            <form>
              {/* <!-- Your form fields here --> */}
              <div className="flex lg:flex-row md:flex-col sm:flex-col gap-2">
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label
                    htmlFor="field1"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="field1"
                    value={productData.productname}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    readOnly
                  />
                </div>

                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label
                    htmlFor="field2"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Seller
                  </label>
                  <input
                    type="text"
                    id="field2"
                    value={productData.userID}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    readOnly
                  />
                </div>
              </div>

              <div className="flex lg:flex-row md:flex-col sm:flex-col gap-2">
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label
                    htmlFor="field1"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Price
                  </label>
                  <input
                    type="text"
                    id="field1"
                    value={productData.price}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    readOnly
                  />
                </div>

                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label
                    htmlFor="field2"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="field2"
                    value={productData.location}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    readOnly
                  />
                </div>

                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label
                    htmlFor="field2"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Stock
                  </label>
                  <input
                    type="text"
                    id="field2"
                    value={productData.stock}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    readOnly
                  />
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <div className="mt-4">
                <button
                  onClick={(e) => deleteProduct(e)}
                  className="bg-white-500 text-black border px-4 py-2 rounded-md hover:bg-red-600 hover:text-white"
                >
                  Delete Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin_usersproducts;
