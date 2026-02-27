import React, { useEffect, useState } from "react";

function Profile() {
  const [userData, setUserData] = useState({ username: "", email: "" });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("signupData"));
    if (savedData) {
      setUserData({
        username: savedData.username || "",
        email: savedData.email || "",
      });
    }
  }, []);

  return (
    <div className="bg-indigo-200 min-h-screen bg-cover bg-center">
      <h1 className="text-3xl font-bold text-center text-black">My Profile</h1>
      <p className="text-black font-bold">NAME: {userData.username}</p>
      <p className="text-black font-bold">EMAIL: {userData.email}</p>
    </div>
  );
}

export default Profile;
