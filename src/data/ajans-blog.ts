export interface AjansBlogPost {
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

export const ajansBlogPosts: AjansBlogPost[] = [
  {
    slug: "potansiyel-musteri-mesajlari-yanitsiz-kaliyor",
    title: "Ajansınıza Gelen Potansiyel Müşteri Mesajları Neden Yanıtsız Kalıyor?",
    excerpt: "Yeni müşteri mesajına geç dönmek artık 'nezaketsizlik' değil, direkt müşteri kaybıdır. Nedenleri ve çözüm yolunu ele alıyoruz.",
    content: `
      <h2>Mesaj Geliyor, Ekip Meşgul</h2>
      <p>Ajans sahibinin en büyük çelişkisi şudur: müşteri bulmak için para harcıyor, ama gelen müşteri adaylarına saatler sonra dönüyor. Bu boşluk, çoğu zaman farkında olmadan yaşanır. Ekip proje teslimatıyla, raporlarla, müşteri toplantılarıyla meşgulken WhatsApp'tan ya da web sitesinden yeni bir talep gelir. Kimse bakmaz. 2-3 saat sonra birisi görür. O potansiyel müşteri o sürede başka bir ajansla konuşmuş olabilir.</p>

      <h2>Neden Hızlı Dönmek Bu Kadar Zor?</h2>
      <p>Sorun ihmal değil, yapısal bir boşluktur. Ajanslarda yeni müşteri taleplerine bakan ayrı bir ekip genellikle yoktur. Gelen mesajlara kim döneceği belirsizdir. Bazen kurucu döner, bazen hesap yöneticisi, bazen kimse. Bu belirsizlik, her geçen dakikada müşteri kaybına dönüşür.</p>
      <ul>
        <li><strong>Kanal dağınıklığı:</strong> WhatsApp, Instagram DM, web sitesi formu, e-posta — hepsi farklı yerde, hiçbiri önceliklendirilmemiş.</li>
        <li><strong>Mesai dışı talepler:</strong> Potansiyel müşterilerin büyük kısmı akşam saatlerinde mesaj atar. O saatte kimse yoktur.</li>
        <li><strong>Ekibin mevcut yükü:</strong> Var olan müşterilere hizmet verirken yeni taleplere anında dönmek mümkün olmaz.</li>
      </ul>

      <h2>Yavaş Yanıtın Gerçek Maliyeti</h2>
      <p>Potansiyel bir müşteri mesaj attığında, karar alma süreci başlamıştır. O anda güven veren, hızlı dönüş yapan ajans lehine karar verilir. Araştırmalar, ilk 5 dakika içinde dönen işletmelerin dönüşüm oranının saatler sonra dönenlerden çok daha yüksek olduğunu gösteriyor. Dijital pazarlama ajansları bunu kendi müşterileri için savunur; ama kendi taleplerinde aynı hızı uygulamaz.</p>

      <h2>Çözüm: Karşılamayı Otomatikleştirmek</h2>
      <p>Yeni ekip üyesi işe almak bu sorunu çözmez — yapısal sorunu yapısal bir çözümle gidermek gerekir. Tüm kanallardan gelen talepleri anında karşılayan, temel soruları yanıtlayan ve hizmet ihtiyacını önceden toplayan bir otomatik karşılama sistemi, ajansın hiçbir talebi kaçırmamasını sağlar. Ekip sabah paneli açtığında nitelikli bilgiyle hazır bir lead görür, sıfırdan başlamaz.</p>
    `,
    date: "2026-04-01",
    readTime: "4 dk",
    coverImage: "/blog/automation-agency.png",
    author: {
      name: "Serkan Küpeli",
      avatar: "/sadece_logo.svg",
      role: "Kurucu, Flowixy"
    }
  },
  {
    slug: "kesif-gorusmelerinde-zaman-kaybi",
    title: "Keşif Görüşmelerinde Zaman Kaybını Nasıl Azaltırsınız?",
    excerpt: "Her keşif görüşmesi fırsat değildir. Uygun olmayan adayları önceden elemek ajansın en değerli kaynağını — zamanı — korur.",
    content: `
      <h2>Her Görüşme Eşit Değildir</h2>
      <p>Ajans sahipleri keşif görüşmelerine çok zaman harcar. Çünkü "belki uygun çıkar" umuduyla her talebi görüşmeye taşır. Ama görüşmenin ilk 10 dakikasında anlaşılır: bütçe tutmuyor, hedef yok, zaman çizelgesi gerçekçi değil. O görüşme için ayrılan 30-45 dakika ve hazırlık süresi harcanmıştır.</p>

      <h2>Uygun Olmayan Lead Neden Görüşmeye Geliyor?</h2>
      <p>Çünkü talep geldiğinde hiçbir ön eleme yapılmıyor. "Mesaj attı, toplantı isteyelim" refleksiyle hareket ediliyor. Oysa üç basit soru, görüşmeye gerek olup olmadığını baştan netleştirebilir:</p>
      <ul>
        <li>Aylık bütçeniz ne kadar?</li>
        <li>Hangi hizmete ihtiyaç duyuyorsunuz?</li>
        <li>Ne zaman başlamayı planlıyorsunuz?</li>
      </ul>
      <p>Bu soruların cevabı önceden alınırsa, görüşme kalitesi artar, sayısı azalır. Ajans daha az görüşmeyle daha fazla müşteri kazanır.</p>

      <h2>Ön Eleme Neden Yapılmıyor?</h2>
      <p>Manuel süreçlerde bu soruları sormak için biri mesajlaşmak zorunda. Bu da zaman alır, cevap gelmeyebilir, takip gerekir. Çoğu zaman "zaten görüşmede sorarız" diye geçilir. Sonuç: niteliksiz görüşmeler, boşa harcanan enerji.</p>

      <h2>Otomatik Nitelendirme ile Fark</h2>
      <p>Talebin ilk anında devreye giren bir otomatik nitelendirme akışı, görüşmeye gerek olmadan bu bilgileri toplar. Ekip, sabah paneli açtığında hangi talebin görüşmeye değer olduğunu zaten bilir. Gereksiz görüşmeler ortadan kalkar; keşif toplantıları gerçek fırsatlara odaklanır.</p>
    `,
    date: "2026-04-08",
    readTime: "3 dk",
    coverImage: "/blog/sales-automation.png",
    author: {
      name: "Serkan Küpeli",
      avatar: "/sadece_logo.svg",
      role: "Kurucu, Flowixy"
    }
  },
  {
    slug: "ajans-buyudukce-iletisim-neden-karisiklasir",
    title: "Ajans Büyüdükçe Müşteri İletişimi Neden Karmaşık Hale Gelir?",
    excerpt: "2 müşteriyle çalışırken WhatsApp yeterliydi. 15 müşteriyle çalışırken her şey karışır. Bu geçiş dönemini yönetmek için ne gerekir?",
    content: `
      <h2>Başlangıçta Her Şey Basitti</h2>
      <p>Ajansın ilk günlerinde iletişim kolaydır. Az müşteri, az ekip, az kanal. Kurucu her mesajı kendisi yanıtlar, her talebi takip eder. Bu aşamada sistem gerekmez — kişisel dikkat yeterlidir.</p>

      <h2>Büyüme Başladığında Sistem Devreye Girmezse</h2>
      <p>Müşteri sayısı arttıkça aynı yöntem çalışmaz. 10-15 müşteriyle çalışan bir ajansta iletişim trafiği katlanır ama yapı aynı kalır: herkese WhatsApp, her şey karışık, takip eksik. Şu sorunlar ortaya çıkar:</p>
      <ul>
        <li><strong>Kimin neyi sorduğu karışır:</strong> Farklı müşterilerin farklı kanallardan gelen mesajları takip edilemez hale gelir.</li>
        <li><strong>Yeni talepler gözden kaçar:</strong> Mevcut müşterilerle ilgilenirken yeni gelen potansiyel müşteri mesajları yanıtsız kalır.</li>
        <li><strong>Ekip koordinasyonu zorlaşır:</strong> Kim hangi mesajı gördü, kim döndü, takip edilemiyor.</li>
        <li><strong>Kurucu operasyona gömülür:</strong> Büyüme için düşünmesi gerekirken günlük mesaj trafiğini yönetmekle geçer.</li>
      </ul>

      <h2>Yapısal Geçiş: Kişisel Dikkatten Sisteme</h2>
      <p>Ajansın büyümesi için iletişimi kişisel dikkate bağımlı olmaktan çıkarmak gerekir. Bu geçiş ne kadar erken yapılırsa, büyüme o kadar sağlıklı olur. Gelen tüm talepleri tek bir panelde toplayan, yanıtları otomatikleştiren ve ekibe sadece nitelikli işleri ileten bir sistem, ajansın büyüdükçe karmaşıklaşmasını engeller.</p>

      <h2>Büyüme ile Birlikte Skalayan İletişim</h2>
      <p>İdeal sistem şudur: 2 müşteriyle çalışırken de, 50 müşteriyle çalışırken de aynı netlikle çalışır. Yeni talep geldiğinde otomatik karşılanır, nitelendirilir, panele düşer. Ekip sadece görüşmeye hazır adaylarla ilgilenir. Kurucu operasyona gömülmek yerine işini büyütmeye odaklanır.</p>
    `,
    date: "2026-04-15",
    readTime: "4 dk",
    coverImage: "/blog/smart-ai-assistant.png",
    author: {
      name: "Serkan Küpeli",
      avatar: "/sadece_logo.svg",
      role: "Kurucu, Flowixy"
    }
  }
];

export function getAjansPostBySlug(slug: string): AjansBlogPost | undefined {
  return ajansBlogPosts.find((post) => post.slug === slug);
}
