import { ComponentPropsWithoutRef } from "react";
import styles from "./button.module.css";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export function Button(props: ButtonProps) {
	return (
		<button
			{...props}
			className={`${props.className ?? ""} ${styles.btn}`}
		>
			{props.children}
		</button>
	);
}
