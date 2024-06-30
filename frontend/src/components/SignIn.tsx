"use client";

import React, { useState } from "react";
import { loginUser } from "@/store/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const SignIn: React.FC = () => {
	const [username, setUsername] = useState("");
	const dispatch = useDispatch();

	const handleSignIn = async (e: any) => {
		e.preventDefault();
		console.log(`Signing in with username: ${username}`);
		try {
			const response = await fetch("http://localhost:8000/auth/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username }),
			});
			const res = await response?.json();
			console.log("Response JSON: ", res);
			if (res?.user?._id) {
				dispatch(loginUser(username));
				toast.success("Sign in successful!");
			}
		} catch (error) {
			console.log("Error while signing in :: ", error);
			toast.error("Something went wrong");
		}
	};

	return (
		<div className=" w-1/2 h-40 flex flex-col p-8 gap-4">
			<h2 className="text-3xl font-bold">Sign In.</h2>
			<form onSubmit={handleSignIn} className="flex gap-4">
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
					Sign In
				</button>
			</form>
		</div>
	);
};

export default SignIn;
