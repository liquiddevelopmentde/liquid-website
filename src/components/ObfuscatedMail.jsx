import React, { useState } from 'react';

export const ObfuscatedMail = ({ email, className, children, title }) => {
  // Start with a dummy link so bots don't see 'mailto:'
  const [href, setHref] = useState("#");

  // Only reveal the real email when the user hovers or focuses
  const reveal = () => {
    setHref(`mailto:${email}`);
  };

  return (
    <a
      href={href}
      onMouseEnter={reveal}
      onFocus={reveal}
      onClick={reveal}
      className={className}
      title={title || "Send email"}
    >
      {children}
    </a>
  );
};
