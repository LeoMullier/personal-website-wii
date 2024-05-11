// src/components/LanguagePage.js
import React from "react";
import { useParams } from "react-router-dom";

function WiiMenu() {
	const { UrlLanguage } = useParams();

	return (
		<React.Fragment>
			<h1>WiiMenu</h1>
			<div>WiiMenu Language: {UrlLanguage}</div>
		</React.Fragment>
	);
}

export default WiiMenu;
