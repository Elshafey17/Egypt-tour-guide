-- Insert Governorates and Tourist Places

INSERT INTO governorates (name, nameAr) VALUES ('Alexandria', 'الإسكندرية');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Citadel of Qaitbay', 'قلعة قايتباي', 'A 15th-century fortress built on the site of the ancient Lighthouse of Alexandria', 'حصن من القرن الخامس عشر بني على موقع منارة الإسكندرية القديمة', '31.2629', '29.8683'),
(@govId, 'Bibliotheca Alexandrina', 'مكتبة الإسكندرية', 'Modern library honoring the ancient Library of Alexandria', 'مكتبة حديثة تكرم مكتبة الإسكندرية القديمة', '31.2129', '29.9154'),
(@govId, 'Montaza Palace', 'قصر المنتزة', 'Royal palace with beautiful gardens overlooking the Mediterranean', 'قصر ملكي بحدائق جميلة تطل على البحر المتوسط', '31.2859', '29.9833'),
(@govId, 'Catacombs of Kom el Shoqafa', 'أنفاق كوم الشقافة', 'Ancient underground burial chambers from the Greco-Roman period', 'حجرات دفن تحت الأرض من العصر الروماني اليوناني', '31.1938', '29.9154'),
(@govId, 'Alexandria National Museum', 'المتحف الوطني بالإسكندرية', 'Museum showcasing artifacts from Alexandria''s rich history', 'متحف يعرض آثار من التاريخ الغني للإسكندرية', '31.2129', '29.8329');

INSERT INTO governorates (name, nameAr) VALUES ('Cairo', 'القاهرة');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Great Pyramids of Giza', 'أهرام الجيزة العظيمة', 'Ancient wonders of the world - the pyramids of Khufu, Khafre, and Menkaure', 'عجائب العالم القديم - أهرام خوفو وخفرع ومنقرع', '29.9792', '31.1342'),
(@govId, 'Egyptian Museum', 'المتحف المصري', 'World''s largest collection of ancient Egyptian artifacts', 'أكبر مجموعة من الآثار المصرية القديمة في العالم', '30.0453', '31.2357'),
(@govId, 'Khan El-Khalili Bazaar', 'خان الخليلي', 'Historic marketplace with traditional crafts and souvenirs', 'سوق تاريخي بالحرف والهدايا التقليدية', '30.0626', '31.2329'),
(@govId, 'Al-Azhar Mosque', 'مسجد الأزهر', 'One of the oldest and most important mosques in Cairo', 'أحد أقدم وأهم المساجد في القاهرة', '30.0626', '31.2626'),
(@govId, 'Citadel of Saladin', 'قلعة صلاح الدين', 'Medieval fortress with panoramic views of Cairo', 'حصن وسيط مع إطلالات بانورامية على القاهرة', '30.0259', '31.2626');

INSERT INTO governorates (name, nameAr) VALUES ('Giza', 'الجيزة');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Sphinx', 'أبو الهول', 'Iconic limestone statue with the body of a lion and head of a pharaoh', 'تمثال حجري شهير برأس فرعون وجسم أسد', '29.9755', '31.1371'),
(@govId, 'Solar Boat Museum', 'متحف القارب الشمسي', 'Museum housing the reconstructed ancient solar boat of Khufu', 'متحف يضم القارب الشمسي القديم المعاد بناؤه', '29.9792', '31.1342'),
(@govId, 'Saqqara', 'سقارة', 'Ancient necropolis with the Step Pyramid of Djoser', 'مقبرة قديمة تضم هرم جوسر المدرج', '29.8719', '31.2188'),
(@govId, 'Memphis', 'منف', 'Ancient capital of Egypt with ruins and statues', 'عاصمة مصر القديمة مع الأطلال والتماثيل', '29.8398', '31.2517'),
(@govId, 'Dahshur', 'دهشور', 'Archaeological site with the Bent Pyramid and Red Pyramid', 'موقع أثري يضم الهرم الأحمر والهرم المائل', '29.8071', '31.2096');

INSERT INTO governorates (name, nameAr) VALUES ('Luxor', 'الأقصر');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Valley of the Kings', 'وادي الملوك', 'Ancient burial ground of pharaohs with royal tombs', 'مقبرة فرعونية قديمة تضم قبور الملوك', '25.7404', '32.6028'),
(@govId, 'Karnak Temple', 'معبد الكرنك', 'Massive temple complex dedicated to Amun-Ra', 'مجمع معبد ضخم مكرس لآمون رع', '25.7174', '32.6560'),
(@govId, 'Luxor Temple', 'معبد الأقصر', 'Temple on the east bank of the Nile with colossal statues', 'معبد على الضفة الشرقية للنيل مع تماثيل ضخمة', '25.6964', '32.6397'),
(@govId, 'Valley of the Queens', 'وادي الملكات', 'Burial site of royal wives and princes', 'موقع دفن زوجات الملوك والأمراء', '25.7404', '32.5896'),
(@govId, 'Mortuary Temple of Hatshepsut', 'معبد حتشبسوت الجنائزي', 'Terraced temple of the female pharaoh Hatshepsut', 'معبد مدرج للفرعونة حتشبسوت', '25.7404', '32.6028');

INSERT INTO governorates (name, nameAr) VALUES ('Aswan', 'أسوان');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Aswan High Dam', 'السد العالي', 'Modern engineering marvel controlling the Nile''s flow', 'عجيبة هندسية حديثة تتحكم في تدفق النيل', '23.9691', '32.8872'),
(@govId, 'Abu Simbel', 'أبو سمبل', 'Two colossal rock temples of Ramesses II', 'معبدان ضخمان منحوتان في الصخر لرمسيس الثاني', '22.3479', '31.6074'),
(@govId, 'Philae Temple', 'معبد فيلة', 'Temple dedicated to Isis on an island in the Nile', 'معبد مكرس لإيزيس على جزيرة في النيل', '24.0197', '32.8872'),
(@govId, 'Nubian Museum', 'المتحف النوبي', 'Museum preserving Nubian culture and heritage', 'متحف يحافظ على الثقافة والتراث النوبي', '23.9691', '32.8872'),
(@govId, 'Botanical Garden', 'الحديقة النباتية', 'Beautiful garden on Kitchener Island with tropical plants', 'حديقة جميلة على جزيرة كتشنر بنباتات استوائية', '23.9691', '32.8872');

INSERT INTO governorates (name, nameAr) VALUES ('Asyut', 'أسيوط');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Al-Azab Mosque', 'مسجد الأزاب', 'Historic mosque in the city center', 'مسجد تاريخي في وسط المدينة', '27.1801', '31.1888'),
(@govId, 'Asyut Museum', 'متحف أسيوط', 'Museum showcasing regional artifacts and history', 'متحف يعرض الآثار والتاريخ الإقليمي', '27.1801', '31.1888'),
(@govId, 'Asyut Barrage', 'سد أسيوط', 'Historic dam across the Nile', 'سد تاريخي عبر النيل', '27.1801', '31.1888'),
(@govId, 'Deir Al-Muharraq Monastery', 'دير المحرق', 'Ancient Coptic monastery with religious significance', 'دير قبطي قديم ذو أهمية دينية', '27.2801', '31.1888'),
(@govId, 'Asyut Governorate Palace', 'قصر محافظة أسيوط', 'Historic palace with architectural significance', 'قصر تاريخي ذو أهمية معمارية', '27.1801', '31.1888');

INSERT INTO governorates (name, nameAr) VALUES ('Sohag', 'سوهاج');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Abydos Temple', 'معبد أبيدوس', 'Temple of Seti I with detailed hieroglyphics', 'معبد سيتي الأول بنقوش هيروغليفية مفصلة', '26.1848', '31.9233'),
(@govId, 'Dendera Temple', 'معبد دندرة', 'Temple of Hathor with zodiac ceiling', 'معبد حتحور بسقف البروج الفلكي', '26.1658', '32.6697'),
(@govId, 'White Monastery', 'الدير الأبيض', 'Ancient Coptic monastery with white limestone walls', 'دير قبطي قديم بجدران من الحجر الجيري الأبيض', '26.3848', '31.9233'),
(@govId, 'Red Monastery', 'الدير الأحمر', 'Coptic monastery with red brick construction', 'دير قبطي ببناء من الطوب الأحمر', '26.3848', '31.9233'),
(@govId, 'Sohag Museum', 'متحف سوهاج', 'Museum displaying regional archaeological finds', 'متحف يعرض الاكتشافات الأثرية الإقليمية', '26.5548', '31.6953');

INSERT INTO governorates (name, nameAr) VALUES ('Qena', 'قنا');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Qena Pottery', 'فخار قنا', 'Traditional pottery workshops and markets', 'ورش وأسواق الفخار التقليدي', '26.1548', '32.7253'),
(@govId, 'Qena Museum', 'متحف قنا', 'Museum showcasing Qena''s cultural heritage', 'متحف يعرض التراث الثقافي لقنا', '26.1548', '32.7253'),
(@govId, 'Nile Valley Views', 'مناظر وادي النيل', 'Scenic views of the Nile Valley', 'إطلالات خلابة على وادي النيل', '26.1548', '32.7253'),
(@govId, 'Coptic Church of Qena', 'الكنيسة القبطية بقنا', 'Historic Coptic church in the city', 'كنيسة قبطية تاريخية في المدينة', '26.1548', '32.7253'),
(@govId, 'Qena Sugar Factory', 'مصنع السكر بقنا', 'Industrial heritage site and local landmark', 'موقع تراث صناعي وعلامة محلية', '26.1548', '32.7253');

INSERT INTO governorates (name, nameAr) VALUES ('Beheira', 'البحيرة');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Rosetta Stone Site', 'موقع حجر رشيد', 'Location where the famous Rosetta Stone was discovered', 'الموقع الذي تم اكتشاف حجر رشيد فيه', '31.4031', '30.4159'),
(@govId, 'Lake Maryut', 'بحيرة مريوط', 'Coastal lake with fishing villages', 'بحيرة ساحلية بها قرى صيد', '30.8031', '29.6159'),
(@govId, 'Damanhur City', 'مدينة دمنهور', 'Capital of Beheira with historical sites', 'عاصمة البحيرة بها مواقع تاريخية', '31.0331', '30.4759'),
(@govId, 'Beheira Museum', 'متحف البحيرة', 'Museum preserving local history and culture', 'متحف يحافظ على التاريخ والثقافة المحلية', '31.0331', '30.4759'),
(@govId, 'Agricultural Heritage Sites', 'مواقع التراث الزراعي', 'Traditional farming communities and agricultural landmarks', 'مجتمعات زراعية تقليدية وعلامات زراعية', '31.0331', '30.4759');

INSERT INTO governorates (name, nameAr) VALUES ('Beni Suef', 'بني سويف');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Beni Suef Museum', 'متحف بني سويف', 'Museum showcasing regional artifacts', 'متحف يعرض الآثار الإقليمية', '29.0631', '31.0959'),
(@govId, 'Medinet Madi', 'مدينة ماضي', 'Ancient city ruins with temples', 'أطلال مدينة قديمة بها معابد', '29.3631', '30.5959'),
(@govId, 'Nile Corniche', 'كورنيش النيل', 'Scenic waterfront promenade', 'ممشى ساحلي خلاب', '29.0631', '31.0959'),
(@govId, 'Beni Suef Barrage', 'سد بني سويف', 'Historic dam across the Nile', 'سد تاريخي عبر النيل', '29.0631', '31.0959'),
(@govId, 'Palm Groves', 'بساتين النخيل', 'Extensive palm plantations and agricultural areas', 'بساتين نخيل واسعة ومناطق زراعية', '29.0631', '31.0959');

INSERT INTO governorates (name, nameAr) VALUES ('Faiyum', 'الفيوم');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Lake Qarun', 'بحيرة قارون', 'Ancient lake with scenic beauty and water sports', 'بحيرة قديمة بجمال خلاب ورياضات مائية', '29.4331', '30.5459'),
(@govId, 'Faiyum Oasis', 'واحة الفيوم', 'Green oasis with waterfalls and natural springs', 'واحة خضراء بشلالات وينابيع طبيعية', '29.3031', '30.8459'),
(@govId, 'Karanis', 'كرانيس', 'Ancient Greco-Roman city ruins', 'أطلال مدينة يونانية رومانية قديمة', '29.3631', '30.9459'),
(@govId, 'Faiyum Museum', 'متحف الفيوم', 'Museum with mummy portraits and artifacts', 'متحف بصور المومياوات والآثار', '29.3031', '30.8459'),
(@govId, 'Wadi El Rayan', 'وادي الريان', 'Protected area with waterfalls and desert landscape', 'منطقة محمية بشلالات ومناظر صحراوية', '29.1931', '30.5459');

INSERT INTO governorates (name, nameAr) VALUES ('Minya', 'المنيا');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Beni Hasan', 'بني حسن', 'Ancient rock tombs with detailed wall paintings', 'قبور صخرية قديمة برسومات جدارية مفصلة', '28.1631', '30.8959'),
(@govId, 'Minya Museum', 'متحف المنيا', 'Museum displaying regional archaeological finds', 'متحف يعرض الاكتشافات الأثرية الإقليمية', '28.1031', '30.7459'),
(@govId, 'Tell El Amarna', 'تل العمارنة', 'Ancient city of Akhenaten with historical significance', 'مدينة أخناتون القديمة ذات الأهمية التاريخية', '27.6431', '30.8959'),
(@govId, 'Nile Valley Scenery', 'مناظر وادي النيل', 'Beautiful Nile Valley landscape and agriculture', 'مناظر وادي النيل الجميلة والزراعة', '28.1031', '30.7459'),
(@govId, 'Coptic Churches', 'الكنائس القبطية', 'Historic Coptic churches in the region', 'كنائس قبطية تاريخية في المنطقة', '28.1031', '30.7459');

INSERT INTO governorates (name, nameAr) VALUES ('Dakahlia', 'الدقهلية');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Mansoura City', 'مدينة المنصورة', 'Historic city with cultural landmarks', 'مدينة تاريخية بمعالم ثقافية', '31.0431', '31.3659'),
(@govId, 'Dakahlia Museum', 'متحف الدقهلية', 'Museum preserving regional heritage', 'متحف يحافظ على التراث الإقليمي', '31.0431', '31.3659'),
(@govId, 'Nile Delta Agriculture', 'زراعة دلتا النيل', 'Fertile agricultural lands of the Nile Delta', 'أراضي زراعية خصبة في دلتا النيل', '31.0431', '31.3659'),
(@govId, 'Traditional Markets', 'الأسواق التقليدية', 'Historic bazaars and traditional commerce', 'أسواق تاريخية وتجارة تقليدية', '31.0431', '31.3659'),
(@govId, 'Coptic Heritage Sites', 'مواقع التراث القبطي', 'Historic Coptic churches and monasteries', 'كنائس وأديرة قبطية تاريخية', '31.0431', '31.3659');

INSERT INTO governorates (name, nameAr) VALUES ('Damietta', 'دمياط');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Damietta Port', 'ميناء دمياط', 'Historic Mediterranean port city', 'مدينة ميناء متوسطية تاريخية', '31.4231', '31.8259'),
(@govId, 'Damietta Museum', 'متحف دمياط', 'Museum showcasing maritime and local history', 'متحف يعرض التاريخ البحري والمحلي', '31.4231', '31.8259'),
(@govId, 'Fishing Villages', 'قرى الصيد', 'Traditional fishing communities', 'مجتمعات صيد تقليدية', '31.4231', '31.8259'),
(@govId, 'Furniture Crafts', 'حرف الأثاث', 'Famous wooden furniture workshops', 'ورش الأثاث الخشبي الشهيرة', '31.4231', '31.8259'),
(@govId, 'Nile Delta Beaches', 'شواطئ دلتا النيل', 'Sandy beaches along the Mediterranean coast', 'شواطئ رملية على الساحل المتوسطي', '31.4231', '31.8259');

INSERT INTO governorates (name, nameAr) VALUES ('Gharbia', 'الغربية');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Tanta City', 'مدينة طنطا', 'Historic city with cultural significance', 'مدينة تاريخية ذات أهمية ثقافية', '30.7831', '31.0059'),
(@govId, 'Gharbia Museum', 'متحف الغربية', 'Museum displaying regional artifacts', 'متحف يعرض الآثار الإقليمية', '30.7831', '31.0059'),
(@govId, 'Agricultural Lands', 'الأراضي الزراعية', 'Fertile agricultural region of the Nile Delta', 'منطقة زراعية خصبة في دلتا النيل', '30.7831', '31.0059'),
(@govId, 'Traditional Crafts', 'الحرف التقليدية', 'Local handicrafts and traditional industries', 'الحرف اليدوية والصناعات التقليدية المحلية', '30.7831', '31.0059'),
(@govId, 'Religious Sites', 'المواقع الدينية', 'Historic mosques and religious landmarks', 'مساجد تاريخية ومعالم دينية', '30.7831', '31.0059');

INSERT INTO governorates (name, nameAr) VALUES ('Ismailia', 'الإسماعيلية');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Suez Canal', 'قناة السويس', 'One of the world''s most important shipping routes', 'أحد أهم طرق الشحن في العالم', '30.5931', '32.2759'),
(@govId, 'Ismailia Museum', 'متحف الإسماعيلية', 'Museum showcasing Suez Canal history', 'متحف يعرض تاريخ قناة السويس', '30.5931', '32.2759'),
(@govId, 'Ismailia Gardens', 'حدائق الإسماعيلية', 'Beautiful public gardens and parks', 'حدائق عامة جميلة ومتنزهات', '30.5931', '32.2759'),
(@govId, 'Lake Timsah', 'بحيرة التمساح', 'Lake along the Suez Canal', 'بحيرة على طول قناة السويس', '30.5931', '32.2759'),
(@govId, 'De Lesseps Statue', 'تمثال ديليسبس', 'Monument to the founder of Suez Canal', 'نصب تذكاري لمؤسس قناة السويس', '30.5931', '32.2759');

INSERT INTO governorates (name, nameAr) VALUES ('Kafr El Sheikh', 'كفر الشيخ');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Kafr El Sheikh Museum', 'متحف كفر الشيخ', 'Museum of local history and culture', 'متحف التاريخ والثقافة المحلية', '31.1131', '30.9359'),
(@govId, 'Nile Delta Agriculture', 'زراعة دلتا النيل', 'Fertile agricultural lands', 'أراضي زراعية خصبة', '31.1131', '30.9359'),
(@govId, 'Fishing Communities', 'مجتمعات الصيد', 'Traditional fishing villages', 'قرى صيد تقليدية', '31.1131', '30.9359'),
(@govId, 'Nile Corniche', 'كورنيش النيل', 'Scenic waterfront promenade', 'ممشى ساحلي خلاب', '31.1131', '30.9359'),
(@govId, 'Traditional Markets', 'الأسواق التقليدية', 'Historic bazaars and commerce', 'أسواق تاريخية وتجارة', '31.1131', '30.9359');

INSERT INTO governorates (name, nameAr) VALUES ('Matrouh', 'مطروح');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Marsa Matruh Beach', 'شاطئ مرسى مطروح', 'Beautiful Mediterranean beach resort', 'منتجع شاطئ متوسطي جميل', '31.3531', '27.2459'),
(@govId, 'Matrouh Museum', 'متحف مطروح', 'Museum of local history and WWII artifacts', 'متحف التاريخ المحلي وآثار الحرب العالمية الثانية', '31.3531', '27.2459'),
(@govId, 'Cleopatra Beach', 'شاطئ كليوباترا', 'Historic beach with legend of Cleopatra', 'شاطئ تاريخي بأسطورة كليوباترا', '31.3531', '27.2459'),
(@govId, 'Siwa Oasis', 'واحة سيوة', 'Remote oasis with unique culture', 'واحة نائية بثقافة فريدة', '29.2031', '25.5159'),
(@govId, 'Desert Landscape', 'المناظر الصحراوية', 'Scenic desert views and natural beauty', 'مناظر صحراوية خلابة وجمال طبيعي', '31.3531', '27.2459');

INSERT INTO governorates (name, nameAr) VALUES ('Monufia', 'المنوفية');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Monufia Museum', 'متحف المنوفية', 'Museum of regional history', 'متحف التاريخ الإقليمي', '30.5431', '30.9759'),
(@govId, 'Agricultural Heritage', 'التراث الزراعي', 'Traditional farming and agricultural sites', 'المزارع التقليدية والمواقع الزراعية', '30.5431', '30.9759'),
(@govId, 'Shibin El Kom', 'شبين الكوم', 'Capital city with cultural landmarks', 'مدينة العاصمة بمعالم ثقافية', '30.5431', '30.9759'),
(@govId, 'Traditional Crafts', 'الحرف التقليدية', 'Local handicrafts and industries', 'الحرف اليدوية والصناعات المحلية', '30.5431', '30.9759'),
(@govId, 'Religious Sites', 'المواقع الدينية', 'Historic mosques and churches', 'مساجد وكنائس تاريخية', '30.5431', '30.9759');

INSERT INTO governorates (name, nameAr) VALUES ('New Valley', 'الوادي الجديد');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Kharga Oasis', 'واحة الخارجة', 'Large oasis with archaeological sites', 'واحة كبيرة بمواقع أثرية', '25.4531', '30.5459'),
(@govId, 'Dakhla Oasis', 'واحة الداخلة', 'Beautiful oasis with traditional villages', 'واحة جميلة بقرى تقليدية', '25.5031', '29.0259'),
(@govId, 'New Valley Museum', 'متحف الوادي الجديد', 'Museum of oasis culture and history', 'متحف ثقافة وتاريخ الواحات', '25.4531', '30.5459'),
(@govId, 'Desert Landscape', 'المناظر الصحراوية', 'Vast desert scenery and natural beauty', 'مناظر صحراوية واسعة وجمال طبيعي', '25.4531', '30.5459'),
(@govId, 'Ancient Temples', 'المعابد القديمة', 'Ancient temple ruins in the oases', 'أطلال معابد قديمة في الواحات', '25.4531', '30.5459');

INSERT INTO governorates (name, nameAr) VALUES ('North Sinai', 'شمال سيناء');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Arish City', 'مدينة العريش', 'Capital of North Sinai with beaches', 'عاصمة شمال سيناء بشواطئ', '31.1331', '33.8059'),
(@govId, 'North Sinai Museum', 'متحف شمال سيناء', 'Museum of Sinai history and culture', 'متحف تاريخ وثقافة سيناء', '31.1331', '33.8059'),
(@govId, 'Pelusium', 'بيلوسيوم', 'Ancient city ruins on the Mediterranean', 'أطلال مدينة قديمة على البحر المتوسط', '31.0531', '34.5659'),
(@govId, 'Mediterranean Beaches', 'شواطئ البحر المتوسط', 'Beautiful coastal beaches', 'شواطئ ساحلية جميلة', '31.1331', '33.8059'),
(@govId, 'Desert Landscape', 'المناظر الصحراوية', 'Scenic desert views', 'مناظر صحراوية خلابة', '31.1331', '33.8059');

INSERT INTO governorates (name, nameAr) VALUES ('Port Said', 'بورسعيد');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Port Said Canal', 'قناة بورسعيد', 'Northern entrance of the Suez Canal', 'المدخل الشمالي لقناة السويس', '31.2631', '32.2959'),
(@govId, 'Port Said Museum', 'متحف بورسعيد', 'Museum of maritime and local history', 'متحف التاريخ البحري والمحلي', '31.2631', '32.2959'),
(@govId, 'Port Said Beach', 'شاطئ بورسعيد', 'Mediterranean beach resort', 'منتجع شاطئ متوسطي', '31.2631', '32.2959'),
(@govId, 'Military Museum', 'المتحف العسكري', 'Museum of military history', 'متحف التاريخ العسكري', '31.2631', '32.2959'),
(@govId, 'Corniche Promenade', 'كورنيش الممشى', 'Scenic waterfront promenade', 'ممشى ساحلي خلاب', '31.2631', '32.2959');

INSERT INTO governorates (name, nameAr) VALUES ('Qalyubia', 'القليوبية');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Qalyubia Museum', 'متحف القليوبية', 'Museum of regional history', 'متحف التاريخ الإقليمي', '30.3431', '31.1359'),
(@govId, 'Nile Valley', 'وادي النيل', 'Beautiful Nile Valley landscape', 'مناظر وادي النيل الجميلة', '30.3431', '31.1359'),
(@govId, 'Agricultural Lands', 'الأراضي الزراعية', 'Fertile agricultural region', 'منطقة زراعية خصبة', '30.3431', '31.1359'),
(@govId, 'Traditional Villages', 'القرى التقليدية', 'Historic farming communities', 'مجتمعات زراعية تاريخية', '30.3431', '31.1359'),
(@govId, 'Religious Sites', 'المواقع الدينية', 'Historic mosques and shrines', 'مساجد وأضرحة تاريخية', '30.3431', '31.1359');

INSERT INTO governorates (name, nameAr) VALUES ('Red Sea', 'البحر الأحمر');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Hurghada Beach', 'شاطئ الغردقة', 'Popular Red Sea beach resort', 'منتجع شاطئ البحر الأحمر الشهير', '27.2631', '33.8159'),
(@govId, 'Red Sea Coral Reefs', 'الشعاب المرجانية بالبحر الأحمر', 'World-class diving and snorkeling', 'غوص وسباحة عالمية المستوى', '27.2631', '33.8159'),
(@govId, 'Red Sea Museum', 'متحف البحر الأحمر', 'Museum of marine life and local history', 'متحف الحياة البحرية والتاريخ المحلي', '27.2631', '33.8159'),
(@govId, 'Marsa Alam', 'مرسى علم', 'Coastal town with pristine beaches', 'مدينة ساحلية بشواطئ بكر', '25.7631', '34.8159'),
(@govId, 'Desert Landscape', 'المناظر الصحراوية', 'Desert meets sea scenery', 'مناظر الصحراء تلتقي بالبحر', '27.2631', '33.8159');

INSERT INTO governorates (name, nameAr) VALUES ('Sharqia', 'الشرقية');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Zagazig City', 'مدينة الزقازيق', 'Capital of Sharqia with cultural landmarks', 'عاصمة الشرقية بمعالم ثقافية', '30.5831', '31.5059'),
(@govId, 'Sharqia Museum', 'متحف الشرقية', 'Museum of regional archaeology', 'متحف الآثار الإقليمية', '30.5831', '31.5059'),
(@govId, 'Bubastis', 'بوباستيس', 'Ancient city ruins of the cat goddess Bastet', 'أطلال مدينة قديمة لإلهة القطط باستت', '30.5631', '31.5359'),
(@govId, 'Agricultural Lands', 'الأراضي الزراعية', 'Fertile Nile Delta region', 'منطقة دلتا النيل الخصبة', '30.5831', '31.5059'),
(@govId, 'Traditional Markets', 'الأسواق التقليدية', 'Historic bazaars and commerce', 'أسواق تاريخية وتجارة', '30.5831', '31.5059');

INSERT INTO governorates (name, nameAr) VALUES ('South Sinai', 'جنوب سيناء');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Sharm El Sheikh', 'شرم الشيخ', 'World-famous beach resort and diving destination', 'منتجع شاطئ عالمي الشهرة وموقع غوص', '27.9631', '34.3359'),
(@govId, 'Dahab', 'داهب', 'Coastal town with water sports and diving', 'مدينة ساحلية برياضات مائية وغوص', '28.5031', '34.5059'),
(@govId, 'Mount Sinai', 'جبل سيناء', 'Sacred mountain with religious significance', 'جبل مقدس ذو أهمية دينية', '28.5431', '33.9759'),
(@govId, 'Saint Catherine Monastery', 'دير سانت كاترين', 'Ancient monastery at the foot of Mount Sinai', 'دير قديم عند سفح جبل سيناء', '28.5431', '33.9759'),
(@govId, 'Coral Reefs', 'الشعاب المرجانية', 'Pristine coral reefs for diving and snorkeling', 'شعاب مرجانية بكر للغوص والسباحة', '27.9631', '34.3359');

INSERT INTO governorates (name, nameAr) VALUES ('Suez', 'السويس');
SET @govId = LAST_INSERT_ID();
INSERT INTO touristPlaces (governorateId, name, nameAr, description, descriptionAr, latitude, longitude) VALUES
(@govId, 'Suez Canal', 'قناة السويس', 'World''s most important shipping route', 'أهم طريق شحن في العالم', '29.9631', '32.5359'),
(@govId, 'Suez Museum', 'متحف السويس', 'Museum of canal and military history', 'متحف تاريخ القناة والعسكري', '29.9631', '32.5359'),
(@govId, 'Port of Suez', 'ميناء السويس', 'Major international port', 'ميناء دولي رئيسي', '29.9631', '32.5359'),
(@govId, 'War Museum', 'متحف الحرب', 'Museum of military history', 'متحف التاريخ العسكري', '29.9631', '32.5359'),
(@govId, 'Red Sea Views', 'إطلالات البحر الأحمر', 'Scenic views of the Red Sea', 'إطلالات خلابة على البحر الأحمر', '29.9631', '32.5359');
