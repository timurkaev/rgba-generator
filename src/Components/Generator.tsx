import React from 'react';
import style from './style.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaCopy } from 'react-icons/fa';

const Generator: React.FC = () => {
  const [red, setRed] = React.useState<string>('0');
  const [green, setGreen] = React.useState<string>('0');
  const [blue, setBlue] = React.useState<string>('0');
  const [alpha, setAlpha] = React.useState<string>('1');

  const [copied, setCopied] = React.useState<boolean>(false);

  const redChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRed(event.target.value);
  };

  const greenChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGreen(event.target.value);
  };

  const blueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlue(event.target.value);
  };

  const alphaChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlpha(event.target.value);
  };

  const handleCopy = () => {
    setCopied(true);
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);
  }, [copied]);

  const rgba = (document.body.style.background = `rgba(${red}, ${green}, ${blue}, ${alpha})`);

  return (
    <div className={style.sliders}>
      <label>Red</label>
      <input type="range" min={0} max={255} value={red} onChange={redChangeHandler} />
      <label>Green</label>
      <input type="range" min={0} max={255} value={green} onChange={greenChangeHandler} />
      <label>Blue</label>
      <input type="range" min={0} max={255} value={blue} onChange={blueChangeHandler} />
      <label>Alpha</label>
      <input
        type="range"
        min={0.1}
        max={1.0}
        step={0.1}
        value={alpha}
        onChange={alphaChangeHandler}
      />
      <div className={style.outputBox}>
        <div className={style.output}>
          rgba({red}, {green}, {blue}, {alpha})
        </div>
        <CopyToClipboard text={`background: ${rgba}`} onCopy={handleCopy}>
          <div className={style.copyBtn}>{copied ? <AiOutlineCheck /> : <FaCopy />}</div>
        </CopyToClipboard>
      </div>
      <ul className={style.contacts}>
        <li>
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
              fill="#7e7e7e"
            />
          </svg>
          <a href="https://github.com/timurkaev/rgba-generator">github.com</a>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Generator;
