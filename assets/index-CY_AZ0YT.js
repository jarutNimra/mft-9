import"https://cdn.jsdelivr.net/npm/swiper@12/swiper-element-bundle.min.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function i(){let o="";try{o=(await(await fetch("http://localhost:5173/db.json")).json()).menu.map(t=>t.dropdown.length>0?`<li>
                <details>
                  <summary class='capitalize font-bold text-[12px]'>${t.value}</summary>
                  <ul class="p-2 bg-base-100 w-40 z-100">
                    ${t.dropdown.map(e=>`<li><a href='${e.https}'>${e.value}</a></li>`).join(" ")}
                  </ul>
                </details>
              </li>`:`<li><a class='capitalize font-bold text-[12px]' href='${t.href}'>${t.value}</a></li>`),document.querySelector(".menu").innerHTML=o.join(" ")}catch(r){console.log(r.message)}}async function l(){let o="";try{o=(await(await fetch("http://localhost:5173/db.json")).json()).slider.map(t=>`<swiper-slide><img src='${t.image}' /></swiper-slide>`),document.querySelector(".mySwiper").innerHTML=o.join(" ")}catch(r){console.log(r.message)}}async function c(){let o="";try{o=(await(await fetch("http://localhost:5173/db.json")).json()).posts.map(t=>`<div class="card w-96 bg-base-100 card-xs shadow-sm">
          <div class="card-body">
            <h2 class="card-title">${t.title}</h2>
            <p>
            ${t.body} 
            </p>
            <div class="justify-end card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>`),document.querySelector(".posts").innerHTML=o.join(" ")}catch(r){console.log(r.message)}}i();l();c();
