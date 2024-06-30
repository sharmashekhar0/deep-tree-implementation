"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/userSlice";

const Login: React.FC = () => {
	const [username, setUsername] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(loginUser(username));
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Enter username"
			/>
			<button type="submit">Login</button>
		</form>
	);
};

export default Login;
