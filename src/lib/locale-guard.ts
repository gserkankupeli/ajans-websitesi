import { notFound } from "next/navigation";

/**
 * Henüz İngilizceye taşınmamış (Türkiye pazarına özel yazılmış) bölümler için.
 *
 * İngilizce sürümde bu sayfaların yarım/Türkçe görünmesindense hiç görünmemesi
 * tercih edilir. İçerik İngilizceye taşındığında ilgili layout'tan bu çağrı
 * kaldırılır.
 */
export function turkishOnly(locale: string) {
    if (locale !== "tr") {
        notFound();
    }
}
