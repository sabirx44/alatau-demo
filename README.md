# Alatau Smile (demo)

Dental clinic demo for Esanov: a fictional clinic in Almaty.

- Five languages with their own URLs: Russian `/`, Uzbek `/uz/`, Kazakh `/kk/`, English `/en/`, Arabic `/ar/` (right-to-left)
- Hero "dentist's mirror": a round lens that follows the cursor (or drifts on its own) and shows the smile after whitening inside the lens
- Service cards with photos and prices, doctor cards with next free slot and languages spoken
- Tappable tooth chart (FDI numbering, mirror view) that feeds the booking form
- Booking ends in an appointment card with a QR code, saved as an image or added to the calendar

Identity: snow and glacier surfaces, deep navy ink, coral as the only action color, the Alatau ridge line, Rubik for every script.

Photos go in `src/assets/img/` (prompt list: studio repo `scripts/jobs/dental.json`). Native-speaker check needed for Uzbek, Kazakh and Arabic.

```bash
npm install
npm run dev
node scripts/shoot.mjs http://localhost:4350/ ru
```
