function displayMessage(message) {
const body = document.body;
const panel = document.createElement('div');
panel.setAttribute('class','msgBox');
body.appendChild(panel);

const msg = document.createElement('p');
msg.textContent = message;
panel.appendChild(msg);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);

closeBtn.addEventListener('click', () => panel.parentNode.removeChild(panel));

}

  var changeFontStyle = function (font,id) {
            document.getElementById(
                id).style.fontFamily
                        = font.value;
        }
