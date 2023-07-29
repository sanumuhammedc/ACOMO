"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userHostels, setUserHostels] = useState([]);

  useEffect(() => {
    const fetchHostels = async () => {
      const response = await fetch(`/api/users/${params?.id}/hostels`);
      const data = await response.json();

      setUserHostels(data);
    };

    if (params?.id) fetchHostels();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s profile page. Explore hostels added by ${userName} to help others  to find perfect accommodation options.`}
      data={userHostels}
    />
  );
};

export default UserProfile;
