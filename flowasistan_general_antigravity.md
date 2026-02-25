# FlowAsistan — Genel Landing + Blog (Antigravity MD)

> **Sayfalar:** `/flowasistan` ve `/flowasistan/blog`  
> **Amaç (tek KPI):** Ziyaretçiyi Calendly üzerinden **30 dakikalık görüşmeye** yönlendirmek.  
> **CTA:** “Kısa Bir Tanışma Planla” → `#randevu`

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

# 1) SAYFA: /flowasistan (Landing)

## Header (sticky)
- Sol: **FlowAsistan** (yazı logo)
- Menü (anchor):
  - Nasıl Çalışır → `#nasil`
  - Özellikler → `#ozellikler`
  - Blog → `/flowasistan/blog`
  - SSS → `#sss`
- Sağ: Primary CTA buton → **Kısa Bir Tanışma Planla** (scroll `#randevu`)

---

## HERO (Above the fold)
**Eyebrow:** “Bu sayfa genel bir özet. Görüşmede işinize göre netleştiriyoruz.”

**H1:**  
**“Mesajları ve çağrıları 7/24 otomatik karşılayın; tek panelden takip edin ve nitelikli müşteriye dönüştürün.”**

**Alt metin (2 cümle):**  
“Yapay zeka destekli FlowAsistan, WhatsApp ve Instagram gibi kanallardan gelen mesajları ve telefon aramalarını anında karşılar. Siz sadece istediğinizde FlowAsistan Paneli’ne girip takip eder ve canlı istatistikleri görürsünüz.”

**3 kısa madde (bullets):**
- 7/24 otomatik karşılama (mesaj + arama)
- Tek panelden takip ve düzen
- Canlı istatistik ve analiz

**CTA (büyük):** Kısa Bir Tanışma Planla → `#randevu`  
**Mikro metin:** “30 dk tanışma & ihtiyaç analizi • Uygunsa canlı demo”

**Hero görsel:** Sade, soyut “akış/iletişim/tek panel” illüstrasyonu (teknik UI yok).

---

## SECTION: Problem / Kayıp
**H2:** “Görünmeyen kayıplar büyümeyi yavaşlatır”
Kısa paragraf:  
“Birçok işletmede sorun çalışmamak değil; mesajların ve aramaların kaçması, takibin dağınık olması ve performansın ölçülememesidir. Bu da fırsatların soğumasına ve ekibin zaman kaybetmesine neden olur.”

**4 madde:**
- Mesajlara/aramalara geç dönüş → fırsatlar kaçar  
- Kanallar dağınık → takip aksar  
- Tekrarlayan sorular → ekip yorulur  
- Ölçüm yok → neyi iyileştireceğiniz belirsiz kalır  

**Mini CTA (link):** “Kısa Bir Tanışma Planla →” (scroll `#randevu`)

---

## SECTION: Nasıl Çalışır? (Unique Mechanism)
**Anchor:** `#nasil`  
**H2:** “FlowAsistan 3 Adım Sistemi”
3 kart (ikonlu):
1) **Karşıla**  
   “Mesajları ve aramaları 7/24 otomatik karşılar.”
2) **Topla**  
   “Talepleri tek yerde kayıt altına alır ve takip düzeni oluşturur.”
3) **Ölç**  
   “Canlı istatistiklerle performansı görünür kılar.”

---

## SECTION: Özellikler
**Anchor:** `#ozellikler`  
**H2:** “İşinize göre şekillenen otomatik karşılama”
**Açıklama:** “FlowAsistan, farklı kanallardan gelen iletişimi tek akışta toplar ve işletmenize uygun şekilde çalışır.”

**6 madde (kısa, teknik değil):**
- WhatsApp/Instagram gibi kanallardan gelen mesajları otomatik karşılama  
- Telefon aramalarını otomatik karşılama  
- Sık soruları hızlıca yanıtlama ve yönlendirme  
- Talebi nitelikli/niteliksiz olarak ayırma  
- Tek panelden kayıt & takip düzeni  
- Canlı istatistik, konuşma özeti ve analiz

---

## SECTION: Proof (Kafa karıştırmadan)
**H2:** “Tek panelde neleri görürsünüz?”
**Alt metin:** “Örnek metrikler (işinize göre değişebilir):”

Metrik kartları (5 adet):
- **Kaç çağrı**
- **Kaç mesaj**
- **Kaç talep**
- **Konuşma süresi**
- **Dönüşüm**

**Mini senaryo (1 paragraf):**  
“Bir müşteri mesaj attı veya aradı → FlowAsistan otomatik karşıladı → gerekli bilgileri topladı → talebi tek panelde kaydetti → siz dilediğinizde sonuçları ve istatistikleri gördünüz.”

**Görsel:** Sade bir dashboard mockup (teknik terim yok).

---

## SECTION: Görüşme (30 dk)
**H2:** “30 dakikada netleşsin”
**Metin:** “Kısa bir tanışmada sürecinizi dinler, FlowAsistan’ın işletmenizde nasıl otomatik çalışacağını netleştiririz. Uygunsa görüşmede canlı demo ile örnekleriz.”

**3 madde:**
1) En büyük tıkanıklık nerede?  
2) Otomatik karşılama nasıl kurgulanmalı?  
3) Uygunsa canlı demo ile örnekleyelim  

**CTA:** Kısa Bir Tanışma Planla → `#randevu`

---

## SECTION: SSS
**Anchor:** `#sss`  
**H2:** “Sık sorulan sorular”

**S1:** “Bu sistem gerçekten otomatik mi?”  
**C:** “Evet. Mesajlar ve aramalar otomatik karşılanır. Siz sadece dilediğinizde panele girip takip edersiniz.”

**S2:** “Yanlış yönlendirme olursa ne olur?”  
**C:** “Kritik adımlarda kontrol mekanizmalarıyla ilerler; işletmenin tercihine göre yönlendirme/aktarım şekli ayarlanır.”

**S3:** “Hangi kanallarda çalışır?”  
**C:** “WhatsApp ve Instagram gibi mesaj kanalları ve telefon aramaları dahil, işletmenin ihtiyacına göre çalışır.”

**S4:** “Görüşme ne kadar sürüyor?”  
**C:** “30 dakikalık kısa bir tanışma & ihtiyaç analizi görüşmesi.”

---

## SECTION: Randevu (Calendly)
**Anchor:** `#randevu`  
**H2:** “Kısa bir tanışma planlayın”
**Metin:** “Sürecinizi dinleyelim, FlowAsistan’ın sizin için nasıl otomatik çalışacağını netleştirelim.”

**Calendly Inline Embed:**  
```html
<div class="calendly-inline-widget"
     data-url="https://calendly.com/USERNAME/flowasistan-tanisma-30dk"
     style="min-width:320px;height:820px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

**Alt yardım satırı:** “Bir sorun olursa: serkankupeli@flowixy.com”

---

## Footer
- FlowAsistan
- İletişim: serkankupeli@flowixy.com
- © 2026 Flowixy

---

# 2) SAYFA: /flowasistan/blog (Blog Liste + 3 Yazı)

## Blog Landing (liste)
**H1:** “FlowAsistan Blog”
**Alt metin:** “İşletmeler için 7/24 otomatik karşılama ve tek panelden takip üzerine kısa, net içerikler.”

**Blog kartları (3 adet):**

### Yazı 1
- **Başlık:** “Tek panelden mesaj + çağrı takibi neden büyümeyi hızlandırır?”
- **Slug:** `/flowasistan/blog/tek-panel-mesaj-cagri-takibi`
- **Özet:** “Dağınık kanalları tek düzene almak, kaçan fırsatları azaltır ve ekip odağını artırır.”
- **CTA:** “Yazıyı oku”

### Yazı 2
- **Başlık:** “7/24 otomatik karşılama ile kaçan talepler nasıl azalır?”
- **Slug:** `/flowasistan/blog/7-24-otomatik-karsilama`
- **Özet:** “Gece-gündüz otomatik yanıt, ilk temas hızını artırır ve fırsatların soğumasını önler.”
- **CTA:** “Yazıyı oku”

### Yazı 3
- **Başlık:** “Hangi metrikler gerçekten önemli? (Çağrı, mesaj, dönüşüm)”
- **Slug:** `/flowasistan/blog/onemli-metrikler`
- **Özet:** “Doğru metrikleri izlemek, iyileştirmeyi hızlandırır.”
- **CTA:** “Yazıyı oku”

> Blog sayfasında sağ/üst köşede mini CTA: **Kısa Bir Tanışma Planla** → `/flowasistan#randevu`

---

## Blog Yazı Şablonu (tüm yazılar için)
- Başlık (H1)
- 2–3 cümle giriş
- 3–5 alt başlık (H2)
- Her alt başlıkta kısa paragraf + 2–3 madde
- Yazı sonunda CTA banner:
  - “Sizinki de benzer bir süreç mi? 30 dakikada netleştirelim.”  
  - Buton: **Kısa Bir Tanışma Planla** → `/flowasistan#randevu`

---

## Yazı 1 — Tam içerik
**H1:** Tek panelden mesaj + çağrı takibi neden büyümeyi hızlandırır?

**Giriş:**  
Mesajlar ve aramalar farklı yerlerde kaldığında, fırsatlar kaçabilir ve ekip aynı işleri tekrar eder. Tek panel yaklaşımı, süreci görünür kılar ve hız kazandırır.

**H2:** Dağınıklık neden fırsat kaybettirir?
- Geç dönüş oranı artar
- Takip kişiye bağlı kalır
- Kimin ne zaman döneceği belirsizleşir

**H2:** Tek panel size ne kazandırır?
- Daha net takip düzeni
- Daha hızlı geri dönüş
- Daha temiz iş akışı

**H2:** Ölçmeden büyümek zor
- Çağrı sayısı
- Mesaj sayısı
- Dönüşüm
- Konuşma süresi
- Talep sayısı

**H2:** Hızlı başlangıç için 3 adım
- Önce en çok gelen kanal(lar)ı belirleyin
- En çok sorulan 10 soruyu çıkarın
- Takip adımlarını standartlaştırın

**CTA:** “Kısa bir tanışma planlayın” → `/flowasistan#randevu`

---

## Yazı 2 — Tam içerik
**H1:** 7/24 otomatik karşılama ile kaçan talepler nasıl azalır?

**Giriş:**  
İlk temas hızı, birçok sektörde karar anını belirler. Otomatik karşılama, fırsatların “soğumasını” engeller.

**H2:** Kaçan talep nerede olur?
- Mesai dışında gelen mesajlar
- Yoğun saatlerde kaçan çağrılar
- Yanıt beklerken rakibe giden müşteriler

**H2:** Otomatik karşılama nasıl yardımcı olur?
- Anında ilk yanıt
- Temel bilgi toplama
- Uygun yönlendirme / takip

**H2:** İyi bir otomatik karşılama için 3 kural
- Kısa ve net cevap
- Gereksiz uzun sohbet yok
- Bir sonraki adım net

**CTA:** “Kısa bir tanışma planlayın” → `/flowasistan#randevu`

---

## Yazı 3 — Tam içerik
**H1:** Hangi metrikler gerçekten önemli? (Çağrı, mesaj, dönüşüm)

**Giriş:**  
İyi metrikler, nerede iyileştirme yapacağınızı gösterir. Yanlış metrikler ise sizi oyalayabilir.

**H2:** Başlangıç için 5 temel metrik
- Kaç çağrı
- Kaç mesaj
- Kaç talep
- Konuşma süresi
- Dönüşüm

**H2:** Bu metrikler size ne söyler?
- Talep artışı mı var, yoksa sadece trafik mi?
- Konuşmalar uzuyor mu, kısalıyor mu?
- Dönüşüm artıyor mu?

**H2:** 2 haftalık mini kontrol rutini
- Haftalık karşılaştırma
- En çok sorulan 10 soru
- En iyi kapanan kanal

**CTA:** “Kısa bir tanışma planlayın” → `/flowasistan#randevu`
