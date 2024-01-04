// Import the modules
import { DateTime } from "luxon";
import { useTranslation } from "react-i18next";
import React from "react";

const getGreetingTime = (d = DateTime.now()) => {


    const split_afternoon = 12; // 24hr time to split the afternoon
    const split_evening = 17; // 24hr time to split the evening
    const currentHour = parseFloat(d.toFormat("H"));

    console.log(currentHour);
    if (currentHour >= split_afternoon && currentHour <= split_evening) {
        return "afternoon";
    } else if (currentHour >= split_evening) {
        return "evening";
    }
    return "morning";
};

function Footer () {
    const { t } = useTranslation(['HomeMenu']);

	// Render the component
	return (
        <div className="Footer">
            <div>{t("footer.date", { date: new Date(), context: getGreetingTime() })}</div>
        </div>
    )
}

export default Footer;
