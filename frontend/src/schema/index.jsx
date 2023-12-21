import * as Yup from "yup";

export const signupValidation = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone_number: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    gender: Yup.string().required('Gender is required'),
    city: Yup.string().required('City is required'),
    district: Yup.string().required('District is required'),
    state: Yup.string().required('State is required'),
    blood_group: Yup.string().required('Blood group is required'),
    roll: Yup.string().required('Roll is required'),
    terms_and_condition: Yup.boolean().oneOf([true], 'Please accept the terms and conditions'),
})