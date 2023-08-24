export interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface AuthStore {
	user: User | null;
	token: string | null;
	isAuthenticated: boolean;
}
