// Import dependencies
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { DateTime } from "luxon";

// Import files
import TranslationEnglishPersonal from "./Translations/En/Personal.json";
import TranslationEnglishWii from "./Translations/En/Wii.json";
import TranslationFrenchPersonal from "./Translations/Fr/Personal.json";
import TranslationFrenchWii from "./Translations/Fr/Wii.json";

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: true,
		fallbackLng: "en",
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
			// format: (value, format, lng) => { // legacy usage
			//   if (value instanceof Date) {
			//     return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
			//   }
			//   return value;
			// }
		},
		resources: {
			en: {
				Personal: TranslationEnglishPersonal,
				Wii: TranslationEnglishWii,
			},
			fr: {
				Personal: TranslationFrenchPersonal,
				Wii: TranslationFrenchWii,
			},
		},
	});

// new usage
i18n.services.formatter.add("DATE_HUGE", (value, lng, options) => {
	return DateTime.fromJSDate(value)
		.setLocale(lng)
		.toLocaleString(DateTime.DATE_HUGE);
});

export default i18n;
