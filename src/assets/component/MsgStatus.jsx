export const MsgStatus = ({ recieved, read }) => {
  if (recieved) {
    return (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
            stroke="#9B9B9B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        className="h-5 w-5"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        fill="none"
        stroke={`${read ? '#34b7f1' : '#9B9B9B'}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"></path>
        </g>
      </svg>
    );
  }
};
