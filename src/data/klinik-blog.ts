// Blog veri modelleri ve statik içerikler (Klinik)

export interface KlinikBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export const klinikBlogPosts: KlinikBlogPost[] = [
  {
    slug: "kacan-cagrilar-randevu",
    title: "Kliniklerde Kaçan Çağrılar Randevuyu Nasıl Düşürür?",
    excerpt: "Kaçan çağrı, çoğu zaman kaçan randevu demektir. Nedenlerini ve çözüm yollarını ele alıyoruz.",
    content: `
      <h2>İletişim Trafiğinin Altında Ezilmek</h2>
      <p>Bir kliniğin başarısı sadece sunduğu tıbbi hizmetin kalitesiyle değil, hastanın kliniğe ulaşmaya çalıştığı o kritik "sıfır anında" sunduğu iletişim deneyimiyle de ölçülür. Yoğun hasta kabul saatlerinde, doktor görüşmelerinde veya mesai dışı zamanlarda çalan telefonların cevapsız kalması, basit bir iletişim kazası değildir; doğrudan ciro kaybıdır. Her kaçan çağrı, potansiyel bir hastanın rakip kliniğin numarasını tuşlaması anlamına gelir.</p>
      
      <h2>Kaçan Çağrılar Neden Artar?</h2>
      <p>Kliniklerde çağrı kaçırma oranlarının yüksek olmasının üç temel nedeni vardır:</p>
      <ul>
        <li><strong>Zirve Saatleri (Peak Hours) Yığılması:</strong> Hastalar genellikle sabah ilk saatlerde veya öğle aralarında aramaya eğilimlidir. Banko görevlisinin aynı anda hem fiziki bir hastayla ilgilenip hem de telefona bakması fiziksel olarak mümkün değildir.</li>
        <li><strong>Bilgi Telafisi Amacıyla Gelen Aramalar:</strong> "Açılış saatiniz nedir?", "Botoks fiyatınız ne kadar?" veya "Klokasyonunuz tam olarak neresi?" gibi web sitenizde zaten yazan bilgileri teyit etmek için gelen yüzlerce basit arama, hatları meşgul ederek gerçekten randevu alacak hastaların size ulaşmasını engeller.</li>
        <li><strong>Parçalı İletişim Kanalları:</strong> WhatsApp'tan gelen mesaja ayrı, Instagram DM'sine ayrı, telefona ayrı odaklanmaya çalışan sekreteryanın dikkat dağınıklığı yaşaması kaçınılmazdır.</li>
      </ul>
      
      <h2>İlk Yanıt Hızının Çarpıcı Etkisi</h2>
      <p>Tüketici davranışları araştırmaları açıkça gösteriyor: Tıbbi ve estetik hizmet arayan hastalar, kararlarını impulsif (anlık) bir şekilde verirler. İhtiyaç anında kliniğe ulaşamadıklarında "Bekleyeyim de yarın tekrar ararım" demezler; Google haritalarda bir alt sıradaki kliniği ararlar. Geç dönüş yapmak, o hastayı kaybetmeye eşdeğerdir.</p>
      
      <h2>Çözüm: Teknolojiyi Asistana Çevirmek</h2>
      <p>Bu sorunu çözmek için kliniğe sürekli yeni personel işe almak hem maliyetli hem de verimsizdir. Modern çözüm; <strong>7/24 hizmet veren, sık sorulan soruları saniyeler içinde anında yanıtlayan ve sadece randevu / işlem talebi kesinleşen nitelikli hastaları banko görevlisine aktaran yapay zeka destekli otomatik karşılama sistemleridir.</strong> Tüm iletişim kanallarını tek bir CRM panelinde toplayarak, sıfır çağrı kaybı ve maksimum randevu dönüşümü elde etmek artık bir lüks değil, zorunluluktur.</p>
    `,
    date: "2024-05-10",
    readTime: "3 dk",
    coverImage: "/blog/klinik_missed_calls.png",
    author: {
      name: "Serkan Küpeli",
      avatar: "/sadece_logo.svg",
      role: "Kurucu, Flowixy"
    }
  },
  {
    slug: "hizli-donus-randevu",
    title: "Hasta Sorularına Hızlı Dönüş Randevuyu Neden Artırır?",
    excerpt: "İlk yanıt hızının hasta kararına etkisi düşündüğünüzden daha büyük olabilir.",
    content: `
      <h2>Güven, Hızla Başlar</h2>
      <p>Sağlık ve medikal estetik sektöründe "güven" her şeydir. Hasta, vücudunu veya sağlığını emanet edeceği kliniği seçerken sadece hekimin kalitesine değil, kliniğin kendisine ne kadar değer verdiğine bakar. Bu değerin ilk somut göstergesi ise, hastanın sorduğu soruya aldığı yanıtın <strong>hızı ve kalitesidir.</strong> Hastanın kafasındaki şüpheyi anında gideren bir klinik, o hastanın zihnindeki rekabeti o saniye bitirmiş olur.</p>
      
      <h2>Hastalar En Çok Neleri Sorar?</h2>
      <p>Kliniğe gelen dijital temasların (mesaj, yorum, DM) yaklaşık %70'i birbiriyle tamamen aynıdır:</p>
      <ul>
        <li><strong>İşlem Detayları:</strong> "Bu işlemin iyileşme süreci nasıldır?", "Ağrılı bir operasyon mu?"</li>
        <li><strong>Lojistik ve Zaman:</strong> "Cumartesi günleri açık mısınız?", "Kliniğiniz tam olarak nerede?"</li>
        <li><strong>Maliyet:</strong> "Ortalama fiyat aralığınız nedir?", "Taksit imkanınız var mı?"</li>
      </ul>
      
      <h2>Bekleme Süresi = Rakibe Giden Hasta</h2>
      <p>Bir hasta örneğin lazer epilasyon veya saç ekimi fiyatı sorduğunda yanıtı 4 saat sonra alırsa, o arada çoktan 3 farklı klinikten fiyat almış ve birinden randevu oluşturmuş olma ihtimali çok yüksektir. "Mesajınıza en kısa sürede dönüş yapılacaktır" şeklindeki otomatik ama ruhsuz yanıtlar artık yeterli değildir. Hastaya <strong>tam o anda, kişiselleştirilmiş ve net bir yanıt</strong> verilmesi gerekir.</p>

      <h2>Oyunun Kurallarını Değiştirmek</h2>
      <p>Hızlı dönüş yapmak, klinik ekibinizin elinden telefonu hiç düşürmemesi demek değildir. Doğru yapılandırılmış bir otomasyon; hastanın sorusunun kelime analizini yapar, içeriğe göre uygun yanıt şablonunu anında gönderir ve hastayı saniyeler içinde "Randevu Planlama" aşamasına geçirir. Güven, hızla başlar; randevu ile sonuçlanır.</p>
    `,
    date: "2024-05-15",
    readTime: "2 dk",
    coverImage: "/blog/klinik_fast_response_ui.png",
    author: {
      name: "Serkan Küpeli",
      avatar: "/sadece_logo.svg",
      role: "Kurucu, Flowixy"
    }
  },
  {
    slug: "7-24-otomatik-karsilama-klinik",
    title: "7/24 Otomatik Karşılama Klinikte Ekip Yükünü Nasıl Azaltır?",
    excerpt: "Tekrarlayan sorular ve yoğun saatler… Otomatik karşılama burada devreye girer.",
    content: `
      <h2>Tükenmişlik Sendromu Yaşayan Klinik Ekipleri</h2>
      <p>Başarılı ve büyüyen bir kliniğin en büyük paradoksu, artan taleple birlikte ön büro ve çağrı merkezi ekibinin üzerindeki idari yükün ezici bir hal almasıdır. Sabah saat 09:00'da kapılar açıldığında; bir yandan klinikte fiziksel olarak bekleyen hastaların kaydı yapılırken, diğer yandan çalan telefonlara yetişmeye çalışmak, üstüne gece boyunca WhatsApp ve Instagram'dan biriken yüzlerce "Fiyat nedir?" mesajına yanıt yazmak tam bir kaostur. Bu durum ekibin motivasyonunu düşürürken, hata yapma payını artırır.</p>
      
      <h2>Otomatik Karşılama Gerçekte Ne Yapar?</h2>
      <p>Modern bir 7/24 Otomatik Karşılama asistanı, bir "Telesekreter" değildir. İnsan gibi anlayan, yönlendiren ve filtreleyen akıllı bir katmandır.</p>
      <ul>
        <li><strong>Filtreleme Katmanı:</strong> Basit ve tekrarlayan soruları (Konum, Saat, Standart İşlem Bilgisi) ekibin önüne düşmeden saniyeler içinde çözer.</li>
        <li><strong>Nitelikli Randevu Toplayıcı:</strong> Gece saat 02:00'de ilanınızı görüp yazan hastanın iletişim bilgilerini, ilgilendiği işlemi ve uygun gününü alır, sabah ekibinize "Hazır bir randevu talebi" (Warm Lead) olarak teslim eder.</li>
        <li><strong>Kriz Yöneticisi:</strong> Klinik yoğun olduğunda telefonu açamasanız bile anında WhatsApp'tan otomatik bir SMS/Mesaj göndererek "Şu an doktor görüşmesindeyiz, detayları buradan iletirseniz hemen size döneceğiz" der ve müşterinin öfkelenip gitmesini engeller.</li>
      </ul>
      
      <h2>Ekibe Kazandırılan "Değerli" Zaman</h2>
      <p>Yapay zeka asistanı idari ve tekrarlayan işleri devraldığında, banko görevliniz ve satış danışmanlarınız ne kazanır? <strong>Nitelikli hastaya ayıracakları kaliteli zamanı.</strong> Sadece gerçekten randevu alacak, operasyon geçirecek yüksek değerdeki hastalarla derin ve ikna edici görüşmeler yapabilirler. Tekrar işleri azalır, takip düzeni sağlanır ve yöneticiler için "Kim ne sordu, biz ne dedik?" kargaşası son bulur.</p>
    `,
    date: "2024-05-20",
    readTime: "3 dk",
    coverImage: "/blog/klinik_automation_core.png",
    author: {
      name: "Serkan Küpeli",
      avatar: "/sadece_logo.svg",
      role: "Kurucu, Flowixy"
    }
  }
];

export function getKlinikPostBySlug(slug: string): KlinikBlogPost | undefined {
  return klinikBlogPosts.find(post => post.slug === slug);
}
