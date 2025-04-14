import { useState } from "react";
import QRcode from './Qrcode';
import SizeInfo from './Size-info';

const regExHttp = /^https:\/\/|http:\/\//
const UrlInfo = () => {
  const [useSecure, setUseSecure ] = useState(true);
  const [urlText, setUrlText] = useState("");
  const [qrText, setQrText] = useState("");
  const [size, setSize] = useState(128);
  
  const onChangeUrlText = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setUrlText(e.target.value);
  }
  const changeSize = (i: number) => {
    console.log(`size is ${i}`);
    setSize(i);
  }

  const ensureHttp = (text: string):string => {
    if (text.match(regExHttp)) return text;
    return useSecure ? `https://${text}` : `http://${text}`;
  }
  
  return (
    <div className="info-pane">
      <fieldset>
        <legend>Choose Options</legend>
        <div className="formGroup">
          <label>
            <input type="checkbox" checked={useSecure} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUseSecure(e.target.checked)}/>
            Use HTTPS (try using this checked first, if it doesn't work, try unchecking this box)
          </label>
        </div>
        <div className="formGroup">
          <label htmlFor="urlText">Web address: </label>
          <input id="urlText" type="text" value={urlText} onChange={onChangeUrlText} placeholder="google.com or apple.com"/>
        </div>
        <div className="formGroup">
          <SizeInfo returnSize={changeSize} />
        </div>
        <button onClick={() => setQrText(ensureHttp(urlText))} disabled={!urlText}>Generate QR Code</button>
      </fieldset>
      <QRcode qrText={qrText} size={size}/>
    </div>
  )
}

export default UrlInfo;