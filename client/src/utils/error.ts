export function isErrorWithMessage(error: unknown): error is { message: string; status: number } {
	return (
		typeof error === "object" &&
		error != null &&
		"message" in error &&
		"status" in error &&
		typeof (error as any).message === "string"
	);
}
