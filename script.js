let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-menu'); 
    menuIcon.classList.toggle('bx-x');    
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    let selections = document.querySelectorAll('section');
    let top = window.scrollY;

    selections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
const canvas = document.getElementById('logoCanvas');
const ctx = canvas.getContext('2d');
const gradient = ctx.createRadialGradient(150, 150, 50, 150, 150, 100);
gradient.addColorStop(0, '#00ffee');
gradient.addColorStop(1, '#080808');
ctx.fillStyle = gradient;
ctx.beginPath();
ctx.arc(150, 150, 100, 0, Math.PI * 2);
ctx.fill();
ctx.shadowColor = '#000';
ctx.shadowBlur = 15;
ctx.fillStyle = '#080808';
ctx.beginPath();
ctx.arc(150, 150, 70, 0, Math.PI * 2);
ctx.fill();
ctx.shadowColor = 'transparent'; 
ctx.fillStyle = '#00ffee';
ctx.font = 'bold 24px sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
ctx.shadowBlur = 5;
ctx.fillText('DAWA', 150, 150);
ctx.shadowColor = 'transparent'; 
document.querySelector('.contact form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstName = this[0].value.trim();
    const middleName = this[1].value.trim();
    const lastName = this[2].value.trim();
    const phoneNumber = this[3].value.trim();
    const email = this[4].value.trim();
    const message = this[5].value.trim();

    // Validation checks
    if (!firstName || !lastName || !phoneNumber || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }
    const emailPattern = /^[a-zA-Z0-9@%.\/]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    const phonePattern = /^\+\d{1,3}\s\d{1,14}$/; 
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid phone number with country code.");
        return;
    }
    this.submit();
});