import React from 'react';

export const ObfuscatedMail = ({email, className, children, title}) => {
    const handleClick = (e) => {
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
