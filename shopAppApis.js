const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
const jwt = require('jsonwebtoken');


// Your code using jsonwebtoken

app.use(bodyParser.json());
const secretKey = 'your-secret-key';
// Sample product data
const products = [
    {
        id: 1,
        category: "Watches",
        description:
            "The look that made Swiss watches the toast of the world. Still unbeatable.",
        imgLink:
            "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        name: "Silver",
        price: 1600
    },
    {
        id: 2,
        category: "Watches",
        description: "Dark, black beauty. Sure to look good on the wrist.",
        imgLink:
            "https://images.pexels.com/photos/1697566/pexels-photo-1697566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Black",
        price: 899
    },
    {
        id: 3,
        category: "Watches",
        description:
            "Multi chronographs, stop watch, timers. Altimeter. What else.",
        imgLink:
            "https://technofaq.org/wp-content/uploads/2018/07/image-result-for-chronograph-watch.jpeg",
        name: "Chronograph",
        price: 1199
    },
    {
        id: 4,
        category: "Watches",
        description: "For all ages. For all times. Classic Look. Classic leather.",
        imgLink:
            "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Classic",
        price: 1250
    },
    {
        id: 5,
        category: "Watches",
        description: "The original Apple Watch. Still a great buy.",
        imgLink:
            "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Apple v1",
        price: 999
    },
    {
        id: 6,
        category: "Watches",
        description: "Mechanical 28 jewelled watch. Connoisseur delight.",
        imgLink:
            "https://images.pexels.com/photos/47339/mechanics-movement-feinmechanik-wrist-watch-47339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Jewelled",
        price: 1999
    },
    {
        id: 7,
        category: "Sunglasses",
        description: "Desirable, reddish tint. Sure to attract attention.",
        imgLink:
            "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Tinted Red",
        price: 399
    },
    {
        id: 8,
        category: "Sunglasses",
        description: "Nostalgic, bluish tint, sure to get memories back. Vintage.",
        imgLink:
            "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Oldies",
        price: 199
    },
    {
        id: 9,
        category: "Sunglasses",
        description: "Trendy, young sunglasses with retro look. Teen favourite.",
        imgLink:
            "https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Youthful",
        price: 219
    },
    {
        id: 10,
        category: "Sunglasses",
        description: "Chic sunglasses. Classic dark shades, sure to generate envy.",
        imgLink:
            "https://images.pexels.com/photos/65659/glasses-glass-circle-light-transmittance-65659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name: "Classic Dark",
        price: 249
    },
    {
        id: 11,
        category: "Watches",
        description: "Apple Watch Version 2. A delight.",
        imgLink:
            "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Apple v2",
        price: 1499
    },
    {
        id: 12,
        category: "Belts",
        description: "Stylish formal brown belt. An office favourite.",
        imgLink:
            "https://as1.ftcdn.net/jpg/02/14/48/72/500_F_214487233_Aahw3DohDu6dSSfMqWCcU1QDatxpDt6E.jpg",
        name: "Fab Brown",
        price: 149
    },
    {
        id: 13,
        category: "Handbags",
        description: "Desirable travel bag. Mix of convenience and style",
        imgLink:
            "https://images.pexels.com/photos/2534961/pexels-photo-2534961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Travel Lite",
        price: 199
    },
    {
        id: 14,
        category: "Handbags",
        description: "3 Pockets, 2 Zips -  ideal for shopping and parties",
        imgLink:
            "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Chic Leather",
        price: 749
    },
    {
        id: 15,
        category: "Belts",
        description: "Signature belt from Gucci ",
        imgLink:
            "https://img.shopstyle-cdn.com/pim/c7/a6/c7a695a8db5a375b222f15bea045bdea_xlarge.jpg",
        name: "Raw Edge",
        price: 799
    },
    {
        id: 16,
        category: "Belts",
        description: "Iconic metallic belt",
        imgLink:
            "https://img.shopstyle-cdn.com/pim/81/78/8178fa6c3b27d3f3e0fe18d019c992ea_xlarge.jpg",
        name: "Goofy Black",
        price: 349
    },
    {
        id: 17,
        category: "Sunglasses",
        description: "Min black faded front shades",
        imgLink:
            "https://i.pinimg.com/originals/13/2c/d3/132cd311c0832e226f6db6887c1e008c.jpg",
        name: "Quay Shades",
        price: 479
    },
    {
        id: 18,
        category: "Belts",
        description: "Evergreen formal belt with classic buckle",
        imgLink:
            "https://as1.ftcdn.net/jpg/02/02/45/86/500_F_202458696_CYlcJbJfjgUb2VgQnPSUxHU79v6I3SC6.jpg",
        name: "Classic Brown",
        price: 128
    },
    {
        id: 19,
        category: "Handbags",
        description: "Beach handbag to go along with a beach holiday",
        imgLink:
            "https://images.pexels.com/photos/2305000/pexels-photo-2305000.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Funky Jute",
        price: 99
    }
];
const users = [
    { id: 1, name: 'John', email: 'email@test.com', password: '12356' },
    // Add more user data as needed
];
const orders = [
    {
        items: 3,
        totalValue: 2340,
        name: "Mohit",
        address: {
            line1: "Sector 45 ",
            line2: "A10"
        },
        city: "Noida"
    },
    {
        items: 2,
        totalValue: 800,
        name: "Vikas",
        address: {
            line1: "Sector 10",
            line2: ""
        },
        city: "Delhi"
    },
    {
        items: 4,
        totalValue: 4230,
        name: "Aswin",
        address: {
            line1: "Sector 30",
            line2: ""
        },
        city: "Noida"
    },
    {
        items: 1,
        totalValue: 240,
        name: "Manish",
        address:
        {
            line1: "A20",
            line2: "akosh nagar"
        },
        city: "Dehradun"
    },
    {
        items: 5,
        totalValue: 3340,
        name: "Vinay",
        address:
        {
            line1: "A50",
            line2: "Sector 453"
        },
        city: "Gurgram"
    }
];

app.get('/products', (req, res) => {

    // If no category is provided, return all products
    res.json(products);

});
// Endpoint to get products
app.get('/products/:category?', (req, res) => {
    const { category } = req.params;
    const filteredProducts = category ? products.filter(product => product.category === category) : products;
    res.json(filteredProducts);
});

// Endpoint to get details of a particular product
app.get('/product/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id === parseInt(id));

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

let productIdCounter = products.length + 1;
// Endpoint to create a new product
app.post('/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = productIdCounter++;
    products.push(newProduct);
    res.json(newProduct);
});

// Endpoint to edit a particular product
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    const index = products.findIndex(product => product.id === parseInt(id));
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
        res.json(products[index]);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

// Endpoint to delete a particular product
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const index = products.findIndex(product => product.id === parseInt(id));
    if (index !== -1) {
        const deletedProduct = products.splice(index, 1);
        res.json(deletedProduct);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

// Endpoint to get all orders
app.get('/orders', (req, res) => {
    res.json(orders);
});

// Endpoint to create a new order
app.post('/orders', (req, res) => {
    const newOrder = req.body;
    orders.push(newOrder);
    res.json(newOrder);
});



app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find the user with the given email
    const user = users.find((user) => user.email === email);

    // Check if the user exists
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if the provided password matches the stored password (insecure, use bcrypt in production)
    if (user.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If both email and password are correct, consider the login successful
    // Generate a token
    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });

    // Send the token in the response
    res.json({ message: 'Login successful', token, user: { id: user.id, name: user.name, email: user.email } });
});

// ... Other routes and server setup ...




app.post('/register', (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // Check if required fields are present
    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Check if the user already exists with the same email
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(409).json({ error: 'User already exists with this email' });
    }

    // If all checks pass, create a new user
    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);

    res.json({ message: 'User registered successfully', user: newUser });
});

// ... Other routes and server setup ...





// // Replace 'YourSecretKey' with your actual secret key for JWT
// const jwtSecretKey = 'YourSecretKey';

// let authToken = null;

// const baseURL = 'https://repo-8qu2.onrender.com/studentServer';

// const getWithToken = async (endpoint) => {
//     try {
//         const response = await axios.get(baseURL + endpoint, {
//             headers: {
//                 Authorization: `Bearer ${authToken}`,
//             },
//         });
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };

// // Function to retrieve and update the token
// const updateAuthToken = async () => {
//     try {
//         const token = await getWithToken('getToken');
//         authToken = token; // Update the authToken
//     } catch (error) {
//         console.error('Error updating token:', error);
//     }
// };

// // Middleware to check for a valid token before processing requests
// const authenticateToken = (req, res, next) => {
//     const token = req.headers.authorization;
//     if (!token) return res.sendStatus(401);

//     jwt.verify(token.split(' ')[1], jwtSecretKey, (err, user) => {
//         if (err) {
//             console.error('Error verifying token:', err);
//             return res.sendStatus(403);
//         }

//         req.user = user;
//         next();
//     });
// };


// app.get('/get-token', async (req, res) => {
//     res.json({ token: authToken });
// });

// // Apply authentication middleware to the routes that require authorization
// app.use("/svr/students", authenticateToken);

// let { studentsData } = require("./studentData.js");

// app.get("/svr/test", function (req, res) {
//     res.send("Test Response");
// });

// app.get("/svr/students", function (req, res) {
//     console.log('Authenticated user:', req.user);
//     let coursestr = req.query.course;
//     let grade = req.query.grade;
//     let sort = req.query.sort;
//     let arr1 = studentsData;
//     if (coursestr) {
//         let courseArr = coursestr.split(",");
//         arr1 = arr1.filter(st => courseArr.find((c1) => c1 === st.course));
//     }
//     if (grade) {
//         arr1 = arr1.filter((st) => st.grade === grade);
//     }
//     if (sort === "name")
//         arr1.sort((st1, st2) => st1.name.localeCompare(st2.name));

//     if (sort === "course")
//         arr1.sort((st1, st2) => st1.course.localeCompare(st2.course));

//     res.send(arr1);
// });

// app.get("/svr/students/:id", function (req, res) {
//     let id = +req.params.id;
//     let student = studentsData.find(st => st.id === id);
//     res.send(student);
// });

// app.get("/svr/students/course/:name", function (req, res) {
//     let name = req.params.name;
//     const arr1 = studentsData.filter(st => st.course === name);
//     res.send(arr1);
// });

// app.post("/svr/students", function (req, res) {
//     let body = req.body;
//     console.log(body);
//     let maxid = studentsData.reduce((acc, curr) => (curr.id >= acc ? curr.id : acc), 0);
//     let newid = maxid + 1;
//     let newStudent = { id: newid, ...body }
//     studentsData.push(newStudent);
//     res.send(newStudent);
// });

// app.put("/svr/students/:id", function (req, res) {
//     let id = +req.params.id;
//     let body = req.body;
//     let index = studentsData.findIndex((st) => st.id === id);
//     if (index >= 0) {
//         let updatedstudent = { id: id, ...body };
//         studentsData[index] = updatedstudent;
//         res.send(updatedstudent)
//     } else {
//         res.status(404).send("No Student found")
//     }
// });

// app.delete("/svr/students/:id", function (req, res) {
//     let id = +req.params.id;
//     let index = studentsData.findIndex((st) => st.id === id);
//     let deletedstudent = studentsData.splice(index, 1);
//     res.send(deletedstudent)
// });

