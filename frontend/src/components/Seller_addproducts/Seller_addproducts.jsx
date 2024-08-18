import { React, useState, useEffect } from 'react'

const Seller_addproducts = ({ onDisableselleraddproduct }) => {





    const [selectedFile, setSelectedFile] = useState(null);


    const [productname, setname] = useState("");
    const [location, setlocation] = useState("");
    const [price, setprice] = useState("");
    const [userID, setuserID] = useState("");
    const [category, setcategory] = useState("");
    const [stock, setstock] = useState("");
    const [productdescription, setdescription] = useState("");
    const [image, setimage] = useState("");
    const [rating, setrating] = useState("");


    useEffect(() => {
        const fulluser_profile = localStorage.getItem("user");
        if (fulluser_profile) {
          const userDataFromStorage = JSON.parse(fulluser_profile);
          setuserID(userDataFromStorage._id);
          console.log("User data from localStorage:", userDataFromStorage);
        } else {
          console.warn("User data not found in localStorage");
        }
      }, []); // Empty dependency array ensures this effect runs only once



    const handleButtonClick = () => {
        onDisableselleraddproduct(); // Call the function to disable PaymentOptions
    };

    const handleFileInputChange = (event) => {
        // Access the selected file from the input element
        const file = event.target.files[0];
        setSelectedFile(file);

        // You can perform additional operations with the selected file here
        // For instance, you can read the file content or perform validations
    };

    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 51) / 10; // Generates a random number between 0 and 5 with one decimal point
        setrating(newRandomNumber);
      };

    const submitproduct= async (e) =>{
        generateRandomNumber();

    //    const fulluser_profile = localStorage.getItem("user");

        
       // console.log("USer data from is: " + userDataFromStorage);

        console.warn(productname, location, price, category, stock, productdescription, image, userID);

        if (!productname || !location || !price || !category || !stock || !productdescription || !selectedFile || !userID) {
            alert("Please fill out the entire form.");
            return; // Stop the form submission
        }

        e.preventDefault(); //to prevent it from reloading

         const formData = new FormData();
         formData.append('image', selectedFile);

            // Log the 'name' attribute from the form data
    // for (const pair of formData.entries()) {
    //     console.log("FORM DATA:   " +pair[0], pair[1]); // pair[0] is the 'name' attribute
    // }

         // Generate a random boundary string
        const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);

        while (!rating) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Wait for 100ms before checking again
        }
        try {
            const response = await fetch('http://localhost:3000/addproduct', {
                method: 'POST',
                //body: formData,
                body: JSON.stringify({
                    productname, location, price, category, stock, productdescription, image, rating, userID
                }),
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${boundary}`,
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) {
                console.log('Product created successfully');
                // Reset form or show success message
                const responseData = await response.json();
                // Now, send the image file

            await fetch(`http://localhost:3000/upload-image/${responseData.productId}`, {
                method: 'POST',
                body: formData,

            });


            console.log('Image sent successfully');
            onDisableselleraddproduct(); 
            alert("Product Added Successfully");

            } else {
                console.error('Failed to create product');
            }
        } catch (error) {
            console.error('Error:', error);
        }


    }


    

    return (
        <div>
            {/* <!-- Main modal --> */}
            <div id="crud-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen w-screen bg-gray-900 bg-opacity-50 overflow-auto">
                <div className="relative p-4 max-w-[80%] md:max-w-md w-full max-h-full md:max-h-[80vh] ">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Create New Product
                            </h3>
                            <button onClick={handleButtonClick} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <form className="p-4 md:p-5" >
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2 flex flex-col items-start ">
                                    <label for="name" className="items-start  mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input value={productname} onChange={(e) => { setname(e.target.value) }} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""></input>
                                </div>

                                <div className="col-span-2 flex flex-col items-start ">
                                    <label for="location" className="items-start  mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                                    <input  value={location} onChange={(e) => { setlocation(e.target.value) }} type="text" name="location" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Location" required=""></input>
                                </div>


                                <div className="col-span-2 sm:col-span-1 flex flex-col items-start ">
                                    <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                    <input type="text" value={price} onChange={(e) => { setprice(e.target.value) }} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""></input>
                                </div>


                                <div className="col-span-2 sm:col-span-1 flex flex-col items-start ">
                                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select id="category" name='category' value={category} onChange={(e) => { setcategory(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select category</option>
                                        <option value="Fruit">Fruit</option>
                                        <option value="Vegetables">Vegetables</option>
                                        <option value="Rice">Rice</option>
                                        <option value="Cereal">Cereal</option>
                                    </select>
                                </div>

                                <div className="col-span-2 sm:col-span-1 flex flex-col items-start ">
                                    <label for="stock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                                    <input value={stock} onChange={(e) => { setstock(e.target.value) }} type="text" name="stock" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="25k" required></input>
                                </div>

                                <div className="col-span-2 flex flex-col items-start ">
                                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                    <textarea value={productdescription} onChange={(e) => { setdescription(e.target.value) }} id="description" name='description' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here"></textarea>
                                </div>
                                <div className="col-span-2 flex flex-col items-start ">
                                    <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Image</label>
                                    <input type="file" accept="image/*" // Allow only image files 
                                        onChange={handleFileInputChange} name="imagefile" id="imagefile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Upload Image" required></input>

                                    {selectedFile && (
                                        <div>
                                            {/* <p>Selected File: {selectedFile.name}</p> */}
                                            {/* Display the selected image preview */}
                                            <img
                                                src={URL.createObjectURL(selectedFile)}
                                                alt="Selected"
                                                style={{ maxWidth: '200px', maxHeight: '200px' }}
                                                required
                                            />
                                        </div>
                                    )}


                                </div>
                            </div>
                            <button onClick={submitproduct} type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Add new product
                            </button>
                        </form>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Seller_addproducts