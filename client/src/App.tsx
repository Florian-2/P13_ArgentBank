import { Outlet } from "react-router-dom";
import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer";

function App() {
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
