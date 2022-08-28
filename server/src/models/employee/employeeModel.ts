import { Schema, model } from 'mongoose'

interface IEmployeeModel {
    name: string;
    workTitle: string;
    imageUrl: string;
}

const employeeSchema = new Schema<IEmployeeModel>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        workTitle: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
        },
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            },
        },
    }
);


const Employee = model<IEmployeeModel>("Employee", employeeSchema);

export { Employee };