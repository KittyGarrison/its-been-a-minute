// This file contains type definitions for our data.
export type Person = {
    id:number, 
    first:string, 
    last:string,
    phone:string,
    photo:string,
    birthdate:string,
    lastContacted:string,
    lastDismissed:string,
};

export type User = {
    id: number, 
    first:string, 
    last:string, 
    email:string,
    password?:string,
    contacts: Person[], //array of Person objects
};