import { Button } from "@/components/Button";
import { Transaction as TransactionType } from "@/interfaces/transaction";
import styles from "./transaction.module.css";

export function Transaction({ transaction }: { transaction: TransactionType }) {
	return (
		<section className={styles.transaction}>
			<div className={styles.transactionDetails}>
				<h3 className="account-title">{transaction.title}</h3>
				<p className="account-amount">{transaction.amount}</p>
				<p className="account-amount-description">{transaction.description}</p>
			</div>

			<div className={styles.actions}>
				<Button>View transactions</Button>
			</div>
		</section>
	);
}
