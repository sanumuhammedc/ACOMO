"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myHostels, setMyHostels] = useState([]);

  useEffect(() => {
    const fetchHostels = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/hostels`);
      const data = await response.json();

      setMyHostels(data);
    };

    if (session?.user.id) fetchHostels();
  }, [session?.user.id]);

  const handleEdit = (hostel) => {
    router.push(`/hostel-update?id=${hostel._id}`);
  };

  const handleDelete = async (hostel) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this Hostel?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/hostel/${hostel._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myHostels.filter((item) => item._id !== hostel._id);

        setMyHostels(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name='My'
      desc={`Welcome to your profile page. Explore hostels added by you to help others  to find perfect accommodation options.`}
      data={myHostels}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
