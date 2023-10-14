import { ReactNode } from "react";
import styles from "./formGroup.module.css";

export function FormGroup({ children, className }: { className?: string; children: ReactNode }) {
	return <div className={`${styles.formGroup} ${className ? className : ""}`}>{children}</div>;
}
