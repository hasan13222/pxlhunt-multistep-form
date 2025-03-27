"use client";
import { TFormData } from "@/app/page";
import { addressDetailsSchema, TAddressDetails } from "@/zodschema/multiStepFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";


export default function AddressDetails({ formData, setFormData, setStep }: { formData: TFormData, setFormData: Dispatch<SetStateAction<TFormData>>, setStep: Dispatch<SetStateAction<number>> }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(addressDetailsSchema), defaultValues: formData.addressDetails
    })

    // form submit handler
    const onSubmit = (data: TAddressDetails) => {
        setFormData({...formData, addressDetails: data});
        setStep(3);
    }

    // previous handler
    const prevHandler = () => {
        setStep(1)
    }

    return (
        <>
            <h2 className="text-transparent mb-2 bg-clip-text font-semibold text-xl bg-gradient-to-r from-primary to-secondary">Address Details</h2>
            <div className="flex justify-start text-left">
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-0.5 mb-2">
                        <label htmlFor="street">Street</label>
                        <input className="border rounded-md px-3 py-1 border-gray-200" {...register("street")} />
                        <p className="text-red-500">{errors.street?.message}</p>
                    </div>

                    <div className="flex flex-col gap-0.5 mb-2">
                        <label htmlFor="city">City</label>
                        <input className="border rounded-md px-3 py-1 border-gray-200" {...register("city")} />
                        <p className="text-red-500">{errors.city?.message}</p>
                    </div>

                    <div className="flex flex-col gap-0.5 mb-2">
                        <label htmlFor="zipcode">Zip Code</label>
                        <input className="border rounded-md px-3 py-1 border-gray-200" {...register("zipcode")} />
                        <p className="text-red-500">{errors.zipcode?.message}</p>
                    </div>

                    <div className="flex justify-between">
                        <button onClick={prevHandler} type="button" className="bg-gray-500/30 px-5 py-2 rounded-md cursor-pointer hover:bg-gray-500/40">Prev</button>
                        <button type="submit" className="bg-secondary/30 px-5 py-2 rounded-md cursor-pointer hover:bg-secondary/70">Next</button>
                    </div>
                </form>
            </div>
        </>

    );
}