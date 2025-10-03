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
            countyAbbreviation: 'Wilts',
            countyCode: 'wil',
            chapmanCode: 'wil',
            hcsCode: 'wts',
            classLevel: 4,
            country: 'England',
            colours: [
               {rows: 6, colour: util.convertToRgb(wilGreen)},
               {rows: 2},
               {rows: 6, colour: util.convertToRgb(wilGreen)}
            ],
            backgroundColour: util.convertToRgb(wilGreen)
         },
         {
            countyName: 'Cornwall',
            countyCode: 'cnw',
            chapmanCode: 'con',
            hcsCode: 'cnw',
            classLevel: 4,
            country: 'England',
            colours: [
               {rows: 4, colour: util.convertToRgb(cnwBlack)},
               {rows: 1, colour: util.convertToRgb(cnwRed)},
               {rows: 1, colour: util.convertToRgb(cnwGold)},
               {rows: 4, colour: util.convertToRgb(cnwBlack)}
            ],
            textColour: util.convertToRgb(cnwGold),
            backgroundColour: util.convertToRgb(cnwBlack),
            borderColour: util.convertToRgb(cnwRed)
         },
         {
            countyName: 'Herefordshire',
            countyAbbreviation: 'Herefs',
            countyCode: 'hef',
            chapmanCode: 'hef',
            hcsCode: 'hrf',
            classLevel: 4,
            country: 'England',
            colours: [
               {rows: 4, colour: util.convertToRgb(hefRed)},
               {rows: 1, colour: util.convertToRgb(hefLightBlue)},
               {rows: 3, colour: util.convertToRgb(hefDarkBlue)},
               {rows: 1, colour: util.convertToRgb(hefLightBlue)},
               {rows: 4, colour: util.convertToRgb(hefRed)}
            ],
            alternateColours: [
               [
                  {rows: 4, colour: util.convertToRgb([165, 0, 0])},
                  {rows: 1, colour: util.convertToRgb(hefLightBlue)},
                  {rows: 3, colour: util.convertToRgb(hefDarkBlue)},
                  {rows: 1, colour: util.convertToRgb(hefLightBlue)},
                  {rows: 4, colour: util.convertToRgb([165, 0, 0])}
               ],
               [
                  {rows: 4, colour: util.convertToRgb([150, 15, 30])},
                  {rows: 1, colour: util.convertToRgb(hefLightBlue)},
                  {rows: 3, colour: util.convertToRgb(hefDarkBlue)},
                  {rows: 1, colour: util.convertToRgb(hefLightBlue)},
                  {rows: 4, colour: util.convertToRgb([150, 15, 30])}
               ]
            ],
            textColour: util.convertToRgb(hefLightBlue),
            backgroundColour: util.convertToRgb(hefRed),
            borderColour: util.convertToRgb(hefDarkBlue)
         },
         {
            countyName: 'Monmouthshire',
            countyAbbreviation: 'Monmouths',
            countyCode: 'mnm',
            chapmanCode: 'mon',
            hcsCode: 'mnm',
            classLevel: 4,
            country: 'Wales',
            colours: [
               {rows: 6, colour: util.convertToRgb(mnmBlue)},
               {rows: 2, colour: util.convertToRgb(mnmGold)},
               {rows: 6, colour: util.convertToRgb(mnmBlack)}
            ],
            alternateColours: [
               [
                  {rows: 3, colour: util.convertToRgb(mnmBlue)},
                  {rows: 1, colour: util.convertToRgb(mnmGold)},
                  {rows: 3, colour: util.convertToRgb(mnmBlue)},
                  {rows: 1, colour: util.convertToRgb(mnmGold)},
                  {rows: 3, colour: util.convertToRgb(mnmBlack)},
                  {rows: 1, colour: util.convertToRgb(mnmGold)},
                  {rows: 3, colour: util.convertToRgb(mnmBlack)}
               ],
               [
                  {rows: 4, colour: util.convertToRgb(mnmBlue)},
                  {rows: 1, colour: util.convertToRgb(mnmGold)},
                  {rows: 2, colour: util.convertToRgb(mnmBlue)},
                  {rows: 1, colour: util.convertToRgb(mnmGold)},
                  {rows: 2, colour: util.convertToRgb(mnmBlack)},
                  {rows: 1, colour: util.convertToRgb(mnmGold)},
                  {rows: 4, colour: util.convertToRgb(mnmBlack)}
               ]
            ],
            textColour: util.convertToRgb(mnmGold),
            backgroundColour: util.convertToRgb(mnmBlue),
            borderColour: util.convertToRgb(mnmBlack)
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
               {rows: 5, colour: util.convertToRgb(cumRed)},
               {rows: 4, colour: util.convertToRgb(cumGold)},
               {rows: 5, colour: util.convertToRgb(cumGreen)}
            ],
            textColour: util.convertToRgb(cumGold),
            backgroundColour: util.convertToRgb(cumGreen),
            borderColour: util.convertToRgb(cumRed)
         },
         {
            countyName: 'Radnorshire',
            countyAbbreviation: 'Rads',
            countyCode: 'rad',
            chapmanCode: 'rad',
            hcsCode: 'rdn',
            classLevel: 5,
            country: 'Wales',
            colours: [
               {rows: 1, colour: util.convertToRgb(radRed)},
               {rows: 2, colour: util.convertToRgb(radBlue)},
               {rows: 2, colour: util.convertToRgb(radGold)},
               {rows: 2, colour: util.convertToRgb(radBlue)},
               {rows: 2, colour: util.convertToRgb(radGold)},
               {rows: 2, colour: util.convertToRgb(radBlue)},
               {rows: 2, colour: util.convertToRgb(radGold)},
               {rows: 1, colour: util.convertToRgb(radRed)}
            ],
            alternateColours: [
               [
                  {rows: 1, colour: util.convertToRgb(radRed)},
                  {rows: 1, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 1, colour: util.convertToRgb(radBlue)},
                  {rows: 1, colour: util.convertToRgb(radRed)}
               ],
               [
                  {rows: 1, colour: util.convertToRgb(radRed)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 1, colour: util.convertToRgb(radRed)}
               ],
               [
                  {rows: 1, colour: util.convertToRgb(radRed)},
                  {rows: 1, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 1, colour: util.convertToRgb(radGold)},
                  {rows: 1, colour: util.convertToRgb(radRed)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(radRed)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radRed)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(radRed)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radRed)}
               ],
               [
                  {rows: 4, colour: util.convertToRgb(radRed)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 2, colour: util.convertToRgb(radBlue)},
                  {rows: 2, colour: util.convertToRgb(radGold)},
                  {rows: 4, colour: util.convertToRgb(radRed)}
               ],
               [
                  {rows: 4, colour: util.convertToRgb(radRed)},
                  {rows: 2, colour: util.convertToRgb([255, 210, 0])},
                  {rows: 2, colour: util.convertToRgb([30, 45, 240])},
                  {rows: 2, colour: util.convertToRgb([255, 210, 0])},
                  {rows: 4, colour: util.convertToRgb(radRed)}
               ]
            ],
            textColour: util.convertToRgb(radGold),
            backgroundColour: util.convertToRgb(radBlue),
            borderColour: util.convertToRgb(radRed)
         },
         {
            countyName: 'Dorset',
            countyCode: 'dor',
            chapmanCode: 'dor',
            hcsCode: 'drs',
            classLevel: 5,
            country: 'England',
            colours: [
               {rows: 2, colour: util.convertToRgb(dorGreen)},
               {rows: 2},
               {rows: 2, colour: util.convertToRgb(dorGreen)},
               {rows: 2},
               {rows: 2, colour: util.convertToRgb(dorGreen)}
            ],
            alternateColours: [
               [
                  {rows: 1, colour: util.convertToRgb(dorGreen)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(dorGreen)},
                  {rows: 2},
                  {rows: 3, colour: util.convertToRgb(dorGreen)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(dorGreen)},
                  {rows: 1},
                  {rows: 2, colour: util.convertToRgb(dorGreen)},
                  {rows: 1},
                  {rows: 4, colour: util.convertToRgb(dorGreen)}
               ]
            ],
            textColour: util.convertToRgb(dorGreen),
            borderColour: util.convertToRgb(dorGreen)
         },
         {
            countyName: 'Brecknockshire',
            countyAbbreviation: 'Brecons',
            countyCode: 'bre',
            chapmanCode: 'bre',
            hcsCode: 'brn',
            classLevel: 5,
            country: 'Wales',
            colours: [
               {rows: 2, colour: util.convertToRgb(breBlack)},
               {rows: 1, colour: util.convertToRgb(breGold)},
               {rows: 1, colour: util.convertToRgb(breBlack)},
               {rows: 2, colour: util.convertToRgb(breGold)},
               {rows: 2, colour: util.convertToRgb(breBlue)},
               {rows: 2, colour: util.convertToRgb(breGold)},
               {rows: 1, colour: util.convertToRgb(breBlack)},
               {rows: 1, colour: util.convertToRgb(breGold)},
               {rows: 2, colour: util.convertToRgb(breBlack)}
            ],
            textColour: util.convertToRgb(breBlue),
            backgroundColour: util.convertToRgb(breGold),
            borderColour: util.convertToRgb(breBlack)
         },
         {
            countyName: 'Rutland',
            countyCode: 'rut',
            chapmanCode: 'rut',
            hcsCode: 'rtl',
            classLevel: 5,
            country: 'England',
            colours: [
               {rows: 4, colour: util.convertToRgb(rutGreen)},
               {rows: 2, colour: util.convertToRgb(rutGold)},
               {rows: 2, colour: util.convertToRgb(rutGreen)},
               {rows: 2, colour: util.convertToRgb(rutGold)},
               {rows: 4, colour: util.convertToRgb(rutGreen)}
            ],
            textColour: util.convertToRgb(rutGold),
            backgroundColour: util.convertToRgb(rutGreen)
         },
         {
            countyName: 'Suffolk',
            countyCode: 'sfk',
            chapmanCode: 'sfk',
            hcsCode: 'sff',
            classLevel: 5,
            country: 'England',
            colours: [
               {rows: 2, colour: util.convertToRgb(sfkMaroon)},
               {rows: 1, colour: util.convertToRgb(sfkGold)},
               {rows: 4, colour: util.convertToRgb(sfkMaroon)},
               {rows: 1, colour: util.convertToRgb(sfkGold)},
               {rows: 2, colour: util.convertToRgb(sfkMaroon)}
            ],
            backgroundColour: util.convertToRgb(sfkMaroon),
            borderColour: util.convertToRgb(sfkGold)
         },
         {
            countyName: 'Bedfordshire',
            countyAbbreviation: 'Beds',
            countyCode: 'bed',
            chapmanCode: 'bdf',
            hcsCode: 'bed',
            classLevel: 5,
            country: 'England',
            colours: [
               {rows: 3, colour: util.convertToRgb(bedPurple)},
               {rows: 4, colour: util.convertToRgb(bedBlack)},
               {rows: 1, colour: util.convertToRgb(bedSilver)},
               {rows: 4, colour: util.convertToRgb(bedBlack)},
               {rows: 3, colour: util.convertToRgb(bedPurple)}
            ],
            textColour: util.convertToRgb(bedSilver),
            backgroundColour: util.convertToRgb(bedBlack),
            borderColour: util.convertToRgb(bedPurple)
         },
         {
            countyName: 'Huntingdonshire',
            countyAbbreviation: 'Hunts',
            countyCode: 'hun',
            chapmanCode: 'hun',
            hcsCode: 'hnt',
            classLevel: 5,
            country: 'England',
            colours: [
               {rows: 5, colour: util.convertToRgb(hunBlue)},
               {rows: 4, colour: util.convertToRgb(hunGold)},
               {rows: 5, colour: util.convertToRgb(hunBlue)}
            ],
            textColour: util.convertToRgb(hunGold),
            backgroundColour: util.convertToRgb(hunBlue)
         },
         {
            countyName: 'Caernarfonshire',
            countyAbbreviation: 'Caerns',
            countyCode: 'cae',
            chapmanCode: 'cae',
            hcsCode: 'crn',
            classLevel: 5,
            country: 'Wales',
            colours: [
               {rows: 5, colour: util.convertToRgb(caeBlack)},
               {rows: 3, colour: util.convertToRgb(caeGold)},
               {rows: 5, colour: util.convertToRgb(caeGreen)}
            ],
            alternateColours: [
               [
                  {rows: 2, colour: util.convertToRgb(caeGreen)},
                  {rows: 1, colour: util.convertToRgb(caeGold)},
                  {rows: 3, colour: util.convertToRgb(caeGreen)},
                  {rows: 1, colour: util.convertToRgb(caeGold)},
                  {rows: 3, colour: util.convertToRgb(caeGreen)},
                  {rows: 1, colour: util.convertToRgb(caeGold)},
                  {rows: 2, colour: util.convertToRgb(caeGreen)}
               ],
               [
                  {rows: 3, colour: util.convertToRgb(caeGreen)},
                  {rows: 1, colour: util.convertToRgb(caeGold)},
                  {rows: 2, colour: util.convertToRgb(caeGreen)},
                  {rows: 1, colour: util.convertToRgb(caeGold)},
                  {rows: 2, colour: util.convertToRgb(caeGreen)},
                  {rows: 1, colour: util.convertToRgb(caeGold)},
                  {rows: 3, colour: util.convertToRgb(caeGreen)}
               ]
            ],
            textColour: util.convertToRgb(caeGold),
            backgroundColour: util.convertToRgb(caeGreen),
            borderColour: util.convertToRgb(caeBlack)
         },
         {
            countyName: 'Roxburghshire',
            countyAbbreviation: 'Roxbs',
            countyCode: 'rox',
            chapmanCode: 'rox',
            hcsCode: 'rxb',
            classLevel: 6,
            country: 'Scotland',
            colours: [
               {rows: 2, colour: util.convertToRgb(roxBlack)},
               {rows: 2},
               {rows: 6, colour: util.convertToRgb(roxBlue)},
               {rows: 2},
               {rows: 2, colour: util.convertToRgb(roxBlack)}
            ],
            backgroundColour: util.convertToRgb(roxBlue),
            borderColour: util.convertToRgb(roxBlack)
         },
         {
            countyName: 'Oxfordshire',
            countyAbbreviation: 'Oxon',
            countyCode: 'oxf',
            chapmanCode: 'oxf',
            hcsCode: 'oxd',
            classLevel: 6,
            country: 'England',
            colours: [
               {rows: 6, colour: util.convertToRgb(oxfMagenta)},
               {rows: 2, colour: util.convertToRgb(oxfGold)},
               {rows: 6, colour: util.convertToRgb(oxfBlue)}
            ],
            textColour: util.convertToRgb(oxfGold),
            backgroundColour: util.convertToRgb(oxfMagenta),
            borderColour: util.convertToRgb(oxfBlue)
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
               {rows: 2, colour: util.convertToRgb(brkYellow)},
               {rows: 5, colour: util.convertToRgb(brkGreen)},
               {rows: 2, colour: util.convertToRgb(brkYellow)},
               {rows: 5, colour: util.convertToRgb(brkPurple)},
               {rows: 2, colour: util.convertToRgb(brkYellow)}
            ],
            textColour: util.convertToRgb(brkYellow),
            backgroundColour: util.convertToRgb(brkGreen),
            borderColour: util.convertToRgb(brkPurple)
         },
         {
            countyName: 'Buckinghamshire',
            countyAbbreviation: 'Bucks',
            countyCode: 'buc',
            chapmanCode: 'bkm',
            hcsCode: 'buc',
            classLevel: 6,
            country: 'England',
            colours: [
               {rows: 5, colour: util.convertToRgb(bucGreen)},
               {rows: 1},
               {rows: 3, colour: util.convertToRgb(bucSilver)},
               {rows: 1},
               {rows: 5, colour: util.convertToRgb(bucGreen)}
            ],
            backgroundColour: util.convertToRgb(bucGreen),
            borderColour: util.convertToRgb(bucSilver)
         },
         {
            countyName: 'Carmarthenshire',
            countyAbbreviation: 'Carms',
            countyCode: 'crm',
            chapmanCode: 'cmn',
            hcsCode: 'crm',
            classLevel: 6,
            country: 'Wales',
            colours: [
               {rows: 3, colour: util.convertToRgb(crmGold)},
               {rows: 8, colour: util.convertToRgb(crmRed)},
               {rows: 3, colour: util.convertToRgb(crmGold)}
            ],
            textColour: util.convertToRgb(crmGold),
            backgroundColour: util.convertToRgb(crmRed),
            borderColour: util.convertToRgb(crmGold)
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
               {rows: 5, colour: util.convertToRgb(wmlRed)},
               {rows: 3},
               {rows: 5, colour: util.convertToRgb(wmlRed)}
            ],
            alternateColours: [
               [
                  {rows: 1, colour: util.convertToRgb(wmlGold)},
                  {rows: 5, colour: util.convertToRgb(wmlRed)},
                  {rows: 3},
                  {rows: 5, colour: util.convertToRgb(wmlRed)},
                  {rows: 1, colour: util.convertToRgb(wmlGold)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(wmlRed)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(wmlGold)},
                  {rows: 1},
                  {rows: 5, colour: util.convertToRgb(wmlRed)}
               ],
               [
                  {rows: 4, colour: util.convertToRgb(wmlRed)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(wmlGold)},
                  {rows: 2},
                  {rows: 4, colour: util.convertToRgb(wmlRed)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(wmlRed)},
                  {rows: 1, colour: util.convertToRgb(wmlGold)},
                  {rows: 3},
                  {rows: 1, colour: util.convertToRgb(wmlGold)},
                  {rows: 5, colour: util.convertToRgb(wmlRed)}
               ]
            ],
            backgroundColour: util.convertToRgb(wmlRed),
            borderColour: util.convertToRgb(wmlGold)
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
               {rows: 4, colour: util.convertToRgb(mtgBlack)},
               {rows: 2, colour: util.convertToRgb(mtgGold)},
               {rows: 2, colour: util.convertToRgb(mtgRed)},
               {rows: 2, colour: util.convertToRgb(mtgGold)},
               {rows: 4, colour: util.convertToRgb(mtgBlack)}
            ],
            alternateColours: [
               [
                  {rows: 1, colour: util.convertToRgb(mtgBlack)},
                  {rows: 3, colour: util.convertToRgb(mtgGold)},
                  {rows: 2, colour: util.convertToRgb(mtgRed)},
                  {rows: 2, colour: util.convertToRgb(mtgBlue)},
                  {rows: 2, colour: util.convertToRgb(mtgRed)},
                  {rows: 3, colour: util.convertToRgb(mtgGold)},
                  {rows: 1, colour: util.convertToRgb(mtgBlack)}
               ],
               [
                  {rows: 4, colour: util.convertToRgb(mtgGold)},
                  {rows: 1, colour: util.convertToRgb(mtgBlack)},
                  {rows: 4, colour: util.convertToRgb(mtgRed)},
                  {rows: 1, colour: util.convertToRgb(mtgBlack)},
                  {rows: 4, colour: util.convertToRgb(mtgGold)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(mtgRed)},
                  {rows: 4, colour: util.convertToRgb(mtgGold)},
                  {rows: 2, colour: util.convertToRgb(mtgBlue)},
                  {rows: 4, colour: util.convertToRgb(mtgGold)},
                  {rows: 2, colour: util.convertToRgb(mtgRed)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(mtgRed)},
                  {rows: 1, colour: util.convertToRgb(mtgGold)},
                  {rows: 3, colour: util.convertToRgb(mtgBlack)},
                  {rows: 2},
                  {rows: 3, colour: util.convertToRgb(mtgBlack)},
                  {rows: 1, colour: util.convertToRgb(mtgGold)},
                  {rows: 2, colour: util.convertToRgb(mtgRed)}
               ],
               [
                  {rows: 1, colour: util.convertToRgb(mtgBlack)},
                  {rows: 1},
                  {rows: 3, colour: util.convertToRgb(mtgBlack)},
                  {rows: 1, colour: util.convertToRgb(mtgGold)},
                  {rows: 2, colour: util.convertToRgb(mtgRed)},
                  {rows: 1, colour: util.convertToRgb(mtgGold)},
                  {rows: 3, colour: util.convertToRgb(mtgBlack)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(mtgBlack)}
               ],
               [
                  {rows: 3, colour: util.convertToRgb(mtgBlack)},
                  {rows: 1},
                  {rows: 2, colour: util.convertToRgb(mtgGold)},
                  {rows: 2, colour: util.convertToRgb(mtgRed)},
                  {rows: 2, colour: util.convertToRgb(mtgGold)},
                  {rows: 1},
                  {rows: 3, colour: util.convertToRgb(mtgBlack)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(mtgGold)},
                  {rows: 2, colour: util.convertToRgb(mtgRed)},
                  {rows: 2},
                  {rows: 5, colour: util.convertToRgb(mtgBlack)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(mtgGold)},
                  {rows: 2, colour: util.convertToRgb(mtgRed)},
                  {rows: 3, colour: util.convertToRgb(mtgGold)},
                  {rows: 3, colour: util.convertToRgb(mtgBlack)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(mtgBlack)}
               ],
               [
                  {rows: 3, colour: util.convertToRgb(mtgGold)},
                  {rows: 3, colour: util.convertToRgb(mtgRed)},
                  {rows: 2, colour: util.convertToRgb(mtgGold)},
                  {rows: 3, colour: util.convertToRgb(mtgBlack)},
                  {rows: 3, colour: util.convertToRgb(mtgGold)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(mtgGold)},
                  {rows: 3, colour: util.convertToRgb(mtgBlack)},
                  {rows: 1, colour: util.convertToRgb(mtgGold)},
                  {rows: 3, colour: util.convertToRgb(mtgRed)},
                  {rows: 1, colour: util.convertToRgb(mtgGold)},
                  {rows: 3, colour: util.convertToRgb(mtgBlack)},
                  {rows: 2, colour: util.convertToRgb(mtgGold)}
               ],
               [
                  {rows: 3, colour: util.convertToRgb(mtgBlack)},
                  {rows: 3, colour: util.convertToRgb(mtgGold)},
                  {rows: 2, colour: util.convertToRgb(mtgBlack)},
                  {rows: 3, colour: util.convertToRgb(mtgRed)},
                  {rows: 3, colour: util.convertToRgb(mtgBlack)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(mtgBlack)},
                  {rows: 2},
                  {rows: 1, colour: util.convertToRgb(mtgBlack)},
                  {rows: 2, colour: util.convertToRgb(mtgRed)},
                  {rows: 1, colour: util.convertToRgb(mtgBlack)},
                  {rows: 2, colour: util.convertToRgb(mtgGold)},
                  {rows: 2, colour: util.convertToRgb(mtgBlack)}
               ],
               [
                  {rows: 3, colour: util.convertToRgb(mtgBlack)},
                  {rows: 2},
                  {rows: 1, colour: util.convertToRgb(mtgBlack)},
                  {rows: 2},
                  {rows: 1, colour: util.convertToRgb(mtgBlack)},
                  {rows: 2},
                  {rows: 3, colour: util.convertToRgb(mtgBlack)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(mtgBlack)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(mtgBlack)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(mtgBlack)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(mtgBlack)}
               ]
            ],
            textColour: util.convertToRgb(mtgGold),
            backgroundColour: util.convertToRgb(mtgBlack),
            borderColour: util.convertToRgb(mtgRed)
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
               {rows: 4, colour: util.convertToRgb(denRed)},
               {rows: 3},
               {rows: 3, colour: util.convertToRgb(denBlack)},
               {rows: 4, colour: util.convertToRgb(denRed)}
            ],
            alternateColours: [
               [
                  {rows: 4, colour: util.convertToRgb(denBlack)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(denRed)},
                  {rows: 2},
                  {rows: 4, colour: util.convertToRgb(denBlack)}
               ],
               [
                  {rows: 3, colour: util.convertToRgb(denRed)},
                  {rows: 2},
                  {rows: 1, colour: util.convertToRgb(denRed)},
                  {rows: 2, colour: util.convertToRgb(denBlack)},
                  {rows: 1, colour: util.convertToRgb(denRed)},
                  {rows: 2},
                  {rows: 3, colour: util.convertToRgb(denRed)}
               ],
               [
                  {rows: 3, colour: util.convertToRgb(denRed)},
                  {rows: 2, colour: util.convertToRgb(denBlack)},
                  {rows: 1, colour: util.convertToRgb(denRed)},
                  {rows: 2},
                  {rows: 1, colour: util.convertToRgb(denRed)},
                  {rows: 2, colour: util.convertToRgb(denBlack)},
                  {rows: 3, colour: util.convertToRgb(denRed)}
               ],
               [
                  {rows: 3, colour: util.convertToRgb(denRed)},
                  {rows: 3},
                  {rows: 2, colour: util.convertToRgb(denRed)},
                  {rows: 3, colour: util.convertToRgb(denBlack)},
                  {rows: 3, colour: util.convertToRgb(denRed)}
               ]
            ],
            backgroundColour: util.convertToRgb(denRed),
            borderColour: util.convertToRgb(denBlack)
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
               {rows: 5, colour: util.convertToRgb(pemDarkBlue)},
               {rows: 4, colour: util.convertToRgb(pemLightBlue)},
               {rows: 5, colour: util.convertToRgb(pemDarkBlue)}
            ],
            textColour: util.convertToRgb(pemLightBlue),
            backgroundColour: util.convertToRgb(pemDarkBlue),
            borderColour: util.convertToRgb(pemLightBlue)
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
               {rows: 6, colour: util.convertToRgb(crdBlack)},
               {rows: 3, colour: util.convertToRgb(crdGold)},
               {rows: 6, colour: util.convertToRgb(crdBlack)}
            ],
            textColour: util.convertToRgb(crdGold),
            backgroundColour: util.convertToRgb(crdBlack)
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
               {rows: 6, colour: util.convertToRgb(abdLightBlue)},
               {rows: 1, colour: util.convertToRgb(abdGold)},
               {rows: 6, colour: util.convertToRgb(abdDarkBlue)}
            ],
            alternateColours: [
               [
                  {rows: 6, colour: util.convertToRgb([255, 150, 0])},
                  {rows: 2},
                  {rows: 6, colour: util.convertToRgb([90, 30, 90])}
               ]
            ],
            textColour: util.convertToRgb(abdGold),
            backgroundColour: util.convertToRgb(abdLightBlue),
            borderColour: util.convertToRgb(abdDarkBlue)
         },
         {
            countyName: 'Angus',
            countyCode: 'ans',
            chapmanCode: 'ans',
            hcsCode: 'ang',
            classLevel: 7,
            country: 'Scotland',
            colours: [
               {rows: 5, colour: util.convertToRgb(ansBlue)},
               {rows: 1},
               {rows: 1, colour: util.convertToRgb(ansRed)},
               {rows: 1},
               {rows: 5, colour: util.convertToRgb(ansBlue)}
            ],
            alternateColours: [
               [
                  {rows: 4, colour: util.convertToRgb(ansBlue)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(ansRed)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(ansRed)},
                  {rows: 1},
                  {rows: 4, colour: util.convertToRgb(ansBlue)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(ansBlue)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(ansRed)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(ansRed)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(ansRed)},
                  {rows: 1},
                  {rows: 5, colour: util.convertToRgb(ansBlue)}
               ],
               [
                  {rows: 1, colour: util.convertToRgb(ansRed)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(ansRed)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(ansRed)},
                  {rows: 1},
                  {rows: 8, colour: util.convertToRgb(ansBlue)}
               ]
            ],
            backgroundColour: util.convertToRgb(ansBlue),
            borderColour: util.convertToRgb(ansRed)
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
               {rows: 1, colour: util.convertToRgb(kcdGreen)},
               {rows: 1, colour: util.convertToRgb(kcdRed)},
               {rows: 2, colour: util.convertToRgb(kcdGold)},
               {rows: 2, colour: util.convertToRgb(kcdRed)},
               {rows: 2, colour: util.convertToRgb(kcdGold)},
               {rows: 2, colour: util.convertToRgb(kcdRed)},
               {rows: 2, colour: util.convertToRgb(kcdGold)},
               {rows: 1, colour: util.convertToRgb(kcdRed)},
               {rows: 1, colour: util.convertToRgb(kcdGreen)}
            ],
            alternateColours: [
               [
                  {rows: 2, colour: util.convertToRgb(kcdGreen)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdGreen)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdRed)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdGreen)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdGreen)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdGreen)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdGreen)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdGreen)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdRed)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdRed)},
                  {rows: 2, colour: util.convertToRgb(kcdGold)},
                  {rows: 2, colour: util.convertToRgb(kcdGreen)}
               ]
            ],
            textColour: util.convertToRgb(kcdGold),
            backgroundColour: util.convertToRgb(kcdRed),
            borderColour: util.convertToRgb(kcdGreen)
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
               {rows: 6, colour: util.convertToRgb(stiRed)},
               {rows: 6, colour: util.convertToRgb(stiBrown)}
            ],
            alternateColours: [
               [
                  {rows: 7, colour: util.convertToRgb(stiRed)},
                  {rows: 7, colour: util.convertToRgb(stiBlack)}
               ]
            ],
            backgroundColour: util.convertToRgb(stiRed),
            borderColour: util.convertToRgb(stiBrown)
         },
         {
            countyName: 'Banffshire',
            countyCode: 'ban',
            chapmanCode: 'ban',
            hcsCode: 'bnf',
            classLevel: 7,
            country: 'Scotland',
            colours: [
               {rows: 2, colour: util.convertToRgb(banBlue)},
               {rows: 1},
               {rows: 7, colour: util.convertToRgb(banGreen)},
               {rows: 1},
               {rows: 2, colour: util.convertToRgb(banBlue)}
            ],
            alternateColours: [
               [
                  {rows: 6, colour: util.convertToRgb(banGreen)},
                  {rows: 2},
                  {rows: 6, colour: util.convertToRgb(banBlack)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(banBlack)},
                  {rows: 2},
                  {rows: 6, colour: util.convertToRgb(banGreen)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(banBlack)}
               ],
               [
                  {rows: 4, colour: util.convertToRgb(banGreen)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(banBlack)},
                  {rows: 2},
                  {rows: 4, colour: util.convertToRgb(banGreen)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(banGreen)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(banBlack)},
                  {rows: 1},
                  {rows: 5, colour: util.convertToRgb(banGreen)}
               ],
               [
                  {rows: 1, colour: util.convertToRgb(banBlack)},
                  {rows: 1},
                  {rows: 3, colour: util.convertToRgb(banGreen)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(banBlack)},
                  {rows: 1},
                  {rows: 3, colour: util.convertToRgb(banGreen)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(banBlack)}
               ],
               [
                  {rows: 4, colour: util.convertToRgb(banGreen)},
                  {rows: 2, colour: util.convertToRgb(banBlack)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(banBlack)},
                  {rows: 4, colour: util.convertToRgb(banGreen)}
               ],
               [
                  {rows: 1, colour: util.convertToRgb(banBlack)},
                  {rows: 4, colour: util.convertToRgb(banGreen)},
                  {rows: 1, colour: util.convertToRgb(banBlack)},
                  {rows: 2},
                  {rows: 1, colour: util.convertToRgb(banBlack)},
                  {rows: 4, colour: util.convertToRgb(banGreen)},
                  {rows: 1, colour: util.convertToRgb(banBlack)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(banBlack)},
                  {rows: 4, colour: util.convertToRgb(banGreen)},
                  {rows: 2},
                  {rows: 4, colour: util.convertToRgb(banGreen)},
                  {rows: 2, colour: util.convertToRgb(banBlack)}
               ],
               [
                  {rows: 4, colour: util.convertToRgb(banBlack)},
                  {rows: 2, colour: util.convertToRgb([255, 150, 0])},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb([0, 45, 165])},
                  {rows: 4, colour: util.convertToRgb(banBlack)}
               ],
               [
                  {rows: 6, colour: util.convertToRgb([255, 150, 0])},
                  {rows: 2},
                  {rows: 6, colour: util.convertToRgb([0, 45, 165])}
               ]
            ],
            backgroundColour: util.convertToRgb(banGreen),
            borderColour: util.convertToRgb(banBlue)
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
               {rows: 1, colour: util.convertToRgb(flnRed)},
               {rows: 2, colour: util.convertToRgb(flnBlack)},
               {rows: 2},
               {rows: 4, colour: util.convertToRgb(flnBlack)},
               {rows: 2},
               {rows: 2, colour: util.convertToRgb(flnBlack)},
               {rows: 1, colour: util.convertToRgb(flnRed)}
            ],
            alternateColours: [
               [
                  {rows: 2, colour: util.convertToRgb(flnBlack)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(flnBlack)},
                  {rows: 1, colour: util.convertToRgb(flnRed)},
                  {rows: 2, colour: util.convertToRgb(flnBlack)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(flnBlack)}
               ]
            ],
            backgroundColour: util.convertToRgb(flnBlack),
            borderColour: util.convertToRgb(flnRed)
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
               {rows: 4, colour: util.convertToRgb(perGreen)},
               {rows: 5, colour: util.convertToRgb(perGold)},
               {rows: 4, colour: util.convertToRgb(perGreen)}
            ],
            textColour: util.convertToRgb(perGold),
            backgroundColour: util.convertToRgb(perGreen),
            borderColour: util.convertToRgb(perGold)
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
               {rows: 4, colour: util.convertToRgb(clkGreen)},
               {rows: 1},
               {rows: 3, colour: util.convertToRgb(clkBlack)},
               {rows: 1},
               {rows: 4, colour: util.convertToRgb(clkGreen)}
            ],
            backgroundColour: util.convertToRgb(clkGreen),
            borderColour: util.convertToRgb(clkBlack)
         },
         {
            countyName: 'Fife',
            countyCode: 'fif',
            chapmanCode: 'fif',
            hcsCode: 'ffe',
            classLevel: 8,
            country: 'Scotland',
            colours: [
               {rows: 4, colour: util.convertToRgb(fifDarkBlue)},
               {rows: 1, colour: util.convertToRgb(fifGold)},
               {rows: 4, colour: util.convertToRgb(fifLightBlue)},
               {rows: 1, colour: util.convertToRgb(fifGold)},
               {rows: 4, colour: util.convertToRgb(fifDarkBlue)}
            ],
            alternateColours: [
               [
                  {rows: 6, colour: util.convertToRgb(fifGold)},
                  {rows: 2, colour: util.convertToRgb([225, 45, 45])},
                  {rows: 6, colour: util.convertToRgb(fifDarkBlue)}
               ]
            ],
            textColour: util.convertToRgb(fifGold),
            backgroundColour: util.convertToRgb(fifDarkBlue),
            borderColour: util.convertToRgb(fifLightBlue)
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
               {rows: 1, colour: util.convertToRgb(ayrSilver)},
               {rows: 1, colour: util.convertToRgb(ayrYellow)},
               {rows: 9, colour: util.convertToRgb(ayrMaroon)},
               {rows: 1, colour: util.convertToRgb(ayrYellow)},
               {rows: 1, colour: util.convertToRgb(ayrSilver)}
            ],
            alternateColours: [
               [
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 12, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)}
               ],
               [
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 1, colour: util.convertToRgb(ayrSilver)},
                  {rows: 9, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 1, colour: util.convertToRgb(ayrSilver)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)}
               ],
               [
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 1, colour: util.convertToRgb(ayrSilver)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 8, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 1, colour: util.convertToRgb(ayrSilver)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 2},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 5, colour: util.convertToRgb(ayrMaroon)}
               ],
               [
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 4, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 4, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(ayrYellow)},
                  {rows: 9, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 2, colour: util.convertToRgb(ayrYellow)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 1, colour: util.convertToRgb(ayrSilver)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 5, colour: util.convertToRgb(ayrMaroon)}
               ],
               [
                  {rows: 3, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 6, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 3, colour: util.convertToRgb(ayrMaroon)}
               ],
               [
                  {rows: 2, colour: util.convertToRgb(ayrYellow)},
                  {rows: 9, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 2, colour: util.convertToRgb(ayrYellow)}
               ],
               [
                  {rows: 6, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 1, colour: util.convertToRgb(ayrYellow)},
                  {rows: 6, colour: util.convertToRgb(ayrMaroon)}
               ],
               [
                  {rows: 3, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 1},
                  {rows: 6, colour: util.convertToRgb(ayrMaroon)},
                  {rows: 1},
                  {rows: 3, colour: util.convertToRgb(ayrMaroon)}
               ]
            ],
            textColour: util.convertToRgb(ayrYellow),
            backgroundColour: util.convertToRgb(ayrMaroon)
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
               {rows: 4, colour: util.convertToRgb(lnkGold)},
               {rows: 5, colour: util.convertToRgb(lnkBrown)},
               {rows: 4, colour: util.convertToRgb(lnkGold)}
            ],
            textColour: util.convertToRgb(lnkBrown),
            backgroundColour: util.convertToRgb(lnkGold),
            borderColour: util.convertToRgb(lnkBrown)
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
               {rows: 4, colour: util.convertToRgb(rnfMaroon)},
               {rows: 1, colour: util.convertToRgb(rnfGold)},
               {rows: 4, colour: util.convertToRgb(rnfBlue)},
               {rows: 1, colour: util.convertToRgb(rnfGold)},
               {rows: 4, colour: util.convertToRgb(rnfMaroon)}
            ],
            textColour: util.convertToRgb(rnfGold),
            backgroundColour: util.convertToRgb(rnfMaroon),
            borderColour: util.convertToRgb(rnfBlue)
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
               {rows: 5, colour: util.convertToRgb(dunRed)},
               {rows: 1},
               {rows: 1, colour: util.convertToRgb(dunGreen)},
               {rows: 1},
               {rows: 5, colour: util.convertToRgb(dunRed)}
            ],
            alternateColours: [
               [
                  {rows: 5, colour: util.convertToRgb(dunRed)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(dunGreen)},
                  {rows: 5, colour: util.convertToRgb(dunRed)}
               ],
               [
                  {rows: 6, colour: util.convertToRgb(dunRed)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(dunGreen)},
                  {rows: 6, colour: util.convertToRgb(dunRed)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(dunRed)},
                  {rows: 1, colour: util.convertToRgb(dunGreen)},
                  {rows: 2},
                  {rows: 1, colour: util.convertToRgb(dunGreen)},
                  {rows: 5, colour: util.convertToRgb(dunRed)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(dunRed)},
                  {rows: 2, colour: util.convertToRgb([210, 165, 0])},
                  {rows: 2, colour: util.convertToRgb(dunGreen)},
                  {rows: 5, colour: util.convertToRgb(dunRed)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(dunRed)},
                  {rows: 2, colour: util.convertToRgb([225, 195, 0])},
                  {rows: 2, colour: util.convertToRgb(dunGreen)},
                  {rows: 5, colour: util.convertToRgb(dunRed)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(dunRed)},
                  {rows: 1},
                  {rows: 2, colour: util.convertToRgb(dunGreen)},
                  {rows: 1},
                  {rows: 5, colour: util.convertToRgb(dunRed)}
               ],
               [
                  {rows: 1, colour: util.convertToRgb(dunGreen)},
                  {rows: 1},
                  {rows: 4, colour: util.convertToRgb(dunRed)},
                  {rows: 2},
                  {rows: 4, colour: util.convertToRgb(dunRed)},
                  {rows: 1},
                  {rows: 1, colour: util.convertToRgb(dunGreen)}
               ],
               [
                  {rows: 1, colour: util.convertToRgb(dunGreen)},
                  {rows: 5, colour: util.convertToRgb(dunRed)},
                  {rows: 2},
                  {rows: 5, colour: util.convertToRgb(dunRed)},
                  {rows: 1, colour: util.convertToRgb(dunGreen)}
               ]
            ],
            backgroundColour: util.convertToRgb(dunRed),
            borderColour: util.convertToRgb(dunGreen)
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
               {rows: 3, colour: util.convertToRgb(dmfGold)},
               {rows: 2, colour: util.convertToRgb(dmfRed)},
               {rows: 4, colour: util.convertToRgb(dmfBlack)},
               {rows: 2, colour: util.convertToRgb(dmfRed)},
               {rows: 3, colour: util.convertToRgb(dmfGold)}
            ],
            textColour: util.convertToRgb(dmfBlack),
            backgroundColour: util.convertToRgb(dmfGold),
            borderColour: util.convertToRgb(dmfRed)
         },
         {
            countyName: 'West Lothian',
            countyCode: 'wln',
            chapmanCode: 'wln',
            hcsCode: 'wlt',
            classLevel: 9,
            country: 'Scotland',
            colours: [
               {rows: 5, colour: util.convertToRgb(wlnMaroon)},
               {rows: 4, colour: util.convertToRgb(wlnGold)},
               {rows: 5, colour: util.convertToRgb(wlnMaroon)}
            ],
            alternateColours: [
               [
                  {rows: 5, colour: util.convertToRgb(wlnMaroon)},
                  {rows: 1, colour: util.convertToRgb(wlnSilver)},
                  {rows: 2, colour: util.convertToRgb(wlnGold)},
                  {rows: 1, colour: util.convertToRgb(wlnSilver)},
                  {rows: 5, colour: util.convertToRgb(wlnMaroon)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(wlnMaroon)},
                  {rows: 1},
                  {rows: 2, colour: util.convertToRgb(wlnGold)},
                  {rows: 1},
                  {rows: 5, colour: util.convertToRgb(wlnMaroon)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(wlnMaroon)},
                  {rows: 1, colour: util.convertToRgb(wlnGold)},
                  {rows: 2},
                  {rows: 1, colour: util.convertToRgb(wlnGold)},
                  {rows: 5, colour: util.convertToRgb(wlnMaroon)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(wlnMaroon)},
                  {rows: 1, colour: util.convertToRgb(wlnGold)},
                  {rows: 2, colour: util.convertToRgb(wlnSilver)},
                  {rows: 1, colour: util.convertToRgb(wlnGold)},
                  {rows: 5, colour: util.convertToRgb(wlnMaroon)}
               ]
            ],
            textColour: util.convertToRgb(wlnSilver),
            backgroundColour: util.convertToRgb(wlnMaroon),
            borderColour: util.convertToRgb(wlnGold)
         },
         {
            countyName: 'Anglesey',
            countyCode: 'agy',
            chapmanCode: 'agy',
            hcsCode: 'agl',
            classLevel: 9,
            country: 'Wales',
            colours: [
               {rows: 6, colour: util.convertToRgb(agyRed)},
               {rows: 3, colour: util.convertToRgb(agyGold)},
               {rows: 6, colour: util.convertToRgb(agyRed)}
            ],
            alternateColours: [
               [
                  {rows: 6, colour: util.convertToRgb(agyRed)},
                  {rows: 2, colour: util.convertToRgb(agyGold)},
                  {rows: 6, colour: util.convertToRgb(agyRed)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(agyRed)},
                  {rows: 2, colour: util.convertToRgb(agyGold)},
                  {rows: 5, colour: util.convertToRgb(agyRed)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(agyRed)},
                  {rows: 3, colour: util.convertToRgb(agyGold)},
                  {rows: 5, colour: util.convertToRgb(agyRed)}
               ]
            ],
            textColour: util.convertToRgb(agyGold),
            backgroundColour: util.convertToRgb(agyRed)
         },
         {
            countyName: 'Merioneth',
            countyCode: 'mer',
            chapmanCode: 'mer',
            hcsCode: 'mrn',
            classLevel: 9,
            country: 'Wales',
            colours: [
               {rows: 4, colour: util.convertToRgb(merBlue)},
               {rows: 2},
               {rows: 2, colour: util.convertToRgb(merBlue)},
               {rows: 2, colour: util.convertToRgb(merGold)},
               {rows: 4, colour: util.convertToRgb(merBlue)}
            ],
            alternateColours: [
               [
                  {rows: 2, colour: util.convertToRgb(merGold)},
                  {rows: 4, colour: util.convertToRgb(merBlue)},
                  {rows: 2},
                  {rows: 4, colour: util.convertToRgb(merBlue)},
                  {rows: 2, colour: util.convertToRgb(merGold)}
               ],
               [
                  {rows: 5, colour: util.convertToRgb(merBlue)},
                  {rows: 2},
                  {rows: 2, colour: util.convertToRgb(merGold)},
                  {rows: 5, colour: util.convertToRgb(merBlue)}
               ]
            ],
            backgroundColour: util.convertToRgb(merBlue),
            borderColour: util.convertToRgb(merGold)
         },
         {
            countyName: 'Midlothian',
            countyCode: 'mln',
            chapmanCode: 'mln',
            hcsCode: 'mlt',
            classLevel: 9,
            country: 'Scotland',
            colours: [
               {rows: 5, colour: util.convertToRgb(mlnBlue)},
               {rows: 4},
               {rows: 5, colour: util.convertToRgb(mlnBlue)}
            ],
            textColour: util.convertToRgb(mlnBlue),
            borderColour: util.convertToRgb(mlnBlue)
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
      createCountyElement: function (county, elementType = 'div') {
         const newElement = document.createElement(elementType);
         newElement.textContent = county.countyName;
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
