const { z } = require("zod");

const registerSchema = z.object({
    ownername: z.string().min(1, "Owner name is required."),
    shopname: z.string().min(1, "Shop name is required."),
    pincode: z.string().min(1, "Pincode is required."),
    street: z.string().min(1, "Street is required."),
    city: z.string().min(1, "City is required."),
    state: z.string().min(1, "State is required."),
    country: z.string().min(1, "Country is required."),
    phone: z.string().regex(/^[0-9]{10}$/, { message: "Phone must be a valid 10-digit number" }),
    alternativephone: z.string().optional(),
    restaurantlogo: z.string().optional(),
    email: z.string().email("Invalid email format."),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});


const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),

});

module.exports={registerSchema,loginSchema};