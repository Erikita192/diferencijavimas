# PRITAIKYK Studio
Asmeninis AI įrankis mokomosioms užduotims diferencijuoti ir pritaikyti.

## Svarbu
Tai nėra vien GitHub Pages projektas: `/api/transform.js` yra serverio funkcija. Paprasčiausias paleidimas – importuoti šį GitHub repository į Vercel ir Vercel projekto Environment Variables pridėti `OPENAI_API_KEY`.

NIEKADA nerašyk API rakto į `index.html`, `transform.js` ar kitą GitHub failą.

## Failai
- `index.html` – asmeninė sąsaja
- `api/transform.js` – saugi AI serverio funkcija
- `package.json` – projekto nustatymas

## Dabartinės funkcijos
- įklijuojamas užduoties tekstas / TXT
- klasė ir dalykas
- AI diferencijavimas A–D
- AI pritaikymas pagal pasirinktus poreikius
- rezultato redagavimas, kopijavimas, spausdinimas/PDF

PDF/DOCX ir vaizdo nuskaitymas sąmoningai paliktas kitam etapui – pirmiausia tikriname AI transformacijos kokybę.
