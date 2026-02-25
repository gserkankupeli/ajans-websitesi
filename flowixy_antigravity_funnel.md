# Flowixy — Randevu Odaklı Funnel Sayfası (Antigravity Prompt MD)

> **Amaç (tek KPI):** Sayfaya giren işletme sahiplerini / yöneticileri **“Kısa Bir Tanışma Planla”** CTA’sıyla Calendly üzerinden **30 dakikalık tanışma & ihtiyaç keşfi görüşmesine** yönlendirmek.  
> **Ton:** Basit, anlaşılır, teknik olmayan, güven veren.  
> **Kısıtlar:** WhatsApp yok • Sosyal medya linki yok • KVKK / uyumluluk iddiası yok • Aşırı teknik terim yok • “Satış” kelimesi mümkünse hiç yok.

---

## 1) Sayfa Kimliği ve Genel Ayarlar

### Sayfa Adı / URL
- **Sayfa adı:** Flowixy — Yapay Zeka Otomasyonları
- **URL slug (öneri):** `/`

### SEO (Meta)
- **Title:** Flowixy | İşletmenize Özel Yapay Zeka Otomasyonları
- **Meta description:** İşletmenize özel yapay zeka destekli otomatik sistemlerle verimliliği artırın. Kısa bir tanışma görüşmesi planlayın; görüşme sonunda size özel “Öneri Planı” paylaşalım.
- **OG Title:** Flowixy | İşletmenize Özel Otomatik Sistemler
- **OG Description:** Kısa bir tanışma & ihtiyaç keşfi. Görüşme sonunda size özel Öneri Planı.
- **Favicon:** Basit “F” ikon (Flowixy) veya logo.

---

## 2) Tasarım Sistemi (Basit ve Modern)

### Renk Paleti (önerilen, düzenlenebilir)
- **Primary (koyu):** #0F172A (lacivert-koyu)
- **Text (ana):** #0B1220
- **Background:** #FFFFFF
- **Surface (kart arka plan):** #F8FAFC
- **Border:** #E2E8F0
- **Accent (CTA):** #2563EB (mavi)  
  - Hover: #1D4ED8
- **Muted text:** #475569

> Not: Markalaşma hazır değilse bu palet güvenli ve kurumsal görünür. Antigravity bu renklerle modern bir UI oluşturmalı.

### Tipografi
- **Başlık font:** Inter / SF Pro / benzeri modern sans (bold)
- **Metin font:** Inter / SF Pro / benzeri (regular)
- **H1:** 44–56px (desktop), 32–38px (mobile)
- **H2:** 30–36px
- **Body:** 16–18px
- **Line-height:** Başlıklarda 1.1–1.2, metinde 1.5–1.7

### Layout
- **Max width:** 1120px container
- **Section padding:** 72px (desktop), 48px (mobile)
- **Kartlar:** 16–20px radius, hafif gölge (çok abartmadan)
- **Buton:** 14–16px radius, belirgin

### Genel UX Kuralları
- Tek sayfa, **menü yok** (yalnızca sayfa içi anchor).
- CTA butonları aynı yere gider: **#randevu**
- Çok metin yok; kısa paragraflar + bullet.

---

## 3) Bileşenler (Global)

### Primary CTA Buton Metni
- **“Kısa Bir Tanışma Planla”**

### Secondary (varsa, buton değil link)
- **“E-posta ile ulaş: serkankupeli@flowixy.com”**

### Anchor ID’ler
- `#neler-yapiyoruz`
- `#ornekler`
- `#surec`
- `#sss`
- `#randevu`

---

## 4) Sayfa Yapısı ve Tam Metinler (Eksiksiz)

> Antigravity: Aşağıdaki bölümleri sırayla oluştur. Her bölümde başlık, metin, kartlar, CTA ve görselleri talimatlara göre üret.

---

### SECTION 0 — Sticky Header (Sabit Üst Bar)

**Sol:** Flowixy logo (metin logo da olabilir)  
**Sağ:** Primary CTA butonu

- **Buton:** “Kısa Bir Tanışma Planla” → `#randevu`’a scroll
- İsteğe bağlı anchor linkleri (çok küçük, sade):
  - Neler Yapıyoruz → `#neler-yapiyoruz`
  - Örnekler → `#ornekler`
  - Süreç → `#surec`

> Header minimalist olmalı; dikkat dağıtmasın.

---

### SECTION 1 — HERO (Above the Fold)

**Küçük üst etiket (eyebrow text):**  
“Bu sayfa genel bir özet. Görüşmede işinize özel örneklerle netleştiriyoruz.”

**H1 (ana vaat):**  
“Yapay zeka destekli otomatik sistemlerle işletmenizin verimliliğini artırıp daha çok kazanç elde etmenize yardımcı oluyoruz.”

**Alt başlık (1–2 cümle):**  
“Süreçlerinizi kısaca inceliyoruz, işinize ve sektörünüze uygun otomatikleştirme fırsatlarını belirliyoruz ve uygulanabilir bir Öneri Planı çıkarıyoruz.”

**3 bullet (kısa, net):**
- Tekrarlayan işleri azaltın (ekibiniz asıl işe odaklansın)  
- Talep ve takip sürecini düzene sokun (fırsatlar kaybolmasın)  
- İşinize özel otomatik sistemlerle hız kazanın (daha az karmaşa, daha net ilerleyiş)

**Primary CTA (büyük):**  
“Kısa Bir Tanışma Planla” → `#randevu`

**CTA alt mikro metin:**  
“Tanışma & ihtiyaç keşfi • Görüşme sonunda size özel Öneri Planı”

**Hero görsel (karmaşık değil):**  
Minimal bir illüstrasyon veya soyut görsel: “süreç → sistem → sonuç” hissi veren modern, sade bir görsel.  
> Asla n8n ekranı, node diyagramı, teknik arayüz göstermeyin.

---

### SECTION 2 — Problem / Maliyet (Genel Ajans İçin)

**H2:** “Büyümeyi yavaşlatan görünmeyen kayıplar”

**Metin (kısa paragraf):**  
“Birçok işletmede sorun ‘çalışmamak’ değil; aynı işleri tekrar tekrar yapmak, takipte dağınıklık ve süreçlerin kişilere bağlı kalması. Bu durum fırsatların kaçmasına, maliyetin artmasına ve büyümenin yavaşlamasına neden olur.”

**Semptom listesi (4 madde):**
- Talepler farklı kanallarda dağınık kalır, geri dönüş gecikir  
- Takip düzeni kişiye bağlı olur, bazı fırsatlar soğur  
- Tekrarlayan işler zaman yer, ekip yorulur  
- Net bir sistem olmadığı için “neyi iyileştireceğiz?” belirsiz kalır  

> Ton: yargılayıcı değil, “bu normal, çözümü var” hissi.

---

### SECTION 3 — Dream Outcome (İstenen Gelecek)

**H2:** “Sistem oturduğunda işler daha akıcı ilerler”

**4 madde:**
- Talepler düzenli toplanır ve doğru kişiye yönlenir  
- Takip hatırlatmaları ve rutin işler otomatikleşir  
- Süreçler standartlaşır, ekip daha hızlı hareket eder  
- Yönetim daha net görür, karar almak kolaylaşır  

---

### SECTION 4 — OFFER (Sayfanın Asıl Ürünü: Görüşme)

**H2:** “Kısa bir tanışma yapalım — size özel ‘Öneri Planı’ çıkaralım”

**Metin:**  
“Bu görüşme bir tanışma ve ihtiyaç keşfidir. İş modelinizi ve mevcut sürecinizi anlarız, ardından sektörünüze uygun 2–3 otomatik sistem fikrini netleştiririz.”

**3 adım (numaralı):**
1) Mevcut süreç ve hedeflerin hızlı analizi  
2) Size uygun otomatikleştirme alanlarının belirlenmesi  
3) Görüşme sonunda size özel **Öneri Planı** paylaşılması  

**CTA (tekrar):**  
“Kısa Bir Tanışma Planla” → `#randevu`

> Burada “satış” kelimesi geçmesin. “Baskı yok” gibi ifadeler de kullanılmasın; gerekirse “tanışma & keşif” vurgusu yeter.

---

### SECTION 5 — Neler Yapıyoruz? (Capabilities / Use-case Kartları)
**Anchor:** `#neler-yapiyoruz`

**H2:** “İşletmeler için kurduğumuz otomatik sistemlerden örnekler”

**Açıklama (1 cümle):**  
“İhtiyacınıza göre bu modülleri birleştiriyor ve işletmenize uygun bir sistem haline getiriyoruz.”

**5 kart (her kart: başlık + 1 cümle + 2 mini bullet):**

1) **Talep & takip düzeni**  
   “Taleplerin düzenli toplanması ve takip adımlarının netleşmesi.”  
   - Talepleri sınıflandırma  
   - Takip adımlarını standardize etme  

2) **Randevu & hatırlatma akışları**  
   “Randevu alma ve hatırlatma süreçlerini sadeleştiren çözümler.”  
   - Randevu planlama  
   - Hatırlatma ve yeniden planlama  

3) **Teklif & süreç hızlandırma**  
   “Teklif öncesi bilgi toplama ve süreci hızlandıran sistemler.”  
   - Bilgi/brief toplama  
   - Özetleme ve sonraki adımlar  

4) **İç operasyon otomatikleştirme**  
   “Rutin işler, bildirimler ve görevlerin otomatikleşmesi.”  
   - Görev atama / bildirim  
   - Düzenli rapor akışı  

5) **Müşteri iletişimi destek sistemleri**  
   “Sık sorular, yönlendirme ve ilk temas süreçlerinin düzenlenmesi.”  
   - İlk temas yönlendirme  
   - Sık sorulara hızlı dönüş  

> Kart ikonları basit olmalı (check, calendar, doc, gears, chat gibi).

---

### SECTION 6 — Proof (Kafa Karıştırmayan Kanıt)
**H2:** “Nasıl çalıştığını basitçe gösterelim”

**Alt metin:**  
“Karışık teknik detaylara girmeden, sürecin mantığı şu şekilde ilerler:”

**3 kutulu basit şema (görsel + metin):**
- **Girdi:** Talepler / mesajlar / formlar  
- **Sistem:** Düzenleme + takip + yönlendirme  
- **Çıktı:** Daha hızlı dönüş, daha düzenli süreç, daha net yönetim  

**Öneri Planı mockup (görsel):**  
Bir “1 sayfalık Öneri Planı” görseli üret (PDF/rapor görünümünde sade bir tasarım).  
Mockup üzerinde şu başlıklar görünsün:
- Öncelikli fırsatlar
- Önerilen yaklaşım
- Sonraki adımlar

> Burada n8n / node diyagramı yok. Sade infografik + rapor mockup yeter.

---

### SECTION 7 — Örnek Sistemler (Projeler)
**Anchor:** `#ornekler`

**H2:** “Üzerinde çalıştığımız sistemlerden bir örnek”

**Kart 1 — FlowAsistan**
- **Başlık:** “FlowAsistan”
- **Alt açıklama:** “Müşteri iletişimi + takip sürecini tek akışta toplayan yapay zeka destekli sistem.”
- **3 mini bullet:**
  - Talepleri karşılar ve yönlendirir  
  - Takip adımlarını düzenler  
  - Sürece göre kayıt/raporlama adımları eklenebilir  
- **Not:** “Detayları görüşmede sektörünüze göre örnekleyelim.”

**Kart 2 — Yakında**
- Başlık: “Talep Takip Sistemi (Yakında)”
- Kısa: “Talep toplama ve takip adımlarını tek düzende birleştiren yaklaşım.”

**Kart 3 — Yakında**
- Başlık: “Teklif & Takip Sistemi (Yakında)”
- Kısa: “Teklif sürecini hızlandıran ve takip düzeni kuran yaklaşım.”

> Kartlar sade; “ürünleştirilmiş modül” gibi durmalı.

---

### SECTION 8 — Süreç (Process)
**Anchor:** `#surec`

**H2:** “3 adımda ilerliyoruz”

**3 adım (ikonlu):**
1) Tanışma & ihtiyaç keşfi  
2) Öneri Planı ve yol haritası  
3) Uygunsa uygulama planı ve kurulum adımları  

> Süre yok, gün yok, rakam yok.

---

### SECTION 9 — SSS / İtiraz Kırıcı (FAQ)
**Anchor:** `#sss`

**H2:** “Sık sorulan sorular”

**Soru 1:** “Her sektör için uygun mu?”  
**Cevap:** “Evet. Biz sektör değil, süreç bazlı ilerleriz. İş modelinize göre en uygun sistemi öneririz.”

**Soru 2:** “Görüşmeden ne alacağım?”  
**Cevap:** “Görüşme sonunda size özel Öneri Planı paylaşırız.”

**Soru 3:** “Mevcut sistemlerimiz var, sorun olur mu?”  
**Cevap:** “Hayır. Mevcut işleyişinize göre en az sürtünmeyle ilerleyecek yaklaşımı seçeriz.”

**Soru 4:** “Görüşme ne kadar sürüyor?”  
**Cevap:** “Takvimde göreceğiniz şekilde kısa bir tanışma görüşmesidir.”

---

### SECTION 10 — Final CTA + Calendly Embed (Randevu)
**Anchor:** `#randevu`

**H2:** “Sektörünüze uygun 2–3 otomatik sistem fikriyle çıkın”

**Metin (1–2 cümle):**  
“Kısa bir tanışma yapalım. Mevcut sürecinizi dinleyip size özel Öneri Planı hazırlayalım.”

**Calendly Inline Embed (kopyala-yapıştır):**
> Antigravity: Aşağıdaki embed’de `USERNAME` ve slug alanını gerçek Calendly linkinle değiştir.

```html
<div class="calendly-inline-widget"
     data-url="https://calendly.com/USERNAME/flowixy-tanisma-gorusmesi-oneri-plani-30dk"
     style="min-width:320px;height:820px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

**Embed alt yardım satırı:**
“Bir sorun olursa: serkankupeli@flowixy.com”

---

### SECTION 11 — Footer
- Küçük logo/metin: “Flowixy”
- İletişim: **serkankupeli@flowixy.com**
- Basit telif: “© {YIL} Flowixy”

> Sosyal link yok.

---

## 5) Calendly Event Type (Takvim İçinde Ayarlanacak Metinler)

### Event Type Adı (takvimde görünecek)
**Flowixy Tanışma Görüşmesi — Öneri Planı (30 dk)**

### Event Description (Calendly açıklaması)
Kopyala-yapıştır:
“Bu görüşme kısa bir tanışma ve ihtiyaç keşfidir. Sürecinizi dinleyip sektörünüze uygun 2–3 fikir çıkarırız. Görüşme sonunda size özel Öneri Planı paylaşırım.”

### Invitee Questions (minimum sürtünme)
1) Firma adı (zorunlu)  
2) Sektör (zorunlu)  
3) Web sitesi (opsiyonel)  
4) En çok zaman alan iş/süreç hangisi? (zorunlu – tek cümle)  
5) Bu görüşmeden beklentin ne? (opsiyonel – 1 cümle)

---

## 6) Dönüşüm Optimizasyonu (Antigravity İçin Kurallar)

- Sayfa boyunca CTA toplam **en az 4 kez** geçsin:
  1) Header
  2) Hero
  3) Offer
  4) Final CTA / Randevu bölümü
- CTA butonları her zaman `#randevu`’a scroll etsin.
- Görseller sade ve “iş odaklı” olsun; teknik ekran görüntüsü yok.
- Metin blokları kısa; max 2–3 satır paragraf.
- Mobilde: kartlar tek sütun, CTA üstte görünür.

---

## 7) Antigravity İçin Çıktı Beklentisi
Antigravity, bu MD’ye göre **tek sayfalık** modern bir website oluşturmalı:
- Tam responsive
- Modern, kurumsal, minimal
- Tüm metinler yukarıdakiyle birebir
- Calendly inline embed çalışır
- Anchor scroll ve CTA’lar doğru çalışır

---

## 8) Değiştirilecek Placeholder’lar (Zorunlu)
- Calendly URL: `https://calendly.com/USERNAME/...` → gerçek link
- Logo: varsa ekle; yoksa “Flowixy” yazı logosu kullan
- Yıl: `{YIL}` → otomatik güncel yıl
