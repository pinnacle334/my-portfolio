import { ReactNode, ButtonHTMLAttributes } from "react"

//"ButtonHTMLAttributes" permits all HTML button attributes to be passed
// so no need to list out the props individually.
//the {...rest} is for other attributes like onClick, disabled, etc.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
}

export const Button = ({ children, variant = "primary", className = "", ...rest }: ButtonProps) => {

    const variants = {
        primary: "font-col bg-[var(--primary-font)] rounded-md px-3 py-1 text-xs font-medium",
        secondary: "rounded-md px-3 py-1 text-[var(--primary-font)] border-2 text-xs font-medium"
    }
    return (
        <button className={`${variants[variant]} ${className}`} {...rest}>
            {children}
        </button>
    )
}