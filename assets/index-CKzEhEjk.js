(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const r=document.getElementById("loan-amount--input"),c=document.getElementById("loan-amount--slider"),l=document.getElementById("repayment-input"),y=document.getElementById("repayment-slider"),u=document.getElementById("button"),i=document.getElementById("daily-payment"),p=document.getElementById("total-payment"),f={repayment:{min:"Мінімальний період погашення 7 днів",max:"Максимальний період погашення 60 днів"},"loan-amount":{min:"Мінімальна сума 1000 грн",max:"Максимальна сума 50000 грн"}},g=(e,t)=>{const a=document.getElementById(`error-message__${e}`),s=document.querySelector(`.error-message__${e}`),n=e==="loan-amount"?1e3:7,o=e==="loan-amount"?5e4:60;t<n?(a.style.opacity=1,s.innerText=f[e].min):t>o?(a.style.opacity=1,s.innerText=f[e].max):a.style.opacity=0},E=(e,t,a)=>{e.addEventListener("input",()=>{t.value=+e.value,v(),m()}),e.addEventListener("blur",()=>{g(a,+e.value)}),t.addEventListener("input",()=>{e.value=+t.value,v(),m()}),t.addEventListener("blur",()=>{g(a,+t.value)})};c.value=1e3;y.value=7;const m=()=>{const e=+r.value>=1e3&&+r.value<=5e4;+l.value>=7&&+l.value<=60&&e?u.disabled=!1:u.disabled=!0},v=()=>{const t=+r.value,a=+l.value;t&&a&&(i.value=((t+t*(2.2/100)*a)/a).toFixed(),p.value=(+i.value*+l.value).toFixed())};r.addEventListener("input",()=>{c.value=+r.value,v(),m()});E(r,c,"loan-amount");E(l,y,"repayment");u.addEventListener("click",e=>{e.preventDefault(),l.value="",r.value="",y.value=7,c.value=1e3,i.value="",p.value="",u.disabled=!0});
