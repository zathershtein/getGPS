import GPS from 'gps';
import SerialPort from 'serialport';

const port = new SerialPort('/dev/ttyUSB0', {
  baudRate: 4800
});
const gps = new GPS;

gps.on('data', (data) => console.log(data, gps.state));
port.on('data', (data) => gps.updatePartial(data));
