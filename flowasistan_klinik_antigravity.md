# FlowAsistan — Klinik Landing + Blog (Antigravity MD)

> **Sayfalar:** `/klinik` ve `/klinik/blog`  
> **Amaç (tek KPI):** Klinik yöneticilerini **30 dakikalık görüşmeye** yönlendirmek.  
> **CTA:** “Kısa Bir Tanışma Planla” → `#randevu`  
> **Not:** “randevu” kelimesi bu landing’de kullanılacak. Teknik entegrasyon isimleri kullanılmayacak.

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

# 1) SAYFA: /klinik (Landing)

## Header (sticky)
- Sol: **FlowAsistan Paneli** (yazı logo)
- Menü (anchor):
  - Nasıl Çalışır? → `#nasil`
  - Klinik İçin → `#klinik-icin`
  - Blog → `/klinik/blog`
  - SSS → `#sss`
- Sağ: CTA → **Kısa Bir Tanışma Planla** (scroll `#randevu`)

---

## HERO
**H1:**  
**“Kaçan çağrı ve mesajları 7/24 otomatik karşılayın; randevuya dönüştürün.”**

**Alt metin:**  
“Hasta soruları, aramalar ve randevu talepleri anında karşılanır. Siz sadece istediğinizde FlowAsistan Paneli’ne girip takip eder ve canlı istatistikleri görürsünüz.”

**3 bullet:**
- 7/24 otomatik karşılama (mesaj + arama)
- Randevu talebini hızlandıran akış
- Tek panel + canlı istatistik

**CTA:** Kısa Bir Tanışma Planla → `#randevu`  
**Mikro:** “30 dk tanışma & ihtiyaç analizi • Uygunsa canlı demo”

---

## SECTION: Kliniklerde en büyük kayıp
**H2:** “Geç dönüş = kaçan randevu”
**4 madde:**
- Yoğun saatlerde telefonlar kaçıyor
- Mesajlar birikiyor, geç dönüş oluyor
- Aynı sorular tekrar ediyor (hizmet, fiyat, saat, konum)
- Hasta beklerken başka kliniğe gidiyor

---

## SECTION: Nasıl Çalışır?
**Anchor:** `#nasil`  
**H2:** “FlowAsistan 3 Adım Sistemi”
1) **Karşıla** — “Hasta aramalarını ve mesajlarını 7/24 otomatik karşılar.”  
2) **Topla** — “Randevu talebini ve gerekli bilgileri tek yerde toplar.”  
3) **Ölç** — “Randevu talebi ve performansı canlı olarak gösterir.”

---

## SECTION: Klinik için (özellikler)
**Anchor:** `#klinik-icin`  
**H2:** “Klinik iş akışına uygun otomatik karşılama”
**6 madde:**
- Hasta sorularını otomatik yanıtlar (kısa ve net)
- Telefon aramalarını otomatik karşılar
- Randevu talebini toplar ve yönlendirir
- Tek panelden takip düzeni
- Canlı istatistikler (çağrı, mesaj, randevu talebi)
- Konuşma özeti ve analiz

---

## SECTION: Proof
**H2:** “Klinik panelinde neleri görürsünüz?”
Metrik kartları:
- Kaç çağrı
- Kaç mesaj
- Kaç randevu talebi
- Konuşma süresi
- Dönüşüm

**Mini senaryo:**  
“Hasta aradı → FlowAsistan otomatik karşıladı → randevu talebini aldı → siz panelden sonucu ve istatistikleri gördünüz.”

---

## SECTION: Görüşme
**H2:** “30 dakikada netleşsin”
- Mevcut hasta iletişiminizde en büyük tıkanıklık nerede?
- FlowAsistan’ın klinikte nasıl otomatik çalışacağı
- Uygunsa canlı demo ile örnekleme

**CTA:** Kısa Bir Tanışma Planla → `#randevu`

---

## SSS
**Anchor:** `#sss`  
**H2:** “Sık sorulan sorular (Klinikler)”

**S1:** “Bu sistem hastalara yanlış bilgi verir mi?”  
**C:** “Kritik adımlarda kontrol mekanizmalarıyla ilerler; klinik tercihine göre yanıt sınırları belirlenir.”

**S2:** “Ekip tamamen devreden çıkar mı?”  
**C:** “Hayır. FlowAsistan otomatik karşılar; gerektiğinde ekibe yönlendirme akışı kurgulanabilir.”

**S3:** “Randevu süreci nasıl ilerler?”  
**C:** “Randevu talebi toplanır ve kliniğin akışına göre yönlendirilir; hedef randevuyu hızlandırmaktır.”

**S4:** “Görüşme ne kadar sürüyor?”  
**C:** “30 dakika.”

---

## Randevu (Calendly)
**Anchor:** `#randevu`  
**H2:** “Kısa bir tanışma planlayın”
**Metin:** “Klinikte kaçan çağrı ve mesajları nasıl randevuya çevireceğimizi birlikte netleştirelim.”

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

# 2) SAYFA: /klinik/blog (3 Yazı)

## Blog Liste
**H1:** “Klinikler için Blog”
**Alt:** “Hasta iletişimi, randevu süreci ve 7/24 otomatik karşılama üzerine kısa içerikler.”

### Yazı 1
- **Başlık:** “Kliniklerde kaçan çağrılar randevuyu nasıl düşürür?”
- **Slug:** `/klinik/blog/kacan-cagrilar-randevu`
- **Özet:** “Kaçan çağrı, çoğu zaman kaçan randevu demektir. Nedenlerini ve çözüm yollarını ele alıyoruz.”

### Yazı 2
- **Başlık:** “Hasta sorularına hızlı dönüş randevuyu neden artırır?”
- **Slug:** `/klinik/blog/hizli-donus-randevu`
- **Özet:** “İlk yanıt hızının hasta kararına etkisi düşündüğünüzden daha büyük olabilir.”

### Yazı 3
- **Başlık:** “7/24 otomatik karşılama klinikte ekip yükünü nasıl azaltır?”
- **Slug:** `/klinik/blog/7-24-otomatik-karsilama-klinik`
- **Özet:** “Tekrarlayan sorular ve yoğun saatler… Otomatik karşılama burada devreye girer.”

> Blog sayfasında mini CTA: **Kısa Bir Tanışma Planla** → `/klinik#randevu`

---

## Yazı 1 — Tam içerik
**H1:** Kliniklerde kaçan çağrılar randevuyu nasıl düşürür?

**Giriş:**  
Klinikte yoğun saatlerde kaçan çağrılar, randevu kaybına dönüşebilir. Çünkü hasta çoğu zaman hızlı çözüm arar.

**H2:** Kaçan çağrılar neden artar?
- Yoğun saatler
- Tek kanaldan yönetim
- Tekrarlayan sorular

**H2:** İlk yanıt hızının etkisi
- Karar anı kısadır
- Geç dönüş hasta kaybettirir

**H2:** Çözüm yaklaşımı
- 7/24 otomatik karşılama
- Randevu talebini hızlı toplama
- Tek panelden takip

**CTA:** `/klinik#randevu`

---

## Yazı 2 — Tam içerik
**H1:** Hasta sorularına hızlı dönüş randevuyu neden artırır?

**Giriş:**  
Hasta önce “güven” arar. Hızlı ve net yanıt, güvenin ilk adımıdır.

**H2:** En sık sorular
- Hizmet/işlem
- Saatler
- Konum
- Fiyat aralığı

**H2:** Neden hızlı dönüş önemli?
- Bekleme süresi artınca alternatif klinik devreye girer
- Net yanıt güven verir

**CTA:** `/klinik#randevu`

---

## Yazı 3 — Tam içerik
**H1:** 7/24 otomatik karşılama klinikte ekip yükünü nasıl azaltır?

**Giriş:**  
Ekip aynı soruları tekrar tekrar yanıtladığında asıl işe odak azalır.

**H2:** Otomatik karşılama nerede devreye girer?
- İlk temas
- Sık sorular
- Randevu talebi toplama

**H2:** Ekip ne kazanır?
- Daha az tekrar iş
- Daha düzenli takip
- Daha net rapor

**CTA:** `/klinik#randevu`
