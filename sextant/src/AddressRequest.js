import React, { useState, useEffect } from "react";

const AddressRequest = (props) => {
  const [ipAddress, setIpAddress] = useState(null);

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip));
  }, [props.url]);

  return <div className="AddressRequest">{ipAddress}</div>;
};

export default AddressRequest;
