import React from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { cartid } = useParams();
  return (
    <div>
      <h1>Her the user info is gng to displayyy {cartid}....</h1>
    </div>
  );
};

export default UserInfo;
