import styles from "./welcome.module.css";

export function Welcome({ firstName, lastName }: { firstName: string; lastName: string }) {
	return (
		<h1 className={styles.title}>
			Welcome back
			<br />
			{firstName} {lastName} !
		</h1>
	);
}
