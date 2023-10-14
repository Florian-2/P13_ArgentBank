import { Transaction } from "@/interfaces/transaction";

export const transactions: Transaction[] = [
	{
		id: crypto.randomUUID(),
		title: "Argent Bank Checking (x8349)",
		amount: "$2,082.79",
		description: "Available Balance",
	},
	{
		id: crypto.randomUUID(),
		title: "Argent Bank Savings (x6712)",
		amount: "$10,928.42",
		description: "Available Balance",
	},
	{
		id: crypto.randomUUID(),
		title: "Argent Bank Credit Card (x8349)",
		amount: "$184.30",
		description: "Available Balance",
	},
];
