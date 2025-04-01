import { useState } from "react";
import './Qrcode.scss';
import { QRCodeSVG } from 'qrcode.react';

type Props = {
  qrText: string;
}

const QRcode = ({qrText}: Props) => {

  const renderCode = () => {
    if (!qrText) return <div />;
    return (
      <div className="quiet-area">
        {qrText ? <QRCodeSVG value={qrText} /> : <span />}
        <p>
          This QR code represents the text string <span>{qrText}</span>
        </p>
      </div>
    );
  }
  
  return renderCode();
}
export default QRcode;