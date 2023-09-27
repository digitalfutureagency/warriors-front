export interface User {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
}

interface Customer {
    _id: string;
    firstName: string;
    lastName: string;
    // Otras propiedades del cliente
  }