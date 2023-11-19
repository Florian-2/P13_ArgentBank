export interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	createdAt: string;
	updatedAt: string;
}

export interface AuthStore {
	user: User | null;
	token: string | null;
	loaded: boolean;
}
