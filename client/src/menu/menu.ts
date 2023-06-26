import { json } from "express";
import { states } from "../states/states";
import { clear, print, printNewLine, prompt } from "../ui/console";

export async function showMenu() {
	clear(json);
	print("0. Send Server Message", false);
	print("1. Show all posts", false);
	print("2. Show all users", false);
	print("3. Browse posts", false);
	print("4. Add user", false);
	printNewLine();

	const result = await prompt("What shall we do? ");

	switch (result) {
		case "0":
			return states.SEND_MESSAGE;
		case "1":
			return states.SHOW_POSTS;
		case "2":
			return states.SHOW_USERS;
		case "3":
			return states.BROWSE_POSTS;
		case "4":
			return states.ADD_USER;
		default:
			return states.UNKNOWN;
	}
}
