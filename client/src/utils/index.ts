export function updatedAt(date: string | Date) {
	if (!date) return;

	const updatedAt = new Date(date);
	const intl = Intl.DateTimeFormat("en", { dateStyle: "short", timeStyle: "short" });

	return `last modified on ${intl.format(updatedAt)}`;
}

export function isErrorWithMessage(error: unknown): error is { message: string; status: number } {
	return (
		typeof error === "object" &&
		error != null &&
		"message" in error &&
		"status" in error &&
		typeof (error as any).message === "string"
	);
}
