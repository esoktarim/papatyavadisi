import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  MapPin, Bed, Home, Ruler, ChevronLeft, ChevronRight, 
  Share2, Heart, Bath, Phone, MessageCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import img1 from "@/ev/1.png";
import img5 from "@/ev/5.png";
import img6 from "@/ev/6.png";
import img8 from "@/ev/8.png";
import img10 from "@/ev/10.png";
import img11 from "@/ev/11.png";
import img13 from "@/ev/13.png";
import img16 from "@/ev/16.png";
import img17 from "@/ev/17.png";
import img22 from "@/ev/22.png";
import img23 from "@/ev/23.png";
import tekKatli1 from "@/tek katlı ev/1.png";
import tekKatli2 from "@/tek katlı ev/2.png";
import tekKatli3 from "@/tek katlı ev/3.png";
import tekKatli4 from "@/tek katlı ev/4.png";
import tekKatli7 from "@/tek katlı ev/7.png";
import tekKatli9 from "@/tek katlı ev/9.png";
import tekKatli12 from "@/tek katlı ev/12.png";
import tekKatli15 from "@/tek katlı ev/15.png";
import tekKatli16 from "@/tek katlı ev/16.png";
import tekKatli17 from "@/tek katlı ev/17.png";

interface HouseDetailProps {
  language: "tr" | "en";
  onLanguageChange: (lang: "tr" | "en") => void;
}

const HouseDetail = ({ language, onLanguageChange }: HouseDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const houses = {
    "cift-katli-villa": {
      tr: {
        title: "Çift Katlı Villa",
        location: "Kadirli",
        price: "İletişime Geçin",
        features: {
          room: "3+1",
          area: "144 m²",
          land: "385-480 m²",
          age: "Yeni",
          floor: "2 Kat",
          bathroom: "1 banyo (üst), 1 WC (alt)",
          parking: "Var",
        },
        description: "Kadirli’de yer alan Papatya Vadisi Çift Katlı Villa, doğanın kalbinde modern çizgilerle yükselir. Ahşap lambri cephesi, geniş terası ve ferah planı ile aile yaşamını ayrıcalıklı kılar. 24 ay %0 faiz avantajı ve özenli peyzajıyla projeye prestij katıyor. Akıllı depolama ve yüksek tavan detayları ise her gününüzü konforlu geçirmenizi sağlar.",
        details: {
          genel: [
            { label: "Oda Sayısı", value: "3+1" },
            { label: "Banyo Sayısı", value: "1 banyo (üst), 1 WC (alt)" },
            { label: "Brüt Alan", value: "144 m²" },
            { label: "Net Alan", value: "120.36 m²" },
            { label: "Arsa Büyüklüğü", value: "385-480 m²" },
            { label: "Bina Yaşı", value: "Yeni" },
            { label: "Kat Sayısı", value: "2" },
            { label: "Balkon", value: "Yok" },
            { label: "Bahçe", value: "Var" },
            { label: "Otopark", value: "Açık" },
            { label: "Teras", value: "Var (18.20 m²)" },
            { label: "Eşyalı", value: "Hayır" },
            { label: "Kullanım Durumu", value: "Boş" },
            { label: "Krediye Uygun", value: "Evet" },
          ],
          icOzellikler: [
            { label: "Isıtma", value: "Merkezi" },
            { label: "Doğrama", value: "PVC (Ahşap panjurlu)" },
            { label: "Zemin", value: "Ahşap-seramik" },
            { label: "Salon Zemin", value: "Ahşap lambri" },
            { label: "Mutfak Zemin", value: "Ahşap lambri" },
            { label: "Mutfak", value: "Açık-kapalı mutfak" },
            { label: "Giriş Zemin", value: "Ahşap görünümlü seramik" },
            { label: "Banyo Zemin", value: "Seramik" },
            { label: "Banyo Duvar", value: "Fayans" },
            { label: "Asansör", value: "Yok" },
            { label: "Duvar", value: "Ahşap lambri" },
            { label: "Tavan", value: "Ahşap lambri" },
          ],
          disOzellikler: [
            { label: "Bahçe", value: "Var" },
            { label: "Balkon", value: "Yok" },
            { label: "Teras", value: "Var" },
            { label: "Otopark", value: "Açık" },
            { label: "Çocuk Oyun Alanı", value: "Yakın" },
            { label: "Market", value: "Yakın" },
          ],
        },
      },
      en: {
        title: "Two-Story Villa",
        location: "Kadirli",
        price: "Contact Us",
        features: {
          room: "3+1",
          area: "144 m²",
          land: "385-480 m²",
          age: "New",
          floor: "2 Floors",
          bathroom: "1 bathroom (upper), 1 WC (lower)",
          parking: "Yes",
        },
        description: "Papatya Vadisi Two-Story Villa in Kadirli rises with a contemporary silhouette amidst nature. The wooden facade, generous terrace and airy layout elevate everyday family life. Exclusive landscaping and the 24-month 0% interest plan add prestige to the project. Smart storage touches and lofty ceilings ensure lasting comfort.",
        details: {
          genel: [
            { label: "Room Count", value: "3+1" },
            { label: "Bathroom Count", value: "1 bathroom (upper), 1 WC (lower)" },
            { label: "Gross Area", value: "144 m²" },
            { label: "Net Area", value: "120.36 m²" },
            { label: "Land Size", value: "385-480 m²" },
            { label: "Building Age", value: "New" },
            { label: "Floor Count", value: "2" },
            { label: "Balcony", value: "No" },
            { label: "Garden", value: "Yes" },
            { label: "Parking", value: "Open" },
            { label: "Terrace", value: "Yes (18.20 m²)" },
            { label: "Furnished", value: "No" },
            { label: "Usage Status", value: "Empty" },
            { label: "Eligible for Loan", value: "Yes" },
          ],
          icOzellikler: [
            { label: "Heating", value: "Central" },
            { label: "Frames", value: "PVC (Wooden shutters)" },
            { label: "Flooring", value: "Wood-ceramic" },
            { label: "Living Room Floor", value: "Wooden paneling" },
            { label: "Kitchen Floor", value: "Wooden paneling" },
            { label: "Kitchen", value: "Open-closed kitchen" },
            { label: "Entrance Floor", value: "Wood-look ceramic" },
            { label: "Bathroom Floor", value: "Ceramic" },
            { label: "Bathroom Wall", value: "Tiles" },
            { label: "Elevator", value: "No" },
            { label: "Wall", value: "Wooden paneling" },
            { label: "Ceiling", value: "Wooden paneling" },
          ],
          disOzellikler: [
            { label: "Garden", value: "Yes" },
            { label: "Balcony", value: "No" },
            { label: "Terrace", value: "Yes" },
            { label: "Parking", value: "Open" },
            { label: "Playground", value: "Nearby" },
            { label: "Market", value: "Nearby" },
          ],
        },
      },
      images: {
        exterior: img1,
        interior: [img5, img6, img8, img10, img11, img13, img16, img17, img22, img23],
      },
    },
    "tek-katli-villa": {
      tr: {
        title: "Tek Katlı Villa",
        location: "Kadirli",
        price: "İletişime Geçin",
        features: {
          room: "3+1",
          area: "110 m²",
          land: "407-510 m²",
          age: "Yeni",
          floor: "1 Kat",
          
          parking: "Var",
        },
        description: "Kadirli’deki Papatya Vadisi Tek Katlı Villa, modern yaşamı tek seviyede konforla buluşturur. Ahşap lambri cephe ve geniş teras doğayla bütünleşik bir atmosfer yaratır. Geniş arsa yapısı ve özenli peyzaj günlük rutini ferahlatır. Akıllı planlı iç mekanlar ise tüm aile için pratik çözümler sunar.",
        details: {
          genel: [
            { label: "Oda Sayısı", value: "3+1" },
            { label: "Banyo Sayısı", value: "1 banyo (üst), 1 WC (alt)" },
            { label: "Brüt Alan", value: "110 m²" },
            { label: "Net Alan", value: "97.89 m²" },
            { label: "Arsa Büyüklüğü", value: "407-510 m²" },
            { label: "Bina Yaşı", value: "Yeni" },
            { label: "Kat Sayısı", value: "1" },
            { label: "Balkon", value: "Yok" },
            { label: "Bahçe", value: "Var" },
            { label: "Otopark", value: "Açık" },
            { label: "Teras", value: "Var (14.97 m²)" },
          ],
          icOzellikler: [
            { label: "Isıtma", value: "Merkezi" },
            { label: "Doğrama", value: "PVC (Ahşap panjurlu)" },
            { label: "Zemin", value: "Ahşap-seramik" },
            { label: "Giriş Zemin", value: "Seramik" },
            { label: "Salon Zemin", value: "Ahşap" },
            { label: "Mutfak Zemin", value: "Ahşap" },
            { label: "Oda Zeminleri", value: "Ahşap" },
            { label: "Banyo Zemin", value: "Seramik" },
            { label: "Banyo Duvar", value: "Fayans" },
            { label: "Mutfak", value: "Açık-kapalı mutfak" },
            { label: "Duvar", value: "Ahşap lambri" },
            { label: "Tavan", value: "Ahşap lambri" },
            { label: "Asansör", value: "Yok" },
          ],
          disOzellikler: [
            { label: "Bahçe", value: "Var" },
            { label: "Balkon", value: "Yok" },
            { label: "Teras", value: "Var" },
            { label: "Otopark", value: "Açık" },
            { label: "Çocuk Oyun Alanı", value: "Yakın" },
            { label: "Market", value: "Yakın" },
          ],
        },
      },
      en: {
        title: "Single-Story Villa",
        location: "Kadirli",
        price: "Contact Us",
        features: {
          room: "3+1",
          area: "110 m²",
          land: "407-510 m²",
          age: "New",
          floor: "1 Floor",
          bathroom: "1 bathroom (upper), 1 WC (lower)",
          parking: "Yes",
        },
        description: "Papatya Vadisi Single-Story Villa in Kadirli gathers modern comfort on one generous level. The wooden paneled facade and expansive terrace blend the home seamlessly with nature. Spacious land parcels and curated landscaping refresh everyday routines. Smartly planned interiors deliver practical solutions for every family member.",
        details: {
          genel: [
            { label: "Room Count", value: "3+1" },
            { label: "Bathroom Count", value: "1 bathroom (upper), 1 WC (lower)" },
            { label: "Gross Area", value: "110 m²" },
            { label: "Net Area", value: "97.89 m²" },
            { label: "Land Size", value: "407-510 m²" },
            { label: "Building Age", value: "New" },
            { label: "Floor Count", value: "1" },
            { label: "Balcony", value: "No" },
            { label: "Garden", value: "Yes" },
            { label: "Parking", value: "Open" },
            { label: "Terrace", value: "Yes (14.97 m²)" },
          ],
          icOzellikler: [
            { label: "Heating", value: "Central" },
            { label: "Frames", value: "PVC (Wooden shutters)" },
            { label: "Flooring", value: "Wood-ceramic" },
            { label: "Entrance Floor", value: "Ceramic" },
            { label: "Living Room Floor", value: "Wood" },
            { label: "Kitchen Floor", value: "Wood" },
            { label: "Room Floors", value: "Wood" },
            { label: "Bathroom Floor", value: "Ceramic" },
            { label: "Bathroom Wall", value: "Tiles" },
            { label: "Kitchen", value: "Open-closed kitchen" },
            { label: "Wall", value: "Wooden paneling" },
            { label: "Ceiling", value: "Wooden paneling" },
            { label: "Elevator", value: "No" },
          ],
          disOzellikler: [
            { label: "Garden", value: "Yes" },
            { label: "Balcony", value: "No" },
            { label: "Terrace", value: "Yes" },
            { label: "Parking", value: "Open" },
            { label: "Playground", value: "Nearby" },
            { label: "Market", value: "Nearby" },
          ],
        },
      },
      images: {
        exterior: tekKatli1,
        interior: [tekKatli2, tekKatli3, tekKatli4, tekKatli7, tekKatli9, tekKatli12, tekKatli15, tekKatli16, tekKatli17],
      },
    },
  };

  const house = houses[id as keyof typeof houses];
  
  if (!house) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Ev bulunamadı</h1>
          <button onClick={() => navigate("/")} className="text-[#C7A664] hover:underline">
            Ana sayfaya dön
          </button>
        </div>
      </div>
    );
  }

  const t = house[language];
  const allImages = [house.images.exterior, ...house.images.interior];
  const thumbnailImages = allImages.slice(0, 5);
  const borderClass = "border border-gray-200";
  const borderClassThumb = "border";
  const borderColorActive = "border-[#C7A664] ring-2 ring-[#C7A664]/20";
  const borderColorInactive = "border-gray-200 hover:border-gray-300";
  const borderTopClass = "border-t border-gray-100";
  const breadcrumbBorderClass = "border-b border-gray-100";
  const descriptionSentences = t.description.split(/(?<=\.)\s+/);
  const previewDescription = descriptionSentences.slice(0, 3).join(" ");
  const remainingDescription = descriptionSentences.slice(3).join(" ");
  const hasMoreDescription = remainingDescription.length > 0;
  const descriptionToDisplay = showFullDescription || !hasMoreDescription ? t.description : previewDescription;
  const phoneNumberLink = "+905366474810";
  const whatsappLink = "https://wa.me/905366474810";

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf9f7] via-[#f8f7f4] to-[#f5f4f1] animate-fade-in relative overflow-hidden">
      {/* Elegant Wallpaper Pattern - Luxury Damask */}
      <div className="fixed inset-0 pointer-events-none z-0" 
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(184, 138, 68, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(199, 166, 100, 0.06) 0%, transparent 50%),
            url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='luxury' x='0' y='0' width='120' height='120' patternUnits='userSpaceOnUse'%3E%3Cpath d='M60 0 L80 20 L100 20 L80 40 L100 60 L80 60 L60 80 L40 60 L20 60 L40 40 L20 20 L40 20 Z' fill='none' stroke='%23b88a44' stroke-width='0.4' opacity='0.15'/%3E%3Cpath d='M60 10 L70 20 L80 20 L70 30 L80 40 L70 40 L60 50 L50 40 L40 40 L50 30 L40 20 L50 20 Z' fill='%23b88a44' fill-opacity='0.05'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%23b88a44' fill-opacity='0.1'/%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%23b88a44' fill-opacity='0.08'/%3E%3Ccircle cx='90' cy='90' r='1.5' fill='%23b88a44' fill-opacity='0.08'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23luxury)'/%3E%3C/svg%3E")
          `,
          backgroundSize: '300px 300px, 400px 400px, 150px 150px',
          backgroundPosition: '0 0, 100px 100px, 0 0',
        }}
      />
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative z-10">
      <Header language={language} onLanguageChange={onLanguageChange} />
      
      <main className="pt-20 pb-28 sm:pb-20">
        {/* Breadcrumb */}
        <div className={`bg-white ${breadcrumbBorderClass}`}>
          <div className="max-w-[92%] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 md:py-5">
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 flex-wrap">
              <button onClick={() => navigate("/")} className="hover:text-[#C7A664] transition-colors">
                {language === "tr" ? "Ana Sayfa" : "Home"}
              </button>
              <span className="text-gray-300">/</span>
              <button onClick={() => navigate("/")} className="hover:text-[#C7A664] transition-colors">
                {language === "tr" ? "Satıştaki Projeler" : "Projects for Sale"}
              </button>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900">{t.title}</span>
            </div>
          </div>
        </div>

        <div className="max-w-[92%] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-4 sm:py-6 md:py-8">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className={`relative bg-white rounded-lg overflow-hidden shadow-sm ${borderClass}`}>
                <div className="relative aspect-[4/3] bg-gray-50 flex items-center justify-center">
                  <img
                    src={allImages[currentImageIndex]}
                    alt={t.title}
                    className="w-full h-full object-contain"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    key={currentImageIndex}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Navigation Buttons */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Previous"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                        aria-label="Next"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      </button>
                      
                      {/* Dot Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {allImages.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              currentImageIndex === idx 
                                ? 'bg-white w-6' 
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl border border-white/20"
                      aria-label="Favorite"
                    >
                      <Heart className={`w-4 h-4 transition-all duration-200 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-700'}`} />
                    </button>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: t.title,
                            text: t.description,
                            url: window.location.href,
                          }).catch((err) => console.log('Share error:', err));
                        } else {
                          // Fallback: copy to clipboard
                          navigator.clipboard.writeText(window.location.href);
                          alert(language === "tr" ? "Link kopyalandı!" : "Link copied!");
                        }
                      }}
                      className="w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl border border-white/20 group"
                      aria-label="Share"
                    >
                      <Share2 className="w-4 h-4 text-gray-700 transition-transform duration-200 group-hover:rotate-12" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {thumbnailImages.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {thumbnailImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative aspect-square rounded-md overflow-hidden ${borderClassThumb} flex items-center justify-center transition-all duration-200 bg-gray-50 ${
                        currentImageIndex === idx 
                          ? borderColorActive 
                          : borderColorInactive
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${t.title} ${idx + 1}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                      {idx === 4 && allImages.length > 5 && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xs font-medium">
                          +{allImages.length - 5}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Title and Location */}
              <div className={`bg-white rounded-lg p-4 sm:p-6 md:p-8 ${borderClass} shadow-sm`}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-2 sm:mb-3 tracking-tight" style={{ letterSpacing: '-0.02em', fontFamily: "'Poppins', sans-serif" }}>
                  {t.title}
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-[#b88a44] to-[#C7A664] mb-4 rounded-full" />
                <p className="text-gray-600 text-base sm:text-lg font-light mb-4 sm:mb-6 italic px-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {language === "tr" ? "Doğanın Kalbinde, Şehrin Konforunda Yaşam." : "Life in the Heart of Nature, Comfort of the City."}
                </p>
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{t.location}</span>
                </div>
                
                {/* Quick Features */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 ${borderTopClass}`}>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[#C7A664]/10 flex items-center justify-center mx-auto mb-2">
                      <Bed className="w-5 h-5 text-[#C7A664]" />
                    </div>
                    <div className="text-xs text-gray-500 mb-1">{language === "tr" ? "Oda" : "Room"}</div>
                    <div className="text-base font-semibold text-gray-900">{t.features.room}</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[#C7A664]/10 flex items-center justify-center mx-auto mb-2">
                      <Ruler className="w-5 h-5 text-[#C7A664]" />
                    </div>
                    <div className="text-xs text-gray-500 mb-1">{language === "tr" ? "Alan" : "Area"}</div>
                    <div className="text-base font-semibold text-gray-900">{t.features.area}</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[#C7A664]/10 flex items-center justify-center mx-auto mb-2">
                      <Home className="w-5 h-5 text-[#C7A664]" />
                    </div>
                    <div className="text-xs text-gray-500 mb-1">{language === "tr" ? "Arsa" : "Land"}</div>
                    <div className="text-base font-semibold text-gray-900">{t.features.land}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className={`bg-white rounded-lg p-4 sm:p-6 md:p-8 ${borderClass} shadow-sm animate-fade-in`}>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4" style={{ letterSpacing: '-0.01em', fontFamily: "'Inter', sans-serif" }}>
                  {language === "tr" ? "Açıklama" : "Description"}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                  {descriptionToDisplay}
                  {!showFullDescription && hasMoreDescription ? " …" : ""}
                </p>
                {hasMoreDescription && (
                  <button
                    onClick={() => setShowFullDescription((prev) => !prev)}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#C7A664] hover:text-[#B89654] transition-colors"
                  >
                    {showFullDescription
                      ? (language === "tr" ? "Daha az göster" : "Show less")
                      : (language === "tr" ? "Devamını oku" : "Read more")}
                  </button>
                )}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className={`bg-white rounded-lg p-6 sm:p-7 md:p-8 ${borderClass} shadow-sm`}>
                <h2 className="text-xl font-semibold text-[#2F2412] mb-2" style={{ letterSpacing: '-0.01em' }}>
                  {language === "tr" ? "Satış Danışmanımızla Görüşün" : "Speak with Our Sales Consultant"}
                </h2>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {language === "tr"
                    ? "Sorularınızı hemen yanıtlayalım; tanıtım, kampanya ve ödeme seçeneklerini birlikte değerlendirelim."
                    : "Let’s answer your questions instantly and review plans, campaigns, and payment options together."}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${phoneNumberLink}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C7A664] via-[#B89654] to-[#A88544] px-6 py-3 text-sm font-semibold tracking-tight text-white shadow-[0_16px_32px_rgba(168,133,68,0.32)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(168,133,68,0.42)]"
                  >
                    <Phone className="w-4 h-4" strokeWidth={2.5} />
                    {language === "tr" ? "Hemen Ara" : "Call Now"}
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[#C7A664]/60 bg-white px-6 py-3 text-sm font-semibold tracking-tight text-[#2F2412] transition-all duration-300 hover:bg-[#F5E7CC] hover:border-[#C7A664]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" strokeWidth={2.5} />
                    <span>{language === "tr" ? "Hemen Sor" : "Chat Now"}</span>
                  </a>
                </div>
              </div>

              {/* Detailed Information Tables */}
              <div className={`bg-[#fafafa] rounded-lg p-8 ${borderClass} shadow-sm`}>
                <h2 className="text-2xl font-semibold text-[#8B6F47] mb-10" style={{ letterSpacing: '-0.01em', fontFamily: "'Poppins', sans-serif" }}>
                  {language === "tr" ? "Detaylı Bilgiler" : "Detailed Information"}
                </h2>
                
                <div className="space-y-12">
                  {/* Genel Bilgiler */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6" style={{ letterSpacing: '-0.01em', fontFamily: "'Inter', sans-serif" }}>
                      {language === "tr" ? "Genel Bilgiler" : "General Information"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      {t.details.genel.map((item, idx) => {
                        // Icon mapping
                        const getIcon = (label: string) => {
                          if (label.includes("Oda") || label.includes("Room")) return <Bed className="w-5 h-5" />;
                          if (label.includes("Banyo") || label.includes("Bathroom")) return <Bath className="w-5 h-5" />;
                          if (label.includes("Alan") || label.includes("Area")) return <Ruler className="w-5 h-5" />;
                          if (label.includes("Arsa") || label.includes("Land")) return <Home className="w-5 h-5" />;
                          if (label.includes("Kat") || label.includes("Floor")) return <Home className="w-5 h-5" />;
                          if (label.includes("Bahçe") || label.includes("Garden")) return <Home className="w-5 h-5" />;
                          if (label.includes("Otopark") || label.includes("Parking")) return <Home className="w-5 h-5" />;
                          return <Home className="w-5 h-5" />;
                        };
                        return (
                          <div key={idx} className="flex items-center gap-3 py-1.5">
                            <div className="text-[#b88a44] flex-shrink-0">
                              {getIcon(item.label)}
                            </div>
                            <div className="flex justify-between items-center flex-1 min-w-0">
                              <span className="text-gray-600 text-base">{item.label}</span>
                              <span className="text-[#C7A664] font-semibold text-base ml-4">{item.value}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* İç Özellikler */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6" style={{ letterSpacing: '-0.01em', fontFamily: "'Inter', sans-serif" }}>
                      {language === "tr" ? "İç Özellikler" : "Interior Features"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      {t.details.icOzellikler.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 py-1.5">
                          <div className="text-[#b88a44] flex-shrink-0">
                            <Home className="w-5 h-5" />
                          </div>
                          <div className="flex justify-between items-center flex-1 min-w-0">
                            <span className="text-gray-600 text-base">{item.label}</span>
                            <span className="text-[#C7A664] font-semibold text-base ml-4">{item.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dış Özellikler */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-6" style={{ letterSpacing: '-0.01em', fontFamily: "'Inter', sans-serif" }}>
                      {language === "tr" ? "Dış Özellikler" : "Exterior Features"}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      {t.details.disOzellikler.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 py-1.5">
                          <div className="text-[#b88a44] flex-shrink-0">
                            <Home className="w-5 h-5" />
                          </div>
                          <div className="flex justify-between items-center flex-1 min-w-0">
                            <span className="text-gray-600 text-base">{item.label}</span>
                            <span className="text-[#C7A664] font-semibold text-base ml-4">{item.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </main>

      <Footer language={language} />
      </div>
      {/* Mobile CTA Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 sm:hidden pointer-events-none">
        <div
          className="mx-auto flex max-w-[520px] items-center justify-between gap-3 rounded-t-3xl border border-white/20 bg-white/95 px-4 py-3 shadow-[0_-8px_30px_rgba(15,20,30,0.18)] backdrop-blur-md pointer-events-auto"
          style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom))" }}
        >
          <a
            href={`tel:${phoneNumberLink}`}
            className="flex flex-col items-center gap-1 text-[12px] font-semibold text-[#2F2412]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#C7A664] via-[#B89654] to-[#A88544] text-white shadow-lg">
              <Phone className="w-4 h-4" strokeWidth={2.4} />
            </div>
            {language === "tr" ? "Ara" : "Call"}
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-[12px] font-semibold text-[#2F2412]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg">
              <MessageCircle className="w-4 h-4" strokeWidth={2.4} />
            </div>
            {language === "tr" ? "WhatsApp" : "WhatsApp"}
          </a>
          <a
            href="https://maps.app.goo.gl/uZmNCA5f7TBzdN7LA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-[12px] font-semibold text-[#2F2412]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1E28] text-white shadow-lg">
              <MapPin className="w-4 h-4" strokeWidth={2.4} />
            </div>
            {language === "tr" ? "Konum Al" : "Get Map"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;