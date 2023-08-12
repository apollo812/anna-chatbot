import React from 'react';
export const Icon = ({ className, fill, size, height, icon, marginLeft, margin }) => (
  <div
    className={className}
    style={{
      display: 'flex',
      alignItems: 'center',
      color: fill,
      width: size || 16,
      height: height || size || 16,
      marginLeft: marginLeft || 0,
      marginRight: margin || 0
    }}
  >
    {icons[icon]}
  </div>
);

const icons = {
  Hamburger: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6l16 0"></path>
      <path d="M4 12l10 0"></path>
      <path d="M4 18l14 0"></path>
    </svg>
  ),
  Send: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
      <path d="M7.5 11L15.75 2.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15.75 2.75L10.875 16.25C10.8421 16.3218 10.7893 16.3827 10.7228 16.4253C10.6563 16.468 10.579 16.4907 10.5 16.4907C10.421 16.4907 10.3437 16.468 10.2772 16.4253C10.2107 16.3827 10.1579 16.3218 10.125 16.25L7.49999 11L2.24999 8.375C2.17819 8.34209 2.11734 8.28926 2.07468 8.22279C2.03202 8.15631 2.00934 8.07899 2.00934 8C2.00934 7.92101 2.03202 7.84369 2.07468 7.77721C2.11734 7.71074 2.17819 7.65791 2.24999 7.625L15.75 2.75Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  User: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
      <g clipPath="url(#clip0_2_71)">
        <path
          d="M9 13.5C11.2091 13.5 13 11.7091 13 9.5C13 7.29086 11.2091 5.5 9 5.5C6.79086 5.5 5 7.29086 5 9.5C5 11.7091 6.79086 13.5 9 13.5Z"
          fill="#71717A"
        />
        <path
          d="M9 15.5C6.33 15.5 1 16.84 1 19.5V21.5H17V19.5C17 16.84 11.67 15.5 9 15.5ZM16.76 5.86L15.08 7.55C15.92 8.73 15.92 10.26 15.08 11.44L16.76 13.13C18.78 11.11 18.78 8.06 16.76 5.86ZM20.07 2.5L18.44 4.13C21.21 7.15 21.21 11.69 18.44 14.87L20.07 16.5C23.97 12.61 23.98 6.55 20.07 2.5Z"
          fill="#71717A"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_71">
          <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  ),
  Plus: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
      <path d="M8 3.83333V13.1667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3.33331 8.5H12.6666"
        stroke="white"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Close: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  )
};

export default Icon;
