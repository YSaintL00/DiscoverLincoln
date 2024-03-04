import "@/styles/globals.css";
import '@/styles/dashboardSidebar.css'
import '@/styles/settings.css'
import '@/styles/analytics.css'
import "@/styles/form.css";
import "@/styles/contact.css";
import "@/styles/login.css";
import "@/styles/register.css";
import "@/styles/itinerary.css";
import "@/styles/slider.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Toaster } from "react-hot-toast";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Toaster />
		</>
	);
}
