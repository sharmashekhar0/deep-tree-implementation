"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUp: React.FC = () => {
	const [username, setUsername] = useState("");

	const handleSignUp = async (e: any) => {
		console.log(`Signing up with username: ${username}`);
		e.preventDefault();
		try {
			const response: any = await fetch(
				"http://localhost:8000/auth/signup",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ username }),
				}
			);
			const res = await response?.json();
			if (res) toast.success("Sign up successful!");
		} catch (error) {
			console.log("Error while signing up :: ", error);
			toast.error("Something went wrong");
		}
	};

	return (
		<div className="w-1/2 h-40 flex flex-col p-8 gap-4">
			<h2 className="text-3xl font-bold">Sign Up.</h2>
			<form onSubmit={handleSignUp} className="flex gap-4">
				<input
					type="text"
					placeholder="Enter username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="h-10 px-4 rounded text-zinc-900 font-medium"
					required
				/>
				<button
					type="submit"
					className="h-10 bg-blue-900 font-medium px-2 rounded"
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUp;
