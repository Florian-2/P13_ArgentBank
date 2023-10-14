import { transactions } from "@/data/transactions";
import { Transaction } from "./Transaction/Transaction";
import styles from "./transactionList.module.css";

export function TransactionsList() {
	return (
		<div className={styles.containerTransactions}>
			{transactions.map((transaction) => (
				<Transaction transaction={transaction} />
			))}
		</div>
	);
}
