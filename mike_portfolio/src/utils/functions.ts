import { constVar } from "./constVal";

//This handles sending of email. All parameters is provided with a default value
export const sendEmail = ({
        email = constVar.email, 
        subject = constVar.emailDefaultSubject, 
        body = constVar.emailDefaultMessage
    }: {
        email?: string;
        subject?: string;
        body?: string;
    } = {}) => {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
  
