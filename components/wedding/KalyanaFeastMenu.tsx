"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Utensils, Heart, CheckCircle2, RotateCcw, Info, Coffee } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface KalyanaFeastMenuProps {
  isTamil?: boolean;
}

interface FeastItem {
  id: string;
  nameEn: string;
  nameTa: string;
  categoryEn: string;
  categoryTa: string;
  icon: string;
  descriptionEn: string;
  descriptionTa: string;
  loreEn: string;
  loreTa: string;
  taste: string;
  servingOrder: number;
  position: { top: string; left: string };
}

const MUHURTHAM_DISHES: FeastItem[] = [
  {
    id: "salt-pickle",
    nameEn: "Salt & Maavadu Pickle",
    nameTa: "உப்பு & மாங்காய்ப் பிஞ்சு ஊறுகாய்",
    categoryEn: "Auspicious Starter",
    categoryTa: "மங்கள தொடக்கம்",
    icon: "🧂",
    descriptionEn: "A pinch of crystal sea salt and tender whole baby mango pickle soaked in spicy brine.",
    descriptionTa: "இலையின் மேல் இடது மூலையில் வைக்கப்படும் சுத்தமான கல் உப்பும், மணம் கமழும் மாவடு ஊறுகாயும்.",
    loreEn: "Rule #1 of Tamil wedding dining: Salt is always served first on the top-left to bless the meal with purity.",
    loreTa: "சாப்பாட்டு விதி #1: இலையின் மேல் இடது ஓரத்தில் உப்பு முதலில் பரிமாறப்படுவது பாரம்பரிய வழக்கம்.",
    taste: "Tangy & Salty",
    servingOrder: 1,
    position: { top: "16%", left: "12%" },
  },
  {
    id: "pachadi",
    nameEn: "Pineapple Sweet Pachadi",
    nameTa: "அன்னாசிப்பழ இனிப்பு பச்சடி",
    categoryEn: "Sweet Relish",
    categoryTa: "இனிப்பு பச்சடி",
    icon: "🍍",
    descriptionEn: "Juicy pineapple cooked with jaggery, mustard seeds, and a hint of green chili.",
    descriptionTa: "வெல்லப்பாகில் வெந்த அன்னாசிப் பழமும், கடுகு தாளித்த சுவையான பச்சடியும்.",
    loreEn: "Represents the philosophy that life and marriage are a harmonious blend of sweetness and zest.",
    loreTa: "இல்லற வாழ்க்கை இனிப்பும் சுவையும் கலந்ததாக இருக்க வேண்டும் என்பதை உணர்த்தும் மங்கலப் பச்சடி.",
    taste: "Sweet & Zesty",
    servingOrder: 2,
    position: { top: "16%", left: "28%" },
  },
  {
    id: "aviyal",
    nameEn: "Classic Thiruvadhirai Aviyal",
    nameTa: "பாரம்பரிய நாட்டுக்காய் அவியல்",
    categoryEn: "Heritage Vegetable Medley",
    categoryTa: "கூட்டுக்கறி",
    icon: "🥥",
    descriptionEn: "Native countryside vegetables simmered in freshly ground coconut paste, yogurt, and coconut oil.",
    descriptionTa: "பச்சை காய்கறிகள், தேங்காய் துருவல், கெட்டித் தயிர் மற்றும் தூய தேங்காய் எண்ணெய் மணம்.",
    loreEn: "The undisputed crown jewel of Tamil feast accompaniments. Crafted by master wedding caterers.",
    loreTa: "கல்யாண பந்தியின் மணிமகுடம்! தேங்காய் எண்ணெய் மணத்துடன் நாவில் கரையும் அவியல்.",
    taste: "Creamy & Fragrant",
    servingOrder: 3,
    position: { top: "16%", left: "45%" },
  },
  {
    id: "poriyal",
    nameEn: "Beans Paruppu Usili & Potato Roast",
    nameTa: "பீன்ஸ் பருப்பு உசிலி & உருளை வறுவல்",
    categoryEn: "Crisp Sides",
    categoryTa: "வறுவல் & உசிலி",
    icon: "🥔",
    descriptionEn: "Steamed beans tossed with spiced toor dal crumble, served beside golden slow-roasted baby potatoes.",
    descriptionTa: "பருப்பு உசிலியுடன் மணக்கும் பீன்ஸும், மொறுமொறுவென வறுத்த தங்க நிற உருளைக்கிழங்கும்.",
    loreEn: "The crunchy potato roast is universally hoarded by the younger cousins at the table!",
    loreTa: "பந்தியில் எக்ஸ்ட்ரா கேட்டு வாங்கும் ஒரே சைட் டிஷ் உருளைக்கிழங்கு வறுவல் தான்!",
    taste: "Crispy & Savory",
    servingOrder: 4,
    position: { top: "16%", left: "62%" },
  },
  {
    id: "kootu",
    nameEn: "Chow-Chow Kadalai Paruppu Kootu",
    nameTa: "சௌசௌ கடலைப்பருப்பு கூட்டு",
    categoryEn: "Comfort Stew",
    categoryTa: "கூட்டு",
    icon: "🍲",
    descriptionEn: "Mild, nourishing squash stew prepared with split Bengal gram and cumin-coconut tempering.",
    descriptionTa: "கடலைப்பருப்பும் சௌசௌவும் சேர்ந்து வெந்த இதமான மதிய கூட்டு.",
    loreEn: "Provides comforting balance to the rich sambars and rasams that follow.",
    loreTa: "சாப்பாட்டின் காரத்தைக் குறைத்து உடலுக்கு இதமளிக்கும் ஆரோக்கியமான கூட்டு.",
    taste: "Mild & Soothing",
    servingOrder: 5,
    position: { top: "16%", left: "78%" },
  },
  {
    id: "vada-appalam",
    nameEn: "Medu Vadai & Kerala Appalam",
    nameTa: "உளுந்து வடை & மொறுமொறு அப்பளம்",
    categoryEn: "Crispy Essentials",
    categoryTa: "மொறுமொறு வடை அப்பளம்",
    icon: "🧆",
    descriptionEn: "Fluffy golden urad dal donut with crunchy exterior, paired with a sun-dried puffy appalam.",
    descriptionTa: "மிளகு கலந்த மொறுமொறு மெதுவடையும், நொறுங்க உடைத்து சாப்பிடும் பெரிய அப்பளமும்.",
    loreEn: "Crush the appalam over hot sambar rice for the iconic South Indian crunch symphony!",
    loreTa: "அப்பளத்தை சாதத்தின் மேல் நொறுக்கிப் போட்டு சாம்பாருடன் பிசைந்து சாப்பிடுவதே தனி சுகம்!",
    taste: "Crunchy & Crisp",
    servingOrder: 6,
    position: { top: "48%", left: "14%" },
  },
  {
    id: "ghee-dal-rice",
    nameEn: "Steaming Rice with Nei & Paruppu",
    nameTa: "சுடச்சுட சாதம், நெய் & பருப்பு",
    categoryEn: "First Course",
    categoryTa: "முதல் பந்தி",
    icon: "🍚",
    descriptionEn: "Hot fragrant Ponni rice with a pool of boiled yellow lentils and a generous drizzle of golden cow ghee.",
    descriptionTa: "ஆவி பறக்கும் பொன்னி அரிசி சாதத்தின் மேல் ஊற்றப்படும் மணமணக்கும் நாட்டுப் பசு நெய்யும் பருப்பும்.",
    loreEn: "The golden standard for Tamil hospitality. Never start eating until the nei mama completes his round!",
    loreTa: "நெய் கரண்டியுடன் வரும் மாமா 'நெய் விடவா?' என கேட்கும்போது மறுக்கவே முடியாத அமிர்தம்!",
    taste: "Rich, Buttery & Pure",
    servingOrder: 7,
    position: { top: "48%", left: "38%" },
  },
  {
    id: "sambar",
    nameEn: "Arachuvitta Murungakkai Sambar",
    nameTa: "அரைத்துவிட்ட முருங்கைக்காய் சாம்பார்",
    categoryEn: "Second Course",
    categoryTa: "இரண்டாம் பந்தி",
    icon: "🍛",
    descriptionEn: "Freshly roasted coriander, chana dal, and whole red chilies ground into a vibrant drumstick & shallot stew.",
    descriptionTa: "சின்ன வெங்காயமும் நாட்டு முருங்கைக்காயும் வறுத்து அரைத்த மசாலாவுடன் கொதிக்கும் வாசனை சாம்பார்.",
    loreEn: "A traditional Tamil wedding is judged by two things: the Nadaswaram tune and the aroma of the Sambar!",
    loreTa: "கல்யாணத்தின் பெருமையே பந்தியில் மணக்கும் அரைத்துவிட்ட சாம்பாரின் மணத்தில் தான் தெரியும்!",
    taste: "Aromatic & Tangy",
    servingOrder: 8,
    position: { top: "48%", left: "58%" },
  },
  {
    id: "rasam",
    nameEn: "Mysore Thakkali Milagu Rasam",
    nameTa: "தக்காளி மிளகு ஜீரக ரசம்",
    categoryEn: "Third Course",
    categoryTa: "மூன்றாம் பந்தி",
    icon: "🥣",
    descriptionEn: "Tangy tomato broth infused with crushed black pepper, toasted cumin, garlic, and fresh coriander leaves.",
    descriptionTa: "மிளகு, சீரகம், தக்காளி மற்றும் பெருங்காயம் நசுக்கிப் போட்ட நாவில் ஊறும் செரிமான ரசம்.",
    loreEn: "A culinary digestive elixir that rejuvenates your palate before the sweets arrive.",
    loreTa: "வயிற்றுக்கு இதமளித்து செரிமானத்தை தூண்டும் அருமையான மூலிகை ரசம்.",
    taste: "Spicy, Peppery & Tart",
    servingOrder: 9,
    position: { top: "48%", left: "78%" },
  },
  {
    id: "curd-rice",
    nameEn: "Thalicha Thayir Sadam & Mor",
    nameTa: "தாளித்த தயிர் சாதம் & மோர்",
    categoryEn: "Fourth Course (The Finish)",
    categoryTa: "நான்காம் பந்தி",
    icon: "🥛",
    descriptionEn: "Silky curd rice tempered with mustard, ginger, curry leaves, and pomegranate seeds.",
    descriptionTa: "கடுகு, இஞ்சி, கருவேப்பிலை தாளித்த சில்லென்ற கெட்டித் தயிர் சாதமும் மாதுளை முத்துக்களும்.",
    loreEn: "The peaceful, blissful finale of every South Indian feast that ensures peaceful afternoon naps.",
    loreTa: "விருந்தின் நிறைவான தருணம். தயிர் சாதம் சாப்பிட்ட பின் வரும் சுகமான தூக்கத்திற்கு இணை ஏதுமில்லை!",
    taste: "Cooling & Creamy",
    servingOrder: 10,
    position: { top: "78%", left: "22%" },
  },
  {
    id: "mysore-pak",
    nameEn: "Ghee Mysore Pak & Jangiri",
    nameTa: "நெய் மைசூர் பாக் & தேன் ஜாங்கிரி",
    categoryEn: "Auspicious Sweets",
    categoryTa: "சுப இனிப்புகள்",
    icon: "🧈",
    descriptionEn: "Gram flour fudge that melts instantly on the tongue, paired with a juicy circular saffron sweet.",
    descriptionTa: "வாயில் வைத்ததும் கரையும் தூய நெய் மைசூர் பாக்கும், சாறு சொட்டும் பஞ்சு போன்ற ஜாங்கிரியும்.",
    loreEn: "Specially prepared by traditional sweet masters from Namakkal for Vignesh & Gowri's reception.",
    loreTa: "மணமக்கள் சார்பாக விருந்தினர்களை மகிழ்விக்க பிரத்யேகமாக தயாரிக்கப்படும் நெய் இனிப்பு.",
    taste: "Decadent & Sweet",
    servingOrder: 11,
    position: { top: "78%", left: "48%" },
  },
  {
    id: "payasam",
    nameEn: "Tender Coconut Elaneer Payasam",
    nameTa: "சில்லென்ற இளநீர் பாயாசம்",
    categoryEn: "Grand Finale Dessert",
    categoryTa: "மங்கள பாயாசம்",
    icon: "🥥",
    descriptionEn: "Creamy reduction of tender coconut pulp, rich milk, cardamom, and roasted cashews.",
    descriptionTa: "இளநீர் வழுக்கையும் ஏலக்காய் மணமும் கமழும் தித்திக்கும் இளநீர் பாயாசம்.",
    loreEn: "Guests are known to hold up the banana leaf to pour every single drop of payasam into their mouths!",
    loreTa: "இலை வழிய வழிய ஊற்றி, சொட்டு விடாமல் ரசித்து ருசித்து குடிக்கும் அற்புத பாயாசம்!",
    taste: "Silky, Sweet & Heavenly",
    servingOrder: 12,
    position: { top: "78%", left: "74%" },
  },
];

export function KalyanaFeastMenu({ isTamil = false }: KalyanaFeastMenuProps) {
  const [selectedDish, setSelectedDish] = useState<FeastItem>(MUHURTHAM_DISHES[6]); // Ghee dal rice by default
  const [activeMeal, setActiveMeal] = useState<"muhurtham" | "reception">("muhurtham");
  const [isLeafFolded, setIsLeafFolded] = useState(false);

  const handleFoldLeaf = () => {
    setIsLeafFolded(true);
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.65 },
        colors: ["#2D6A4F", "#C59B27", "#E5A93C", "#7D1824", "#FAF7F2"],
        disableForReducedMotion: true,
      });
    } catch {}
  };

  const handleUnfoldLeaf = () => {
    setIsLeafFolded(false);
  };

  return (
    <section id="feast" className="py-16 sm:py-24 px-4 max-w-6xl mx-auto scroll-mt-16">
      {/* Editorial Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Badge variant="gold" className="mb-3">
          <Utensils className="w-3.5 h-3.5 text-gold-700 mr-1" />
          <span>{isTamil ? "தலைவாழை இலை விருந்து" : "Authentic Kalyana Elai Sapadu"}</span>
        </Badge>
        
        <h2 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal leading-tight">
          {isTamil ? "மங்களகரமான கல்யாண விருந்து" : "The Auspicious Wedding Feast"}
        </h2>
        
        <p className="text-xs sm:text-sm text-charcoal-700/85 mt-2.5 max-w-xl mx-auto leading-relaxed">
          {isTamil
            ? "வாழை இலையில் பரிமாறப்படும் பாரம்பரிய தென்னிந்திய அறுசுவை உணவு. உணவின் மேல் தட்டி அதன் மங்கள கதைகளையும் சுவையையும் அறிந்துகொள்ளுங்கள்."
            : "Served with warmth on fresh plantain leaves in sacred South Indian tradition. Tap any delicacy on the leaf to explore its ceremonial serving order, chef secrets, and wedding lore."}
        </p>

        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4" />
      </div>

      {/* Meal Occasion Selector Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 rounded-full bg-gold-100/80 border border-gold-300 text-xs font-semibold shadow-xs">
          <button
            onClick={() => {
              setActiveMeal("muhurtham");
              setIsLeafFolded(false);
            }}
            className={`px-4 sm:px-6 py-2 rounded-full transition-all ${
              activeMeal === "muhurtham"
                ? "bg-emerald-800 text-white shadow-sm"
                : "text-charcoal-700 hover:text-gold-800"
            }`}
          >
            🌿 {isTamil ? "முகூர்த்த தலைவாழை விருந்து (11 நவம்பர்)" : "Muhurtham Plantain Leaf Feast (11 Nov)"}
          </button>
          <button
            onClick={() => {
              setActiveMeal("reception");
              setIsLeafFolded(false);
            }}
            className={`px-4 sm:px-6 py-2 rounded-full transition-all ${
              activeMeal === "reception"
                ? "bg-amber-600 text-white shadow-sm"
                : "text-charcoal-700 hover:text-gold-800"
            }`}
          >
            ✨ {isTamil ? "வரவேற்பு இரவு விருந்து (10 நவம்பர்)" : "Reception Gala Dinner (10 Nov)"}
          </button>
        </div>
      </div>

      {activeMeal === "reception" ? (
        /* RECEPTION BUFFET & LIVE COUNTER EXPERIENCE */
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-gold-300 shadow-card bg-gradient-to-br from-white/95 to-amber-50/60 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center max-w-lg mx-auto mb-8">
            <span className="text-3xl mb-2 block">🎪</span>
            <h3 className="font-serif text-2xl font-bold text-amber-900">
              {isTamil ? "வரவேற்பு சிறப்பு விருந்து & லைவ் கவுண்ட்டர்கள்" : "Reception Royal Feast & Live Street Counters"}
            </h3>
            <p className="text-xs text-charcoal-700 mt-1.5 leading-relaxed">
              {isTamil
                ? "10 நவம்பர் மாலை வையப்பமலையில் நடைபெறும் பிரம்மாண்டமான வரவேற்பு விருந்து. விதவிதமான வட & தென்னிந்திய சுவைகள்."
                : "Taking place on 10 November evening at Vaiyappamalai. A culinary celebration featuring rich live chaat stations, hot tawa specialties, and royal desserts."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/80 border border-amber-200 shadow-sm">
              <span className="text-2xl mb-2 block">🥟</span>
              <h4 className="font-bold text-sm text-charcoal-900">{isTamil ? "லைவ் சாட் & ஸ்டார்ட்டர்கள்" : "Live Chaat & Starters"}</h4>
              <p className="text-xs text-charcoal-600 mt-1 leading-normal">
                {isTamil
                  ? "பானி பூரி, தஹி பூரி, ஸ்பிரிங் ரோல்ஸ், மொறுமொறு பேபி கார்ன் மஞ்சூரியன்."
                  : "Delhi-style Pani Puri, Crisp Dahi Puri, Crispy Baby Corn, and Paneer Tikka skewers."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 border border-amber-200 shadow-sm">
              <span className="text-2xl mb-2 block">🍛</span>
              <h4 className="font-bold text-sm text-charcoal-900">{isTamil ? "மெயின் கோர்ஸ் பிரம்மாண்டம்" : "Royal Main Courses"}</h4>
              <p className="text-xs text-charcoal-600 mt-1 leading-normal">
                {isTamil
                  ? "மணக்கும் செட்டிநாடு தம் பிரியாணி, பன்னீர் பட்டர் மசாலா, பட்டர் நான் & மங்கள நல்உணவு."
                  : "Fragrant Veg Dum Biryani, Mirchi Ka Salan, Soft Butter Naan, Paneer Butter Masala, and Basmati Pulao."}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 border border-amber-200 shadow-sm">
              <span className="text-2xl mb-2 block">🍧</span>
              <h4 className="font-bold text-sm text-charcoal-900">{isTamil ? "லைவ் ஐஸ்கிரீம் & டெசர்ட்ஸ்" : "Live Desserts & Kulfi"}</h4>
              <p className="text-xs text-charcoal-600 mt-1 leading-normal">
                {isTamil
                  ? "சூடான குலாப் ஜாமுன், மட்கா குல்ஃபி, பழக்கலவை ஐஸ்கிரீம் & கொல்கத்தா பான்."
                  : "Sizzling Hot Gulab Jamun with Vanilla Bean Ice Cream, Matka Malai Kulfi, and Sweet Meetha Paan."}
              </p>
            </div>
          </div>

          <div className="text-center mt-8 pt-4 border-t border-amber-200/60">
            <button
              onClick={() => setActiveMeal("muhurtham")}
              className="text-xs font-bold text-amber-800 hover:text-amber-950 underline underline-offset-4"
            >
              ← {isTamil ? "முகூர்த்த வாழை இலை விருந்தை பார்க்க" : "Switch to Traditional Muhurtham Banana Leaf"}
            </button>
          </div>
        </div>
      ) : (
        /* TRADITIONAL BANANA LEAF (ELAI SAPADU) STAGE */
        <div className="relative">
          {/* Main Leaf Box */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-900/60 bg-gradient-to-br from-[#1C4E35] via-[#235D40] to-[#16442D] min-h-[580px] sm:min-h-[640px] p-4 sm:p-8 flex flex-col justify-between select-none transition-all">
            {/* Visual Leaf Veins Background Details */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              {/* Midrib Spine running horizontally */}
              <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-lime-200/50 shadow-sm" />
              {/* Slanted Leaf Veins */}
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="#E8F5E9" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="30%" y1="15%" x2="60%" y2="50%" stroke="#E8F5E9" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="50%" y1="15%" x2="80%" y2="50%" stroke="#E8F5E9" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="10%" y1="80%" x2="40%" y2="50%" stroke="#E8F5E9" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="30%" y1="85%" x2="60%" y2="50%" stroke="#E8F5E9" strokeWidth="1" strokeDasharray="4,4" />
                <line x1="50%" y1="85%" x2="80%" y2="50%" stroke="#E8F5E9" strokeWidth="1" strokeDasharray="4,4" />
              </svg>
            </div>

            {/* Banana Leaf Tip Indicator (Tradition: tip points to the left of the diner) */}
            <div className="absolute top-3 left-4 z-10">
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-400/40 text-[10px] uppercase tracking-wider font-bold text-emerald-200 backdrop-blur-sm">
                🌿 {isTamil ? "வாழை நுனி (இடது புறம்)" : "Plantain Leaf Tip (Left Side)"}
              </span>
            </div>

            {/* Interactive Instruction Pill */}
            <div className="absolute top-3 right-4 z-10 hidden sm:block">
              <span className="px-3 py-1 rounded-full bg-black/40 border border-white/20 text-[10px] text-emerald-100 font-medium backdrop-blur-sm flex items-center gap-1">
                <Info className="w-3 h-3 text-gold-300" />
                <span>{isTamil ? "உணவுகளைத் தட்டி சுவையை அறிக" : "Tap any dish to inspect"}</span>
              </span>
            </div>

            {!isLeafFolded ? (
              /* OPEN BANANA LEAF WITH ALL DISHES PLACED */
              <div className="relative w-full h-[520px] sm:h-[540px] my-auto">
                {MUHURTHAM_DISHES.map((dish) => {
                  const isSelected = selectedDish.id === dish.id;

                  return (
                    <button
                      key={dish.id}
                      onClick={() => setSelectedDish(dish)}
                      style={{ top: dish.position.top, left: dish.position.left }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 cursor-pointer p-2 rounded-2xl flex flex-col items-center justify-center focus:outline-none ${
                        isSelected
                          ? "scale-110 z-30"
                          : "hover:scale-105 opacity-90 hover:opacity-100 z-20"
                      }`}
                      title={dish.nameEn}
                      aria-label={dish.nameEn}
                    >
                      {/* Dish Food Plate / Cup Illustration */}
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl transition-all shadow-lg ${
                          isSelected
                            ? "bg-gradient-to-br from-amber-200 to-amber-400 border-2 border-white ring-4 ring-amber-300/60 shadow-gold scale-105"
                            : "bg-white/90 border border-gold-300/80 hover:bg-white group-hover:shadow-md"
                        }`}
                      >
                        <span className="transform transition-transform group-hover:scale-110">
                          {dish.icon}
                        </span>
                      </div>

                      {/* Floating Mini Caption Label */}
                      <span
                        className={`mt-1.5 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold tracking-tight whitespace-nowrap shadow-sm transition-all ${
                          isSelected
                            ? "bg-amber-400 text-stone-950 font-extrabold ring-1 ring-white"
                            : "bg-emerald-950/80 text-emerald-100 border border-emerald-400/30 group-hover:bg-emerald-900"
                        }`}
                      >
                        {isTamil ? dish.nameTa.split(" ")[0] : dish.nameEn.split(" ")[0]}
                      </span>

                      {/* Serving Order Dot */}
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold-500 text-stone-950 font-mono font-bold text-[8px] flex items-center justify-center border border-white shadow-xs">
                        {dish.servingOrder}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* FOLDED LEAF AUSPICIOUS BLESSING SCENE */
              <div className="relative my-auto py-12 px-6 text-center text-white max-w-lg mx-auto bg-emerald-950/85 backdrop-blur-md rounded-3xl border-2 border-emerald-400/60 shadow-2xl animate-fade-in">
                <span className="text-4xl mb-3 block">🙏🌿</span>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-900 border border-emerald-400 text-emerald-200 text-xs font-bold uppercase tracking-widest mb-3">
                  {isTamil ? "மங்கள நிறைவு • இலை மடித்தல்" : "The Auspicious Conclusion"}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-300 mb-2">
                  {isTamil ? "விருந்து இனிதே நிறைவுற்றது!" : "The Feast Was Thoroughly Enjoyed!"}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed mb-6 font-serif italic">
                  {isTamil
                    ? "“வாழை இலையை தன்னை நோக்கி மடிப்பது உணவின் சுவையையும், மணமக்களுக்கு நிறைவான வாழ்த்துக்களையும் தெரிவிக்கும் தென்னிந்திய மங்கள மரபு.”"
                    : "“In South Indian heritage, folding the plantain leaf towards yourself signifies absolute satisfaction and sends boundless blessings to the newlyweds.”"}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleUnfoldLeaf}
                    className="px-5 py-2.5 rounded-full bg-white hover:bg-gold-50 text-emerald-950 font-bold text-xs inline-flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-emerald-800" />
                    <span>{isTamil ? "இலையை மீண்டும் திறக்க ↺" : "Reopen Banana Leaf ↺"}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Actions: Inspect Selected Dish Details & Fold Leaf CTA */}
            {!isLeafFolded && (
              <div className="relative z-20 pt-4 border-t border-emerald-800/80 flex flex-col md:flex-row items-center justify-between gap-4 bg-emerald-950/75 backdrop-blur-md p-4 rounded-2xl border border-emerald-700/60 shadow-lg">
                {/* Selected Dish Summary Box */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 border border-white flex items-center justify-center text-2xl shadow-md flex-shrink-0">
                    {selectedDish.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                        #{selectedDish.servingOrder} • {isTamil ? selectedDish.categoryTa : selectedDish.categoryEn}
                      </span>
                      <span className="text-[9px] font-semibold text-emerald-300 bg-emerald-900/60 px-2 py-0.5 rounded-full border border-emerald-700">
                        {selectedDish.taste}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-white text-sm sm:text-base">
                      {isTamil ? selectedDish.nameTa : selectedDish.nameEn}
                    </h4>
                    <p className="text-xs text-stone-300 line-clamp-1 max-w-md">
                      {isTamil ? selectedDish.loreTa : selectedDish.loreEn}
                    </p>
                  </div>
                </div>

                {/* Cultural Fold Leaf Action */}
                <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                  <button
                    onClick={handleFoldLeaf}
                    className="w-full md:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-stone-950 font-serif font-bold text-xs uppercase tracking-wider shadow-gold active:scale-95 transition-all inline-flex items-center justify-center gap-1.5"
                    title="Fold the banana leaf towards you to send compliments to the chefs!"
                  >
                    <span>🍃 {isTamil ? "இலை மடித்து வாழ்த்துக" : "Fold Leaf & Bless Couple"}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Expanded Culinary Lore Card Below Leaf */}
          {selectedDish && !isLeafFolded && (
            <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-white/95 border border-gold-300 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-100 border border-gold-300 flex items-center justify-center text-xl shadow-xs flex-shrink-0">
                  {selectedDish.icon}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-charcoal-900 text-sm sm:text-base">
                    {isTamil ? selectedDish.nameTa : selectedDish.nameEn}
                  </h4>
                  <p className="text-xs text-charcoal-700 mt-0.5 leading-relaxed">
                    {isTamil ? selectedDish.descriptionTa : selectedDish.descriptionEn}
                  </p>
                  <p className="text-xs text-amber-800 font-serif italic mt-1.5 font-medium">
                    💡 {isTamil ? selectedDish.loreTa : selectedDish.loreEn}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 self-end sm:self-center">
                <span className="text-[11px] font-mono text-gold-700 font-bold bg-gold-50 border border-gold-200 px-3 py-1.5 rounded-full">
                  {isTamil ? "வரிசை எண்:" : "Serving Order:"} #{selectedDish.servingOrder} / 12
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
