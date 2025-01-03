// The CSS content to type out
const codeContent = `My name is Bilal. 
I am a backend developer with expertise in building and maintaining server-side applications. 
I specialize in designing scalable systems and working with technologies such as Python, Node.js, and MySQL.
Feel free to reach out to discuss potential opportunities or collaborations!`;

const codeElement = document.getElementById("code");
let index = 0;

function typeCode() {
  if (index < codeContent.length) {
    codeElement.textContent += codeContent[index];
    index++;
    setTimeout(typeCode, 20);
  } else {
    showLinks();
  }
}

function showLinks() {
  const linksContainer = document.createElement('div');
  linksContainer.innerHTML = `
    <a href="https://github.com/mr-xo/mr-xo.github.io" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/meisara-salem-75b925344/" target="_blank">LinkedIn</a>
    <a href="https://www.reddit.com/user/Past-Song2493/" target="_blank">Reddit</a>
  `;

  linksContainer.style.marginTop = '20px';
  linksContainer.style.opacity = '0'; 
  linksContainer.style.transition = 'opacity 1s ease-in-out';

  
  const links = linksContainer.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = '#41c16c'; 
    link.style.textDecoration = 'none';
    link.style.fontWeight = 'bold'; 
    link.style.marginRight = '5px';
  });

  document.body.appendChild(linksContainer);

  
  setTimeout(() => {
    linksContainer.style.opacity = '1';
  }, 500);
}

document.addEventListener('contextmenu', event => event.preventDefault());

const elements = document.querySelectorAll('.no-select');

elements.forEach(element => {
  element.addEventListener('contextmenu', event => event.preventDefault());
  element.addEventListener('mousedown', event => event.preventDefault());
  element.addEventListener('selectstart', event => event.preventDefault());
});

document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
      event.preventDefault();
    }
  });

window.onload = typeCode;
