import React from 'react';
import style from './style.module.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaCopy } from 'react-icons/fa';

const Generator: React.FC = () => {
  const [red, setRed] = React.useState<string>('255');
  const [green, setGreen] = React.useState<string>('255');
  const [blue, setBlue] = React.useState<string>('255');
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
    </div>
  );
};

export default Generator;
