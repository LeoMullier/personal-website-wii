import { useState } from "react";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";
import Footer from "./Components/Footer/Footer";

const lngs = {
	en: { nativeName: "English" },
	fr: { nativeName: "French" },
};

function App() {
	const { t, i18n } = useTranslation(["Personal"]);
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<div>
				{Object.keys(lngs).map((lng) => (
					<button
						key={lng}
						style={{
							fontWeight:
								i18n.resolvedLanguage === lng
									? "bold"
									: "normal",
						}}
						type="submit"
						onClick={() => {
							i18n.changeLanguage(lng);
							setCount(count + 1);
						}}
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
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				{t("description.part2")}
			</a>
			<Footer t={t} />
		</>
	);
}

export default App;
