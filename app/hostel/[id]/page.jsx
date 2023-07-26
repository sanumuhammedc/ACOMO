"use client"
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const HostelDetailPage = () => {
    const sampleHostelData = {
        name: 'Sample Hostel',
        location: '123 Hostel Street, University Town',
        contact: {
            email: 'hostel@example.com',
            phone: '123-456-7890',
        },
        roomTypes: [
            { type: 'Single Room', price: 50, description: 'A room for one person' },
            { type: 'Double Room', price: 70, description: 'A room for two people' },
            { type: 'Shared Room', price: 40, description: 'A room for four people' },
        ],
        images: [
            '/assets/images/logo.png',
            '/assets/images/notfound.jpeg',
            '/assets/images/notfound.jpeg',
        ],
        locationMapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15714.666480511258!2d76.3300326!3d10.0443446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb4551c2a9a4b718!2sUsman&#39;s%20Hostel!5e0!3m2!1sen!2sin!4v1666918025290!5m2!1sen!2sin',
        cautionDeposit: 100,
        wifiAvailability: true,
        waterFilterAvailability: true,
        hostelType: 'Men', // Men's or Women's hostel
        currentBillPayment: 'Included',
        waterBillPayment: 'Included',
        nightCurfewTime: '10:00 PM',
        cleaningFrequency: 'Daily', // or 'Weekly', 'Bi-Weekly', etc.
    };

    const [selectedRoomType, setSelectedRoomType] = useState(sampleHostelData.roomTypes[0]);

    const handleRoomTypeChange = (roomType) => {
        setSelectedRoomType(roomType);
    };


    return (
        <div>
            <h1 className="text-3xl font-semibold mb-2">{sampleHostelData.name}</h1>
            <p className="text-gray-600 mb-4">{sampleHostelData.location}</p>

            {/* Image Gallery */}
            <div className="mb-4">
                <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay dynamicHeight={true}>
                    {sampleHostelData.images.map((imageUrl, index) => (
                        <div key={index}>
                            <img
                                src={imageUrl}
                                alt={`Hostel Image ${index + 1}`}
                                className="w-full h-full object-cover"
                                style={{ maxHeight: '400px' }}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>


            {/* Room Types */}
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Room Types</h2>
                <div className="flex flex-col">
                    {sampleHostelData.roomTypes.map((roomType) => (
                        <button
                            key={roomType.type}
                            onClick={() => handleRoomTypeChange(roomType)}
                            className={`py-2 mb-2 w-30 px-4 border ${selectedRoomType.type === roomType.type ? 'bg-black text-white' : 'bg-gray-200'
                                }`}
                        >
                            {roomType.type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <p>{selectedRoomType.type}</p>
                <p>Price: ${selectedRoomType.price}</p>
                <p>{selectedRoomType.description}</p>
            </div>

            {/* Additional Hostel Information */}
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Hostel Information</h2>
                <p>Caution Deposit: ${sampleHostelData.cautionDeposit}</p>
                <p>Wi-Fi Availability: {sampleHostelData.wifiAvailability ? 'Available' : 'Not Available'}</p>
                <p>Water Filter Availability: {sampleHostelData.waterFilterAvailability ? 'Available' : 'Not Available'}</p>
                <p>Hostel Type: {sampleHostelData.hostelType}</p>
                <p>Current Bill Payment: {sampleHostelData.currentBillPayment}</p>
                <p>Water Bill Payment: {sampleHostelData.waterBillPayment}</p>
                <p>Night Curfew Time: {sampleHostelData.nightCurfewTime}</p>
                <p>Cleaning Frequency: {sampleHostelData.cleaningFrequency}</p>
            </div>

            {/* Contact Details */}
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
                <p>Email: {sampleHostelData.contact.email}</p>
                <p>Phone: {sampleHostelData.contact.phone}</p>
            </div>

            {/* Map */}
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Hostel Location</h2>
                <iframe
                    className='responsive-map-container'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15714.666480511258!2d76.3300326!3d10.0443446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb4551c2a9a4b718!2sUsman&#39;s%20Hostel!5e0!3m2!1sen!2sin!4v1666918025290!5m2!1sen!2sin"
                    title="Hostel Location"
                    width="100%"
                    height="400"
                    style={{ border: "0", width: "100%", marginBottom: "0" }}
                    allowfullscreen
                    loading="eager"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default HostelDetailPage;
