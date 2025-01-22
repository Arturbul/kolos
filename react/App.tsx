import { useState } from "react";
import { Add } from "./Components/Add";
import { List } from "./Components/List";
import { Person } from "./Model/Person";

type Props = {
	persons: Person[];
	newPerson: (p: Person) => void;
	details: (id: number) => Promise<Person>;
};

function App({ persons, newPerson, details }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const [person, setPerson] = useState(undefined as Person | undefined);
	const close = () => {
		setIsOpen(false);
		setPerson(undefined);
	};
	const open = () => {
		setIsOpen(true);
	};
	const handleAdd = (p: Person) => {
		console.log(p);
		newPerson(p);
		close();
	};

	const handleDetails = async (id: number) => {
		let res = await details(id);
		setPerson(res);
	};

	return (
		<>
			<button onClick={open}>Dodaj</button>
			{isOpen && <Add close={close} handleAdd={handleAdd}></Add>}
			<List persons={persons} handleDetails={handleDetails}></List>
			{person !== undefined && (
				<>
					<hr></hr>
					{person?.id}
					{person?.age}
					{person?.name}
					{person?.normal ? "Yes" : "No"}
					<button onClick={close}>Zamknij</button>
				</>
			)}
		</>
	);
}

export default App;
