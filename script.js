/*jslint browser: true, indent: 3 */

document.addEventListener('DOMContentLoaded', function () {
   'use strict';
   var counties;

   counties = (function () {
      var self, util;

      util = {
         createInfo: function () {
            return {
               creamColour: 'rgb(255, 248, 240)',
               counties: [
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
                     countyName: 'Middlesex',
                     colours: [
                        {rows: 6, colour: 'rgb(0, 0, 64)'},
                        {rows: 2},
                        {rows: 6, colour: 'rgb(0, 0, 64)'}
                     ]
                  }, {
                     countyName: 'Yorkshire',
                     colours: [
                        {rows: 5, colour: 'rgb(32, 128, 192)'},
                        {rows: 4, colour: 'rgb(240, 192, 0)'},
                        {rows: 5, colour: 'rgb(32, 32, 64)'}
                     ]
                  }, {
                     countyName: 'Kent',
                     colours: [
                        {rows: 6, colour: 'rgb(0, 32, 64)'},
                        {rows: 3},
                        {rows: 6, colour: 'rgb(0, 32, 64)'}
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
                  }, {
                     countyName: 'Sussex',
                     colours: [
                        {rows: 1, colour: 'rgb(0, 32, 64)'},
                        {rows: 4},
                        {rows: 1, colour: 'rgb(96, 192, 224)'},
                        {rows: 4},
                        {rows: 1, colour: 'rgb(255, 224, 0)'}
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
                     countyName: 'Essex',
                     colours: [
                        {rows: 2, colour: 'rgb(0, 0, 96)'},
                        {rows: 3, colour: 'rgb(255, 224, 0)'},
                        {rows: 4, colour: 'rgb(192, 0, 32)'},
                        {rows: 3, colour: 'rgb(255, 224, 0)'},
                        {rows: 2, colour: 'rgb(0, 0, 96)'}
                     ]
                  }, {
                     countyName: 'Cheshire',
                     colours: [
                        {rows: 6, colour: 'rgb(96, 0, 128)'},
                        {rows: 2},
                        {rows: 6, colour: 'rgb(0, 0, 0)'}
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
                     countyName: 'Warwickshire',
                     colours: [
                        {rows: 4, colour: 'rgb(32, 32, 64)'},
                        {rows: 2, colour: 'rgb(255, 224, 64)'},
                        {rows: 2},
                        {rows: 2, colour: 'rgb(255, 224, 64)'},
                        {rows: 4, colour: 'rgb(32, 32, 64)'}
                     ]
                  }, {
                     countyName: 'Staffordshire',
                     colours: [
                        {rows: 6, colour: 'rgb(0, 96, 64)'},
                        {rows: 2, colour: 'rgb(255, 224, 0)'},
                        {rows: 6, colour: 'rgb(0, 96, 64)'}
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
                     countyName: 'Durham',
                     colours: [
                        {rows: 5, colour: 'rgb(160, 0, 32)'},
                        {rows: 5, colour: 'rgb(255, 208, 0)'},
                        {rows: 5, colour: 'rgb(0, 0, 128)'}
                     ]
                  }, {
                     countyName: 'Northamptonshire',
                     colours: [
                        {rows: 6, colour: 'rgb(96, 0, 0)'},
                        {rows: 3, colour: 'rgb(255, 224, 0)'},
                        {rows: 6, colour: 'rgb(96, 0, 0)'}
                     ]
                  }, {
                     countyName: 'Hertfordshire',
                     colours: [
                        {rows: 6, colour: 'rgb(0, 64, 0)'},
                        {rows: 2, colour: 'rgb(255, 224, 128)'},
                        {rows: 6, colour: 'rgb(0, 0, 64)'}
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
                     countyName: 'Glamorgan',
                     colours: [
                        {rows: 5, colour: 'rgb(0, 32, 64)'},
                        {rows: 2, colour: 'rgb(255, 240, 128)'},
                        {rows: 2, colour: 'rgb(0, 32, 64)'},
                        {rows: 2, colour: 'rgb(255, 240, 128)'},
                        {rows: 5, colour: 'rgb(0, 32, 64)'}
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
                     countyName: 'Oxfordshire',
                     colours: [
                        {rows: 6, colour: 'rgb(96, 0, 0)'},
                        {rows: 2, colour: 'rgb(240, 224, 0)'},
                        {rows: 6, colour: 'rgb(0, 0, 80)'}
                     ]
                  }, {
                     countyName: 'Buckinghamshire',
                     colours: [
                        {rows: 7, colour: 'rgb(224, 192, 160)'},
                        {rows: 7, colour: 'rgb(0, 64, 32)'}
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
                     countyName: 'Bedfordshire',
                     colours: [
                        {rows: 3, colour: 'rgb(64, 0, 96)'},
                        {rows: 4, colour: 'rgb(0, 0, 0)'},
                        {rows: 1, colour: 'rgb(192, 192, 192)'},
                        {rows: 4, colour: 'rgb(0, 0, 0)'},
                        {rows: 3, colour: 'rgb(64, 0, 96)'}
                     ]
                  }, {
                     countyName: 'Shropshire',
                     colours: [
                        {rows: 7, colour: 'rgb(255, 224, 0)'},
                        {rows: 7, colour: 'rgb(0, 32, 128)'}
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
                     countyName: 'Wiltshire',
                     colours: [
                        {rows: 3, colour: 'rgb(0, 128, 0)'},
                        {rows: 3},
                        {rows: 3, colour: 'rgb(0, 128, 0)'},
                        {rows: 3},
                        {rows: 3, colour: 'rgb(0, 128, 0)'}
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
                     countyName: 'Cumberland',
                     colours: [
                        {rows: 5, colour: 'rgb(0, 96, 32)'},
                        {rows: 4, colour: 'rgb(160, 224, 255)'},
                        {rows: 5, colour: 'rgb(0, 96, 32)'}
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
                     countyName: 'Herefordshire',
                     colours: [
                        {rows: 5, colour: 'rgb(0, 0, 96)'},
                        {rows: 4, colour: 'rgb(192, 0, 0)'},
                        {rows: 5, colour: 'rgb(0, 0, 96)'}
                     ]
                  }, {
                     countyName: 'Huntingdonshire',
                     colours: [
                        {rows: 5, colour: 'rgb(0, 0, 48)'},
                        {rows: 4, colour: 'rgb(255, 240, 0)'},
                        {rows: 5, colour: 'rgb(0, 0, 48)'}
                     ]
                  }, {
                     countyName: 'Carmarthenshire',
                     colours: [
                        {rows: 2, colour: 'rgb(255, 224, 0)'},
                        {rows: 10, colour: 'rgb(192, 0, 32)'},
                        {rows: 2, colour: 'rgb(255, 224, 0)'}
                     ]
                  }
               ]
            };
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
      };

      self = {
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
         countiesInfo.counties.forEach(function (county) {
            var newElement, newElement2, pixelsPerRow;
            pixelsPerRow = 6;
            newElement = document.createElement('div');
            newElement.classList.add('county');
            newElement2 = document.createElement('canvas');
            newElement2.height = 20 * pixelsPerRow;
            newElement2.width = 30 * pixelsPerRow;
            newElement2.getContext('2d').fillStyle = countiesInfo.creamColour;
            newElement2.getContext('2d').fillRect(0, 0, newElement2.width, newElement2.height);
            county.colours.reduce(function (totalRowsSoFar, stripe) {
               if (stripe.hasOwnProperty('colour')) {
                  newElement2.getContext('2d').fillStyle = stripe.colour;
                  newElement2.getContext('2d').fillRect(0, totalRowsSoFar, newElement2.width, stripe.rows * pixelsPerRow);
               }
               return totalRowsSoFar + stripe.rows * pixelsPerRow;
            }, Math.round((newElement2.height - counties.getNumRows(county.colours) * pixelsPerRow) / 2));
            newElement.appendChild(newElement2);
            newElement2 = document.createElement('div');
            newElement2.classList.add('county-name');
            newElement2.textContent = county.countyName;
            newElement.appendChild(newElement2);
            countiesElement.appendChild(newElement);
         });
      };

      countiesInfo = counties.createInfo();
      updateCounties();
   }());
}, false);
