/*jslint browser */

const counties = (function () {

   const util = Object.freeze({
      creamColour: 'rgb(255, 245, 225)',
      createInfo: function () {
         return [
            {
               countyName: 'Sussex',
               countyCode: 'sus',
               chapmanCode: 'ssx',
               hcsCode: 'sus',
               classLevel: 1,
               country: 'England',
               colours: [
                  {rows: 2, colour: 'rgb(0, 30, 90)'},
                  {rows: 1},
                  {rows: 2, colour: 'rgb(255, 180, 15)'},
                  {rows: 2, colour: 'rgb(60, 150, 210)'},
                  {rows: 1},
                  {rows: 2, colour: 'rgb(0, 30, 90)'}
               ],
               alternateColours: [
                  [
                     {rows: 1, colour: 'rgb(0, 30, 90)'},
                     {rows: 1},
                     {rows: 3, colour: 'rgb(255, 180, 15)'},
                     {rows: 3, colour: 'rgb(60, 150, 210)'},
                     {rows: 1},
                     {rows: 1, colour: 'rgb(0, 30, 90)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(0, 30, 90)'},
                     {rows: 3, colour: 'rgb(255, 180, 15)'},
                     {rows: 3, colour: 'rgb(60, 150, 210)'},
                     {rows: 2, colour: 'rgb(0, 30, 90)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(0, 30, 90)'},
                     {rows: 2, colour: 'rgb(60, 150, 210)'},
                     {rows: 2, colour: 'rgb(255, 180, 15)'},
                     {rows: 2, colour: 'rgb(60, 150, 210)'},
                     {rows: 2, colour: 'rgb(0, 30, 90)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(0, 30, 90)'},
                     {rows: 1, colour: 'rgb(255, 180, 15)'},
                     {rows: 4, colour: 'rgb(60, 150, 210)'},
                     {rows: 1, colour: 'rgb(255, 180, 15)'},
                     {rows: 2, colour: 'rgb(0, 30, 90)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(0, 30, 90)'},
                     {rows: 1},
                     {rows: 1, colour: 'rgb(255, 180, 15)'},
                     {rows: 2, colour: 'rgb(60, 150, 210)'},
                     {rows: 1, colour: 'rgb(255, 180, 15)'},
                     {rows: 1},
                     {rows: 2, colour: 'rgb(0, 30, 90)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(60, 150, 210)'},
                     {rows: 1, colour: 'rgb(255, 180, 15)'},
                     {rows: 4, colour: 'rgb(0, 30, 90)'},
                     {rows: 1, colour: 'rgb(255, 180, 15)'},
                     {rows: 2, colour: 'rgb(60, 150, 210)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(60, 150, 210)'},
                     {rows: 1},
                     {rows: 2, colour: 'rgb(255, 180, 15)'},
                     {rows: 2, colour: 'rgb(0, 30, 90)'},
                     {rows: 1},
                     {rows: 2, colour: 'rgb(60, 150, 210)'}
                  ]
               ],
               textColour: 'rgb(255, 180, 15)',
               backgroundColour: 'rgb(0, 30, 90)',
               borderColour: 'rgb(60, 150, 210)'
            }, {
               countyName: 'Kent',
               countyCode: 'ken',
               chapmanCode: 'ken',
               hcsCode: 'knt',
               classLevel: 1,
               country: 'England',
               colours: [
                  {rows: 2, colour: 'rgb(0, 30, 75)'},
                  {rows: 1},
                  {rows: 4, colour: 'rgb(150, 0, 30)'},
                  {rows: 1},
                  {rows: 2, colour: 'rgb(0, 30, 75)'}
               ],
               alternateColours: [
                  [
                     {rows: 6, colour: 'rgb(0, 30, 75)'},
                     {rows: 3},
                     {rows: 6, colour: 'rgb(0, 30, 75)'}
                  ],
                  [
                     {rows: 6, colour: 'rgb(0, 30, 75)'},
                     {rows: 3},
                     {rows: 6, colour: 'rgb(150, 0, 30)'}
                  ],
                  [
                     {rows: 4, colour: 'rgb(0, 30, 75)'},
                     {rows: 2},
                     {rows: 4, colour: 'rgb(150, 0, 30)'}
                  ],
                  [
                     {rows: 1, colour: 'rgb(0, 30, 75)'},
                     {rows: 1},
                     {rows: 4, colour: 'rgb(150, 0, 30)'},
                     {rows: 3},
                     {rows: 4, colour: 'rgb(150, 0, 30)'},
                     {rows: 1},
                     {rows: 1, colour: 'rgb(0, 30, 75)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(0, 30, 75)'},
                     {rows: 1},
                     {rows: 3, colour: 'rgb(150, 0, 30)'},
                     {rows: 3},
                     {rows: 3, colour: 'rgb(150, 0, 30)'},
                     {rows: 1},
                     {rows: 2, colour: 'rgb(0, 30, 75)'}
                  ],
                  [
                     {rows: 1, colour: 'rgb(0, 30, 75)'},
                     {rows: 1},
                     {rows: 2, colour: 'rgb(150, 0, 30)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(150, 0, 30)'},
                     {rows: 1},
                     {rows: 1, colour: 'rgb(0, 30, 75)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(150, 0, 30)'},
                     {rows: 1},
                     {rows: 4, colour: 'rgb(0, 30, 75)'},
                     {rows: 1},
                     {rows: 2, colour: 'rgb(150, 0, 30)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(0, 30, 75)'},
                     {rows: 1},
                     {rows: 2, colour: 'rgb(150, 0, 30)'},
                     {rows: 1},
                     {rows: 3, colour: 'rgb(0, 30, 75)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(0, 30, 75)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(150, 0, 30)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(0, 30, 75)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(0, 30, 75)'},
                     {rows: 2},
                     {rows: 4, colour: 'rgb(150, 0, 30)'},
                     {rows: 2, colour: 'rgb(0, 30, 75)'}
                  ]
               ],
               backgroundColour: 'rgb(150, 0, 30)',
               borderColour: 'rgb(0, 30, 75)'
            }, {
               countyName: 'Surrey',
               countyCode: 'sur',
               chapmanCode: 'sry',
               hcsCode: 'sur',
               classLevel: 1,
               country: 'England',
               colours: [
                  {rows: 6, colour: 'rgb(90, 45, 15)'},
                  {rows: 2},
                  {rows: 6, colour: 'rgb(90, 45, 15)'}
               ],
               backgroundColour: 'rgb(90, 45, 15)'
            }, {
               countyName: 'Nottinghamshire',
               countyAbbreviation: 'Notts',
               countyCode: 'not',
               chapmanCode: 'ntt',
               hcsCode: 'not',
               classLevel: 1,
               country: 'England',
               colours: [
                  {rows: 4, colour: 'rgb(0, 60, 0)'},
                  {rows: 4, colour: 'rgb(255, 225, 0)'},
                  {rows: 4, colour: 'rgb(0, 60, 0)'}
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(0, 60, 0)',
               borderColour: 'rgb(255, 225, 0)'
            }, {
               countyName: 'Yorkshire',
               countyAbbreviation: 'Yorks',
               countyCode: 'yrk',
               chapmanCode: 'yks',
               hcsCode: 'yrk',
               classLevel: 1,
               country: 'England',
               colours: [
                  {rows: 5, colour: 'rgb(135, 165, 195)'},
                  {rows: 3, colour: 'rgb(240, 225, 90)'},
                  {rows: 5, colour: 'rgb(30, 30, 60)'}
               ],
               textColour: 'rgb(240, 225, 90)',
               backgroundColour: 'rgb(30, 30, 60)',
               borderColour: 'rgb(135, 165, 195)'
            }, {
               countyName: 'Middlesex',
               countyAbbreviation: 'Middx',
               countyCode: 'mdx',
               chapmanCode: 'mdx',
               hcsCode: 'msx',
               classLevel: 1,
               country: 'England',
               colours: [
                  {rows: 6, colour: 'rgb(0, 0, 60)'},
                  {rows: 2},
                  {rows: 6, colour: 'rgb(0, 0, 60)'}
               ],
               backgroundColour: 'rgb(0, 0, 60)'
            }, {
               countyName: 'Lancashire',
               countyAbbreviation: 'Lancs',
               countyCode: 'lan',
               chapmanCode: 'lan',
               hcsCode: 'lcs',
               classLevel: 1,
               country: 'England',
               colours: [
                  {rows: 5, colour: 'rgb(0, 30, 60)'},
                  {rows: 2, colour: 'rgb(225, 0, 30)'},
                  {rows: 2, colour: 'rgb(0, 90, 30)'},
                  {rows: 5, colour: 'rgb(0, 30, 60)'}
               ],
               textColour: 'rgb(225, 0, 30)',
               backgroundColour: 'rgb(0, 30, 60)',
               borderColour: 'rgb(0, 90, 30)'
            }, {
               countyName: 'Gloucestershire',
               countyAbbreviation: 'Glos',
               countyCode: 'gls',
               chapmanCode: 'gls',
               hcsCode: 'glc',
               classLevel: 1,
               country: 'England',
               colours: [
                  {rows: 4, colour: 'rgb(0, 0, 75)'},
                  {rows: 1, colour: 'rgb(240, 210, 150)'},
                  {rows: 1, colour: 'rgb(120, 45, 15)'},
                  {rows: 2},
                  {rows: 1, colour: 'rgb(30, 180, 60)'},
                  {rows: 1, colour: 'rgb(225, 30, 60)'},
                  {rows: 4, colour: 'rgb(0, 0, 75)'}
               ],
               textColour: 'rgb(240, 210, 150)',
               backgroundColour: 'rgb(0, 0, 75)',
               borderColour: 'rgb(120, 45, 15)'
            }, {
               countyName: 'Derbyshire',
               countyAbbreviation: 'Derbys',
               countyCode: 'drb',
               chapmanCode: 'dby',
               hcsCode: 'drb',
               classLevel: 2,
               country: 'England',
               colours: [
                  {rows: 1, colour: 'rgb(255, 225, 0)'},
                  {rows: 6, colour: 'rgb(180, 225, 240)'},
                  {rows: 1, colour: 'rgb(255, 225, 0)'},
                  {rows: 6, colour: 'rgb(75, 30, 15)'},
                  {rows: 1, colour: 'rgb(255, 225, 0)'}
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(75, 30, 15)',
               borderColour: 'rgb(180, 225, 240)'
            }, {
               countyName: 'Hampshire',
               countyAbbreviation: 'Hants',
               countyCode: 'ham',
               chapmanCode: 'ham',
               hcsCode: 'hmp',
               classLevel: 2,
               country: 'England',
               colours: [
                  {rows: 4, colour: 'rgb(0, 0, 60)'},
                  {rows: 2, colour: 'rgb(255, 225, 0)'},
                  {rows: 3},
                  {rows: 2, colour: 'rgb(255, 225, 0)'},
                  {rows: 4, colour: 'rgb(0, 0, 60)'}
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(0, 0, 60)',
               borderColour: 'rgb(255, 225, 0)'
            }, {
               countyName: 'Somerset',
               countyCode: 'som',
               chapmanCode: 'som',
               hcsCode: 'sms',
               classLevel: 2,
               country: 'England',
               colours: [
                  {rows: 4, colour: 'rgb(105, 0, 30)'},
                  {rows: 2, colour: 'rgb(195, 195, 195)'},
                  {rows: 2, colour: 'rgb(0, 0, 0)'},
                  {rows: 2, colour: 'rgb(195, 195, 195)'},
                  {rows: 4, colour: 'rgb(105, 0, 30)'}
               ],
               textColour: 'rgb(195, 195, 195)',
               backgroundColour: 'rgb(105, 0, 30)',
               borderColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Essex',
               countyCode: 'ess',
               chapmanCode: 'ess',
               hcsCode: 'ese',
               classLevel: 2,
               country: 'England',
               colours: [
                  {rows: 2, colour: 'rgb(0, 0, 90)'},
                  {rows: 2, colour: 'rgb(255, 225, 0)'},
                  {rows: 4, colour: 'rgb(195, 0, 0)'},
                  {rows: 2, colour: 'rgb(0, 0, 90)'}
               ],
               alternateColours: [
                  [
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'},
                     {rows: 4, colour: 'rgb(195, 0, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(195, 0, 0)'},
                     {rows: 1, colour: 'rgb(0, 0, 90)'},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 1, colour: 'rgb(0, 0, 90)'},
                     {rows: 3, colour: 'rgb(195, 0, 0)'}
                  ],
                  [
                     {rows: 1, colour: 'rgb(0, 0, 90)'},
                     {rows: 3, colour: 'rgb(195, 0, 0)'},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 3, colour: 'rgb(195, 0, 0)'},
                     {rows: 1, colour: 'rgb(0, 0, 90)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(0, 0, 90)'},
                     {rows: 2, colour: 'rgb(195, 0, 0)'},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 2, colour: 'rgb(195, 0, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'}
                  ],
                  [
                     {rows: 1, colour: 'rgb(0, 0, 90)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 6, colour: 'rgb(195, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 1, colour: 'rgb(0, 0, 90)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(0, 0, 90)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 4, colour: 'rgb(195, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(195, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 4, colour: 'rgb(0, 0, 90)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 2, colour: 'rgb(195, 0, 0)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(195, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 3, colour: 'rgb(195, 0, 0)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(0, 0, 90)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 2, colour: 'rgb(195, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 3, colour: 'rgb(0, 0, 90)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(0, 0, 90)'},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 5, colour: 'rgb(195, 0, 0)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(195, 0, 0)'},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'},
                     {rows: 3, colour: 'rgb(195, 0, 0)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(195, 0, 0)'},
                     {rows: 3, colour: 'rgb(255, 225, 0)'},
                     {rows: 3, colour: 'rgb(0, 0, 90)'},
                     {rows: 2, colour: 'rgb(195, 0, 0)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(0, 0, 90)'},
                     {rows: 3, colour: 'rgb(255, 225, 0)'},
                     {rows: 3, colour: 'rgb(195, 0, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'}
                  ],
                  [
                     {rows: 1, colour: 'rgb(0, 0, 90)'},
                     {rows: 4, colour: 'rgb(255, 225, 0)'},
                     {rows: 4, colour: 'rgb(195, 0, 0)'},
                     {rows: 1, colour: 'rgb(0, 0, 90)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 6, colour: 'rgb(195, 0, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(255, 225, 0)'},
                     {rows: 4, colour: 'rgb(195, 0, 0)'},
                     {rows: 3, colour: 'rgb(0, 0, 90)'}
                  ],
                  [
                     {rows: 1, colour: 'rgb(0, 0, 90)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 1, colour: 'rgb(195, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'},
                     {rows: 3, colour: 'rgb(195, 0, 0)'},
                     {rows: 1, colour: 'rgb(0, 0, 90)'}
                  ]
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(195, 0, 0)',
               borderColour: 'rgb(0, 0, 90)'
            }, {
               countyName: 'Leicestershire',
               countyAbbreviation: 'Leics',
               countyCode: 'lei',
               chapmanCode: 'lei',
               hcsCode: 'lcr',
               classLevel: 2,
               country: 'England',
               colours: [
                  {rows: 2, colour: 'rgb(210, 0, 0)'},
                  {rows: 2},
                  {rows: 5, colour: 'rgb(0, 60, 0)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(210, 0, 0)'}
               ],
               backgroundColour: 'rgb(0, 60, 0)',
               borderColour: 'rgb(210, 0, 0)'
            }, {
               countyName: 'Warwickshire',
               countyAbbreviation: 'Warks',
               countyCode: 'war',
               chapmanCode: 'war',
               hcsCode: 'wrw',
               classLevel: 2,
               country: 'England',
               colours: [
                  {rows: 4, colour: 'rgb(30, 30, 60)'},
                  {rows: 1, colour: 'rgb(255, 225, 60)'},
                  {rows: 2, colour: 'rgb(240, 240, 240)'},
                  {rows: 1, colour: 'rgb(255, 225, 60)'},
                  {rows: 4, colour: 'rgb(30, 30, 60)'}
               ],
               textColour: 'rgb(240, 240, 240)',
               backgroundColour: 'rgb(30, 30, 60)',
               borderColour: 'rgb(255, 225, 60)'
            }, {
               countyName: 'Staffordshire',
               countyAbbreviation: 'Staffs',
               countyCode: 'stf',
               chapmanCode: 'sts',
               hcsCode: 'stf',
               classLevel: 2,
               country: 'England',
               colours: [
                  {rows: 5, colour: 'rgb(0, 90, 45)'},
                  {rows: 4, colour: 'rgb(255, 210, 75)'},
                  {rows: 5, colour: 'rgb(0, 90, 45)'}
               ],
               textColour: 'rgb(255, 210, 75)',
               backgroundColour: 'rgb(0, 90, 45)',
               borderColour: 'rgb(255, 210, 75)'
            }, {
               countyName: 'Cheshire',
               countyAbbreviation: 'Ches',
               countyCode: 'che',
               chapmanCode: 'chs',
               hcsCode: 'che',
               classLevel: 2,
               country: 'England',
               colours: [
                  {rows: 6, colour: 'rgb(90, 0, 120)'},
                  {rows: 2},
                  {rows: 6, colour: 'rgb(0, 0, 0)'}
               ],
               backgroundColour: 'rgb(90, 0, 120)',
               borderColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Norfolk',
               countyCode: 'nfk',
               chapmanCode: 'nfk',
               hcsCode: 'nrf',
               classLevel: 3,
               country: 'England',
               colours: [
                  {rows: 5, colour: 'rgb(30, 30, 75)'},
                  {rows: 2, colour: 'rgb(195, 240, 255)'},
                  {rows: 5, colour: 'rgb(30, 30, 75)'}
               ],
               backgroundColour: 'rgb(0, 0, 75)',
               borderColour: 'rgb(195, 240, 255)'
            }, {
               countyName: 'Northamptonshire',
               countyAbbreviation: 'Northants',
               countyCode: 'nth',
               chapmanCode: 'nth',
               hcsCode: 'nhp',
               classLevel: 3,
               country: 'England',
               colours: [
                  {rows: 6, colour: 'rgb(90, 0, 30)'},
                  {rows: 3, colour: 'rgb(255, 225, 0)'},
                  {rows: 6, colour: 'rgb(90, 0, 30)'}
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(90, 0, 30)'
            }, {
               countyName: 'Glamorgan',
               countyCode: 'gla',
               chapmanCode: 'gla',
               hcsCode: 'glm',
               classLevel: 3,
               country: 'Wales',
               colours: [
                  {rows: 5, colour: 'rgb(0, 30, 60)'},
                  {rows: 2, colour: 'rgb(255, 240, 135)'},
                  {rows: 2, colour: 'rgb(0, 30, 60)'},
                  {rows: 2, colour: 'rgb(255, 240, 135)'},
                  {rows: 5, colour: 'rgb(0, 30, 60)'}
               ],
               textColour: 'rgb(255, 240, 135)',
               backgroundColour: 'rgb(0, 30, 60)',
               borderColour: 'rgb(75, 150, 60)'
            }, {
               countyName: 'Durham',
               countyCode: 'dur',
               chapmanCode: 'dur',
               hcsCode: 'drh',
               classLevel: 3,
               country: 'England',
               colours: [
                  {rows: 5, colour: 'rgb(0, 0, 90)'},
                  {rows: 3, colour: 'rgb(240, 210, 0)'},
                  {rows: 5, colour: 'rgb(105, 0, 30)'}
               ],
               textColour: 'rgb(240, 210, 0)',
               backgroundColour: 'rgb(0, 0, 90)',
               borderColour: 'rgb(105, 0, 30)'
            }, {
               countyName: 'Northumberland',
               countyAbbreviation: 'Northum',
               countyCode: 'nbl',
               chapmanCode: 'nbl',
               hcsCode: 'nhb',
               classLevel: 3,
               country: 'England',
               colours: [
                  {rows: 5, colour: 'rgb(210, 30, 30)'},
                  {rows: 5, colour: 'rgb(0, 60, 30)'},
                  {rows: 5, colour: 'rgb(225, 180, 0)'}
               ],
               textColour: 'rgb(210, 30, 30)',
               backgroundColour: 'rgb(0, 60, 30)',
               borderColour: 'rgb(225, 180, 0)'
            }, {
               countyName: 'Hertfordshire',
               countyAbbreviation: 'Herts',
               countyCode: 'hrt',
               chapmanCode: 'hrt',
               hcsCode: 'htf',
               classLevel: 3,
               country: 'England',
               colours: [
                  {rows: 6, colour: 'rgb(0, 75, 0)'},
                  {rows: 2, colour: 'rgb(255, 225, 120)'},
                  {rows: 6, colour: 'rgb(0, 0, 75)'}
               ],
               textColour: 'rgb(255, 225, 120)',
               backgroundColour: 'rgb(0, 75, 0)',
               borderColour: 'rgb(0, 0, 75)'
            }, {
               countyName: 'Devon',
               countyCode: 'dev',
               chapmanCode: 'dev',
               hcsCode: 'dvn',
               classLevel: 3,
               country: 'England',
               colours: [
                  {rows: 3, colour: 'rgb(0, 0, 45)'},
                  {rows: 2, colour: 'rgb(240, 210, 90)'},
                  {rows: 4, colour: 'rgb(0, 60, 195)'},
                  {rows: 2, colour: 'rgb(240, 210, 90)'},
                  {rows: 3, colour: 'rgb(0, 0, 45)'}
               ],
               textColour: 'rgb(240, 210, 90)',
               backgroundColour: 'rgb(0, 0, 45)',
               borderColour: 'rgb(0, 60, 195)'
            }, {
               countyName: 'Lincolnshire',
               countyAbbreviation: 'Lincs',
               countyCode: 'lin',
               chapmanCode: 'lin',
               hcsCode: 'lnc',
               classLevel: 3,
               country: 'England',
               colours: [
                  {rows: 6, colour: 'rgb(0, 60, 0)'},
                  {rows: 2, colour: 'rgb(255, 225, 0)'},
                  {rows: 6, colour: 'rgb(0, 60, 0)'}
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(0, 60, 0)'
            }, {
               countyName: 'Cambridgeshire',
               countyAbbreviation: 'Cambs',
               countyCode: 'cam',
               chapmanCode: 'cam',
               hcsCode: 'cmb',
               classLevel: 4,
               country: 'England',
               colours: [
                  {rows: 3, colour: 'rgb(105, 0, 15)'},
                  {rows: 4, colour: 'rgb(165, 225, 225)'},
                  {rows: 4, colour: 'rgb(255, 225, 160)'},
                  {rows: 3, colour: 'rgb(105, 0, 15)'}
               ],
               textColour: 'rgb(255, 225, 160)',
               backgroundColour: 'rgb(105, 0, 15)',
               borderColour: 'rgb(165, 225, 225)'
            }, {
               countyName: 'Worcestershire',
               countyAbbreviation: 'Worcs',
               countyCode: 'wor',
               chapmanCode: 'wor',
               hcsCode: 'wrc',
               classLevel: 4,
               country: 'England',
               colours: [
                  {rows: 5, colour: 'rgb(0, 60, 30)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(0, 0, 0)'},
                  {rows: 5, colour: 'rgb(0, 60, 30)'}
               ],
               backgroundColour: 'rgb(0, 60, 30)',
               borderColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Shropshire',
               countyAbbreviation: 'Salop',
               countyCode: 'sal',
               chapmanCode: 'sal',
               hcsCode: 'shp',
               classLevel: 4,
               country: 'England',
               colours: [
                  {rows: 7, colour: 'rgb(240, 195, 30)'},
                  {rows: 7, colour: 'rgb(0, 30, 120)'}
               ],
               textColour: 'rgb(240, 195, 30)',
               backgroundColour: 'rgb(0, 30, 120)',
               borderColour: 'rgb(240, 195, 30)'
            }, {
               countyName: 'Wiltshire',
               countyAbbreviation: 'Wilts',
               countyCode: 'wil',
               chapmanCode: 'wil',
               hcsCode: 'wts',
               classLevel: 4,
               country: 'England',
               colours: [
                  {rows: 6, colour: 'rgb(0, 60, 30)'},
                  {rows: 2},
                  {rows: 6, colour: 'rgb(0, 60, 30)'}
               ],
               backgroundColour: 'rgb(0, 60, 30)'
            }, {
               countyName: 'Cornwall',
               countyCode: 'cnw',
               chapmanCode: 'con',
               hcsCode: 'cnw',
               classLevel: 4,
               country: 'England',
               colours: [
                  {rows: 4, colour: 'rgb(0, 0, 0)'},
                  {rows: 1, colour: 'rgb(225, 0, 0)'},
                  {rows: 1, colour: 'rgb(255, 225, 0)'},
                  {rows: 4, colour: 'rgb(0, 0, 0)'}
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(0, 0, 0)',
               borderColour: 'rgb(225, 0, 0)'
            }, {
               countyName: 'Herefordshire',
               countyAbbreviation: 'Herefs',
               countyCode: 'hef',
               chapmanCode: 'hef',
               hcsCode: 'hrf',
               classLevel: 4,
               country: 'England',
               colours: [
                  {rows: 4, colour: 'rgb(150, 0, 0)'},
                  {rows: 1, colour: 'rgb(165, 195, 255)'},
                  {rows: 3, colour: 'rgb(0, 0, 90)'},
                  {rows: 1, colour: 'rgb(165, 195, 255)'},
                  {rows: 4, colour: 'rgb(150, 0, 0)'}
               ],
               alternateColours: [
                  [
                     {rows: 4, colour: 'rgb(165, 0, 0)'},
                     {rows: 1, colour: 'rgb(165, 195, 255)'},
                     {rows: 3, colour: 'rgb(0, 0, 90)'},
                     {rows: 1, colour: 'rgb(165, 195, 255)'},
                     {rows: 4, colour: 'rgb(165, 0, 0)'}
                  ],
                  [
                     {rows: 4, colour: 'rgb(150, 15, 30)'},
                     {rows: 1, colour: 'rgb(165, 195, 255)'},
                     {rows: 3, colour: 'rgb(0, 0, 90)'},
                     {rows: 1, colour: 'rgb(165, 195, 255)'},
                     {rows: 4, colour: 'rgb(150, 15, 30)'}
                  ]
               ],
               textColour: 'rgb(165, 195, 255)',
               backgroundColour: 'rgb(150, 0, 0)',
               borderColour: 'rgb(0, 0, 90)'
            }, {
               countyName: 'Monmouthshire',
               countyAbbreviation: 'Monmouths',
               countyCode: 'mnm',
               chapmanCode: 'mon',
               hcsCode: 'mnm',
               classLevel: 4,
               country: 'Wales',
               colours: [
                  {rows: 6, colour: 'rgb(0, 90, 195)'},
                  {rows: 2, colour: 'rgb(255, 225, 0)'},
                  {rows: 6, colour: 'rgb(0, 0, 0)'}
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(0, 90, 195)',
               borderColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Cumberland',
               countyAbbreviation: 'Cumb',
               countyCode: 'cum',
               chapmanCode: 'cul',
               hcsCode: 'cum',
               classLevel: 4,
               country: 'England',
               colours: [
                  {rows: 5, colour: 'rgb(165, 0, 30)'},
                  {rows: 4, colour: 'rgb(240, 225, 0)'},
                  {rows: 5, colour: 'rgb(0, 60, 30)'}
               ],
               textColour: 'rgb(240, 225, 0)',
               backgroundColour: 'rgb(0, 60, 30)',
               borderColour: 'rgb(165, 0, 30)'
            }, {
               countyName: 'Radnorshire',
               countyAbbreviation: 'Rads',
               countyCode: 'rad',
               chapmanCode: 'rad',
               hcsCode: 'rdn',
               classLevel: 5,
               country: 'Wales',
               colours: [
                  {rows: 2, colour: 'rgb(0, 0, 165)'},
                  {rows: 2, colour: 'rgb(225, 210, 30)'},
                  {rows: 2, colour: 'rgb(0, 0, 165)'},
                  {rows: 2, colour: 'rgb(225, 210, 30)'},
                  {rows: 2, colour: 'rgb(0, 0, 165)'},
                  {rows: 2, colour: 'rgb(225, 210, 30)'},
                  {rows: 2, colour: 'rgb(0, 0, 165)'}
               ],
               alternateColours: [
                  [
                     {rows: 4, colour: 'rgb(225, 30, 0)'},
                     {rows: 2, colour: 'rgb(255, 210, 0)'},
                     {rows: 2, colour: 'rgb(30, 45, 240)'},
                     {rows: 2, colour: 'rgb(255, 210, 0)'},
                     {rows: 4, colour: 'rgb(225, 30, 0)'}
                  ]
               ],
               textColour: 'rgb(225, 210, 30)',
               backgroundColour: 'rgb(0, 0, 165)',
               borderColour: 'rgb(225, 210, 30)'
            }, {
               countyName: 'Westmorland',
               countyAbbreviation: 'Westm',
               countyCode: 'wml',
               chapmanCode: 'wes',
               hcsCode: 'wml',
               classLevel: 5,
               country: 'England',
               colours: [
                  {rows: 1, colour: 'rgb(240, 210, 0)'},
                  {rows: 5, colour: 'rgb(195, 0, 30)'},
                  {rows: 3},
                  {rows: 5, colour: 'rgb(195, 0, 30)'},
                  {rows: 1, colour: 'rgb(240, 210, 0)'}
               ],
               alternateColours: [
                  [
                     {rows: 4, colour: 'rgb(195, 0, 30)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(240, 210, 0)'},
                     {rows: 2},
                     {rows: 4, colour: 'rgb(195, 0, 30)'}
                  ],
                  [
                     {rows: 5, colour: 'rgb(195, 0, 30)'},
                     {rows: 1, colour: 'rgb(240, 210, 0)'},
                     {rows: 3},
                     {rows: 1, colour: 'rgb(240, 210, 0)'},
                     {rows: 5, colour: 'rgb(195, 0, 30)'}
                  ]
               ],
               backgroundColour: 'rgb(195, 0, 30)',
               borderColour: 'rgb(240, 210, 0)'
            }, {
               countyName: 'Dorset',
               countyCode: 'dor',
               chapmanCode: 'dor',
               hcsCode: 'drs',
               classLevel: 5,
               country: 'England',
               colours: [
                  {rows: 2, colour: 'rgb(0, 90, 30)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(0, 90, 30)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(0, 90, 30)'}
               ],
               textColour: 'rgb(0, 90, 30)',
               borderColour: 'rgb(0, 90, 30)'
            }, {
               countyName: 'Brecknockshire',
               countyAbbreviation: 'Brecons',
               countyCode: 'bre',
               chapmanCode: 'bre',
               hcsCode: 'brn',
               classLevel: 5,
               country: 'Wales',
               colours: [
                  {rows: 2, colour: 'rgb(0, 0, 0)'},
                  {rows: 1, colour: 'rgb(255, 210, 15)'},
                  {rows: 1, colour: 'rgb(0, 0, 0)'},
                  {rows: 2, colour: 'rgb(255, 210, 15)'},
                  {rows: 2, colour: 'rgb(15, 90, 150)'},
                  {rows: 2, colour: 'rgb(255, 210, 15)'},
                  {rows: 1, colour: 'rgb(0, 0, 0)'},
                  {rows: 1, colour: 'rgb(255, 210, 15)'},
                  {rows: 2, colour: 'rgb(0, 0, 0)'}
               ],
               textColour: 'rgb(15, 90, 150)',
               backgroundColour: 'rgb(255, 210, 15)',
               borderColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Rutland',
               countyCode: 'rut',
               chapmanCode: 'rut',
               hcsCode: 'rtl',
               classLevel: 5,
               country: 'England',
               colours: [
                  {rows: 4, colour: 'rgb(0, 150, 90)'},
                  {rows: 2, colour: 'rgb(255, 210, 30)'},
                  {rows: 2, colour: 'rgb(0, 150, 90)'},
                  {rows: 2, colour: 'rgb(255, 210, 30)'},
                  {rows: 4, colour: 'rgb(0, 150, 90)'}
               ],
               textColour: 'rgb(255, 210, 30)',
               backgroundColour: 'rgb(0, 150, 90)'
            }, {
               countyName: 'Suffolk',
               countyCode: 'sfk',
               chapmanCode: 'sfk',
               hcsCode: 'sff',
               classLevel: 5,
               country: 'England',
               colours: [
                  {rows: 2, colour: 'rgb(120, 0, 0)'},
                  {rows: 1, colour: 'rgb(255, 225, 0)'},
                  {rows: 4, colour: 'rgb(120, 0, 0)'},
                  {rows: 1, colour: 'rgb(255, 225, 0)'},
                  {rows: 2, colour: 'rgb(120, 0, 0)'}
               ],
               backgroundColour: 'rgb(120, 0, 0)',
               borderColour: 'rgb(255, 225, 0)'
            }, {
               countyName: 'Aberdeenshire',
               countyAbbreviation: 'Aberds',
               countyCode: 'abd',
               chapmanCode: 'abd',
               hcsCode: 'abn',
               classLevel: 5,
               country: 'Scotland',
               colours: [
                  {rows: 6, colour: 'rgb(105, 150, 225)'},
                  {rows: 1, colour: 'rgb(255, 240, 150)'},
                  {rows: 6, colour: 'rgb(0, 0, 60)'}
               ],
               alternateColours: [
                  [
                     {rows: 6, colour: 'rgb(255, 150, 0)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(90, 30, 90)'}
                  ]
               ],
               textColour: 'rgb(255, 240, 150)',
               backgroundColour: 'rgb(105, 150, 225)',
               borderColour: 'rgb(0, 0, 60)'
            }, {
               countyName: 'Angus',
               countyCode: 'ans',
               chapmanCode: 'ans',
               hcsCode: 'ang',
               classLevel: 5,
               country: 'Scotland',
               colours: [
                  {rows: 5, colour: 'rgb(15, 45, 105)'},
                  {rows: 1},
                  {rows: 1, colour: 'rgb(210, 0, 0)'},
                  {rows: 1},
                  {rows: 5, colour: 'rgb(15, 45, 105)'}
               ],
               backgroundColour: 'rgb(15, 45, 105)',
               borderColour: 'rgb(210, 0, 0)'
            }, {
               countyName: 'Bedfordshire',
               countyAbbreviation: 'Beds',
               countyCode: 'bed',
               chapmanCode: 'bdf',
               hcsCode: 'bed',
               classLevel: 6,
               country: 'England',
               colours: [
                  {rows: 3, colour: 'rgb(75, 0, 165)'},
                  {rows: 4, colour: 'rgb(0, 0, 0)'},
                  {rows: 1, colour: 'rgb(195, 195, 195)'},
                  {rows: 4, colour: 'rgb(0, 0, 0)'},
                  {rows: 3, colour: 'rgb(75, 0, 165)'}
               ],
               textColour: 'rgb(195, 195, 195)',
               backgroundColour: 'rgb(0, 0, 0)',
               borderColour: 'rgb(75, 0, 165)'
            }, {
               countyName: 'Huntingdonshire',
               countyAbbreviation: 'Hunts',
               countyCode: 'hun',
               chapmanCode: 'hun',
               hcsCode: 'hnt',
               classLevel: 6,
               country: 'England',
               colours: [
                  {rows: 5, colour: 'rgb(30, 30, 60)'},
                  {rows: 4, colour: 'rgb(255, 210, 0)'},
                  {rows: 5, colour: 'rgb(30, 30, 60)'}
               ],
               textColour: 'rgb(255, 210, 0)',
               backgroundColour: 'rgb(30, 30, 60)'
            }, {
               countyName: 'Caernarfonshire',
               countyAbbreviation: 'Caerns',
               countyCode: 'cae',
               chapmanCode: 'cae',
               hcsCode: 'crn',
               classLevel: 6,
               country: 'Wales',
               colours: [
                  {rows: 5, colour: 'rgb(0, 0, 0)'},
                  {rows: 3, colour: 'rgb(255, 210, 0)'},
                  {rows: 5, colour: 'rgb(0, 180, 60)'}
               ],
               alternateColours: [
                  [
                     {rows: 2, colour: 'rgb(0, 180, 60)'},
                     {rows: 1, colour: 'rgb(255, 210, 0)'},
                     {rows: 3, colour: 'rgb(0, 180, 60)'},
                     {rows: 1, colour: 'rgb(255, 210, 0)'},
                     {rows: 3, colour: 'rgb(0, 180, 60)'},
                     {rows: 1, colour: 'rgb(255, 210, 0)'},
                     {rows: 2, colour: 'rgb(0, 180, 60)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(0, 180, 60)'},
                     {rows: 1, colour: 'rgb(255, 210, 0)'},
                     {rows: 2, colour: 'rgb(0, 180, 60)'},
                     {rows: 1, colour: 'rgb(255, 210, 0)'},
                     {rows: 2, colour: 'rgb(0, 180, 60)'},
                     {rows: 1, colour: 'rgb(255, 210, 0)'},
                     {rows: 3, colour: 'rgb(0, 180, 60)'}
                  ]
               ],
               textColour: 'rgb(255, 210, 0)',
               backgroundColour: 'rgb(0, 180, 60)',
               borderColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Roxburghshire',
               countyAbbreviation: 'Roxbs',
               countyCode: 'rox',
               chapmanCode: 'rox',
               hcsCode: 'rxb',
               classLevel: 6,
               country: 'Scotland',
               colours: [
                  {rows: 2, colour: 'rgb(0, 0, 0)'},
                  {rows: 2},
                  {rows: 6, colour: 'rgb(30, 30, 180)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(0, 0, 0)'}
               ],
               backgroundColour: 'rgb(30, 30, 180)',
               borderColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Montgomeryshire',
               countyAbbreviation: 'Monts',
               countyCode: 'mtg',
               chapmanCode: 'mgy',
               hcsCode: 'mtg',
               classLevel: 6,
               country: 'Wales',
               colours: [
                  {rows: 4, colour: 'rgb(0, 0, 0)'},
                  {rows: 2, colour: 'rgb(240, 240, 45)'},
                  {rows: 2, colour: 'rgb(135, 0, 0)'},
                  {rows: 2, colour: 'rgb(240, 240, 45)'},
                  {rows: 4, colour: 'rgb(0, 0, 0)'}
               ],
               alternateColours: [
                  [
                     {rows: 1, colour: 'rgb(0, 0, 0)'},
                     {rows: 3, colour: 'rgb(240, 240, 45)'},
                     {rows: 2, colour: 'rgb(135, 0, 0)'},
                     {rows: 2, colour: 'rgb(45, 90, 240)'},
                     {rows: 2, colour: 'rgb(135, 0, 0)'},
                     {rows: 3, colour: 'rgb(240, 240, 45)'},
                     {rows: 1, colour: 'rgb(0, 0, 0)'}
                  ],
                  [
                     {rows: 4, colour: 'rgb(240, 240, 45)'},
                     {rows: 1, colour: 'rgb(0, 0, 0)'},
                     {rows: 4, colour: 'rgb(135, 0, 0)'},
                     {rows: 1, colour: 'rgb(0, 0, 0)'},
                     {rows: 4, colour: 'rgb(240, 240, 45)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(135, 0, 0)'},
                     {rows: 4, colour: 'rgb(240, 240, 45)'},
                     {rows: 2, colour: 'rgb(45, 90, 240)'},
                     {rows: 4, colour: 'rgb(240, 240, 45)'},
                     {rows: 2, colour: 'rgb(135, 0, 0)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(135, 0, 0)'},
                     {rows: 1, colour: 'rgb(240, 240, 45)'},
                     {rows: 3, colour: 'rgb(0, 0, 0)'},
                     {rows: 2},
                     {rows: 3, colour: 'rgb(0, 0, 0)'},
                     {rows: 1, colour: 'rgb(240, 240, 45)'},
                     {rows: 2, colour: 'rgb(135, 0, 0)'}
                  ],
                  [
                     {rows: 1, colour: 'rgb(0, 0, 0)'},
                     {rows: 1},
                     {rows: 3, colour: 'rgb(0, 0, 0)'},
                     {rows: 1, colour: 'rgb(240, 240, 45)'},
                     {rows: 2, colour: 'rgb(135, 0, 0)'},
                     {rows: 1, colour: 'rgb(240, 240, 45)'},
                     {rows: 3, colour: 'rgb(0, 0, 0)'},
                     {rows: 1},
                     {rows: 1, colour: 'rgb(0, 0, 0)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(0, 0, 0)'},
                     {rows: 1},
                     {rows: 2, colour: 'rgb(240, 240, 45)'},
                     {rows: 2, colour: 'rgb(135, 0, 0)'},
                     {rows: 2, colour: 'rgb(240, 240, 45)'},
                     {rows: 1},
                     {rows: 3, colour: 'rgb(0, 0, 0)'}
                  ],
                  [
                     {rows: 5, colour: 'rgb(240, 240, 45)'},
                     {rows: 2, colour: 'rgb(135, 0, 0)'},
                     {rows: 2},
                     {rows: 5, colour: 'rgb(0, 0, 0)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(240, 240, 45)'},
                     {rows: 2, colour: 'rgb(135, 0, 0)'},
                     {rows: 3, colour: 'rgb(240, 240, 45)'},
                     {rows: 3, colour: 'rgb(0, 0, 0)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(0, 0, 0)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(240, 240, 45)'},
                     {rows: 3, colour: 'rgb(135, 0, 0)'},
                     {rows: 2, colour: 'rgb(240, 240, 45)'},
                     {rows: 3, colour: 'rgb(0, 0, 0)'},
                     {rows: 3, colour: 'rgb(240, 240, 45)'}
                  ],
                  [
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 2},
                     {rows: 1, colour: 'rgb(0, 0, 0)'},
                     {rows: 2, colour: 'rgb(135, 0, 0)'},
                     {rows: 1, colour: 'rgb(0, 0, 0)'},
                     {rows: 2, colour: 'rgb(240, 240, 45)'},
                     {rows: 2, colour: 'rgb(0, 0, 0)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(0, 0, 0)'},
                     {rows: 3, colour: 'rgb(240, 240, 45)'},
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 3, colour: 'rgb(135, 0, 0)'},
                     {rows: 3, colour: 'rgb(0, 0, 0)'}
                  ]
               ],
               textColour: 'rgb(240, 240, 45)',
               backgroundColour: 'rgb(0, 0, 0)',
               borderColour: 'rgb(135, 0, 0)'
            }, {
               countyName: 'Oxfordshire',
               countyAbbreviation: 'Oxon',
               countyCode: 'oxf',
               chapmanCode: 'oxf',
               hcsCode: 'oxd',
               classLevel: 6,
               country: 'England',
               colours: [
                  {rows: 6, colour: 'rgb(120, 0, 60)'},
                  {rows: 2, colour: 'rgb(240, 225, 105)'},
                  {rows: 6, colour: 'rgb(0, 30, 75)'}
               ],
               textColour: 'rgb(240, 225, 0)',
               backgroundColour: 'rgb(120, 0, 60)',
               borderColour: 'rgb(0, 30, 75)'
            }, {
               countyName: 'Berkshire',
               countyAbbreviation: 'Berks',
               countyCode: 'brk',
               chapmanCode: 'brk',
               hcsCode: 'ber',
               classLevel: 6,
               country: 'England',
               colours: [
                  {rows: 2, colour: 'rgb(255, 255, 135)'},
                  {rows: 5, colour: 'rgb(30, 120, 60)'},
                  {rows: 2, colour: 'rgb(255, 255, 135)'},
                  {rows: 5, colour: 'rgb(45, 0, 90)'},
                  {rows: 2, colour: 'rgb(255, 255, 135)'}
               ],
               textColour: 'rgb(255, 255, 135)',
               backgroundColour: 'rgb(30, 120, 60)',
               borderColour: 'rgb(45, 0, 90)'
            }, {
               countyName: 'Stirlingshire',
               countyAbbreviation: 'Stirls',
               countyCode: 'sti',
               chapmanCode: 'sti',
               hcsCode: 'stl',
               classLevel: 6,
               country: 'Scotland',
               colours: [
                  {rows: 7, colour: 'rgb(165, 0, 45)'},
                  {rows: 7, colour: 'rgb(0, 0, 0)'}
               ],
               backgroundColour: 'rgb(165, 0, 45)',
               borderColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Banffshire',
               countyCode: 'ban',
               chapmanCode: 'ban',
               hcsCode: 'bnf',
               classLevel: 7,
               country: 'Scotland',
               colours: [
                  {rows: 6, colour: 'rgb(255, 150, 0)'},
                  {rows: 2},
                  {rows: 6, colour: 'rgb(0, 45, 165)'}
               ],
               backgroundColour: 'rgb(0, 45, 165)',
               borderColour: 'rgb(255, 150, 0)'
            }, {
               countyName: 'Kincardineshire',
               countyAbbreviation: 'Kincards',
               countyCode: 'kcd',
               chapmanCode: 'kcd',
               hcsCode: 'knc',
               classLevel: 7,
               country: 'Scotland',
               colours: [
                  {rows: 1, colour: 'rgb(0, 135, 30)'},
                  {rows: 1, colour: 'rgb(210, 0, 15)'},
                  {rows: 2, colour: 'rgb(255, 210, 45)'},
                  {rows: 2, colour: 'rgb(210, 0, 15)'},
                  {rows: 2, colour: 'rgb(255, 210, 45)'},
                  {rows: 2, colour: 'rgb(210, 0, 15)'},
                  {rows: 2, colour: 'rgb(255, 210, 45)'},
                  {rows: 1, colour: 'rgb(210, 0, 15)'},
                  {rows: 1, colour: 'rgb(0, 135, 30)'}
               ],
               alternateColours: [
                  [
                     {rows: 2, colour: 'rgb(0, 135, 30)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(0, 135, 30)'}
                  ], [
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(210, 0, 15)'}
                  ], [
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(0, 135, 30)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(0, 135, 30)'}
                  ], [
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(0, 135, 30)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(0, 135, 30)'}
                  ], [
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(0, 135, 30)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(210, 0, 15)'}
                  ], [
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(210, 0, 15)'},
                     {rows: 2, colour: 'rgb(255, 210, 45)'},
                     {rows: 2, colour: 'rgb(0, 135, 30)'}
                  ]
               ],
               textColour: 'rgb(255, 210, 45)',
               backgroundColour: 'rgb(210, 0, 15)',
               borderColour: 'rgb(0, 135, 30)'
            }, {
               countyName: 'Denbighshire',
               countyAbbreviation: 'Denbs',
               countyCode: 'den',
               chapmanCode: 'den',
               hcsCode: 'dbh',
               classLevel: 7,
               country: 'Wales',
               colours: [
                  {rows: 4, colour: 'rgb(210, 0, 30)'},
                  {rows: 3},
                  {rows: 3, colour: 'rgb(0, 0, 0)'},
                  {rows: 4, colour: 'rgb(210, 0, 30)'}
               ],
               alternateColours: [
                  [
                     {rows: 4, colour: 'rgb(0, 0, 0)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(210, 0, 30)'},
                     {rows: 2},
                     {rows: 4, colour: 'rgb(0, 0, 0)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(210, 0, 30)'},
                     {rows: 2},
                     {rows: 1, colour: 'rgb(210, 0, 30)'},
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 1, colour: 'rgb(210, 0, 30)'},
                     {rows: 2},
                     {rows: 3, colour: 'rgb(210, 0, 30)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(210, 0, 30)'},
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 1, colour: 'rgb(210, 0, 30)'},
                     {rows: 2},
                     {rows: 1, colour: 'rgb(210, 0, 30)'},
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 3, colour: 'rgb(210, 0, 30)'}
                  ],
                  [
                     {rows: 3, colour: 'rgb(210, 0, 30)'},
                     {rows: 3},
                     {rows: 2, colour: 'rgb(210, 0, 30)'},
                     {rows: 3, colour: 'rgb(0, 0, 0)'},
                     {rows: 3, colour: 'rgb(210, 0, 30)'}
                  ]
               ],
               backgroundColour: 'rgb(210, 0, 30)',
               borderColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Buckinghamshire',
               countyAbbreviation: 'Bucks',
               countyCode: 'buc',
               chapmanCode: 'bkm',
               hcsCode: 'buc',
               classLevel: 7,
               country: 'England',
               colours: [
                  {rows: 5, colour: 'rgb(0, 75, 30)'},
                  {rows: 1},
                  {rows: 3, colour: 'rgb(195, 195, 210)'},
                  {rows: 1},
                  {rows: 5, colour: 'rgb(0, 75, 30)'}
               ],
               backgroundColour: 'rgb(0, 75, 30)',
               borderColour: 'rgb(195, 195, 210)'
            }, {
               countyName: 'Cardiganshire',
               countyAbbreviation: 'Cards',
               countyCode: 'crd',
               chapmanCode: 'cgn',
               hcsCode: 'crd',
               classLevel: 7,
               country: 'Wales',
               colours: [
                  {rows: 6, colour: 'rgb(0, 0, 0)'},
                  {rows: 3, colour: 'rgb(255, 210, 0)'},
                  {rows: 6, colour: 'rgb(0, 0, 0)'}
               ],
               textColour: 'rgb(255, 210, 0)',
               backgroundColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Carmarthenshire',
               countyAbbreviation: 'Carms',
               countyCode: 'crm',
               chapmanCode: 'cmn',
               hcsCode: 'crm',
               classLevel: 7,
               country: 'Wales',
               colours: [
                  {rows: 3, colour: 'rgb(255, 225, 0)'},
                  {rows: 8, colour: 'rgb(195, 0, 30)'},
                  {rows: 3, colour: 'rgb(255, 225, 0)'}
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(195, 0, 30)',
               borderColour: 'rgb(255, 225, 0)'
            }, {
               countyName: 'Pembrokeshire',
               countyAbbreviation: 'Pembs',
               countyCode: 'pem',
               chapmanCode: 'pem',
               hcsCode: 'pmb',
               classLevel: 7,
               country: 'Wales',
               colours: [
                  {rows: 5, colour: 'rgb(0, 30, 90)'},
                  {rows: 4, colour: 'rgb(195, 225, 255)'},
                  {rows: 5, colour: 'rgb(0, 30, 90)'}
               ],
               textColour: 'rgb(195, 225, 255)',
               backgroundColour: 'rgb(0, 30, 90)',
               borderColour: 'rgb(195, 225, 255)'
            }, {
               countyName: 'Flintshire',
               countyAbbreviation: 'Flints',
               countyCode: 'fln',
               chapmanCode: 'fln',
               hcsCode: 'flt',
               classLevel: 7,
               country: 'Wales',
               colours: [
                  {rows: 1, colour: 'rgb(255, 45, 0)'},
                  {rows: 2, colour: 'rgb(0, 0, 0)'},
                  {rows: 2},
                  {rows: 4, colour: 'rgb(0, 0, 0)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(0, 0, 0)'},
                  {rows: 1, colour: 'rgb(255, 45, 0)'}
               ],
               alternateColours: [
                  [
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 45, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(0, 0, 0)'}
                  ]
               ],
               backgroundColour: 'rgb(0, 0, 0)',
               borderColour: 'rgb(255, 45, 0)'
            }, {
               countyName: 'Perthshire',
               countyAbbreviation: 'Perths',
               countyCode: 'per',
               chapmanCode: 'per',
               hcsCode: 'prt',
               classLevel: 8,
               country: 'Scotland',
               colours: [
                  {rows: 4, colour: 'rgb(0, 45, 15)'},
                  {rows: 5, colour: 'rgb(225, 195, 0)'},
                  {rows: 4, colour: 'rgb(0, 45, 15)'}
               ],
               textColour: 'rgb(225, 195, 0)',
               backgroundColour: 'rgb(0, 45, 15)',
               borderColour: 'rgb(225, 195, 0)'
            }, {
               countyName: 'Clackmannanshire',
               countyAbbreviation: 'Clacks',
               countyCode: 'clk',
               chapmanCode: 'clk',
               hcsCode: 'clm',
               classLevel: 8,
               country: 'Scotland',
               colours: [
                  {rows: 4, colour: 'rgb(0, 135, 15)'},
                  {rows: 1},
                  {rows: 3, colour: 'rgb(0, 0, 0)'},
                  {rows: 1},
                  {rows: 4, colour: 'rgb(0, 135, 15)'}
               ],
               backgroundColour: 'rgb(0, 135, 15)',
               borderColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Fife',
               countyCode: 'fif',
               chapmanCode: 'fif',
               hcsCode: 'ffe',
               classLevel: 8,
               country: 'Scotland',
               colours: [
                  {rows: 4, colour: 'rgb(0, 0, 150)'},
                  {rows: 1, colour: 'rgb(240, 210, 0)'},
                  {rows: 4, colour: 'rgb(135, 195, 255)'},
                  {rows: 1, colour: 'rgb(240, 210, 0)'},
                  {rows: 4, colour: 'rgb(0, 0, 150)'}
               ],
               alternateColours: [
                  [
                     {rows: 6, colour: 'rgb(240, 210, 0)'},
                     {rows: 2, colour: 'rgb(225, 45, 45)'},
                     {rows: 6, colour: 'rgb(0, 0, 180)'}
                  ]
               ],
               textColour: 'rgb(240, 210, 0)',
               backgroundColour: 'rgb(0, 0, 150)',
               borderColour: 'rgb(135, 195, 255)'
            }, {
               countyName: 'Ayrshire',
               countyAbbreviation: 'Ayrs',
               countyCode: 'ayr',
               chapmanCode: 'ayr',
               hcsCode: 'ays',
               classLevel: 8,
               country: 'Scotland',
               colours: [
                  {rows: 1, colour: 'rgb(255, 255, 75)'},
                  {rows: 3, colour: 'rgb(150, 0, 30)'},
                  {rows: 6, colour: 'rgb(90, 15, 0)'},
                  {rows: 3, colour: 'rgb(150, 0, 30)'},
                  {rows: 1, colour: 'rgb(255, 255, 75)'}
               ],
               alternateColours: [
                  [
                     {rows: 3, colour: 'rgb(150, 0, 30)'},
                     {rows: 1, colour: 'rgb(255, 255, 75)'},
                     {rows: 6, colour: 'rgb(90, 15, 0)'},
                     {rows: 1, colour: 'rgb(255, 255, 75)'},
                     {rows: 3, colour: 'rgb(150, 0, 30)'}
                  ], [
                     {rows: 1, colour: 'rgb(255, 255, 75)'},
                     {rows: 4, colour: 'rgb(90, 15, 0)'},
                     {rows: 4, colour: 'rgb(150, 0, 30)'},
                     {rows: 4, colour: 'rgb(90, 15, 0)'},
                     {rows: 1, colour: 'rgb(255, 255, 75)'}
                  ], [
                     {rows: 2, colour: 'rgb(255, 255, 75)'},
                     {rows: 3, colour: 'rgb(90, 15, 0)'},
                     {rows: 3, colour: 'rgb(150, 0, 30)'},
                     {rows: 3, colour: 'rgb(90, 15, 0)'},
                     {rows: 2, colour: 'rgb(255, 255, 75)'}
                  ], [
                     {rows: 2, colour: 'rgb(150, 0, 30)'},
                     {rows: 4, colour: 'rgb(90, 15, 0)'},
                     {rows: 1, colour: 'rgb(255, 255, 75)'},
                     {rows: 4, colour: 'rgb(90, 15, 0)'},
                     {rows: 2, colour: 'rgb(150, 0, 30)'}
                  ], [
                     {rows: 2, colour: 'rgb(255, 255, 75)'},
                     {rows: 2, colour: 'rgb(150, 0, 30)'},
                     {rows: 5, colour: 'rgb(90, 15, 0)'},
                     {rows: 2, colour: 'rgb(150, 0, 30)'},
                     {rows: 2, colour: 'rgb(255, 255, 75)'}
                  ], [
                     {rows: 2, colour: 'rgb(255, 255, 75)'},
                     {rows: 5, colour: 'rgb(150, 0, 30)'},
                     {rows: 5, colour: 'rgb(90, 15, 0)'},
                     {rows: 2, colour: 'rgb(255, 255, 75)'}
                  ], [
                     {rows: 2, colour: 'rgb(255, 255, 75)'},
                     {rows: 3, colour: 'rgb(150, 0, 30)'},
                     {rows: 3, colour: 'rgb(90, 15, 0)'},
                     {rows: 3, colour: 'rgb(150, 0, 30)'},
                     {rows: 2, colour: 'rgb(255, 255, 75)'}
                  ]
               ],
               textColour: 'rgb(255, 255, 75)',
               backgroundColour: 'rgb(90, 15, 0)',
               borderColour: 'rgb(150, 0, 30)'
            }, {
               countyName: 'Lanarkshire',
               countyAbbreviation: 'Lanarks',
               countyCode: 'lnk',
               chapmanCode: 'lks',
               hcsCode: 'lnk',
               classLevel: 8,
               country: 'Scotland',
               colours: [
                  {rows: 4, colour: 'rgb(240, 195, 15)'},
                  {rows: 5, colour: 'rgb(60, 30, 15)'},
                  {rows: 4, colour: 'rgb(240, 195, 15)'}
               ],
               textColour: 'rgb(60, 30, 15)',
               backgroundColour: 'rgb(240, 195, 15)',
               borderColour: 'rgb(60, 30, 15)'
            }, {
               countyName: 'Renfrewshire',
               countyAbbreviation: 'Renfrews',
               countyCode: 'rnf',
               chapmanCode: 'rfw',
               hcsCode: 'rnf',
               classLevel: 8,
               country: 'Scotland',
               colours: [
                  {rows: 4, colour: 'rgb(90, 0, 30)'},
                  {rows: 1, colour: 'rgb(225, 195, 30)'},
                  {rows: 4, colour: 'rgb(0, 30, 90)'},
                  {rows: 1, colour: 'rgb(225, 195, 30)'},
                  {rows: 4, colour: 'rgb(90, 0, 30)'}
               ],
               textColour: 'rgb(225, 195, 30)',
               backgroundColour: 'rgb(90, 0, 30)',
               borderColour: 'rgb(0, 30, 90)'
            }, {
               countyName: 'Dunbartonshire',
               countyAbbreviation: 'Dunbarts',
               countyCode: 'dun',
               chapmanCode: 'dnb',
               hcsCode: 'dun',
               classLevel: 8,
               country: 'Scotland',
               colours: [
                  {rows: 5, colour: 'rgb(180, 0, 45)'},
                  {rows: 1},
                  {rows: 1, colour: 'rgb(0, 120, 15)'},
                  {rows: 1},
                  {rows: 5, colour: 'rgb(180, 0, 45)'}
               ],
               alternateColours: [
                  [
                     {rows: 5, colour: 'rgb(180, 0, 45)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(0, 120, 15)'},
                     {rows: 5, colour: 'rgb(180, 0, 45)'}
                  ], [
                     {rows: 6, colour: 'rgb(180, 0, 45)'},
                     {rows: 1},
                     {rows: 1, colour: 'rgb(0, 120, 15)'},
                     {rows: 6, colour: 'rgb(180, 0, 45)'}
                  ], [
                     {rows: 5, colour: 'rgb(180, 0, 45)'},
                     {rows: 1, colour: 'rgb(0, 120, 15)'},
                     {rows: 2},
                     {rows: 1, colour: 'rgb(0, 120, 15)'},
                     {rows: 5, colour: 'rgb(180, 0, 45)'}
                  ], [
                     {rows: 5, colour: 'rgb(180, 0, 45)'},
                     {rows: 2, colour: 'rgb(210, 165, 0)'},
                     {rows: 2, colour: 'rgb(0, 120, 15)'},
                     {rows: 5, colour: 'rgb(180, 0, 45)'}
                  ], [
                     {rows: 5, colour: 'rgb(180, 0, 45)'},
                     {rows: 2, colour: 'rgb(225, 195, 0)'},
                     {rows: 2, colour: 'rgb(0, 120, 15)'},
                     {rows: 5, colour: 'rgb(180, 0, 45)'}
                  ], [
                     {rows: 5, colour: 'rgb(180, 0, 45)'},
                     {rows: 1},
                     {rows: 2, colour: 'rgb(0, 120, 15)'},
                     {rows: 1},
                     {rows: 5, colour: 'rgb(180, 0, 45)'}
                  ], [
                     {rows: 1, colour: 'rgb(0, 120, 15)'},
                     {rows: 1},
                     {rows: 4, colour: 'rgb(180, 0, 45)'},
                     {rows: 2},
                     {rows: 4, colour: 'rgb(180, 0, 45)'},
                     {rows: 1},
                     {rows: 1, colour: 'rgb(0, 120, 15)'}
                  ], [
                     {rows: 1, colour: 'rgb(0, 120, 15)'},
                     {rows: 5, colour: 'rgb(180, 0, 45)'},
                     {rows: 2},
                     {rows: 5, colour: 'rgb(180, 0, 45)'},
                     {rows: 1, colour: 'rgb(0, 120, 15)'}
                  ]
               ],
               backgroundColour: 'rgb(180, 0, 45)',
               borderColour: 'rgb(0, 120, 15)'
            }, {
               countyName: 'Dumfriesshire',
               countyAbbreviation: 'Dumfs',
               countyCode: 'dmf',
               chapmanCode: 'dfs',
               hcsCode: 'dmf',
               classLevel: 8,
               country: 'Scotland',
               colours: [
                  {rows: 3, colour: 'rgb(255, 210, 0)'},
                  {rows: 2, colour: 'rgb(225, 0, 15)'},
                  {rows: 4, colour: 'rgb(0, 0, 0)'},
                  {rows: 2, colour: 'rgb(225, 0, 15)'},
                  {rows: 3, colour: 'rgb(255, 210, 0)'}
               ],
               textColour: 'rgb(0, 0, 0)',
               backgroundColour: 'rgb(255, 210, 0)',
               borderColour: 'rgb(225, 0, 15)'
            }, {
               countyName: 'West Lothian',
               countyCode: 'wln',
               chapmanCode: 'wln',
               hcsCode: 'wlt',
               classLevel: 9,
               country: 'Scotland',
               colours: [
                  {rows: 5, colour: 'rgb(135, 0, 30)'},
                  {rows: 1},
                  {rows: 2, colour: 'rgb(255, 210, 45)'},
                  {rows: 1},
                  {rows: 5, colour: 'rgb(135, 0, 30)'}
               ],
               backgroundColour: 'rgb(135, 0, 30)',
               borderColour: 'rgb(255, 210, 45)'
            }, {
               countyName: 'Anglesey',
               countyCode: 'agy',
               chapmanCode: 'agy',
               hcsCode: 'agl',
               classLevel: 9,
               country: 'Wales',
               colours: [
                  {rows: 5, colour: 'rgb(225, 45, 60)'},
                  {rows: 3, colour: 'rgb(255, 225, 15)'},
                  {rows: 5, colour: 'rgb(225, 45, 60)'}
               ],
               textColour: 'rgb(255, 225, 15)',
               backgroundColour: 'rgb(225, 45, 60)'
            }, {
               countyName: 'Merioneth',
               countyCode: 'mer',
               chapmanCode: 'mer',
               hcsCode: 'mrn',
               classLevel: 9,
               country: 'Wales',
               colours: [
                  {rows: 4, colour: 'rgb(0, 60, 180)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(0, 60, 180)'},
                  {rows: 2, colour: 'rgb(255, 210, 0)'},
                  {rows: 4, colour: 'rgb(0, 60, 180)'}
               ],
               alternateColours: [
                  [
                     {rows: 2, colour: 'rgb(255, 210, 0)'},
                     {rows: 4, colour: 'rgb(0, 60, 180)'},
                     {rows: 2},
                     {rows: 4, colour: 'rgb(0, 60, 180)'},
                     {rows: 2, colour: 'rgb(255, 210, 0)'}
                  ], [
                     {rows: 5, colour: 'rgb(0, 60, 180)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(255, 210, 0)'},
                     {rows: 5, colour: 'rgb(0, 60, 180)'}
                  ]
               ],
               backgroundColour: 'rgb(0, 60, 180)',
               borderColour: 'rgb(255, 210, 0)'
            }, {
               countyName: 'Midlothian',
               countyCode: 'mln',
               chapmanCode: 'mln',
               hcsCode: 'mlt',
               classLevel: 9,
               country: 'Scotland',
               colours: [
                  {rows: 5, colour: 'rgb(0, 30, 60)'},
                  {rows: 4},
                  {rows: 5, colour: 'rgb(0, 30, 60)'}
               ],
               textColour: 'rgb(0, 30, 60)',
               borderColour: 'rgb(0, 30, 60)'
            }
         ];
      },
      deepFreeze: (oldThing) => Object.freeze(
         Array.isArray(oldThing)
         ? oldThing.map(
            (currentValue) => util.deepFreeze(currentValue)
         )
         : typeof oldThing === 'object'
         ? Object.keys(oldThing).reduce(
            function (newObject, prop) {
               newObject[prop] = util.deepFreeze(oldThing[prop]);
               return newObject;
            },
            {}
         )
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
         newCanvas.getContext('2d').fillStyle = util.creamColour;
         newCanvas.getContext('2d').fillRect(0, 0, newCanvas.width, newCanvas.height);
         if (args.isHorizontal) {
            args.colours.reduce(function (totalRowsSoFar, stripe) {
               if (stripe.hasOwnProperty('colour')) {
                  newCanvas.getContext('2d').fillStyle = stripe.colour;
                  newCanvas.getContext('2d').fillRect(0, totalRowsSoFar, newCanvas.width - (
                     args.isVertical
                     ? newCanvas.height - totalRowsSoFar - stripe.rows * pixelsPerRow
                     : 0
                  ), stripe.rows * pixelsPerRow);
               }
               return totalRowsSoFar + stripe.rows * pixelsPerRow;
            }, Math.round(newCanvas.height - (numRows + self.getNumRows(args.colours)) * pixelsPerRow / 2));
         }
         if (args.isVertical) {
            args.colours.reduce(function (totalRowsSoFar, stripe) {
               if (stripe.hasOwnProperty('colour')) {
                  newCanvas.getContext('2d').fillStyle = stripe.colour;
                  newCanvas.getContext('2d').fillRect(totalRowsSoFar, 0, stripe.rows * pixelsPerRow, newCanvas.height - (
                     args.isHorizontal
                     ? newCanvas.width - totalRowsSoFar - stripe.rows * pixelsPerRow
                     : 0
                  ));
               }
               return totalRowsSoFar + stripe.rows * pixelsPerRow;
            }, Math.round(newCanvas.width - (numRows + self.getNumRows(args.colours)) * pixelsPerRow / 2));
         }
         return newCanvas;
      },
      createCountyElement: function (county) {
         const newDiv = document.createElement('div');
         newDiv.textContent = county.countyName;
         newDiv.style.color = county.textColour ?? util.creamColour;
         newDiv.style.backgroundColor = county.backgroundColour ?? util.creamColour;
         newDiv.style.borderColor = county.borderColour ?? county.backgroundColour ?? util.creamColour;
         return newDiv;
      },
      createInfo: () => util.deepFreeze(util.createInfo()),
      getNumRows: (colours) => colours.reduce((numRowsSoFar, stripe) => numRowsSoFar + stripe.rows, 0)
   });

   return self;
}());

export {counties};
