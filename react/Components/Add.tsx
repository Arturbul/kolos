import { ChangeEvent, FormEvent, useState } from "react";
import { Person } from "../Model/Person";

type AddPersonState = {
	name: string;
	age: string;
	normal: string;
};
type Props = {
	close: () => void;
	handleAdd: (p: Person) => void;
};
export const Add = ({ close, handleAdd }: Props) => {
	let [person, setPerson] = useState({
		name: "",
		age: "",
		normal: "yes",
	} as AddPersonState);
	const submit = (e: FormEvent) => {
		e.preventDefault();
		let age = parseInt(person.age);
		let normal = person.normal === "yes" ? true : false;
		handleAdd(new Person(0, person.name, age, normal));
	};
	const change = (e: ChangeEvent<HTMLInputElement>) => {
		let { name, value } = e.target;
		let p: AddPersonState = { ...person, [name]: value };
		setPerson(p);
	};
	const select = (e: ChangeEvent<HTMLSelectElement>) => {
		let newState: AddPersonState = { ...person, normal: e.target.value };
		setPerson(newState);
	};

	return (
		<form onSubmit={submit}>
			<input onChange={change} placeholder="name" name="name" />
			<input onChange={change} placeholder="age" name="age" />

			<label htmlFor="normal"></label>
			<select name="normal" onChange={select}>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>

			<button type="submit">Zatwierdz</button>
			<button onClick={close}>Zamknij</button>
		</form>
	);
};
