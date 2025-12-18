import React from "react";

export const BrandLogo = ({className = "w-12 h-12"}) => (
    <img
        src="/logo.png"
        alt="Liquid Development logo"
        className={className}
        draggable={false}
    />
);