# LMM PDP Golden Template

This is the **permanent golden template** for Little Miss Mineral product detail pages (PDPs).  
Every new product is launched by cloning this repo — never from a previous product.

## Architecture

```
src/
  config.ts       ← ALL dynamic content lives here as {{PLACEHOLDER}} tokens
  pages/
    Index.tsx     ← Imports from config.ts, zero hardcoded product strings
  components/     ← UI components (no product strings)
```

## The Injection Workflow

### Step 1: Clone this template for a new product
```bash
git clone git@github.com:samthestrategist/lmm-pdp-golden-template.git lmm-{product-slug}-pdp
cd lmm-{product-slug}-pdp
git remote set-url origin git@github.com:samthestrategist/lmm-{product-slug}-pdp.git
```

### Step 2: Inject content (runs content-inject.py)
```bash
python scripts/content-inject.py \
  --config product_config.json \
  --checkout checkout_urls.json \
  --target src/config.ts
```

`product_config.json` must include keys matching every `{{PLACEHOLDER}}` token in `src/config.ts`.

### Step 3: Inject images (runs image-inject.py)
```bash
python scripts/image-inject.py \
  --slots cdn_slots.json \
  --target src/config.ts
```

`cdn_slots.json` maps CDN_* slot names → Shopify CDN URLs.

### Step 4: Build & deploy
```bash
npm install
npm run build
# Deploy dist/ to GitHub Pages (Actions workflow handles this automatically)
```

## Config.ts Slots Reference

| Slot | Description |
|------|-------------|
| `PRODUCT_NAME` | Full product name with trademark (e.g., "Glow Reset Mask™") |
| `BRAND_NAME` | Brand display name (e.g., "Little Miss Mineral") |
| `CHECKOUT_URL_1UNIT` | Shopify cart URL for 1-jar bundle |
| `CHECKOUT_URL_2UNIT` | Shopify cart URL for 2-jar bundle |
| `CHECKOUT_URL_3UNIT` | Shopify cart URL for 3-jar bundle |
| `CDN_HERO_FRONT` | Product front-facing hero image URL |
| `CDN_HERO_ANGLE` | Product angle view image URL |
| `CDN_LIFESTYLE_1` | Lifestyle/in-use image URL |
| `CDN_TEXTURE_1` | Texture/swatch close-up URL |
| `CDN_BUNDLE_3` | 3-jar bundle shot URL |
| `CDN_AD_OVERLAY` | Product image for closing CTA section |
| `PDP_META_TITLE` | HTML `<title>` tag |
| `PDP_META_DESC` | Meta description |
| `PDP_HERO_HEADLINE` | Main hero H1 (line 1) |
| `PDP_HERO_SUBHEADLINE` | Main hero H1 (line 2, colored) |
| `PDP_HERO_BODY` | Hero paragraph copy |
| `PDP_HERO_CTA_TEXT` | Hero CTA button label |
| `PDP_PROBLEM_BODY` | Intro/problem section paragraph |
| `PDP_MECHANISM_NAME` | Proprietary mechanism name (e.g., "Centelloid Renewal Cascade™") |
| `PDP_MECHANISM_HEADLINE` | Mechanism section H2 |
| `PDP_MECHANISM_BODY` | Mechanism intro paragraph |
| `PDP_STEP_1/2/3_HEADLINE` | Phase titles |
| `PDP_STEP_1/2/3_BODY` | Phase body copy |
| `PDP_TESTIMONIAL_1/2/3_*` | Customer quote, name, location |
| `PDP_BUNDLE_1/2/3_*` | Bundle label, price, compare, savings, per_unit |
| `PDP_GUARANTEE_DAYS` | Guarantee period (e.g., "60") |
| `PDP_GUARANTEE_HEADLINE` | Guarantee section H2 |
| `PDP_GUARANTEE_BODY` | Guarantee body paragraph |
| `PDP_INGREDIENT_1/2/3/4/5_NAME` | Ingredient names |
| `PDP_INGREDIENT_1/2/3/4/5_SCIENCE` | Ingredient science description |
| `PDP_FAQ_1-5_Q/A` | FAQ questions and answers |
| `PDP_FINAL_CTA_TEXT` | Closing CTA H2 |
| `PDP_DISCLAIMER` | Footer FDA disclaimer text |

## Rules

- **NEVER commit real product content to this repo** — it must always contain `{{PLACEHOLDER}}` tokens
- **NEVER use this repo directly for a product** — always clone it first
- The build will succeed with `{{PLACEHOLDER}}` strings — they render as literal text, which is correct for template validation
- All layout, colors, and component structure live in the TSX files — do not modify for individual products
- To update the template design (new section, new component), update this golden repo and all future products get the improvement automatically

## Build Validation

```bash
npm install && npm run build
# Should exit 0 with {{PLACEHOLDER}} values visible in dist/
grep -r "centella\|crc-\|Centella Restore" src/ || echo "✅ Clean — no CRC artifacts"
```
