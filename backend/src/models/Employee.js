import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
        type: Date,
        required: true
    }
});

EmployeeSchema.pre("save", async function(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;