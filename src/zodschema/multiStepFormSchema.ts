import z from "zod";

export const personalDetailsSchema = z.object({
    fullName: z.string().min(2, "Full Name is required"),
    email: z.string().email("Invalid email"),
    phoneNumber: z.string()
        .min(10, "Must be at least 10 digits")
        .regex(/^\d+$/, "Only numbers are allowed")
});

export const addressDetailsSchema = z.object({
    street: z.string().min(2, "Street is required"),
    city: z.string().min(2, "City is required"),
    zipcode: z.string()
        .min(5, "Must be at least 10 digits")
        .regex(/^\d+$/, "Only numbers are allowed")
});

export const accountSetupSchema = z.object({
    username: z.string().min(4, "Username must be minimum 4 characters"),
    password: z.string().min(6, "Password length must be minimum 6"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], 
})

export type TPersonalDetails = z.infer<typeof personalDetailsSchema>;
export type TAddressDetails = z.infer<typeof addressDetailsSchema>;
export type TAccountSetup = z.infer<typeof accountSetupSchema>;