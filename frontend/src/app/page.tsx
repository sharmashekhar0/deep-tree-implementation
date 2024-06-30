"use client";

import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import Tree from "@/components/Tree";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
	const username = useSelector((state: any) => state?.user?.username);
	console.log(username);
	return (
		<div className="bg-zinc-950 h-screen text-white">
			<ToastContainer />
			<div className="flex">
				<SignIn />
				<SignUp />
			</div>
			{username && (
				<div className="border-b py-2 mx-8">
					<span className="text-2xl font-bold">
						Logged In Username ::{" "}
					</span>
					<span className="text-2xl font-semibold text-yellow-200">
						{username}
					</span>
				</div>
			)}
			{username && <Tree />}
		</div>
	);
}
