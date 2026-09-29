# PRITAIKYK Studio – JPG / PNG / PDF + lokalus AI

Asmeninė, be mokamo API veikianti prototipo versija.

## Veikimas
1. Įkeliamas JPG, PNG arba PDF.
2. PDF tekstas nuskaitomas tiesiogiai; nuotraukoms ir skenuotiems PDF naudojamas Tesseract OCR (lietuvių + anglų kalbos).
3. Atpažintą tekstą galima pataisyti.
4. Pasirenkama „Pritaikyti vaikui“ arba „Diferencijuoti A–D“.
5. WebLLM lokalus modelis generuoja rezultatą naršyklėje.

## Kaina ir privatumas
Nenaudojamas OpenAI API raktas. AI inferencija vyksta vartotojo naršyklėje. Bibliotekos ir modelio failai pirmą kartą atsisiunčiami iš interneto.

## Paleidimas
Įkelkite `index.html` į GitHub Pages projekto šaknį. Rekomenduojama naujausia Chrome arba Edge su WebGPU.

## Ribojimai
Tai lokalus prototipas. OCR gali klysti, ypač su matematine notacija ar prastos kokybės nuotraukomis. 1.5B lokalus modelis yra silpnesnis už didelius debesijos multimodalinius modelius. Sudėtingas vizualines užduotis jis interpretuoja per atpažintą tekstą, o ne pilną vaizdo semantinį supratimą.
