"use client"
import AccountSetup from "@/components/AccountSetup";
import AddressDetails from "@/components/AddressDetails";
import FormPreview from "@/components/formPreview";
import PersonalDetails from "@/components/PersonalDetails";
import { TAccountSetup, TAddressDetails, TPersonalDetails } from "@/zodschema/multiStepFormSchema";
import { useState } from "react";

export type TFormData = {
  personalDetails?: TPersonalDetails;
  addressDetails?: TAddressDetails;
  accountSetup?: TAccountSetup;
}

export default function page() {
  const [formData, setFormData] = useState<TFormData>({});
  const [step, setStep] = useState(1);
  return (

    <div className="w-[300px] md:w-[350px] lg:w-[450px] border border-gray-200 rounded-md p-7 text-center">
      <div className="mb-3 flex justify-between mx-3 items-center relative">
        <div className="line absolute bg-primary h-[1px] w-full -z-10"></div>
        <span className="w-8 h-8 rounded-full flex justify-center items-center bg-primary border-primary border text-white">1</span>
        <span className={`w-8 h-8 rounded-full flex justify-center items-center ${step >= 2 ? "bg-primary text-white" : "bg-background text-foreground"}  border-primary border`}>2</span>
        <span className={`w-8 h-8 rounded-full flex justify-center items-center ${step >= 3 ? "bg-primary text-white" : "bg-background text-foreground"}  border-primary border`}>3</span>
        <span className={`w-8 h-8 rounded-full flex justify-center items-center ${step >= 4 ? "bg-primary text-white" : "bg-background text-foreground"}  border-primary border`}>4</span>
      </div>

      {step === 1 && <PersonalDetails formData={formData} setFormData={setFormData} setStep={setStep} />}
      {step === 2 && <AddressDetails formData={formData} setFormData={setFormData} setStep={setStep} />}
      {step === 3 && <AccountSetup formData={formData} setFormData={setFormData} setStep={setStep} />}
      {step === 4 && <FormPreview formData={formData} setStep={setStep} />}

    </div>

  );
}