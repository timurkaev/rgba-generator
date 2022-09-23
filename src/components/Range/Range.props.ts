import { DetailedHTMLProps, HTMLAttributes, ReactNode, ChangeEvent } from "react"

export interface RangeProps {
	children: ReactNode
	name: "red" | "green" | "blue" | "alpha"
	step?: number
	min: number
	max: number
	value?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
