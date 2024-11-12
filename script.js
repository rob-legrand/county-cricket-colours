/*jslint browser */

import {counties} from './counties.js';

document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   (function () {
      const updateCounties = function () {
         const countiesElement = document.querySelector('#counties');
         [...countiesElement.childNodes].forEach(function (childNode) {
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
         [...countiesListElement.childNodes].forEach(function (childNode) {
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
               width: 1
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
            newDiv.textContent = county.chapmanCode.toUpperCase() + ' ' + (county.classLevel ?? '') + ' ' + county.countyName;
            newDiv.textContent = county.chapmanCode.toUpperCase() + ' ' + (county.classLevel ?? '');
            newLi.appendChild(newDiv);
            const newColourDiv = counties.createDiv(county);
            newColourDiv.classList.add('county-colour-name');
            newLi.appendChild(newColourDiv);
            countiesListElement.appendChild(newLi);
         });
      };

      const countiesInfo = counties.createInfo();
      updateCounties();
   }());
});
