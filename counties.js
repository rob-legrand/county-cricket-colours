/*jslint browser */

const counties = (function () {

   const abdDarkBlue = [0, 0, 60];
   const abdGold = [255, 240, 150];
   const abdLightBlue = [105, 150, 225];
   const agyGold = [255, 225, 15];
   const agyRed = [225, 45, 60];
   const ansBlue = [15, 45, 105];
   const ansRed = [210, 0, 0];
   const ayrMaroon = [120, 30, 0];
   const ayrSilver = [180, 180, 180];
   const ayrYellow = [255, 255, 75];
   const banBlack = [0, 0, 0];
   const banBlue = [0, 0, 75];
   const banGreen = [0, 90, 60];
   const bedBlack = [0, 0, 0];
   const bedPurple = [75, 0, 165];
   const bedSilver = [195, 195, 195];
   const breBlack = [0, 0, 0];
   const breBlue = [15, 90, 150];
   const breGold = [255, 210, 15];
   const brkGreen = [30, 120, 60];
   const brkPurple = [45, 0, 90];
   const brkYellow = [255, 255, 135];
   const bucGreen = [0, 75, 30];
   const bucSilver = [195, 195, 210];
   const caeBlack = [0, 0, 0];
   const caeGold = [255, 210, 0];
   const caeGreen = [0, 180, 60];
   const camBlue = [165, 225, 225];
   const camMaroon = [105, 0, 15];
   const camStraw = [255, 225, 160];
   const cheBlack = [0, 0, 0];
   const chePurple = [90, 0, 120];
   const clkBlack = [0, 0, 0];
   const clkGreen = [0, 135, 15];
   const cnwBlack = [0, 0, 0];
   const cnwGold = [255, 225, 0];
   const cnwRed = [225, 0, 0];
   const crdBlack = [0, 0, 0];
   const crdGold = [255, 210, 0];
   const crmGold = [255, 225, 0];
   const crmRed = [195, 0, 30];
   const cumGold = [240, 225, 0];
   const cumGreen = [0, 60, 30];
   const cumRed = [165, 0, 30];
   const denBlack = [0, 0, 0];
   const denRed = [210, 0, 30];
   const devDarkBlue = [15, 15, 60];
   const devGold = [240, 210, 90];
   const devLightBlue = [0, 60, 195];
   const dmfBlack = [0, 0, 0];
   const dmfGold = [255, 210, 0];
   const dmfRed = [225, 0, 15];
   const dorGreen = [0, 90, 30];
   const drbBlue = [180, 225, 240];
   const drbBrown = [75, 30, 15];
   const drbGold = [255, 225, 0];
   const dunGreen = [0, 120, 15];
   const dunRed = [180, 0, 45];
   const durBlue = [0, 0, 90];
   const durGold = [240, 210, 0];
   const durMaroon = [105, 0, 30];
   const essBlue = [0, 0, 90];
   const essGold = [255, 225, 0];
   const essRed = [195, 0, 0];
   const fifDarkBlue = [0, 0, 150];
   const fifGold = [240, 210, 0];
   const fifLightBlue = [135, 195, 255];
   const flnBlack = [0, 0, 0];
   const flnRed = [255, 45, 0];
   const glaBlue = [0, 30, 60];
   const glaGreen = [75, 150, 60];
   const glaYellow = [255, 240, 135];
   const glsBlue = [0, 0, 75];
   const glsBrown = [120, 45, 15];
   const glsGold = [240, 210, 150];
   const glsGreen = [30, 180, 60];
   const glsRed = [225, 30, 60];
   const hamBlue = [0, 0, 60];
   const hamGold = [255, 225, 0];
   const hefDarkBlue = [0, 0, 90];
   const hefLightBlue = [165, 195, 255];
   const hefRed = [150, 0, 0];
   const hrtBlue = [0, 0, 75];
   const hrtGold = [255, 225, 120];
   const hrtGreen = [0, 75, 0];
   const hunBlue = [30, 30, 60];
   const hunGold = [255, 210, 0];
   const kcdGold = [255, 210, 45];
   const kcdGreen = [0, 135, 30];
   const kcdRed = [210, 0, 15];
   const kenBlue = [0, 30, 75];
   const kenRed = [150, 0, 30];
   const lanBlue = [0, 30, 60];
   const lanGreen = [0, 90, 30];
   const lanRed = [225, 0, 30];
   const leiGreen = [0, 60, 0];
   const leiScarlet = [210, 0, 0];
   const linGold = [255, 225, 0];
   const linGreen = [0, 60, 0];
   const lnkBrown = [60, 30, 15];
   const lnkGold = [240, 195, 15];
   const mdxBlue = [0, 0, 60];
   const merBlue = [0, 60, 180];
   const merGold = [255, 210, 0];
   const mlnBlue = [0, 30, 60];
   const mnmBlack = [0, 0, 0];
   const mnmBlue = [0, 90, 195];
   const mnmGold = [255, 225, 0];
   const mtgBlack = [0, 0, 0];
   const mtgBlue = [45, 90, 240];
   const mtgGold = [240, 240, 45];
   const mtgRed = [135, 0, 0];
   const nblGold = [225, 180, 0];
   const nblGreen = [0, 60, 30];
   const nblRed = [210, 30, 30];
   const nfkDarkBlue = [30, 30, 75];
   const nfkLightBlue = [195, 240, 255];
   const notGold = [255, 225, 0];
   const notGreen = [0, 60, 0];
   const nthGold = [255, 225, 0];
   const nthMaroon = [90, 0, 30];
   const oxfBlue = [0, 30, 75];
   const oxfGold = [240, 225, 105];
   const oxfMagenta = [120, 0, 60];
   const pemDarkBlue = [0, 30, 90];
   const pemLightBlue = [195, 225, 255];
   const perGold = [225, 195, 0];
   const perGreen = [0, 45, 15];
   const radBlue = [0, 0, 165];
   const radGold = [225, 210, 30];
   const radRed = [225, 30, 0];
   const rnfBlue = [0, 30, 90];
   const rnfGold = [225, 195, 30];
   const rnfMaroon = [90, 0, 30];
   const roxBlack = [0, 0, 0];
   const roxBlue = [30, 30, 180];
   const rutGold = [255, 210, 30];
   const rutGreen = [0, 150, 90];
   const salBlue = [0, 30, 120];
   const salGold = [240, 195, 30];
   const sfkGold = [255, 225, 0];
   const sfkMaroon = [120, 0, 0];
   const somBlack = [0, 0, 0];
   const somGrey = [195, 195, 195];
   const somMaroon = [105, 0, 30];
   const stfGold = [255, 210, 75];
   const stfGreen = [0, 90, 45];
   const stiBlack = [0, 0, 0];
   const stiBrown = [90, 45, 45];
   const stiRed = [165, 0, 45];
   const surChocolate = [90, 45, 15];
   const susDarkBlue = [0, 30, 90];
   const susGold = [255, 180, 15];
   const susLightBlue = [60, 150, 210];
   const warBlue = [30, 30, 60];
   const warGold = [255, 225, 60];
   const warSilver = [240, 240, 240];
   const wilGreen = [0, 60, 30];
   const wlnGold = [255, 210, 45];
   const wlnMaroon = [135, 0, 30];
   const wlnSilver = [240, 240, 240];
   const wmlGold = [240, 210, 0];
   const wmlRed = [195, 0, 30];
   const worBlack = [0, 0, 0];
   const worGreen = [0, 60, 30];
   const yrkDarkBlue = [30, 30, 60];
   const yrkGold = [240, 225, 90];
   const yrkLightBlue = [135, 165, 195];

   const util = Object.freeze({
      convertToRgb: (colour) => (
         Array.isArray(colour)
         ? (
            'rgb('
            + colour[0] + ', '
            + colour[1] + ', '
            + colour[2] + ')'
         )
         : colour
      ),
      creamColour: [255, 245, 225],
      createInfo: () => [
         {
            countyName: 'Sussex',
            countyCode: 'sus',
            chapmanCode: 'ssx',
            hcsCode: 'sus',
            classLevel: 1,
            country: 'England',
            colours: [
               {rows: 3, colour: susDarkBlue},
               {rows: 2, colour: susGold},
               {rows: 2, colour: susLightBlue},
               {rows: 3, colour: susDarkBlue}
            ],
            alternateColours: [
               [
                  {rows: 2, colour: susDarkBlue},
                  {rows: 1},
                  {rows: 2, colour: susGold},
                  {rows: 2, colour: susLightBlue},
                  {rows: 1},
                  {rows: 2, colour: susDarkBlue}
               ],
               [
                  {rows: 1, colour: susDarkBlue},
                  {rows: 1},
                  {rows: 2, colour: susGold},
                  {rows: 2, colour: susDarkBlue},
                  {rows: 2, colour: susLightBlue},
                  {rows: 1},
                  {rows: 1, colour: susDarkBlue}
               ],
               [
                  {rows: 1, colour: susDarkBlue},
                  {rows: 1},
                  {rows: 3, colour: susGold},
                  {rows: 3, colour: susLightBlue},
                  {rows: 1},
                  {rows: 1, colour: susDarkBlue}
               ],
               [
                  {rows: 2, colour: susDarkBlue},
                  {rows: 3, colour: susGold},
                  {rows: 3, colour: susLightBlue},
                  {rows: 2, colour: susDarkBlue}
               ],
               [
                  {rows: 2, colour: susDarkBlue},
                  {rows: 2, colour: susLightBlue},
                  {rows: 2, colour: susGold},
                  {rows: 2, colour: susLightBlue},
                  {rows: 2, colour: susDarkBlue}
               ],
               [
                  {rows: 3, colour: susDarkBlue},
                  {rows: 1, colour: susLightBlue},
                  {rows: 2, colour: susGold},
                  {rows: 1, colour: susLightBlue},
                  {rows: 3, colour: susDarkBlue}
               ],
               [
                  {rows: 2, colour: susDarkBlue},
                  {rows: 1, colour: susGold},
                  {rows: 4, colour: susLightBlue},
                  {rows: 1, colour: susGold},
                  {rows: 2, colour: susDarkBlue}
               ],
               [
                  {rows: 3, colour: susDarkBlue},
                  {rows: 1, colour: susGold},
                  {rows: 2, colour: susLightBlue},
                  {rows: 1, colour: susGold},
                  {rows: 3, colour: susDarkBlue}
               ],
               [
                  {rows: 2, colour: susDarkBlue},
                  {rows: 1},
                  {rows: 1, colour: susGold},
                  {rows: 2, colour: susLightBlue},
                  {rows: 1, colour: susGold},
                  {rows: 1},
                  {rows: 2, colour: susDarkBlue}
               ],
               [
                  {rows: 2, colour: susLightBlue},
                  {rows: 1, colour: susGold},
                  {rows: 4, colour: susDarkBlue},
                  {rows: 1, colour: susGold},
                  {rows: 2, colour: susLightBlue}
               ],
               [
                  {rows: 2, colour: susLightBlue},
                  {rows: 1},
                  {rows: 2, colour: susGold},
                  {rows: 2, colour: susDarkBlue},
                  {rows: 1},
                  {rows: 2, colour: susLightBlue}
               ]
            ],
            textColour: susGold,
            backgroundColour: susDarkBlue,
            borderColour: susLightBlue
         },
         {
            countyName: 'Kent',
            countyNameInWelsh: 'Caint',
            countyCode: 'ken',
            chapmanCode: 'ken',
            hcsCode: 'knt',
            classLevel: 1,
            country: 'England',
            colours: [
               {rows: 2, colour: kenBlue},
               {rows: 1},
               {rows: 4, colour: kenRed},
               {rows: 1},
               {rows: 2, colour: kenBlue}
            ],
            alternateColours: [
               [
                  {rows: 4, colour: kenBlue},
                  {rows: 2},
                  {rows: 4, colour: kenRed}
               ],
               [
                  {rows: 4, colour: kenBlue},
                  {rows: 2},
                  {rows: 4, colour: kenBlue}
               ],
               [
                  {rows: 4, colour: kenRed},
                  {rows: 2},
                  {rows: 4, colour: kenBlue}
               ],
               [
                  {rows: 2, colour: kenBlue},
                  {rows: 2, colour: kenRed},
                  {rows: 2},
                  {rows: 2, colour: kenRed},
                  {rows: 2, colour: kenBlue}
               ],
               [
                  {rows: 2, colour: kenBlue},
                  {rows: 6, colour: kenRed},
                  {rows: 2, colour: kenBlue}
               ],
               [
                  {rows: 3, colour: kenBlue},
                  {rows: 4, colour: kenRed},
                  {rows: 3, colour: kenBlue}
               ],
               [
                  {rows: 1, colour: kenBlue},
                  {rows: 1},
                  {rows: 2, colour: kenRed},
                  {rows: 2},
                  {rows: 2, colour: kenRed},
                  {rows: 1},
                  {rows: 1, colour: kenBlue}
               ],
               [
                  {rows: 2, colour: kenRed},
                  {rows: 1},
                  {rows: 4, colour: kenBlue},
                  {rows: 1},
                  {rows: 2, colour: kenRed}
               ],
               [
                  {rows: 3, colour: kenBlue},
                  {rows: 1},
                  {rows: 2, colour: kenRed},
                  {rows: 1},
                  {rows: 3, colour: kenBlue}
               ],
               [
                  {rows: 2, colour: kenBlue},
                  {rows: 2},
                  {rows: 2, colour: kenRed},
                  {rows: 2},
                  {rows: 2, colour: kenBlue}
               ],
               [
                  {rows: 2, colour: kenBlue},
                  {rows: 2},
                  {rows: 4, colour: kenRed},
                  {rows: 2, colour: kenBlue}
               ]
            ],
            backgroundColour: kenRed,
            borderColour: kenBlue
         },
         {
            countyName: 'Surrey',
            countyCode: 'sur',
            chapmanCode: 'sry',
            hcsCode: 'sur',
            classLevel: 1,
            country: 'England',
            colours: [
               {rows: 6, colour: surChocolate},
               {rows: 2},
               {rows: 6, colour: surChocolate}
            ],
            backgroundColour: surChocolate
         },
         {
            countyName: 'Nottinghamshire',
            countyNameInWelsh: 'Swydd Nottingham',
            countyAbbreviation: 'Notts',
            countyCode: 'not',
            chapmanCode: 'ntt',
            hcsCode: 'not',
            classLevel: 1,
            country: 'England',
            colours: [
               {rows: 4, colour: notGreen},
               {rows: 4, colour: notGold},
               {rows: 4, colour: notGreen}
            ],
            textColour: notGold,
            backgroundColour: notGreen,
            borderColour: notGold
         },
         {
            countyName: 'Yorkshire',
            countyNameInWelsh: 'Swydd Efrog',
            countyAbbreviation: 'Yorks',
            countyCode: 'yrk',
            chapmanCode: 'yks',
            hcsCode: 'yrk',
            classLevel: 1,
            country: 'England',
            colours: [
               {rows: 5, colour: yrkLightBlue},
               {rows: 3, colour: yrkGold},
               {rows: 5, colour: yrkDarkBlue}
            ],
            textColour: yrkGold,
            backgroundColour: yrkDarkBlue,
            borderColour: yrkLightBlue
         },
         {
            countyName: 'Middlesex',
            countyAbbreviation: 'Middx',
            countyCode: 'mdx',
            chapmanCode: 'mdx',
            hcsCode: 'msx',
            classLevel: 1,
            country: 'England',
            colours: [
               {rows: 6, colour: mdxBlue},
               {rows: 2},
               {rows: 6, colour: mdxBlue}
            ],
            backgroundColour: mdxBlue
         },
         {
            countyName: 'Lancashire',
            countyNameInWelsh: 'Swydd Gaerhirfryn',
            countyAbbreviation: 'Lancs',
            countyCode: 'lan',
            chapmanCode: 'lan',
            hcsCode: 'lcs',
            classLevel: 1,
            country: 'England',
            colours: [
               {rows: 5, colour: lanBlue},
               {rows: 2, colour: lanRed},
               {rows: 2, colour: lanGreen},
               {rows: 5, colour: lanBlue}
            ],
            textColour: lanRed,
            backgroundColour: lanBlue,
            borderColour: lanGreen
         },
         {
            countyName: 'Gloucestershire',
            countyNameInWelsh: 'Swydd Gaerloyw',
            countyAbbreviation: 'Glos',
            countyCode: 'gls',
            chapmanCode: 'gls',
            hcsCode: 'glc',
            classLevel: 1,
            country: 'England',
            colours: [
               {rows: 4, colour: glsBlue},
               {rows: 1, colour: glsGold},
               {rows: 1, colour: glsBrown},
               {rows: 2},
               {rows: 1, colour: glsGreen},
               {rows: 1, colour: glsRed},
               {rows: 4, colour: glsBlue}
            ],
            textColour: glsGold,
            backgroundColour: glsBlue,
            borderColour: glsBrown
         },
         {
            countyName: 'Derbyshire',
            countyNameInWelsh: 'Swydd Derby',
            countyAbbreviation: 'Derbys',
            countyCode: 'drb',
            chapmanCode: 'dby',
            hcsCode: 'drb',
            classLevel: 2,
            country: 'England',
            colours: [
               {rows: 1, colour: drbGold},
               {rows: 6, colour: drbBlue},
               {rows: 1, colour: drbGold},
               {rows: 6, colour: drbBrown},
               {rows: 1, colour: drbGold}
            ],
            textColour: drbGold,
            backgroundColour: drbBrown,
            borderColour: drbBlue
         },
         {
            countyName: 'Hampshire',
            countyAbbreviation: 'Hants',
            countyCode: 'ham',
            chapmanCode: 'ham',
            hcsCode: 'hmp',
            classLevel: 2,
            country: 'England',
            colours: [
               {rows: 4, colour: hamBlue},
               {rows: 2, colour: hamGold},
               {rows: 3},
               {rows: 2, colour: hamGold},
               {rows: 4, colour: hamBlue}
            ],
            textColour: hamGold,
            backgroundColour: hamBlue,
            borderColour: hamGold
         },
         {
            countyName: 'Somerset',
            countyNameInWelsh: 'Gwlad yr Haf',
            countyCode: 'som',
            chapmanCode: 'som',
            hcsCode: 'sms',
            classLevel: 2,
            country: 'England',
            colours: [
               {rows: 4, colour: somMaroon},
               {rows: 2, colour: somGrey},
               {rows: 2, colour: somBlack},
               {rows: 2, colour: somGrey},
               {rows: 4, colour: somMaroon}
            ],
            textColour: somGrey,
            backgroundColour: somMaroon,
            borderColour: somBlack
         },
         {
            countyName: 'Essex',
            countyCode: 'ess',
            chapmanCode: 'ess',
            hcsCode: 'ese',
            classLevel: 2,
            country: 'England',
            colours: [
               {rows: 2, colour: essBlue},
               {rows: 2, colour: essGold},
               {rows: 4, colour: essRed},
               {rows: 2, colour: essBlue}
            ],
            alternateColours: [
               [
                  {rows: 1, colour: essGold},
                  {rows: 2, colour: essBlue},
                  {rows: 4, colour: essRed},
                  {rows: 2, colour: essBlue},
                  {rows: 1, colour: essGold}
               ],
               [
                  {rows: 3, colour: essRed},
                  {rows: 1, colour: essBlue},
                  {rows: 2, colour: essGold},
                  {rows: 1, colour: essBlue},
                  {rows: 3, colour: essRed}
               ],
               [
                  {rows: 1, colour: essBlue},
                  {rows: 3, colour: essRed},
                  {rows: 2, colour: essGold},
                  {rows: 3, colour: essRed},
                  {rows: 1, colour: essBlue}
               ],
               [
                  {rows: 2, colour: essBlue},
                  {rows: 2, colour: essRed},
                  {rows: 2, colour: essGold},
                  {rows: 2, colour: essRed},
                  {rows: 2, colour: essBlue}
               ],
               [
                  {rows: 1, colour: essBlue},
                  {rows: 1, colour: essGold},
                  {rows: 6, colour: essRed},
                  {rows: 1, colour: essGold},
                  {rows: 1, colour: essBlue}
               ],
               [
                  {rows: 2, colour: essBlue},
                  {rows: 1, colour: essGold},
                  {rows: 4, colour: essRed},
                  {rows: 1, colour: essGold},
                  {rows: 2, colour: essBlue}
               ],
               [
                  {rows: 2, colour: essRed},
                  {rows: 1, colour: essGold},
                  {rows: 4, colour: essBlue},
                  {rows: 1, colour: essGold},
                  {rows: 2, colour: essRed}
               ],
               [
                  {rows: 3, colour: essRed},
                  {rows: 1, colour: essGold},
                  {rows: 2, colour: essBlue},
                  {rows: 1, colour: essGold},
                  {rows: 3, colour: essRed}
               ],
               [
                  {rows: 3, colour: essBlue},
                  {rows: 1, colour: essGold},
                  {rows: 2, colour: essRed},
                  {rows: 1, colour: essGold},
                  {rows: 3, colour: essBlue}
               ],
               [
                  {rows: 4, colour: essRed},
                  {rows: 2, colour: essGold},
                  {rows: 4, colour: essBlue}
               ],
               [
                  {rows: 4, colour: essBlue},
                  {rows: 2, colour: essGold},
                  {rows: 4, colour: essRed}
               ],
               [
                  {rows: 3, colour: essBlue},
                  {rows: 2, colour: essGold},
                  {rows: 5, colour: essRed}
               ],
               [
                  {rows: 3, colour: essRed},
                  {rows: 2, colour: essGold},
                  {rows: 2, colour: essBlue},
                  {rows: 3, colour: essRed}
               ],
               [
                  {rows: 2, colour: essRed},
                  {rows: 3, colour: essGold},
                  {rows: 3, colour: essBlue},
                  {rows: 2, colour: essRed}
               ],
               [
                  {rows: 2, colour: essBlue},
                  {rows: 3, colour: essGold},
                  {rows: 3, colour: essRed},
                  {rows: 2, colour: essBlue}
               ],
               [
                  {rows: 1, colour: essBlue},
                  {rows: 4, colour: essGold},
                  {rows: 4, colour: essRed},
                  {rows: 1, colour: essBlue}
               ],
               [
                  {rows: 2, colour: essGold},
                  {rows: 6, colour: essRed},
                  {rows: 2, colour: essBlue}
               ],
               [
                  {rows: 3, colour: essGold},
                  {rows: 4, colour: essRed},
                  {rows: 3, colour: essBlue}
               ],
               [
                  {rows: 1, colour: essBlue},
                  {rows: 1, colour: essGold},
                  {rows: 1, colour: essRed},
                  {rows: 1, colour: essGold},
                  {rows: 2, colour: essBlue},
                  {rows: 3, colour: essRed},
                  {rows: 1, colour: essBlue}
               ]
            ],
            textColour: essGold,
            backgroundColour: essRed,
            borderColour: essBlue
         },
         {
            countyName: 'Leicestershire',
            countyNameInWelsh: 'Swydd Gaerl\u0177r',
            countyAbbreviation: 'Leics',
            countyCode: 'lei',
            chapmanCode: 'lei',
            hcsCode: 'lcr',
            classLevel: 2,
            country: 'England',
            colours: [
               {rows: 2, colour: leiScarlet},
               {rows: 2},
               {rows: 5, colour: leiGreen},
               {rows: 2},
               {rows: 2, colour: leiScarlet}
            ],
            backgroundColour: leiGreen,
            borderColour: leiScarlet
         },
         {
            countyName: 'Warwickshire',
            countyNameInWelsh: 'Swydd Warwick',
            countyAbbreviation: 'Warks',
            countyCode: 'war',
            chapmanCode: 'war',
            hcsCode: 'wrw',
            classLevel: 2,
            country: 'England',
            colours: [
               {rows: 4, colour: warBlue},
               {rows: 1, colour: warGold},
               {rows: 2, colour: warSilver},
               {rows: 1, colour: warGold},
               {rows: 4, colour: warBlue}
            ],
            textColour: warSilver,
            backgroundColour: warBlue,
            borderColour: warGold
         },
         {
            countyName: 'Staffordshire',
            countyNameInWelsh: 'Swydd Stafford',
            countyAbbreviation: 'Staffs',
            countyCode: 'stf',
            chapmanCode: 'sts',
            hcsCode: 'stf',
            classLevel: 2,
            country: 'England',
            colours: [
               {rows: 5, colour: stfGreen},
               {rows: 4, colour: stfGold},
               {rows: 5, colour: stfGreen}
            ],
            textColour: stfGold,
            backgroundColour: stfGreen,
            borderColour: stfGold
         },
         {
            countyName: 'Cheshire',
            countyNameInWelsh: 'Swydd Gaer',
            countyAbbreviation: 'Ches',
            countyCode: 'che',
            chapmanCode: 'chs',
            hcsCode: 'che',
            classLevel: 2,
            country: 'England',
            colours: [
               {rows: 6, colour: chePurple},
               {rows: 2},
               {rows: 6, colour: cheBlack}
            ],
            backgroundColour: chePurple,
            borderColour: cheBlack
         },
         {
            countyName: 'Norfolk',
            countyCode: 'nfk',
            chapmanCode: 'nfk',
            hcsCode: 'nrf',
            classLevel: 3,
            country: 'England',
            colours: [
               {rows: 5, colour: nfkDarkBlue},
               {rows: 2, colour: nfkLightBlue},
               {rows: 5, colour: nfkDarkBlue}
            ],
            alternateColours: [
               [
                  {rows: 5, colour: nfkDarkBlue},
                  {rows: 2, colour: [255, 225, 0]},
                  {rows: 2, colour: [195, 0, 0]},
                  {rows: 5, colour: nfkDarkBlue}
               ]
            ],
            backgroundColour: nfkDarkBlue,
            borderColour: nfkLightBlue
         },
         {
            countyName: 'Northamptonshire',
            countyNameInWelsh: 'Swydd Northampton',
            countyAbbreviation: 'Northants',
            countyCode: 'nth',
            chapmanCode: 'nth',
            hcsCode: 'nhp',
            classLevel: 3,
            country: 'England',
            colours: [
               {rows: 6, colour: nthMaroon},
               {rows: 3, colour: nthGold},
               {rows: 6, colour: nthMaroon}
            ],
            textColour: nthGold,
            backgroundColour: nthMaroon
         },
         {
            countyName: 'Glamorgan',
            countyNameInWelsh: 'Morgannwg',
            countyCode: 'gla',
            chapmanCode: 'gla',
            hcsCode: 'glm',
            classLevel: 3,
            country: 'Wales',
            colours: [
               {rows: 5, colour: glaBlue},
               {rows: 2, colour: glaYellow},
               {rows: 2, colour: glaBlue},
               {rows: 2, colour: glaYellow},
               {rows: 5, colour: glaBlue}
            ],
            textColour: glaYellow,
            backgroundColour: glaBlue,
            borderColour: glaGreen
         },
         {
            countyName: 'Durham',
            countyNameInWelsh: 'Swydd Durham',
            countyCode: 'dur',
            chapmanCode: 'dur',
            hcsCode: 'drh',
            classLevel: 3,
            country: 'England',
            colours: [
               {rows: 5, colour: durBlue},
               {rows: 3, colour: durGold},
               {rows: 5, colour: durMaroon}
            ],
            textColour: durGold,
            backgroundColour: durBlue,
            borderColour: durMaroon
         },
         {
            countyName: 'Northumberland',
            countyAbbreviation: 'Northum',
            countyCode: 'nbl',
            chapmanCode: 'nbl',
            hcsCode: 'nhb',
            classLevel: 3,
            country: 'England',
            colours: [
               {rows: 5, colour: nblRed},
               {rows: 5, colour: nblGreen},
               {rows: 5, colour: nblGold}
            ],
            textColour: nblRed,
            backgroundColour: nblGreen,
            borderColour: nblGold
         },
         {
            countyName: 'Hertfordshire',
            countyNameInWelsh: 'Swydd Hertford',
            countyAbbreviation: 'Herts',
            countyCode: 'hrt',
            chapmanCode: 'hrt',
            hcsCode: 'htf',
            classLevel: 3,
            country: 'England',
            colours: [
               {rows: 6, colour: hrtGreen},
               {rows: 2, colour: hrtGold},
               {rows: 6, colour: hrtBlue}
            ],
            textColour: hrtGold,
            backgroundColour: hrtGreen,
            borderColour: hrtBlue
         },
         {
            countyName: 'Devon',
            countyNameInWelsh: 'Dyfnaint',
            countyCode: 'dev',
            chapmanCode: 'dev',
            hcsCode: 'dvn',
            classLevel: 3,
            country: 'England',
            colours: [
               {rows: 3, colour: devDarkBlue},
               {rows: 2, colour: devGold},
               {rows: 4, colour: devLightBlue},
               {rows: 2, colour: devGold},
               {rows: 3, colour: devDarkBlue}
            ],
            alternateColours: [
               [
                  {rows: 3, colour: [0, 0, 45]},
                  {rows: 2, colour: devGold},
                  {rows: 4, colour: devLightBlue},
                  {rows: 2, colour: devGold},
                  {rows: 3, colour: [0, 0, 45]}
               ]
            ],
            textColour: devGold,
            backgroundColour: devDarkBlue,
            borderColour: devLightBlue
         },
         {
            countyName: 'Lincolnshire',
            countyNameInWelsh: 'Swydd Lincoln',
            countyAbbreviation: 'Lincs',
            countyCode: 'lin',
            chapmanCode: 'lin',
            hcsCode: 'lnc',
            classLevel: 3,
            country: 'England',
            colours: [
               {rows: 6, colour: linGreen},
               {rows: 2, colour: linGold},
               {rows: 6, colour: linGreen}
            ],
            textColour: linGold,
            backgroundColour: linGreen
         },
         {
            countyName: 'Cambridgeshire',
            countyNameInWelsh: 'Swydd Gaergrawnt',
            countyAbbreviation: 'Cambs',
            countyCode: 'cam',
            chapmanCode: 'cam',
            hcsCode: 'cmb',
            classLevel: 4,
            country: 'England',
            colours: [
               {rows: 3, colour: camMaroon},
               {rows: 4, colour: camBlue},
               {rows: 4, colour: camStraw},
               {rows: 3, colour: camMaroon}
            ],
            textColour: camStraw,
            backgroundColour: camMaroon,
            borderColour: camBlue
         },
         {
            countyName: 'Worcestershire',
            countyNameInWelsh: 'Swydd Gaerwrangon',
            countyAbbreviation: 'Worcs',
            countyCode: 'wor',
            chapmanCode: 'wor',
            hcsCode: 'wrc',
            classLevel: 4,
            country: 'England',
            colours: [
               {rows: 5, colour: worGreen},
               {rows: 2},
               {rows: 2, colour: worBlack},
               {rows: 5, colour: worGreen}
            ],
            backgroundColour: worGreen,
            borderColour: worBlack
         },
         {
            countyName: 'Shropshire',
            countyNameInWelsh: 'Swydd Amwythig',
            countyAbbreviation: 'Salop',
            countyCode: 'sal',
            chapmanCode: 'sal',
            hcsCode: 'shp',
            classLevel: 4,
            country: 'England',
            colours: [
               {rows: 7, colour: salGold},
               {rows: 7, colour: salBlue}
            ],
            textColour: salGold,
            backgroundColour: salBlue,
            borderColour: salGold
         },
         {
            countyName: 'Wiltshire',
            countyNameInWelsh: 'Swydd Wilton',
            countyAbbreviation: 'Wilts',
            countyCode: 'wil',
            chapmanCode: 'wil',
            hcsCode: 'wts',
            classLevel: 4,
            country: 'England',
            colours: [
               {rows: 6, colour: wilGreen},
               {rows: 2},
               {rows: 6, colour: wilGreen}
            ],
            backgroundColour: wilGreen
         },
         {
            countyName: 'Cornwall',
            countyNameInWelsh: 'Cernyw',
            countyCode: 'cnw',
            chapmanCode: 'con',
            hcsCode: 'cnw',
            classLevel: 4,
            country: 'England',
            colours: [
               {rows: 4, colour: cnwBlack},
               {rows: 1, colour: cnwRed},
               {rows: 1, colour: cnwGold},
               {rows: 4, colour: cnwBlack}
            ],
            textColour: cnwGold,
            backgroundColour: cnwBlack,
            borderColour: cnwRed
         },
         {
            countyName: 'Herefordshire',
            countyNameInWelsh: 'Swydd Henffordd',
            countyAbbreviation: 'Herefs',
            countyCode: 'hef',
            chapmanCode: 'hef',
            hcsCode: 'hrf',
            classLevel: 4,
            country: 'England',
            colours: [
               {rows: 4, colour: hefRed},
               {rows: 1, colour: hefLightBlue},
               {rows: 3, colour: hefDarkBlue},
               {rows: 1, colour: hefLightBlue},
               {rows: 4, colour: hefRed}
            ],
            alternateColours: [
               [
                  {rows: 4, colour: [165, 0, 0]},
                  {rows: 1, colour: hefLightBlue},
                  {rows: 3, colour: hefDarkBlue},
                  {rows: 1, colour: hefLightBlue},
                  {rows: 4, colour: [165, 0, 0]}
               ],
               [
                  {rows: 4, colour: [150, 15, 30]},
                  {rows: 1, colour: hefLightBlue},
                  {rows: 3, colour: hefDarkBlue},
                  {rows: 1, colour: hefLightBlue},
                  {rows: 4, colour: [150, 15, 30]}
               ]
            ],
            textColour: hefLightBlue,
            backgroundColour: hefRed,
            borderColour: hefDarkBlue
         },
         {
            countyName: 'Monmouthshire',
            countyNameInWelsh: 'Sir Fynwy',
            countyAbbreviation: 'Monmouths',
            countyCode: 'mnm',
            chapmanCode: 'mon',
            hcsCode: 'mnm',
            classLevel: 4,
            country: 'Wales',
            colours: [
               {rows: 6, colour: mnmBlue},
               {rows: 2, colour: mnmGold},
               {rows: 6, colour: mnmBlack}
            ],
            alternateColours: [
               [
                  {rows: 3, colour: mnmBlue},
                  {rows: 1, colour: mnmGold},
                  {rows: 3, colour: mnmBlue},
                  {rows: 1, colour: mnmGold},
                  {rows: 3, colour: mnmBlack},
                  {rows: 1, colour: mnmGold},
                  {rows: 3, colour: mnmBlack}
               ],
               [
                  {rows: 4, colour: mnmBlue},
                  {rows: 1, colour: mnmGold},
                  {rows: 2, colour: mnmBlue},
                  {rows: 1, colour: mnmGold},
                  {rows: 2, colour: mnmBlack},
                  {rows: 1, colour: mnmGold},
                  {rows: 4, colour: mnmBlack}
               ]
            ],
            textColour: mnmGold,
            backgroundColour: mnmBlue,
            borderColour: mnmBlack
         },
         {
            countyName: 'Cumberland',
            countyAbbreviation: 'Cumb',
            countyCode: 'cum',
            chapmanCode: 'cul',
            hcsCode: 'cum',
            classLevel: 4,
            country: 'England',
            colours: [
               {rows: 5, colour: cumRed},
               {rows: 4, colour: cumGold},
               {rows: 5, colour: cumGreen}
            ],
            textColour: cumGold,
            backgroundColour: cumGreen,
            borderColour: cumRed
         },
         {
            countyName: 'Radnorshire',
            countyNameInWelsh: 'Sir Faesyfed',
            countyAbbreviation: 'Rads',
            countyCode: 'rad',
            chapmanCode: 'rad',
            hcsCode: 'rdn',
            classLevel: 5,
            country: 'Wales',
            colours: [
               {rows: 1, colour: radRed},
               {rows: 2, colour: radBlue},
               {rows: 2, colour: radGold},
               {rows: 2, colour: radBlue},
               {rows: 2, colour: radGold},
               {rows: 2, colour: radBlue},
               {rows: 2, colour: radGold},
               {rows: 1, colour: radRed}
            ],
            alternateColours: [
               [
                  {rows: 1, colour: radRed},
                  {rows: 1, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 1, colour: radBlue},
                  {rows: 1, colour: radRed}
               ],
               [
                  {rows: 1, colour: radRed},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 1, colour: radRed}
               ],
               [
                  {rows: 1, colour: radRed},
                  {rows: 1, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 1, colour: radGold},
                  {rows: 1, colour: radRed}
               ],
               [
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue}
               ],
               [
                  {rows: 2, colour: radRed},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radRed}
               ],
               [
                  {rows: 2, colour: radRed},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radRed}
               ],
               [
                  {rows: 4, colour: radRed},
                  {rows: 2, colour: radGold},
                  {rows: 2, colour: radBlue},
                  {rows: 2, colour: radGold},
                  {rows: 4, colour: radRed}
               ],
               [
                  {rows: 4, colour: radRed},
                  {rows: 2, colour: [255, 210, 0]},
                  {rows: 2, colour: [30, 45, 240]},
                  {rows: 2, colour: [255, 210, 0]},
                  {rows: 4, colour: radRed}
               ]
            ],
            textColour: radGold,
            backgroundColour: radBlue,
            borderColour: radRed
         },
         {
            countyName: 'Dorset',
            countyCode: 'dor',
            chapmanCode: 'dor',
            hcsCode: 'drs',
            classLevel: 5,
            country: 'England',
            colours: [
               {rows: 2, colour: dorGreen},
               {rows: 2},
               {rows: 2, colour: dorGreen},
               {rows: 2},
               {rows: 2, colour: dorGreen}
            ],
            alternateColours: [
               [
                  {rows: 1, colour: dorGreen},
                  {rows: 2},
                  {rows: 2, colour: dorGreen},
                  {rows: 2},
                  {rows: 3, colour: dorGreen}
               ],
               [
                  {rows: 2, colour: dorGreen},
                  {rows: 1},
                  {rows: 2, colour: dorGreen},
                  {rows: 1},
                  {rows: 4, colour: dorGreen}
               ]
            ],
            textColour: dorGreen,
            borderColour: dorGreen
         },
         {
            countyName: 'Brecknockshire',
            countyNameInWelsh: 'Sir Frycheiniog',
            countyAbbreviation: 'Brecons',
            countyCode: 'bre',
            chapmanCode: 'bre',
            hcsCode: 'brn',
            classLevel: 5,
            country: 'Wales',
            colours: [
               {rows: 2, colour: breBlack},
               {rows: 1, colour: breGold},
               {rows: 1, colour: breBlack},
               {rows: 2, colour: breGold},
               {rows: 2, colour: breBlue},
               {rows: 2, colour: breGold},
               {rows: 1, colour: breBlack},
               {rows: 1, colour: breGold},
               {rows: 2, colour: breBlack}
            ],
            textColour: breBlue,
            backgroundColour: breGold,
            borderColour: breBlack
         },
         {
            countyName: 'Rutland',
            countyCode: 'rut',
            chapmanCode: 'rut',
            hcsCode: 'rtl',
            classLevel: 5,
            country: 'England',
            colours: [
               {rows: 4, colour: rutGreen},
               {rows: 2, colour: rutGold},
               {rows: 2, colour: rutGreen},
               {rows: 2, colour: rutGold},
               {rows: 4, colour: rutGreen}
            ],
            textColour: rutGold,
            backgroundColour: rutGreen
         },
         {
            countyName: 'Suffolk',
            countyCode: 'sfk',
            chapmanCode: 'sfk',
            hcsCode: 'sff',
            classLevel: 5,
            country: 'England',
            colours: [
               {rows: 2, colour: sfkMaroon},
               {rows: 1, colour: sfkGold},
               {rows: 4, colour: sfkMaroon},
               {rows: 1, colour: sfkGold},
               {rows: 2, colour: sfkMaroon}
            ],
            backgroundColour: sfkMaroon,
            borderColour: sfkGold
         },
         {
            countyName: 'Bedfordshire',
            countyNameInWelsh: 'Swydd Bedford',
            countyAbbreviation: 'Beds',
            countyCode: 'bed',
            chapmanCode: 'bdf',
            hcsCode: 'bed',
            classLevel: 5,
            country: 'England',
            colours: [
               {rows: 3, colour: bedPurple},
               {rows: 4, colour: bedBlack},
               {rows: 1, colour: bedSilver},
               {rows: 4, colour: bedBlack},
               {rows: 3, colour: bedPurple}
            ],
            textColour: bedSilver,
            backgroundColour: bedBlack,
            borderColour: bedPurple
         },
         {
            countyName: 'Huntingdonshire',
            countyNameInWelsh: 'Swydd Huntingdon',
            countyAbbreviation: 'Hunts',
            countyCode: 'hun',
            chapmanCode: 'hun',
            hcsCode: 'hnt',
            classLevel: 5,
            country: 'England',
            colours: [
               {rows: 5, colour: hunBlue},
               {rows: 4, colour: hunGold},
               {rows: 5, colour: hunBlue}
            ],
            textColour: hunGold,
            backgroundColour: hunBlue
         },
         {
            countyName: 'Caernarfonshire',
            countyNameInWelsh: 'Sir Gaernarfon',
            countyAbbreviation: 'Caerns',
            countyCode: 'cae',
            chapmanCode: 'cae',
            hcsCode: 'crn',
            classLevel: 5,
            country: 'Wales',
            colours: [
               {rows: 5, colour: caeBlack},
               {rows: 3, colour: caeGold},
               {rows: 5, colour: caeGreen}
            ],
            alternateColours: [
               [
                  {rows: 2, colour: caeGreen},
                  {rows: 1, colour: caeGold},
                  {rows: 3, colour: caeGreen},
                  {rows: 1, colour: caeGold},
                  {rows: 3, colour: caeGreen},
                  {rows: 1, colour: caeGold},
                  {rows: 2, colour: caeGreen}
               ],
               [
                  {rows: 3, colour: caeGreen},
                  {rows: 1, colour: caeGold},
                  {rows: 2, colour: caeGreen},
                  {rows: 1, colour: caeGold},
                  {rows: 2, colour: caeGreen},
                  {rows: 1, colour: caeGold},
                  {rows: 3, colour: caeGreen}
               ]
            ],
            textColour: caeGold,
            backgroundColour: caeGreen,
            borderColour: caeBlack
         },
         {
            countyName: 'Roxburghshire',
            countyNameInWelsh: 'Swydd Roxburgh',
            countyAbbreviation: 'Roxbs',
            countyCode: 'rox',
            chapmanCode: 'rox',
            hcsCode: 'rxb',
            classLevel: 6,
            country: 'Scotland',
            colours: [
               {rows: 2, colour: roxBlack},
               {rows: 2},
               {rows: 6, colour: roxBlue},
               {rows: 2},
               {rows: 2, colour: roxBlack}
            ],
            backgroundColour: roxBlue,
            borderColour: roxBlack
         },
         {
            countyName: 'Oxfordshire',
            countyNameInWelsh: 'Swydd Rydychen',
            countyAbbreviation: 'Oxon',
            countyCode: 'oxf',
            chapmanCode: 'oxf',
            hcsCode: 'oxd',
            classLevel: 6,
            country: 'England',
            colours: [
               {rows: 6, colour: oxfMagenta},
               {rows: 2, colour: oxfGold},
               {rows: 6, colour: oxfBlue}
            ],
            textColour: oxfGold,
            backgroundColour: oxfMagenta,
            borderColour: oxfBlue
         },
         {
            countyName: 'Berkshire',
            countyAbbreviation: 'Berks',
            countyCode: 'brk',
            chapmanCode: 'brk',
            hcsCode: 'ber',
            classLevel: 6,
            country: 'England',
            colours: [
               {rows: 2, colour: brkYellow},
               {rows: 5, colour: brkGreen},
               {rows: 2, colour: brkYellow},
               {rows: 5, colour: brkPurple},
               {rows: 2, colour: brkYellow}
            ],
            textColour: brkYellow,
            backgroundColour: brkGreen,
            borderColour: brkPurple
         },
         {
            countyName: 'Buckinghamshire',
            countyNameInWelsh: 'Swydd Buckingham',
            countyAbbreviation: 'Bucks',
            countyCode: 'buc',
            chapmanCode: 'bkm',
            hcsCode: 'buc',
            classLevel: 6,
            country: 'England',
            colours: [
               {rows: 5, colour: bucGreen},
               {rows: 1},
               {rows: 3, colour: bucSilver},
               {rows: 1},
               {rows: 5, colour: bucGreen}
            ],
            backgroundColour: bucGreen,
            borderColour: bucSilver
         },
         {
            countyName: 'Carmarthenshire',
            countyNameInWelsh: 'Sir Gaerfyrddin',
            countyAbbreviation: 'Carms',
            countyCode: 'crm',
            chapmanCode: 'cmn',
            hcsCode: 'crm',
            classLevel: 6,
            country: 'Wales',
            colours: [
               {rows: 3, colour: crmGold},
               {rows: 8, colour: crmRed},
               {rows: 3, colour: crmGold}
            ],
            textColour: crmGold,
            backgroundColour: crmRed,
            borderColour: crmGold
         },
         {
            countyName: 'Westmorland',
            countyAbbreviation: 'Westm',
            countyCode: 'wml',
            chapmanCode: 'wes',
            hcsCode: 'wml',
            classLevel: 6,
            country: 'England',
            colours: [
               {rows: 5, colour: wmlRed},
               {rows: 3},
               {rows: 5, colour: wmlRed}
            ],
            alternateColours: [
               [
                  {rows: 1, colour: wmlGold},
                  {rows: 5, colour: wmlRed},
                  {rows: 3},
                  {rows: 5, colour: wmlRed},
                  {rows: 1, colour: wmlGold}
               ],
               [
                  {rows: 5, colour: wmlRed},
                  {rows: 1},
                  {rows: 1, colour: wmlGold},
                  {rows: 1},
                  {rows: 5, colour: wmlRed}
               ],
               [
                  {rows: 4, colour: wmlRed},
                  {rows: 2},
                  {rows: 2, colour: wmlGold},
                  {rows: 2},
                  {rows: 4, colour: wmlRed}
               ],
               [
                  {rows: 5, colour: wmlRed},
                  {rows: 1, colour: wmlGold},
                  {rows: 3},
                  {rows: 1, colour: wmlGold},
                  {rows: 5, colour: wmlRed}
               ]
            ],
            backgroundColour: wmlRed,
            borderColour: wmlGold
         },
         {
            countyName: 'Montgomeryshire',
            countyAbbreviation: 'Monts',
            countyCode: 'mtg',
            chapmanCode: 'mgy',
            hcsCode: 'mtg',
            classLevel: 6,
            country: 'Wales',
            colours: [
               {rows: 4, colour: mtgBlack},
               {rows: 2, colour: mtgGold},
               {rows: 2, colour: mtgRed},
               {rows: 2, colour: mtgGold},
               {rows: 4, colour: mtgBlack}
            ],
            alternateColours: [
               [
                  {rows: 1, colour: mtgBlack},
                  {rows: 3, colour: mtgGold},
                  {rows: 2, colour: mtgRed},
                  {rows: 2, colour: mtgBlue},
                  {rows: 2, colour: mtgRed},
                  {rows: 3, colour: mtgGold},
                  {rows: 1, colour: mtgBlack}
               ],
               [
                  {rows: 4, colour: mtgGold},
                  {rows: 1, colour: mtgBlack},
                  {rows: 4, colour: mtgRed},
                  {rows: 1, colour: mtgBlack},
                  {rows: 4, colour: mtgGold}
               ],
               [
                  {rows: 2, colour: mtgRed},
                  {rows: 4, colour: mtgGold},
                  {rows: 2, colour: mtgBlue},
                  {rows: 4, colour: mtgGold},
                  {rows: 2, colour: mtgRed}
               ],
               [
                  {rows: 2, colour: mtgRed},
                  {rows: 1, colour: mtgGold},
                  {rows: 3, colour: mtgBlack},
                  {rows: 2},
                  {rows: 3, colour: mtgBlack},
                  {rows: 1, colour: mtgGold},
                  {rows: 2, colour: mtgRed}
               ],
               [
                  {rows: 1, colour: mtgBlack},
                  {rows: 1},
                  {rows: 3, colour: mtgBlack},
                  {rows: 1, colour: mtgGold},
                  {rows: 2, colour: mtgRed},
                  {rows: 1, colour: mtgGold},
                  {rows: 3, colour: mtgBlack},
                  {rows: 1},
                  {rows: 1, colour: mtgBlack}
               ],
               [
                  {rows: 3, colour: mtgBlack},
                  {rows: 1},
                  {rows: 2, colour: mtgGold},
                  {rows: 2, colour: mtgRed},
                  {rows: 2, colour: mtgGold},
                  {rows: 1},
                  {rows: 3, colour: mtgBlack}
               ],
               [
                  {rows: 5, colour: mtgGold},
                  {rows: 2, colour: mtgRed},
                  {rows: 2},
                  {rows: 5, colour: mtgBlack}
               ],
               [
                  {rows: 2, colour: mtgGold},
                  {rows: 2, colour: mtgRed},
                  {rows: 3, colour: mtgGold},
                  {rows: 3, colour: mtgBlack},
                  {rows: 2},
                  {rows: 2, colour: mtgBlack}
               ],
               [
                  {rows: 3, colour: mtgGold},
                  {rows: 3, colour: mtgRed},
                  {rows: 2, colour: mtgGold},
                  {rows: 3, colour: mtgBlack},
                  {rows: 3, colour: mtgGold}
               ],
               [
                  {rows: 2, colour: mtgGold},
                  {rows: 3, colour: mtgBlack},
                  {rows: 1, colour: mtgGold},
                  {rows: 3, colour: mtgRed},
                  {rows: 1, colour: mtgGold},
                  {rows: 3, colour: mtgBlack},
                  {rows: 2, colour: mtgGold}
               ],
               [
                  {rows: 3, colour: mtgBlack},
                  {rows: 3, colour: mtgGold},
                  {rows: 2, colour: mtgBlack},
                  {rows: 3, colour: mtgRed},
                  {rows: 3, colour: mtgBlack}
               ],
               [
                  {rows: 2, colour: mtgBlack},
                  {rows: 2},
                  {rows: 1, colour: mtgBlack},
                  {rows: 2, colour: mtgRed},
                  {rows: 1, colour: mtgBlack},
                  {rows: 2, colour: mtgGold},
                  {rows: 2, colour: mtgBlack}
               ],
               [
                  {rows: 3, colour: mtgBlack},
                  {rows: 2},
                  {rows: 1, colour: mtgBlack},
                  {rows: 2},
                  {rows: 1, colour: mtgBlack},
                  {rows: 2},
                  {rows: 3, colour: mtgBlack}
               ],
               [
                  {rows: 2, colour: mtgBlack},
                  {rows: 2},
                  {rows: 2, colour: mtgBlack},
                  {rows: 2},
                  {rows: 2, colour: mtgBlack},
                  {rows: 2},
                  {rows: 2, colour: mtgBlack}
               ]
            ],
            textColour: mtgGold,
            backgroundColour: mtgBlack,
            borderColour: mtgRed
         },
         {
            countyName: 'Denbighshire',
            countyAbbreviation: 'Denbs',
            countyCode: 'den',
            chapmanCode: 'den',
            hcsCode: 'dbh',
            classLevel: 6,
            country: 'Wales',
            colours: [
               {rows: 4, colour: denRed},
               {rows: 3},
               {rows: 3, colour: denBlack},
               {rows: 4, colour: denRed}
            ],
            alternateColours: [
               [
                  {rows: 4, colour: denBlack},
                  {rows: 2},
                  {rows: 2, colour: denRed},
                  {rows: 2},
                  {rows: 4, colour: denBlack}
               ],
               [
                  {rows: 3, colour: denRed},
                  {rows: 2},
                  {rows: 1, colour: denRed},
                  {rows: 2, colour: denBlack},
                  {rows: 1, colour: denRed},
                  {rows: 2},
                  {rows: 3, colour: denRed}
               ],
               [
                  {rows: 3, colour: denRed},
                  {rows: 2, colour: denBlack},
                  {rows: 1, colour: denRed},
                  {rows: 2},
                  {rows: 1, colour: denRed},
                  {rows: 2, colour: denBlack},
                  {rows: 3, colour: denRed}
               ],
               [
                  {rows: 3, colour: denRed},
                  {rows: 3},
                  {rows: 2, colour: denRed},
                  {rows: 3, colour: denBlack},
                  {rows: 3, colour: denRed}
               ]
            ],
            backgroundColour: denRed,
            borderColour: denBlack
         },
         {
            countyName: 'Pembrokeshire',
            countyAbbreviation: 'Pembs',
            countyCode: 'pem',
            chapmanCode: 'pem',
            hcsCode: 'pmb',
            classLevel: 7,
            country: 'Wales',
            colours: [
               {rows: 5, colour: pemDarkBlue},
               {rows: 4, colour: pemLightBlue},
               {rows: 5, colour: pemDarkBlue}
            ],
            textColour: pemLightBlue,
            backgroundColour: pemDarkBlue,
            borderColour: pemLightBlue
         },
         {
            countyName: 'Cardiganshire',
            countyAbbreviation: 'Cards',
            countyCode: 'crd',
            chapmanCode: 'cgn',
            hcsCode: 'crd',
            classLevel: 7,
            country: 'Wales',
            colours: [
               {rows: 6, colour: crdBlack},
               {rows: 3, colour: crdGold},
               {rows: 6, colour: crdBlack}
            ],
            textColour: crdGold,
            backgroundColour: crdBlack
         },
         {
            countyName: 'Aberdeenshire',
            countyAbbreviation: 'Aberds',
            countyCode: 'abd',
            chapmanCode: 'abd',
            hcsCode: 'abn',
            classLevel: 7,
            country: 'Scotland',
            colours: [
               {rows: 6, colour: abdLightBlue},
               {rows: 1, colour: abdGold},
               {rows: 6, colour: abdDarkBlue}
            ],
            alternateColours: [
               [
                  {rows: 6, colour: [255, 150, 0]},
                  {rows: 2},
                  {rows: 6, colour: [90, 30, 90]}
               ]
            ],
            textColour: abdGold,
            backgroundColour: abdLightBlue,
            borderColour: abdDarkBlue
         },
         {
            countyName: 'Angus',
            countyCode: 'ans',
            chapmanCode: 'ans',
            hcsCode: 'ang',
            classLevel: 7,
            country: 'Scotland',
            colours: [
               {rows: 5, colour: ansBlue},
               {rows: 1},
               {rows: 1, colour: ansRed},
               {rows: 1},
               {rows: 5, colour: ansBlue}
            ],
            alternateColours: [
               [
                  {rows: 4, colour: ansBlue},
                  {rows: 1},
                  {rows: 1, colour: ansRed},
                  {rows: 1},
                  {rows: 1, colour: ansRed},
                  {rows: 1},
                  {rows: 4, colour: ansBlue}
               ],
               [
                  {rows: 2, colour: ansBlue},
                  {rows: 1},
                  {rows: 1, colour: ansRed},
                  {rows: 1},
                  {rows: 1, colour: ansRed},
                  {rows: 1},
                  {rows: 1, colour: ansRed},
                  {rows: 1},
                  {rows: 5, colour: ansBlue}
               ],
               [
                  {rows: 1, colour: ansRed},
                  {rows: 1},
                  {rows: 1, colour: ansRed},
                  {rows: 1},
                  {rows: 1, colour: ansRed},
                  {rows: 1},
                  {rows: 8, colour: ansBlue}
               ]
            ],
            backgroundColour: ansBlue,
            borderColour: ansRed
         },
         {
            countyName: 'Kincardineshire',
            countyAbbreviation: 'Kincards',
            countyCode: 'kcd',
            chapmanCode: 'kcd',
            hcsCode: 'knc',
            classLevel: 7,
            country: 'Scotland',
            colours: [
               {rows: 1, colour: kcdGreen},
               {rows: 1, colour: kcdRed},
               {rows: 2, colour: kcdGold},
               {rows: 2, colour: kcdRed},
               {rows: 2, colour: kcdGold},
               {rows: 2, colour: kcdRed},
               {rows: 2, colour: kcdGold},
               {rows: 1, colour: kcdRed},
               {rows: 1, colour: kcdGreen}
            ],
            alternateColours: [
               [
                  {rows: 2, colour: kcdGreen},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdGreen}
               ],
               [
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdRed}
               ],
               [
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdGreen},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdGreen}
               ],
               [
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdGreen},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdGreen}
               ],
               [
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdGreen},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdRed}
               ],
               [
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdRed},
                  {rows: 2, colour: kcdGold},
                  {rows: 2, colour: kcdGreen}
               ]
            ],
            textColour: kcdGold,
            backgroundColour: kcdRed,
            borderColour: kcdGreen
         },
         {
            countyName: 'Stirlingshire',
            countyAbbreviation: 'Stirls',
            countyCode: 'sti',
            chapmanCode: 'sti',
            hcsCode: 'stl',
            classLevel: 7,
            country: 'Scotland',
            colours: [
               {rows: 6, colour: stiRed},
               {rows: 6, colour: stiBrown}
            ],
            alternateColours: [
               [
                  {rows: 7, colour: stiRed},
                  {rows: 7, colour: stiBlack}
               ]
            ],
            backgroundColour: stiRed,
            borderColour: stiBrown
         },
         {
            countyName: 'Banffshire',
            countyCode: 'ban',
            chapmanCode: 'ban',
            hcsCode: 'bnf',
            classLevel: 7,
            country: 'Scotland',
            colours: [
               {rows: 2, colour: banBlue},
               {rows: 1},
               {rows: 7, colour: banGreen},
               {rows: 1},
               {rows: 2, colour: banBlue}
            ],
            alternateColours: [
               [
                  {rows: 6, colour: banGreen},
                  {rows: 2},
                  {rows: 6, colour: banBlack}
               ],
               [
                  {rows: 2, colour: banBlack},
                  {rows: 2},
                  {rows: 6, colour: banGreen},
                  {rows: 2},
                  {rows: 2, colour: banBlack}
               ],
               [
                  {rows: 4, colour: banGreen},
                  {rows: 2},
                  {rows: 2, colour: banBlack},
                  {rows: 2},
                  {rows: 4, colour: banGreen}
               ],
               [
                  {rows: 5, colour: banGreen},
                  {rows: 1},
                  {rows: 1, colour: banBlack},
                  {rows: 1},
                  {rows: 5, colour: banGreen}
               ],
               [
                  {rows: 1, colour: banBlack},
                  {rows: 1},
                  {rows: 3, colour: banGreen},
                  {rows: 1},
                  {rows: 1, colour: banBlack},
                  {rows: 1},
                  {rows: 3, colour: banGreen},
                  {rows: 1},
                  {rows: 1, colour: banBlack}
               ],
               [
                  {rows: 4, colour: banGreen},
                  {rows: 2, colour: banBlack},
                  {rows: 2},
                  {rows: 2, colour: banBlack},
                  {rows: 4, colour: banGreen}
               ],
               [
                  {rows: 1, colour: banBlack},
                  {rows: 4, colour: banGreen},
                  {rows: 1, colour: banBlack},
                  {rows: 2},
                  {rows: 1, colour: banBlack},
                  {rows: 4, colour: banGreen},
                  {rows: 1, colour: banBlack}
               ],
               [
                  {rows: 2, colour: banBlack},
                  {rows: 4, colour: banGreen},
                  {rows: 2},
                  {rows: 4, colour: banGreen},
                  {rows: 2, colour: banBlack}
               ],
               [
                  {rows: 4, colour: banBlack},
                  {rows: 2, colour: [255, 150, 0]},
                  {rows: 2},
                  {rows: 2, colour: [0, 45, 165]},
                  {rows: 4, colour: banBlack}
               ],
               [
                  {rows: 6, colour: [255, 150, 0]},
                  {rows: 2},
                  {rows: 6, colour: [0, 45, 165]}
               ]
            ],
            backgroundColour: banGreen,
            borderColour: banBlue
         },
         {
            countyName: 'Flintshire',
            countyAbbreviation: 'Flints',
            countyCode: 'fln',
            chapmanCode: 'fln',
            hcsCode: 'flt',
            classLevel: 7,
            country: 'Wales',
            colours: [
               {rows: 1, colour: flnRed},
               {rows: 2, colour: flnBlack},
               {rows: 2},
               {rows: 4, colour: flnBlack},
               {rows: 2},
               {rows: 2, colour: flnBlack},
               {rows: 1, colour: flnRed}
            ],
            alternateColours: [
               [
                  {rows: 2, colour: flnBlack},
                  {rows: 2},
                  {rows: 2, colour: flnBlack},
                  {rows: 1, colour: flnRed},
                  {rows: 2, colour: flnBlack},
                  {rows: 2},
                  {rows: 2, colour: flnBlack}
               ]
            ],
            backgroundColour: flnBlack,
            borderColour: flnRed
         },
         {
            countyName: 'Perthshire',
            countyAbbreviation: 'Perths',
            countyCode: 'per',
            chapmanCode: 'per',
            hcsCode: 'prt',
            classLevel: 8,
            country: 'Scotland',
            colours: [
               {rows: 4, colour: perGreen},
               {rows: 5, colour: perGold},
               {rows: 4, colour: perGreen}
            ],
            textColour: perGold,
            backgroundColour: perGreen,
            borderColour: perGold
         },
         {
            countyName: 'Clackmannanshire',
            countyAbbreviation: 'Clacks',
            countyCode: 'clk',
            chapmanCode: 'clk',
            hcsCode: 'clm',
            classLevel: 8,
            country: 'Scotland',
            colours: [
               {rows: 4, colour: clkGreen},
               {rows: 1},
               {rows: 3, colour: clkBlack},
               {rows: 1},
               {rows: 4, colour: clkGreen}
            ],
            backgroundColour: clkGreen,
            borderColour: clkBlack
         },
         {
            countyName: 'Fife',
            countyCode: 'fif',
            chapmanCode: 'fif',
            hcsCode: 'ffe',
            classLevel: 8,
            country: 'Scotland',
            colours: [
               {rows: 4, colour: fifDarkBlue},
               {rows: 1, colour: fifGold},
               {rows: 4, colour: fifLightBlue},
               {rows: 1, colour: fifGold},
               {rows: 4, colour: fifDarkBlue}
            ],
            alternateColours: [
               [
                  {rows: 6, colour: fifGold},
                  {rows: 2, colour: [225, 45, 45]},
                  {rows: 6, colour: fifDarkBlue}
               ]
            ],
            textColour: fifGold,
            backgroundColour: fifDarkBlue,
            borderColour: fifLightBlue
         },
         {
            countyName: 'Ayrshire',
            countyAbbreviation: 'Ayrs',
            countyCode: 'ayr',
            chapmanCode: 'ayr',
            hcsCode: 'ays',
            classLevel: 8,
            country: 'Scotland',
            colours: [
               {rows: 1, colour: ayrSilver},
               {rows: 1, colour: ayrYellow},
               {rows: 9, colour: ayrMaroon},
               {rows: 1, colour: ayrYellow},
               {rows: 1, colour: ayrSilver}
            ],
            alternateColours: [
               [
                  {rows: 1, colour: ayrYellow},
                  {rows: 12, colour: ayrMaroon},
                  {rows: 1, colour: ayrYellow}
               ],
               [
                  {rows: 1, colour: ayrYellow},
                  {rows: 1, colour: ayrSilver},
                  {rows: 9, colour: ayrMaroon},
                  {rows: 1, colour: ayrSilver},
                  {rows: 1, colour: ayrYellow}
               ],
               [
                  {rows: 1, colour: ayrYellow},
                  {rows: 1, colour: ayrSilver},
                  {rows: 1, colour: ayrYellow},
                  {rows: 8, colour: ayrMaroon},
                  {rows: 1, colour: ayrYellow},
                  {rows: 1, colour: ayrSilver},
                  {rows: 1, colour: ayrYellow}
               ],
               [
                  {rows: 5, colour: ayrMaroon},
                  {rows: 1, colour: ayrYellow},
                  {rows: 2},
                  {rows: 1, colour: ayrYellow},
                  {rows: 5, colour: ayrMaroon}
               ],
               [
                  {rows: 1, colour: ayrYellow},
                  {rows: 4, colour: ayrMaroon},
                  {rows: 1, colour: ayrYellow},
                  {rows: 1},
                  {rows: 1, colour: ayrYellow},
                  {rows: 4, colour: ayrMaroon},
                  {rows: 1, colour: ayrYellow}
               ],
               [
                  {rows: 2, colour: ayrYellow},
                  {rows: 9, colour: ayrMaroon},
                  {rows: 2, colour: ayrYellow}
               ],
               [
                  {rows: 5, colour: ayrMaroon},
                  {rows: 1, colour: ayrYellow},
                  {rows: 1, colour: ayrSilver},
                  {rows: 1, colour: ayrYellow},
                  {rows: 5, colour: ayrMaroon}
               ],
               [
                  {rows: 3, colour: ayrMaroon},
                  {rows: 1, colour: ayrYellow},
                  {rows: 6, colour: ayrMaroon},
                  {rows: 1, colour: ayrYellow},
                  {rows: 3, colour: ayrMaroon}
               ],
               [
                  {rows: 2, colour: ayrYellow},
                  {rows: 9, colour: ayrMaroon},
                  {rows: 2, colour: ayrYellow}
               ],
               [
                  {rows: 6, colour: ayrMaroon},
                  {rows: 1, colour: ayrYellow},
                  {rows: 6, colour: ayrMaroon}
               ],
               [
                  {rows: 3, colour: ayrMaroon},
                  {rows: 1},
                  {rows: 6, colour: ayrMaroon},
                  {rows: 1},
                  {rows: 3, colour: ayrMaroon}
               ]
            ],
            textColour: ayrYellow,
            backgroundColour: ayrMaroon
         },
         {
            countyName: 'Lanarkshire',
            countyAbbreviation: 'Lanarks',
            countyCode: 'lnk',
            chapmanCode: 'lks',
            hcsCode: 'lnk',
            classLevel: 8,
            country: 'Scotland',
            colours: [
               {rows: 4, colour: lnkGold},
               {rows: 5, colour: lnkBrown},
               {rows: 4, colour: lnkGold}
            ],
            textColour: lnkBrown,
            backgroundColour: lnkGold,
            borderColour: lnkBrown
         },
         {
            countyName: 'Renfrewshire',
            countyAbbreviation: 'Renfrews',
            countyCode: 'rnf',
            chapmanCode: 'rfw',
            hcsCode: 'rnf',
            classLevel: 8,
            country: 'Scotland',
            colours: [
               {rows: 4, colour: rnfMaroon},
               {rows: 1, colour: rnfGold},
               {rows: 4, colour: rnfBlue},
               {rows: 1, colour: rnfGold},
               {rows: 4, colour: rnfMaroon}
            ],
            textColour: rnfGold,
            backgroundColour: rnfMaroon,
            borderColour: rnfBlue
         },
         {
            countyName: 'Dunbartonshire',
            countyAbbreviation: 'Dunbarts',
            countyCode: 'dun',
            chapmanCode: 'dnb',
            hcsCode: 'dun',
            classLevel: 8,
            country: 'Scotland',
            colours: [
               {rows: 5, colour: dunRed},
               {rows: 1},
               {rows: 1, colour: dunGreen},
               {rows: 1},
               {rows: 5, colour: dunRed}
            ],
            alternateColours: [
               [
                  {rows: 5, colour: dunRed},
                  {rows: 2},
                  {rows: 2, colour: dunGreen},
                  {rows: 5, colour: dunRed}
               ],
               [
                  {rows: 6, colour: dunRed},
                  {rows: 1},
                  {rows: 1, colour: dunGreen},
                  {rows: 6, colour: dunRed}
               ],
               [
                  {rows: 5, colour: dunRed},
                  {rows: 1, colour: dunGreen},
                  {rows: 2},
                  {rows: 1, colour: dunGreen},
                  {rows: 5, colour: dunRed}
               ],
               [
                  {rows: 5, colour: dunRed},
                  {rows: 2, colour: [210, 165, 0]},
                  {rows: 2, colour: dunGreen},
                  {rows: 5, colour: dunRed}
               ],
               [
                  {rows: 5, colour: dunRed},
                  {rows: 2, colour: [225, 195, 0]},
                  {rows: 2, colour: dunGreen},
                  {rows: 5, colour: dunRed}
               ],
               [
                  {rows: 5, colour: dunRed},
                  {rows: 1},
                  {rows: 2, colour: dunGreen},
                  {rows: 1},
                  {rows: 5, colour: dunRed}
               ],
               [
                  {rows: 1, colour: dunGreen},
                  {rows: 1},
                  {rows: 4, colour: dunRed},
                  {rows: 2},
                  {rows: 4, colour: dunRed},
                  {rows: 1},
                  {rows: 1, colour: dunGreen}
               ],
               [
                  {rows: 1, colour: dunGreen},
                  {rows: 5, colour: dunRed},
                  {rows: 2},
                  {rows: 5, colour: dunRed},
                  {rows: 1, colour: dunGreen}
               ]
            ],
            backgroundColour: dunRed,
            borderColour: dunGreen
         },
         {
            countyName: 'Dumfriesshire',
            countyAbbreviation: 'Dumfs',
            countyCode: 'dmf',
            chapmanCode: 'dfs',
            hcsCode: 'dmf',
            classLevel: 8,
            country: 'Scotland',
            colours: [
               {rows: 3, colour: dmfGold},
               {rows: 2, colour: dmfRed},
               {rows: 4, colour: dmfBlack},
               {rows: 2, colour: dmfRed},
               {rows: 3, colour: dmfGold}
            ],
            textColour: dmfBlack,
            backgroundColour: dmfGold,
            borderColour: dmfRed
         },
         {
            countyName: 'West Lothian',
            countyCode: 'wln',
            chapmanCode: 'wln',
            hcsCode: 'wlt',
            classLevel: 9,
            country: 'Scotland',
            colours: [
               {rows: 5, colour: wlnMaroon},
               {rows: 4, colour: wlnGold},
               {rows: 5, colour: wlnMaroon}
            ],
            alternateColours: [
               [
                  {rows: 5, colour: wlnMaroon},
                  {rows: 1, colour: wlnSilver},
                  {rows: 2, colour: wlnGold},
                  {rows: 1, colour: wlnSilver},
                  {rows: 5, colour: wlnMaroon}
               ],
               [
                  {rows: 5, colour: wlnMaroon},
                  {rows: 1},
                  {rows: 2, colour: wlnGold},
                  {rows: 1},
                  {rows: 5, colour: wlnMaroon}
               ],
               [
                  {rows: 5, colour: wlnMaroon},
                  {rows: 1, colour: wlnGold},
                  {rows: 2},
                  {rows: 1, colour: wlnGold},
                  {rows: 5, colour: wlnMaroon}
               ],
               [
                  {rows: 5, colour: wlnMaroon},
                  {rows: 1, colour: wlnGold},
                  {rows: 2, colour: wlnSilver},
                  {rows: 1, colour: wlnGold},
                  {rows: 5, colour: wlnMaroon}
               ]
            ],
            textColour: wlnSilver,
            backgroundColour: wlnMaroon,
            borderColour: wlnGold
         },
         {
            countyName: 'Anglesey',
            countyCode: 'agy',
            chapmanCode: 'agy',
            hcsCode: 'agl',
            classLevel: 9,
            country: 'Wales',
            colours: [
               {rows: 6, colour: agyRed},
               {rows: 3, colour: agyGold},
               {rows: 6, colour: agyRed}
            ],
            alternateColours: [
               [
                  {rows: 6, colour: agyRed},
                  {rows: 2, colour: agyGold},
                  {rows: 6, colour: agyRed}
               ],
               [
                  {rows: 5, colour: agyRed},
                  {rows: 2, colour: agyGold},
                  {rows: 5, colour: agyRed}
               ],
               [
                  {rows: 5, colour: agyRed},
                  {rows: 3, colour: agyGold},
                  {rows: 5, colour: agyRed}
               ]
            ],
            textColour: agyGold,
            backgroundColour: agyRed
         },
         {
            countyName: 'Merioneth',
            countyCode: 'mer',
            chapmanCode: 'mer',
            hcsCode: 'mrn',
            classLevel: 9,
            country: 'Wales',
            colours: [
               {rows: 4, colour: merBlue},
               {rows: 2},
               {rows: 2, colour: merBlue},
               {rows: 2, colour: merGold},
               {rows: 4, colour: merBlue}
            ],
            alternateColours: [
               [
                  {rows: 2, colour: merGold},
                  {rows: 4, colour: merBlue},
                  {rows: 2},
                  {rows: 4, colour: merBlue},
                  {rows: 2, colour: merGold}
               ],
               [
                  {rows: 5, colour: merBlue},
                  {rows: 2},
                  {rows: 2, colour: merGold},
                  {rows: 5, colour: merBlue}
               ]
            ],
            backgroundColour: merBlue,
            borderColour: merGold
         },
         {
            countyName: 'Midlothian',
            countyCode: 'mln',
            chapmanCode: 'mln',
            hcsCode: 'mlt',
            classLevel: 9,
            country: 'Scotland',
            colours: [
               {rows: 5, colour: mlnBlue},
               {rows: 4},
               {rows: 5, colour: mlnBlue}
            ],
            textColour: mlnBlue,
            borderColour: mlnBlue
         }
      ],
      deepCopy: (oldThing, func) => (
         // Create a new object, deeply copied, with func applied at each level.
         typeof func === 'function'
         ? func
         : (x) => x
      )(
         Array.isArray(oldThing)
         // If it's an array, use map directly.
         ? oldThing.map(
            (x) => util.deepCopy(x, func)
         )
         : typeof oldThing === 'object'
         // If it's a non-array object, we must be less direct.
         ? Object.fromEntries(
            Object.entries(oldThing).map(
               (x) => [x[0], util.deepCopy(x[1], func)]
            )
         )
         // Otherwise, no recursion is required.
         : oldThing
      )
   });

   const self = Object.freeze({
      createCanvas: function (args) {
         const numRows = 20;
         const pixelsPerRow = Math.ceil(Math.min(
            (
               args.isHorizontal
               ? args.height
               : Number.POSITIVE_INFINITY
            ),
            (
               args.isVertical
               ? args.width
               : Number.POSITIVE_INFINITY
            )
         ) / numRows);
         const newCanvas = document.createElement('canvas');
         if (args.isHorizontal) {
            if (args.isVertical) {
               if (args.width > args.height) {
                  newCanvas.height = numRows * pixelsPerRow;
                  newCanvas.width = Math.max(Math.round(args.width), newCanvas.height);
               } else {
                  newCanvas.width = numRows * pixelsPerRow;
                  newCanvas.height = Math.max(Math.round(args.height), newCanvas.width);
               }
            } else {
               newCanvas.height = numRows * pixelsPerRow;
               newCanvas.width = Math.round(args.width);
            }
         } else {
            if (args.isVertical) {
               newCanvas.width = numRows * pixelsPerRow;
               newCanvas.height = Math.round(args.height);
            } else {
               newCanvas.width = Math.round(args.width);
               newCanvas.height = Math.round(args.height);
            }
         }
         newCanvas.getContext('2d').fillStyle = util.convertToRgb(util.creamColour);
         newCanvas.getContext('2d').fillRect(0, 0, newCanvas.width, newCanvas.height);
         if (args.isHorizontal) {
            args.colours.reduce(
               function (totalRowsSoFar, stripe) {
                  if (stripe.hasOwnProperty('colour')) {
                     newCanvas.getContext('2d').fillStyle = util.convertToRgb(stripe.colour);
                     newCanvas.getContext('2d').fillRect(
                        0,
                        totalRowsSoFar,
                        newCanvas.width - (
                           args.isVertical
                           ? newCanvas.height - totalRowsSoFar - stripe.rows * pixelsPerRow
                           : 0
                        ),
                        stripe.rows * pixelsPerRow
                     );
                  }
                  return totalRowsSoFar + stripe.rows * pixelsPerRow;
               },
               Math.round(newCanvas.height - (numRows + self.getNumRows(args.colours)) * pixelsPerRow / 2)
            );
         }
         if (args.isVertical) {
            args.colours.reduce(
               function (totalRowsSoFar, stripe) {
                  if (stripe.hasOwnProperty('colour')) {
                     newCanvas.getContext('2d').fillStyle = util.convertToRgb(stripe.colour);
                     newCanvas.getContext('2d').fillRect(
                        totalRowsSoFar,
                        0,
                        stripe.rows * pixelsPerRow,
                        newCanvas.height - (
                           args.isHorizontal
                           ? newCanvas.width - totalRowsSoFar - stripe.rows * pixelsPerRow
                           : 0
                        )
                     );
                  }
                  return totalRowsSoFar + stripe.rows * pixelsPerRow;
               },
               Math.round(newCanvas.width - (numRows + self.getNumRows(args.colours)) * pixelsPerRow / 2)
            );
         }
         return newCanvas;
      },
      createCountyElement: function (county, options) {
         const newElement = document.createElement(options?.elementType ?? 'div');
         newElement.textContent = (
            options?.useWelshCountyNames
            ? county.countyNameInWelsh ?? county.countyName
            : county.countyName
         );
         newElement.style.color = util.convertToRgb(
            county.textColour ?? util.creamColour
         );
         newElement.style.backgroundColor = util.convertToRgb(
            county.backgroundColour ?? util.creamColour
         );
         newElement.style.borderColor = util.convertToRgb(
            county.borderColour ?? county.backgroundColour ?? util.creamColour
         );
         return newElement;
      },
      createInfo: () => util.deepCopy(util.createInfo(), Object.freeze),
      getNumRows: (colours) => colours.reduce(
         (numRowsSoFar, stripe) => numRowsSoFar + stripe.rows,
         0
      )
   });

   return self;
}());

export {counties};
