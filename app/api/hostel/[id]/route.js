import Hostel from "@models/hostel";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const hostel = await Hostel.findById(params.id).populate("creator")
        if (!hostel) return new Response("hostel Not Found", { status: 404 });
        
        return new Response(JSON.stringify(hostel), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const hostel = await request.json();

    try {
        await connectToDB();

        // Find the existing hostel by ID
        const existingHostel = await Hostel.findById(params.id);

        if (!existingHostel) {
            return new Response("hostel not found", { status: 404 });
        }

        Object.assign(existingHostel, hostel);

        existingHostel.save();

        return new Response("Successfully updated the hostels", { status: 200 });
    } catch (error) {
        return new Response("Error Updating hostel", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the hostel by ID and remove it
        await Hostel.findByIdAndRemove(params.id);

        return new Response("hostel deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting hostel", { status: 500 });
    }
};
