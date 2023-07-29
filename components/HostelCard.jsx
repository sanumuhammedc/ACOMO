"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import { FiWifi, FiMapPin } from 'react-icons/fi';
import { RiHotelLine } from 'react-icons/ri';


const HostelCard = ({ hostel, handleEdit, handleDelete }) => {

  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  function truncateLocation(location, maxLength) {
    if (location.length > maxLength) {
      return location.slice(0, maxLength) + '...';
    }
    return location;
  }


  return (
    <div className='prompt_card flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300'>
      <Link href={`/hostel/${hostel._id}`}>
        <div className='aspect-w-16 aspect-h-9'>
          <div className='h-40'>
            <img
              src={hostel.images[0] || "/assets/images/notfound.jpeg"}
              alt='Hostel Image'
              className='w-full h-full object-cover rounded-t-lg'
            />
          </div>
        </div>

        <div className='p-4'>
          <h3 className='font-bold text-xl mb-1 capitalize'>{hostel.name}</h3>
          <div className='text-gray-700 flex items-center'>
            <FiMapPin className='text-blue-500 mr-2' />
            {truncateLocation(hostel.location, 25)}
          </div>

          <div className='flex flex-start justify-around mt-3'>
            <div className='flex items-center mr-4'>
              <FiWifi className='text-blue-500 mr-2' />
              <span>{hostel.wifi ? 'Wifi Available' : 'No Wifi'}</span>
            </div>
            <div className='flex items-center'>
              <RiHotelLine className='text-blue-500 mr-2' />
              <span>{hostel.hostelType}</span>
            </div>
          </div>
        </div>
      </Link>

      {session?.user.id === hostel.creator._id && pathName === "/profile" && (
        <div className='flex justify-end justify-around p-4 border-t border-gray-100 pt-3 px-4'>
          <p
            className='font-medium text-blue-500 cursor-pointer hover:text-blue-600'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-medium text-orange-500 cursor-pointer hover:text-orange-600'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>

  );
};

export default HostelCard;