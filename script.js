/*jslint browser */

document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   const counties = (function () {

      const util = Object.freeze({
         creamColour: 'rgb(255, 245, 225)',
         createInfo: function () {
            return [
               {
                  countyName: 'Surrey',
                  chapmanCode: 'sry',
                  colours: [
                     {rows: 6, colour: 'rgb(90, 45, 15)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(90, 45, 15)'}
                  ]
               }, {
                  countyName: 'Lancashire',
                  chapmanCode: 'lan',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 30, 60)'},
                     {rows: 2, colour: 'rgb(225, 0, 30)'},
                     {rows: 2, colour: 'rgb(0, 90, 30)'},
                     {rows: 5, colour: 'rgb(0, 30, 60)'}
                  ]
               }, {
                  countyName: 'Nottinghamshire',
                  chapmanCode: 'ntt',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 60, 0)'},
                     {rows: 4, colour: 'rgb(255, 225, 0)'},
                     {rows: 5, colour: 'rgb(0, 60, 0)'}
                  ]
               }, {
                  countyName: 'Middlesex',
                  chapmanCode: 'mdx',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 0, 60)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(0, 0, 60)'}
                  ]
               }, {
                  countyName: 'Kent',
                  chapmanCode: 'ken',
                  colours: [
                     {rows: 6, colour: 'rgb(135, 0, 30)'},
                     {rows: 3},
                     {rows: 6, colour: 'rgb(135, 0, 30)'}
                  ]
               }, {
                  countyName: 'Yorkshire',
                  chapmanCode: 'yks',
                  colours: [
                     {rows: 5, colour: 'rgb(135, 165, 195)'},
                     {rows: 4, colour: 'rgb(240, 225, 90)'},
                     {rows: 5, colour: 'rgb(30, 30, 60)'}
                  ]
               }, {
                  countyName: 'Gloucestershire',
                  chapmanCode: 'gls',
                  colours: [
                     {rows: 4, colour: 'rgb(0, 0, 60)'},
                     {rows: 1, colour: 'rgb(240, 210, 150)'},
                     {rows: 1, colour: 'rgb(120, 45, 15)'},
                     {rows: 2},
                     {rows: 1, colour: 'rgb(0, 180, 45)'},
                     {rows: 1, colour: 'rgb(225, 0, 30)'},
                     {rows: 4, colour: 'rgb(0, 0, 60)'}
                  ]
               }, {
                  countyName: 'Sussex',
                  chapmanCode: 'ssx',
                  colours: [
                     {rows: 4, colour: 'rgb(0, 30, 90)'},
                     {rows: 2, colour: 'rgb(255, 180, 15)'},
                     {rows: 2, colour: 'rgb(60, 150, 210)'},
                     {rows: 4, colour: 'rgb(0, 30, 90)'}
                  ]
               }, {
                  countyName: 'Somerset',
                  chapmanCode: 'som',
                  colours: [
                     {rows: 4, colour: 'rgb(105, 0, 30)'},
                     {rows: 2, colour: 'rgb(195, 195, 195)'},
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 2, colour: 'rgb(195, 195, 195)'},
                     {rows: 4, colour: 'rgb(105, 0, 30)'}
                  ]
               }, {
                  countyName: 'Derbyshire',
                  chapmanCode: 'dby',
                  colours: [
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 6, colour: 'rgb(180, 225, 240)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 6, colour: 'rgb(75, 30, 15)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'}
                  ]
               }, {
                  countyName: 'Leicestershire',
                  chapmanCode: 'lei',
                  colours: [
                     {rows: 2, colour: 'rgb(195, 0, 30)'},
                     {rows: 2},
                     {rows: 5, colour: 'rgb(0, 60, 0)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(195, 0, 30)'}
                  ]
               }, {
                  countyName: 'Warwickshire',
                  chapmanCode: 'war',
                  colours: [
                     {rows: 4, colour: 'rgb(30, 30, 60)'},
                     {rows: 2, colour: 'rgb(255, 225, 60)'},
                     {rows: 2, colour: 'rgb(240, 240, 240)'},
                     {rows: 2, colour: 'rgb(255, 225, 60)'},
                     {rows: 4, colour: 'rgb(30, 30, 60)'}
                  ]
               }, {
                  countyName: 'Essex',
                  chapmanCode: 'ess',
                  colours: [
                     {rows: 2, colour: 'rgb(0, 0, 90)'},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 4, colour: 'rgb(195, 0, 0)'},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'}
                  ]
               }, {
                  countyName: 'Hampshire',
                  chapmanCode: 'ham',
                  colours: [
                     {rows: 4, colour: 'rgb(0, 0, 60)'},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 3},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 4, colour: 'rgb(0, 0, 60)'}
                  ]
               }, {
                  countyName: 'Cheshire',
                  chapmanCode: 'chs',
                  colours: [
                     {rows: 6, colour: 'rgb(90, 0, 120)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(0, 0, 0)'}
                  ]
               }, {
                  countyName: 'Staffordshire',
                  chapmanCode: 'sts',
                  colours: [
                     {rows: 6, colour: 'rgb(60, 105, 75)'},
                     {rows: 2, colour: 'rgb(255, 225, 60)'},
                     {rows: 6, colour: 'rgb(60, 105, 75)'}
                  ]
               }, {
                  countyName: 'Northumberland',
                  chapmanCode: 'nbl',
                  colours: [
                     {rows: 5, colour: 'rgb(180, 0, 30)'},
                     {rows: 5, colour: 'rgb(0, 60, 30)'},
                     {rows: 5, colour: 'rgb(240, 225, 0)'}
                  ]
               }, {
                  countyName: 'Lincolnshire',
                  chapmanCode: 'lin',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 60, 0)'},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 6, colour: 'rgb(0, 60, 0)'}
                  ]
               }, {
                  countyName: 'Durham',
                  chapmanCode: 'dur',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 0, 90)'},
                     {rows: 4, colour: 'rgb(240, 210, 0)'},
                     {rows: 5, colour: 'rgb(135, 0, 30)'}
                  ]
               }, {
                  countyName: 'Glamorgan',
                  chapmanCode: 'gla',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 30, 60)'},
                     {rows: 2, colour: 'rgb(255, 240, 135)'},
                     {rows: 2, colour: 'rgb(0, 30, 60)'},
                     {rows: 2, colour: 'rgb(255, 240, 135)'},
                     {rows: 5, colour: 'rgb(0, 30, 60)'}
                  ]
               }, {
                  countyName: 'Devon',
                  chapmanCode: 'dev',
                  colours: [
                     {rows: 3, colour: 'rgb(0, 0, 45)'},
                     {rows: 2, colour: 'rgb(240, 210, 90)'},
                     {rows: 4, colour: 'rgb(0, 60, 195)'},
                     {rows: 2, colour: 'rgb(240, 210, 90)'},
                     {rows: 3, colour: 'rgb(0, 0, 45)'}
                  ]
               }, {
                  countyName: 'Hertfordshire',
                  chapmanCode: 'hrt',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 75, 0)'},
                     {rows: 2, colour: 'rgb(255, 225, 120)'},
                     {rows: 6, colour: 'rgb(0, 0, 75)'}
                  ]
               }, {
                  countyName: 'Norfolk',
                  chapmanCode: 'nfk',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 0, 75)'},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 2, colour: 'rgb(195, 0, 0)'},
                     {rows: 5, colour: 'rgb(0, 0, 75)'}
                  ]
               }, {
                  countyName: 'Northamptonshire',
                  chapmanCode: 'nth',
                  colours: [
                     {rows: 6, colour: 'rgb(90, 0, 0)'},
                     {rows: 3, colour: 'rgb(255, 225, 0)'},
                     {rows: 6, colour: 'rgb(90, 0, 0)'}
                  ]
               }, {
                  countyName: 'Worcestershire',
                  chapmanCode: 'wor',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 60, 30)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 5, colour: 'rgb(0, 60, 30)'}
                  ]
               }, {
                  countyName: 'Buckinghamshire',
                  chapmanCode: 'bkm',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 75, 30)'},
                     {rows: 1},
                     {rows: 3, colour: 'rgb(195, 195, 210)'},
                     {rows: 1},
                     {rows: 5, colour: 'rgb(0, 75, 30)'}
                  ]
               }, {
                  countyName: 'Bedfordshire',
                  chapmanCode: 'bdf',
                  colours: [
                     {rows: 3, colour: 'rgb(60, 0, 150)'},
                     {rows: 4, colour: 'rgb(0, 0, 0)'},
                     {rows: 1, colour: 'rgb(195, 195, 195)'},
                     {rows: 4, colour: 'rgb(0, 0, 0)'},
                     {rows: 3, colour: 'rgb(60, 0, 150)'}
                  ]
               }, {
                  countyName: 'Oxfordshire',
                  chapmanCode: 'oxf',
                  colours: [
                     {rows: 6, colour: 'rgb(105, 0, 45)'},
                     {rows: 2, colour: 'rgb(240, 225, 0)'},
                     {rows: 6, colour: 'rgb(0, 30, 75)'}
                  ]
               }, {
                  countyName: 'Herefordshire',
                  chapmanCode: 'hef',
                  colours: [
                     {rows: 5, colour: 'rgb(180, 0, 30)'},
                     {rows: 1, colour: 'rgb(165, 195, 255)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'},
                     {rows: 1, colour: 'rgb(165, 195, 255)'},
                     {rows: 5, colour: 'rgb(180, 0, 30)'}
                  ]
               }, {
                  countyName: 'Shropshire',
                  chapmanCode: 'sal',
                  colours: [
                     {rows: 7, colour: 'rgb(255, 225, 0)'},
                     {rows: 7, colour: 'rgb(0, 30, 120)'}
                  ]
               }, {
                  countyName: 'Cumberland',
                  chapmanCode: 'cul',
                  colours: [
                     {rows: 5, colour: 'rgb(165, 0, 30)'},
                     {rows: 5, colour: 'rgb(240, 225, 0)'},
                     {rows: 5, colour: 'rgb(0, 60, 30)'}
                  ]
               }, {
                  countyName: 'Huntingdonshire',
                  chapmanCode: 'hun',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 0, 45)'},
                     {rows: 4, colour: 'rgb(255, 240, 0)'},
                     {rows: 5, colour: 'rgb(0, 0, 45)'}
                  ]
               }, {
                  countyName: 'Wiltshire',
                  chapmanCode: 'wil',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 60, 30)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(0, 60, 30)'}
                  ]
               }, {
                  countyName: 'Cambridgeshire',
                  chapmanCode: 'cam',
                  colours: [
                     {rows: 3, colour: 'rgb(105, 0, 15)'},
                     {rows: 4, colour: 'rgb(165, 225, 225)'},
                     {rows: 4, colour: 'rgb(255, 225, 160)'},
                     {rows: 3, colour: 'rgb(105, 0, 15)'}
                  ]
               }, {
                  countyName: 'Westmorland',
                  chapmanCode: 'wes',
                  colours: [
                     {rows: 5, colour: 'rgb(195, 0, 30)'},
                     {rows: 1},
                     {rows: 2, colour: 'rgb(240, 210, 0)'},
                     {rows: 1},
                     {rows: 5, colour: 'rgb(195, 0, 30)'}
                  ]
               }, {
                  countyName: 'Monmouthshire',
                  chapmanCode: 'mon',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 90, 195)'},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 6, colour: 'rgb(0, 0, 0)'}
                  ]
               }, {
                  countyName: 'Suffolk',
                  chapmanCode: 'sfk',
                  colours: [
                     {rows: 4, colour: 'rgb(120, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 4, colour: 'rgb(120, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 4, colour: 'rgb(120, 0, 0)'}
                  ]
               }, {
                  countyName: 'Berkshire',
                  chapmanCode: 'brk',
                  colours: [
                     {rows: 2, colour: 'rgb(255, 255, 135)'},
                     {rows: 5, colour: 'rgb(30, 120, 60)'},
                     {rows: 2, colour: 'rgb(255, 255, 135)'},
                     {rows: 5, colour: 'rgb(45, 0, 90)'},
                     {rows: 2, colour: 'rgb(255, 255, 135)'}
                  ]
               }, {
                  countyName: 'Cornwall',
                  chapmanCode: 'con',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 0, 0)'},
                     {rows: 1, colour: 'rgb(225, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 6, colour: 'rgb(0, 0, 0)'}
                  ]
               }, {
                  countyName: 'Dorset',
                  chapmanCode: 'dor',
                  colours: [
                     {rows: 2, colour: 'rgb(0, 90, 30)'},
                     {rows: 3},
                     {rows: 2, colour: 'rgb(0, 90, 30)'},
                     {rows: 3},
                     {rows: 2, colour: 'rgb(0, 90, 30)'}
                  ]
               }, {
                  countyName: 'Rutland',
                  chapmanCode: 'rut',
                  colours: [
                     {rows: 4, colour: 'rgb(0, 150, 90)'},
                     {rows: 2, colour: 'rgb(255, 210, 30)'},
                     {rows: 2, colour: 'rgb(0, 150, 90)'},
                     {rows: 2, colour: 'rgb(255, 210, 30)'},
                     {rows: 4, colour: 'rgb(0, 150, 90)'}
                  ]
               }, {
                  countyName: 'Carmarthenshire',
                  chapmanCode: 'cmn',
                  colours: [
                     {rows: 3, colour: 'rgb(255, 225, 0)'},
                     {rows: 8, colour: 'rgb(195, 0, 30)'},
                     {rows: 3, colour: 'rgb(255, 225, 0)'}
                  ]
               }, {
                  countyName: 'Pembrokeshire',
                  chapmanCode: 'pem',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 30, 90)'},
                     {rows: 4, colour: 'rgb(195, 225, 255)'},
                     {rows: 5, colour: 'rgb(0, 30, 90)'}
                  ]
               }, {
                  countyName: 'Denbighshire',
                  chapmanCode: 'den',
                  colours: [
                     {rows: 4, colour: 'rgb(0, 0, 0)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(225, 0, 30)'},
                     {rows: 2},
                     {rows: 4, colour: 'rgb(0, 0, 0)'}
                  ]
               }, {
                  countyName: 'Caernarfonshire',
                  chapmanCode: 'cae',
                  colours: [
                     {rows: 1, colour: 'rgb(255, 240, 15)'},
                     {rows: 5, colour: 'rgb(0, 180, 90)'},
                     {rows: 2, colour: 'rgb(255, 240, 0)'},
                     {rows: 5, colour: 'rgb(0, 180, 90)'},
                     {rows: 1, colour: 'rgb(255, 240, 15)'}
                  ]
               }, {
                  countyName: 'Midlothian',
                  chapmanCode: 'mln',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 30, 60)'},
                     {rows: 4},
                     {rows: 5, colour: 'rgb(0, 30, 60)'}
                  ]
               }
            ];
         },
         deepFreeze: function deepFreeze(oldThing) {
            if (Array.isArray(oldThing)) {
               return Object.freeze(oldThing.map(function (currentValue) {
                  return deepFreeze(currentValue);
               }));
            }
            if (typeof oldThing === 'object') {
               return Object.freeze(Object.keys(oldThing).reduce(function (newObject, prop) {
                  newObject[prop] = deepFreeze(oldThing[prop]);
                  return newObject;
               }, {}));
            }
            return oldThing;
         }
      });

      const self = Object.freeze({
         createCanvas: function (args) {
            const numRows = 20;
            const pixelsPerRow = Math.ceil(Math.min((
               args.isHorizontal
               ? args.height
               : Number.POSITIVE_INFINITY
            ), (
               args.isVertical
               ? args.width
               : Number.POSITIVE_INFINITY
            )) / numRows);
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
         createInfo: () => util.deepFreeze(util.createInfo()),
         getNumRows: (colours) => colours.reduce((numRowsSoFar, stripe) => numRowsSoFar + stripe.rows, 0)
      });

      return self;
   }());

   (function () {
      const updateCounties = function () {
         const countiesElement = document.querySelector('#counties');
         Array.from(countiesElement.childNodes).forEach(function (childNode) {
            childNode.remove();
         });
         countiesInfo.forEach(function (county) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('county');
            newDiv.appendChild(counties.createCanvas({
               county: county,
               height: 120,
               isHorizontal: true,
               width: 144
            }));
            const newDiv2 = document.createElement('div');
            newDiv2.classList.add('county-name');
            newDiv2.textContent = county.countyName;
            newDiv.appendChild(newDiv2);
            countiesElement.appendChild(newDiv);
         });
         const countiesListElement = document.querySelector('#counties-list');
         Array.from(countiesListElement.childNodes).forEach(function (childNode) {
            childNode.remove();
         });
         countiesInfo.forEach(function (county) {
            const newLi = document.createElement('li');
            newLi.classList.add('county');
            newLi.appendChild(counties.createCanvas({
               county: county,
               height: 20,
               isHorizontal: true,
               width: 40
            }));
            newLi.appendChild(counties.createCanvas({
               county: county,
               height: 20,
               isVertical: true,
               width: 80
            }));
            newLi.appendChild(counties.createCanvas({
               county: county,
               height: 40,
               isHorizontal: true,
               isVertical: true,
               width: 80
            }));
            newLi.appendChild(counties.createCanvas({
               county: county,
               height: 80,
               isHorizontal: true,
               isVertical: true,
               width: 40
            }));
            newLi.appendChild(counties.createCanvas({
               county: county,
               height: 1,
               isHorizontal: true,
               width: 1
            }));
            newLi.appendChild(counties.createCanvas({
               county: county,
               height: 1,
               isVertical: true,
               width: 1
            }));
            newLi.appendChild(counties.createCanvas({
               county: county,
               height: 1,
               isHorizontal: true,
               isVertical: true,
               width: 1
            }));
            const newDiv = document.createElement('div');
            newDiv.classList.add('county-name');
            newDiv.textContent = county.chapmanCode.toUpperCase() + ' ' + county.countyName;
            newLi.appendChild(newDiv);
            countiesListElement.appendChild(newLi);
         });
      };

      const countiesInfo = counties.createInfo();
      updateCounties();
   }());
});
