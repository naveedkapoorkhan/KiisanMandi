import React from 'react'

const JazzCash = () => {
  return (
    <div>
    <p className="text-sm text-gray-500 mb-4">
        Connect with your jazzcash account OR create new one.
    </p>
    <form className="space-y-4" action="#">
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transfer To: </label>
            <input type="number" name="email" id="transfertonumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="0312 3456783" required></input>
        </div>
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cash: </label>
            <input type="number" name="email" id="transfertonumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="1000 Rs" required></input>
        </div>

        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Money</button>

    </form>


</div>
  )
}

export default JazzCash