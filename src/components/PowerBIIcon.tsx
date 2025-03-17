
import React from 'react';

const PowerBIIcon = ({ className = "w-6 h-6" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
      fill="currentColor"
    >
      <path d="M13.2 4C12.1 4 11 4.4 10.2 5.2C9.4 6 9 7.1 9 8.2V39.8C9 40.9 9.4 42 10.2 42.8C11 43.6 12.1 44 13.2 44H26.2C27.3 44 28.4 43.6 29.2 42.8C30 42 30.4 40.9 30.4 39.8V8.2C30.4 7.1 30 6 29.2 5.2C28.4 4.4 27.3 4 26.2 4H13.2ZM35.2 15.5C34.1 15.5 33 15.9 32.2 16.7C31.4 17.5 31 18.6 31 19.7V39.8C31 40.9 31.4 42 32.2 42.8C33 43.6 34.1 44 35.2 44H39.2C40.3 44 41.4 43.6 42.2 42.8C43 42 43.4 40.9 43.4 39.8V19.7C43.4 18.6 43 17.5 42.2 16.7C41.4 15.9 40.3 15.5 39.2 15.5H35.2Z" />
    </svg>
  );
};

export default PowerBIIcon;
