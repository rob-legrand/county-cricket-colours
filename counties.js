/*jslint browser */

const counties = (function () {

   const util = Object.freeze({
      creamColour: 'rgb(255, 245, 225)',
      createInfo: function () {
         return [
            {
               countyName: 'Surrey',
               countyCode: 'sur',
               chapmanCode: 'sry',
               hcsCode: 'sur',
               classLevel: 1,
               colours: [
                  {rows: 6, colour: 'rgb(90, 45, 15)'},
                  {rows: 2},
                  {rows: 6, colour: 'rgb(90, 45, 15)'}
               ],
               backgroundColour: 'rgb(90, 45, 15)',
            }, {
               countyName: 'Lancashire',
               countyCode: 'lan',
               chapmanCode: 'lan',
               hcsCode: 'lcs',
               classLevel: 1,
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
               countyName: 'Nottinghamshire',
               countyCode: 'not',
               chapmanCode: 'ntt',
               hcsCode: 'not',
               classLevel: 1,
               colours: [
                  {rows: 4, colour: 'rgb(0, 60, 0)'},
                  {rows: 4, colour: 'rgb(255, 225, 0)'},
                  {rows: 4, colour: 'rgb(0, 60, 0)'}
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(0, 60, 0)',
               borderColour: 'rgb(255, 225, 0)'
            }, {
               countyName: 'Kent',
               countyCode: 'ken',
               chapmanCode: 'ken',
               hcsCode: 'knt',
               classLevel: 1,
               colours: [
                  {rows: 6, colour: 'rgb(150, 0, 30)'},
                  {rows: 3},
                  {rows: 6, colour: 'rgb(0, 30, 60)'}
               ],
               backgroundColour: 'rgb(150, 0, 30)',
               borderColour: 'rgb(0, 30, 60)'
            }, {
               countyName: 'Middlesex',
               countyCode: 'mdx',
               chapmanCode: 'mdx',
               hcsCode: 'msx',
               classLevel: 1,
               colours: [
                  {rows: 6, colour: 'rgb(0, 0, 60)'},
                  {rows: 2},
                  {rows: 6, colour: 'rgb(0, 0, 60)'}
               ],
               backgroundColour: 'rgb(0, 0, 60)'
            }, {
               countyName: 'Yorkshire',
               countyCode: 'yrk',
               chapmanCode: 'yks',
               hcsCode: 'yrk',
               classLevel: 1,
               colours: [
                  {rows: 5, colour: 'rgb(135, 165, 195)'},
                  {rows: 3, colour: 'rgb(240, 225, 90)'},
                  {rows: 5, colour: 'rgb(30, 30, 60)'}
               ],
               textColour: 'rgb(240, 225, 90)',
               backgroundColour: 'rgb(30, 30, 60)',
               borderColour: 'rgb(135, 165, 195)'
            }, {
               countyName: 'Gloucestershire',
               countyCode: 'gls',
               chapmanCode: 'gls',
               hcsCode: 'glc',
               classLevel: 1,
               colours: [
                  {rows: 4, colour: 'rgb(0, 0, 60)'},
                  {rows: 1, colour: 'rgb(240, 210, 150)'},
                  {rows: 1, colour: 'rgb(120, 45, 15)'},
                  {rows: 2},
                  {rows: 1, colour: 'rgb(0, 180, 45)'},
                  {rows: 1, colour: 'rgb(225, 0, 30)'},
                  {rows: 4, colour: 'rgb(0, 0, 60)'}
               ],
               textColour: 'rgb(240, 210, 150)',
               backgroundColour: 'rgb(0, 0, 60)',
               borderColour: 'rgb(120, 45, 15)'
            }, {
               countyName: 'Sussex',
               countyCode: 'sus',
               chapmanCode: 'ssx',
               hcsCode: 'sus',
               classLevel: 1,
               colours: [
                  {rows: 2, colour: 'rgb(0, 30, 90)'},
                  {rows: 1},
                  {rows: 2, colour: 'rgb(255, 180, 15)'},
                  {rows: 2, colour: 'rgb(60, 150, 210)'},
                  {rows: 1},
                  {rows: 2, colour: 'rgb(0, 30, 90)'}
               ],
               textColour: 'rgb(255, 180, 15)',
               backgroundColour: 'rgb(60, 150, 210)',
               borderColour: 'rgb(0, 30, 90)'
            }, {
               countyName: 'Somerset',
               countyCode: 'som',
               chapmanCode: 'som',
               hcsCode: 'sms',
               classLevel: 2,
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
               countyName: 'Derbyshire',
               countyCode: 'drb',
               chapmanCode: 'dby',
               hcsCode: 'drb',
               classLevel: 2,
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
               countyName: 'Warwickshire',
               countyCode: 'war',
               chapmanCode: 'war',
               hcsCode: 'wrw',
               classLevel: 2,
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
               countyName: 'Leicestershire',
               countyCode: 'lei',
               chapmanCode: 'lei',
               hcsCode: 'lcr',
               classLevel: 2,
               colours: [
                  {rows: 2, colour: 'rgb(195, 0, 30)'},
                  {rows: 2},
                  {rows: 5, colour: 'rgb(0, 60, 0)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(195, 0, 30)'}
               ],
               textColour: 'rgb(255, 240, 30)',
               backgroundColour: 'rgb(0, 60, 0)',
               borderColour: 'rgb(195, 0, 30)'
            }, {
               countyName: 'Essex',
               countyCode: 'ess',
               chapmanCode: 'ess',
               hcsCode: 'ese',
               classLevel: 2,
               colours: [
                  {rows: 2, colour: 'rgb(0, 0, 90)'},
                  {rows: 1, colour: 'rgb(255, 225, 0)'},
                  {rows: 4, colour: 'rgb(195, 0, 0)'},
                  {rows: 1, colour: 'rgb(255, 225, 0)'},
                  {rows: 2, colour: 'rgb(0, 0, 90)'}
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(195, 0, 0)',
               borderColour: 'rgb(0, 0, 90)'
            }, {
               countyName: 'Hampshire',
               countyCode: 'ham',
               chapmanCode: 'ham',
               hcsCode: 'hmp',
               classLevel: 2,
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
               countyName: 'Cheshire',
               countyCode: 'che',
               chapmanCode: 'chs',
               hcsCode: 'che',
               classLevel: 2,
               colours: [
                  {rows: 6, colour: 'rgb(90, 0, 120)'},
                  {rows: 2},
                  {rows: 6, colour: 'rgb(0, 0, 0)'}
               ],
               backgroundColour: 'rgb(90, 0, 120)',
               borderColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Staffordshire',
               countyCode: 'stf',
               chapmanCode: 'sts',
               hcsCode: 'stf',
               classLevel: 2,
               colours: [
                  {rows: 5, colour: 'rgb(0, 90, 45)'},
                  {rows: 4, colour: 'rgb(255, 210, 75)'},
                  {rows: 5, colour: 'rgb(0, 90, 45)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Durham',
               countyCode: 'dur',
               chapmanCode: 'dur',
               hcsCode: 'drh',
               classLevel: 3,
               colours: [
                  {rows: 5, colour: 'rgb(0, 0, 90)'},
                  {rows: 4, colour: 'rgb(240, 210, 0)'},
                  {rows: 5, colour: 'rgb(135, 0, 30)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Lincolnshire',
               countyCode: 'lin',
               chapmanCode: 'lin',
               hcsCode: 'lnc',
               classLevel: 3,
               colours: [
                  {rows: 6, colour: 'rgb(0, 60, 0)'},
                  {rows: 2, colour: 'rgb(255, 225, 0)'},
                  {rows: 6, colour: 'rgb(0, 60, 0)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Northumberland',
               countyCode: 'nbl',
               chapmanCode: 'nbl',
               hcsCode: 'nhb',
               classLevel: 3,
               colours: [
                  {rows: 5, colour: 'rgb(210, 30, 30)'},
                  {rows: 5, colour: 'rgb(0, 60, 30)'},
                  {rows: 5, colour: 'rgb(225, 180, 0)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Glamorgan',
               countyCode: 'gla',
               chapmanCode: 'gla',
               hcsCode: 'glm',
               classLevel: 3,
               colours: [
                  {rows: 5, colour: 'rgb(0, 30, 60)'},
                  {rows: 2, colour: 'rgb(255, 240, 135)'},
                  {rows: 2, colour: 'rgb(0, 30, 60)'},
                  {rows: 2, colour: 'rgb(255, 240, 135)'},
                  {rows: 5, colour: 'rgb(0, 30, 60)'}
               ],
               textColour: 'rgb(255, 240, 135)',
               backgroundColour: 'rgb(0, 30, 60)',
               borderColour: 'rgb(30, 180, 90)'
            }, {
               countyName: 'Devon',
               countyCode: 'dev',
               chapmanCode: 'dev',
               hcsCode: 'dvn',
               classLevel: 3,
               colours: [
                  {rows: 3, colour: 'rgb(0, 0, 45)'},
                  {rows: 2, colour: 'rgb(240, 210, 90)'},
                  {rows: 4, colour: 'rgb(0, 60, 195)'},
                  {rows: 2, colour: 'rgb(240, 210, 90)'},
                  {rows: 3, colour: 'rgb(0, 0, 45)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Hertfordshire',
               countyCode: 'hrt',
               chapmanCode: 'hrt',
               hcsCode: 'htf',
               classLevel: 3,
               colours: [
                  {rows: 6, colour: 'rgb(0, 75, 0)'},
                  {rows: 2, colour: 'rgb(255, 225, 120)'},
                  {rows: 6, colour: 'rgb(0, 0, 75)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Norfolk',
               countyCode: 'nfk',
               chapmanCode: 'nfk',
               hcsCode: 'nrf',
               classLevel: 3,
               colours: [
                  {rows: 5, colour: 'rgb(0, 0, 75)'},
                  {rows: 2, colour: 'rgb(255, 225, 0)'},
                  {rows: 2, colour: 'rgb(195, 0, 0)'},
                  {rows: 5, colour: 'rgb(0, 0, 75)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Northamptonshire',
               countyCode: 'nth',
               chapmanCode: 'nth',
               hcsCode: 'nhp',
               classLevel: 3,
               colours: [
                  {rows: 6, colour: 'rgb(90, 0, 0)'},
                  {rows: 3, colour: 'rgb(255, 225, 0)'},
                  {rows: 6, colour: 'rgb(90, 0, 0)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Worcestershire',
               countyCode: 'wor',
               chapmanCode: 'wor',
               hcsCode: 'wrc',
               classLevel: 4,
               colours: [
                  {rows: 5, colour: 'rgb(0, 60, 30)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(0, 0, 0)'},
                  {rows: 5, colour: 'rgb(0, 60, 30)'}
               ],
               backgroundColour: 'rgb(0, 60, 30)',
               borderColour: 'rgb(0, 0, 0)'
            }, {
               countyName: 'Buckinghamshire',
               countyCode: 'buc',
               chapmanCode: 'bkm',
               hcsCode: 'buc',
               classLevel: 4,
               colours: [
                  {rows: 5, colour: 'rgb(0, 75, 30)'},
                  {rows: 1},
                  {rows: 3, colour: 'rgb(195, 195, 210)'},
                  {rows: 1},
                  {rows: 5, colour: 'rgb(0, 75, 30)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Shropshire',
               countyCode: 'sal',
               chapmanCode: 'sal',
               hcsCode: 'shp',
               classLevel: 4,
               colours: [
                  {rows: 7, colour: 'rgb(255, 225, 0)'},
                  {rows: 7, colour: 'rgb(0, 30, 120)'}
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(0, 30, 120)',
               borderColour: 'rgb(255, 225, 0)'
            }, {
               countyName: 'Oxfordshire',
               countyCode: 'oxf',
               chapmanCode: 'oxf',
               hcsCode: 'oxd',
               classLevel: 4,
               colours: [
                  {rows: 6, colour: 'rgb(105, 0, 45)'},
                  {rows: 2, colour: 'rgb(240, 225, 0)'},
                  {rows: 6, colour: 'rgb(0, 30, 75)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Bedfordshire',
               countyCode: 'bed',
               chapmanCode: 'bdf',
               hcsCode: 'bed',
               classLevel: 4,
               colours: [
                  {rows: 3, colour: 'rgb(60, 0, 150)'},
                  {rows: 4, colour: 'rgb(0, 0, 0)'},
                  {rows: 1, colour: 'rgb(195, 195, 195)'},
                  {rows: 4, colour: 'rgb(0, 0, 0)'},
                  {rows: 3, colour: 'rgb(60, 0, 150)'}
               ],
               textColour: 'rgb(195, 195, 195)',
               backgroundColour: 'rgb(0, 0, 0)',
               borderColour: 'rgb(60, 0, 150)'
            }, {
               countyName: 'Wiltshire',
               countyCode: 'wil',
               chapmanCode: 'wil',
               hcsCode: 'wts',
               classLevel: 4,
               colours: [
                  {rows: 6, colour: 'rgb(0, 60, 30)'},
                  {rows: 2},
                  {rows: 6, colour: 'rgb(0, 60, 30)'}
               ],
               backgroundColour: 'rgb(0, 60, 30)'
            }, {
               countyName: 'Cambridgeshire',
               countyCode: 'cam',
               chapmanCode: 'cam',
               hcsCode: 'cmb',
               classLevel: 4,
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
               countyName: 'Monmouthshire',
               countyCode: 'mnm',
               chapmanCode: 'mon',
               hcsCode: 'mnm',
               classLevel: 4,
               colours: [
                  {rows: 6, colour: 'rgb(0, 90, 195)'},
                  {rows: 2, colour: 'rgb(255, 225, 0)'},
                  {rows: 6, colour: 'rgb(0, 0, 0)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Herefordshire',
               countyCode: 'hef',
               chapmanCode: 'hef',
               hcsCode: 'hrf',
               classLevel: 5,
               colours: [
                  {rows: 5, colour: 'rgb(180, 0, 30)'},
                  {rows: 1, colour: 'rgb(165, 195, 255)'},
                  {rows: 2, colour: 'rgb(0, 0, 90)'},
                  {rows: 1, colour: 'rgb(165, 195, 255)'},
                  {rows: 5, colour: 'rgb(180, 0, 30)'}
               ],
               textColour: 'rgb(165, 195, 255)',
               backgroundColour: 'rgb(180, 0, 30)',
               borderColour: 'rgb(0, 0, 90)'
            }, {
               countyName: 'Caernarfonshire',
               countyCode: 'cae',
               chapmanCode: 'cae',
               hcsCode: 'crn',
               classLevel: 5,
               colours: [
                  {rows: 1, colour: 'rgb(255, 210, 0)'},
                  {rows: 5, colour: 'rgb(0, 180, 60)'},
                  {rows: 2, colour: 'rgb(255, 210, 0)'},
                  {rows: 5, colour: 'rgb(0, 180, 60)'},
                  {rows: 1, colour: 'rgb(255, 210, 0)'}
               ],
               textColour: 'rgb(255, 210, 0)',
               backgroundColour: 'rgb(0, 180, 60)',
               borderColour: 'rgb(255, 210, 0)'
            }, {
               countyName: 'Radnorshire',
               countyCode: 'rad',
               chapmanCode: 'rad',
               hcsCode: 'rdn',
               classLevel: 5,
               colours: [
                  {rows: 4, colour: 'rgb(225, 30, 0)'},
                  {rows: 2, colour: 'rgb(255, 210, 0)'},
                  {rows: 2, colour: 'rgb(30, 45, 240)'},
                  {rows: 2, colour: 'rgb(255, 210, 0)'},
                  {rows: 4, colour: 'rgb(225, 30, 0)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Cumberland',
               countyCode: 'cum',
               chapmanCode: 'cul',
               hcsCode: 'cum',
               classLevel: 5,
               colours: [
                  {rows: 5, colour: 'rgb(165, 0, 30)'},
                  {rows: 4, colour: 'rgb(240, 225, 0)'},
                  {rows: 5, colour: 'rgb(0, 60, 30)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Rutland',
               countyCode: 'rut',
               chapmanCode: 'rut',
               hcsCode: 'rtl',
               classLevel: 5,
               colours: [
                  {rows: 4, colour: 'rgb(0, 150, 90)'},
                  {rows: 2, colour: 'rgb(255, 210, 30)'},
                  {rows: 2, colour: 'rgb(0, 150, 90)'},
                  {rows: 2, colour: 'rgb(255, 210, 30)'},
                  {rows: 4, colour: 'rgb(0, 150, 90)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Suffolk',
               countyCode: 'sfk',
               chapmanCode: 'sfk',
               hcsCode: 'sff',
               classLevel: 5,
               colours: [
                  {rows: 2, colour: 'rgb(120, 0, 0)'},
                  {rows: 1, colour: 'rgb(255, 225, 0)'},
                  {rows: 4, colour: 'rgb(120, 0, 0)'},
                  {rows: 1, colour: 'rgb(255, 225, 0)'},
                  {rows: 2, colour: 'rgb(120, 0, 0)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Huntingdonshire',
               countyCode: 'hun',
               chapmanCode: 'hun',
               hcsCode: 'hnt',
               classLevel: 5,
               colours: [
                  {rows: 5, colour: 'rgb(0, 0, 45)'},
                  {rows: 4, colour: 'rgb(255, 240, 0)'},
                  {rows: 5, colour: 'rgb(0, 0, 45)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Westmorland',
               countyCode: 'wes',
               chapmanCode: 'wes',
               hcsCode: 'wml',
               classLevel: 5,
               colours: [
                  {rows: 4, colour: 'rgb(195, 0, 30)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(240, 210, 0)'},
                  {rows: 2},
                  {rows: 4, colour: 'rgb(195, 0, 30)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Berkshire',
               countyCode: 'ber',
               chapmanCode: 'brk',
               hcsCode: 'ber',
               classLevel: 6,
               colours: [
                  {rows: 2, colour: 'rgb(255, 255, 135)'},
                  {rows: 5, colour: 'rgb(30, 120, 60)'},
                  {rows: 2, colour: 'rgb(255, 255, 135)'},
                  {rows: 5, colour: 'rgb(45, 0, 90)'},
                  {rows: 2, colour: 'rgb(255, 255, 135)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Dorset',
               countyCode: 'dor',
               chapmanCode: 'dor',
               hcsCode: 'drs',
               classLevel: 6,
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
               countyCode: 'bre',
               chapmanCode: 'bre',
               hcsCode: 'brn',
               classLevel: 6,
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
               countyName: 'Cornwall',
               countyCode: 'cnw',
               chapmanCode: 'con',
               hcsCode: 'cnw',
               classLevel: 6,
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
               countyName: 'Carmarthenshire',
               countyCode: 'crm',
               chapmanCode: 'cmn',
               hcsCode: 'crm',
               classLevel: 6,
               colours: [
                  {rows: 3, colour: 'rgb(255, 225, 0)'},
                  {rows: 8, colour: 'rgb(195, 0, 30)'},
                  {rows: 3, colour: 'rgb(255, 225, 0)'}
               ],
               textColour: 'rgb(255, 225, 0)',
               backgroundColour: 'rgb(195, 0, 30)',
               borderColour: 'rgb(255, 225, 0)'
            }, {
               countyName: 'Denbighshire',
               countyCode: 'den',
               chapmanCode: 'den',
               hcsCode: 'dbh',
               classLevel: 6,
               colours: [
                  {rows: 4, colour: 'rgb(0, 0, 0)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(225, 0, 30)'},
                  {rows: 2},
                  {rows: 4, colour: 'rgb(0, 0, 0)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Pembrokeshire',
               countyCode: 'pem',
               chapmanCode: 'pem',
               hcsCode: 'pmb',
               classLevel: 6,
               colours: [
                  {rows: 5, colour: 'rgb(0, 30, 90)'},
                  {rows: 4, colour: 'rgb(195, 225, 255)'},
                  {rows: 5, colour: 'rgb(0, 30, 90)'}
               ],
               textColour: 'rgb(195, 225, 255)',
               backgroundColour: 'rgb(0, 30, 90)',
               borderColour: 'rgb(195, 225, 255)'
            }, {
               countyName: 'Montgomeryshire',
               countyCode: 'mtg',
               chapmanCode: 'mgy',
               hcsCode: 'mtg',
               classLevel: 6,
               colours: [
                  {rows: 2, colour: 'rgb(135, 0, 0)'},
                  {rows: 4, colour: 'rgb(240, 240, 45)'},
                  {rows: 2, colour: 'rgb(45, 45, 240)'},
                  {rows: 4, colour: 'rgb(240, 240, 45)'},
                  {rows: 2, colour: 'rgb(135, 0, 0)'}
               ],
               textColour: 'rgb(45, 45, 240)',
               backgroundColour: 'rgb(240, 240, 45)',
               borderColour: 'rgb(135, 0, 0)'
            }, {
               countyName: 'Flintshire',
               countyCode: 'fln',
               chapmanCode: 'fln',
               hcsCode: 'flt',
               colours: [
                  {rows: 2, colour: 'rgb(0, 0, 0)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(0, 0, 0)'},
                  {rows: 1, colour: 'rgb(255, 45, 0)'},
                  {rows: 2, colour: 'rgb(0, 0, 0)'},
                  {rows: 2},
                  {rows: 2, colour: 'rgb(0, 0, 0)'}
               ],
               textColour: '',
               backgroundColour: '',
               borderColour: ''
            }, {
               countyName: 'Midlothian',
               countyCode: 'mln',
               chapmanCode: 'mln',
               hcsCode: 'mlt',
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
            args.county.colours.reduce(function (totalRowsSoFar, stripe) {
               if (stripe.hasOwnProperty('colour')) {
                  newCanvas.getContext('2d').fillStyle = stripe.colour;
                  newCanvas.getContext('2d').fillRect(0, totalRowsSoFar, newCanvas.width - (
                     args.isVertical
                     ? newCanvas.height - totalRowsSoFar - stripe.rows * pixelsPerRow
                     : 0
                  ), stripe.rows * pixelsPerRow);
               }
               return totalRowsSoFar + stripe.rows * pixelsPerRow;
            }, Math.round(newCanvas.height - (numRows + self.getNumRows(args.county.colours)) * pixelsPerRow / 2));
         }
         if (args.isVertical) {
            args.county.colours.reduce(function (totalRowsSoFar, stripe) {
               if (stripe.hasOwnProperty('colour')) {
                  newCanvas.getContext('2d').fillStyle = stripe.colour;
                  newCanvas.getContext('2d').fillRect(totalRowsSoFar, 0, stripe.rows * pixelsPerRow, newCanvas.height - (
                     args.isHorizontal
                     ? newCanvas.width - totalRowsSoFar - stripe.rows * pixelsPerRow
                     : 0
                  ));
               }
               return totalRowsSoFar + stripe.rows * pixelsPerRow;
            }, Math.round(newCanvas.width - (numRows + self.getNumRows(args.county.colours)) * pixelsPerRow / 2));
         }
         return newCanvas;
      },
      createDiv: function (county) {
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
