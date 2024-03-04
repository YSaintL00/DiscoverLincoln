import React from "react";
import Link from "next/link";

export default function login() {
	return (
		<>
			<div id="login-page">
				<div className="overall">
					<div className="background">
						<div className="login-info">
							<form className="form-info">
								<h1 className="header">Login</h1>

								<input
									type="text"
									id="username"
									name="username"
									placeholder="Username"
								/>

								<input
									type="password"
									id="password"
									name="password"
									placeholder="Password"
								/>

								<Link className="login-button" href="/dashboard/edit-profile">
									Log In
								</Link>
							</form>
						</div>
					</div>
					<div className="background-green">
						<div className="login-info">
							<h1 className="header">
								<span>Posting for a Business?</span>
							</h1>
							<p className="body">Create an organization account</p>
							<p className="body">&#10003; Manage multiple events</p>
							<p className="body">&#10003; Skip the approval process</p>
							<p className="body">&#10003; Grow your online presence</p>

							<Link href="/register" className="register-button">
								Register
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
