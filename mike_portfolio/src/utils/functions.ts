//This handles sending of email. All parameters is provided with a default value
export const sendEmail = ({
        email = "michaelekanem33@gmail.com", 
        subject = "Inquiry from Portfolio Website", 
        body = ""
    }: {
        email?: string;
        subject?: string;
        body?: string;
    } = {}) => {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
  
