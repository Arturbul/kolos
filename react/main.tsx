import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Data } from "./Components/Data.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Data></Data>
	</StrictMode>
);
