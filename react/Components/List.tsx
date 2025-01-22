import { Person } from "../Model/Person";

type Props = {
	persons: Person[];
	handleDetails: (id: number) => void;
};
export const List = ({ persons, handleDetails }: Props) => {
	return (
		<>
			<table>
				<thead>
					<th>id</th>
					<th>name</th>
					<th>age</th>
					<th>normal</th>
					<th>actions</th>
				</thead>
				<tbody>
					{persons.map((person) => (
						<tr>
							<td>{person.id}</td>
							<td>{person.name}</td>
							<td>{person.age}</td>
							<td>{person.normal ? "Yes" : "No"}</td>
							<td>
								<button onClick={() => handleDetails(person.id)}>
									Details
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};
