import Link from "next/link";
import { FiTrash2 } from 'react-icons/fi';
import { FiWifi, FiDroplet, FiDollarSign, FiCheckCircle } from 'react-icons/fi';
import { MdOutlineLocalParking } from 'react-icons/md';

const Form = ({ type, hostel, setHostel, submitting, handleSubmit }) => {


  const formatTimeToAmPm = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    let period = 'AM';
    let formattedHours = parseInt(hours, 10);

    if (formattedHours >= 12) {
      period = 'PM';
      formattedHours -= 12;
    }

    if (formattedHours === 0) {
      formattedHours = 12;
    }

    return `${formattedHours}:${minutes} ${period}`;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHostel((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
      [name]: name === 'nightEntryTime' ? formatTimeToAmPm(value) : value,
    }));
  };

  const handleAddPhoneNumber = () => {
    setHostel((prevData) => ({
      ...prevData,
      phone: [...prevData.phone, ''],
    }));
  };

  const handlePhoneNumberChange = (index, value) => {
    setHostel((prevData) => {
      const updatedPhoneNumbers = [...prevData.phone];
      updatedPhoneNumbers[index] = value;
      return {
        ...prevData,
        phone: updatedPhoneNumbers,
      };
    });
  };

  const handleRemovePhoneNumber = (index) => {
    setHostel((prevData) => {
      const updatedPhoneNumbers = prevData.phone.filter((_, i) => i !== index);
      return {
        ...prevData,
        phone: updatedPhoneNumbers,
      };
    });
  };

  const handleAddRoomType = () => {
    setHostel((prevData) => ({
      ...prevData,
      roomTypes: [...prevData.roomTypes, { type: '', price: 0, description: '' }],
    }));
  };

  const handleRoomTypeChange = (index, field, value) => {
    setHostel((prevData) => {
      const updatedRoomTypes = [...prevData.roomTypes];
      updatedRoomTypes[index][field] = value;
      return {
        ...prevData,
        roomTypes: updatedRoomTypes,
      };
    });
  };

  const handleRemoveRoomType = (indexToRemove) => {
    setHostel((prevData) => {
      const updatedRoomTypes = prevData.roomTypes.filter((_, index) => index !== indexToRemove);
      return {
        ...prevData,
        roomTypes: updatedRoomTypes,
      };
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const maxImages = 4;

    if (files.length + hostel.images.length > maxImages) {
      alert(`You can select a maximum of ${maxImages} images.`);
      return;
    }

    const readerPromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readerPromises).then((base64Images) => {
      setHostel((prevData) => ({
        ...prevData,
        images: [...prevData.images, ...base64Images],
      }));
    });
  };

  const handleRemoveImage = (indexToRemove) => {
    setHostel((prevData) => {
      const updatedImages = prevData.images.filter((_, index) => index !== indexToRemove);
      return {
        ...prevData,
        images: updatedImages,
      };
    });
  };

  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Hostel</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and help others to find the best hostel for them.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-3xl flex flex-col gap-7 p-6 rounded-lg border bg-white mb-4'
      >
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-1/2 md:pr-3">
            <label className="block mb-2 font-semibold text-blue-500" htmlFor="name">
              Hostel Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={hostel.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-3">
            <label className="block mb-2 font-semibold text-blue-500" htmlFor="location">
              Hostel Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={hostel.location}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold text-blue-500" htmlFor="description">
            Hostel Description
          </label>
          <textarea
            id="description"
            name="description"
            value={hostel.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>


        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-1/2 md:pr-3">
            <label className="block mb-2 font-semibold text-blue-500" htmlFor="locationUrl">
              Location Link
            </label>
            <input
              type="text"
              id="locationUrl"
              name="locationUrl"
              value={hostel.locationUrl}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-3">
            <label className="block mb-2 font-semibold text-blue-500">Contact Numbers</label>
            {hostel.phone.map((phoneNumber, index) => (
              <div key={index} className="flex">
                <input
                  type="tel"
                  name={`phone[${index}]`}
                  value={phoneNumber}
                  onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
                  className="w-full p-2 border rounded mr-2 mb-2"
                  required
                />
                {hostel.phone.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemovePhoneNumber(index)}
                    className="m-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
                  >
                    <FiTrash2 />
                  </button>
                )}
              </div>
            ))}
            {hostel.phone.length < 4 && hostel.phone.every((phoneNumber) => phoneNumber !== '') && (
              <button
                type="button"
                onClick={handleAddPhoneNumber}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Phone Number
              </button>
            )}
          </div>
        </div>

        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Hostel Type */}
          <div className="md:w-1/2 md:mr-4">
            <label className="block mb-2 font-semibold text-blue-500" htmlFor="hostelType">
              Hostel Type
            </label>
            <div className="relative">
              <select
                id="hostelType"
                name="hostelType"
                value={hostel.hostelType}
                onChange={handleInputChange}
                className="w-full p-2 border rounded appearance-none focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select Hostel Type</option>
                <option value="Men">Men's Hostel</option>
                <option value="Women">Women's Hostel</option>
                <option value="Family">Family Hostel</option>
                <option value="Unavailable">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Night Entry Time */}
          <div className="md:w-1/2">
            <label className="block mb-2 font-semibold text-blue-500" htmlFor="nightEntryTime">
              Night Entry Time
            </label>
            <input
              type="time"
              id="nightEntryTime"
              name="nightEntryTime"
              value={hostel.nightEntryTime}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Water Filter Availability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Water Filter Availability */}
          <div className="flex items-center">
            <FiWifi className="w-5 h-5 text-blue-500 mr-2" />
            <input
              id="wifi"
              type="checkbox"
              name="wifi"
              checked={hostel.wifi}
              onChange={handleInputChange}
              className="w-4 h-4 border rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="wifi" className="ml-2 text-blue-500 font-medium">Wifi Available</label>
          </div>

          <div className="flex items-center">
            <FiDroplet className="w-5 h-5 text-blue-500 mr-2" />
            <input
              id="waterFilter"
              type="checkbox"
              name="waterFilter"
              checked={hostel.waterFilter}
              onChange={handleInputChange}
              className="w-4 h-4 border rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="waterFilter" className="ml-2 text-blue-500 font-medium">Water Filter Available</label>
          </div>

          {/* Current Bill Extra */}
          <div className="flex items-center">
            <FiDollarSign className="w-5 h-5 text-blue-500 mr-2" />
            <input
              id="currentBill"
              type="checkbox"
              name="currentBill"
              checked={hostel.currentBill}
              onChange={handleInputChange}
              className="w-4 h-4 border rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="currentBill" className="ml-2 text-blue-500 font-medium">Current Bill Extra</label>
          </div>

          {/* Water Bill Extra */}
          <div className="flex items-center">
            <FiDollarSign className="w-5 h-5 text-blue-500 mr-2" />
            <input
              id="waterBill"
              type="checkbox"
              name="waterBill"
              checked={hostel.waterBill}
              onChange={handleInputChange}
              className="w-4 h-4 border rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="waterBill" className="ml-2 text-blue-500 font-medium">Water Bill Extra</label>
          </div>

          {/* Cleaning Availability */}
          <div className="flex items-center">
            <FiCheckCircle className="w-5 h-5 text-blue-500 mr-2" />
            <input
              id="roomCleaning"
              type="checkbox"
              name="roomCleaning"
              checked={hostel.roomCleaning}
              onChange={handleInputChange}
              className="w-4 h-4 border rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="roomCleaning" className="ml-2 text-blue-500 font-medium">Provide Room Cleaning</label>
          </div>

          {/* Parking Facility */}
          <div className="flex items-center">
            <MdOutlineLocalParking className="w-5 h-5 text-blue-500 mr-2" />
            <input
              id="parking"
              type="checkbox"
              name="parking"
              checked={hostel.parking}
              onChange={handleInputChange}
              className="w-4 h-4 border rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="parking" className="ml-2 text-blue-500 font-medium">Parking Facility Available</label>
          </div>
        </div>


        {/* Room Types */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-blue-500">Room Types</label>
          {hostel.roomTypes.map((roomType, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-3">
                <label htmlFor={`roomType-${index}`} className="block mb-2">
                  Type
                </label>
                <input
                  type="text"
                  id={`roomType-${index}`}
                  name={`roomTypes[${index}].type`}
                  value={roomType.type}
                  onChange={(e) => handleRoomTypeChange(index, 'type', e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor={`roomPrice-${index}`} className="block mb-2">
                  Price
                </label>
                <input
                  type="number"
                  id={`roomPrice-${index}`}
                  name={`roomTypes[${index}].price`}
                  value={roomType.price}
                  onChange={(e) => handleRoomTypeChange(index, 'price', e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor={`roomCautionDeposit-${index}`} className="block mb-2">
                  Caution Deposit
                </label>
                <input
                  type="number"
                  id={`roomCautionDeposit-${index}`}
                  name={`roomTypes[${index}].cautionDeposit`}
                  value={roomType.cautionDeposit || ''} // Display an empty string if cautionDeposit is not defined
                  onChange={(e) => handleRoomTypeChange(index, 'cautionDeposit', e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor={`roomDescription-${index}`} className="block mb-2">
                  Description
                </label>
                <input
                  type="text"
                  id={`roomDescription-${index}`}
                  name={`roomTypes[${index}].description`}
                  value={roomType.description}
                  onChange={(e) => handleRoomTypeChange(index, 'description', e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              {hostel.roomTypes.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveRoomType(index)}
                  className="col-span-3 flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FiTrash2 className="mr-2" />
                  Remove Room Type
                </button>
              )}
            </div>
          ))}
          {hostel.roomTypes.length === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-3">
                <label htmlFor={`roomType-0`} className="block mb-2">
                  Type
                </label>
                <input
                  type="text"
                  id={`roomType-0`}
                  name={`roomTypes[0].type`}
                  value={hostel.roomTypes[0].type || ''} // Display an empty string if type is not defined
                  onChange={(e) => handleRoomTypeChange(0, 'type', e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor={`roomPrice-0`} className="block mb-2">
                  Price
                </label>
                <input
                  type="number"
                  id={`roomPrice-0`}
                  name={`roomTypes[0].price`}
                  value={hostel.roomTypes[0].price || ''} // Display an empty string if price is not defined
                  onChange={(e) => handleRoomTypeChange(0, 'price', e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor={`roomCautionDeposit-0`} className="block mb-2">
                  Caution Deposit
                </label>
                <input
                  type="number"
                  id={`roomCautionDeposit-0`}
                  name={`roomTypes[0].cautionDeposit`}
                  value={hostel.roomTypes[0].cautionDeposit || ''} // Display an empty string if cautionDeposit is not defined
                  onChange={(e) => handleRoomTypeChange(0, 'cautionDeposit', e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor={`roomDescription-0`} className="block mb-2">
                  Description
                </label>
                <input
                  type="text"
                  id={`roomDescription-0`}
                  name={`roomTypes[0].description`}
                  value={hostel.roomTypes[0].description || ''} // Display an empty string if description is not defined
                  onChange={(e) => handleRoomTypeChange(0, 'description', e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>
          )}
          {hostel.roomTypes.length < 8 && hostel.roomTypes.every((roomType) => roomType.type !== '' && roomType.price !== '' && roomType.description !== '' && roomType.cautionDeposit !== '') && (
            <button
              type="button"
              onClick={handleAddRoomType}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Room Type
            </button>
          )}
        </div>



        {/* Image Gallery */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-blue-500">Image Gallery</label>
          <input
            id="fileInput"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
            style={{ display: 'none' }} // Hide the selected file name
          />
          <label
            htmlFor="fileInput"
            className="w-full p-2 border rounded cursor-pointer bg-gray-100 hover:bg-gray-200"
          >
            Choose Images
          </label>
          {hostel.images.length > 0 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {hostel.images.map((imageUrl, index) => (
                <div key={index} className="relative">
                  <img src={imageUrl} alt={`Hostel Image ${index + 1}`} className="w-full h-40 object-cover rounded" />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-blue-600 rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;