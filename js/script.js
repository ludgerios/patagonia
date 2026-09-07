const nav=document.getElementById('nav');
const form=document.getElementById('contactForm');
const feedback=document.getElementById('formFeedback');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>60),{passive:true});
form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}feedback.textContent='Consulta registrada no projeto. Este formulário é demonstrativo e não envia dados para um servidor.';form.reset();});
