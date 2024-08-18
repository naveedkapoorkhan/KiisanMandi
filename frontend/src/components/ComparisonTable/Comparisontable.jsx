import React, { useState, useEffect } from "react";
import { data } from "../../constants";

const Comparisontable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [punjabproductDetails, setpunjabProductDetails] = useState(null);
  const [sindhproductDetails, setsindhProductDetails] = useState(null);
  const [balochproductDetails, setbalochProductDetails] = useState(null);
  const [kpkproductDetails, setkpkProductDetails] = useState(null);
  const [databaseproductDetails, setdatabaseProductDetails] = useState(null);

  const handleSearch = async  (e) => {
    e.preventDefault();

    const punjabproduct = data.fruitsAndVegetables_punjabmarket.find(
      (punjabproduct) =>
        punjabproduct.productname.toLowerCase() === searchTerm.toLowerCase()
    );
    if (punjabproduct) {
      setpunjabProductDetails(punjabproduct);
    } else {
      alert("Product not found in other Markets");
      setpunjabProductDetails(null);
    }


    const sindhproduct = data.fruitsAndVegetables_sindhmarket.find(
      (sindhproduct) =>
        sindhproduct.productname.toLowerCase() === searchTerm.toLowerCase()
    );
    if (sindhproduct) {
      setsindhProductDetails(sindhproduct);
    } else {
      alert("Product not found in other Markets");
      setsindhProductDetails(null);
    }


    const balochproduct = data.fruitsAndVegetables_balochmarket.find(
      (balochproduct) =>
        balochproduct.productname.toLowerCase() === searchTerm.toLowerCase()
    );
    if (balochproduct) {
      setbalochProductDetails(balochproduct);
    } else {
      alert("Product not found in other Markets");
      setbalochProductDetails(null);
    }


    const kpkproduct = data.fruitsAndVegetables_kpkmarket.find(
      (kpkproduct) =>
        kpkproduct.productname.toLowerCase() === searchTerm.toLowerCase()
    );
    if (sindhproduct) {
      setkpkProductDetails(kpkproduct);
    } else {
      alert("Product not found in other Markets");
      setkpkProductDetails(null);
    }


    try {
        const response = await fetch(`http://localhost:3000/getproductbyname/${searchTerm}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setdatabaseProductDetails(data);
      } catch (error) {
        alert("Product not found");
      }

  };

  return (
    <div>
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
            placeholder="Compare Fruit, Vegetables..."
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

        <br>
        </br>
      <div>
        {punjabproductDetails && databaseproductDetails && (
          <div className="flex flex-col md:flex-row gap-3">
            {/* <!-- Right side: Profile form --> */}
            <div className=" w-full  bg-white p-4 rounded-lg">
              {/* <!-- Profile form --> */}
              <form>
                {/* <!-- Your form fields here --> */}

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        ></th>
                        <th scope="col" class="px-6 py-3">
                          Farmer
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        >
                          Punjab Markets
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        >
                          Sindh Markets
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        >
                          Baloch Markets
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                        >
                          KPK Markets
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Product Name
                        </th>
                        <td class="px-6 py-4">{databaseproductDetails.productname}</td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          {punjabproductDetails.productname}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          {sindhproductDetails.productname}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          {balochproductDetails.productname}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          {kpkproductDetails.productname}
                        </td>
                      </tr>
                      {/* <!-- Add more rows for other products --> */}

                      <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Price
                        </th>
                        <td class="px-6 py-4">{databaseproductDetails.price}</td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {punjabproductDetails.price}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {sindhproductDetails.price}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {balochproductDetails.price}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {kpkproductDetails.price}
                        </td>
                      </tr>

                      <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Stock
                        </th>
                        <td class="px-6 py-4">{databaseproductDetails.stock}</td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {punjabproductDetails.stock}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {sindhproductDetails.stock}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {balochproductDetails.stock}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {kpkproductDetails.stock}
                        </td>
                      </tr>

                      <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Location
                        </th>
                        <td class="px-6 py-4">{databaseproductDetails.location}</td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {punjabproductDetails.location}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {sindhproductDetails.location}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {balochproductDetails.location}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {kpkproductDetails.location}
                        </td>
                      </tr>

                      <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Product Description
                        </th>
                        <td class="px-6 py-4">{databaseproductDetails.productdescription}</td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {punjabproductDetails.productdescription}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {sindhproductDetails.productdescription}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {balochproductDetails.productdescription}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {kpkproductDetails.productdescription}
                        </td>
                      </tr>

                      <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Rating
                        </th>
                        <td class="px-6 py-4">{databaseproductDetails.rating}</td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {punjabproductDetails.rating}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {sindhproductDetails.rating}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {balochproductDetails.rating}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                        {kpkproductDetails.rating}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* {!weatherData && <p>Loading...</p>} */}
      </div>
    </div>
  );
};

export default Comparisontable;
