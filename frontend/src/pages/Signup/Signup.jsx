import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
  
    const handleImageUpload = (e) => {
      const selectedImage = e.target.files[0];
      if (!selectedImage) return;
      setImage(selectedImage);
    };
  
    const collectdata = async (e) => {
      e.preventDefault(); // Prevent the form from submitting
  
      const formData = new FormData();
      formData.append('image', image);
  
      // Check for empty fields
      if (!name || !email || !password || !address || !confirmPassword || !phoneNumber) {
        alert("Please fill in all fields.");
        return;
      }
  
      if (!image) {
        alert("Please upload an image.");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
  
      try {
        let fetchapi = await fetch("http://localhost:3000/register", {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            password,
            address,
            phoneNumber,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!fetchapi.ok) {
          const errorMessage = await fetchapi.text();
          alert(`Registration failed: ${errorMessage}`);
          return;
        }
  
        fetchapi = await fetchapi.json();
  
        try {
          await fetch(`http://localhost:3000/upload-profileimage/${fetchapi._id}`, {
            method: 'POST',
            body: formData,
          });
          console.log('Image sent successfully');
          localStorage.setItem("user", JSON.stringify(fetchapi));
          navigate("/");
        } catch (error) {
          alert(`Error in image uploading: ${error.message}`);
        }
      } catch (error) {
        alert(`Failed to connect to server: ${error.message}`);
      }
    };

  return (
    <>
      <div>
        <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white p-5">
          SIGNUP TO KISAN MANDI
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        {/* <!-- Left side: Image upload box --> */}
        <div className="w-full md:w-1/3 p-4">
          {/* Image upload box */}
          <div className="flex flex-col items-center justify-center">
          <label
        htmlFor="profile_image"
        className="block py-3 text-sm font-medium text-gray-700"
      >
        Profile Image
      </label>
      <div className="mt-1 flex items-center justify-center h-32 w-32 border-2 border-dashed border-gray-400 rounded-lg relative overflow-hidden">
        {/* Display uploaded image */}
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            className="h-full w-full object-cover absolute top-0 left-0"
          />
        ) : (
          <span className="text-gray-500">Upload Image</span>
        )}
        {/* File input */}
        <input
          accept="image/*"
          type="file"
          id="profile_image"
          className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
          onChange={handleImageUpload}
          required
        />
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
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Enter Your Email Address"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex lg:flex-row md:flex-col sm:flex-col gap-2">
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  placeholder="Enter Contact Number"
                  required
                  onChange={(e) => {
                    // Remove non-numeric characters from the input value
                    const cleanedValue = e.target.value.replace(/\D/g, "");
                    setPhoneNumber(cleanedValue);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  pattern="[0-9]*" // Only allow digits
                />
              </div>

              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  placeholder="Enter your Full Address"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex lg:flex-row md:flex-col sm:flex-col gap-2">
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="••••••••"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  placeholder="••••••••"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <div className="mt-4 px-2 mb-4">
              <div className="flex items-center px-2 mb-4">
                <button
                  onClick={collectdata}
                  type="submit"
                  className=" w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  REGISTER
                </button>
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Want to LOGIN?{" "}
                <a
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  click here
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
