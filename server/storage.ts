import type { Plant, PlantFilter } from "@shared/schema";

const plants: Plant[] = [
  {
    id: "1",
    nameAr: "اللبلاب",
    nameEn: "Ivy",
    slug: "ivy",
    description: "نبات متسلق جميل يضفي لمسة خضراء رائعة على أي مكان. يعتبر من أسهل النباتات في العناية ويمكن زراعته داخليًا أو خارجيًا.",
    scientificName: "Hedera helix",
    category: "indoor",
    difficulty: "easy",
    wateringFrequency: "مرة أسبوعيًا",
    wateringDetails: "اترك التربة تجف قليلاً بين الريات. تجنب الإفراط في الري لمنع تعفن الجذور.",
    sunlight: "partial_shade",
    sunlightDetails: "يفضل الضوء غير المباشر لكنه يتحمل الظل الجزئي",
    soilType: "تربة خصبة جيدة التصريف غنية بالمواد العضوية",
    temperature: "15-25 درجة مئوية",
    humidity: "رطوبة متوسطة إلى عالية",
    seasonalCare: [
      { season: "الربيع", tips: "قم بتقليم الأوراق الميتة وأضف سمادًا متوازنًا" },
      { season: "الصيف", tips: "زد الري قليلاً واحمِه من أشعة الشمس المباشرة" },
      { season: "الخريف", tips: "قلل الري تدريجيًا واستمر في إزالة الأوراق الصفراء" },
      { season: "الشتاء", tips: "قلل الري بشكل ملحوظ واحفظه في مكان دافئ" }
    ],
    commonIssues: [
      { issue: "اصفرار الأوراق", solution: "قد يكون بسبب الإفراط في الري أو نقص الضوء. تحقق من تصريف التربة" },
      { issue: "تساقط الأوراق", solution: "تحقق من درجة الحرارة والرطوبة. تجنب التيارات الهوائية الباردة" },
      { issue: "حشرات المن", solution: "استخدم محلول صابون مخفف أو زيت النيم" }
    ],
    tips: [
      "يمكن تعليقه في سلال معلقة لمظهر جمالي رائع",
      "قم بتنظيف الأوراق بقطعة قماش مبللة شهريًا",
      "يمكن إكثاره بسهولة من العقل"
    ]
  },
  {
    id: "2",
    nameAr: "المكحلة",
    nameEn: "Tradescantia",
    slug: "tradescantia",
    description: "نبات زينة رائع بأوراقه الملونة البنفسجية والخضراء. سريع النمو ويضيف لمسة من الألوان لأي مكان.",
    scientificName: "Tradescantia zebrina",
    category: "indoor",
    difficulty: "easy",
    wateringFrequency: "مرتين أسبوعيًا",
    wateringDetails: "حافظ على رطوبة التربة دون إغراق. تحب الرطوبة لكن لا تتحمل التربة المشبعة بالماء.",
    sunlight: "indirect",
    sunlightDetails: "ضوء ساطع غير مباشر للحفاظ على ألوان الأوراق الزاهية",
    soilType: "تربة خفيفة جيدة التصريف",
    temperature: "18-27 درجة مئوية",
    humidity: "رطوبة عالية مفضلة",
    seasonalCare: [
      { season: "الربيع", tips: "قم بتقليم السيقان الطويلة لتشجيع النمو الكثيف" },
      { season: "الصيف", tips: "زد الري وضع النبات في مكان مضيء" },
      { season: "الخريف", tips: "قلل الري تدريجيًا" },
      { season: "الشتاء", tips: "احفظه بعيدًا عن البرد والتيارات الهوائية" }
    ],
    commonIssues: [
      { issue: "فقدان لون الأوراق", solution: "زد التعرض للضوء الساطع غير المباشر" },
      { issue: "السيقان الطويلة والضعيفة", solution: "قم بالتقليم المنتظم لتشجيع النمو الكثيف" },
      { issue: "جفاف أطراف الأوراق", solution: "زد الرطوبة حول النبات برش الماء" }
    ],
    tips: [
      "يمكن إكثاره بسهولة من العقل في الماء",
      "رائع للسلال المعلقة",
      "قم برش الأوراق بالماء في الأيام الحارة"
    ]
  },
  {
    id: "3",
    nameAr: "الريحان",
    nameEn: "Basil",
    slug: "basil",
    description: "عشبة عطرية شهيرة تستخدم في الطبخ والطب التقليدي. رائحته الزكية تنعش المكان وتطرد الحشرات.",
    scientificName: "Ocimum basilicum",
    category: "aromatic",
    difficulty: "medium",
    wateringFrequency: "يوميًا في الصيف",
    wateringDetails: "يحتاج إلى ري منتظم. حافظ على رطوبة التربة دون إغراق.",
    sunlight: "full_sun",
    sunlightDetails: "يحتاج 6-8 ساعات من ضوء الشمس المباشر يوميًا",
    soilType: "تربة غنية بالمواد العضوية جيدة التصريف",
    temperature: "20-30 درجة مئوية",
    humidity: "رطوبة متوسطة",
    seasonalCare: [
      { season: "الربيع", tips: "ابدأ الزراعة من البذور أو الشتلات" },
      { season: "الصيف", tips: "احصد الأوراق بانتظام لتشجيع النمو" },
      { season: "الخريف", tips: "احصد كل الأوراق قبل الصقيع" },
      { season: "الشتاء", tips: "يمكن زراعته داخليًا بجوار نافذة مشمسة" }
    ],
    commonIssues: [
      { issue: "اصفرار الأوراق", solution: "قد يكون نقص في النيتروجين. أضف سمادًا عضويًا" },
      { issue: "الإزهار المبكر", solution: "قم بقطف الأزهار فور ظهورها للحفاظ على نكهة الأوراق" },
      { issue: "الذبول", solution: "زد الري واحمِه من أشعة الشمس الحارقة في الظهيرة" }
    ],
    tips: [
      "احصد الأوراق من الأعلى لتشجيع التفرع",
      "يمكن تجميد الأوراق للاستخدام لاحقًا",
      "ازرعه بجانب الطماطم لطرد الآفات"
    ]
  },
  {
    id: "4",
    nameAr: "البندورة",
    nameEn: "Tomato",
    slug: "tomato",
    description: "من أشهر الخضروات المزروعة منزليًا. تنتج ثمارًا لذيذة وطازجة طوال موسم النمو.",
    scientificName: "Solanum lycopersicum",
    category: "edible",
    difficulty: "medium",
    wateringFrequency: "يوميًا في الصيف",
    wateringDetails: "ري عميق ومنتظم. تجنب البلل على الأوراق لمنع الأمراض الفطرية.",
    sunlight: "full_sun",
    sunlightDetails: "تحتاج 8 ساعات على الأقل من ضوء الشمس المباشر",
    soilType: "تربة غنية بالمواد العضوية عميقة وجيدة التصريف",
    temperature: "21-29 درجة مئوية",
    humidity: "رطوبة معتدلة",
    seasonalCare: [
      { season: "الربيع", tips: "ازرع الشتلات بعد انتهاء خطر الصقيع" },
      { season: "الصيف", tips: "أضف دعامات للنباتات وقم بإزالة الفروع الجانبية" },
      { season: "الخريف", tips: "احصد آخر الثمار قبل البرد" },
      { season: "الشتاء", tips: "خطط لزراعة الموسم القادم" }
    ],
    commonIssues: [
      { issue: "تشقق الثمار", solution: "حافظ على انتظام الري وتجنب التذبذب في الرطوبة" },
      { issue: "تعفن نهاية الزهرة", solution: "أضف كالسيوم للتربة وحافظ على انتظام الري" },
      { issue: "الآفات الحشرية", solution: "استخدم مبيدات عضوية أو زيت النيم" }
    ],
    tips: [
      "قم بإزالة الأوراق السفلية لتحسين دوران الهواء",
      "أضف سمادًا غنيًا بالفوسفور عند الإزهار",
      "استخدم نشارة حول النبات للحفاظ على رطوبة التربة"
    ]
  },
  {
    id: "5",
    nameAr: "نبات السجاد",
    nameEn: "Coleus",
    slug: "coleus",
    description: "نبات زينة مذهل بأوراقه الملونة المتنوعة. يضيف ألوانًا زاهية لأي حديقة أو مساحة داخلية.",
    scientificName: "Coleus scutellarioides",
    category: "indoor",
    difficulty: "easy",
    wateringFrequency: "مرتين أسبوعيًا",
    wateringDetails: "حافظ على رطوبة التربة. لا تترك التربة تجف تمامًا.",
    sunlight: "partial_shade",
    sunlightDetails: "ضوء ساطع غير مباشر. الشمس الكاملة قد تبهت الألوان",
    soilType: "تربة خصبة رطبة جيدة التصريف",
    temperature: "16-27 درجة مئوية",
    humidity: "رطوبة عالية مفضلة",
    seasonalCare: [
      { season: "الربيع", tips: "قم بتقليم النبات لتشجيع النمو الكثيف" },
      { season: "الصيف", tips: "احمِه من أشعة الشمس الحارقة المباشرة" },
      { season: "الخريف", tips: "انقله للداخل قبل البرد" },
      { season: "الشتاء", tips: "قلل الري واحفظه في مكان دافئ مضيء" }
    ],
    commonIssues: [
      { issue: "فقدان لون الأوراق", solution: "عدّل مستوى الإضاءة - قد تكون كثيرة أو قليلة" },
      { issue: "تساقط الأوراق", solution: "تحقق من الري ودرجة الحرارة" },
      { issue: "السيقان الطويلة", solution: "قم بالتقليم لتشجيع التفرع" }
    ],
    tips: [
      "قم بقطف الأزهار للحفاظ على جمال الأوراق",
      "يمكن إكثاره بسهولة من العقل",
      "رائع للأصص والحاويات"
    ]
  },
  {
    id: "6",
    nameAr: "النعناع",
    nameEn: "Mint",
    slug: "mint",
    description: "عشبة عطرية منعشة تستخدم في المشروبات والطبخ. سهلة الزراعة وتنتشر بسرعة.",
    scientificName: "Mentha spicata",
    category: "aromatic",
    difficulty: "easy",
    wateringFrequency: "كل يومين",
    wateringDetails: "يحب الرطوبة العالية. حافظ على التربة رطبة دائمًا.",
    sunlight: "partial_shade",
    sunlightDetails: "ضوء جزئي مع بعض الظل في فترة الظهيرة",
    soilType: "تربة غنية رطبة",
    temperature: "18-24 درجة مئوية",
    humidity: "رطوبة عالية",
    seasonalCare: [
      { season: "الربيع", tips: "قم بتقسيم النبات وإعادة زراعته" },
      { season: "الصيف", tips: "احصد الأوراق بانتظام للحفاظ على النكهة" },
      { season: "الخريف", tips: "قم بتجفيف أو تجميد الأوراق للشتاء" },
      { season: "الشتاء", tips: "النبات نائم - قلل الري" }
    ],
    commonIssues: [
      { issue: "الصدأ الفطري", solution: "أزل الأوراق المصابة وحسّن دوران الهواء" },
      { issue: "الانتشار الزائد", solution: "ازرعه في أصيص منفصل للتحكم في انتشاره" },
      { issue: "الذبول", solution: "زد الري فورًا" }
    ],
    tips: [
      "ازرعه في أصيص لمنع انتشاره المفرط",
      "احصد الأوراق من الأعلى لتشجيع التفرع",
      "يمكن تجفيف الأوراق لصنع شاي النعناع"
    ]
  },
  {
    id: "7",
    nameAr: "قلب عبد الوهاب",
    nameEn: "Heart Coleus",
    slug: "heart-coleus",
    description: "نوع مميز من نبات السجاد بأوراق على شكل قلب وألوان زاهية جذابة.",
    scientificName: "Coleus blumei",
    category: "indoor",
    difficulty: "easy",
    wateringFrequency: "مرتين أسبوعيًا",
    wateringDetails: "حافظ على رطوبة معتدلة. تجنب الإفراط في الري.",
    sunlight: "indirect",
    sunlightDetails: "ضوء ساطع غير مباشر للحفاظ على الألوان الزاهية",
    soilType: "تربة خفيفة غنية بالدبال",
    temperature: "18-27 درجة مئوية",
    humidity: "رطوبة متوسطة إلى عالية",
    seasonalCare: [
      { season: "الربيع", tips: "أعد زراعته في أصيص أكبر إذا لزم الأمر" },
      { season: "الصيف", tips: "زد الري وقم برش الأوراق" },
      { season: "الخريف", tips: "قلل التسميد تدريجيًا" },
      { season: "الشتاء", tips: "احفظه في مكان دافئ بعيدًا عن التيارات الباردة" }
    ],
    commonIssues: [
      { issue: "شحوب الألوان", solution: "زد التعرض للضوء الساطع غير المباشر" },
      { issue: "تساقط الأوراق السفلية", solution: "قد يكون طبيعيًا أو بسبب نقص الضوء" },
      { issue: "الذبول", solution: "تحقق من رطوبة التربة والصرف" }
    ],
    tips: [
      "قم بإزالة الأزهار للحفاظ على طاقة النبات للأوراق",
      "رائع كهدية لمحبي النباتات",
      "يمكن زراعته في الخارج في المناخات الدافئة"
    ]
  },
  {
    id: "8",
    nameAr: "شتلة الزيتون",
    nameEn: "Olive",
    slug: "olive",
    description: "شجرة مباركة تتميز بأوراقها الفضية وثمارها الثمينة. رمز للسلام والبركة في الثقافة العربية.",
    scientificName: "Olea europaea",
    category: "outdoor",
    difficulty: "medium",
    wateringFrequency: "مرة أسبوعيًا",
    wateringDetails: "متحمل للجفاف. ري معتدل مع ترك التربة تجف بين الريات.",
    sunlight: "full_sun",
    sunlightDetails: "يحتاج إلى ضوء شمس كامل للنمو الأمثل",
    soilType: "تربة طينية رملية جيدة التصريف",
    temperature: "15-35 درجة مئوية",
    humidity: "رطوبة منخفضة إلى متوسطة",
    seasonalCare: [
      { season: "الربيع", tips: "أضف سمادًا متوازنًا وقم بالتقليم الخفيف" },
      { season: "الصيف", tips: "زد الري قليلاً في الحرارة الشديدة" },
      { season: "الخريف", tips: "موسم الحصاد - اجمع الزيتون الناضج" },
      { season: "الشتاء", tips: "قم بالتقليم الرئيسي واحمِه من الصقيع الشديد" }
    ],
    commonIssues: [
      { issue: "اصفرار الأوراق", solution: "قد يكون نقص حديد. أضف سماد غني بالعناصر الصغرى" },
      { issue: "تساقط الثمار", solution: "تأكد من الري المنتظم وعدم الإجهاد المائي" },
      { issue: "ذبابة الزيتون", solution: "استخدم مصائد فرمونية ومبيدات عضوية" }
    ],
    tips: [
      "يحتاج إلى فترة برد شتوية للإثمار",
      "قم بالتقليم لإبقاء الحجم مناسبًا",
      "يمكن زراعته في أصيص كبير"
    ]
  },
  {
    id: "9",
    nameAr: "الفراولة",
    nameEn: "Strawberry",
    slug: "strawberry",
    description: "فاكهة لذيذة وسهلة الزراعة في المنزل. تنتج ثمارًا حمراء حلوة طوال موسم النمو.",
    scientificName: "Fragaria × ananassa",
    category: "edible",
    difficulty: "medium",
    wateringFrequency: "كل يومين",
    wateringDetails: "حافظ على رطوبة منتظمة. تجنب البلل على الأوراق والثمار.",
    sunlight: "full_sun",
    sunlightDetails: "6-8 ساعات من ضوء الشمس المباشر يوميًا",
    soilType: "تربة حمضية قليلاً (pH 5.5-6.5) غنية بالمواد العضوية",
    temperature: "15-26 درجة مئوية",
    humidity: "رطوبة معتدلة",
    seasonalCare: [
      { season: "الربيع", tips: "أزل الأوراق القديمة وأضف سمادًا" },
      { season: "الصيف", tips: "احصد الثمار الناضجة وأزل السيقان الجارية الزائدة" },
      { season: "الخريف", tips: "جهز النباتات للشتاء بإضافة نشارة" },
      { season: "الشتاء", tips: "احمِها من الصقيع بغطاء شتوي" }
    ],
    commonIssues: [
      { issue: "تعفن الثمار", solution: "حسّن دوران الهواء وأضف نشارة تحت الثمار" },
      { issue: "البق الدقيقي", solution: "استخدم صابون مبيد حشري" },
      { issue: "ثمار صغيرة", solution: "أضف سمادًا وتأكد من كفاية الري" }
    ],
    tips: [
      "ازرعها في سلال معلقة لسهولة الحصاد",
      "أزل السيقان الجارية الزائدة للحصول على ثمار أكبر",
      "استبدل النباتات كل 3 سنوات"
    ]
  },
  {
    id: "10",
    nameAr: "الصبار",
    nameEn: "Cactus",
    slug: "cactus",
    description: "نبات صحراوي متحمل للجفاف وقليل الصيانة. مثالي للمبتدئين ولمن ينسون الري.",
    scientificName: "Cactaceae",
    category: "succulent",
    difficulty: "easy",
    wateringFrequency: "كل 2-3 أسابيع",
    wateringDetails: "ري قليل جدًا. اترك التربة تجف تمامًا بين الريات.",
    sunlight: "full_sun",
    sunlightDetails: "يحتاج ضوء شمس مباشر ساطع معظم اليوم",
    soilType: "تربة رملية خاصة بالصباريات سريعة التصريف",
    temperature: "18-35 درجة مئوية",
    humidity: "رطوبة منخفضة جدًا",
    seasonalCare: [
      { season: "الربيع", tips: "ابدأ الري تدريجيًا وأضف سمادًا خفيفًا" },
      { season: "الصيف", tips: "ري معتدل مع حماية من أشعة الشمس الحارقة في الظهيرة" },
      { season: "الخريف", tips: "قلل الري استعدادًا للشتاء" },
      { season: "الشتاء", tips: "توقف عن الري تقريبًا واحفظه في مكان بارد" }
    ],
    commonIssues: [
      { issue: "تعفن الجذور", solution: "قلل الري فورًا وغيّر التربة إذا لزم الأمر" },
      { issue: "ليونة الجذع", solution: "علامة على الإفراط في الري. توقف عن الري" },
      { issue: "البقع البنية", solution: "قد تكون حروق شمس. انقله لمكان أقل شدة" }
    ],
    tips: [
      "استخدم قفازات عند التعامل معه",
      "لا تري إلا عندما تجف التربة تمامًا",
      "يمكن إكثاره من القطع أو الفسائل"
    ]
  },
  {
    id: "11",
    nameAr: "النباتات العطرية",
    nameEn: "Herbs",
    slug: "herbs",
    description: "مجموعة متنوعة من الأعشاب العطرية للطبخ والشاي. سهلة الزراعة ومفيدة في المطبخ.",
    scientificName: "Various",
    category: "aromatic",
    difficulty: "easy",
    wateringFrequency: "كل يومين",
    wateringDetails: "حافظ على رطوبة معتدلة. معظم الأعشاب لا تحب التربة المشبعة.",
    sunlight: "full_sun",
    sunlightDetails: "معظم الأعشاب تحتاج 6 ساعات ضوء شمس على الأقل",
    soilType: "تربة خفيفة جيدة التصريف",
    temperature: "18-28 درجة مئوية",
    humidity: "رطوبة معتدلة",
    seasonalCare: [
      { season: "الربيع", tips: "ازرع من البذور أو الشتلات" },
      { season: "الصيف", tips: "احصد بانتظام لتشجيع النمو" },
      { season: "الخريف", tips: "جفف أو جمّد الأعشاب للشتاء" },
      { season: "الشتاء", tips: "انقل الأصص للداخل بجوار نافذة مشمسة" }
    ],
    commonIssues: [
      { issue: "النمو البطيء", solution: "تأكد من كفاية الضوء وأضف سمادًا خفيفًا" },
      { issue: "الآفات الحشرية", solution: "استخدم صابون مبيد حشري طبيعي" },
      { issue: "الإزهار المبكر", solution: "قم بالحصاد المنتظم وإزالة الأزهار" }
    ],
    tips: [
      "ازرع أعشابك المفضلة بالقرب من المطبخ",
      "احصد في الصباح للحصول على أفضل نكهة",
      "جفف الأعشاب الزائدة للاستخدام لاحقًا"
    ]
  },
  {
    id: "12",
    nameAr: "إكليل الجبل",
    nameEn: "Rosemary",
    slug: "rosemary",
    description: "عشبة عطرية خشبية برائحة الصنوبر. تستخدم في الطبخ وتضيف نكهة مميزة للأطباق.",
    scientificName: "Salvia rosmarinus",
    category: "aromatic",
    difficulty: "medium",
    wateringFrequency: "مرة أسبوعيًا",
    wateringDetails: "متحمل للجفاف. اترك التربة تجف بين الريات.",
    sunlight: "full_sun",
    sunlightDetails: "يحتاج 6-8 ساعات ضوء شمس مباشر",
    soilType: "تربة رملية فقيرة جيدة التصريف",
    temperature: "15-25 درجة مئوية",
    humidity: "رطوبة منخفضة إلى متوسطة",
    seasonalCare: [
      { season: "الربيع", tips: "قم بالتقليم الخفيف لتشجيع النمو الكثيف" },
      { season: "الصيف", tips: "احصد الأغصان حسب الحاجة" },
      { season: "الخريف", tips: "قلل الري واستعد للشتاء" },
      { season: "الشتاء", tips: "احمِه من الصقيع الشديد" }
    ],
    commonIssues: [
      { issue: "تحول الأوراق للبني", solution: "قد يكون بسبب الإفراط في الري أو نقص التصريف" },
      { issue: "نمو ضعيف", solution: "تأكد من كفاية الضوء وتصريف التربة" },
      { issue: "العفن الأبيض", solution: "حسّن دوران الهواء وقلل الرطوبة" }
    ],
    tips: [
      "يمكن تجفيفه للاستخدام على مدار السنة",
      "رائع للشواء والأطباق المتوسطية",
      "يطرد بعض الحشرات من الحديقة"
    ]
  },
  {
    id: "13",
    nameAr: "الزعتر",
    nameEn: "Thyme",
    slug: "thyme",
    description: "عشبة عطرية صغيرة الأوراق بنكهة مميزة. أساسية في المطبخ العربي والمتوسطي.",
    scientificName: "Thymus vulgaris",
    category: "aromatic",
    difficulty: "easy",
    wateringFrequency: "مرة أسبوعيًا",
    wateringDetails: "متحمل للجفاف. ري قليل أفضل من الإفراط.",
    sunlight: "full_sun",
    sunlightDetails: "ضوء شمس كامل للنمو الأمثل والنكهة الأفضل",
    soilType: "تربة فقيرة صخرية جيدة التصريف",
    temperature: "15-25 درجة مئوية",
    humidity: "رطوبة منخفضة",
    seasonalCare: [
      { season: "الربيع", tips: "قم بتقليم النمو القديم وشكّل النبات" },
      { season: "الصيف", tips: "احصد قبل الإزهار للحصول على أفضل نكهة" },
      { season: "الخريف", tips: "جفف الزعتر للشتاء" },
      { season: "الشتاء", tips: "معظم الأنواع متحملة للبرد المعتدل" }
    ],
    commonIssues: [
      { issue: "تعفن الجذور", solution: "حسّن التصريف وقلل الري" },
      { issue: "النمو الخشبي", solution: "قم بالتقليم المنتظم للحفاظ على النمو الطري" },
      { issue: "فقدان النكهة", solution: "تأكد من كفاية الضوء وقلل التسميد" }
    ],
    tips: [
      "يمكن زراعته كغطاء أرضي عطري",
      "يجذب النحل والفراشات",
      "يمكن استخدامه طازجًا أو مجففًا"
    ]
  },
  {
    id: "14",
    nameAr: "اليوكالبتوس",
    nameEn: "Eucalyptus",
    slug: "eucalyptus",
    description: "شجرة عطرية بأوراق فضية زرقاء ورائحة منعشة. تستخدم في الديكور والأغراض الطبية.",
    scientificName: "Eucalyptus cinerea",
    category: "aromatic",
    difficulty: "medium",
    wateringFrequency: "مرة أسبوعيًا",
    wateringDetails: "ري منتظم معتدل. لا تترك التربة تجف تمامًا.",
    sunlight: "full_sun",
    sunlightDetails: "يحتاج ضوء شمس كامل وساطع",
    soilType: "تربة حمضية قليلاً جيدة التصريف",
    temperature: "15-30 درجة مئوية",
    humidity: "رطوبة متوسطة",
    seasonalCare: [
      { season: "الربيع", tips: "قم بالتقليم لتشكيل النبات" },
      { season: "الصيف", tips: "زد الري في الحرارة" },
      { season: "الخريف", tips: "قلل الري تدريجيًا" },
      { season: "الشتاء", tips: "احمِه من الصقيع الشديد" }
    ],
    commonIssues: [
      { issue: "تساقط الأوراق", solution: "قد يكون بسبب الإجهاد المائي أو تغير الظروف" },
      { issue: "الآفات الحشرية", solution: "استخدم زيت النيم أو صابون مبيد حشري" },
      { issue: "النمو الطويل", solution: "قم بالتقليم المنتظم للتحكم في الحجم" }
    ],
    tips: [
      "يمكن تجفيف الأغصان للديكور",
      "رائحته تطرد الحشرات والبعوض",
      "يمكن زراعته في أصيص داخلي كبير"
    ]
  },
  {
    id: "15",
    nameAr: "يوفوربيا عصارية",
    nameEn: "Euphorbia",
    slug: "euphorbia",
    description: "نبات عصاري متنوع الأشكال يشبه الصبار. سهل العناية ويتحمل الجفاف.",
    scientificName: "Euphorbia trigona",
    category: "succulent",
    difficulty: "easy",
    wateringFrequency: "كل 2 أسابيع",
    wateringDetails: "ري قليل. اترك التربة تجف تمامًا بين الريات.",
    sunlight: "indirect",
    sunlightDetails: "ضوء ساطع غير مباشر. يتحمل بعض الشمس المباشرة",
    soilType: "تربة خاصة بالعصاريات سريعة التصريف",
    temperature: "18-30 درجة مئوية",
    humidity: "رطوبة منخفضة",
    seasonalCare: [
      { season: "الربيع", tips: "استأنف الري تدريجيًا وأضف سمادًا خفيفًا" },
      { season: "الصيف", tips: "ري معتدل مع حماية من الشمس الحارقة" },
      { season: "الخريف", tips: "قلل الري استعدادًا للشتاء" },
      { season: "الشتاء", tips: "قلل الري بشكل كبير" }
    ],
    commonIssues: [
      { issue: "تعفن القاعدة", solution: "قلل الري وحسّن التصريف" },
      { issue: "تحول لون النبات", solution: "قد يكون بسبب الضوء الزائد أو القليل" },
      { issue: "تساقط الأوراق", solution: "تحقق من ظروف الري ودرجة الحرارة" }
    ],
    tips: [
      "تحذير: العصارة البيضاء سامة ومهيجة للجلد",
      "استخدم قفازات عند التعامل معه",
      "يمكن أن يصل لارتفاع كبير مع الوقت"
    ]
  },
  {
    id: "16",
    nameAr: "البيبيروميا",
    nameEn: "Peperomia",
    slug: "peperomia",
    description: "نبات منزلي صغير بأوراق سميكة لامعة. مثالي للمساحات الصغيرة والمكاتب.",
    scientificName: "Peperomia obtusifolia",
    category: "indoor",
    difficulty: "easy",
    wateringFrequency: "مرة أسبوعيًا",
    wateringDetails: "اترك التربة تجف قليلاً بين الريات. لا يحب الإفراط في الري.",
    sunlight: "indirect",
    sunlightDetails: "ضوء ساطع غير مباشر. يتحمل الإضاءة المنخفضة",
    soilType: "تربة خفيفة غنية بالبيرلايت",
    temperature: "18-26 درجة مئوية",
    humidity: "رطوبة متوسطة",
    seasonalCare: [
      { season: "الربيع", tips: "أعد زراعته إذا أصبح ضيقًا" },
      { season: "الصيف", tips: "زد الري قليلاً مع الحرارة" },
      { season: "الخريف", tips: "قلل الري والتسميد" },
      { season: "الشتاء", tips: "قلل الري بشكل ملحوظ" }
    ],
    commonIssues: [
      { issue: "تساقط الأوراق", solution: "عادة بسبب الإفراط في الري أو البرد" },
      { issue: "أوراق ذابلة", solution: "تحقق من الري - قد يكون كثيرًا أو قليلاً" },
      { issue: "ليونة الساق", solution: "علامة على تعفن الجذور. قلل الري فورًا" }
    ],
    tips: [
      "مثالي للمكاتب والأماكن قليلة الضوء",
      "يمكن إكثاره من الأوراق",
      "ينقي الهواء من الملوثات"
    ]
  }
];

export interface IStorage {
  getAllPlants(): Promise<Plant[]>;
  getPlantBySlug(slug: string): Promise<Plant | undefined>;
  searchPlants(query: string): Promise<Plant[]>;
  filterPlants(filter: PlantFilter): Promise<Plant[]>;
}

export class MemStorage implements IStorage {
  private plants: Plant[];

  constructor() {
    this.plants = plants;
  }

  async getAllPlants(): Promise<Plant[]> {
    return this.plants;
  }

  async getPlantBySlug(slug: string): Promise<Plant | undefined> {
    return this.plants.find((p) => p.slug === slug);
  }

  async searchPlants(query: string): Promise<Plant[]> {
    const search = query.toLowerCase();
    return this.plants.filter(
      (plant) =>
        plant.nameAr.includes(search) ||
        plant.nameEn.toLowerCase().includes(search) ||
        plant.scientificName.toLowerCase().includes(search)
    );
  }

  async filterPlants(filter: PlantFilter): Promise<Plant[]> {
    let result = this.plants;

    if (filter.search) {
      const search = filter.search.toLowerCase();
      result = result.filter(
        (plant) =>
          plant.nameAr.includes(search) ||
          plant.nameEn.toLowerCase().includes(search) ||
          plant.scientificName.toLowerCase().includes(search)
      );
    }

    if (filter.category) {
      result = result.filter((plant) => plant.category === filter.category);
    }

    if (filter.difficulty) {
      result = result.filter((plant) => plant.difficulty === filter.difficulty);
    }

    if (filter.sunlight) {
      result = result.filter((plant) => plant.sunlight === filter.sunlight);
    }

    return result;
  }
}

export const storage = new MemStorage();
