// SET YOUR REAL BUSINESS EMAIL BELOW BEFORE PUBLISHING.
const BUSINESS_EMAIL = 'YOUR_EMAIL@example.com';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if(toggle && nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
const year = document.querySelector('#year'); if(year) year.textContent = new Date().getFullYear();
const links = document.querySelectorAll('.nav a'); const path = location.pathname.split('/').pop() || 'index.html';
links.forEach(a=>{if(a.getAttribute('href')===path || (['nylon.html','metal.html','plastic.html','invisible.html','waterproof.html'].includes(path)&&a.getAttribute('href')==='collections.html')) a.setAttribute('aria-current','page');});
const names = {nylon:'Nylon Zippers',metal:'Metal Zippers',plastic:'Plastic / Vislon Zippers',invisible:'Invisible Zippers',waterproof:'Waterproof Zippers'};
const select = document.querySelector('#product-select'); if(select){const product=new URLSearchParams(location.search).get('product');if(product&&names[product])select.value=names[product];}
const form=document.querySelector('#enquiry-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();const status=document.querySelector('#form-status');if(BUSINESS_EMAIL==='YOUR_EMAIL@example.com'){status.textContent='Website owner: set your business email in script.js before this form can prepare enquiries.';return;}const data=new FormData(form);const subject='Indian Zipp House enquiry: '+data.get('product');const body=['Name: '+data.get('name'),'Company: '+data.get('company'),'Email: '+data.get('email'),'Phone: '+data.get('phone'),'Collection: '+data.get('product'),'','Requirements:',data.get('message')].join('\n');location.href='mailto:'+BUSINESS_EMAIL+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);status.textContent='Your email app should open with a prepared enquiry. Please press Send in your email app to submit it.';});}
