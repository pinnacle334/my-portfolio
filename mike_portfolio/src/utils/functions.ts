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
  
// For document downloads
export const handleDownload = (path: string, filename?: string) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = filename || path.split("/").pop() || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// for smooth scrolling to specific portion of docucument
export const smoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    targetElement?.scrollIntoView({ behavior: "smooth" });
};