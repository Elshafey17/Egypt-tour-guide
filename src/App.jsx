import React, { useState, useEffect } from "react";
/* TourEgypt single-file React app (adapted for Vite) */
const DATA = [
  {
    id: "cairo",
    name: { ar: "القاهرة", en: "Cairo", fr: "Le Caire" },
    places: [
      { name: { ar: "أهرامات الجيزة", en: "Giza Pyramids", fr: "Pyramides de Gizeh" },
        desc: { ar: "أشهر معلم أثري في مصر — هرم خوفو.", en: "Egypt's most famous ancient site — the Great Pyramid of Khufu at Giza.", fr: "Le site antique le plus célèbre d'Égypte — la grande pyramide de Khéops à Gizeh." },
        imgQuery: "giza pyramids", mapsQuery: "Giza Pyramids" },
      { name: { ar: "المتحف المصري", en: "Egyptian Museum", fr: "Musée égyptien" },
        desc: { ar: "يضم آلاف القطع الأثرية.", en: "Houses thousands of artifacts.", fr: "Abrite des milliers d'artefacts." }, imgQuery: "egyptian museum cairo", mapsQuery: "Egyptian Museum Cairo" },
      { name: { ar: "خان الخليلي", en: "Khan el-Khalili", fr: "Khan el-Khalili" },
        desc: { ar: "سوق تاريخي في قلب القاهرة.", en: "Historic bazaar in old Cairo.", fr: "Un bazar historique au cœur du vieux Caire." }, imgQuery: "khan el khalili", mapsQuery: "Khan el-Khalili" },
      { name: { ar: "المسجد الأزهر", en: "Al-Azhar Mosque", fr: "Mosquée Al-Azhar" },
        desc: { ar: "واحد من أقدم مراكز العلم الإسلامي.", en: "One of the oldest centers of Islamic learning.", fr: "Un des plus anciens centres de savoir islamique." }, imgQuery: "al azhar mosque", mapsQuery: "Al-Azhar Mosque Cairo" },
      { name: { ar: "برج القاهرة", en: "Cairo Tower", fr: "Tour du Caire" },
        desc: { ar: "برج مراقبة يقدم منظر بانورامي على القاهرة.", en: "Observation tower with panoramic views of Cairo.", fr: "Tour d'observation offrant une vue panoramique sur Le Caire." }, imgQuery: "cairo tower", mapsQuery: "Cairo Tower" }
    ]
  }
];
const LANGS = [
  { code: "ar", label: "العربية" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" }
];
function translate(obj, lang) {
  if (!obj) return "";
  return obj[lang] || obj.en || Object.values(obj)[0];
}
export default function App(){
  const [lang, setLang] = useState("ar");
  const [favorites, setFavorites] = useState([]);
  useEffect(()=> {
    const fav = JSON.parse(localStorage.getItem("te_favs")||"[]");
    setFavorites(fav);
  },[]);
  useEffect(()=> localStorage.setItem("te_favs", JSON.stringify(favorites)), [favorites]);
  const toggleFav = (govId, placeName) => {
    const key = `${govId}::${placeName}`;
    setFavorites(prev => prev.includes(key) ? prev.filter(p=>p!==key) : [...prev, key]);
  };
  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>سياحة في مصر</h1>
          <p style={{color:'#6b7280'}}>اكتشف محافظات وأماكن سياحية مع صور وروابط خرائط.</p>
        </div>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <select className="select" value={lang} onChange={e=>setLang(e.target.value)}>
            {LANGS.map(l=> <option key={l.code} value={l.code}>{l.label}</option>)}
          </select>
        </div>
      </header>
      <main>
        <div style={{marginTop:12}} className="grid">
          {DATA.map(g=>(
            <div key={g.id} className="card">
              <h3>{translate(g.name,lang)}</h3>
              <div style={{marginTop:8}}>
                {g.places.map((p,idx)=>(
                  <div key={idx} style={{marginBottom:10}}>
                    <div className="thumb">
                      <img src={`https://source.unsplash.com/800x600/?${encodeURIComponent(p.imgQuery)}`} alt={translate(p.name,lang)} />
                    </div>
                    <div style={{marginTop:6}}>
                      <strong>{translate(p.name,lang)}</strong>
                      <p style={{margin:4,color:'#6b7280'}}>{translate(p.desc,lang)}</p>
                      <div style={{display:'flex',gap:8}}>
                        <a className="btn" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.mapsQuery)}`}>خرائط</a>
                        <button className="btn" onClick={()=>toggleFav(g.id, translate(p.name,'en'))}>
                          {favorites.includes(`${g.id}::${translate(p.name,'en')}`) ? "مُحَبب" : "حفظ"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">Made by : Yaseen Elshafey</footer>
    </div>
  );
}
