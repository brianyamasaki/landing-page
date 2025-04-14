import './Qrcode.scss';
import { QRCodeSVG } from 'qrcode.react';

type Props = {
  qrText: string;
  size?: number;
}

const QRcode = ({qrText, size}: Props) => {

  const renderCode = () => {
    if (!qrText) return <div />;
  
    return (
      <div className="quiet-area">
        {qrText ? <QRCodeSVG value={qrText} size={size || 128}/> : <span />}
        <p>
          This QR code represents the text string <span>{qrText}</span>
        </p>
      </div>
    );
  }
  
  return renderCode();
}

export default QRcode;