/**
 * Centralized Wedding Configuration & Content Model
 * Source of Truth: Verified wedding invitation card & supplied original assets.
 * Bride's Name: Gowri (கௌரி)
 */

export interface EventSchedule {
  id: "reception" | "marriage";
  title: string;
  tamilTitle: string;
  subTitle: string;
  dateString: string; // e.g. "Tuesday, 10th November 2026"
  dayOfWeek: string;
  isoDate: string; // ISO 8601 string in IST (+05:30)
  timestampIST: number;
  timeRange: string;
  tamilTime: string;
  venueName: string;
  tamilVenueName: string;
  locationArea: string;
  tamilLocationArea: string;
  fullAddress: string;
  verifiedFromInvitation: boolean;
  notes?: string;
  calendarEvent: {
    title: string;
    description: string;
    location: string;
    startTime: string; // UTC ISO for iCal/Google Calendar
    endTime: string;
  };
}

export interface WeddingConfig {
  couple: {
    groom: {
      firstName: string;
      fullName: string;
      tamilName: string;
      role: string;
      portraitImage: string;
      portraitOriginal: string;
      characterIllustration?: string;
      bioSummary?: string;
    };
    bride: {
      firstName: string;
      officialOrHomeName: string;
      invitationName: string;
      fullName: string;
      tamilName: string;
      role: string;
      portraitImage: string;
      portraitOriginal: string;
      characterIllustration?: string;
      bioSummary?: string;
      nameClarificationNote?: string;
    };
    sharedPhoto: {
      image: string;
      original: string;
      alt: string;
      caption: string;
    };
    invitationCard: {
      image: string;
      original: string;
      alt: string;
      title?: string;
    };
  };
  events: {
    reception: EventSchedule;
    marriage: EventSchedule;
  };
  poetry: {
    invitationPoem: {
      stanzas: string[];
      attribution: string;
    };
    thirukkural: {
      kural: string;
      meaning: string;
      chapter: string;
      number: number;
    };
    loveQuotes?: Array<{
      id: string;
      category: string;
      tamil: string;
      english: string;
      source: string;
    }>;
  };
  rsvp: {
    enabled: boolean;
    contactPersons: Array<{
      name: string;
      phone: string;
      relation: string;
    }>;
    deadline?: string;
    statusNote: string;
  };
  mapLinks: {
    receptionGoogleMapsUrl: string | null;
    marriageGoogleMapsUrl: string | null;
    statusNote: string;
  };
  meta: {
    title: string;
    description: string;
    siteUrl: string;
    ogImage: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      firstName: "Vignesh",
      fullName: "Vignesh",
      tamilName: "விக்னேஷ்",
      role: "Groom (மணமகன்)",
      portraitImage: "/images/optimized/groom-portrait.jpg",
      portraitOriginal: "/images/original/IMG-20261019-WA0000.jpg.jpeg",
      characterIllustration: "/images/journey/groom-character.jpg",
      bioSummary: "An authentic, smiling soul ready to start life's greatest adventure.",
    },
    bride: {
      firstName: "Gowri",
      officialOrHomeName: "Gowri",
      invitationName: "Gowri",
      fullName: "Gowri",
      tamilName: "கௌரி",
      role: "Bride (மணமகள்)",
      portraitImage: "/images/optimized/bride-portrait.jpg",
      portraitOriginal: "/images/original/IMG-20250210-WA0016.jpg.jpeg",
      characterIllustration: "/images/journey/bride-character.jpg",
      bioSummary: "Graceful and vibrant, stepping into forever with warmth and joy.",
    },
    sharedPhoto: {
      image: "/images/optimized/couple-traditional.jpg",
      original: "/images/original/IMG-20260612-WA0001.jpg.jpeg",
      alt: "Vignesh and Gowri in traditional wedding attire in a temple courtyard",
      caption: "Vignesh & Gowri in sacred traditional attire",
    },
    invitationCard: {
      image: "/images/optimized/aesthetic-invitation-bg.jpg",
      original: "/images/original/aesthetic-invitation-bg.jpg",
      alt: "Aesthetic South Indian watercolor wedding invitation illustration for Vignesh & Gowri",
      title: "Traditional South Indian Watercolor Invitation",
    },
  },
  events: {
    reception: {
      id: "reception",
      title: "Reception",
      tamilTitle: "வரவேற்பு (Reception)",
      subTitle: "An evening of celebration, blessings, and laughter",
      dateString: "Tuesday, 10th November 2026",
      dayOfWeek: "Tuesday",
      isoDate: "2026-11-10T18:00:00+05:30",
      timestampIST: new Date("2026-11-10T18:00:00+05:30").getTime(),
      timeRange: "6:00 PM to 9:00 PM",
      tamilTime: "மாலை 6:00 மணி முதல் 9:00 மணி வரை",
      venueName: "Namperumal Thirumana Mandapam",
      tamilVenueName: "நம்பெருமாள் திருமண மண்டபம்",
      locationArea: "Vaiyappamalai",
      tamilLocationArea: "வையப்பமலை",
      fullAddress: "Namperumal Thirumana Mandapam, Vaiyappamalai, Tamil Nadu",
      verifiedFromInvitation: true,
      notes: "Verified directly from physical invitation card photo (image.png.jpeg).",
      calendarEvent: {
        title: "Wedding Reception - Vignesh & Gowri",
        description: "Join us to celebrate the wedding reception of Vignesh and Gowri.",
        location: "Namperumal Thirumana Mandapam, Vaiyappamalai, Tamil Nadu",
        startTime: "2026-11-10T12:30:00Z", // 6:00 PM IST = 12:30 PM UTC
        endTime: "2026-11-10T15:30:00Z", // 9:00 PM IST = 3:30 PM UTC
      },
    },
    marriage: {
      id: "marriage",
      title: "Marriage (Muhurtham)",
      tamilTitle: "திருமண முகூர்த்தம் (Muhurtham)",
      subTitle: "The auspicious Brahma Muhurtham ceremony of sacred union",
      dateString: "Wednesday, 11th November 2026",
      dayOfWeek: "Wednesday",
      isoDate: "2026-11-11T04:30:00+05:30",
      timestampIST: new Date("2026-11-11T04:30:00+05:30").getTime(),
      timeRange: "4:30 AM to 6:00 AM",
      tamilTime: "காலை 4:30 மணி முதல் 6:00 மணி வரை",
      venueName: "Sri Arulmigu Kailasanathar Thirukovil",
      tamilVenueName: "ஸ்ரீ அருள்மிகு கைலாசநாதர் திருக்கோவில்",
      locationArea: "Elur",
      tamilLocationArea: "ஏளூர்",
      fullAddress: "Sri Arulmigu Kailasanathar Thirukovil, Elur, Tamil Nadu",
      verifiedFromInvitation: true,
      notes: "Verified directly from physical invitation card photo (image.png.jpeg).",
      calendarEvent: {
        title: "Wedding Muhurtham - Vignesh & Gowri",
        description: "Auspicious wedding ceremony of Vignesh and Gowri.",
        location: "Sri Arulmigu Kailasanathar Thirukovil, Elur, Tamil Nadu",
        startTime: "2026-11-10T23:00:00Z", // 4:30 AM IST = 11:00 PM UTC Nov 10
        endTime: "2026-11-11T00:30:00Z", // 6:00 AM IST = 12:30 AM UTC Nov 11
      },
    },
  },
  poetry: {
    invitationPoem: {
      stanzas: [
        "Two hearts,\nTwo stories,\nNow choosing one way\nA promise of forever\nBeginning on this day.",
        "Through laughter and dreams,\nthrough all life may bring,\nVignesh found his Gowri,\nand Gowri found her Vignesh.",
        "And so begins their forever hand in hand, heart to heart,\nWith love as their journey and this day as their start.",
      ],
      attribution: "From the Couple's Official Wedding Invitation",
    },
    thirukkural: {
      kural: "செம்புலப் பெயல் நீர் போல அன்புடை நெஞ்சம் தாம் கலந்தனவே",
      meaning:
        "Like the sweet summer rain melding seamlessly into the crimson earth, our loving hearts have merged as one for all eternity.",
      chapter: "குறுந்தொகை (Kurunthogai - Classical Sangam Love Poetry)",
      number: 40,
    },
    loveQuotes: [
      {
        id: "kurunthogai",
        category: "சங்க இலக்கியம் • Sangam Classic",
        tamil: "செம்புலப் பெயல் நீர் போல அன்புடை நெஞ்சம் தாம் கலந்தனவே",
        english:
          "Like the sweet summer rain melding seamlessly into the crimson earth, our loving hearts have merged as one for all eternity.",
        source: "குறுந்தொகை 40 (Kurunthogai - Classical Sangam Love Poetry)",
      },
      {
        id: "bharathiyar",
        category: "மகாகவி பாரதியார் • Bharathiyar",
        tamil: "பாயும் ஒளி நீ எனக்கு, பார்க்கும் விழி நான் உனக்கு; தோயும் மது நீ எனக்கு, தும்பியடி நான் உனக்கு!",
        english:
          "You are the flowing radiant light, and I the eye that beholds; You are the sweet nectar of life, and I the devoted honeybee in your embrace.",
        source: "மகாகவி பாரதியார் (Mahakavi Bharathiyar - காதல் கீதம்)",
      },
      {
        id: "thirukkural_love",
        category: "திருக்குறள் • Sacred Love",
        tamil: "உடம்போடு உயிரிடை என்னமற்று அன்ன மடந்தையொடு எம்மிடை நட்பு",
        english:
          "As intimate and inseparable as the soul is within the living body, such is the eternal love that unites our lives.",
        source: "திருக்குறள் 1122 (Thirukkural - காமத்துப்பால் / The Chapter on Love)",
      },
      {
        id: "eternal_vow",
        category: "காதல் மொழி • Eternal Vow",
        tamil: "விழி பார்த்த நொடியில் மலர்ந்த காதல், கரம் கோர்த்த இந்நாளில் இணைந்த பயணம்... இறுதி மூச்சு வரை உன்னோடு மட்டுமே என் உலகம்!",
        english:
          "A love that blossomed the moment our eyes first met, a lifelong journey united as our hands entwine... until my last breath, my world is you.",
        source: "விக்னேஷ் & கௌரி (Vignesh & Gowri • Love Promise)",
      },
    ],
  },
  rsvp: {
    enabled: false, // Disabled until explicit contact details are provided by the couple
    contactPersons: [],
    statusNote: "RSVP contact numbers currently withheld for privacy pending confirmation.",
  },
  mapLinks: {
    receptionGoogleMapsUrl: "https://maps.app.goo.gl/yary6X6wh9fymMqh6",
    marriageGoogleMapsUrl: "https://maps.app.goo.gl/qNw2M1AVtxCdRqMp7",
    statusNote: "Direct Google Maps navigation links verified for both Reception and Muhurtham venues.",
  },
  meta: {
    title: "Vignesh & Gowri — Wedding Celebration",
    description:
      "Join us in celebrating the wedding celebration of Vignesh and Gowri on 10th and 11th November 2026.",
    siteUrl: "https://wedding.vignesh-gowri.com",
    ogImage: "/images/optimized/couple-traditional.jpg",
  },
};
