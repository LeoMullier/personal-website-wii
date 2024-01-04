// Import the required modules
import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { DateTime } from "luxon" // Import DateTime directly from luxon
import { initReactI18next } from "react-i18next";

// Import the required files
import HomeMenuFr from "./Locales/Fr/HomeMenu.json"
import WiiMenuFr from "./Locales/Fr/HomeMenu.json"
import HomeMenuEn from "./Locales/En/HomeMenu.json"
import WiiMenuEn from "./Locales/En/WiiMenu.json"

// Detect the user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
i18n.use(LanguageDetector)

// Pass the i18n instance to react-i18next.
i18n.use(initReactI18next)

// Initialize i18next
// for all options read: https://www.i18next.com/overview/configuration-options
i18n.init({
	debug: true,
	fallbackLng: "fr",
	interpolation: {
		escapeValue: false,
	},
	resources: {
		fr: {
			HomeMenu: HomeMenuFr,
			WiiMenu: WiiMenuFr,
		},
		en: {
			HomeMenu: HomeMenuEn,
			WiiMenu: WiiMenuEn,
		},
	},
})

// Add a date formatter
i18n.services.formatter.add("DATE_HUGE", function(Value, Language) {
	return DateTime.fromJSDate(Value).setLocale(Language).toLocaleString(DateTime.DATE_HUGE);
})

// Export the component
export default i18n
