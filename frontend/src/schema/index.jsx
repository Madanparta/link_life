import * as Yup from "yup";

export const signupValidation = Yup.object({
    name: Yup.string().required('Name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone_number: Yup.string().required('Phone number is required'),
    age: Yup.string().required('Age is required'),
    password: Yup.string().required('Password is required'),
    gender: Yup.string().required('Gender is required'),
    city: Yup.string().required('City is required'),
    district: Yup.string().required('District is required'),
    state: Yup.string().required('State is required'),
    blood_group: Yup.string().required('Blood group is required'),
    role: Yup.string().required('Role is required'),
    // terms_and_condition: Yup.boolean().oneOf([true], 'Please accept the terms and conditions'),
});

export const signInValidation = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
})

export const donorValidation = Yup.object({
    donationDate:Yup.string().required("Date is required"),
    donationQuantity:Yup.string().required('Quantity required'),
});

export const bloodBankInputDataValidation = Yup.object({
    bloodGroup:Yup.string().required("Please enter BloodGroup"),
    quantityAvailable:Yup.string().required('Quantity required'),
    description:Yup.string().required('Please enter information about in above values'),
});


export const userEditingValidation = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone_number: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
})