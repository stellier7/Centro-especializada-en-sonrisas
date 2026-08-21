# Centro Especializado en Sonrisas — Image Assets

Drop client media here and update paths in `js/config.js`.

## Required before go-live

| File | Config key | Notes |
| --- | --- | --- |
| `logo.png` (or `.svg`) | `branding.logoUrl` | Clinic logo — transparent PNG/SVG recommended |
| `hero.jpg` | `branding.heroImageUrl` | Full-bleed hero background, landscape, min ~1600×900 px |

## Optional (section hidden until added)

| File | Config key | Notes |
| --- | --- | --- |
| `doctors/doctor-name.jpg` | `dentists[].photoUrl` | One photo per doctor; add entries to `dentists[]` in config |
| `gallery/smile-01.jpg` … | `gallery[]` | Before/after or clinic photos |
| `financing/bac.jpg` | `financingImages[0].src` | BAC bank logo |
| `financing/ficohsa.jpg` | `financingImages[1].src` | Ficohsa bank logo |

## Current placeholders

The site uses template demo images until you replace them:
- Hero: `assets/images/hero.jpg` (template default)
- Financing: `assets/images/financing/financing-01.svg` and `financing-02.svg`
