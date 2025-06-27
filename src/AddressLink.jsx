import React from 'react'
import LocationPinIcon from "@mui/icons-material/LocationPin";

const AddressLink = ({ children, className = null}) => {
  if (!className) {
    className = 'my-3 block ';
  }
  className += 'flex font-semibold underline';
  return (
    <div className={className}>
      <LocationPinIcon />
      <a
        className="my-2 block font-semibold underline"
        target="_blank"
        rel="noreferrer"
        href={`https://maps.google.com/?q=${encodeURIComponent(children)}`}
      >
        {children}
      </a>
    </div>
  );
}

export default AddressLink;