import { React, useState, useEffect } from "react";
import { images } from "../../constants";
import { Productdetails } from "../../components";
import { Rating } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Seller_myproductcard = (props) => {

  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const { product } = props;

  const [imagePath, setImagePath] = useState(null);
  useEffect(() => {
    import(/* @vite-ignore */ `../../uploads/${product.image}`).then(
      (image) => {
        setImagePath(image.default);
      }
    );
  }, [product.image]);

  const handlecheckdetails = () => {
    setShowDetails((prevState) => !prevState);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/delete_products/${product._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      else{
        alert("Product Deleted");
      }

      // Handle successful deletion
    } catch (error) {
      console.error('Error deleting product:', error);
      // Handle error
    }

}





const handleUpdateClick = () => {


  console.log

  navigate('/updateproduct', {
    state: {
      productid: product._id, 
      productname: product.productname,
      productprice: product.price,
      productstock: product.stock,
      productdescription: product.productdescription,
      productlocation: product.location,
      productcategory: product.category
    }
  });
};


  return (
    <div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          className="mx-auto mb-4 w-36 h-36 "
          src={imagePath}
          alt="Bonnie Avatar"
        ></img>
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">{product.productname}</a>
        </h3>

        <p className="flex justify-center">
          <Rating value={product.rating}  defaultValue={5} precision={0.1} readOnly />
        </p>
        <div className="flex justify-center flex-row">
          <p className="text-sm mx-2">
            <span>TS: </span>
            <span>100</span>
          </p>
          <p className="text-sm mx-2">
            <span>SL: </span>
            <span>{product.stock}</span>
          </p>
        </div>

        <div>
          {showDetails ? (
            <Productdetails
              product={product}
              isOpen={showDetails}
              closeDrawer={handlecheckdetails}
            />
          ) : null}

          <div className="flex justify-center mt-4 space-x-4">
            <button
              type="button"
              onClick={handlecheckdetails}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Check Details
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={handleUpdateClick}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Update Details
            </button>
          </div>
          <div className="flex justify-center mt-1 space-x-4">
            <button
              type="button"
              className="flex items-center bg-red-500 hover:bg-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-400 rounded-lg text-sm px-5 py-2.5"
              onClick={handleDelete}
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* Your delete icon */}
                <path
                  fillRule="evenodd"
                  d="M15.2 5h-10a1 1 0 0 0-.6 1.8L6 7h8l1.4-1.2a1 1 0 0 0-.6-1.8zM5 18a2 2 0 0 1-2-2V8a2 2 0 1 1 4 0v8a2 2 0 0 1-2 2zm10 0a2 2 0 0 1-2-2V8a2 2 0 1 1 4 0v8a2 2 0 0 1-2 2z"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller_myproductcard;
