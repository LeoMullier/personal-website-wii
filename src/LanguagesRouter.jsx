// Import dependencies
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Import pages
import PagesRouter from "./PagesRouter";

// Import utilities
import { IsOneValidPathOf } from "./Utilities";

// Manage languages based on the URL path
function LanguagesRouter() {
	const navigate = useNavigate();
	const { i18n } = useTranslation();

	useEffect(
		function () {
			let AvailableLanguages = ["en", "fr"];
			let UrlLanguage = IsOneValidPathOf(window.location.pathname, AvailableLanguages, "/", 1, "/", 1);

			if (UrlLanguage == "") {
				if (window.location.pathname.split("/")[1].length == 2) {
					navigate("/" + i18n.resolvedLanguage + "/Error");
				} else {
					navigate("/" + i18n.resolvedLanguage + window.location.pathname);
				}
			}
		},
		[navigate, i18n]
	);

	return (
		<>
			<div>LanguagesRouter urlLanguage: {window.location.pathname.split("/")[1]}</div>
			<div>2: {i18n.languages}</div>
			<Routes>
				<Route path="/:UrlLanguage/*" element={<PagesRouter />} />
			</Routes>
		</>
	);
}

export default LanguagesRouter;
