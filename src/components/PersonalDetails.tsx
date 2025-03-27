"use client";
import { TFormData } from "@/app/page";
import { personalDetailsSchema, TPersonalDetails } from "@/zodschema/multiStepFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";


export default function PersonalDetails({formData, setFormData, setStep}: { formData: TFormData, setFormData: Dispatch<SetStateAction<TFormData>>, setStep: Dispatch<SetStateAction<number>> }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(personalDetailsSchema), defaultValues: formData.personalDetails    })

    // form submit handler
    const onSubmit = (data: TPersonalDetails) => {
        setFormData({...formData, personalDetails: data});
        setStep(2);
    }

    return (
        <>
        <h2 className="text-transparent mb-2 bg-clip-text font-semibold text-xl bg-gradient-to-r from-primary to-secondary">Personal Details</h2>
        <div className="flex justify-start text-left">
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-0.5 mb-2">
                    <label htmlFor="fullName">Full Name</label>
                    <input className="border rounded-md px-3 py-1 border-gray-200" {...register("fullName")} />
                    <p className="text-red-500">{errors.fullName?.message}</p>
                </div>

                <div className="flex flex-col gap-0.5 mb-2">
                    <label htmlFor="email">Email</label>
                    <input className="border rounded-md px-3 py-1 border-gray-200" {...register("email")} />
                    <p className="text-red-500">{errors.email?.message}</p>
                </div>

                <div className="flex flex-col gap-0.5 mb-2">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input className="border rounded-md px-3 py-1 border-gray-200" {...register("phoneNumber")} />
                    <p className="text-red-500">{errors.phoneNumber?.message}</p>
                </div>
                
                <div className="flex justify-end">
                    <button type="submit" className="bg-secondary/30 px-5 py-2 rounded-md cursor-pointer hover:bg-secondary/70">Next</button>
                </div>
            </form>
        </div>
        </>
        
    );
}