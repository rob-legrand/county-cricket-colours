/*jslint browser: true, indent: 3 */

document.addEventListener('DOMContentLoaded', function () {
   'use strict';
   var counties;

   counties = (function () {
      var self, util;

      util = Object.freeze({
         creamColour: 'rgb(255, 248, 240)',
         createInfo: function () {
            return [
               {
                  countyName: 'Surrey',
                  colours: [
                     {rows: 6, colour: 'rgb(84, 46, 4)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(84, 46, 4)'}
                  ]
               }, {
                  countyName: 'Lancashire',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 32, 64)'},
                     {rows: 2, colour: 'rgb(224, 0, 32)'},
                     {rows: 2, colour: 'rgb(0, 96, 32)'},
                     {rows: 5, colour: 'rgb(0, 32, 64)'}
                  ]
               }, {
                  countyName: 'Nottinghamshire',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 64, 0)'},
                     {rows: 4, colour: 'rgb(255, 224, 0)'},
                     {rows: 5, colour: 'rgb(0, 64, 0)'}
                  ]
               }, {
                  countyName: 'Kent',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 32, 64)'},
                     {rows: 3},
                     {rows: 6, colour: 'rgb(0, 32, 64)'}
                  ]
               }, {
                  countyName: 'Middlesex',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 0, 64)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(0, 0, 64)'}
                  ]
               }, {
                  countyName: 'Yorkshire',
                  colours: [
                     //{rows: 5, colour: 'rgb(32, 128, 192)'},
                     {rows: 5, colour: 'rgb(128, 160, 192)'},
                     //{rows: 4, colour: 'rgb(240, 192, 0)'},
                     {rows: 4, colour: 'rgb(248, 224, 96)'},
                     {rows: 5, colour: 'rgb(32, 32, 64)'}
                  ]
               }, {
                  countyName: 'Gloucestershire',
                  colours: [
                     {rows: 4, colour: 'rgb(0, 0, 64)'},
                     {rows: 1, colour: 'rgb(224, 192, 128)'},
                     {rows: 1, colour: 'rgb(84, 46, 4)'},
                     {rows: 2},
                     {rows: 1, colour: 'rgb(0, 128, 32)'},
                     {rows: 1, colour: 'rgb(224, 0, 32)'},
                     {rows: 4, colour: 'rgb(0, 0, 64)'}
                  ]
               }, /*{
                  countyName: 'Sussex',
                  colours: [
                     {rows: 1, colour: 'rgb(0, 32, 64)'},
                     {rows: 4},
                     {rows: 1, colour: 'rgb(96, 192, 224)'},
                     {rows: 4},
                     {rows: 1, colour: 'rgb(255, 224, 0)'}
                  ]
               },*/ {
                  countyName: 'Sussex',
                  colours: [
                     {rows: 1, colour: 'rgb(32, 32, 64)'},
                     //{rows: 2, colour: 'rgb(48, 112, 192)'},
                     {rows: 2, colour: 'rgb(64, 160, 224)'},
                     {rows: 1, colour: 'rgb(255, 176, 16)'},
                     //{rows: 2, colour: 'rgb(48, 112, 192)'},
                     {rows: 2, colour: 'rgb(64, 160, 224)'},
                     {rows: 1, colour: 'rgb(32, 32, 64)'}
                  ]
               }, {
                  countyName: 'Somerset',
                  colours: [
                     {rows: 4, colour: 'rgb(96, 0, 32)'},
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 2, colour: 'rgb(192, 192, 192)'},
                     {rows: 2, colour: 'rgb(0, 0, 0)'},
                     {rows: 4, colour: 'rgb(96, 0, 32)'}
                  ]
               }, {
                  countyName: 'Derbyshire',
                  colours: [
                     {rows: 1, colour: 'rgb(255, 224, 0)'},
                     {rows: 6, colour: 'rgb(160, 224, 255)'},
                     {rows: 1, colour: 'rgb(255, 224, 0)'},
                     {rows: 7, colour: 'rgb(84, 46, 4)'}
                  ]
               }, {
                  countyName: 'Leicestershire',
                  colours: [
                     {rows: 2, colour: 'rgb(192, 0, 32)'},
                     {rows: 2},
                     {rows: 5, colour: 'rgb(0, 64, 0)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(192, 0, 32)'}
                  ]
               }, {
                  countyName: 'Warwickshire',
                  colours: [
                     {rows: 4, colour: 'rgb(32, 32, 64)'},
                     {rows: 2, colour: 'rgb(255, 224, 64)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(255, 224, 64)'},
                     {rows: 4, colour: 'rgb(32, 32, 64)'}
                  ]
               }, {
                  countyName: 'Essex',
                  colours: [
                     {rows: 2, colour: 'rgb(0, 0, 96)'},
                     {rows: 3, colour: 'rgb(255, 224, 0)'},
                     {rows: 4, colour: 'rgb(192, 0, 32)'},
                     {rows: 3, colour: 'rgb(255, 224, 0)'},
                     {rows: 2, colour: 'rgb(0, 0, 96)'}
                  ]
               }, {
                  countyName: 'Hampshire',
                  colours: [
                     {rows: 4, colour: 'rgb(0, 0, 64)'},
                     {rows: 2, colour: 'rgb(255, 224, 0)'},
                     {rows: 3},
                     {rows: 2, colour: 'rgb(255, 224, 0)'},
                     {rows: 4, colour: 'rgb(0, 0, 64)'}
                  ]
               }, {
                  countyName: 'Cheshire',
                  colours: [
                     {rows: 6, colour: 'rgb(96, 0, 128)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(0, 0, 0)'}
                  ]
               }, {
                  countyName: 'Staffordshire',
                  colours: [
                     {rows: 6, colour: 'rgb(0, 96, 64)'},
                     {rows: 2, colour: 'rgb(255, 224, 0)'},
                     {rows: 6, colour: 'rgb(0, 96, 64)'}
                  ]
               }, {
                  countyName: 'Devon',
                  colours: [
                     {rows: 3, colour: 'rgb(0, 0, 0)'},
                     {rows: 2, colour: 'rgb(240, 208, 96)'},
                     {rows: 4, colour: 'rgb(0, 64, 192)'},
                     {rows: 2, colour: 'rgb(240, 208, 96)'},
                     {rows: 3, colour: 'rgb(0, 0, 0)'}
                  ]
               }, {
                  countyName: 'Northumberland',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 96, 64)'},
                     {rows: 1, colour: 'rgb(240, 224, 0)'},
                     {rows: 1, colour: 'rgb(224, 64, 0)'},
                     {rows: 1, colour: 'rgb(240, 224, 0)'},
                     {rows: 1, colour: 'rgb(224, 64, 0)'},
                     {rows: 1, colour: 'rgb(240, 224, 0)'},
                     {rows: 5, colour: 'rgb(0, 96, 64)'}
                  ]
               }, {
                  countyName: 'Lincolnshire',
                  colours: [
                     {rows: 4, colour: 'rgb(0, 64, 0)'},
                     {rows: 1, colour: 'rgb(255, 224, 0)'},
                     {rows: 4, colour: 'rgb(0, 64, 0)'},
                     {rows: 1, colour: 'rgb(255, 224, 0)'},
                     {rows: 4, colour: 'rgb(0, 64, 0)'}
                  ]
               }, {
                  countyName: 'Durham',
                  colours: [
                     {rows: 5, colour: 'rgb(160, 0, 32)'},
                     {rows: 5, colour: 'rgb(255, 208, 0)'},
                     {rows: 5, colour: 'rgb(0, 0, 128)'}
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
                     {rows: 5, colour: 'rgb(0, 0, 96)'},
                     {rows: 4, colour: 'rgb(192, 0, 0)'},
                     {rows: 5, colour: 'rgb(0, 0, 96)'}
                  ]
               }, {
                  countyName: 'Oxfordshire',
                  colours: [
                     {rows: 6, colour: 'rgb(96, 0, 0)'},
                     {rows: 2, colour: 'rgb(240, 224, 0)'},
                     {rows: 6, colour: 'rgb(0, 0, 80)'}
                  ]
               }, {
                  countyName: 'Shropshire',
                  colours: [
                     {rows: 7, colour: 'rgb(255, 224, 0)'},
                     {rows: 7, colour: 'rgb(0, 32, 128)'}
                  ]
               }, {
                  countyName: 'Bedfordshire',
                  colours: [
                     {rows: 3, colour: 'rgb(64, 0, 128)'},
                     {rows: 4, colour: 'rgb(0, 0, 0)'},
                     {rows: 1, colour: 'rgb(192, 192, 192)'},
                     {rows: 4, colour: 'rgb(0, 0, 0)'},
                     {rows: 3, colour: 'rgb(64, 0, 128)'}
                  ]
               }, {
                  countyName: 'Cumberland',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 96, 32)'},
                     {rows: 4, colour: 'rgb(160, 224, 255)'},
                     {rows: 5, colour: 'rgb(0, 96, 32)'}
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
                     {rows: 7, colour: 'rgb(224, 192, 160)'},
                     {rows: 7, colour: 'rgb(0, 64, 32)'}
                  ]
               }, {
                  countyName: 'Wiltshire',
                  colours: [
                     {rows: 3, colour: 'rgb(0, 128, 0)'},
                     {rows: 3},
                     {rows: 3, colour: 'rgb(0, 128, 0)'},
                     {rows: 3},
                     {rows: 3, colour: 'rgb(0, 128, 0)'}
                  ]
               }, {
                  countyName: 'Cambridgeshire',
                  colours: [
                     {rows: 3, colour: 'rgb(96, 0, 16)'},
                     {rows: 4, colour: 'rgb(160, 224, 255)'},
                     {rows: 4, colour: 'rgb(255, 224, 160)'},
                     {rows: 3, colour: 'rgb(96, 0, 16)'}
                  ]
               }, {
                  countyName: 'Monmouthshire',
                  colours: [
                     {rows: 3, colour: 'rgb(0, 96, 192)'},
                     {rows: 1, colour: 'rgb(255, 224, 0)'},
                     {rows: 3, colour: 'rgb(0, 96, 192)'},
                     {rows: 1, colour: 'rgb(255, 224, 0)'},
                     {rows: 3, colour: 'rgb(0, 0, 0)'},
                     {rows: 1, colour: 'rgb(255, 224, 0)'},
                     {rows: 3, colour: 'rgb(0, 0, 0)'}
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
                     {rows: 1, colour: 'rgb(255, 255, 128)'},
                     {rows: 5, colour: 'rgb(32, 128, 64)'},
                     {rows: 2, colour: 'rgb(255, 255, 128)'},
                     {rows: 5, colour: 'rgb(16, 32, 96)'},
                     {rows: 1, colour: 'rgb(255, 255, 128)'}
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
                     {rows: 2, colour: 'rgb(0, 64, 32)'},
                     {rows: 2},
                     {rows: 2, colour: 'rgb(0, 64, 32)'},
                     {rows: 2},
                     {rows: 6, colour: 'rgb(0, 64, 32)'}
                  ]
               }, {
                  countyName: 'Huntingdonshire',
                  colours: [
                     {rows: 5, colour: 'rgb(0, 0, 48)'},
                     {rows: 4, colour: 'rgb(255, 240, 0)'},
                     {rows: 5, colour: 'rgb(0, 0, 48)'}
                  ]
               /*
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
                  ]
               */
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

      self = {
         createCanvas: function (county, pixelsPerRow, widthToHeightRatio) {
            var newCanvas;
            newCanvas = document.createElement('canvas');
            newCanvas.height = 20 * Math.round(pixelsPerRow);
            newCanvas.width = Math.round(widthToHeightRatio * newCanvas.height);
            newCanvas.getContext('2d').fillStyle = util.creamColour;
            newCanvas.getContext('2d').fillRect(0, 0, newCanvas.width, newCanvas.height);
            county.colours.reduce(function (totalRowsSoFar, stripe) {
               if (stripe.hasOwnProperty('colour')) {
                  newCanvas.getContext('2d').fillStyle = stripe.colour;
                  newCanvas.getContext('2d').fillRect(0, totalRowsSoFar, newCanvas.width, stripe.rows * pixelsPerRow);
               }
               return totalRowsSoFar + stripe.rows * pixelsPerRow;
            }, Math.round((newCanvas.height - self.getNumRows(county.colours) * pixelsPerRow) / 2));
            return newCanvas;
         },
         createInfo: function () {
            return util.deepFreeze(util.createInfo());
         },
         getNumRows: function (colours) {
            return colours.reduce(function (numRowsSoFar, stripe) {
               return numRowsSoFar + stripe.rows;
            }, 0);
         }
      };
      return Object.freeze(self);
   }());

   (function () {
      var countiesInfo, updateCounties;

      updateCounties = function () {
         var countiesElement;
         countiesElement = document.querySelector('#counties');
         while (countiesElement.hasChildNodes()) {
            countiesElement.lastChild.remove();
         }
         countiesInfo.forEach(function (county) {
            var newDiv, newDiv2;
            newDiv = document.createElement('div');
            newDiv.classList.add('county');
            newDiv.appendChild(counties.createCanvas(county, 6, 1.2));
            newDiv2 = document.createElement('div');
            newDiv2.classList.add('county-name');
            newDiv2.textContent = county.countyName;
            newDiv.appendChild(newDiv2);
            countiesElement.appendChild(newDiv);
         });
         countiesElement = document.querySelector('#counties-list');
         while (countiesElement.hasChildNodes()) {
            countiesElement.lastChild.remove();
         }
         countiesInfo.forEach(function (county) {
            var newDiv, newLi;
            newLi = document.createElement('li');
            newLi.classList.add('county');
            newLi.appendChild(counties.createCanvas(county, 1, 1.2));
            newDiv = document.createElement('div');
            newDiv.classList.add('county-name');
            newDiv.textContent = county.countyName;
            newLi.appendChild(newDiv);
            countiesElement.appendChild(newLi);
         });
      };

      countiesInfo = counties.createInfo();
      updateCounties();
   }());
}, false);
