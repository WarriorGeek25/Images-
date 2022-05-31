// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var img = new Image(); // Create new img element
img.src =
  'https://th.bing.com/th/id/OIP.9-J5fZtdu1OS-VqHR0BYzAHaL2?pid=ImgDet&rs=1'; // Set source path
ctx.drawImage(img, 5, 5);
