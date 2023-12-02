import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Title: FC<Props> = ({ children, className }) => {
  return (
    <h3 className={`font-medium text-4xl mb-6 ${className}`}>{children}</h3>
  );
};

export default Title;
