import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  COPY_PRODUCT_NAME,
  BRAND_NAME,
  CHECKOUT_URL_1UNIT,
  CHECKOUT_URL_2UNIT,
  CHECKOUT_URL_3UNIT,
  CDN_HERO_FRONT,
  CDN_HERO_ANGLE,
  CDN_LIFESTYLE_1,
  CDN_TEXTURE_1,
  CDN_BUNDLE_3,
  CDN_AD_OVERLAY,
  PDP_META_TITLE,
  PDP_META_DESC,
  PDP_H1,
  PDP_HERO_SUBHEAD,
  PDP_HERO_COPY,
  PDP_CTA_1,
  PDP_PROBLEM_BODY,
  MECHANISM_NAME,
  PDP_MECHANISM_HEADLINE,
  PDP_MECHANISM_BODY,
  PDP_STEP_1_HEADLINE,
  PDP_STEP_1_BODY,
  PDP_STEP_2_HEADLINE,
  PDP_STEP_2_BODY,
  PDP_STEP_3_HEADLINE,
  PDP_STEP_3_BODY,
  PDP_TESTIMONIAL_1_QUOTE,
  PDP_TESTIMONIAL_1_NAME,
  PDP_TESTIMONIAL_1_LOCATION,
  PDP_TESTIMONIAL_2_QUOTE,
  PDP_TESTIMONIAL_2_NAME,
  PDP_TESTIMONIAL_2_LOCATION,
  PDP_TESTIMONIAL_3_QUOTE,
  PDP_TESTIMONIAL_3_NAME,
  PDP_TESTIMONIAL_3_LOCATION,
  BUNDLE_LABEL_1,
  BUNDLE_PRICE_1,
  BUNDLE_COMPARE_1,
  PDP_BUNDLE_1_PER_UNIT,
  BUNDLE_LABEL_2,
  BUNDLE_PRICE_2,
  BUNDLE_COMPARE_2,
  PDP_BUNDLE_2_PER_UNIT,
  BUNDLE_LABEL_3,
  BUNDLE_PRICE_3,
  BUNDLE_COMPARE_3,
  PDP_BUNDLE_3_PER_UNIT,
  GUARANTEE,
  PDP_GUARANTEE_HEADLINE,
  PDP_GUARANTEE_BODY,
  PDP_ACTION_1_TITLE,
  PDP_ACTION_1_BODY,
  PDP_ACTION_2_TITLE,
  PDP_ACTION_2_BODY,
  PDP_ACTION_3_TITLE,
  PDP_ACTION_3_BODY,
  PDP_INGREDIENT_4_NAME,
  PDP_INGREDIENT_4_SCIENCE,
  PDP_INGREDIENT_5_NAME,
  PDP_INGREDIENT_5_SCIENCE,
  PDP_FAQ_1_Q,
  PDP_FAQ_1_A,
  PDP_FAQ_2_Q,
  PDP_FAQ_2_A,
  PDP_FAQ_3_Q,
  PDP_FAQ_3_A,
  PDP_FAQ_4_Q,
  PDP_FAQ_4_A,
  PDP_FAQ_5_Q,
  PDP_FAQ_5_A,
  PDP_FINAL_CTA_BUTTON,
  PDP_DISCLAIMER,
} from "../config";

const COLORS = {
  primary: "#C4956A",
  cta: "#B85C38",
  headline: "#3D2B1F",
  body: "#4A3C31",
  bg: "#FAF6F1",
  bgDark: "#F3EDE4",
  green: "#2D6A4F",
  accent: "#8B5E3C",
};

const StarRating = ({ stars = 5 }: { stars?: number }) => (
  <span style={{ color: "#F4A40A", fontSize: "18px" }}>
    {"★".repeat(stars)}{"☆".repeat(5 - stars)}
  </span>
);

const CTAButton = ({ href, children, size = "normal" }: { href: string; children: React.ReactNode; size?: string }) => (
  <a
    href={href}
    style={{
      display: "inline-block",
      background: COLORS.cta,
      color: "#fff",
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      fontSize: size === "large" ? "18px" : "16px",
      padding: size === "large" ? "18px 40px" : "14px 32px",
      borderRadius: "9999px",
      textDecoration: "none",
      letterSpacing: "0.02em",
      boxShadow: "0 4px 16px rgba(184,92,56,0.25)",
      transition: "opacity 0.2s",
    }}
  >
    {children}
  </a>
);

const DiscountBadge = () => (
  <div style={{
    display: "inline-block",
    background: COLORS.green,
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    padding: "6px 16px",
    borderRadius: "9999px",
    letterSpacing: "0.05em",
    marginBottom: "8px",
  }}>
    🏷 25% OFF — CODE: SECRET25
  </div>
);

const SectionDivider = () => (
  <div style={{ borderTop: `2px solid ${COLORS.primary}`, opacity: 0.3, margin: "60px 0" }} />
);

const Index = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const phases = [
    { phase: "Phase 1", title: PDP_STEP_1_HEADLINE, body: PDP_STEP_1_BODY, icon: "🔬" },
    { phase: "Phase 2", title: PDP_STEP_2_HEADLINE, body: PDP_STEP_2_BODY, icon: "🏗️" },
    { phase: "Phase 3", title: PDP_STEP_3_HEADLINE, body: PDP_STEP_3_BODY, icon: "💧" },
  ];

  const testimonials = [
    { stars: 5, text: PDP_TESTIMONIAL_1_QUOTE, name: PDP_TESTIMONIAL_1_NAME, location: PDP_TESTIMONIAL_1_LOCATION },
    { stars: 5, text: PDP_TESTIMONIAL_2_QUOTE, name: PDP_TESTIMONIAL_2_NAME, location: PDP_TESTIMONIAL_2_LOCATION },
    { stars: 5, text: PDP_TESTIMONIAL_3_QUOTE, name: PDP_TESTIMONIAL_3_NAME, location: PDP_TESTIMONIAL_3_LOCATION },
  ];

  const faqs = [
    { q: PDP_FAQ_1_Q, a: PDP_FAQ_1_A },
    { q: PDP_FAQ_2_Q, a: PDP_FAQ_2_A },
    { q: PDP_FAQ_3_Q, a: PDP_FAQ_3_A },
    { q: PDP_FAQ_4_Q, a: PDP_FAQ_4_A },
    { q: PDP_FAQ_5_Q, a: PDP_FAQ_5_A },
  ];

  const ingredients = [
    { name: PDP_ACTION_1_TITLE, desc: PDP_ACTION_1_BODY },
    { name: PDP_ACTION_2_TITLE, desc: PDP_ACTION_2_BODY },
    { name: PDP_ACTION_3_TITLE, desc: PDP_ACTION_3_BODY },
    { name: PDP_INGREDIENT_4_NAME, desc: PDP_INGREDIENT_4_SCIENCE },
    { name: PDP_INGREDIENT_5_NAME, desc: PDP_INGREDIENT_5_SCIENCE },
  ];

  return (
    <>
      <Helmet>
        <title>{PDP_META_TITLE}</title>
        <meta name="description" content={PDP_META_DESC} />
      </Helmet>

      <div style={{ fontFamily: "'Inter', sans-serif", background: COLORS.bg, color: COLORS.body, minHeight: "100vh" }}>

        {/* NAV */}
        <nav style={{ background: "#fff", padding: "14px 24px", borderBottom: `1px solid rgba(196,149,106,0.2)`, display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "18px", color: COLORS.headline, letterSpacing: "-0.02em" }}>
            {BRAND_NAME}
          </div>
          <a href={CHECKOUT_URL_2UNIT} style={{ background: COLORS.cta, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "14px", padding: "10px 24px", borderRadius: "9999px", textDecoration: "none" }}>
            Shop Now — 25% OFF
          </a>
        </nav>

        {/* HERO */}
        <section style={{ background: `linear-gradient(135deg, #FDF8F3 0%, #F5EDE0 100%)`, padding: "60px 24px 80px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <DiscountBadge />
              <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.1, color: COLORS.headline, margin: "16px 0 24px", letterSpacing: "-0.02em" }}>
                {PDP_H1}<br />
                <span style={{ color: COLORS.primary }}>{PDP_HERO_SUBHEAD}</span>
              </h1>
              <p style={{ fontSize: "18px", lineHeight: 1.7, color: COLORS.body, maxWidth: "480px", marginBottom: "32px" }}>
                {PDP_HERO_COPY}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "24px" }}>
                <CTAButton href={CHECKOUT_URL_2UNIT} size="large">{PDP_CTA_1}</CTAButton>
              </div>
              <div style={{ fontSize: "13px", color: COLORS.accent }}>
                ✓ {GUARANTEE}-Day Money-Back Guarantee &nbsp;·&nbsp; ✓ Free gifts with every order &nbsp;·&nbsp; ✓ Free shipping over $50
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={CDN_HERO_FRONT}
                alt={`${COPY_PRODUCT_NAME} — front view`}
                style={{ maxWidth: "100%", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
              />
            </div>
          </div>
        </section>

        {/* INTRO COPY / PROBLEM BODY */}
        <section style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 24px" }}>
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: COLORS.body }}>
            {PDP_PROBLEM_BODY}
          </p>
        </section>

        {/* ANGLE IMAGE */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 60px" }}>
          <img
            src={CDN_HERO_ANGLE}
            alt={`${COPY_PRODUCT_NAME} — angle view showing texture`}
            style={{ width: "100%", borderRadius: "20px", objectFit: "cover", maxHeight: "500px" }}
          />
        </section>

        <SectionDivider />

        {/* MECHANISM */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 40px)", color: COLORS.headline, textAlign: "center", marginBottom: "16px" }}>
            {PDP_MECHANISM_HEADLINE}
          </h2>
          <p style={{ textAlign: "center", fontSize: "18px", color: COLORS.body, maxWidth: "600px", margin: "0 auto 60px", lineHeight: 1.7 }}>
            Three Phases. One Cream. The Restoration Your Skin Has Been Waiting For.
          </p>
          <p style={{ textAlign: "center", fontSize: "16px", color: COLORS.body, maxWidth: "640px", margin: "0 auto 60px", lineHeight: 1.7 }}>
            {PDP_MECHANISM_BODY}
          </p>

          {phases.map((phase, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "40px",
              marginBottom: "24px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              borderLeft: `4px solid ${COLORS.primary}`,
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                <div style={{ fontSize: "36px", lineHeight: 1 }}>{phase.icon}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: COLORS.primary, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
                    {phase.phase}
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.headline, marginBottom: "16px" }}>
                    {phase.title}
                  </h3>
                  <p style={{ lineHeight: 1.8, color: COLORS.body }}>{phase.body}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <SectionDivider />

        {/* TEXTURE / LIFESTYLE IMAGES */}
        <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <img src={CDN_TEXTURE_1} alt={`${COPY_PRODUCT_NAME} texture`} style={{ width: "100%", borderRadius: "20px", objectFit: "cover" }} />
            <img src={CDN_LIFESTYLE_1} alt={`${COPY_PRODUCT_NAME} lifestyle`} style={{ width: "100%", borderRadius: "20px", objectFit: "cover" }} />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ background: COLORS.bgDark, padding: "80px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, textAlign: "center", marginBottom: "8px" }}>
              What Women Are Saying After 8 Weeks
            </h2>
            <p style={{ textAlign: "center", color: COLORS.accent, marginBottom: "48px", fontSize: "15px" }}>
              Real customers. Real skin. Real kitchens, real mirror moments.
            </p>

            {testimonials.map((t, i) => (
              <div key={i} style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "32px",
                marginBottom: "24px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              }}>
                <StarRating stars={t.stars} />
                <p style={{ fontSize: "17px", lineHeight: 1.8, color: COLORS.body, margin: "16px 0 20px", fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "14px", color: COLORS.accent }}>
                  — {t.name} | {t.location}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BUNDLES */}
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }} id="shop">
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, textAlign: "center", marginBottom: "8px" }}>
            Choose Your Restoration Protocol
          </h2>
          <p style={{ textAlign: "center", color: COLORS.accent, marginBottom: "48px", fontSize: "16px" }}>
            Use code <strong>SECRET25</strong> at checkout for 25% off any bundle — automatic, no hoops
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {/* Tier 1 */}
            <div style={{ background: "#fff", borderRadius: "24px", padding: "36px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid rgba(196,149,106,0.2)" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.headline, marginBottom: "8px" }}>{BUNDLE_LABEL_1}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "32px", color: COLORS.cta }}>{BUNDLE_PRICE_1}</span>
                <span style={{ textDecoration: "line-through", color: "#9CA3AF", fontSize: "18px" }}>{BUNDLE_COMPARE_1}</span>
                <span style={{ background: COLORS.green, color: "#fff", fontSize: "12px", fontWeight: 700, padding: "2px 8px", borderRadius: "9999px" }}>25% OFF</span>
              </div>
              <p style={{ fontSize: "13px", color: COLORS.accent, marginBottom: "4px" }}>{PDP_BUNDLE_1_PER_UNIT}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: COLORS.body, margin: "16px 0 24px" }}>
                One jar of {COPY_PRODUCT_NAME} (45-60 day supply). The perfect entry point to experience the first two phases of the {MECHANISM_NAME}.
              </p>
              <p style={{ fontSize: "14px", color: COLORS.green, fontWeight: 600, marginBottom: "24px" }}>✓ FREE: Digital "{COPY_PRODUCT_NAME} Protocol" Guide ($29 value)</p>
              <CTAButton href={CHECKOUT_URL_1UNIT}>Start With 1 Jar →</CTAButton>
            </div>

            {/* Tier 2 — BEST SELLER */}
            <div style={{ background: "linear-gradient(135deg, #FDF4EC 0%, #F5E6D3 100%)", borderRadius: "24px", padding: "36px 28px", boxShadow: "0 8px 32px rgba(184,92,56,0.15)", border: `2px solid ${COLORS.primary}`, position: "relative" }}>
              <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: COLORS.cta, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px", padding: "6px 20px", borderRadius: "9999px", whiteSpace: "nowrap" }}>
                ⭐ BEST SELLER — Most Popular
              </div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.headline, marginBottom: "8px", marginTop: "8px" }}>{BUNDLE_LABEL_2}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "32px", color: COLORS.cta }}>{BUNDLE_PRICE_2}</span>
                <span style={{ textDecoration: "line-through", color: "#9CA3AF", fontSize: "18px" }}>{BUNDLE_COMPARE_2}</span>
                <span style={{ background: COLORS.green, color: "#fff", fontSize: "12px", fontWeight: 700, padding: "2px 8px", borderRadius: "9999px" }}>25% OFF</span>
              </div>
              <p style={{ fontSize: "13px", color: COLORS.accent, marginBottom: "4px" }}>{PDP_BUNDLE_2_PER_UNIT}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: COLORS.body, margin: "16px 0 24px" }}>
                Two jars (90-120 day supply). Most women notice real structural change at weeks 6-8 — this gives you the full {MECHANISM_NAME} protocol with room to feel the results settle into your skin.
              </p>
              <div style={{ fontSize: "14px", color: COLORS.green, fontWeight: 600, marginBottom: "24px" }}>
                <div>✓ FREE: Digital "{COPY_PRODUCT_NAME} Protocol" Guide ($29 value)</div>
                <div>✓ FREE: Mini Rose Quartz Facial Roller ($24.99 value)</div>
                <div>✓ Free shipping included</div>
              </div>
              <CTAButton href={CHECKOUT_URL_2UNIT}>Get 2 Jars — Best Seller →</CTAButton>
            </div>

            {/* Tier 3 */}
            <div style={{ background: "#fff", borderRadius: "24px", padding: "36px 28px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid rgba(196,149,106,0.2)" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: COLORS.headline, marginBottom: "8px" }}>{BUNDLE_LABEL_3}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "8px" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "32px", color: COLORS.cta }}>{BUNDLE_PRICE_3}</span>
                <span style={{ textDecoration: "line-through", color: "#9CA3AF", fontSize: "18px" }}>{BUNDLE_COMPARE_3}</span>
                <span style={{ background: COLORS.green, color: "#fff", fontSize: "12px", fontWeight: 700, padding: "2px 8px", borderRadius: "9999px" }}>25% OFF</span>
              </div>
              <p style={{ fontSize: "13px", color: COLORS.accent, marginBottom: "4px" }}>{PDP_BUNDLE_3_PER_UNIT}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: COLORS.body, margin: "16px 0 24px" }}>
                Three jars (135-180 day supply). The {MECHANISM_NAME} works deepest at the 8-12 week mark — 3 jars gives you the complete protocol at the lowest price-per-jar.
              </p>
              <div style={{ fontSize: "14px", color: COLORS.green, fontWeight: 600, marginBottom: "24px" }}>
                <div>✓ FREE: Digital "{COPY_PRODUCT_NAME} Protocol" Guide ($29 value)</div>
                <div>✓ FREE: Rose Quartz Facial Roller ($24.99 value)</div>
                <div>✓ FREE: 3-Pack Collagen Sheet Masks ($24.99 value)</div>
                <div>✓ Free shipping included</div>
              </div>
              <CTAButton href={CHECKOUT_URL_3UNIT}>Get 3 Jars — Best Value →</CTAButton>
            </div>
          </div>

          {/* Bundle image */}
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <img src={CDN_BUNDLE_3} alt={`${COPY_PRODUCT_NAME} 3-jar bundle`} style={{ maxWidth: "500px", width: "100%", borderRadius: "20px" }} />
          </div>
        </section>

        {/* GUARANTEE */}
        <section style={{ background: COLORS.bgDark, padding: "80px 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "64px", marginBottom: "16px" }}>🛡️</div>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, marginBottom: "16px" }}>
              {PDP_GUARANTEE_HEADLINE}
            </h2>
            <p style={{ fontStyle: "italic", color: COLORS.accent, fontSize: "18px", marginBottom: "32px" }}>
              Because the biology takes time — and we want you to see the results before you decide.
            </p>
            <p style={{ lineHeight: 1.8, color: COLORS.body, fontSize: "17px", marginBottom: "16px" }}>
              {PDP_GUARANTEE_BODY}
            </p>
            <p style={{ lineHeight: 1.8, color: COLORS.body, fontSize: "17px", marginBottom: "16px" }}>
              That's exactly why we give you <strong>{GUARANTEE} days, not 30</strong>.
            </p>
            <p style={{ lineHeight: 1.8, color: COLORS.body, fontSize: "17px", marginBottom: "32px" }}>
              If you're not seeing the restoration you were promised — contact us and we will refund you completely. No forms. No restocking fees. No fine print. No explaining yourself. Full refund, no questions asked.
            </p>
            <CTAButton href={CHECKOUT_URL_2UNIT} size="large">Start Your {GUARANTEE}-Day Trial →</CTAButton>
          </div>
        </section>

        {/* INGREDIENTS */}
        <section style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, marginBottom: "8px" }}>
            What's Inside — And Why Every Ingredient Earns Its Place
          </h2>
          <div style={{ borderTop: `3px solid ${COLORS.primary}`, margin: "24px 0 32px" }} />

          {ingredients.map((ing, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(196,149,106,0.2)", paddingBottom: "24px", marginBottom: "24px" }}>
              <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: COLORS.headline, marginBottom: "8px" }}>{ing.name}</h4>
              <p style={{ lineHeight: 1.8, color: COLORS.body, fontSize: "15px" }}>{ing.desc}</p>
            </div>
          ))}

          <div style={{ background: COLORS.bgDark, borderRadius: "16px", padding: "20px 24px", fontSize: "14px", color: COLORS.accent, lineHeight: 1.7 }}>
            <strong>No added fragrance. No synthetic dyes. No parabens. No common sensitizers.</strong>
            <br />Because perimenopausal skin is reactive enough without asking it to tolerate anything it doesn't need.
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: COLORS.bgDark, padding: "80px 24px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: COLORS.headline, textAlign: "center", marginBottom: "40px" }}>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(196,149,106,0.2)", marginBottom: "0" }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{ width: "100%", textAlign: "left", padding: "20px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}
                >
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: COLORS.headline }}>{faq.q}</span>
                  <span style={{ fontSize: "24px", color: COLORS.primary, flexShrink: 0 }}>{activeFaq === i ? "−" : "+"}</span>
                </button>
                {activeFaq === i && (
                  <div style={{ padding: "0 0 20px", lineHeight: 1.8, color: COLORS.body, fontSize: "15px" }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section style={{ background: `linear-gradient(135deg, ${COLORS.headline} 0%, #5C3D2E 100%)`, padding: "80px 24px", textAlign: "center", color: "#fff" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <img src={CDN_AD_OVERLAY} alt={COPY_PRODUCT_NAME} style={{ maxWidth: "200px", marginBottom: "32px", borderRadius: "16px" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "20px", lineHeight: 1.7, marginBottom: "8px", opacity: 0.9 }}>
              Your skin has been asking for the right mechanism.
            </p>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 4vw, 36px)", marginBottom: "24px", lineHeight: 1.2 }}>
              {PDP_FINAL_CTA_BUTTON}
            </h2>
            <p style={{ opacity: 0.85, marginBottom: "32px", fontSize: "16px", lineHeight: 1.7 }}>
              Give your skin {GUARANTEE} days to show you what it can do when it gets what it actually needs.
            </p>
            <div style={{ marginBottom: "24px" }}>
              <DiscountBadge />
            </div>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
              <a href={CHECKOUT_URL_1UNIT} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, padding: "12px 24px", borderRadius: "9999px", textDecoration: "none", fontSize: "15px" }}>1 Jar — {BUNDLE_PRICE_1}</a>
              <a href={CHECKOUT_URL_2UNIT} style={{ background: COLORS.cta, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, padding: "16px 36px", borderRadius: "9999px", textDecoration: "none", fontSize: "17px" }}>2 Jars — {BUNDLE_PRICE_2} (Best Seller)</a>
              <a href={CHECKOUT_URL_3UNIT} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, padding: "12px 24px", borderRadius: "9999px", textDecoration: "none", fontSize: "15px" }}>3 Jars — {BUNDLE_PRICE_3}</a>
            </div>
            <p style={{ opacity: 0.7, fontSize: "13px" }}>
              {GUARANTEE}-Day Money-Back Guarantee · Free gifts with every order · Use code SECRET25 at checkout
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#1a1a1a", color: "#9CA3AF", padding: "40px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "18px", color: "#fff", marginBottom: "16px" }}>{BRAND_NAME}</p>
            <p style={{ fontSize: "12px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 16px" }}>
              {PDP_DISCLAIMER}
            </p>
            <p style={{ fontSize: "12px" }}>
              © 2026 {BRAND_NAME}. All Rights Reserved.
            </p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Index;
