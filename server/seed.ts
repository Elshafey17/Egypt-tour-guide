import { getDb, getAllGovernorate } from "./db";
import { governorates, touristPlaces } from "../drizzle/schema";

const tourismData: Record<string, any> = {
  "Alexandria": {
    "ar": "الإسكندرية",
    "places": [
      {
        "name": "Citadel of Qaitbay",
        "ar_name": "قلعة قايتباي",
        "description": "A 15th-century fortress built on the site of the ancient Lighthouse of Alexandria",
        "ar_description": "حصن من القرن الخامس عشر بني على موقع منارة الإسكندرية القديمة",
        "latitude": 31.2629,
        "longitude": 29.8683
      },
      {
        "name": "Bibliotheca Alexandrina",
        "ar_name": "مكتبة الإسكندرية",
        "description": "Modern library honoring the ancient Library of Alexandria",
        "ar_description": "مكتبة حديثة تكرم مكتبة الإسكندرية القديمة",
        "latitude": 31.2129,
        "longitude": 29.9154
      },
      {
        "name": "Montaza Palace",
        "ar_name": "قصر المنتزة",
        "description": "Royal palace with beautiful gardens overlooking the Mediterranean",
        "ar_description": "قصر ملكي بحدائق جميلة تطل على البحر المتوسط",
        "latitude": 31.2859,
        "longitude": 29.9833
      },
      {
        "name": "Catacombs of Kom el Shoqafa",
        "ar_name": "أنفاق كوم الشقافة",
        "description": "Ancient underground burial chambers from the Greco-Roman period",
        "ar_description": "حجرات دفن تحت الأرض من العصر الروماني اليوناني",
        "latitude": 31.1938,
        "longitude": 29.9154
      },
      {
        "name": "Alexandria National Museum",
        "ar_name": "المتحف الوطني بالإسكندرية",
        "description": "Museum showcasing artifacts from Alexandria's rich history",
        "ar_description": "متحف يعرض آثار من التاريخ الغني للإسكندرية",
        "latitude": 31.2129,
        "longitude": 29.8329
      }
    ]
  },
  "Cairo": {
    "ar": "القاهرة",
    "places": [
      {
        "name": "Great Pyramids of Giza",
        "ar_name": "أهرام الجيزة العظيمة",
        "description": "Ancient wonders of the world - the pyramids of Khufu, Khafre, and Menkaure",
        "ar_description": "عجائب العالم القديم - أهرام خوفو وخفرع ومنقرع",
        "latitude": 29.9792,
        "longitude": 31.1342
      },
      {
        "name": "Egyptian Museum",
        "ar_name": "المتحف المصري",
        "description": "World's largest collection of ancient Egyptian artifacts",
        "ar_description": "أكبر مجموعة من الآثار المصرية القديمة في العالم",
        "latitude": 30.0453,
        "longitude": 31.2357
      },
      {
        "name": "Khan El-Khalili Bazaar",
        "ar_name": "خان الخليلي",
        "description": "Historic marketplace with traditional crafts and souvenirs",
        "ar_description": "سوق تاريخي بالحرف والهدايا التقليدية",
        "latitude": 30.0626,
        "longitude": 31.2329
      },
      {
        "name": "Al-Azhar Mosque",
        "ar_name": "مسجد الأزهر",
        "description": "One of the oldest and most important mosques in Cairo",
        "ar_description": "أحد أقدم وأهم المساجد في القاهرة",
        "latitude": 30.0626,
        "longitude": 31.2626
      },
      {
        "name": "Citadel of Saladin",
        "ar_name": "قلعة صلاح الدين",
        "description": "Medieval fortress with panoramic views of Cairo",
        "ar_description": "حصن وسيط مع إطلالات بانورامية على القاهرة",
        "latitude": 30.0259,
        "longitude": 31.2626
      }
    ]
  },
  "Giza": {
    "ar": "الجيزة",
    "places": [
      {
        "name": "Sphinx",
        "ar_name": "أبو الهول",
        "description": "Iconic limestone statue with the body of a lion and head of a pharaoh",
        "ar_description": "تمثال حجري شهير برأس فرعون وجسم أسد",
        "latitude": 29.9755,
        "longitude": 31.1371
      },
      {
        "name": "Solar Boat Museum",
        "ar_name": "متحف القارب الشمسي",
        "description": "Museum housing the reconstructed ancient solar boat of Khufu",
        "ar_description": "متحف يضم القارب الشمسي القديم المعاد بناؤه",
        "latitude": 29.9792,
        "longitude": 31.1342
      },
      {
        "name": "Saqqara",
        "ar_name": "سقارة",
        "description": "Ancient necropolis with the Step Pyramid of Djoser",
        "ar_description": "مقبرة قديمة تضم هرم جوسر المدرج",
        "latitude": 29.8719,
        "longitude": 31.2188
      },
      {
        "name": "Memphis",
        "ar_name": "منف",
        "description": "Ancient capital of Egypt with ruins and statues",
        "ar_description": "عاصمة مصر القديمة مع الأطلال والتماثيل",
        "latitude": 29.8398,
        "longitude": 31.2517
      },
      {
        "name": "Dahshur",
        "ar_name": "دهشور",
        "description": "Archaeological site with the Bent Pyramid and Red Pyramid",
        "ar_description": "موقع أثري يضم الهرم الأحمر والهرم المائل",
        "latitude": 29.8071,
        "longitude": 31.2096
      }
    ]
  },
  "Luxor": {
    "ar": "الأقصر",
    "places": [
      {
        "name": "Valley of the Kings",
        "ar_name": "وادي الملوك",
        "description": "Ancient burial ground of pharaohs with royal tombs",
        "ar_description": "مقبرة فرعونية قديمة تضم قبور الملوك",
        "latitude": 25.7404,
        "longitude": 32.6028
      },
      {
        "name": "Karnak Temple",
        "ar_name": "معبد الكرنك",
        "description": "Massive temple complex dedicated to Amun-Ra",
        "ar_description": "مجمع معبد ضخم مكرس لآمون رع",
        "latitude": 25.7174,
        "longitude": 32.6560
      },
      {
        "name": "Luxor Temple",
        "ar_name": "معبد الأقصر",
        "description": "Temple on the east bank of the Nile with colossal statues",
        "ar_description": "معبد على الضفة الشرقية للنيل مع تماثيل ضخمة",
        "latitude": 25.6964,
        "longitude": 32.6397
      },
      {
        "name": "Valley of the Queens",
        "ar_name": "وادي الملكات",
        "description": "Burial site of royal wives and princes",
        "ar_description": "موقع دفن زوجات الملوك والأمراء",
        "latitude": 25.7404,
        "longitude": 32.5896
      },
      {
        "name": "Mortuary Temple of Hatshepsut",
        "ar_name": "معبد حتشبسوت الجنائزي",
        "description": "Terraced temple of the female pharaoh Hatshepsut",
        "ar_description": "معبد مدرج للفرعونة حتشبسوت",
        "latitude": 25.7404,
        "longitude": 32.6028
      }
    ]
  },
  "Aswan": {
    "ar": "أسوان",
    "places": [
      {
        "name": "Aswan High Dam",
        "ar_name": "السد العالي",
        "description": "Modern engineering marvel controlling the Nile's flow",
        "ar_description": "عجيبة هندسية حديثة تتحكم في تدفق النيل",
        "latitude": 23.9691,
        "longitude": 32.8872
      },
      {
        "name": "Abu Simbel",
        "ar_name": "أبو سمبل",
        "description": "Two colossal rock temples of Ramesses II",
        "ar_description": "معبدان ضخمان منحوتان في الصخر لرمسيس الثاني",
        "latitude": 22.3479,
        "longitude": 31.6074
      },
      {
        "name": "Philae Temple",
        "ar_name": "معبد فيلة",
        "description": "Temple dedicated to Isis on an island in the Nile",
        "ar_description": "معبد مكرس لإيزيس على جزيرة في النيل",
        "latitude": 24.0197,
        "longitude": 32.8872
      },
      {
        "name": "Nubian Museum",
        "ar_name": "المتحف النوبي",
        "description": "Museum preserving Nubian culture and heritage",
        "ar_description": "متحف يحافظ على الثقافة والتراث النوبي",
        "latitude": 23.9691,
        "longitude": 32.8872
      },
      {
        "name": "Botanical Garden",
        "ar_name": "الحديقة النباتية",
        "description": "Beautiful garden on Kitchener Island with tropical plants",
        "ar_description": "حديقة جميلة على جزيرة كتشنر بنباتات استوائية",
        "latitude": 23.9691,
        "longitude": 32.8872
      }
    ]
  },
  "Asyut": {
    "ar": "أسيوط",
    "places": [
      {
        "name": "Al-Azab Mosque",
        "ar_name": "مسجد الأزاب",
        "description": "Historic mosque in the city center",
        "ar_description": "مسجد تاريخي في وسط المدينة",
        "latitude": 27.1801,
        "longitude": 31.1888
      },
      {
        "name": "Asyut Museum",
        "ar_name": "متحف أسيوط",
        "description": "Museum showcasing regional artifacts and history",
        "ar_description": "متحف يعرض الآثار والتاريخ الإقليمي",
        "latitude": 27.1801,
        "longitude": 31.1888
      },
      {
        "name": "Asyut Barrage",
        "ar_name": "سد أسيوط",
        "description": "Historic dam across the Nile",
        "ar_description": "سد تاريخي عبر النيل",
        "latitude": 27.1801,
        "longitude": 31.1888
      },
      {
        "name": "Deir Al-Muharraq Monastery",
        "ar_name": "دير المحرق",
        "description": "Ancient Coptic monastery with religious significance",
        "ar_description": "دير قبطي قديم ذو أهمية دينية",
        "latitude": 27.2801,
        "longitude": 31.1888
      },
      {
        "name": "Asyut Governorate Palace",
        "ar_name": "قصر محافظة أسيوط",
        "description": "Historic palace with architectural significance",
        "ar_description": "قصر تاريخي ذو أهمية معمارية",
        "latitude": 27.1801,
        "longitude": 31.1888
      }
    ]
  },
  "Sohag": {
    "ar": "سوهاج",
    "places": [
      {
        "name": "Abydos Temple",
        "ar_name": "معبد أبيدوس",
        "description": "Temple of Seti I with detailed hieroglyphics",
        "ar_description": "معبد سيتي الأول بنقوش هيروغليفية مفصلة",
        "latitude": 26.1848,
        "longitude": 31.9233
      },
      {
        "name": "Dendera Temple",
        "ar_name": "معبد دندرة",
        "description": "Temple of Hathor with zodiac ceiling",
        "ar_description": "معبد حتحور بسقف البروج الفلكي",
        "latitude": 26.1658,
        "longitude": 32.6697
      },
      {
        "name": "White Monastery",
        "ar_name": "الدير الأبيض",
        "description": "Ancient Coptic monastery with white limestone walls",
        "ar_description": "دير قبطي قديم بجدران من الحجر الجيري الأبيض",
        "latitude": 26.3848,
        "longitude": 31.9233
      },
      {
        "name": "Red Monastery",
        "ar_name": "الدير الأحمر",
        "description": "Coptic monastery with red brick construction",
        "ar_description": "دير قبطي ببناء من الطوب الأحمر",
        "latitude": 26.3848,
        "longitude": 31.9233
      },
      {
        "name": "Sohag Museum",
        "ar_name": "متحف سوهاج",
        "description": "Museum displaying regional archaeological finds",
        "ar_description": "متحف يعرض الاكتشافات الأثرية الإقليمية",
        "latitude": 26.5548,
        "longitude": 31.6953
      }
    ]
  },
  "Qena": {
    "ar": "قنا",
    "places": [
      {
        "name": "Qena Pottery",
        "ar_name": "فخار قنا",
        "description": "Traditional pottery workshops and markets",
        "ar_description": "ورش وأسواق الفخار التقليدي",
        "latitude": 26.1548,
        "longitude": 32.7253
      },
      {
        "name": "Qena Museum",
        "ar_name": "متحف قنا",
        "description": "Museum showcasing Qena's cultural heritage",
        "ar_description": "متحف يعرض التراث الثقافي لقنا",
        "latitude": 26.1548,
        "longitude": 32.7253
      },
      {
        "name": "Nile Valley Views",
        "ar_name": "مناظر وادي النيل",
        "description": "Scenic views of the Nile Valley",
        "ar_description": "إطلالات خلابة على وادي النيل",
        "latitude": 26.1548,
        "longitude": 32.7253
      },
      {
        "name": "Coptic Church of Qena",
        "ar_name": "الكنيسة القبطية بقنا",
        "description": "Historic Coptic church in the city",
        "ar_description": "كنيسة قبطية تاريخية في المدينة",
        "latitude": 26.1548,
        "longitude": 32.7253
      },
      {
        "name": "Qena Sugar Factory",
        "ar_name": "مصنع السكر بقنا",
        "description": "Industrial heritage site and local landmark",
        "ar_description": "موقع تراث صناعي وعلامة محلية",
        "latitude": 26.1548,
        "longitude": 32.7253
      }
    ]
  },
  "Beheira": {
    "ar": "البحيرة",
    "places": [
      {
        "name": "Rosetta Stone Site",
        "ar_name": "موقع حجر رشيد",
        "description": "Location where the famous Rosetta Stone was discovered",
        "ar_description": "الموقع الذي تم اكتشاف حجر رشيد فيه",
        "latitude": 31.4031,
        "longitude": 30.4159
      },
      {
        "name": "Lake Maryut",
        "ar_name": "بحيرة مريوط",
        "description": "Coastal lake with fishing villages",
        "ar_description": "بحيرة ساحلية بها قرى صيد",
        "latitude": 30.8031,
        "longitude": 29.6159
      },
      {
        "name": "Damanhur City",
        "ar_name": "مدينة دمنهور",
        "description": "Capital of Beheira with historical sites",
        "ar_description": "عاصمة البحيرة بها مواقع تاريخية",
        "latitude": 31.0331,
        "longitude": 30.4759
      },
      {
        "name": "Beheira Museum",
        "ar_name": "متحف البحيرة",
        "description": "Museum preserving local history and culture",
        "ar_description": "متحف يحافظ على التاريخ والثقافة المحلية",
        "latitude": 31.0331,
        "longitude": 30.4759
      },
      {
        "name": "Agricultural Heritage Sites",
        "ar_name": "مواقع التراث الزراعي",
        "description": "Traditional farming communities and agricultural landmarks",
        "ar_description": "مجتمعات زراعية تقليدية وعلامات زراعية",
        "latitude": 31.0331,
        "longitude": 30.4759
      }
    ]
  },
  "Beni Suef": {
    "ar": "بني سويف",
    "places": [
      {
        "name": "Beni Suef Museum",
        "ar_name": "متحف بني سويف",
        "description": "Museum showcasing regional artifacts",
        "ar_description": "متحف يعرض الآثار الإقليمية",
        "latitude": 29.0631,
        "longitude": 31.0959
      },
      {
        "name": "Medinet Madi",
        "ar_name": "مدينة ماضي",
        "description": "Ancient city ruins with temples",
        "ar_description": "أطلال مدينة قديمة بها معابد",
        "latitude": 29.3631,
        "longitude": 30.5959
      },
      {
        "name": "Nile Corniche",
        "ar_name": "كورنيش النيل",
        "description": "Scenic waterfront promenade",
        "ar_description": "ممشى ساحلي خلاب",
        "latitude": 29.0631,
        "longitude": 31.0959
      },
      {
        "name": "Beni Suef Barrage",
        "ar_name": "سد بني سويف",
        "description": "Historic dam across the Nile",
        "ar_description": "سد تاريخي عبر النيل",
        "latitude": 29.0631,
        "longitude": 31.0959
      },
      {
        "name": "Palm Groves",
        "ar_name": "بساتين النخيل",
        "description": "Extensive palm plantations and agricultural areas",
        "ar_description": "بساتين نخيل واسعة ومناطق زراعية",
        "latitude": 29.0631,
        "longitude": 31.0959
      }
    ]
  },
  "Faiyum": {
    "ar": "الفيوم",
    "places": [
      {
        "name": "Lake Qarun",
        "ar_name": "بحيرة قارون",
        "description": "Ancient lake with scenic beauty and water sports",
        "ar_description": "بحيرة قديمة بجمال خلاب ورياضات مائية",
        "latitude": 29.4331,
        "longitude": 30.5459
      },
      {
        "name": "Faiyum Oasis",
        "ar_name": "واحة الفيوم",
        "description": "Green oasis with waterfalls and natural springs",
        "ar_description": "واحة خضراء بشلالات وينابيع طبيعية",
        "latitude": 29.3031,
        "longitude": 30.8459
      },
      {
        "name": "Karanis",
        "ar_name": "كرانيس",
        "description": "Ancient Greco-Roman city ruins",
        "ar_description": "أطلال مدينة يونانية رومانية قديمة",
        "latitude": 29.3631,
        "longitude": 30.9459
      },
      {
        "name": "Faiyum Museum",
        "ar_name": "متحف الفيوم",
        "description": "Museum with mummy portraits and artifacts",
        "ar_description": "متحف بصور المومياوات والآثار",
        "latitude": 29.3031,
        "longitude": 30.8459
      },
      {
        "name": "Wadi El Rayan",
        "ar_name": "وادي الريان",
        "description": "Protected area with waterfalls and desert landscape",
        "ar_description": "منطقة محمية بشلالات ومناظر صحراوية",
        "latitude": 29.1931,
        "longitude": 30.5459
      }
    ]
  },
  "Minya": {
    "ar": "المنيا",
    "places": [
      {
        "name": "Beni Hasan",
        "ar_name": "بني حسن",
        "description": "Ancient rock tombs with detailed wall paintings",
        "ar_description": "قبور صخرية قديمة برسومات جدارية مفصلة",
        "latitude": 28.1631,
        "longitude": 30.8959
      },
      {
        "name": "Minya Museum",
        "ar_name": "متحف المنيا",
        "description": "Museum displaying regional archaeological finds",
        "ar_description": "متحف يعرض الاكتشافات الأثرية الإقليمية",
        "latitude": 28.1031,
        "longitude": 30.7459
      },
      {
        "name": "Tell El Amarna",
        "ar_name": "تل العمارنة",
        "description": "Ancient city of Akhenaten with historical significance",
        "ar_description": "مدينة أخناتون القديمة ذات الأهمية التاريخية",
        "latitude": 27.6431,
        "longitude": 30.8959
      },
      {
        "name": "Nile Valley Scenery",
        "ar_name": "مناظر وادي النيل",
        "description": "Beautiful Nile Valley landscape and agriculture",
        "ar_description": "مناظر وادي النيل الجميلة والزراعة",
        "latitude": 28.1031,
        "longitude": 30.7459
      },
      {
        "name": "Coptic Churches",
        "ar_name": "الكنائس القبطية",
        "description": "Historic Coptic churches in the region",
        "ar_description": "كنائس قبطية تاريخية في المنطقة",
        "latitude": 28.1031,
        "longitude": 30.7459
      }
    ]
  },
  "Dakahlia": {
    "ar": "الدقهلية",
    "places": [
      {
        "name": "Mansoura City",
        "ar_name": "مدينة المنصورة",
        "description": "Historic city with cultural landmarks",
        "ar_description": "مدينة تاريخية بمعالم ثقافية",
        "latitude": 31.0431,
        "longitude": 31.3659
      },
      {
        "name": "Dakahlia Museum",
        "ar_name": "متحف الدقهلية",
        "description": "Museum preserving regional heritage",
        "ar_description": "متحف يحافظ على التراث الإقليمي",
        "latitude": 31.0431,
        "longitude": 31.3659
      },
      {
        "name": "Nile Delta Agriculture",
        "ar_name": "زراعة دلتا النيل",
        "description": "Fertile agricultural lands of the Nile Delta",
        "ar_description": "أراضي زراعية خصبة في دلتا النيل",
        "latitude": 31.0431,
        "longitude": 31.3659
      },
      {
        "name": "Traditional Markets",
        "ar_name": "الأسواق التقليدية",
        "description": "Historic bazaars and traditional commerce",
        "ar_description": "أسواق تاريخية وتجارة تقليدية",
        "latitude": 31.0431,
        "longitude": 31.3659
      },
      {
        "name": "Coptic Heritage Sites",
        "ar_name": "مواقع التراث القبطي",
        "description": "Historic Coptic churches and monasteries",
        "ar_description": "كنائس وأديرة قبطية تاريخية",
        "latitude": 31.0431,
        "longitude": 31.3659
      }
    ]
  },
  "Damietta": {
    "ar": "دمياط",
    "places": [
      {
        "name": "Damietta Port",
        "ar_name": "ميناء دمياط",
        "description": "Historic Mediterranean port city",
        "ar_description": "مدينة ميناء متوسطية تاريخية",
        "latitude": 31.4231,
        "longitude": 31.8259
      },
      {
        "name": "Damietta Museum",
        "ar_name": "متحف دمياط",
        "description": "Museum showcasing maritime and local history",
        "ar_description": "متحف يعرض التاريخ البحري والمحلي",
        "latitude": 31.4231,
        "longitude": 31.8259
      },
      {
        "name": "Fishing Villages",
        "ar_name": "قرى الصيد",
        "description": "Traditional fishing communities",
        "ar_description": "مجتمعات صيد تقليدية",
        "latitude": 31.4231,
        "longitude": 31.8259
      },
      {
        "name": "Furniture Crafts",
        "ar_name": "حرف الأثاث",
        "description": "Famous wooden furniture workshops",
        "ar_description": "ورش الأثاث الخشبي الشهيرة",
        "latitude": 31.4231,
        "longitude": 31.8259
      },
      {
        "name": "Nile Delta Beaches",
        "ar_name": "شواطئ دلتا النيل",
        "description": "Sandy beaches along the Mediterranean coast",
        "ar_description": "شواطئ رملية على الساحل المتوسطي",
        "latitude": 31.4231,
        "longitude": 31.8259
      }
    ]
  },
  "Gharbia": {
    "ar": "الغربية",
    "places": [
      {
        "name": "Tanta City",
        "ar_name": "مدينة طنطا",
        "description": "Historic city with cultural significance",
        "ar_description": "مدينة تاريخية ذات أهمية ثقافية",
        "latitude": 30.7831,
        "longitude": 31.0059
      },
      {
        "name": "Gharbia Museum",
        "ar_name": "متحف الغربية",
        "description": "Museum displaying regional artifacts",
        "ar_description": "متحف يعرض الآثار الإقليمية",
        "latitude": 30.7831,
        "longitude": 31.0059
      },
      {
        "name": "Agricultural Lands",
        "ar_name": "الأراضي الزراعية",
        "description": "Fertile agricultural region of the Nile Delta",
        "ar_description": "منطقة زراعية خصبة في دلتا النيل",
        "latitude": 30.7831,
        "longitude": 31.0059
      },
      {
        "name": "Traditional Crafts",
        "ar_name": "الحرف التقليدية",
        "description": "Local handicrafts and traditional industries",
        "ar_description": "الحرف اليدوية والصناعات التقليدية المحلية",
        "latitude": 30.7831,
        "longitude": 31.0059
      },
      {
        "name": "Religious Sites",
        "ar_name": "المواقع الدينية",
        "description": "Historic mosques and religious landmarks",
        "ar_description": "مساجد تاريخية ومعالم دينية",
        "latitude": 30.7831,
        "longitude": 31.0059
      }
    ]
  },
  "Ismailia": {
    "ar": "الإسماعيلية",
    "places": [
      {
        "name": "Suez Canal",
        "ar_name": "قناة السويس",
        "description": "One of the world's most important shipping routes",
        "ar_description": "أحد أهم طرق الشحن في العالم",
        "latitude": 30.5931,
        "longitude": 32.2759
      },
      {
        "name": "Ismailia Museum",
        "ar_name": "متحف الإسماعيلية",
        "description": "Museum showcasing Suez Canal history",
        "ar_description": "متحف يعرض تاريخ قناة السويس",
        "latitude": 30.5931,
        "longitude": 32.2759
      },
      {
        "name": "Ismailia Gardens",
        "ar_name": "حدائق الإسماعيلية",
        "description": "Beautiful public gardens and parks",
        "ar_description": "حدائق عامة جميلة ومتنزهات",
        "latitude": 30.5931,
        "longitude": 32.2759
      },
      {
        "name": "Lake Timsah",
        "ar_name": "بحيرة التمساح",
        "description": "Lake along the Suez Canal",
        "ar_description": "بحيرة على طول قناة السويس",
        "latitude": 30.5931,
        "longitude": 32.2759
      },
      {
        "name": "De Lesseps Statue",
        "ar_name": "تمثال ديليسبس",
        "description": "Monument to the founder of Suez Canal",
        "ar_description": "نصب تذكاري لمؤسس قناة السويس",
        "latitude": 30.5931,
        "longitude": 32.2759
      }
    ]
  },
  "Kafr El Sheikh": {
    "ar": "كفر الشيخ",
    "places": [
      {
        "name": "Kafr El Sheikh Museum",
        "ar_name": "متحف كفر الشيخ",
        "description": "Museum of local history and culture",
        "ar_description": "متحف التاريخ والثقافة المحلية",
        "latitude": 31.1131,
        "longitude": 30.9359
      },
      {
        "name": "Nile Delta Agriculture",
        "ar_name": "زراعة دلتا النيل",
        "description": "Fertile agricultural lands",
        "ar_description": "أراضي زراعية خصبة",
        "latitude": 31.1131,
        "longitude": 30.9359
      },
      {
        "name": "Fishing Communities",
        "ar_name": "مجتمعات الصيد",
        "description": "Traditional fishing villages",
        "ar_description": "قرى صيد تقليدية",
        "latitude": 31.1131,
        "longitude": 30.9359
      },
      {
        "name": "Nile Corniche",
        "ar_name": "كورنيش النيل",
        "description": "Scenic waterfront promenade",
        "ar_description": "ممشى ساحلي خلاب",
        "latitude": 31.1131,
        "longitude": 30.9359
      },
      {
        "name": "Traditional Markets",
        "ar_name": "الأسواق التقليدية",
        "description": "Historic bazaars and commerce",
        "ar_description": "أسواق تاريخية وتجارة",
        "latitude": 31.1131,
        "longitude": 30.9359
      }
    ]
  },
  "Matrouh": {
    "ar": "مطروح",
    "places": [
      {
        "name": "Marsa Matruh Beach",
        "ar_name": "شاطئ مرسى مطروح",
        "description": "Beautiful Mediterranean beach resort",
        "ar_description": "منتجع شاطئ متوسطي جميل",
        "latitude": 31.3531,
        "longitude": 27.2459
      },
      {
        "name": "Matrouh Museum",
        "ar_name": "متحف مطروح",
        "description": "Museum of local history and WWII artifacts",
        "ar_description": "متحف التاريخ المحلي وآثار الحرب العالمية الثانية",
        "latitude": 31.3531,
        "longitude": 27.2459
      },
      {
        "name": "Cleopatra Beach",
        "ar_name": "شاطئ كليوباترا",
        "description": "Historic beach with legend of Cleopatra",
        "ar_description": "شاطئ تاريخي بأسطورة كليوباترا",
        "latitude": 31.3531,
        "longitude": 27.2459
      },
      {
        "name": "Siwa Oasis",
        "ar_name": "واحة سيوة",
        "description": "Remote oasis with unique culture",
        "ar_description": "واحة نائية بثقافة فريدة",
        "latitude": 29.2031,
        "longitude": 25.5159
      },
      {
        "name": "Desert Landscape",
        "ar_name": "المناظر الصحراوية",
        "description": "Scenic desert views and natural beauty",
        "ar_description": "مناظر صحراوية خلابة وجمال طبيعي",
        "latitude": 31.3531,
        "longitude": 27.2459
      }
    ]
  },
  "Monufia": {
    "ar": "المنوفية",
    "places": [
      {
        "name": "Monufia Museum",
        "ar_name": "متحف المنوفية",
        "description": "Museum of regional history",
        "ar_description": "متحف التاريخ الإقليمي",
        "latitude": 30.5431,
        "longitude": 30.9759
      },
      {
        "name": "Agricultural Heritage",
        "ar_name": "التراث الزراعي",
        "description": "Traditional farming and agricultural sites",
        "ar_description": "المزارع التقليدية والمواقع الزراعية",
        "latitude": 30.5431,
        "longitude": 30.9759
      },
      {
        "name": "Shibin El Kom",
        "ar_name": "شبين الكوم",
        "description": "Capital city with cultural landmarks",
        "ar_description": "مدينة العاصمة بمعالم ثقافية",
        "latitude": 30.5431,
        "longitude": 30.9759
      },
      {
        "name": "Traditional Crafts",
        "ar_name": "الحرف التقليدية",
        "description": "Local handicrafts and industries",
        "ar_description": "الحرف اليدوية والصناعات المحلية",
        "latitude": 30.5431,
        "longitude": 30.9759
      },
      {
        "name": "Religious Sites",
        "ar_name": "المواقع الدينية",
        "description": "Historic mosques and churches",
        "ar_description": "مساجد وكنائس تاريخية",
        "latitude": 30.5431,
        "longitude": 30.9759
      }
    ]
  },
  "New Valley": {
    "ar": "الوادي الجديد",
    "places": [
      {
        "name": "Kharga Oasis",
        "ar_name": "واحة الخارجة",
        "description": "Large oasis with archaeological sites",
        "ar_description": "واحة كبيرة بمواقع أثرية",
        "latitude": 25.4531,
        "longitude": 30.5459
      },
      {
        "name": "Dakhla Oasis",
        "ar_name": "واحة الداخلة",
        "description": "Beautiful oasis with traditional villages",
        "ar_description": "واحة جميلة بقرى تقليدية",
        "latitude": 25.5031,
        "longitude": 29.0259
      },
      {
        "name": "New Valley Museum",
        "ar_name": "متحف الوادي الجديد",
        "description": "Museum of oasis culture and history",
        "ar_description": "متحف ثقافة وتاريخ الواحات",
        "latitude": 25.4531,
        "longitude": 30.5459
      },
      {
        "name": "Desert Landscape",
        "ar_name": "المناظر الصحراوية",
        "description": "Vast desert scenery and natural beauty",
        "ar_description": "مناظر صحراوية واسعة وجمال طبيعي",
        "latitude": 25.4531,
        "longitude": 30.5459
      },
      {
        "name": "Ancient Temples",
        "ar_name": "المعابد القديمة",
        "description": "Ancient temple ruins in the oases",
        "ar_description": "أطلال معابد قديمة في الواحات",
        "latitude": 25.4531,
        "longitude": 30.5459
      }
    ]
  },
  "North Sinai": {
    "ar": "شمال سيناء",
    "places": [
      {
        "name": "Arish City",
        "ar_name": "مدينة العريش",
        "description": "Capital of North Sinai with beaches",
        "ar_description": "عاصمة شمال سيناء بشواطئ",
        "latitude": 31.1331,
        "longitude": 33.8059
      },
      {
        "name": "North Sinai Museum",
        "ar_name": "متحف شمال سيناء",
        "description": "Museum of Sinai history and culture",
        "ar_description": "متحف تاريخ وثقافة سيناء",
        "latitude": 31.1331,
        "longitude": 33.8059
      },
      {
        "name": "Pelusium",
        "ar_name": "بيلوسيوم",
        "description": "Ancient city ruins on the Mediterranean",
        "ar_description": "أطلال مدينة قديمة على البحر المتوسط",
        "latitude": 31.0531,
        "longitude": 34.5659
      },
      {
        "name": "Mediterranean Beaches",
        "ar_name": "شواطئ البحر المتوسط",
        "description": "Beautiful coastal beaches",
        "ar_description": "شواطئ ساحلية جميلة",
        "latitude": 31.1331,
        "longitude": 33.8059
      },
      {
        "name": "Desert Landscape",
        "ar_name": "المناظر الصحراوية",
        "description": "Scenic desert views",
        "ar_description": "مناظر صحراوية خلابة",
        "latitude": 31.1331,
        "longitude": 33.8059
      }
    ]
  },
  "Port Said": {
    "ar": "بورسعيد",
    "places": [
      {
        "name": "Port Said Canal",
        "ar_name": "قناة بورسعيد",
        "description": "Northern entrance of the Suez Canal",
        "ar_description": "المدخل الشمالي لقناة السويس",
        "latitude": 31.2631,
        "longitude": 32.2959
      },
      {
        "name": "Port Said Museum",
        "ar_name": "متحف بورسعيد",
        "description": "Museum of maritime and local history",
        "ar_description": "متحف التاريخ البحري والمحلي",
        "latitude": 31.2631,
        "longitude": 32.2959
      },
      {
        "name": "Port Said Beach",
        "ar_name": "شاطئ بورسعيد",
        "description": "Mediterranean beach resort",
        "ar_description": "منتجع شاطئ متوسطي",
        "latitude": 31.2631,
        "longitude": 32.2959
      },
      {
        "name": "Military Museum",
        "ar_name": "المتحف العسكري",
        "description": "Museum of military history",
        "ar_description": "متحف التاريخ العسكري",
        "latitude": 31.2631,
        "longitude": 32.2959
      },
      {
        "name": "Corniche Promenade",
        "ar_name": "كورنيش الممشى",
        "description": "Scenic waterfront promenade",
        "ar_description": "ممشى ساحلي خلاب",
        "latitude": 31.2631,
        "longitude": 32.2959
      }
    ]
  },
  "Qalyubia": {
    "ar": "القليوبية",
    "places": [
      {
        "name": "Qalyubia Museum",
        "ar_name": "متحف القليوبية",
        "description": "Museum of regional history",
        "ar_description": "متحف التاريخ الإقليمي",
        "latitude": 30.3431,
        "longitude": 31.1359
      },
      {
        "name": "Nile Valley",
        "ar_name": "وادي النيل",
        "description": "Beautiful Nile Valley landscape",
        "ar_description": "مناظر وادي النيل الجميلة",
        "latitude": 30.3431,
        "longitude": 31.1359
      },
      {
        "name": "Agricultural Lands",
        "ar_name": "الأراضي الزراعية",
        "description": "Fertile agricultural region",
        "ar_description": "منطقة زراعية خصبة",
        "latitude": 30.3431,
        "longitude": 31.1359
      },
      {
        "name": "Traditional Villages",
        "ar_name": "القرى التقليدية",
        "description": "Historic farming communities",
        "ar_description": "مجتمعات زراعية تاريخية",
        "latitude": 30.3431,
        "longitude": 31.1359
      },
      {
        "name": "Religious Sites",
        "ar_name": "المواقع الدينية",
        "description": "Historic mosques and shrines",
        "ar_description": "مساجد وأضرحة تاريخية",
        "latitude": 30.3431,
        "longitude": 31.1359
      }
    ]
  },
  "Red Sea": {
    "ar": "البحر الأحمر",
    "places": [
      {
        "name": "Hurghada Beach",
        "ar_name": "شاطئ الغردقة",
        "description": "Popular Red Sea beach resort",
        "ar_description": "منتجع شاطئ البحر الأحمر الشهير",
        "latitude": 27.2631,
        "longitude": 33.8159
      },
      {
        "name": "Red Sea Coral Reefs",
        "ar_name": "الشعاب المرجانية بالبحر الأحمر",
        "description": "World-class diving and snorkeling",
        "ar_description": "غوص وسباحة عالمية المستوى",
        "latitude": 27.2631,
        "longitude": 33.8159
      },
      {
        "name": "Red Sea Museum",
        "ar_name": "متحف البحر الأحمر",
        "description": "Museum of marine life and local history",
        "ar_description": "متحف الحياة البحرية والتاريخ المحلي",
        "latitude": 27.2631,
        "longitude": 33.8159
      },
      {
        "name": "Marsa Alam",
        "ar_name": "مرسى علم",
        "description": "Coastal town with pristine beaches",
        "ar_description": "مدينة ساحلية بشواطئ بكر",
        "latitude": 25.7631,
        "longitude": 34.8159
      },
      {
        "name": "Desert Landscape",
        "ar_name": "المناظر الصحراوية",
        "description": "Desert meets sea scenery",
        "ar_description": "مناظر الصحراء تلتقي بالبحر",
        "latitude": 27.2631,
        "longitude": 33.8159
      }
    ]
  },
  "Sharqia": {
    "ar": "الشرقية",
    "places": [
      {
        "name": "Zagazig City",
        "ar_name": "مدينة الزقازيق",
        "description": "Capital of Sharqia with cultural landmarks",
        "ar_description": "عاصمة الشرقية بمعالم ثقافية",
        "latitude": 30.5831,
        "longitude": 31.5059
      },
      {
        "name": "Sharqia Museum",
        "ar_name": "متحف الشرقية",
        "description": "Museum of regional archaeology",
        "ar_description": "متحف الآثار الإقليمية",
        "latitude": 30.5831,
        "longitude": 31.5059
      },
      {
        "name": "Bubastis",
        "ar_name": "بوباستيس",
        "description": "Ancient city ruins of the cat goddess Bastet",
        "ar_description": "أطلال مدينة قديمة لإلهة القطط باستت",
        "latitude": 30.5631,
        "longitude": 31.5359
      },
      {
        "name": "Agricultural Lands",
        "ar_name": "الأراضي الزراعية",
        "description": "Fertile Nile Delta region",
        "ar_description": "منطقة دلتا النيل الخصبة",
        "latitude": 30.5831,
        "longitude": 31.5059
      },
      {
        "name": "Traditional Markets",
        "ar_name": "الأسواق التقليدية",
        "description": "Historic bazaars and commerce",
        "ar_description": "أسواق تاريخية وتجارة",
        "latitude": 30.5831,
        "longitude": 31.5059
      }
    ]
  },
  "South Sinai": {
    "ar": "جنوب سيناء",
    "places": [
      {
        "name": "Sharm El Sheikh",
        "ar_name": "شرم الشيخ",
        "description": "World-famous beach resort and diving destination",
        "ar_description": "منتجع شاطئ عالمي الشهرة وموقع غوص",
        "latitude": 27.9631,
        "longitude": 34.3359
      },
      {
        "name": "Dahab",
        "ar_name": "داهب",
        "description": "Coastal town with water sports and diving",
        "ar_description": "مدينة ساحلية برياضات مائية وغوص",
        "latitude": 28.5031,
        "longitude": 34.5059
      },
      {
        "name": "Mount Sinai",
        "ar_name": "جبل سيناء",
        "description": "Sacred mountain with religious significance",
        "ar_description": "جبل مقدس ذو أهمية دينية",
        "latitude": 28.5431,
        "longitude": 33.9759
      },
      {
        "name": "Saint Catherine Monastery",
        "ar_name": "دير سانت كاترين",
        "description": "Ancient monastery at the foot of Mount Sinai",
        "ar_description": "دير قديم عند سفح جبل سيناء",
        "latitude": 28.5431,
        "longitude": 33.9759
      },
      {
        "name": "Coral Reefs",
        "ar_name": "الشعاب المرجانية",
        "description": "Pristine coral reefs for diving and snorkeling",
        "ar_description": "شعاب مرجانية بكر للغوص والسباحة",
        "latitude": 27.9631,
        "longitude": 34.3359
      }
    ]
  },
  "Suez": {
    "ar": "السويس",
    "places": [
      {
        "name": "Suez Canal",
        "ar_name": "قناة السويس",
        "description": "World's most important shipping route",
        "ar_description": "أهم طريق شحن في العالم",
        "latitude": 29.9631,
        "longitude": 32.5359
      },
      {
        "name": "Suez Museum",
        "ar_name": "متحف السويس",
        "description": "Museum of canal and military history",
        "ar_description": "متحف تاريخ القناة والعسكري",
        "latitude": 29.9631,
        "longitude": 32.5359
      },
      {
        "name": "Port of Suez",
        "ar_name": "ميناء السويس",
        "description": "Major international port",
        "ar_description": "ميناء دولي رئيسي",
        "latitude": 29.9631,
        "longitude": 32.5359
      },
      {
        "name": "War Museum",
        "ar_name": "متحف الحرب",
        "description": "Museum of military history",
        "ar_description": "متحف التاريخ العسكري",
        "latitude": 29.9631,
        "longitude": 32.5359
      },
      {
        "name": "Red Sea Views",
        "ar_name": "إطلالات البحر الأحمر",
        "description": "Scenic views of the Red Sea",
        "ar_description": "إطلالات خلابة على البحر الأحمر",
        "latitude": 29.9631,
        "longitude": 32.5359
      }
    ]
  }
};

async function seed() {
  const db = await getDb();
  if (!db) {
    console.error("Database connection failed");
    return;
  }

  try {
    for (const [govName, govData] of Object.entries(tourismData)) {
      // Insert governorate
      const govResult = await db.insert(governorates).values({
        name: govName,
        nameAr: govData.ar,
      });
      
      const govId = (govResult as any).insertId;
      
      if (!govId) {
        console.warn(`Failed to insert governorate: ${govName}`);
        continue;
      }
      
      // Insert tourist places
      for (const place of govData.places) {
        await db.insert(touristPlaces).values({
          governorateId: govId,
          name: place.name,
          nameAr: place.ar_name,
          description: place.description,
          descriptionAr: place.ar_description,
          latitude: place.latitude.toString(),
          longitude: place.longitude.toString(),
        });
      }
      
      console.log(`✓ Seeded ${govName} with ${govData.places.length} places`);
    }
    
    console.log("\n✓ Database seeding completed successfully!");
  } catch (error) {
    console.error("Seeding error:", error);
  }
}

seed();
