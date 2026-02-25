// Blog veri modelleri ve statik içerikler

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML veya Markdown olabilir, şimdilik HTML/JSX string tutacağız
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "yapay-zeka-ile-ajans-sureclerini-nasil-otomatize-edersiniz",
    title: "Yapay Zeka İle Ajans Süreçlerini Nasıl Otomatize Edersiniz?",
    excerpt: "Geleneksel ajans operasyonları yerini yapay zeka destekli otonom sistemlere bırakıyor. Tekrarlayan işleri sıfıra indiren yeni nesil çalışma modellerini inceleyelim.",
    content: `
      <h2>Operasyonel Yükü Hafifletin</h2>
      <p>Modern dijital ajanslar ve danışmanlık firmaları, büyümenin önündeki en büyük engelin 'operasyonel darboğazlar' olduğunu biliyor. Müşteri taleplerini toplamak, teklif hazırlamak, onay süreçlerini yönetmek ve raporlama yapmak... Bunların hepsi ekiplerin değerli vaktini alıyor.</p>
      <p>Yapay zeka araçları artık sadece içerik üretmekle kalmıyor, aynı zamanda bu iş süreçlerini birbirine bağlayan <strong>sinir sistemleri</strong> haline geliyor.</p>
      
      <h2>Nereden Başlamalı?</h2>
      <ul>
        <li><strong>Talep Yönetimi (Lead Triage):</strong> Web sitenizden veya sosyal medyadan gelen talepleri otomatik olarak nitelendirin ve doğru departmana atayın.</li>
        <li><strong>Toplantı Notları ve Briefler:</strong> Müşteri görüşmelerinden otomatik brief özetleri çıkarıp proje yönetim araçlarına (Jira, Asana, Trello) aktarın.</li>
        <li><strong>Onay Mekanizmaları:</strong> Tasarım veya yazılım çıktılarını belirli kriterlere göre otomatik ön kontrolden geçirin.</li>
      </ul>

      <p>Flowixy olarak, bu sistemlerin her birini sizin mevcut araçlarınıza (Slack, WhatsApp, CRM) entegre ediyoruz. Unutmayın, geleceğin başarılı ajansları <em>daha çok çalışan</em> değil, <em>otomasyonu daha zeki kullanan</em> ajanslar olacak.</p>
    `,
    coverImage: "/blog/automation-agency.png",
    date: "2024-03-15",
    author: {
      name: "Serkan Küpeli",
      avatar: "/sadece_logo.svg",
      role: "Kurucu, Flowixy"
    },
    readTime: "4 dk",
    tags: ["Otomasyon", "Ajans Yönetimi", "Yapay Zeka"]
  },
  {
    slug: "musteri-iliskilerinde-7-24-akilli-asistan-donemi",
    title: "Müşteri İlişkilerinde 7/24 Akıllı Asistan Dönemi",
    excerpt: "Müşterileriniz anında yanıt bekliyor. Geleneksel chatbotların ötesine geçen, bağlamı anlayan ve aksiyon alabilen akıllı asistanların (AI Agent) işletmelere katkıları.",
    content: `
      <h2>Chatbot Değil, 'Digital Çalışan'</h2>
      <p>Geçmişte chatbotlar yalnızca sık sorulan sorulara önceden tanımlanmış sabit cevaplar verebilen kısıtlı botlardı. Günümüzdeki <strong>LLM (Large Language Models)</strong> destekli asistanlar ise bağlamı anlayan, firmanızın bilgi bankasını tarayabilen ve inisiyatif alıp işlem yapabilen 'dijital çalışanlar' konumundadır.</p>
      
      <h3>Bir Akıllı Asistan Neler Yapabilir?</h3>
      <p>Siz uyurken veya ekibiniz başka bir projeye odaklanmışken, akıllı asistanınız şunları yönetebilir:</p>
      <ul>
        <li>Potansiyel müşterinin ihtiyacını analiz edip başlangıç teklifi formunu doldurtmak.</li>
        <li>Dolu takviminize bakarak en uygun boş vakte otomatik randevu oluşturmak (Calendly vb. entegrasyonu ile).</li>
        <li>Mevcut müşterilerin sipariş kargo durumunu veya hizmet abonelik aşamasını sistemden çekip anında yanıtlamak.</li>
      </ul>

      <h2>Maliyet Merkezi Değil, Kâr Merkezi</h2>
      <p>İyi kurgulanmış bir AI asistanı, müşteri destek maliyetlerini düşürmenin ötesinde, kaçan satış fırsatlarını yakalar. Pazar gecesi saat 02:00'de web sitenize giren bir ziyaretçiyi dahi kaliteli bir 'Lead' haline getirebilirsiniz.</p>
    `,
    coverImage: "/blog/smart-ai-assistant.png",
    date: "2024-04-02",
    author: {
      name: "Serkan Küpeli",
      avatar: "/sadece_logo.svg",
      role: "Kurucu, Flowixy"
    },
    readTime: "3 dk",
    tags: ["Müşteri İlişkileri", "AI Agents", "Büyüme"]
  },
  {
    slug: "teklif-ve-satis-sureclerini-hizlandiran-sistemler",
    title: "Teklif Ve Satış Süreçlerini Hızlandıran Sistemler",
    excerpt: "Satış ekibinizin vaktini veri girişiyle değil, satış kapatarak geçirmesini sağlayın. CRM ile WhatsApp/Mail entegrasyonu hayatınızı nasıl kurtarabilir?",
    content: `
      <h2>Satış Süreçlerindeki 'Görünmez Kapan'</h2>
      <p>Bir satış profesyonelinin gününün ne kadarı gerçek bir görüşme yapmakla, ne kadarı CRM'e veri girmek, teklif PDF'i hazırlamak ve toplantı notu yazmakla geçiyor? Araştırmalar, B2B satış ekiplerinin vaktinin büyük kısmını <strong>idari ve tekrarlayan işlere</strong> harcadığını gösteriyor.</p>

      <h2>Sürtünmesiz Satış (Frictionless Sales)</h2>
      <p>Bu sorunu çözmek için satış aşamalarındaki manuel tetikleyicileri otomatize etmek gerekir.</p>
      <ol>
        <li><strong>Toplantı Sonrası Otomasyonu:</strong> Görüşme biter bitmez yapay zeka toplantı kaydını alır, özetler ve CRM'de fırsat (deal) kaydını günceller.</li>
        <li><strong>Teklif Üretimi:</strong> Müşteriden alınan spesifik isteklere göre (Fiyat, Teslim Süresi, Hizmet Kapsamı) taslak bir teklif dokümanı saniyeler içinde Google Docs veya PDF olarak hazırlanır.</li>
        <li><strong>Otomatik Takip (Follow-up):</strong> Teklif gönderildikten 3 gün sonra, müşteri e-postayı açmış ancak dönmemişse nazik bir WhatsApp hatırlatması otomatik olarak gönderilir.</li>
      </ol>

      <p>Flowixy'nin kurguladığı sistemler, satış ekibinin omuzlarındaki bu yükü alır ve onların sadece insan becerisi gerektiren kısma -yani ilişki yönetimine ve iknaya- odaklanmasını sağlar.</p>
    `,
    coverImage: "/blog/sales-automation.png",
    date: "2024-04-20",
    author: {
      name: "Serkan Küpeli",
      avatar: "/sadece_logo.svg",
      role: "Kurucu, Flowixy"
    },
    readTime: "5 dk",
    tags: ["Satış", "CRM", "Otomasyon"]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
