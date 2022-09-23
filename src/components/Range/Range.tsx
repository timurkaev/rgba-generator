import React from "react"
import { RangeProps } from "./Range.props"

export const Range: React.FC<RangeProps> = ({
	children,
	name,
	step,
	min,
	max,
	value,
	onChange,
}): JSX.Element => {
	return (
		<>
			<label>{children}</label>
			<input
				type="range"
				name={name}
				step={step}
				min={min}
				max={max}
				value={value}
				onChange={onChange}
			/>
		</>
	)
}
