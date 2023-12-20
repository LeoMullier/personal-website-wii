// Importing all dependencies
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";

// Initialisations
const lngs = {
	fr: { nativeName: "Français" },
	en: { nativeName: "English" },
};

// Create the component
function App() {
	const { t, i18n } = useTranslation(['WiiMenu']);

	// Render the component
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div>
					{Object.keys(lngs).map((lng) => (
						<button
							key={lng}
							style={{ fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal" }}
							type="submit"
							onClick={() => i18n.changeLanguage(lng)}>
							{lngs[lng].nativeName}
						</button>
					))}
				</div>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					{t("description.part2")}
				</a>
			</header>

			<Footer />
		</div>
	);
}

// Export the component
export default App;
