import { Outlet } from "react-router-dom";
import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer";
import { usePersistAuth } from "./store/auth/hooks/usePersistAuth";

function App() {
	usePersistAuth();

	return (
		<>
			<Header />

			<main className="bg-dark">
				<Outlet />
			</main>

			<Footer />
		</>
	);
}

export default App;
