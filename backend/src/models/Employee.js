import mongoose from "mongoose";
<<<<<<< HEAD
import bcryptjs from "bcryptjs"
=======
import bcryptjs  from "bcryptjs"
>>>>>>> edf738023bff689df015fe670993e3b417a5dd41

const EmployeeSchema = new mongoose.Schema({
    nomeCompleto: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    telefone: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    dataContratacao: {
        type: Date,
        required: true
    }
});

EmployeeSchema.pre("save", async function(next) {
    this.password = await bcryptjs.hash(this.password, 10);
    next();
});

const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;