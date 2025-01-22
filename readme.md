# Set up

BE:

```jsx
builder.Services.AddDbContext <
	AppDbContext >
	((o) => o.UseSqlServer(builder.Configuration.GetConnectionString("default")));
builder.Services.AddCors((opt) => {
	opt.AddPolicy("AllowAllOrigins", (builder) => {
		builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
	});
});

var app = builder.Build();
app.UseCors("AllowAllOrigins");
```

REACT:

```jsx
npm create vite
npm i
npm run dev
```

ANGULAR:

```jsx
npm install -g @angular/cli
```

```jsx
ng new Ang1 --minimal=true --standalone=false
```

```jsx
"@schematics/angular:component": {
					"inlineTemplate": false,
					"inlineStyle": false,
					"skipTests": true,
					"standalone": false
				},
```

```jsx
ng serve --open
```

```jsx
ng g [moduł] [nazwa]
- c
- class
- service
```

```jsx
export class PersonService {
	private _persons: BehaviorSubject<Person[]>;
	persons: Observable<Person[]>;
	private _data: Person[] = [];
	constructor(private client: HttpClient) {
		this._persons = new BehaviorSubject(this._data);
		this.persons = this._persons.asObservable();
	}

	load() {
		this.client.get<Person[]>("http://localhost:5186/api/Persons").subscribe({
			next: (res) => {
				this._persons.next(res);
			},
		});
	}

	get(id: number): Observable<Person> {
		return this.client.get<Person>(
			"http://localhost:5186/api/Persons" + `/${id}`
		);
	}

	create(person: Person): void {
		this.client
			.post<Person>("http://localhost:5186/api/Persons", person)
			.subscribe({ next: () => this.load() });
	}
}
```

# React

```jsx
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
```

```jsx
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
```
