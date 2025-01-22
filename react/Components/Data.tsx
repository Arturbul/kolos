import { useEffect, useState } from "react";
import App from "../App";
import { Person } from "../Model/Person";

export const Data = () => {
	let _persons: Person[] = [];
	const [persons, setPersons] = useState(_persons);

	const fetchData = async () => {
		let res = await fetch("http://localhost:5186/api/Persons");
		let data = (await res.json()) as Person[];
		setPersons(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const addPerson = async (p: Person) => {
		let req: RequestInit = {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(p),
		};
		let res = await fetch("http://localhost:5186/api/Persons", req);
		if (res.ok) {
			await fetchData();
		}
	};

	const detailsPerson = async (id: number): Promise<Person> => {
		let res = await fetch("http://localhost:5186/api/Persons" + `/${id}`);
		let data = (await res.json()) as Person;
		return data;
	};

	return (
		<App persons={persons} newPerson={addPerson} details={detailsPerson}></App>
	);
};
