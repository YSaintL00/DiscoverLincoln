import React from "react";
import Link from "next/link";

export default function login() {
	return (
		<div id="register-page">
			<div className="overall">
				<div className="background">
					<div className="register-info">
						<form className="form-info">
							<h1 className="header">Register</h1>

							<input
								type="text"
								id="fname"
								name="fname"
								placeholder="Full Name"
							/>

							<input type="text" id="email" name="email" placeholder="Email" />

							<input
								type="password"
								id="password"
								name="password"
								placeholder="Password"
							/>

							<input
								type="text"
								id="password"
								name="password"
								placeholder="Confirm Password"
							/>

							<Link href="/dashboard/edit-profile" className="register-button">
								Register
							</Link>
						</form>
					</div>
				</div>
				<div className="background-green">
					<div className="register-info">
						<h1 className="header">
							<span>Login</span>
						</h1>
						<p className="body">Already have an account?</p>

						<Link className="login-button" href="/login">
							Log In
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
