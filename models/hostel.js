import { Schema, model, models } from 'mongoose';

const HostelSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide a creator for this hostel'],
  },
  name: {
    type: String,
    required: [true, 'Please provide a name for this hostel'],
    length: [50, 'Name cannot be more than 50 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this hostel'],
    length: [500, 'Description cannot be more than 500 characters'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location for this hostel'],
    length: [150, 'Location cannot be more than 150 characters'],
  },
  phone: {
    type: [String], // Declare phone as an array of strings
    required: [true, 'Please provide a phone number for this hostel'],
    validate: {
      validator: (phoneNumbers) => phoneNumbers.every(phone => phone.length === 10),
      message: 'All phone numbers must be 10 characters long',
    },
  },
  roomTypes: {
    type: [
      {
        type: { type: String, required: true },
        price: { type: String, required: true },
        cautionDeposit: { type: String, required: true },
        description: { type: String, required: true },
      }
    ],
    required: [true, 'Please provide at least one room type for this hostel'],
  },
  images: {
    type: [String],
    required: [true, 'Please provide at least one image for this hostel'],
  },
  locationUrl: {
    type: String,
    required: [true, 'Please provide a location map url for this hostel'],
  },
  wifi: {
    type: Boolean,
    default: false,
  },
  waterFilter: {
    type: Boolean,
    default: false,
  },
  hostelType: {
    type: String,
    required: [true, 'Please provide a hostel type for this hostel'],
  },
  currentBill: {
    type: Boolean,
    default: false,
  },
  waterBill: {
    type: Boolean,
    default: false,
  },
  nightEntryTime: {
    type: String,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  parking: {
    type: Boolean,
    default: false,
  },
});

const Hostel = models.Hostel || model('Hostel', HostelSchema);

export default Hostel;