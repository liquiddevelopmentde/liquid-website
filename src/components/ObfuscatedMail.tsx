import React from "react";

export const ObfuscatedMail = ({email, className, children, title}: {email: string, className?: string, children: React.ReactNode, title?: string}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.location.href = `mailto:${email}`;
    };

    return (
        <button
            onClick={handleClick}
            className={className}
            title={title || "Send email"}
            type="button"
        >
            {children}
        </button>
    );
};
