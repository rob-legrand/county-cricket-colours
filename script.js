/*jslint browser: true, indent: 3 */

document.addEventListener('DOMContentLoaded', function () {
   'use strict';
   var createCountiesInfo;

   createCountiesInfo = function (oldState) {
      var creamColour, info, self, state;

      creamColour = 'rgb(255, 248, 240)';

      info = [
         {
            countyName: 'Surrey',
            colours: [
               {rows: 5, colour: 'rgb(84, 46, 4)'},
               {rows: 2},
               {rows: 5, colour: 'rgb(84, 46, 4)'}
            ]
         }, {
            countyName: 'Lancashire',
            colours: [
               {rows: 4, colour: 'rgb(0, 32, 64)'},
               {rows: 2, colour: 'rgb(192, 0, 32)'},
               {rows: 2, colour: 'rgb(0, 96, 32)'},
               {rows: 4, colour: 'rgb(0, 32, 64)'}
            ]
         }, {
            countyName: 'Nottinghamshire',
            colours: [
               {rows: 4, colour: 'rgb(0, 64, 0)'},
               {rows: 4, colour: 'rgb(255, 224, 0)'},
               {rows: 4, colour: 'rgb(0, 64, 0)'}
            ]
         }, {
            countyName: 'Middlesex',
            colours: [
               {rows: 5, colour: 'rgb(0, 0, 64)'},
               {rows: 2},
               {rows: 5, colour: 'rgb(0, 0, 64)'}
            ]
         }, {
            countyName: 'Cheshire',
            colours: [
               {rows: 5, colour: 'rgb(96, 0, 128)'},
               {rows: 2},
               {rows: 5, colour: 'rgb(0, 0, 0)'}
            ]
         }, {
            countyName: 'Shropshire',
            colours: [
               {rows: 6, colour: 'rgb(255, 224, 0)'},
               {rows: 6, colour: 'rgb(0, 0, 64)'}
            ]
         }
      ];

      state = {
      };
      if (typeof oldState === 'string') {
         try {
            state = JSON.parse(oldState);
         } catch (ignore) {
         }
      }

      self = {
         getColours: function (which) {
            return info[which].colours.map(function (stripe) {
               return stripe.colour ? {
                  colour: stripe.colour,
                  rows: stripe.rows
               } : {
                  rows: stripe.rows
               };
            });
         },
         getCountyName: function (which) {
            return info[which].countyName;
         },
         getCreamColour: function () {
            return creamColour;
         },
         getNumCounties: function () {
            return info.length;
         },
         getNumRows: function (which) {
            return info[which].colours.reduce(function (numRowsSoFar, stripe) {
               return numRowsSoFar + stripe.rows;
            }, 0);
         },
         getState: function () {
            return JSON.stringify(state);
         }
      };
      return Object.freeze(self);
   };

   (function () {
      var countiesInfo, updateCounties;

      updateCounties = function () {
         var countiesElement;
         if (localStorage && localStorage.setItem) {
            localStorage.setItem('CCC colours', countiesInfo.getState());
         }
         countiesElement = document.querySelector('#counties');
         while (countiesElement.hasChildNodes()) {
            countiesElement.lastChild.remove();
         }
         Array.from({length: countiesInfo.getNumCounties()}, function (ignore, whichCounty) {
            var newElement, newElement2, pixelsPerRow;
            pixelsPerRow = 4;
            newElement = document.createElement('div');
            newElement.classList.add('county');
            newElement2 = document.createElement('canvas');
            newElement2.height = 16 * pixelsPerRow;
            newElement2.width = 32 * pixelsPerRow;
            newElement2.getContext('2d').fillStyle = countiesInfo.getCreamColour();
            newElement2.getContext('2d').fillRect(0, 0, newElement2.width, newElement2.height);
            countiesInfo.getColours(whichCounty).reduce(function (totalRowsSoFar, stripe) {
               if (stripe.hasOwnProperty('colour')) {
                  newElement2.getContext('2d').fillStyle = stripe.colour;
                  newElement2.getContext('2d').fillRect(0, totalRowsSoFar, newElement2.width, stripe.rows * pixelsPerRow);
               }
               return totalRowsSoFar + stripe.rows * pixelsPerRow;
            }, (newElement2.height - countiesInfo.getNumRows(whichCounty) * pixelsPerRow) / 2);
            newElement.appendChild(newElement2);
            newElement2 = document.createElement('div');
            newElement2.classList.add('county-name');
            newElement2.textContent = countiesInfo.getCountyName(whichCounty);
            newElement.appendChild(newElement2);
            countiesElement.appendChild(newElement);
         });
      };

      countiesInfo = createCountiesInfo(localStorage && localStorage.getItem && localStorage.getItem('CCC colours'));
      updateCounties();
   }());
}, false);
