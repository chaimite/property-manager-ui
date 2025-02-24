export interface LoginCredentials {
    email: string;
    password: string;
  }
  
export interface LoginResponse {
    token: string;
  }

export interface RegisterCredentials {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
  