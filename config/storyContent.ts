/**
 * Centralized Creative Storytelling Content & Microcopy
 * Project: Vignesh & Sowmi (Gowri) Wedding Website
 * 
 * Organised by narrative scenes:
 * - Entrance
 * - Control Room (Operation: Wedding Day)
 * - Groom Journey & Bride Arrival
 * - Sealed Invitation Reveal
 * - Event Boarding Passes
 * - Tamil Wedding Fun Corner (Weather, Checklist, Feast, Photo Challenge)
 * - Photo Gallery
 * - Reunion & Sacred Union
 * - Closing Finale
 */

export const storyContent = {
  entrance: {
    badgeEn: "शुभ विवाह • Auspicious Wedding Gate",
    badgeTa: "சுப முகூர்த்தம் • திருமண நல்வரவு",
    taglineEn: "An invitation is lovely. A little adventure is even better.",
    taglineTa: "அழைப்பிதழ் அழகானது. இந்தச் சிறு காதல் பயணம் இன்னும் இனிமையானது.",
    punchlineTa: "கல்யாணம் பண்ணப் போறோம்… அதுவும் மாஸா பண்ணப் போறோம்!",
    ctaEn: "ஆரம்பிக்கலாமா? (Shall We Begin?)",
    ctaTa: "ஆரம்பிக்கலாமா?",
    subtextEn: "Step into our sacred celebration with blessings & joy ✨",
    subtextTa: "மங்களகரமான இந்த வைபவத்திற்கு உங்கள் ஆசிகளுடன் வாருங்கள் ✨",
    skipEn: "Skip intro directly to wedding details →",
    skipTa: "நேரடியாக திருமண விபரங்களுக்குச் செல்ல →",
  },

  controlRoom: {
    headingEn: "OPERATION: WEDDING DAY",
    headingTa: "ஆபரேஷன்: கல்யாண நாள்",
    subheadingEn: "All systems go. The countdown is ticking towards two unforgettable milestones.",
    subheadingTa: "அனைத்தும் தயார். இரு சிறப்பான தருணங்களை நோக்கி நேரம் நகர்கிறது.",
    statusEn: "SYSTEM STATUS: BLESSED & READY",
    statusTa: "நிலைமை: ஆசிகளுடன் தயாராக உள்ளது",
    receptionLabelEn: "The Grand Welcome",
    receptionLabelTa: "மங்கள வரவேற்பு",
    receptionRoleEn: "An evening of laughter, congratulations & grand feast.",
    receptionRoleTa: "உறவினர்களின் ஆசி, மகிழ்ச்சி மற்றும் விருந்து உபசரிப்பு.",
    marriageLabelEn: "The Main Event",
    marriageLabelTa: "புனித முகூர்த்தம்",
    marriageRoleEn: "Sacred vows at auspicious dawn in the temple courtyard.",
    marriageRoleTa: "கோவில் பிரகாரத்தில் அதிகாலை சுப முகூர்த்தத்தில் மாங்கல்ய தாரணம்.",
    foreverActivatedEn: "Forever: Activated ❤️",
    foreverActivatedTa: "வாழ்நாள் பந்தம்: தொடங்குகிறது ❤️",
  },

  groomJourney: {
    titleEn: "ONE GROOM. ONE DESTINATION. A LIFETIME TOGETHER.",
    titleTa: "ஒரு மணமகன். ஓர் இலக்கு. வாழ்நாள் முழுவதும் இணைந்த பயணம்.",
    introEn: "Some journeys are measured in kilometres. This one ends with a forever.",
    introTa: "சில பயணங்கள் தூரத்தால் அளவிடப்படும். இந்தப் பயணம் வாழ்வின் வசந்தத்தில் முடியும்.",
    startBubbleEn: "Right then. Where's my favourite person? 💌",
    startBubbleTa: "சரி, என்னோட ஆளு எங்க இருக்காங்கன்னு பார்ப்போம்! 💌",
    startCtaEn: "START MY ADVENTURE →",
    startCtaTa: "பயணத்தை தொடங்குங்கள் →",
    modalTitleEn: "Guide Vignesh to His Bride!",
    modalTitleTa: "விக்னேஷை அவரது மணமகளிடம் அழைத்துச் செல்லுங்கள்!",
    modalDescEn: "Help Vignesh travel across scenic South Indian countryside paths, coconut groves, and festive milestones to meet his waiting bride Gowri.",
    modalDescTa: "விக்னேஷை கிராமப்புற வளைவு நெளிவு பாதைகள் வழியாக அழைத்துச் சென்று, மண்டபத்தில் காத்திருக்கும் கௌரியுடன் இணைய வையுங்கள்!",
    checkpoints: [
      {
        id: 1,
        progress: 0.05,
        nameEn: "The Departure",
        nameTa: "பயணத் தொடக்கம்",
        dialogueEn: "Destination locked. Confidence: 100%. Navigation skills: under review.",
        dialogueTa: "இலக்கு உறுதி. நம்பிக்கை 100%. வழி தெரியுமா... போகப் போகத் தெரியும்!",
        descEn: "Vignesh starts his journey with boundless excitement.",
        descTa: "விக்னேஷ் பேரார்வத்துடன் தன் பயணத்தைத் தொடங்குகிறார்.",
      },
      {
        id: 2,
        progress: 0.35,
        nameEn: "The Village Detour",
        nameTa: "கிராமத்து வளைவு",
        dialogueEn: "Even the scenic route knows where I'm going.",
        dialogueTa: "சுத்தி வளைச்சு போனாலும் மனசு அவளையே நோக்கிப் போகுது!",
        descEn: "Passing lush coconut groves and golden paddy fields.",
        descTa: "செழுமையான தென்னந்தோப்புகளையும் நெல் வயல்களையும் கடந்து...",
      },
      {
        id: 3,
        progress: 0.70,
        nameEn: "The Final Approach",
        nameTa: "இறுதி நெருக்கம்",
        dialogueEn: "Okay, heart. Please behave. We're nearly there.",
        dialogueTa: "இதயமே கொஞ்சம் அமைதியா இரு... இன்னும் சில அடிகள் தான்!",
        descEn: "The sound of Nadaswaram and temple bells fills the air.",
        descTa: "நாதஸ்வர ஓசையும் கோவில் மணிகளும் காற்றில் கலக்கின்றன.",
      },
      {
        id: 4,
        progress: 1.0,
        nameEn: "Arrival at Mandapam",
        nameTa: "மண்டப வருகை",
        dialogueEn: "Found you. Nowhere else to be.",
        dialogueTa: "கண்டுபிடிச்சுட்டேன்! என் உலகம் இனி இங்கே தான்.",
        descEn: "Arriving at the flower-decked wedding mandapam.",
        descTa: "மலர் அலங்கார மண்டபத்தில் காத்திருக்கும் மணமகளை அடைகிறார்.",
      },
    ],
    brideGreetingEn: "Finally! I've been waiting! 💕",
    brideGreetingTa: "கடைசியாக வந்துட்டீங்களா! நான் காத்திருந்தேன்! 💕",
    reunionLineEn: "Every little turn brought this story closer to forever.",
    reunionLineTa: "ஒவ்வொரு வளைவும் நம்மை வாழ்நாள் முழுமைக்கும் சேர்த்தது.",
    reunionPoemEn: "“Two hearts, two stories, now choosing one way...\nWith love as their journey and this day as their start.”",
    reunionPoemTa: "“இரு மனம் இணையும் இனிய தருணம்,\nஇறைவன் அருளால் என்றும் இனிக்கும்!\nஅன்போடு உங்களை வரவேற்கிறோம்.”",
    reunionEndingEn: "And so begins their forever.",
    reunionEndingTa: "அன்புடன் அவர்கள் வாழ்வு என்றும் தழைக்கட்டும்.",
  },

  invitationReveal: {
    envelopeBadgeEn: "SACRED WEDDING INVITATION",
    envelopeBadgeTa: "மங்களகரமான திருமண அழைப்பிதழ்",
    sealedHeadingEn: "An Auspicious Invitation Awaits You",
    sealedHeadingTa: "மங்களகரமான அழைப்பு உங்களுக்காக காத்திருக்கிறது",
    sealedDescEn: "Click to break the sacred gold seal and unfold the handcrafted watercolor wedding invitation.",
    sealedDescTa: "தங்க முத்திரையைத் திறந்து, எங்கள் பாரம்பரிய திருமண அழைப்பிதழை அன்புடன் காண்க.",
    breakSealCtaEn: "Break Seal & Open Invitation ✉️",
    breakSealCtaTa: "முத்திரையைத் திறந்து அழைப்பிதழை காண்க ✉️",
    resealCtaEn: "Fold & Reseal Invitation ↺",
    resealCtaTa: "மறுபடி மடிக்க ↺",
  },

  passes: {
    sectionTagEn: "First Class Wedding Passes",
    sectionTagTa: "முதல் வகுப்பு திருமண பாஸ்கள்",
    sectionTitleEn: "Your Seat in the Story",
    sectionTitleTa: "உங்கள் அன்பான வருகைக்கான பாஸ்",
    sectionDescEn: "“Your seat is reserved in the story. Your blessings are the real VIP pass.”",
    sectionDescTa: "“எங்கள் வாழ்க்கைக் கதையில் உங்களுக்கான இடம் உறுதி செய்யப்பட்டது. உங்கள் ஆசிகளே எங்கள் விஐபி பாஸ்.”",
    passengerNameEn: "Our Honored Guest & Family",
    passengerNameTa: "மதிப்பிற்குரிய விருந்தினர் & குடும்பத்தினர்",
  },

  funCorner: {
    tagEn: "Kalyana Kalattaa • Fun Corner",
    tagTa: "கல்யாண கலாட்டா • மகிழ்ச்சி அரங்கம்",
    titleEn: "The Tamil Wedding Experience",
    titleTa: "நம் ஊர் கல்யாண கலாட்டா",
    descEn: "Because a South Indian wedding is never just a ritual — it's laughter, feasts, aunties' radars, and pure celebration!",
    descTa: "தென்னிந்திய திருமணம் என்பது சடங்கு மட்டுமல்ல — அது சிரிப்பும், வாழை இலை விருந்தும், உறவினர்களின் பாசமும் கலந்த பெருவிழா!",
    
    weather: {
      titleEn: "Wedding Weather Report",
      titleTa: "மண்டப வானிலை அறிக்கை",
      forecastEn: "Today's forecast: 100% chance of blessings, happy tears, and extra servings.",
      forecastTa: "இன்றைய வானிலை: 100% ஆசிகள், ஆனந்தக் கண்ணீர் மற்றும் வாழை இலையில் எக்ஸ்ட்ரா பரிமாறல்கள்!",
      humorNoteEn: "* Certified 100% fictional by the Ministry of Wedding Happiness.",
      humorNoteTa: "* இது கல்யாண சந்தோஷ அமைச்சகத்தின் நகைச்சுவை முன்னறிவிப்பு மட்டுமே!",
    },

    checklist: {
      titleEn: "Wedding Mission Checklist",
      titleTa: "உங்கள் கல்யாண கடமைகள்",
      items: [
        { id: 1, textEn: "Arrive with a warm, genuine smile.", textTa: "இனிய முக மலர்ச்சியுடன் மண்டபம் வருதல்." },
        { id: 2, textEn: "Bless the couple from the bottom of your heart.", textTa: "மணமக்களை மனதார வாழ்த்தி ஆசி வழங்குதல்." },
        { id: 3, textEn: "Find your seat and chat with long-lost cousins.", textTa: "நீண்ட நாள் கழித்து காணும் உறவினர்களோடு அளவளாவுதல்." },
        { id: 4, textEn: "Enjoy the authentic Tamil wedding feast without rush.", textTa: "சுவையான வாழை இலை விருந்தை பொறுமையுடன் ருசித்தல்." },
        { id: 5, textEn: "Leave with a happy heart & sweet memories.", textTa: "மகிழ்ச்சியான மனதுடன் இனிப்பு நினைவுகளை சுமந்து செல்லுதல்." },
      ],
      completedEn: "Mission Accomplished! You are the ultimate wedding guest! 🏆",
      completedTa: "அனைத்து கடமைகளும் முடிந்தது! நீங்கள் சிறந்த விருந்தினர்! 🏆",
    },

    feastForecast: {
      titleEn: "The Feast Forecast",
      titleTa: "வாழை இலை விருந்து முன்னறிவிப்பு",
      announcementEn: "Important announcement: Dessert decisions require serious consideration.",
      announcementTa: "முக்கிய அறிவிப்பு: பாயாசம், ஜாங்கிரி மற்றும் வெண்ணிலா ஐஸ்கிரீம் முடிவுகளுக்கு ஆழ்ந்த சிந்தனை தேவை!",
      detailsEn: "Hot paruppu vadai, fragrant sambar, ghee payasam, and that legendary post-lunch ice cream queue!",
      detailsTa: "சூடான பருப்பு வடை, மணக்கும் கதம்ப சாம்பார், நெய் பாயாசம், மற்றும் கடைசியாக அந்த ஐஸ்கிரீம் வரிசை!",
      revealCtaEn: "Reveal Today's Feast Secret 🍽️",
      revealCtaTa: "விருந்து ரகசியத்தை காண்க 🍽️",
    },

    photoChallenge: {
      titleEn: "The Family Photo Challenge",
      titleTa: "குடும்ப புகைப்பட சேலஞ்ச்",
      prompts: [
        { id: 1, titleEn: "The Happiest Smile in the Room", titleTa: "மண்டபத்தின் மிக அழகான புன்னகை", tipEn: "Find someone smiling without knowing a camera is pointing at them!" },
        { id: 2, titleEn: "The Grandest Family Pose", titleTa: "மிகப்பெரிய குடும்ப குரூப் போஸ்", tipEn: "Pack three generations into a single wide-angle frame!" },
        { id: 3, titleEn: "The Most Enthusiastic Blessing", titleTa: "உற்சாகமான ஆசீர்வாதம்", tipEn: "Capture elders showering sacred akshathai rice on the couple!" },
        { id: 4, titleEn: "The Best Candid Feast Moment", titleTa: "உணவை ரசிக்கும் தருணம்", tipEn: "That unmistakable face when the hot dessert arrives on the leaf!" },
      ],
    },
  },

  gallery: {
    titleEn: "Proof That the Best Moments Deserve Another Look",
    titleTa: "சிறந்த தருணங்கள் மீண்டும் ரசிக்கப்பட வேண்டியவை",
    descEn: "Authentic, heartwarming photographs celebrating Vignesh & Sowmi's journey together.",
    descTa: "விக்னேஷ் மற்றும் சௌமியின் வாழ்க்கைப் பயணத்தின் அரிய அழகிய தருணங்கள்.",
  },

  closing: {
    headlineEn: "The Celebration Lasts a Day. The Memories Get to Stay.",
    headlineTa: "விழா ஒரு நாள்... நினைவுகள் வாழ்நாள் முழுவதும்!",
    subheadEn: "Thank you for walking this path with us. Your love and blessings make our beginning complete.",
    subheadTa: "எங்களுடன் இந்த இனிய நாளில் இணைந்தமைக்கு மனமார்ந்த நன்றிகள். உங்கள் அன்பு எங்கள் வாழ்வின் தொடக்கத்திற்கு அழகு சேர்க்கிறது.",
  },
};
