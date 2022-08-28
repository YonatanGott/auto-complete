"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialDatabase = void 0;
const employeeModel_1 = require("../models/employee/employeeModel");
const initialDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield employeeModel_1.Employee.count();
        if (data === 0) {
            yield employeeModel_1.Employee.insertMany(employees);
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.initialDatabase = initialDatabase;
const employees = [
    {
        "imageUrl": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Robert Wolfkisser",
        "workTitle": "Engineer",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Jill Jailbreaker",
        "workTitle": "Engineer",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Henry Silkeater",
        "workTitle": "Designer",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Bill Horsefighter",
        "workTitle": "Designer",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Jeremy Footviewer",
        "workTitle": "Manager",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Bar Something",
        "workTitle": "Senior Manager",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Eyal Coffee",
        "workTitle": "Programmer",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Maya Tea",
        "workTitle": "Consultant",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Assi Breakfast",
        "workTitle": "Designer",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Rotem Morning",
        "workTitle": "Manager",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Hello Today",
        "workTitle": "Senior Manager",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Tanya Sunshine",
        "workTitle": "Consultant",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Lucky Charms",
        "workTitle": "Programmer",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Toto Complete",
        "workTitle": "Designer",
    },
    {
        "imageUrl": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        "name": "Sela Evening",
        "workTitle": "Engineer",
    },
    {
        "imageUrl": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "name": "Rick Sanchez",
        "workTitle": "Engineer",
    },
    {
        "imageUrl": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "name": "Morty Smith",
        "workTitle": "Consultant",
    },
    {
        "imageUrl": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "name": "Summer Smith",
        "workTitle": "Senior Manager",
    },
    {
        "imageUrl": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        "name": "Jerry Smith",
        "workTitle": "Designer",
    },
    {
        "imageUrl": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
        "name": "Albert Einstein",
        "workTitle": "Programmer",
    },
    {
        "imageUrl": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        "name": "Beth Smith",
        "workTitle": "Manager",
    },
];
//# sourceMappingURL=initialDatabase.js.map