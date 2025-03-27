import { TFormData } from "@/app/page";

export async function fakeSubmitData(data: any):Promise<{success: boolean, message: string}> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve({ success: true, message: "Data submitted successfully!" });
      }, 1000); 
    });
  }
  