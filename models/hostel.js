import { Schema, model, models } from 'mongoose';

const HostelSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: [true, 'Please provide a name for this hostel'],
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this hostel'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location for this hostel'],
    maxlength: [150, 'Location cannot be more than 150 characters'],
  },
  contactPhone: {
    type: Number,
    required: [true, 'Please provide a contact number for this hostel'],
    maxlength: [10, 'Contact number cannot be more than 10 characters'],
  },
  roomTypes:{
    type:[
      {type: String, price: Number, description: String}
    ],
    required: [true, 'Please provide at least one room type for this hostel'],
  },
  images: {
    type: [String],
    required: [true, 'Please provide at least one image for this hostel'],
  },
  locationMapUrl: {
    type: String,
    required: [true, 'Please provide a location map url for this hostel'],
  },
  wifiAvailability: {
    type: Boolean,
    default: false,
  },
  waterFilterAvailability: {
    type: Boolean,
    default: false,
  },
  hostelType: {
    type: String,
    required: [true, 'Please provide a hostel type for this hostel'],
  },
  cautionDeposit: {
    type: Number,
    required: [true, 'Please provide a caution deposit for this hostel'],
  },
  currentBillPayment: {
    type: Boolean,
    default: false,
  },
  waterBillPayment: {
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
  parkingFacility: {
    type: Boolean,
    default: false,
  },
});

const Hostel = models.Hostel || model('Hostel', HostelSchema);

export default Hostel;