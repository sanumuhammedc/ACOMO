"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";
import Image from "next/image";

const UpdateHostel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hostelId = searchParams.get("id");

  const [hostel, setHostel] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getHostelDetails = async () => {
      const response = await fetch(`/api/hostel/${hostelId}`);
      const data = await response.json();

      setHostel(data);
      setLoading(false);
    };

    if (hostelId) getHostelDetails();
  }, [hostelId]);

  const updateData = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!hostelId) return alert("Missing hostel Id!");

    try {
      const response = await fetch(`/api/hostel/${hostelId}`, {
        method: "PATCH",
        body: JSON.stringify(hostel),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    {loading ? (<Image style={{ width: "auto", height: "auto" }} alt='Loading...' width="100" height="100" src="/assets/icons/loader.svg" className="flex justify-center items-center h-screen" />) : (
      <Form
        type='Edit'
        hostel={hostel}
        setHostel={setHostel}
        submitting={submitting}
        handleSubmit={updateData}
      />)
    }
    </>
  );
};

export default UpdateHostel;
