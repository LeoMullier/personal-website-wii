// Import dependencies
import { useEffect } from "react";
import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Import pages
import Error from "./Pages/Error/Error";
import HealthAndSafety from "./Pages/HealthAndSafety/HealthAndSafety";
import Layout from "./Pages/Layout/Layout";
import SdCardMenu from "./Pages/SdCardMenu/SdCardMenu";
import WiiMenu from "./Pages/WiiMenu/WiiMenu";
import WiiMessageBoard from "./Pages/WiiMessageBoard/WiiMessageBoard";
import WiiOptions from "./Pages/WiiOptions/WiiOptions";

// Import utilities
import { IsOneValidPathOf } from "./Utilities";

// Manage pages based on the URL path
function PagesRouter() {
	const { UrlLanguage } = useParams();
	const navigate = useNavigate();
	const { i18n } = useTranslation();

	useEffect(
		function () {
			let AvailableTargets = ["Error", "HealthAndSafety", "SdCardMenu", "WiiMenu", "WiiMessageBoard", "WiiOptions"];
			let UrlTarget = IsOneValidPathOf(window.location.pathname, AvailableTargets, "/", 2, "#", 1);
			if (UrlTarget == "") {
				if (!window.location.pathname.split("/")[2]) {
					navigate("HealthAndSafety");
				} else {
					navigate("Error");
				}
			}
		},
		[navigate, i18n]
	);

	return (
		<>
			<Layout />
			<Routes>
				<Route path="Error" element={<Error />} />
				<Route path="HealthAndSafety" element={<HealthAndSafety />} />
				<Route path="SdCardMenu" element={<SdCardMenu />} />
				<Route path="WiiMenu" element={<WiiMenu />} />
				<Route path="WiiMessageBoard" element={<WiiMessageBoard />} />
				<Route path="WiiOptions" element={<WiiOptions />} />
			</Routes>

			<div>PagesRouter Language: {UrlLanguage}</div>
			<div>1: {window.location.pathname.substring(window.location.pathname.indexOf("/", window.location.pathname.indexOf("/") + 1 + 1))}</div>
		</>
	);
}

export default PagesRouter;
