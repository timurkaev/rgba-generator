import React from "react"
import { Generator } from "./components/Generator/Generator"

export const App: React.FC = (): JSX.Element => {
	return (
		<div className="container">
			<Generator />
		</div>
	)
}
