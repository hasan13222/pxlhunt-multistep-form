"use client";
import { TFormData } from "@/app/page";
import { accountSetupSchema, TAccountSetup } from "@/zodschema/multiStepFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";


export default function AccountSetup({ formData, setFormData, setStep }: { formData: TFormData, setFormData: Dispatch<SetStateAction<TFormData>>, setStep: Dispatch<SetStateAction<number>> }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(accountSetupSchema), defaultValues: formData.accountSetup
    })

    // form submission handler
    const onSubmit = (data: TAccountSetup) => {
        setFormData({...formData, accountSetup: data});
        setStep(4);
    }

    // previous handler
    const prevHandler = () => {
        setStep(2);
    }
    return (
        <>
            <h2 className="text-transparent mb-2 bg-clip-text font-semibold text-xl bg-gradient-to-r from-primary to-secondary">Account Setup</h2>
            <div className="flex justify-start text-left">
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-0.5 mb-2">
                        <label htmlFor="username">Username</label>
                        <input className="border rounded-md px-3 py-1 border-gray-200" {...register("username")} />
                        <p className="text-red-500">{errors.username?.message}</p>
                    </div>

                    <div className="flex flex-col gap-0.5 mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="border rounded-md px-3 py-1 border-gray-200" {...register("password")} />
                        <p className="text-red-500">{errors.password?.message}</p>
                    </div>

                    <div className="flex flex-col gap-0.5 mb-2">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="border rounded-md px-3 py-1 border-gray-200" {...register("confirmPassword")} />
                        <p className="text-red-500">{errors.confirmPassword?.message}</p>
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