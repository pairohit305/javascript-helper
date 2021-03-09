import languageJSON from "./language.json";

/**
 * Get the all country code list
 */
export function getLanguageList() {
  return languageJSON as { [key in Language]: string };
}
export function getLanguageEntries(): [Language, string][] {
  return [
    ["ab", "аҧсуа"],
    ["aa", "Afaraf"],
    ["af", "Afrikaans"],
    ["ak", "Akan"],
    ["sq", "Shqip"],
    ["am", "አማርኛ"],
    ["ar", "العربية"],
    ["an", "Aragonés"],
    ["hy", "Հայերեն"],
    ["as", "অসমীয়া"],
    ["av", "авар мацӀ, магӀарул мацӀ"],
    ["ae", "avesta"],
    ["ay", "aymar aru"],
    ["az", "azərbaycan dili"],
    ["bm", "bamanankan"],
    ["ba", "башҡорт теле"],
    ["eu", "euskara, euskera"],
    ["be", "Беларуская"],
    ["bn", "বাংলা"],
    ["bh", "भोजपुरी"],
    ["bi", "Bislama"],
    ["bs", "bosanski jezik"],
    ["br", "brezhoneg"],
    ["bg", "български език"],
    ["my", "ဗမာစာ"],
    ["ca", "Català"],
    ["ch", "Chamoru"],
    ["ce", "нохчийн мотт"],
    ["ny", "chiCheŵa, chinyanja"],
    ["zh", "中文 (Zhōngwén), 汉语, 漢語"],
    ["cv", "чӑваш чӗлхи"],
    ["kw", "Kernewek"],
    ["co", "corsu, lingua corsa"],
    ["cr", "ᓀᐦᐃᔭᐍᐏᐣ"],
    ["hr", "hrvatski"],
    ["cs", "česky, čeština"],
    ["da", "dansk"],
    ["dv", "ދިވެހި"],
    ["nl", "Nederlands, Vlaams"],
    ["en", "English"],
    ["eo", "Esperanto"],
    ["et", "eesti, eesti keel"],
    ["ee", "Eʋegbe"],
    ["fo", "føroyskt"],
    ["fj", "vosa Vakaviti"],
    ["fi", "suomi, suomen kieli"],
    ["fr", "français, langue française"],
    ["ff", "Fulfulde, Pulaar, Pular"],
    ["gl", "Galego"],
    ["ka", "ქართული"],
    ["de", "Deutsch"],
    ["el", "Ελληνικά"],
    ["gn", "Avañeẽ"],
    ["gu", "ગુજરાતી"],
    ["ht", "Kreyòl ayisyen"],
    ["ha", "Hausa, هَوُسَ"],
    ["he", "עברית"],
    ["iw", "עברית"],
    ["hz", "Otjiherero"],
    ["hi", "हिन्दी, हिंदी"],
    ["ho", "Hiri Motu"],
    ["hu", "Magyar"],
    ["ia", "Interlingua"],
    ["id", "Bahasa Indonesia"],
    ["ie", "Originally called Occidental; then Interlingue after WWII"],
    ["ga", "Gaeilge"],
    ["ig", "Asụsụ Igbo"],
    ["ik", "Iñupiaq, Iñupiatun"],
    ["io", "Ido"],
    ["is", "Íslenska"],
    ["it", "Italiano"],
    ["iu", "ᐃᓄᒃᑎᑐᑦ"],
    ["ja", "日本語 (にほんご／にっぽんご)"],
    ["jv", "basa Jawa"],
    ["kl", "kalaallisut, kalaallit oqaasii"],
    ["kn", "ಕನ್ನಡ"],
    ["kr", "Kanuri"],
    ["ks", "कश्मीरी, كشميري‎"],
    ["kk", "Қазақ тілі"],
    ["km", "ភាសាខ្មែរ"],
    ["ki", "Gĩkũyũ"],
    ["rw", "Ikinyarwanda"],
    ["ky", "кыргыз тили"],
    ["kv", "коми кыв"],
    ["kg", "KiKongo"],
    ["ko", "한국어 (韓國語), 조선말 (朝鮮語)"],
    ["ku", "Kurdî, كوردی‎"],
    ["kj", "Kuanyama"],
    ["la", "latine, lingua latina"],
    ["lb", "Lëtzebuergesch"],
    ["lg", "Luganda"],
    ["li", "Limburgs"],
    ["ln", "Lingála"],
    ["lo", "ພາສາລາວ"],
    ["lt", "lietuvių kalba"],
    ["lu", ""],
    ["lv", "latviešu valoda"],
    ["gv", "Gaelg, Gailck"],
    ["mk", "македонски јазик"],
    ["mg", "Malagasy fiteny"],
    ["ms", "bahasa Melayu, بهاس ملايو‎"],
    ["ml", "മലയാളം"],
    ["mt", "Malti"],
    ["mi", "te reo Māori"],
    ["mr", "मराठी"],
    ["mh", "Kajin M̧ajeļ"],
    ["mn", "монгол"],
    ["na", "Ekakairũ Naoero"],
    ["nv", "Diné bizaad, Dinékʼehǰí"],
    ["nb", "Norsk bokmål"],
    ["nd", "isiNdebele"],
    ["ne", "नेपाली"],
    ["ng", "Owambo"],
    ["nn", "Norsk nynorsk"],
    ["no", "Norsk"],
    ["ii", "ꆈꌠ꒿ Nuosuhxop"],
    ["nr", "isiNdebele"],
    ["oc", "Occitan"],
    ["oj", "ᐊᓂᔑᓈᐯᒧᐎᓐ"],
    ["cu", "ѩзыкъ словѣньскъ"],
    ["om", "Afaan Oromoo"],
    ["or", "ଓଡ଼ିଆ"],
    ["os", "ирон æвзаг"],
    ["pa", "ਪੰਜਾਬੀ, پنجابی‎"],
    ["pi", "पाऴि"],
    ["fa", "فارسی"],
    ["pl", "polski"],
    ["ps", "پښتو"],
    ["pt", "Português"],
    ["qu", "Runa Simi, Kichwa"],
    ["rm", "rumantsch grischun"],
    ["rn", "kiRundi"],
    ["ro", "română"],
    ["ru", "русский язык"],
    ["sa", "संस्कृतम्"],
    ["sc", "sardu"],
    ["sd", "सिन्धी, سنڌي، سندھی‎"],
    ["se", "Davvisámegiella"],
    ["sm", "gagana faa Samoa"],
    ["sg", "yângâ tî sängö"],
    ["sr", "српски језик"],
    ["gd", "Gàidhlig"],
    ["sn", "chiShona"],
    ["si", "සිංහල"],
    ["sk", "slovenčina"],
    ["sl", "slovenščina"],
    ["so", "Soomaaliga, af Soomaali"],
    ["st", "Sesotho"],
    ["es", "español, castellano"],
    ["su", "Basa Sunda"],
    ["sw", "Kiswahili"],
    ["ss", "SiSwati"],
    ["sv", "svenska"],
    ["ta", "தமிழ்"],
    ["te", "తెలుగు"],
    ["tg", "тоҷикӣ, toğikī, تاجیکی‎"],
    ["th", "ไทย"],
    ["ti", "ትግርኛ"],
    ["bo", "བོད་ཡིག"],
    ["tk", "Türkmen, Түркмен"],
    ["tl", "Wikang Tagalog"],
    ["tn", "Setswana"],
    ["to", "faka Tonga"],
    ["tr", "Türkçe"],
    ["ts", "Xitsonga"],
    ["tt", "татарча, tatarça, تاتارچا‎"],
    ["tw", "Twi"],
    ["ty", "Reo Tahiti"],
    ["ug", "Uyƣurqə, ئۇيغۇرچە‎"],
    ["uk", "українська"],
    ["ur", "اردو"],
    ["uz", "zbek, Ўзбек, أۇزبېك‎"],
    ["ve", "Tshivenḓa"],
    ["vi", "Tiếng Việt"],
    ["vo", "Volapük"],
    ["wa", "Walon"],
    ["cy", "Cymraeg"],
    ["wo", "Wollof"],
    ["fy", "Frysk"],
    ["xh", "isiXhosa"],
    ["yi", "ייִדיש"],
    ["yo", "Yorùbá"],
    ["za", "Saɯ cueŋƅ, Saw cuengh"],
  ];
}

type Language =
  | "ab"
  | "aa"
  | "af"
  | "ak"
  | "sq"
  | "am"
  | "ar"
  | "an"
  | "hy"
  | "as"
  | "av"
  | "ae"
  | "ay"
  | "az"
  | "bm"
  | "ba"
  | "eu"
  | "be"
  | "bn"
  | "bh"
  | "bi"
  | "bs"
  | "br"
  | "bg"
  | "my"
  | "ca"
  | "ch"
  | "ce"
  | "ny"
  | "zh"
  | "cv"
  | "kw"
  | "co"
  | "cr"
  | "hr"
  | "cs"
  | "da"
  | "dv"
  | "nl"
  | "en"
  | "eo"
  | "et"
  | "ee"
  | "fo"
  | "fj"
  | "fi"
  | "fr"
  | "ff"
  | "gl"
  | "ka"
  | "de"
  | "el"
  | "gn"
  | "gu"
  | "ht"
  | "ha"
  | "he"
  | "iw"
  | "hz"
  | "hi"
  | "ho"
  | "hu"
  | "ia"
  | "id"
  | "ie"
  | "ga"
  | "ig"
  | "ik"
  | "io"
  | "is"
  | "it"
  | "iu"
  | "ja"
  | "jv"
  | "kl"
  | "kn"
  | "kr"
  | "ks"
  | "kk"
  | "km"
  | "ki"
  | "rw"
  | "ky"
  | "kv"
  | "kg"
  | "ko"
  | "ku"
  | "kj"
  | "la"
  | "lb"
  | "lg"
  | "li"
  | "ln"
  | "lo"
  | "lt"
  | "lu"
  | "lv"
  | "gv"
  | "mk"
  | "mg"
  | "ms"
  | "ml"
  | "mt"
  | "mi"
  | "mr"
  | "mh"
  | "mn"
  | "na"
  | "nv"
  | "nb"
  | "nd"
  | "ne"
  | "ng"
  | "nn"
  | "no"
  | "ii"
  | "nr"
  | "oc"
  | "oj"
  | "cu"
  | "om"
  | "or"
  | "os"
  | "pa"
  | "pi"
  | "fa"
  | "pl"
  | "ps"
  | "pt"
  | "qu"
  | "rm"
  | "rn"
  | "ro"
  | "ru"
  | "sa"
  | "sc"
  | "sd"
  | "se"
  | "sm"
  | "sg"
  | "sr"
  | "gd"
  | "sn"
  | "si"
  | "sk"
  | "sl"
  | "so"
  | "st"
  | "es"
  | "su"
  | "sw"
  | "ss"
  | "sv"
  | "ta"
  | "te"
  | "tg"
  | "th"
  | "ti"
  | "bo"
  | "tk"
  | "tl"
  | "tn"
  | "to"
  | "tr"
  | "ts"
  | "tt"
  | "tw"
  | "ty"
  | "ug"
  | "uk"
  | "ur"
  | "uz"
  | "ve"
  | "vi"
  | "vo"
  | "wa"
  | "cy"
  | "wo"
  | "fy"
  | "xh"
  | "yi"
  | "yo"
  | "za";

export function getLanguageFullname(language: Language) {
  return languageJSON[language];
}
