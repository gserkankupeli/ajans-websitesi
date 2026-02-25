# FlowAsistan — Emlak Landing + Blog (Antigravity MD)

> **Sayfalar:** `/emlak` ve `/emlak/blog`  
> **Amaç (tek KPI):** Emlak ofisi/danışmanlarını **30 dakikalık görüşmeye** yönlendirmek.  
> **CTA:** “Kısa Bir Tanışma Planla” → `#randevu`  
> **Not:** Bu landing’de “niteliksiz müşteri” ifadesi kullanılacak. Teknik jargon minimum.

## Tasarım Sistemi (Ortak)
**Ton:** Kurumsal, net, kafa karıştırmayan. Teknik jargon minimum.  
**Kilit kelimeler:** 7/24 • otomatik karşılama • tek panel • canlı istatistik • nitelikli müşteri / randevu / uygun müşteri

### Renk Paleti (öneri)
- Primary Dark: `#0F172A`
- Text: `#0B1220`
- Background: `#FFFFFF`
- Surface: `#F8FAFC`
- Border: `#E2E8F0`
- Accent (CTA): `#2563EB` (hover: `#1D4ED8`)
- Muted text: `#475569`

### Tipografi
- Başlık: modern sans (Inter/SF Pro benzeri)
- Metin: 16–18px, line-height 1.6
- H1: 44–56px (desktop), 32–38px (mobile)

### UX Kuralları (Funnel)
- Menü sade: “Nasıl Çalışır?”, “Özellikler”, “Blog”, “SSS” + sağda CTA
- CTA metni her yerde aynı: **“Kısa Bir Tanışma Planla”**
- CTA’lar sayfa içi `#randevu` bölümüne scroll etsin
- Sayfada “teklif” kelimesi kullanılmasın
- “CRM” kelimesi kullanılmasın; yerine **“FlowAsistan Paneli / tek panel”** denilsin
- Teknik araç isimleri (Evolution, Manychat, Supabase vb.) sayfada geçmesin


---

# 1) SAYFA: /emlak (Landing)

## Header (sticky)
- Sol: **FlowAsistan Paneli**
- Menü:
  - Nasıl Çalışır? → `#nasil`
  - Emlak İçin → `#emlak-icin`
  - Blog → `/emlak/blog`
  - SSS → `#sss`
- Sağ: CTA → **Kısa Bir Tanışma Planla** (scroll `#randevu`)

---

## HERO
**H1:**  
**“Niteliksiz müşteriye zaman harcamayın: Mesaj ve aramaları 7/24 otomatik karşılayın, uygun müşteriyi ayıklayın.”**

**Alt metin:**  
“İlan soruları anında yanıtlanır; bütçe/konum/uygunluk gibi kriterlerle müşteri filtrelenir. Siz sadece istediğinizde FlowAsistan Paneli’ne girip takip eder ve sonuçları görürsünüz.”

**3 bullet:**
- 7/24 otomatik karşılama (mesaj + arama)
- Niteliksiz müşteriyi filtreleme
- Tek panel + canlı istatistik

**CTA:** Kısa Bir Tanışma Planla → `#randevu`  
**Mikro:** “30 dk tanışma & ihtiyaç analizi • Uygunsa canlı demo”

---

## SECTION: Emlakta zaman kaybı nerede?
**H2:** “En büyük kayıp: niteliksiz müşteriler”
**4 madde:**
- Aynı ilan soruları tekrar tekrar gelir
- Niteliksiz müşterilerle uzun konuşmalar zaman yer
- Hızlı dönüş olmazsa müşteri başkasına gider
- Takip dağınık olursa fırsatlar kaybolur

---

## SECTION: Nasıl Çalışır?
**Anchor:** `#nasil`  
**H2:** “FlowAsistan 3 Adım Sistemi”
1) **Karşıla** — “Mesajları ve aramaları 7/24 otomatik karşılar.”  
2) **Topla** — “Kriterleri toplar ve müşteriyi ayıklar.”  
3) **Ölç** — “Dönüşümü ve performansı canlı gösterir.”

---

## SECTION: Emlak için (özellikler)
**Anchor:** `#emlak-icin`  
**H2:** “İlan sürecine uygun otomatik karşılama”
**6 madde:**
- İlan sorularını otomatik yanıtlar (kısa ve net)
- Telefon aramalarını otomatik karşılar
- Bütçe/konum/uygunluk gibi kriterlerle ayıklar
- Uygun müşteriyi hızlı takip için tek panelde toplar
- Canlı istatistikler (çağrı, mesaj, dönüşüm)
- Konuşma özeti ve analiz

---

## SECTION: Proof
**H2:** “Emlak panelinde neleri görürsünüz?”
Metrik kartları:
- Kaç çağrı
- Kaç mesaj
- Kaç talep
- Konuşma süresi
- Dönüşüm

**Mini senaryo:**  
“İlan için yazdı veya aradı → FlowAsistan otomatik karşıladı → kriterleri topladı → niteliksiz müşteriyi ayıkladı → siz panelden uygun müşterileri ve istatistikleri gördünüz.”

---

## SECTION: Görüşme
**H2:** “30 dakikada netleşsin”
- Şu an en büyük zaman kaybı nerede?
- Hangi kriterlerle müşteri ayıklamak mantıklı?
- Uygunsa canlı demo ile örnekleyelim

**CTA:** Kısa Bir Tanışma Planla → `#randevu`

---

## SSS
**Anchor:** `#sss`  
**H2:** “Sık sorulan sorular (Emlak)”

**S1:** “Müşteri filtrelemek rahatsız eder mi?”  
**C:** “Kısa ve net sorularla ilerlediğinde rahatsız etmez; aksine süreci hızlandırır.”

**S2:** “Her ilan farklı, nasıl çalışacak?”  
**C:** “Kriterler portföyünüze göre şekillenir; amaç ‘uygun müşteri’yi hızlı ayıklamaktır.”

**S3:** “Bu sistem gerçekten otomatik mi?”  
**C:** “Evet. Mesajlar ve aramalar otomatik karşılanır; siz panelden sonuçları takip edersiniz.”

**S4:** “Görüşme süresi?”  
**C:** “30 dakika.”

---

## Randevu (Calendly)
**Anchor:** `#randevu`  
**H2:** “Kısa bir tanışma planlayın”
**Metin:** “Niteliksiz müşteriye giden zamanı nasıl azaltacağınızı birlikte netleştirelim.”

```html
<div class="calendly-inline-widget"
     data-url="https://calendly.com/USERNAME/flowasistan-tanisma-30dk"
     style="min-width:320px;height:820px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

**Alt:** “Bir sorun olursa: serkankupeli@flowixy.com”

---

## Footer
- FlowAsistan Paneli
- serkankupeli@flowixy.com
- © 2026 Flowixy

---

# 2) SAYFA: /emlak/blog (3 Yazı)

## Blog Liste
**H1:** “Emlak için Blog”
**Alt:** “Niteliksiz müşteriyle zaman kaybını azaltma, hızlı dönüş ve takip düzeni üzerine kısa içerikler.”

### Yazı 1
- **Başlık:** “Niteliksiz müşteriyle zaman kaybını azaltmanın 5 yolu”
- **Slug:** `/emlak/blog/niteliksiz-musteri-zaman-kaybi`
- **Özet:** “Doğru sorular ve doğru akış, süreci hızlandırır.”

### Yazı 2
- **Başlık:** “İlan sorularına hızlı dönüş neden müşteri kazandırır?”
- **Slug:** `/emlak/blog/ilan-sorularina-hizli-donus`
- **Özet:** “İlk dönüş hızı, karar anını etkiler.”

### Yazı 3
- **Başlık:** “Müşteriyi ayıklamak: bütçe/konum/uygunluk soruları nasıl sorulmalı?”
- **Slug:** `/emlak/blog/musteri-ayiklama-sorulari`
- **Özet:** “Kısa, net ve doğru sorular; niteliksiz müşteriyi azaltır.”

> Blog sayfasında mini CTA: **Kısa Bir Tanışma Planla** → `/emlak#randevu`

---

## Yazı 1 — Tam içerik
**H1:** Niteliksiz müşteriyle zaman kaybını azaltmanın 5 yolu

**Giriş:**  
Emlakta zaman en değerli kaynaktır. Niteliksiz müşterilerle uzun sohbetler, gerçek fırsatları kaçırmanıza neden olabilir.

**H2:** 1) İlk 3 soruyu standartlaştırın
- Bütçe aralığı
- Konum tercihleri
- Taşınma zamanı

**H2:** 2) İlan sorularına “kısa ve net” yanıt verin
- Uzun açıklama yerine net yönlendirme

**H2:** 3) Uygun olmayanı erken ele
- Süreci uzatmadan filtrele

**H2:** 4) Takibi tek yerde tut
- Dağınık kanallar fırsat kaybettirir

**H2:** 5) Ölç ve iyileştir
- Dönüşüm
- Konuşma süresi
- Talep sayısı

**CTA:** `/emlak#randevu`

---

## Yazı 2 — Tam içerik
**H1:** İlan sorularına hızlı dönüş neden müşteri kazandırır?

**Giriş:**  
Müşteri ilanı görür ve kısa süre içinde kararını şekillendirir. Hızlı dönüş, rakiplerin önüne geçirir.

**H2:** Hızlı dönüşün 3 etkisi
- Güven hissi artar
- Takip hızlanır
- Rekabette öne geçersiniz

**CTA:** `/emlak#randevu`

---

## Yazı 3 — Tam içerik
**H1:** Müşteriyi ayıklamak: bütçe/konum/uygunluk soruları nasıl sorulmalı?

**Giriş:**  
Doğru soru, doğru müşteriyi hızlı ortaya çıkarır.

**H2:** Kısa sorular daha iyi çalışır
- “Bütçe aralığınız nedir?”
- “Hangi bölgeleri tercih ediyorsunuz?”
- “Ne zaman taşınmayı düşünüyorsunuz?”

**H2:** Yanıtları takipte kullanın
- Uygun portföy eşleştirmesi
- Hızlı geri dönüş

**CTA:** `/emlak#randevu`
