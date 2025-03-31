import { useState } from "react";
import './Qrcode.scss';
import { QRCodeSVG } from 'qrcode.react';

type Props = {
  qrText: string;
}

const QRcode = ({qrText}: Props) => {
  
  return (
    <div className="quiet-area">
      {qrText ? <QRCodeSVG value={qrText} /> : <span />}
    </div>
  )
}
export default QRcode;