"use client";
import { useState, useEffect } from "react";
import { useSession, signIn, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import Image from "next/image";

const AddHostel = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState(null);
  let userId = null;

  useEffect(() => {
    userId = String(session?.user?.id);
    setHostel((prevData) => ({ ...prevData, creator: userId }));
  }, [session]);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const initialFormData = {
    creator: '',
    name: '',
    location: '',
    images: [],
    description: '',
    roomTypes: [{ type: '', price: '', cautionDeposit: '', description: '' }],
    hostelType: '',
    cautionDeposit: '',
    nightEntryTime: '',
    wifi: false,
    waterFilter: false,
    currentBill: false,
    waterBill: false,
    roomCleaning: false,
    parking: false,
    phone: [''],
    locationUrl: '',
  };

  const [submitting, setIsSubmitting] = useState(false);
  const [hostel, setHostel] = useState(initialFormData);

  const createHostel = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHostel((prevData) => ({ ...prevData, creator: userId }));
    console.log(hostel);

    try {
      const response = await fetch("/api/hostel/new", {
        method: "POST",
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

  if (status === "loading") {
    // Render a loading indicator or placeholder while session data is loading
    return <Image src="/assets/icons/loader.svg" alt="loading..." width="100" height="100" />;
  }

  // Check if the user is authenticated, if not, redirect to login page
  if (status === "unauthenticated") {
    // Redirect to the login page or any other page for authentication
    {providers &&
      Object.values(providers).map((provider) => (

       
            signIn(provider.id, {
              callbackUrl: '/hostel-add',
            })
         
      ))}
    return null;
  }



  return (
    <Form
      type='Add'
      hostel={hostel}
      setHostel={setHostel}
      submitting={submitting}
      handleSubmit={createHostel}
    />
  );
};

export default AddHostel;
