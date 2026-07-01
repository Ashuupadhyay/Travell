const mongoose = require("mongoose");

const transportCompanySchema = new mongoose.Schema({

    companyName: {
        type: String,
        required: [true, "Company name is required"],
        trim: true,
        minlength: 3,
        maxlength: 100
    },

    ownerName: {
        type: String,
        required: [true, "Owner name is required"],
        trim: true,
        minlength: 3,
        maxlength: 60
    },

    address: {
        type: String,
        required: [true, "Address is required"],
        trim: true,
        minlength: 10,
        maxlength: 300
    },

    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        match: [/^[6-9]\d{9}$/, "Enter valid mobile number"]
    },

    landlineNumber: {
        type: String,
        default: "",
        match: [/^(0\d{2,4}-?)?\d{6,8}$/, "Invalid landline number"]
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email"]
    },

    gstNumber: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        trim: true,
        match: [/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Invalid GST Number"]
    },

    vehicleType: {
        type: String,
        required: true,
        enumenum: [
    "Mini Truck (Eicher)",
    "Pickup",
    "Truck",
    "Trailer",
    "Container",
    "Refrigerated Van",
    "Other"
]
    },

    operatingRoutes: {
        type: [String],
        required: true,
        validate: {
            validator: function(value){
                return value.length > 0;
            },
            message: "Select at least one working route."
        }
    },

    document: {
        type: String,
        required: true
        // File upload hone ke baad yahan file path ya URL store hoga
    },

    termsAccepted: {
        type: Boolean,
        required: true,
        validate: {
            validator: function(v){
                return v === true;
            },
            message: "You must accept Terms & Conditions"
        }
    }

},{
    timestamps:true
});

module.exports = mongoose.model("TransportCompany", transportCompanySchema);