import { ComponentPropsWithoutRef } from "react";
import styles from "./input.module.css";

type InputProps = ComponentPropsWithoutRef<"input">;

export function Input(props: InputProps) {
	return (
		<input
			{...props}
			className={`${props.className ?? ""} ${styles.input}`}
			placeholder={props.placeholder}
		/>
	);
}
