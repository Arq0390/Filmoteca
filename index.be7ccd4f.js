const e=document.getElementById("movies-list");(async()=>{try{const t=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=66bb0183b61d2b7970e76d40cce7a284&language=en-US&page=1"),n=await t.json();n.results&&n.results.length>0&&n.results.slice(0,20).forEach((t=>{const{title:n,overview:a,release_date:o,poster_path:s}=t,c=document.createElement("div");c.classList.add("movie");const d=document.createElement("h2");d.classList.add("movie__title"),d.textContent=n,c.appendChild(d);const i=document.createElement("img");i.classList.add("movie__poster"),i.src=`https://image.tmdb.org/t/p/w500${s}`,c.appendChild(i);const l=document.createElement("p");l.textContent=a,c.appendChild(l);const r=document.createElement("p");r.textContent=`Lanzamiento: ${o}`,c.appendChild(r),e.appendChild(c)}))}catch(e){console.log("Ha ocurrido un error:",e)}})();
//# sourceMappingURL=index.be7ccd4f.js.map
