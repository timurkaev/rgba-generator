import React from "react"
import styles from "./Generator.module.css"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { AiOutlineCheck } from "react-icons/ai"
import { FaCopy } from "react-icons/fa"
import { Range } from "../Range/Range"

interface IState {
	red: string
	green: string
	blue: string
	alpha: string
}

export const Generator: React.FC = (): JSX.Element => {
	const [state, setState] = React.useState<IState>({
		red: "0",
		green: "0",
		blue: "0",
		alpha: "1",
	})
	const [copied, setCopied] = React.useState<boolean>(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target
		setState((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleCopy = (): void => {
		setCopied(true)
	}

	React.useEffect(() => {
		setTimeout(() => {
			if (copied) setCopied(false)
		}, 1000)
	}, [copied])

	const rgba: string =
		(document.body.style.background = `rgba(${state.red}, ${state.green}, ${state.blue}, ${state.alpha})`)

	return (
		<div className={styles.sliders}>
			<Range name="red" min={0} max={255} value={state.red} onChange={handleChange}>
				Red
			</Range>
			<Range name="green" min={0} max={255} value={state.green} onChange={handleChange}>
				Green
			</Range>
			<Range name="blue" min={0} max={255} value={state.blue} onChange={handleChange}>
				Green
			</Range>
			<Range
				name="alpha"
				step={0.1}
				min={0.1}
				max={1.0}
				value={state.alpha}
				onChange={handleChange}>
				Green
			</Range>
			<div className={styles.outputBox}>
				<div className={styles.output}>
					rgba({state.red}, {state.green}, {state.blue}, {state.alpha})
				</div>
				<CopyToClipboard text={`background: ${rgba}`} onCopy={handleCopy}>
					<div className={styles.copyBtn}>{copied ? <AiOutlineCheck /> : <FaCopy />}</div>
				</CopyToClipboard>
			</div>
			<ul className={styles.contacts}>
				<li>
					<svg
						width="20"
						height="20"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
							fill="#7e7e7e"
						/>
					</svg>
					<a href="https://github.com/timurkaev/rgba-generator">github.com</a>
				</li>
			</ul>
		</div>
	)
}