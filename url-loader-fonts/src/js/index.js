import '../css/styles.css';
import { firstMessage, delayedMessage } from './message.js';
import platziImg from '../images/platzi.jpg';

document.write(firstMessage);
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);

console.log('Hola mundo desde un módulo');
