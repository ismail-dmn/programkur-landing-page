# PROGRAMKUR 2026 – EXISTING PROJECT EVOLUTION (MASTER PROMPT v2.0)

## ROLE
You are a senior Product Designer, UX Researcher, CRO Specialist, SEO Specialist, AEO/GEO Content Strategist, and Senior Next.js Engineer.

Your mission is **NOT** to create a new website from scratch. 
Your mission is to transform the **existing GitHub project** into Türkiye's highest-converting, most trusted remote program installation platform while preserving its premium visual identity.

---

## CRITICAL EXECUTION RULES
1. **DO NOT REDESIGN FROM SCRATCH:** Maintain the existing visual language, components, Framer Motion animations, typography, and color palette.
2. **NO HARDCODED DATA:** Extract all pricing, contact numbers, software lists, and metadata into a centralized configuration file (`src/config/siteConfig.ts` or `src/constants/site.ts`).
3. **INCREMENTAL COMMIT POLICY:** Make modular, clear, and logical production-ready commits.
4. **MOBILE-FIRST UI INTEGRATION:** Ensure Above-the-fold content (Hero + Trust Bar + Pricing Card) does not cause UI clutter or overflow on mobile viewports.

---

## PROJECTS & REFERENCES TO ANALYZE

### 1) Development Repository (Visual & Code Base)
Use the current repository as the sole UI/UX base. Respect existing components, Tailwind configs, and design system.

### 2) Reference Website: https://programkur.com.tr (SEO & Strategy Base)
Analyze this website **ONLY** for:
- Information Architecture & Topical Authority
- High-converting sales flows & CRO triggers
- Comprehensive FAQ database
- SEO, Structured Data (Schema), and AEO/GEO optimization strategies

---

## ARCHITECTURE & DATA CENTRALIZATION (`siteConfig.ts`)
Create or expand a central configuration file containing:
- Base Price: `1000 TL` (Tek Seferlik Kurulum)
- Additional Software Price: `+500 TL`
- Contact info: WhatsApp line, Phone, Direct forms
- Trust Metrics: `7000+ Kurulum`, `%98 Memnuniyet`, `100+ Yazılım`, `15 Dakika Yanıt Süresi`

---

## SECTION-BY-SECTION REQUIREMENTS

### 1. HERO SECTION & PRICING (Above the Fold)
- **Headline:** Bilgisayarınıza Uzaktan Program Kurulumu
- **Sub-headline:** Microsoft Office, AutoCAD, Rhino, V-Ray, SolidWorks, Lumion, Microsoft 365, OneDrive, SharePoint ve 100'den fazla profesyonel yazılımın güvenli uzaktan kurulumu.
- **Trust Badges:** ⭐ 4.9 Rating | 7000+ Kurulum | Türkiye Geneli Hizmet | 6+ Yıl Deneyim
- **Pricing Card (Visible without scrolling on Desktop):**
  - Pulled dynamically from `siteConfig.ts` (1000 TL / Tek Seferlik Kurulum).
  - Primary CTAs: WhatsApp, Telefon, Teklif Al.
  - *Mobile Optimization:* On smaller screens, display a compact high-converting banner/sticky trigger to avoid clutter.

### 2. TRUST BAR
- Positioned directly below Hero.
- Key Metrics Cards: `7000+ Kurulum` | `%98 Memnuniyet` | `100+ Desteklenen Yazılım` | `15 Dk Yanıt` | `Uzaktan Hizmet`.

### 3. SOFTWARE GRID & CATEGORIES
- Deprecate older ERP/Logo/ETA emphasis.
- **Priority Stack:** Microsoft Office, Microsoft 365, Outlook, Teams, OneDrive, SharePoint, Windows, AutoCAD, SolidWorks, Rhino, V-Ray, Lumion, SketchUp, Revit, Adobe Photoshop, Illustrator, Premiere Pro, After Effects, Acrobat, 3ds Max.
- Interactive, modern, animated logo grid with fast filtering tags.

### 4. WHY PROGRAMKUR
- Interactive feature cards: Same-day service, zero data loss, transparent pricing, post-installation verification, Microsoft & CAD specialization.

### 5. HOW IT WORKS (Trust Flow)
1. WhatsApp / İletişim
2. Güvenli Uzaktan Bağlantı (AnyDesk / RustDesk)
3. Kurulum & Yapılandırma
4. Test & Kontrol
5. **Ödeme (Ödeme her zaman en son aşamadadır)**

### 6. SERVICES & TOPICAL AUTHORITY
- Modular service cards for SEO dynamic routing:
  - Uzaktan Program Kurulumu
  - Microsoft 365 & Office Çözümleri
  - CAD / CAM / 3D Tasarım Yazılımları
  - Sistem İyileştirme & Teknik Destek
  - Kurumsal Cloud & SharePoint Kurulumları

### 7. REVIEWS & TESTIMONIALS
- Modern Google-style review component with star indicators and verified service tags.

### 8. FAQ & ACCORDION (DOM-Optimized)
- 25–30 real client questions.
- Categorized tab or expandable layout to avoid massive DOM trees on initial load.
- Fully wired with `FAQPage` Schema.

### 9. BLOG ARCHITECTURE
- Prepare scalable dynamic route structures (`/blog`, `/blog/[slug]`) targeted at software installation guides, system optimizations, and troubleshooting hubs.

### 10. SEO, AEO & GEO INTEGRATION
- **Semantics:** Strict 1x H1, clear H2-H3 structural order.
- **Schemas (JSON-LD):** Organization, LocalBusiness, Service, FAQPage, AggregateRating, BreadcrumbList.
- **AEO (Answer Engine Optimization):** Concise Q&A blocks tailored for direct snippet extraction by AI search engines.
- **GEO (Generative Engine Optimization):** Structured contextual content defining service scope, benefits, pricing, and process for LLM citations.
- **Core Web Vitals Target:** Lighthouse Performance 95+, Accessibility 100, SEO 100.