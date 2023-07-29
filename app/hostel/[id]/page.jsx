"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FiWifi, FiDroplet, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { MdElectricalServices, MdPayment, MdCleaningServices, MdOutlineLocalParking } from 'react-icons/md';
import { RiHotelLine } from 'react-icons/ri';
import Image from 'next/image';


const HostelDetailPage = ({ params }) => {

    const [hostelData, setHostelData] = useState({});
    const [loading, setLoading] = useState(true);
    const [selectedRoomType, setSelectedRoomType] = useState('');

    useEffect(() => {
        const fetchHostel = async () => {
            const response = await fetch(`/api/hostel/${params?.id}`);
            const data = await response.json();

            setHostelData(data);
            setSelectedRoomType(data.roomTypes[0]);
            setLoading(false);
        };

        if (params?.id) fetchHostel();
    }, [params.id]);

    const handleRoomTypeChange = (roomType) => {
        setSelectedRoomType(roomType);
    };

    function convertToAmPm(timeString) {
        // Parse the time string to get hours and minutes
        const [hours, minutes] = timeString.split(':').map((str) => parseInt(str, 10));

        // Determine if it's AM or PM
        const period = hours >= 12 ? 'PM' : 'AM';

        // Convert to 12-hour format
        const twelveHour = hours % 12 || 12;

        // Format the time as 'hh:mm AM/PM'
        const formattedTime = `${twelveHour}:${minutes.toString().padStart(2, '0')} ${period}`;
        return formattedTime;
    }


    return (
        <>
            {loading ? (<Image style={{ width: "auto", height: "auto" }} alt='Loading...' width="100" height="100" src="/assets/icons/loader.svg" className="flex justify-center items-center h-screen" />) : (
                <div>
                    <h1 className="text-3xl font-semibold text-blue-500 mb-2 capitalize">{hostelData.name}</h1>
                    <p className="text-gray-600 mb-4 flex items-center"> <FiMapPin className='mr-1' /> {hostelData.location}</p>

                    {/* Image Gallery */}
                    <div className="mb-4">
                        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay dynamicHeight={true}>
                            {hostelData.images.length > 0 ? hostelData.images.map((imageUrl, index) => (
                                <div key={index}>
                                    <img
                                        src={imageUrl}
                                        alt={`Hostel Image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        style={{ maxHeight: '400px' }}
                                    />
                                </div>
                            )) : (
                                <div>
                                    <img src="/assets/images/notfound.jpeg" alt="Hostel Image" className="w-full h-full object-cover" style={{ maxHeight: '400px' }} />
                                </div>
                            )}
                        </Carousel>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-blue-500 mb-2">About</h2>
                        <p className="text-gray-700">{hostelData.description}</p>
                    </div>


                    {/* Room Types */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-blue-500 mb-2">Room Types</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {hostelData.roomTypes.map((roomType) => (
                                <button
                                    key={roomType.type}
                                    onClick={() => handleRoomTypeChange(roomType)}
                                    className={`py-2 mb-2 w-full md:w-30 px-4 border ${selectedRoomType.type === roomType.type ? 'black_btn' : 'outline_btn'
                                        }`}
                                >
                                    {roomType.type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected Room Type */}
                    <div className="mb-4">
                        <h2 className="text-l font-semibold text-blue-500 mb-2">Selected Room Details</h2>
                        <p className="text-lg font-medium">{selectedRoomType.type}</p>
                        <p className="text-gray-600 mb-2">Rent: ₹{selectedRoomType.price} / Person</p>
                        <p className="text-gray-600 mb-2">Caution Deposit: ₹{selectedRoomType.cautionDeposit} / Person</p>
                        <p>{selectedRoomType.description}</p>
                    </div>

                    {/* Hostel Information */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-blue-500 mb-2">Hostel Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <RiHotelLine className="inline-block w-5 h-5 text-blue-500 mr-2" />
                                <span>Hostel Type: {hostelData.hostelType}</span>
                            </div>
                            <div>
                                <FiClock className="w-5 h-5 text-blue-500 inline-block mr-2" />
                                <span>Night Entry Time: {hostelData.nightEntryTime === '' ? "NILL" : convertToAmPm(hostelData.nightEntryTime)}</span>
                            </div>
                            <div>
                                <FiWifi className="w-5 h-5 text-blue-500 inline-block mr-2" />
                                <span>Wi-Fi Availability: {hostelData.wifiAvailability ? 'Available' : 'Not Available'}</span>
                            </div>
                            <div>
                                <FiDroplet className="inline-block w-5 h-5 text-blue-500 mr-2" />
                                <span>Water Filter Availability: {hostelData.waterFilterAvailability ? 'Available' : 'Not Available'}</span>
                            </div>
                            <div>
                                <MdElectricalServices className="inline-block w-5 h-5 text-blue-500 mr-2" />
                                <span>Current Bill Extra from rent: {hostelData.currentBill ? "Yes" : "No"}</span>
                            </div>
                            <div>
                                <FiDroplet className="inline-block w-5 h-5 text-blue-500 mr-2" />
                                <span>Water Bill Extra from rent: {hostelData.waterBill ? "Yes" : "No"}</span>
                            </div>
                            <div>
                                <MdCleaningServices className="inline-block mr-2 w-5 h-5 text-blue-500" />
                                <span>Provide Cleaning: {hostelData.roomCleaning ? "Yes" : "No"}</span>
                            </div>
                            <div>
                                <MdOutlineLocalParking className="inline-block w-5 h-5 text-blue-500 mr-2" />
                                <span>Parking Facility : {hostelData.parking ? "Available" : "Not Available"}</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-blue-500 mb-2">Contact Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {hostelData.phone.map((phone, index) => (
                                <Link href={`tel:${phone}`} key={index}>
                                    <FiPhone className="inline-block mr-2 w-5 h-5 text-blue-500" />
                                    <span>Phone: {phone}</span>
                                </Link>
                            ))}
                        </div>
                    </div>


                    {/* Map */}
                    <div className="mb-8">
                        <h2 className="text-xl text-blue-500 font-semibold mb-4">Hostel Location</h2>
                        <div className="flex justify-between align-center rounded-lg overflow-hidden shadow-lg bg-white p-8">
                            <div className="flex items-center">
                                <FiMapPin className="w-5 h-5 text-blue-500 mr-2" />
                                <span className="text-gray-700">{hostelData.location}</span>
                            </div>
                            <div className="flex justify-end">
                                <a
                                    href={hostelData.locationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 font-semibold hover:text-blue-600"
                                >
                                    Navigate
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            )}
        </>
    );
};

export default HostelDetailPage;
