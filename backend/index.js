require("./db/mongosconfig");
const PORT = 3000;
const express = require("express");
const cors = require("cors");
const User = require("./models/userschemasmodel");
const Product = require("./models/productschemasmodel");
const ImageUpload = require("./models/imageuploadschemamodel");
const Buy_Products = require("./models/buy_product_schemas");
const axios = require("axios");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use(cors({ origin: true }));
//app.use(cors());

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload-image/:id", upload.single("image"), async (req, res) => {
  try {
    const productId = req.params.id;
    console.log("Product ID: " + productId);

    let product = await Product.findById(productId);

    if (!product) {
      return res.status(404).send("Product not found");
    }

    product.image = req.file.filename;

    await product.save();

    console.log("Image updated successfully");
    res.status(200).send("Image updated successfully");
  } catch (error) {
    console.error("Error updating image:", error);
    res.status(500).send("Error updating image");
  }
});

app.post(
  "/upload-profileimage/:id",
  upload.single("image"),
  async (req, res) => {
    try {
      const userId = req.params.id;
      console.log("User ID: " + userId);

      let user = await User.findById(userId);

      if (!user) {
        return res.status(404).send("User not found");
      }

      // user.image = userId + ":"+ req.file.filename;
      user.image = req.file.filename;

      await user.save();

      console.log("Profile image updated successfully");
      res.status(200).send("Profile image  updated successfully");
    } catch (error) {
      console.error("Error updating image:", error);
      res.status(500).send("Error updating image");
    }
  }
);

// app.post("/get-image/:id",async (req, res) => {
//   try {
//     const productId = req.params.id;
//     console.log("Product ID: " + productId);

//     let product = await Product.findById(productId);

//     if (!product || !product.image) {
//       return res.status(404).send('Image not found');
//     }

//     // Set the appropriate content type for the image
//     res.set('Content-Type', 'image/jpeg'); // Assuming the image is JPEG format

//     // Send the image file
//     res.sendFile(path.join(__dirname, 'uploads', product.image));
//   } catch (error) {
//     console.error('Error retrieving image:', error);
//     res.status(500).send('Error retrieving image');
//   }
// });

app.post("/register", async (req, res) => {
  let data = new User(req.body);
  let result = await data.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT}`);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let data = await User.findOne(req.body).select("-password");
    data ? res.send(data) : res.send({ result: "no user found" });
  } else {
    res.send({ result: "no user found" });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Error fetching user");
  }
});



app.put("/updateusers/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const userDataToUpdate = req.body; // Assuming the updated user data is sent in the request body

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Update the user data with the new information
    user.name= userDataToUpdate.name;
    user.email= userDataToUpdate.email;
    user.address = userDataToUpdate.address;
    user.phoneNumber= userDataToUpdate.phoneNumber;
    // Add more fields as needed

    // Save the updated user data
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send("Error updating user");
  }
});



app.delete("/deleteuser/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(200).send("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Error deleting user");
  }
});

app.post("/addproduct", async (req, res) => {
  console.log("add products: " + req.body);
  let data = new Product(req.body);

  try {
    // Save the new product document to the database
    let result = await data.save();
    console.log("Product saved successfully" + result);
    res.status(200).send({ productId: result._id });
    // res.status(200).send('Product saved successfully');
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).send("Error saving product");
  }
});

app.get("/productsearchid/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).send("Error fetching product");
  }
});

//update product
app.put("/updateproduct/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const productDataToUpdate = req.body; // Assuming the updated product data is sent in the request body

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).send("Product not found");
    }

    // Update the product data with the new information
    product.productname = productDataToUpdate.productname;
    product.price = productDataToUpdate.productprice;
    product.stock = productDataToUpdate.productstock;
    product.productdescription = productDataToUpdate.productdescription;
    product.location = productDataToUpdate.productlocation;
    product.category = productDataToUpdate.productcategory;

    // Save the updated product data
    await product.save();

    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Error updating product");
  }
});

//send email
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.email",
    auth: {
      user: "kapoornaveedkhan@gmail.com",
      pass: "kapoornaveedkhan@662001662001",
    },
  });

  const mailOptions = {
    from: "kapoornaveedkhan@gmail.com",
    to: "kapoornaveedkhan@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Failed to send email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent");
    }
  });
});


// Get all products route
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error fetching products");
  }
});

//find product and delete product
app.delete("/delete_products/:productID", async (req, res) => {
  try {
    const productID = req.params.productID;
    const product = await Product.findOneAndDelete({ _id: productID });

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.send("Product deleted: " + product);
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Error deleting product");
  }
});

// Get products of a specific user route
app.get("/products/:userId", async (req, res) => {
  try {
    const userID = req.params.userId;
    const products = await Product.find({ userID });
    res.send(products);
  } catch (error) {
    console.error("Error fetching user products:", error);
    res.status(500).send("Error fetching user products");
  }
});

// Get product of a specific user route
app.get("/products/:userId/:productId", async (req, res) => {
  try {
    const userid = req.params.userId;
    const productId = req.params.productId;
    const product = await Product.findOne({ userid, _id: productId });

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.send(product);
  } catch (error) {
    console.error("Error fetching user product:", error);
    res.status(500).send("Error fetching user product");
  }
});

app.get("/getproductbyname/:name", async (req, res) => {
  const productName = req.params.name;

  try {
    // Find the product by name
    const product = await Product.findOne({ productname: productName });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get product details" });
  }
});

////////////////////Product tracking

app.post("/setProducttracking", async (req, res) => {
  const newProductStatus = new Buy_Products(req.body);

  try {
    const result = await newProductStatus.save();
    console.log("New product status saved:", result);
    const { user, product, status } = req.body;
    console.log("User ID : " + user);
    try {
      const response = await axios.post(
        `http://localhost:3000/updateuserdata/${user._id}`,
        {
          bought_productId: result._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_token_here",
          },
        }
      );
      console.log("Update user data response:", response.data);
      res.status(response.status).json(response.data);
    } catch (e) {
      console.error(
        "Failed to update user data:",
        e.response?.data || e.message
      );
      res
        .status(e.response?.status || 500)
        .json(e.response?.data || { message: "Internal Server Error" });
    }
  } catch (error) {
    console.error("Failed to save new product status:", error);
    res.status(500).json({ message: "Failed to set product status" });
  }
});

app.post("/updateuserdata/:id", async (req, res) => {
  const userId = req.params.id;
  const { bought_productId } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.boughtProducts.push(bought_productId);

    // Save the updated user data
    await user.save();

    res.json({ message: "Product status updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update product status" });
  }
});

app.get("/getorderstatus/:id", async (req, res) => {
  const orderId = req.params.id;

  try {
    // Find the user by ID
    const order = await Buy_Products.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update product status" });
  }
});

app.post("/updateorderstatus/:id", async (req, res) => {
  const orderId = req.params.id;

  try {
    // Find the order by ID
    const order = await Buy_Products.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Update the order status
    order.status = req.body.status;

    // Save the updated order
    await order.save();

    res.json({ message: "Order status updated successfully", order: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update order status" });
  }
});

app.get("/getallorders", async (req, res) => {
  try {
    const allorders = await Buy_Products.find();
    res.send(allorders);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Error fetching products");
  }
});

app.delete("/deleteorder/:id", async (req, res) => {
  const orderId = req.params.id;

  try {
    // Find the order by ID and delete it
    const order = await Buy_Products.findByIdAndDelete(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete order" });
  }
});

//////////////////////////////////////////////////////////Product tracking end

//for chat

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  console.log("username: " + username);
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
      },
      {
        headers: { "private-key": "bf56a1b5-cb75-4b1a-8995-bcd4679b2e4f" },
      }
    );
    console.log("reponse is: " + response);
    return res.status(response.status).json(response.data);
  } catch (e) {
    if (e.response && e.response.status) {
      return res.status(e.response.status).json(e.response.data);
    } else {
      // Handle the error when e.response is undefined or doesn't have a status property
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
});
