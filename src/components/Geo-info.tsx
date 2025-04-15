import { useState } from "react";
import QRcode from './Qrcode';
import SizeInfo from "./Size-info";

const GeoInfo = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [size, setSize] = useState(128);
  const [qrText, setQrText] = useState("");
  
  const onChangeLat = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setLat(parseFloat(e.target.value));
  }
  const onChangeLng = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setLng(parseFloat(e.target.value));
  }

  const createWifiString = () => (`geo:${lat},${lng}`)
  
  return (
    <div className="info-pane">
      <fieldset>
        <legend>Enter Latitude and Longitude in Degrees</legend>
        <div className="formGroup">
          <label htmlFor="name">Latitude: </label>
          <input id="name" type="number" value={lat} onChange={onChangeLat} placeholder="Latitude"/>
        </div>
        <div className="formGroup">
          <label htmlFor="subject">Longitude: </label>
          <input id="subject" type="number" value={lng} onChange={onChangeLng} placeholder="Longitude"/>
        </div>
        <button onClick={() => setQrText(createWifiString())} disabled={!lat || !lng}>Generate QR Code</button>
        <SizeInfo returnSize={setSize} />
      </fieldset>
      <QRcode qrText={qrText} size={size} />
    </div>
  )
}

export default GeoInfo;