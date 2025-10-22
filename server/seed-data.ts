import { getDb } from "./db";
import { governorates, touristPlaces } from "../drizzle/schema";

const tourismData = [
  {
    name: "Alexandria",
    nameAr: "الإسكندرية",
    places: [
      { name: "Citadel of Qaitbay", nameAr: "قلعة قايتباي", description: "A 15th-century fortress built on the site of the ancient Lighthouse of Alexandria", descriptionAr: "حصن من القرن الخامس عشر بني على موقع منارة الإسكندرية القديمة", latitude: 31.2629, longitude: 29.8683 },
      { name: "Bibliotheca Alexandrina", nameAr: "مكتبة الإسكندرية", description: "Modern library honoring the ancient Library of Alexandria", descriptionAr: "مكتبة حديثة تكرم مكتبة الإسكندرية القديمة", latitude: 31.2129, longitude: 29.9154 },
      { name: "Montaza Palace", nameAr: "قصر المنتزة", description: "Royal palace with beautiful gardens overlooking the Mediterranean", descriptionAr: "قصر ملكي بحدائق جميلة تطل على البحر المتوسط", latitude: 31.2859, longitude: 29.9833 },
      { name: "Catacombs of Kom el Shoqafa", nameAr: "أنفاق كوم الشقافة", description: "Ancient underground burial chambers from the Greco-Roman period", descriptionAr: "حجرات دفن تحت الأرض من العصر الروماني اليوناني", latitude: 31.1938, longitude: 29.9154 },
      { name: "Alexandria National Museum", nameAr: "المتحف الوطني بالإسكندرية", description: "Museum showcasing artifacts from Alexandria's rich history", descriptionAr: "متحف يعرض آثار من التاريخ الغني للإسكندرية", latitude: 31.2129, longitude: 29.8329 }
    ]
  },
  {
    name: "Cairo",
    nameAr: "القاهرة",
    places: [
      { name: "Great Pyramids of Giza", nameAr: "أهرام الجيزة العظيمة", description: "Ancient wonders of the world - the pyramids of Khufu, Khafre, and Menkaure", descriptionAr: "عجائب العالم القديم - أهرام خوفو وخفرع ومنقرع", latitude: 29.9792, longitude: 31.1342 },
      { name: "Egyptian Museum", nameAr: "المتحف المصري", description: "World's largest collection of ancient Egyptian artifacts", descriptionAr: "أكبر مجموعة من الآثار المصرية القديمة في العالم", latitude: 30.0453, longitude: 31.2357 },
      { name: "Khan El-Khalili Bazaar", nameAr: "خان الخليلي", description: "Historic marketplace with traditional crafts and souvenirs", descriptionAr: "سوق تاريخي بالحرف والهدايا التقليدية", latitude: 30.0626, longitude: 31.2329 },
      { name: "Al-Azhar Mosque", nameAr: "مسجد الأزهر", description: "One of the oldest and most important mosques in Cairo", descriptionAr: "أحد أقدم وأهم المساجد في القاهرة", latitude: 30.0626, longitude: 31.2626 },
      { name: "Citadel of Saladin", nameAr: "قلعة صلاح الدين", description: "Medieval fortress with panoramic views of Cairo", descriptionAr: "حصن وسيط مع إطلالات بانورامية على القاهرة", latitude: 30.0259, longitude: 31.2626 }
    ]
  },
  {
    name: "Giza",
    nameAr: "الجيزة",
    places: [
      { name: "Sphinx", nameAr: "أبو الهول", description: "Iconic limestone statue with the body of a lion and head of a pharaoh", descriptionAr: "تمثال حجري شهير برأس فرعون وجسم أسد", latitude: 29.9755, longitude: 31.1371 },
      { name: "Solar Boat Museum", nameAr: "متحف القارب الشمسي", description: "Museum housing the reconstructed ancient solar boat of Khufu", descriptionAr: "متحف يضم القارب الشمسي القديم المعاد بناؤه", latitude: 29.9792, longitude: 31.1342 },
      { name: "Saqqara", nameAr: "سقارة", description: "Ancient necropolis with the Step Pyramid of Djoser", descriptionAr: "مقبرة قديمة تضم هرم جوسر المدرج", latitude: 29.8719, longitude: 31.2188 },
      { name: "Memphis", nameAr: "منف", description: "Ancient capital of Egypt with ruins and statues", descriptionAr: "عاصمة مصر القديمة مع الأطلال والتماثيل", latitude: 29.8398, longitude: 31.2517 },
      { name: "Dahshur", nameAr: "دهشور", description: "Archaeological site with the Bent Pyramid and Red Pyramid", descriptionAr: "موقع أثري يضم الهرم الأحمر والهرم المائل", latitude: 29.8071, longitude: 31.2096 }
    ]
  },
  {
    name: "Luxor",
    nameAr: "الأقصر",
    places: [
      { name: "Valley of the Kings", nameAr: "وادي الملوك", description: "Ancient burial ground of pharaohs with royal tombs", descriptionAr: "مقبرة فرعونية قديمة تضم قبور الملوك", latitude: 25.7404, longitude: 32.6028 },
      { name: "Karnak Temple", nameAr: "معبد الكرنك", description: "Massive temple complex dedicated to Amun-Ra", descriptionAr: "مجمع معبد ضخم مكرس لآمون رع", latitude: 25.7174, longitude: 32.6560 },
      { name: "Luxor Temple", nameAr: "معبد الأقصر", description: "Temple on the east bank of the Nile with colossal statues", descriptionAr: "معبد على الضفة الشرقية للنيل مع تماثيل ضخمة", latitude: 25.6964, longitude: 32.6397 },
      { name: "Valley of the Queens", nameAr: "وادي الملكات", description: "Burial site of royal wives and princes", descriptionAr: "موقع دفن زوجات الملوك والأمراء", latitude: 25.7404, longitude: 32.5896 },
      { name: "Mortuary Temple of Hatshepsut", nameAr: "معبد حتشبسوت الجنائزي", description: "Terraced temple of the female pharaoh Hatshepsut", descriptionAr: "معبد مدرج للفرعونة حتشبسوت", latitude: 25.7404, longitude: 32.6028 }
    ]
  },
  {
    name: "Aswan",
    nameAr: "أسوان",
    places: [
      { name: "Aswan High Dam", nameAr: "السد العالي", description: "Modern engineering marvel controlling the Nile's flow", descriptionAr: "عجيبة هندسية حديثة تتحكم في تدفق النيل", latitude: 23.9691, longitude: 32.8872 },
      { name: "Abu Simbel", nameAr: "أبو سمبل", description: "Two colossal rock temples of Ramesses II", descriptionAr: "معبدان ضخمان منحوتان في الصخر لرمسيس الثاني", latitude: 22.3479, longitude: 31.6074 },
      { name: "Philae Temple", nameAr: "معبد فيلة", description: "Temple dedicated to Isis on an island in the Nile", descriptionAr: "معبد مكرس لإيزيس على جزيرة في النيل", latitude: 24.0197, longitude: 32.8872 },
      { name: "Nubian Museum", nameAr: "المتحف النوبي", description: "Museum preserving Nubian culture and heritage", descriptionAr: "متحف يحافظ على الثقافة والتراث النوبي", latitude: 23.9691, longitude: 32.8872 },
      { name: "Botanical Garden", nameAr: "الحديقة النباتية", description: "Beautiful garden on Kitchener Island with tropical plants", descriptionAr: "حديقة جميلة على جزيرة كتشنر بنباتات استوائية", latitude: 23.9691, longitude: 32.8872 }
    ]
  },
  {
    name: "Asyut",
    nameAr: "أسيوط",
    places: [
      { name: "Al-Azab Mosque", nameAr: "مسجد الأزاب", description: "Historic mosque in the city center", descriptionAr: "مسجد تاريخي في وسط المدينة", latitude: 27.1801, longitude: 31.1888 },
      { name: "Asyut Museum", nameAr: "متحف أسيوط", description: "Museum showcasing regional artifacts and history", descriptionAr: "متحف يعرض الآثار والتاريخ الإقليمي", latitude: 27.1801, longitude: 31.1888 },
      { name: "Asyut Barrage", nameAr: "سد أسيوط", description: "Historic dam across the Nile", descriptionAr: "سد تاريخي عبر النيل", latitude: 27.1801, longitude: 31.1888 },
      { name: "Deir Al-Muharraq Monastery", nameAr: "دير المحرق", description: "Ancient Coptic monastery with religious significance", descriptionAr: "دير قبطي قديم ذو أهمية دينية", latitude: 27.2801, longitude: 31.1888 },
      { name: "Asyut Governorate Palace", nameAr: "قصر محافظة أسيوط", description: "Historic palace with architectural significance", descriptionAr: "قصر تاريخي ذو أهمية معمارية", latitude: 27.1801, longitude: 31.1888 }
    ]
  },
  {
    name: "Sohag",
    nameAr: "سوهاج",
    places: [
      { name: "Abydos Temple", nameAr: "معبد أبيدوس", description: "Temple of Seti I with detailed hieroglyphics", descriptionAr: "معبد سيتي الأول بنقوش هيروغليفية مفصلة", latitude: 26.1848, longitude: 31.9233 },
      { name: "Dendera Temple", nameAr: "معبد دندرة", description: "Temple of Hathor with zodiac ceiling", descriptionAr: "معبد حتحور بسقف البروج الفلكي", latitude: 26.1658, longitude: 32.6697 },
      { name: "White Monastery", nameAr: "الدير الأبيض", description: "Ancient Coptic monastery with white limestone walls", descriptionAr: "دير قبطي قديم بجدران من الحجر الجيري الأبيض", latitude: 26.3848, longitude: 31.9233 },
      { name: "Red Monastery", nameAr: "الدير الأحمر", description: "Coptic monastery with red brick construction", descriptionAr: "دير قبطي ببناء من الطوب الأحمر", latitude: 26.3848, longitude: 31.9233 },
      { name: "Sohag Museum", nameAr: "متحف سوهاج", description: "Museum displaying regional archaeological finds", descriptionAr: "متحف يعرض الاكتشافات الأثرية الإقليمية", latitude: 26.5548, longitude: 31.6953 }
    ]
  },
  {
    name: "Qena",
    nameAr: "قنا",
    places: [
      { name: "Qena Pottery", nameAr: "فخار قنا", description: "Traditional pottery workshops and markets", descriptionAr: "ورش وأسواق الفخار التقليدي", latitude: 26.1548, longitude: 32.7253 },
      { name: "Qena Museum", nameAr: "متحف قنا", description: "Museum showcasing Qena's cultural heritage", descriptionAr: "متحف يعرض التراث الثقافي لقنا", latitude: 26.1548, longitude: 32.7253 },
      { name: "Nile Valley Views", nameAr: "مناظر وادي النيل", description: "Scenic views of the Nile Valley", descriptionAr: "إطلالات خلابة على وادي النيل", latitude: 26.1548, longitude: 32.7253 },
      { name: "Coptic Church of Qena", nameAr: "الكنيسة القبطية بقنا", description: "Historic Coptic church in the city", descriptionAr: "كنيسة قبطية تاريخية في المدينة", latitude: 26.1548, longitude: 32.7253 },
      { name: "Qena Sugar Factory", nameAr: "مصنع السكر بقنا", description: "Industrial heritage site and local landmark", descriptionAr: "موقع تراث صناعي وعلامة محلية", latitude: 26.1548, longitude: 32.7253 }
    ]
  },
  {
    name: "Beheira",
    nameAr: "البحيرة",
    places: [
      { name: "Rosetta Stone Site", nameAr: "موقع حجر رشيد", description: "Location where the famous Rosetta Stone was discovered", descriptionAr: "الموقع الذي تم اكتشاف حجر رشيد فيه", latitude: 31.4031, longitude: 30.4159 },
      { name: "Lake Maryut", nameAr: "بحيرة مريوط", description: "Coastal lake with fishing villages", descriptionAr: "بحيرة ساحلية بها قرى صيد", latitude: 30.8031, longitude: 29.6159 },
      { name: "Damanhur City", nameAr: "مدينة دمنهور", description: "Capital of Beheira with historical sites", descriptionAr: "عاصمة البحيرة بها مواقع تاريخية", latitude: 31.0331, longitude: 30.4759 },
      { name: "Beheira Museum", nameAr: "متحف البحيرة", description: "Museum preserving local history and culture", descriptionAr: "متحف يحافظ على التاريخ والثقافة المحلية", latitude: 31.0331, longitude: 30.4759 },
      { name: "Agricultural Heritage Sites", nameAr: "مواقع التراث الزراعي", description: "Traditional farming communities and agricultural landmarks", descriptionAr: "مجتمعات زراعية تقليدية وعلامات زراعية", latitude: 31.0331, longitude: 30.4759 }
    ]
  },
  {
    name: "Beni Suef",
    nameAr: "بني سويف",
    places: [
      { name: "Beni Suef Museum", nameAr: "متحف بني سويف", description: "Museum showcasing regional artifacts", descriptionAr: "متحف يعرض الآثار الإقليمية", latitude: 29.0631, longitude: 31.0959 },
      { name: "Medinet Madi", nameAr: "مدينة ماضي", description: "Ancient city ruins with temples", descriptionAr: "أطلال مدينة قديمة بها معابد", latitude: 29.3631, longitude: 30.5959 },
      { name: "Nile Corniche", nameAr: "كورنيش النيل", description: "Scenic waterfront promenade", descriptionAr: "ممشى ساحلي خلاب", latitude: 29.0631, longitude: 31.0959 },
      { name: "Beni Suef Barrage", nameAr: "سد بني سويف", description: "Historic dam across the Nile", descriptionAr: "سد تاريخي عبر النيل", latitude: 29.0631, longitude: 31.0959 },
      { name: "Palm Groves", nameAr: "بساتين النخيل", description: "Extensive palm plantations and agricultural areas", descriptionAr: "بساتين نخيل واسعة ومناطق زراعية", latitude: 29.0631, longitude: 31.0959 }
    ]
  },
  {
    name: "Faiyum",
    nameAr: "الفيوم",
    places: [
      { name: "Lake Qarun", nameAr: "بحيرة قارون", description: "Ancient lake with scenic beauty and water sports", descriptionAr: "بحيرة قديمة بجمال خلاب ورياضات مائية", latitude: 29.4331, longitude: 30.5459 },
      { name: "Faiyum Oasis", nameAr: "واحة الفيوم", description: "Green oasis with waterfalls and natural springs", descriptionAr: "واحة خضراء بشلالات وينابيع طبيعية", latitude: 29.3031, longitude: 30.8459 },
      { name: "Karanis", nameAr: "كرانيس", description: "Ancient Greco-Roman city ruins", descriptionAr: "أطلال مدينة يونانية رومانية قديمة", latitude: 29.3631, longitude: 30.9459 },
      { name: "Faiyum Museum", nameAr: "متحف الفيوم", description: "Museum with mummy portraits and artifacts", descriptionAr: "متحف بصور المومياوات والآثار", latitude: 29.3031, longitude: 30.8459 },
      { name: "Wadi El Rayan", nameAr: "وادي الريان", description: "Protected area with waterfalls and desert landscape", descriptionAr: "منطقة محمية بشلالات ومناظر صحراوية", latitude: 29.1931, longitude: 30.5459 }
    ]
  },
  {
    name: "Minya",
    nameAr: "المنيا",
    places: [
      { name: "Beni Hasan", nameAr: "بني حسن", description: "Ancient rock tombs with detailed wall paintings", descriptionAr: "قبور صخرية قديمة برسومات جدارية مفصلة", latitude: 28.1631, longitude: 30.8959 },
      { name: "Minya Museum", nameAr: "متحف المنيا", description: "Museum displaying regional archaeological finds", descriptionAr: "متحف يعرض الاكتشافات الأثرية الإقليمية", latitude: 28.1031, longitude: 30.7459 },
      { name: "Tell El Amarna", nameAr: "تل العمارنة", description: "Ancient city of Akhenaten with historical significance", descriptionAr: "مدينة أخناتون القديمة ذات الأهمية التاريخية", latitude: 27.6431, longitude: 30.8959 },
      { name: "Nile Valley Scenery", nameAr: "مناظر وادي النيل", description: "Beautiful Nile Valley landscape and agriculture", descriptionAr: "مناظر وادي النيل الجميلة والزراعة", latitude: 28.1031, longitude: 30.7459 },
      { name: "Coptic Churches", nameAr: "الكنائس القبطية", description: "Historic Coptic churches in the region", descriptionAr: "كنائس قبطية تاريخية في المنطقة", latitude: 28.1031, longitude: 30.7459 }
    ]
  },
  {
    name: "Dakahlia",
    nameAr: "الدقهلية",
    places: [
      { name: "Mansoura City", nameAr: "مدينة المنصورة", description: "Historic city with cultural landmarks", descriptionAr: "مدينة تاريخية بمعالم ثقافية", latitude: 31.0431, longitude: 31.3659 },
      { name: "Dakahlia Museum", nameAr: "متحف الدقهلية", description: "Museum preserving regional heritage", descriptionAr: "متحف يحافظ على التراث الإقليمي", latitude: 31.0431, longitude: 31.3659 },
      { name: "Nile Delta Agriculture", nameAr: "زراعة دلتا النيل", description: "Fertile agricultural lands of the Nile Delta", descriptionAr: "أراضي زراعية خصبة في دلتا النيل", latitude: 31.0431, longitude: 31.3659 },
      { name: "Traditional Markets", nameAr: "الأسواق التقليدية", description: "Historic bazaars and traditional commerce", descriptionAr: "أسواق تاريخية وتجارة تقليدية", latitude: 31.0431, longitude: 31.3659 },
      { name: "Coptic Heritage Sites", nameAr: "مواقع التراث القبطي", description: "Historic Coptic churches and monasteries", descriptionAr: "كنائس وأديرة قبطية تاريخية", latitude: 31.0431, longitude: 31.3659 }
    ]
  },
  {
    name: "Damietta",
    nameAr: "دمياط",
    places: [
      { name: "Damietta Port", nameAr: "ميناء دمياط", description: "Historic Mediterranean port city", descriptionAr: "مدينة ميناء متوسطية تاريخية", latitude: 31.4231, longitude: 31.8259 },
      { name: "Damietta Museum", nameAr: "متحف دمياط", description: "Museum showcasing maritime and local history", descriptionAr: "متحف يعرض التاريخ البحري والمحلي", latitude: 31.4231, longitude: 31.8259 },
      { name: "Fishing Villages", nameAr: "قرى الصيد", description: "Traditional fishing communities", descriptionAr: "مجتمعات صيد تقليدية", latitude: 31.4231, longitude: 31.8259 },
      { name: "Furniture Crafts", nameAr: "حرف الأثاث", description: "Famous wooden furniture workshops", descriptionAr: "ورش الأثاث الخشبي الشهيرة", latitude: 31.4231, longitude: 31.8259 },
      { name: "Nile Delta Beaches", nameAr: "شواطئ دلتا النيل", description: "Sandy beaches along the Mediterranean coast", descriptionAr: "شواطئ رملية على الساحل المتوسطي", latitude: 31.4231, longitude: 31.8259 }
    ]
  },
  {
    name: "Gharbia",
    nameAr: "الغربية",
    places: [
      { name: "Tanta City", nameAr: "مدينة طنطا", description: "Historic city with cultural significance", descriptionAr: "مدينة تاريخية ذات أهمية ثقافية", latitude: 30.7831, longitude: 31.0059 },
      { name: "Gharbia Museum", nameAr: "متحف الغربية", description: "Museum displaying regional artifacts", descriptionAr: "متحف يعرض الآثار الإقليمية", latitude: 30.7831, longitude: 31.0059 },
      { name: "Agricultural Lands", nameAr: "الأراضي الزراعية", description: "Fertile agricultural region of the Nile Delta", descriptionAr: "منطقة زراعية خصبة في دلتا النيل", latitude: 30.7831, longitude: 31.0059 },
      { name: "Traditional Crafts", nameAr: "الحرف التقليدية", description: "Local handicrafts and traditional industries", descriptionAr: "الحرف اليدوية والصناعات التقليدية المحلية", latitude: 30.7831, longitude: 31.0059 },
      { name: "Religious Sites", nameAr: "المواقع الدينية", description: "Historic mosques and religious landmarks", descriptionAr: "مساجد تاريخية ومعالم دينية", latitude: 30.7831, longitude: 31.0059 }
    ]
  },
  {
    name: "Ismailia",
    nameAr: "الإسماعيلية",
    places: [
      { name: "Suez Canal", nameAr: "قناة السويس", description: "One of the world's most important shipping routes", descriptionAr: "أحد أهم طرق الشحن في العالم", latitude: 30.5931, longitude: 32.2759 },
      { name: "Ismailia Museum", nameAr: "متحف الإسماعيلية", description: "Museum showcasing Suez Canal history", descriptionAr: "متحف يعرض تاريخ قناة السويس", latitude: 30.5931, longitude: 32.2759 },
      { name: "Ismailia Gardens", nameAr: "حدائق الإسماعيلية", description: "Beautiful public gardens and parks", descriptionAr: "حدائق عامة جميلة ومتنزهات", latitude: 30.5931, longitude: 32.2759 },
      { name: "Lake Timsah", nameAr: "بحيرة التمساح", description: "Lake along the Suez Canal", descriptionAr: "بحيرة على طول قناة السويس", latitude: 30.5931, longitude: 32.2759 },
      { name: "De Lesseps Statue", nameAr: "تمثال ديليسبس", description: "Monument to the founder of Suez Canal", descriptionAr: "نصب تذكاري لمؤسس قناة السويس", latitude: 30.5931, longitude: 32.2759 }
    ]
  },
  {
    name: "Kafr El Sheikh",
    nameAr: "كفر الشيخ",
    places: [
      { name: "Kafr El Sheikh Museum", nameAr: "متحف كفر الشيخ", description: "Museum of local history and culture", descriptionAr: "متحف التاريخ والثقافة المحلية", latitude: 31.1131, longitude: 30.9359 },
      { name: "Nile Delta Agriculture", nameAr: "زراعة دلتا النيل", description: "Fertile agricultural lands", descriptionAr: "أراضي زراعية خصبة", latitude: 31.1131, longitude: 30.9359 },
      { name: "Fishing Communities", nameAr: "مجتمعات الصيد", description: "Traditional fishing villages", descriptionAr: "قرى صيد تقليدية", latitude: 31.1131, longitude: 30.9359 },
      { name: "Nile Corniche", nameAr: "كورنيش النيل", description: "Scenic waterfront promenade", descriptionAr: "ممشى ساحلي خلاب", latitude: 31.1131, longitude: 30.9359 },
      { name: "Traditional Markets", nameAr: "الأسواق التقليدية", description: "Historic bazaars and commerce", descriptionAr: "أسواق تاريخية وتجارة", latitude: 31.1131, longitude: 30.9359 }
    ]
  },
  {
    name: "Matrouh",
    nameAr: "مطروح",
    places: [
      { name: "Marsa Matruh Beach", nameAr: "شاطئ مرسى مطروح", description: "Beautiful Mediterranean beach resort", descriptionAr: "منتجع شاطئ متوسطي جميل", latitude: 31.3531, longitude: 27.2459 },
      { name: "Matrouh Museum", nameAr: "متحف مطروح", description: "Museum of local history and WWII artifacts", descriptionAr: "متحف التاريخ المحلي وآثار الحرب العالمية الثانية", latitude: 31.3531, longitude: 27.2459 },
      { name: "Cleopatra Beach", nameAr: "شاطئ كليوباترا", description: "Historic beach with legend of Cleopatra", descriptionAr: "شاطئ تاريخي بأسطورة كليوباترا", latitude: 31.3531, longitude: 27.2459 },
      { name: "Siwa Oasis", nameAr: "واحة سيوة", description: "Remote oasis with unique culture", descriptionAr: "واحة نائية بثقافة فريدة", latitude: 29.2031, longitude: 25.5159 },
      { name: "Desert Landscape", nameAr: "المناظر الصحراوية", description: "Scenic desert views and natural beauty", descriptionAr: "مناظر صحراوية خلابة وجمال طبيعي", latitude: 31.3531, longitude: 27.2459 }
    ]
  },
  {
    name: "Monufia",
    nameAr: "المنوفية",
    places: [
      { name: "Monufia Museum", nameAr: "متحف المنوفية", description: "Museum of regional history", descriptionAr: "متحف التاريخ الإقليمي", latitude: 30.5431, longitude: 30.9759 },
      { name: "Agricultural Heritage", nameAr: "التراث الزراعي", description: "Traditional farming and agricultural sites", descriptionAr: "المزارع التقليدية والمواقع الزراعية", latitude: 30.5431, longitude: 30.9759 },
      { name: "Shibin El Kom", nameAr: "شبين الكوم", description: "Capital city with cultural landmarks", descriptionAr: "مدينة العاصمة بمعالم ثقافية", latitude: 30.5431, longitude: 30.9759 },
      { name: "Traditional Crafts", nameAr: "الحرف التقليدية", description: "Local handicrafts and industries", descriptionAr: "الحرف اليدوية والصناعات المحلية", latitude: 30.5431, longitude: 30.9759 },
      { name: "Religious Sites", nameAr: "المواقع الدينية", description: "Historic mosques and churches", descriptionAr: "مساجد وكنائس تاريخية", latitude: 30.5431, longitude: 30.9759 }
    ]
  },
  {
    name: "New Valley",
    nameAr: "الوادي الجديد",
    places: [
      { name: "Kharga Oasis", nameAr: "واحة الخارجة", description: "Large oasis with archaeological sites", descriptionAr: "واحة كبيرة بمواقع أثرية", latitude: 25.4531, longitude: 30.5459 },
      { name: "Dakhla Oasis", nameAr: "واحة الداخلة", description: "Beautiful oasis with traditional villages", descriptionAr: "واحة جميلة بقرى تقليدية", latitude: 25.5031, longitude: 29.0259 },
      { name: "New Valley Museum", nameAr: "متحف الوادي الجديد", description: "Museum of oasis culture and history", descriptionAr: "متحف ثقافة وتاريخ الواحات", latitude: 25.4531, longitude: 30.5459 },
      { name: "Desert Landscape", nameAr: "المناظر الصحراوية", description: "Vast desert scenery and natural beauty", descriptionAr: "مناظر صحراوية واسعة وجمال طبيعي", latitude: 25.4531, longitude: 30.5459 },
      { name: "Ancient Temples", nameAr: "المعابد القديمة", description: "Ancient temple ruins in the oases", descriptionAr: "أطلال معابد قديمة في الواحات", latitude: 25.4531, longitude: 30.5459 }
    ]
  },
  {
    name: "North Sinai",
    nameAr: "شمال سيناء",
    places: [
      { name: "Arish City", nameAr: "مدينة العريش", description: "Capital of North Sinai with beaches", descriptionAr: "عاصمة شمال سيناء بشواطئ", latitude: 31.1331, longitude: 33.8059 },
      { name: "North Sinai Museum", nameAr: "متحف شمال سيناء", description: "Museum of Sinai history and culture", descriptionAr: "متحف تاريخ وثقافة سيناء", latitude: 31.1331, longitude: 33.8059 },
      { name: "Pelusium", nameAr: "بيلوسيوم", description: "Ancient city ruins on the Mediterranean", descriptionAr: "أطلال مدينة قديمة على البحر المتوسط", latitude: 31.0531, longitude: 34.5659 },
      { name: "Mediterranean Beaches", nameAr: "شواطئ البحر المتوسط", description: "Beautiful coastal beaches", descriptionAr: "شواطئ ساحلية جميلة", latitude: 31.1331, longitude: 33.8059 },
      { name: "Desert Landscape", nameAr: "المناظر الصحراوية", description: "Scenic desert views", descriptionAr: "مناظر صحراوية خلابة", latitude: 31.1331, longitude: 33.8059 }
    ]
  },
  {
    name: "Port Said",
    nameAr: "بورسعيد",
    places: [
      { name: "Port Said Canal", nameAr: "قناة بورسعيد", description: "Northern entrance of the Suez Canal", descriptionAr: "المدخل الشمالي لقناة السويس", latitude: 31.2631, longitude: 32.2959 },
      { name: "Port Said Museum", nameAr: "متحف بورسعيد", description: "Museum of maritime and local history", descriptionAr: "متحف التاريخ البحري والمحلي", latitude: 31.2631, longitude: 32.2959 },
      { name: "Port Said Beach", nameAr: "شاطئ بورسعيد", description: "Mediterranean beach resort", descriptionAr: "منتجع شاطئ متوسطي", latitude: 31.2631, longitude: 32.2959 },
      { name: "Military Museum", nameAr: "المتحف العسكري", description: "Museum of military history", descriptionAr: "متحف التاريخ العسكري", latitude: 31.2631, longitude: 32.2959 },
      { name: "Corniche Promenade", nameAr: "كورنيش الممشى", description: "Scenic waterfront promenade", descriptionAr: "ممشى ساحلي خلاب", latitude: 31.2631, longitude: 32.2959 }
    ]
  },
  {
    name: "Qalyubia",
    nameAr: "القليوبية",
    places: [
      { name: "Qalyubia Museum", nameAr: "متحف القليوبية", description: "Museum of regional history", descriptionAr: "متحف التاريخ الإقليمي", latitude: 30.3431, longitude: 31.1359 },
      { name: "Nile Valley", nameAr: "وادي النيل", description: "Beautiful Nile Valley landscape", descriptionAr: "مناظر وادي النيل الجميلة", latitude: 30.3431, longitude: 31.1359 },
      { name: "Agricultural Lands", nameAr: "الأراضي الزراعية", description: "Fertile agricultural region", descriptionAr: "منطقة زراعية خصبة", latitude: 30.3431, longitude: 31.1359 },
      { name: "Traditional Villages", nameAr: "القرى التقليدية", description: "Historic farming communities", descriptionAr: "مجتمعات زراعية تاريخية", latitude: 30.3431, longitude: 31.1359 },
      { name: "Religious Sites", nameAr: "المواقع الدينية", description: "Historic mosques and shrines", descriptionAr: "مساجد وأضرحة تاريخية", latitude: 30.3431, longitude: 31.1359 }
    ]
  },
  {
    name: "Red Sea",
    nameAr: "البحر الأحمر",
    places: [
      { name: "Hurghada Beach", nameAr: "شاطئ الغردقة", description: "Popular Red Sea beach resort", descriptionAr: "منتجع شاطئ البحر الأحمر الشهير", latitude: 27.2631, longitude: 33.8159 },
      { name: "Red Sea Coral Reefs", nameAr: "الشعاب المرجانية بالبحر الأحمر", description: "World-class diving and snorkeling", descriptionAr: "غوص وسباحة عالمية المستوى", latitude: 27.2631, longitude: 33.8159 },
      { name: "Red Sea Museum", nameAr: "متحف البحر الأحمر", description: "Museum of marine life and local history", descriptionAr: "متحف الحياة البحرية والتاريخ المحلي", latitude: 27.2631, longitude: 33.8159 },
      { name: "Marsa Alam", nameAr: "مرسى علم", description: "Coastal town with pristine beaches", descriptionAr: "مدينة ساحلية بشواطئ بكر", latitude: 25.7631, longitude: 34.8159 },
      { name: "Desert Landscape", nameAr: "المناظر الصحراوية", description: "Desert meets sea scenery", descriptionAr: "مناظر الصحراء تلتقي بالبحر", latitude: 27.2631, longitude: 33.8159 }
    ]
  },
  {
    name: "Sharqia",
    nameAr: "الشرقية",
    places: [
      { name: "Zagazig City", nameAr: "مدينة الزقازيق", description: "Capital of Sharqia with cultural landmarks", descriptionAr: "عاصمة الشرقية بمعالم ثقافية", latitude: 30.5831, longitude: 31.5059 },
      { name: "Sharqia Museum", nameAr: "متحف الشرقية", description: "Museum of regional archaeology", descriptionAr: "متحف الآثار الإقليمية", latitude: 30.5831, longitude: 31.5059 },
      { name: "Bubastis", nameAr: "بوباستيس", description: "Ancient city ruins of the cat goddess Bastet", descriptionAr: "أطلال مدينة قديمة لإلهة القطط باستت", latitude: 30.5631, longitude: 31.5359 },
      { name: "Agricultural Lands", nameAr: "الأراضي الزراعية", description: "Fertile Nile Delta region", descriptionAr: "منطقة دلتا النيل الخصبة", latitude: 30.5831, longitude: 31.5059 },
      { name: "Traditional Markets", nameAr: "الأسواق التقليدية", description: "Historic bazaars and commerce", descriptionAr: "أسواق تاريخية وتجارة", latitude: 30.5831, longitude: 31.5059 }
    ]
  },
  {
    name: "South Sinai",
    nameAr: "جنوب سيناء",
    places: [
      { name: "Sharm El Sheikh", nameAr: "شرم الشيخ", description: "World-famous beach resort and diving destination", descriptionAr: "منتجع شاطئ عالمي الشهرة وموقع غوص", latitude: 27.9631, longitude: 34.3359 },
      { name: "Dahab", nameAr: "داهب", description: "Coastal town with water sports and diving", descriptionAr: "مدينة ساحلية برياضات مائية وغوص", latitude: 28.5031, longitude: 34.5059 },
      { name: "Mount Sinai", nameAr: "جبل سيناء", description: "Sacred mountain with religious significance", descriptionAr: "جبل مقدس ذو أهمية دينية", latitude: 28.5431, longitude: 33.9759 },
      { name: "Saint Catherine Monastery", nameAr: "دير سانت كاترين", description: "Ancient monastery at the foot of Mount Sinai", descriptionAr: "دير قديم عند سفح جبل سيناء", latitude: 28.5431, longitude: 33.9759 },
      { name: "Coral Reefs", nameAr: "الشعاب المرجانية", description: "Pristine coral reefs for diving and snorkeling", descriptionAr: "شعاب مرجانية بكر للغوص والسباحة", latitude: 27.9631, longitude: 34.3359 }
    ]
  },
  {
    name: "Suez",
    nameAr: "السويس",
    places: [
      { name: "Suez Canal", nameAr: "قناة السويس", description: "World's most important shipping route", descriptionAr: "أهم طريق شحن في العالم", latitude: 29.9631, longitude: 32.5359 },
      { name: "Suez Museum", nameAr: "متحف السويس", description: "Museum of canal and military history", descriptionAr: "متحف تاريخ القناة والعسكري", latitude: 29.9631, longitude: 32.5359 },
      { name: "Port of Suez", nameAr: "ميناء السويس", description: "Major international port", descriptionAr: "ميناء دولي رئيسي", latitude: 29.9631, longitude: 32.5359 },
      { name: "War Museum", nameAr: "متحف الحرب", description: "Museum of military history", descriptionAr: "متحف التاريخ العسكري", latitude: 29.9631, longitude: 32.5359 },
      { name: "Red Sea Views", nameAr: "إطلالات البحر الأحمر", description: "Scenic views of the Red Sea", descriptionAr: "إطلالات خلابة على البحر الأحمر", latitude: 29.9631, longitude: 32.5359 }
    ]
  }
];

async function main() {
  const db = await getDb();
  if (!db) {
    console.error("❌ Database connection failed");
    process.exit(1);
  }

  console.log("🌍 Starting to seed tourism data...\n");

  for (const gov of tourismData) {
    try {
      // Insert governorate
      const govResult = await db.insert(governorates).values({
        name: gov.name,
        nameAr: gov.nameAr,
      });

      const govId = (govResult as any).insertId;

      if (!govId) {
        console.warn(`⚠️  Skipped ${gov.name} - could not get ID`);
        continue;
      }

      // Insert places for this governorate
      let placesCount = 0;
      for (const place of gov.places) {
        try {
          await db.insert(touristPlaces).values({
            governorateId: govId,
            name: place.name,
            nameAr: place.nameAr,
            description: place.description,
            descriptionAr: place.descriptionAr,
            latitude: place.latitude.toString(),
            longitude: place.longitude.toString(),
          });
          placesCount++;
        } catch (error) {
          console.warn(`  ⚠️  Failed to insert place: ${place.name}`);
        }
      }

      console.log(`✅ ${gov.name} - ${placesCount}/5 places added`);
    } catch (error) {
      console.error(`❌ Error processing ${gov.name}:`, error);
    }
  }

  console.log("\n✨ Database seeding completed!");
  process.exit(0);
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
