import React from 'react'
import {
    Typography,
    TextField,
    FormControlLabel,
    Checkbox, 
    Link ,
    AppBar,
    Card,
    CardActions,
    CardMedia,
    CardContent,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    Button,
    Box,
    Avatar,
    IconButton
  } from "@mui/material";
  import { images } from '../../constants';

const Homeinformation = () => {
  return (
    <div>

<div >

<section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className=" lg:ml-40 font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Farmers' Digital Hub: Grow, Trade, Prosper</h2>
            <p className="mb-4">Welcome to a digital hub tailored for farmers, where growth and prosperity meet. Our platform simplifies the buying and selling of agricultural products, providing a user-friendly experience for farmers of all scales. With secure transactions, a supportive community, and valuable resources, we're dedicated to transforming agriculture into a seamless and prosperous endeavor. Join us in the future of farming today.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
            <img className="w-full rounded-lg" src={images.man} alt="office content 1"></img>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={images.bringing} alt="office content 2"></img>
        </div>
    </div>
</section>

</div>


<div>

</div>


    </div>
  )
}

export default Homeinformation