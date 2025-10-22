export const checkValidData=(email,password)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const isEmailValid = emailRegex.test(email);  
const isPasswordValid=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,15}$/.test(password); 

if(!isEmailValid)return "email is not valid";
if(!isPasswordValid)return "password is not valid";

return null;
}