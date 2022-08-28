export interface IEmployee {
    id: string
    name: string;
    workTitle: string;
    imageUrl: string;
}

export interface IEmployeeCreate {
    name: string;
    workTitle: string;
    imageUrl: string;
}