export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { text, mode, grade, subject, adaptations = [] } = req.body || {};
  if (!text?.trim()) return res.status(400).json({ error: 'Trūksta užduoties teksto.' });
  const key = process.env.OPENAI_API_KEY;
  if (!key) return res.status(500).json({ error: 'Serverio aplinkoje nenustatytas OPENAI_API_KEY.' });

  const task = mode === 'adapt'
    ? `Pritaikyk pateiktą užduotį mokiniui pagal šiuos poreikius: ${adaptations.join(', ') || 'aiškesnis ir prieinamesnis pateikimas'}. Išlaikyk tą patį mokymosi tikslą ir teisingą dalykinį turinį. Grąžink vieną paruoštą mokiniui užduoties versiją.`
    : `Sukurk keturias tos pačios užduoties versijas tam pačiam mokymosi tikslui: A – su daugiau pagalbos, B – bazinė klasės lygio, C – sudėtingesnė, D – iššūkis. Keisk ne tik instrukcijos žodžius, bet ir pagalbos, žingsnių, mąstymo bei savarankiškumo lygį.`;

  const prompt = `Tu esi Lietuvos pradinių klasių ir priešmokyklinio ugdymo užduočių adaptavimo specialistas.\nKlasė: ${grade}. Dalykas: ${subject}.\n${task}\n\nORIGINALI UŽDUOTIS:\n${text}\n\nSvarbu: nerašyk bendrų metodinių komentarų. Rašyk tik realiai mokiniui pateikiamą turinį. Naudok taisyklingą lietuvių kalbą. Jei originale yra skaičiai, faktai ar atsakymai, jų neiškraipyk. Formatą padaryk aiškų.`;

  try {
    const r = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
      body: JSON.stringify({ model: 'gpt-6-luna', input: prompt, max_output_tokens: 2600 })
    });
    const data = await r.json();
    if (!r.ok) return res.status(r.status).json({ error: data?.error?.message || 'AI užklausa nepavyko.' });
    const output = data.output_text || (data.output || []).flatMap(x => x.content || []).map(x => x.text || '').join('\n').trim();
    return res.status(200).json({ output });
  } catch (e) {
    return res.status(500).json({ error: 'Nepavyko susisiekti su AI paslauga.' });
  }
}
