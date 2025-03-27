"use client"
import { TFormData } from '@/app/page';
import { fakeSubmitData } from '@/lib/api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react'

export default function FormPreview({ formData, setStep }: { formData: TFormData, setStep: Dispatch<SetStateAction<number>> }) {

    const router = useRouter();

    // simulate data submit to api
    const { mutate, isPending } = useMutation({
        mutationFn: fakeSubmitData,
        onSuccess: (data) => {
            console.log(data)
            router.push('/success');
        },
        onError: (error) => {
            console.error("Submission failed:", error);
        },
    });

    const submitHanlder = () => {
        const finalData = { ...formData.personalDetails, ...formData.addressDetails, ...formData.accountSetup }
        mutate(finalData);
    }

    // previous handler
    const prevHandler = () => {
        setStep(3);
    }
    return (
        <>
            <h2 className="text-transparent mb-2 bg-clip-text font-semibold text-xl bg-gradient-to-r from-primary to-secondary">Preview Information</h2>
            <div className="preview_box p-5 bg-white dark:bg-black/40 rounded-md my-5 text-left">
                <div className="personalDetails ">
                    <h3 className='font-semibold text-base'>Personal Details</h3>
                    <p>Name: {formData.personalDetails?.fullName}</p>
                    <p>Email: {formData.personalDetails?.email}</p>
                    <p>Phone: {formData.personalDetails?.phoneNumber}</p>
                </div>
                <div className="personalDetails my-3">
                    <h3 className='font-semibold text-base'>Address Details</h3>
                    <p>Street: {formData.addressDetails?.street}</p>
                    <p>City: {formData.addressDetails?.city}</p>
                    <p>Zipcode: {formData.addressDetails?.zipcode}</p>
                </div>
                <div className="personalDetails ">
                    <h3 className='font-semibold text-base'>Account Setup</h3>
                    <p>Username: {formData.accountSetup?.username}</p>
                </div>
            </div>
            <div className="flex justify-start text-left">
                <div className="w-full" >
                    <div className="flex justify-between">
                        <button onClick={prevHandler} type="button" className="bg-gray-500/30 px-5 py-2 rounded-md cursor-pointer hover:bg-gray-500/40">Prev</button>
                        {isPending ? <div className="border-gray-300 h-7 w-7 animate-spin rounded-full border-2 border-t-primary" /> : <button onClick={submitHanlder} type="button" className="bg-primary px-5 py-2 rounded-md cursor-pointer hover:bg-primary/70">
                            Submit
                        </button>}
                    </div>
                </div>
            </div>
        </>
    )
}
