import { useState } from "react";
import QRcode from './Qrcode';

const GeoInfo = () => {
  const [lat, setLat] = useState(47.60747470198598);
  const [lng, setLng] = useState(-122.19037949812797);
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
        <legend>Choose Options</legend>
        <div>
          <label htmlFor="name">Latitude: </label>
          <input id="name" type="number" value={lat} onChange={onChangeLat} placeholder="Email"/>
        </div>
        <div>
          <label htmlFor="subject">Longitude: </label>
          <input id="subject" type="number" value={lng} onChange={onChangeLng} placeholder=""/>
        </div>
        <button onClick={() => setQrText(createWifiString())} disabled={!lat || !lng}>Generate QR Code</button>
      </fieldset>
      <QRcode qrText={qrText} />
    </div>
  )
}

export default GeoInfo;