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
                  colours: [
                     {rows: 6, colour: 'rgb(90, 45, 15)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(90, 45, 15)'}
                  ]
               }, {
                  countyName: 'Lancashire',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 30, 60)'},
                     {rows: 2, colour: 'rgb(225, 0, 30)'},
                     {rows: 2, colour: 'rgb(0, 90, 30)'},
                     {rows: 5, colour: 'rgb(0, 30, 60)'}
                  ]
               }, {
                  countyName: 'Nottinghamshire',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 60, 0)'},
                     {rows: 4, colour: 'rgb(255, 225, 0)'},
                     {rows: 5, colour: 'rgb(0, 60, 0)'}
                  ]
               }, {
                  countyName: 'Kent',
                  colours: [
                     {rows: 6, colour: 'rgb(135, 0, 30)'},
                     {rows: 3},
                     {rows: 6, colour: 'rgb(135, 0, 30)'}
                  ]
               }, {
                  countyName: 'Middlesex',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 0, 60)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(0, 0, 60)'}
                  ]
               }, {
                  countyName: 'Yorkshire',
                  colours: [
                     {rows: 5, colour: 'rgb(135, 165, 195)'},
                     {rows: 4, colour: 'rgb(240, 225, 90)'},
                     {rows: 5, colour: 'rgb(30, 30, 60)'}
                  ]
               }, {
                  countyName: 'Gloucestershire',
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
                  colours: [
                     {rows: 2, colour: 'rgb(0, 30, 90)'},
                     {rows: 5, colour: 'rgb(255, 180, 15)'},
                     {rows: 5, colour: 'rgb(60, 150, 210)'},
                     {rows: 2, colour: 'rgb(0, 30, 90)'}
                  ]
               }, {
                  countyName: 'Somerset',
                  colours: [
                     {rows: 4, colour: 'rgb(105, 0, 30)'},
                     {rows: 2, colour: 'rgb(195, 195, 195)'},
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 2, colour: 'rgb(195, 195, 195)'},
                     {rows: 4, colour: 'rgb(105, 0, 30)'}
                  ]
               }, {
                  countyName: 'Derbyshire',
                  colours: [
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 6, colour: 'rgb(180, 225, 240)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'},
                     {rows: 6, colour: 'rgb(75, 30, 15)'},
                     {rows: 1, colour: 'rgb(255, 225, 0)'}
                  ]
               }, {
                  countyName: 'Leicestershire',
                  colours: [
                     {rows: 2, colour: 'rgb(195, 0, 30)'},
                     {rows: 2},
                     {rows: 5, colour: 'rgb(0, 60, 0)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(195, 0, 30)'}
                  ]
               }, {
                  countyName: 'Warwickshire',
                  colours: [
                     {rows: 4, colour: 'rgb(30, 30, 60)'},
                     {rows: 2, colour: 'rgb(255, 225, 60)'},
                     {rows: 2, colour: 'rgb(240, 240, 240)'},
                     {rows: 2, colour: 'rgb(255, 225, 60)'},
                     {rows: 4, colour: 'rgb(30, 30, 60)'}
                  ]
               }, {
                  countyName: 'Essex',
                  colours: [
                     {rows: 2, colour: 'rgb(0, 0, 90)'},
                     {rows: 3, colour: 'rgb(255, 225, 0)'},
                     {rows: 4, colour: 'rgb(195, 0, 0)'},
                     {rows: 3, colour: 'rgb(255, 225, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'}
                  ]
               }, {
                  countyName: 'Hampshire',
                  colours: [
                     {rows: 4, colour: 'rgb(0, 0, 60)'},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 3},
                     {rows: 2, colour: 'rgb(255, 225, 0)'},
                     {rows: 4, colour: 'rgb(0, 0, 60)'}
                  ]
               }, {
                  countyName: 'Cheshire',
                  colours: [
                     {rows: 6, colour: 'rgb(90, 0, 120)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(0, 0, 0)'}
                  ]
               }, {
                  countyName: 'Staffordshire',
                  colours: [
                     {rows: 6, colour: 'rgb(60, 105, 75)'},
                     {rows: 2, colour: 'rgb(255, 225, 60)'},
                     {rows: 6, colour: 'rgb(60, 105, 75)'}
                  ]
               }, {
                  countyName: 'Devon',
                  colours: [
                     {rows: 3, colour: 'rgb(0, 0, 32)'},
                     {rows: 2, colour: 'rgb(240, 208, 96)'},
                     {rows: 4, colour: 'rgb(0, 64, 192)'},
                     {rows: 2, colour: 'rgb(240, 208, 96)'},
                     {rows: 3, colour: 'rgb(0, 0, 32)'}
                  ]
               }, {
                  countyName: 'Northumberland',
                  colours: [
                     {rows: 5, colour: 'rgb(160, 0, 32)'},
                     {rows: 5, colour: 'rgb(0, 64, 32)'},
                     {rows: 5, colour: 'rgb(240, 224, 0)'}
                  ]
               }, {
                  countyName: 'Lincolnshire',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 64, 0)'},
                     {rows: 2, colour: 'rgb(255, 224, 0)'},
                     {rows: 6, colour: 'rgb(0, 64, 0)'}
                  ]
               }, {
                  countyName: 'Durham',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 0, 96)'},
                     {rows: 4, colour: 'rgb(248, 208, 0)'},
                     {rows: 5, colour: 'rgb(128, 0, 32)'}
                  ]
               }, {
                  countyName: 'Glamorgan',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 32, 64)'},
                     {rows: 2, colour: 'rgb(255, 240, 128)'},
                     {rows: 2, colour: 'rgb(0, 32, 64)'},
                     {rows: 2, colour: 'rgb(255, 240, 128)'},
                     {rows: 5, colour: 'rgb(0, 32, 64)'}
                  ]
               }, {
                  countyName: 'Norfolk',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 0, 80)'},
                     {rows: 2, colour: 'rgb(255, 224, 0)'},
                     {rows: 2, colour: 'rgb(192, 0, 0)'},
                     {rows: 5, colour: 'rgb(0, 0, 80)'}
                  ]
               }, {
                  countyName: 'Hertfordshire',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 64, 0)'},
                     {rows: 2, colour: 'rgb(255, 224, 128)'},
                     {rows: 6, colour: 'rgb(0, 0, 64)'}
                  ]
               }, {
                  countyName: 'Northamptonshire',
                  colours: [
                     {rows: 6, colour: 'rgb(96, 0, 0)'},
                     {rows: 3, colour: 'rgb(255, 224, 0)'},
                     {rows: 6, colour: 'rgb(96, 0, 0)'}
                  ]
               }, {
                  countyName: 'Worcestershire',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 64, 32)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 5, colour: 'rgb(0, 64, 32)'}
                  ]
               }, {
                  countyName: 'Herefordshire',
                  colours: [
                     {rows: 5, colour: 'rgb(180, 0, 30)'},
                     {rows: 1, colour: 'rgb(165, 195, 255)'},
                     {rows: 2, colour: 'rgb(0, 0, 90)'},
                     {rows: 1, colour: 'rgb(165, 195, 255)'},
                     {rows: 5, colour: 'rgb(180, 0, 30)'}
                  ]
               }, {
                  countyName: 'Oxfordshire',
                  colours: [
                     {rows: 6, colour: 'rgb(90, 0, 30)'},
                     {rows: 2, colour: 'rgb(240, 225, 0)'},
                     {rows: 6, colour: 'rgb(0, 30, 75)'}
                  ]
               }, {
                  countyName: 'Shropshire',
                  colours: [
                     {rows: 7, colour: 'rgb(255, 225, 0)'},
                     {rows: 7, colour: 'rgb(0, 30, 120)'}
                  ]
               }, {
                  countyName: 'Bedfordshire',
                  colours: [
                     {rows: 3, colour: 'rgb(60, 0, 150)'},
                     {rows: 4, colour: 'rgb(0, 0, 0)'},
                     {rows: 1, colour: 'rgb(195, 195, 195)'},
                     {rows: 4, colour: 'rgb(0, 0, 0)'},
                     {rows: 3, colour: 'rgb(60, 0, 150)'}
                  ]
               }, {
                  countyName: 'Cumberland',
                  colours: [
                     {rows: 5, colour: 'rgb(160, 0, 32)'},
                     {rows: 5, colour: 'rgb(240, 224, 0)'},
                     {rows: 5, colour: 'rgb(0, 64, 32)'}
                  ]
               }, {
                  countyName: 'Westmorland',
                  colours: [
                     {rows: 5, colour: 'rgb(192, 0, 32)'},
                     {rows: 1},
                     {rows: 2, colour: 'rgb(240, 208, 0)'},
                     {rows: 1},
                     {rows: 5, colour: 'rgb(192, 0, 32)'}
                  ]
               }, {
                  countyName: 'Buckinghamshire',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 75, 30)'},
                     {rows: 1},
                     {rows: 3, colour: 'rgb(195, 195, 210)'},
                     {rows: 1},
                     {rows: 5, colour: 'rgb(0, 75, 30)'}
                  ]
               }, {
                  countyName: 'Wiltshire',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 60, 30)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(0, 60, 30)'}
                  ]
               }, {
                  countyName: 'Cambridgeshire',
                  colours: [
                     {rows: 3, colour: 'rgb(105, 0, 15)'},
                     {rows: 4, colour: 'rgb(165, 225, 225)'},
                     {rows: 4, colour: 'rgb(255, 225, 160)'},
                     {rows: 3, colour: 'rgb(105, 0, 15)'}
                  ]
               }, {
                  countyName: 'Monmouthshire',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 96, 192)'},
                     {rows: 2, colour: 'rgb(255, 224, 0)'},
                     {rows: 6, colour: 'rgb(0, 0, 0)'}
                  ]
               }, {
                  countyName: 'Suffolk',
                  colours: [
                     {rows: 4, colour: 'rgb(128, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 224, 0)'},
                     {rows: 4, colour: 'rgb(128, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 224, 0)'},
                     {rows: 4, colour: 'rgb(128, 0, 0)'}
                  ]
               }, {
                  countyName: 'Berkshire',
                  colours: [
                     {rows: 2, colour: 'rgb(255, 255, 128)'},
                     {rows: 5, colour: 'rgb(32, 128, 64)'},
                     {rows: 2, colour: 'rgb(255, 255, 128)'},
                     {rows: 5, colour: 'rgb(48, 0, 96)'},
                     {rows: 2, colour: 'rgb(255, 255, 128)'}
                  ]
               }, {
                  countyName: 'Cornwall',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 0, 0)'},
                     {rows: 1, colour: 'rgb(224, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 224, 0)'},
                     {rows: 6, colour: 'rgb(0, 0, 0)'}
                  ]
               }, {
                  countyName: 'Dorset',
                  colours: [
                     {rows: 3, colour: 'rgb(0, 75, 30)'},
                     {rows: 3},
                     {rows: 2, colour: 'rgb(0, 75, 30)'},
                     {rows: 3},
                     {rows: 3, colour: 'rgb(0, 75, 30)'}
                  ]
               }, {
                  countyName: 'Huntingdonshire',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 0, 45)'},
                     {rows: 4, colour: 'rgb(255, 240, 0)'},
                     {rows: 5, colour: 'rgb(0, 0, 45)'}
                  ]
               }, {
                  countyName: 'Rutland',
                  colours: [
                     {rows: 4, colour: 'rgb(0, 165, 90)'},
                     {rows: 2, colour: 'rgb(255, 210, 30)'},
                     {rows: 2, colour: 'rgb(0, 150, 90)'},
                     {rows: 2, colour: 'rgb(255, 210, 30)'},
                     {rows: 4, colour: 'rgb(0, 150, 90)'}
                  ]
               }, {
                  countyName: 'Carmarthenshire',
                  colours: [
                     {rows: 2, colour: 'rgb(255, 224, 0)'},
                     {rows: 10, colour: 'rgb(192, 0, 32)'},
                     {rows: 2, colour: 'rgb(255, 224, 0)'}
                  ]
               }, {
                  countyName: 'Pembrokeshire',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 32, 96)'},
                     {rows: 4, colour: 'rgb(192, 224, 255)'},
                     {rows: 5, colour: 'rgb(0, 32, 96)'}
                  ]
               }, {
                  countyName: 'Denbighshire',
                  colours: [
                     {rows: 4, colour: 'rgb(0, 0, 0)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(225, 0, 30)'},
                     {rows: 2},
                     {rows: 4, colour: 'rgb(0, 0, 0)'}
                  ]
               }, {
                  countyName: 'Caernarfonshire',
                  colours: [
                     {rows: 1, colour: 'rgb(255, 240, 15)'},
                     {rows: 5, colour: 'rgb(0, 180, 90)'},
                     {rows: 2, colour: 'rgb(255, 240, 0)'},
                     {rows: 5, colour: 'rgb(0, 180, 90)'},
                     {rows: 1, colour: 'rgb(255, 240, 15)'}
                  ]
               }, {
                  countyName: 'Midlothian',
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

      const self = {
         createCanvas: function (args) {
            const numRows = 20;
            const newCanvas = document.createElement('canvas');
            if (args.isHorizontal) {
               if (args.isVertical) {
                  const pixelsPerRow = Math.ceil(Math.min(args.width, args.height) / numRows);
                  if (args.width > args.height) {
                     newCanvas.height = numRows * pixelsPerRow;
                     newCanvas.width = Math.max(Math.round(args.width), newCanvas.height);
                  } else {
                     newCanvas.width = numRows * pixelsPerRow;
                     newCanvas.height = Math.max(Math.round(args.height), newCanvas.width);
                  }
                  newCanvas.getContext('2d').fillStyle = util.creamColour;
                  newCanvas.getContext('2d').fillRect(0, 0, newCanvas.width, newCanvas.height);
                  args.county.colours.reduce(function (totalRowsSoFar, stripe) {
                     if (stripe.hasOwnProperty('colour')) {
                        newCanvas.getContext('2d').fillStyle = stripe.colour;
                        newCanvas.getContext('2d').fillRect(0, totalRowsSoFar, newCanvas.width - newCanvas.height + totalRowsSoFar + stripe.rows * pixelsPerRow, stripe.rows * pixelsPerRow);
                     }
                     return totalRowsSoFar + stripe.rows * pixelsPerRow;
                  }, Math.round(
                     newCanvas.height - (numRows * pixelsPerRow + self.getNumRows(args.county.colours) * pixelsPerRow) / 2
                  ));
                  args.county.colours.reduce(function (totalRowsSoFar, stripe) {
                     if (stripe.hasOwnProperty('colour')) {
                        newCanvas.getContext('2d').fillStyle = stripe.colour;
                        newCanvas.getContext('2d').fillRect(totalRowsSoFar, 0, stripe.rows * pixelsPerRow, newCanvas.height - newCanvas.width + totalRowsSoFar + stripe.rows * pixelsPerRow);
                     }
                     return totalRowsSoFar + stripe.rows * pixelsPerRow;
                  }, Math.round(
                     newCanvas.width - (numRows * pixelsPerRow + self.getNumRows(args.county.colours) * pixelsPerRow) / 2
                  ));
                  return newCanvas;
               } else {
                  const pixelsPerRow = Math.ceil(args.height / numRows);
                  newCanvas.height = numRows * pixelsPerRow;
                  newCanvas.width = Math.round(args.width);
                  newCanvas.getContext('2d').fillStyle = util.creamColour;
                  newCanvas.getContext('2d').fillRect(0, 0, newCanvas.width, newCanvas.height);
                  args.county.colours.reduce(function (totalRowsSoFar, stripe) {
                     if (stripe.hasOwnProperty('colour')) {
                        newCanvas.getContext('2d').fillStyle = stripe.colour;
                        if (args.isVertical) {
                           newCanvas.getContext('2d').fillRect(totalRowsSoFar, 0, stripe.rows * pixelsPerRow, newCanvas.height);
                        } else {
                           newCanvas.getContext('2d').fillRect(0, totalRowsSoFar, newCanvas.width, stripe.rows * pixelsPerRow);
                        }
                     }
                     return totalRowsSoFar + stripe.rows * pixelsPerRow;
                  }, Math.round(((
                     args.isVertical
                     ? newCanvas.width
                     : newCanvas.height
                  ) - self.getNumRows(args.county.colours) * pixelsPerRow) / 2));
                  return newCanvas;
               }
            } else {
               if (args.isVertical) {
                  const pixelsPerRow = Math.ceil(args.width / numRows);
                  newCanvas.width = numRows * pixelsPerRow;
                  newCanvas.height = Math.round(args.height);
                  newCanvas.getContext('2d').fillStyle = util.creamColour;
                  newCanvas.getContext('2d').fillRect(0, 0, newCanvas.width, newCanvas.height);
                  args.county.colours.reduce(function (totalRowsSoFar, stripe) {
                     if (stripe.hasOwnProperty('colour')) {
                        newCanvas.getContext('2d').fillStyle = stripe.colour;
                        if (args.isVertical) {
                           newCanvas.getContext('2d').fillRect(totalRowsSoFar, 0, stripe.rows * pixelsPerRow, newCanvas.height);
                        } else {
                           newCanvas.getContext('2d').fillRect(0, totalRowsSoFar, newCanvas.width, stripe.rows * pixelsPerRow);
                        }
                     }
                     return totalRowsSoFar + stripe.rows * pixelsPerRow;
                  }, Math.round(((
                     args.isVertical
                     ? newCanvas.width
                     : newCanvas.height
                  ) - self.getNumRows(args.county.colours) * pixelsPerRow) / 2));
                  return newCanvas;
               } else {
                  newCanvas.width = Math.round(args.width);
                  newCanvas.height = Math.round(args.height);
                  newCanvas.getContext('2d').fillStyle = util.creamColour;
                  newCanvas.getContext('2d').fillRect(0, 0, newCanvas.width, newCanvas.height);
                  return newCanvas;
               }
            }
         },
         createInfo: () => util.deepFreeze(util.createInfo()),
         getNumRows: (colours) => colours.reduce((numRowsSoFar, stripe) => numRowsSoFar + stripe.rows, 0)
      };
      return Object.freeze(self);
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
            newDiv.textContent = county.countyName;
            newLi.appendChild(newDiv);
            countiesListElement.appendChild(newLi);
         });
      };

      const countiesInfo = counties.createInfo();
      updateCounties();
   }());
});
