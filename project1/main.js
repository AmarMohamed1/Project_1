let header=document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('active',window.scrollY>0);
});

const Home = document.getElementById('Home');
const home = document.getElementById('home');

Home.addEventListener('click', () => {
    home.scrollIntoView({ behavior: 'smooth' });
});

const About = document.getElementById('About');
const about = document.getElementById('about');

About.addEventListener('click', () => {
    about.scrollIntoView({ behavior: 'smooth' });
});




const Shop = document.getElementById('Shop');
const shop = document.getElementById('shop');

Shop.addEventListener('click', () => {
  shop.scrollIntoView({ behavior: 'smooth' });
});


const Customer = document.getElementById('Customer');
const customer = document.getElementById('customer');

Customer.addEventListener('click', () => {
    customer.scrollIntoView({ behavior: 'smooth' });
});


const Contact = document.getElementById('Contact');
const contact = document.getElementById('contact');

Contact.addEventListener('click', () => {
    contact.scrollIntoView({ behavior: 'smooth' });
});