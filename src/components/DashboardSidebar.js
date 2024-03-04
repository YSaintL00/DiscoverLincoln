import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function DashboardSidebar() {
	const router = useRouter();
	const { pathname } = router;

	console.log(pathname);

	return (
		<div className="w-[326px]">
			<div className="sidebar">
				<div className="header">
					<img
						className="orgIcon"
						src="/civiconnectDashLogo.png"
						width="43"
						height="43"
					></img>

					<div className="organization">
						<h1>Civiconnect</h1>
						<h2>Organization Dashboard</h2>
					</div>
				</div>
				<div className="dashNavTab">
					<a
						className={`tab ${
							router.pathname === "/dashboard/edit-profile" ? "active" : ""
						}`}
						href="/dashboard/edit-profile"
						// className={styles['itineraryButton']}
						// style={{ backgroundColor: colour }}
						// onClick={handleClick}
					>
						<i className="fa-solid fa-pen-to-square"></i>
						Edit Profile
					</a>
					<a
						className={`tab ${
							router.pathname === "/dashboard/analytics" ? "active" : ""
						}`}
						href="/dashboard/analytics"
					>
						<i className="fa-solid fa-chart-simple"></i>
						Analytics
					</a>
					<a className={`tab ${
							router.pathname === "/dashboard/settings" ? "active" : ""
						}`} href="/dashboard/settings">
						<i className="fa-solid fa-gear"></i>
						Settings
					</a>
					<a className={`tab ${
							router.pathname === "/dashboard/post-event" ? "active" : ""
						}`} href="/dashboard/post-event">
						<i className="fa-solid fa-calendar-plus"></i>
						Post an Event
					</a>
				</div>
			</div>
		</div>
	);
}
