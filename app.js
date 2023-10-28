const canvas = document.getElementById('myCanvas');

const cinit = canvas.getContext('2d');

const fontSize = 20;

const fontFamily = 'serif';

const fontColor = 'orange';

cinit.font = `${fontSize}px ${fontFamily}`;

cinit.fillStyle = fontColor;

cinit.textAlign = 'center';

cinit.textBaseline = 'middle';

cinit.fillText('Z', canvas.width / 2, canvas.height / 2);

const downloadLink = document.getElementById('downloadLink');

downloadLink.addEventListener('click', () => {

const canvasInfo = cinit.getImageData(0, 0, canvas.width, canvas.height).data;

let hexData = '';

for (let i = 0; i < canvasInfo.length; i += 4) {

const red = canvasInfo[i].toString(16).padStart(2, '0');

const green = canvasInfo[i + 1].toString(16).padStart(2, '0');

const blue = canvasInfo[i + 2].toString(16).padStart(2, '0');

const alpha = canvasInfo[i + 3].toString(16).padStart(2, '0');

hexData += '0x' + red + green + blue + alpha + ', ';

if ((i + 4) % (4 * canvas.width) === 0) {

hexData += '\n';

}

}

const blob = new Blob([hexData], { type: 'text/plain' });

const url = URL.createObjectURL(blob);

downloadLink.href = url;

});