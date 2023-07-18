import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

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
        lowercase: true
    },
    dataContratacao: {
        type: String,
        required: true
    }
});

EmployeeSchema.pre("save", async function(next) {
    this.password = await bcryptjs.hash(this.password, 10);
    next();
});

const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;