import { React, useState, useEffect } from 'react';

const Weatherdetails = () => {

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(
            "http://api.weatherapi.com/v1/current.json?key=215ec42d0e324527a2953317242002&q=33.6999,73.0362"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch weather data");
          }
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
  
      fetchWeatherData();
    }, []);



    return (
        <>

<div>
        {weatherData && (
            <div className="flex flex-col md:flex-row gap-3">


            {/* <!-- Right side: Profile form --> */}
            <div className=" w-full md:w-2/3 bg-white p-4 rounded-lg">
                {/* <!-- Profile form --> */}
                <form>
                    {/* <!-- Your form fields here --> */}
                    <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

                        <div className="w-full sm:w-1/2 px-2 mb-4">
                            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                            <input
                                type="text"
                                id="field1"
                                value={weatherData.location.name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                readOnly
                            />
                        </div>

                        <div className="w-full sm:w-1/2 px-2 mb-4">
                            <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Region</label>
                            <input
                                type="text"
                                id="field2"
                                value={weatherData.location.region}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

                        <div className="w-full sm:w-1/2 px-2 mb-4">
                            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                            <input
                                type="text"
                                id="field1"
                                value={weatherData.location.country}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                readOnly
                            />
                        </div>



                    </div>



                    <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

<div className="w-full sm:w-1/2 px-2 mb-4">
    <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Condition</label>
    <input
        type="text"
        id="field1"
        value={weatherData.current.condition.text}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        readOnly
    />
</div>

<div className="w-full sm:w-1/2 px-2 mb-4">
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cloud</label>
    <input
        type="text"
        id="field2"
        value={weatherData.current.cloud}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        readOnly
    />
</div>
</div>

                    <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

<div className="w-full sm:w-1/2 px-2 mb-4">
    <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Temperature in C</label>
    <input
        type="text"
        id="field1"
        value={weatherData.current.temp_c}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        readOnly
    />
</div>

<div className="w-full sm:w-1/2 px-2 mb-4">
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Temperature in F</label>
    <input
        type="text"
        id="field2"
        value={weatherData.current.temp_f}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        readOnly
    />
</div>
</div>


<div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

<div className="w-full sm:w-1/2 px-2 mb-4">
    <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wind(kph)</label>
    <input
        type="text"
        id="field1"
        value={weatherData.current.wind_kph}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        readOnly
    />
</div>

<div className="w-full sm:w-1/2 px-2 mb-4">
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wind Degree</label>
    <input
        type="text"
        id="field2"
        value={weatherData.current.wind_degree}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        readOnly
    />
</div>
</div>
<div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

<div className="w-full sm:w-1/2 px-2 mb-4">
    <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">WInd Direction</label>
    <input
        type="text"
        id="field1"
        value={weatherData.current.wind_dir}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        readOnly
    />
</div>

<div className="w-full sm:w-1/2 px-2 mb-4">
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Humidity</label>
    <input
        type="text"
        id="field2"
        value={weatherData.current.humidity}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        readOnly
    />
</div>
</div>
<div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

<div className="w-full sm:w-1/2 px-2 mb-4">
    <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pressure mb</label>
    <input
        type="text"
        id="field1"
        value={weatherData.current.pressure_mb}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        readOnly
    />
</div>

<div className="w-full sm:w-1/2 px-2 mb-4">
    <label htmlFor="field2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gust mph</label>
    <input
        type="text"
        id="field2"
        value={weatherData.current.gust_mph}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        readOnly
    />
</div>
</div>

                    {/* <div className='flex lg:flex-row md:flex-col sm:flex-col gap-2'>

                        <div className="w-full sm:w-1/2 px-2 mb-4">
                            <label htmlFor="field1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Sales</label>
                            <input
                                type="text"
                                id="field1"
                                value={userData.totalSales}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                readOnly
                            />
                        </div>
                    </div> */}

                    {/* <!-- Submit button --> */}
                    {/* <div className="mt-4">
                        <button type="submit" className="bg-white-500 text-black border px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">Save Data</button>
                    </div> */}
                </form>
            </div>


                            {/* <!-- Left side: Image upload box --> */}
                            <div className="w-full md:w-1/3 p-4">
                {/* Image upload box */}
                <div className='flex flex-col items-center justify-center'>

                    <div className="mt-1 flex items-center justify-center h-32 w-32   border-gray-400 rounded-lg relative overflow-hidden">
                        {/* Display uploaded image */}
                        {/* {image ? (
                            <img
                         
                                alt="Uploaded"
                                className="h-full w-full object-cover absolute top-0 left-0"
                            />
                        ) : (
                            <span className="text-gray-500">Upload Image</span>
                        )} */}
                        {/* File input */}
                        <img
                          src={`http:${weatherData.current.condition.icon}`}
                         alt="Uploaded"
                         className="h-full w-full object-cover absolute top-0 left-0"
                     />
                    </div>
                </div>
            </div>
        </div>
        )}
        {!weatherData && <p>Loading...</p>}
    </div>

            {/* <div>
                <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white p-5">Personal Details</h2>
            </div> */}


        </>

    )
}

export default Weatherdetails