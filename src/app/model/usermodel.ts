export interface User {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
}

interface Customer {
    _id: string;
    firstName: string | null;
    lastName: string | null;
    files: {
      name: string;
      uploadDate: string;
      url: string;
    }[];
  }