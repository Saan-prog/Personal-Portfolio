import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [2, "Name must be at least 2 characters"],
        maxlength: [50, "Name must not exceed 50 characters"]
    },
    email: {
        type: String,
        required:[true, "Email is required"],
        trim:true,
        lowercase: true,
        // unique: true,
        match:[/\S+@\S+\.\S+/, "Email is invalid"]
    },
    message: {
        type: String,
        required:[true, "Message is required"],
        trim:true,
        minlength: [10, "Message must be at least 10 characters"],
        maxlength: [300, "Message must not exceed 300 characters"]
    }
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);
export default Message;