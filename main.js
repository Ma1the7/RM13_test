const $=(s,r=document)=>[...r.querySelectorAll(s)],root=document.documentElement;
// 1. Разбивка заголовков на слова/буквы
$('.split').forEach(el=>{let i=0;const ch=el.hasAttribute('data-chars'),t=el.textContent.trim();el.setAttribute('aria-label',t);
el.innerHTML=t.split(' ').map(w=>`<span class="w" aria-hidden="true">${(ch?[...w]:[w]).map(x=>`<span class="c" style="--i:${i++}">${x}</span>`).join('')}</span>`).join(' ')});
// 2. Бегущая строка
$('.mq div').forEach(d=>d.innerHTML+=d.innerHTML+d.innerHTML+d.innerHTML);
// 3. Счётчики
const count=el=>{const to=+el.dataset.count,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1800,1);el.textContent=Math.round(to*(1-Math.pow(1-p,4)));p<1&&requestAnimationFrame(f)})(t0)};
// 4. Появление при скролле
const io=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;const e=x.target;
e.style.setProperty('--d',e.dataset.d||0);e.classList.add('in');e.dataset.count&&count(e);io.unobserve(e)}),{threshold:.2});
// 5. Загрузчик
const L=$('.loader')[0],n=$('.loader b')[0];let k=0;
const tm=setInterval(()=>{k=Math.min(100,k+Math.ceil(Math.random()*9));n.textContent=k;if(k==100){clearInterval(tm);setTimeout(()=>{L.classList.add('done');$('.split,[data-r],.ph,[data-count]').forEach(e=>io.observe(e))},350)}},40);
// 6. Курсор, магнитные кнопки, наклон карточек, скремблер меню
const cu=$('.cursor')[0];let mx=0,my=0,cx=0,cy=0;
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY});
$('a,button,.tilt,.rows li').forEach(e=>{e.addEventListener('pointerenter',()=>cu.classList.add('big'));e.addEventListener('pointerleave',()=>cu.classList.remove('big'))});
$('.mag').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.35}px,${(e.clientY-r.top-r.height/2)*.45}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
$('.tilt').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateY(${x*9}deg) rotateX(${-y*9}deg) scale(1.02)`});c.addEventListener('pointerleave',()=>c.style.transform='')});
$('nav a').forEach(a=>{const t=a.textContent;a.addEventListener('pointerenter',()=>{let i=0;const f=setInterval(()=>{a.textContent=[...t].map((c,j)=>j<i?c:'АБВГДЕЖЗИКЛМ#%&'[Math.random()*15|0]).join('');if(++i>t.length){a.textContent=t;clearInterval(f)}},35)})});
// 7. Главный цикл: плавный параллакс, скос от скорости скролла, расходящиеся буквы hero, прячущаяся шапка
const P=$('[data-p]'),H=$('header')[0];let sy=0,last=0;
(function raf(){const d=scrollY-sy;sy+=d*.09;
root.style.setProperty('--sk',Math.max(-5,Math.min(5,d*.025)).toFixed(2));root.style.setProperty('--sy',sy.toFixed(1));
P.forEach(e=>{const r=e.getBoundingClientRect();e.style.setProperty('--py',((r.top+r.height/2-innerHeight/2)*-e.dataset.p).toFixed(1)+'px')});
cx+=(mx-cx)*.18;cy+=(my-cy)*.18;cu.style.transform=`translate(${cx}px,${cy}px)`;
H.classList.toggle('hide',scrollY>last&&scrollY>200);last=scrollY;
requestAnimationFrame(raf)})();
