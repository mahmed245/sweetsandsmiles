const filters=document.querySelectorAll('[data-filter]');
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button))});document.querySelectorAll('[data-category]').forEach(item=>item.hidden=button.dataset.filter!=='all'&&item.dataset.category!==button.dataset.filter)}));
const modal=document.querySelector('dialog');
document.querySelectorAll('.photo-button').forEach(button=>button.addEventListener('click',()=>{const image=button.querySelector('img');document.querySelector('#large-photo').src=image.src;document.querySelector('#large-photo').alt=image.alt;document.querySelector('#photo-title').textContent=button.dataset.title;modal.showModal()}));
document.querySelector('.close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close()}});
