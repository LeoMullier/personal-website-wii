// Import depedencies
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";

// Import components
import Footer from "./Components/Footer/Footer";
import LanguagesRouter from "./LanguagesRouter";

// Import files
import "./App.css";

// Import utilities
import { ChangeLanguage } from "./Utilities";

// Entry point of the web application
function App() {
	const { t, i18n } = useTranslation(["Personal", "HealthAndSafety"]);
	const [count, setCount] = useState(0);
	const lngs = {
		en: { nativeName: "English" },
		fr: { nativeName: "French" },
	};

	return (
		<>
			<div>app.jsx</div>
			<BrowserRouter>
				<LanguagesRouter />
			</BrowserRouter>

			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
			<div>
				{Object.keys(lngs).map((lng) => (
					<button
						key={lng}
						style={{
							fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
						}}
						type="submit"
						onClick={() => ChangeLanguage(i18n, lng)}
					>
						{lngs[lng].nativeName}
					</button>
				))}
			</div>
			<p>
				<i>{t("counter", { count })}</i>
			</p>
			<p>
				<Trans i18nKey="Personal.description.part1">
					Edit <code>src/App.js</code> and save to reload.
				</Trans>
			</p>
			<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
				{t("description.part2")}
			</a>
			<Footer t={t} />
		</>
	);
}

export default App;
