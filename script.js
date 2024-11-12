/*jslint browser */

import {counties} from './counties.js';

document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   const updateCounties = function () {
      const countiesElement = document.querySelector('#counties');
      [...countiesElement.childNodes].forEach(function (childNode) {
         childNode.remove();
      });
      countiesInfo.forEach(function (county) {
         const newDiv = document.createElement('div');
         newDiv.classList.add('county');
         newDiv.append(counties.createCanvas({
            county: county,
            height: 120,
            isHorizontal: true,
            width: 144
         }));
         const newDiv2 = document.createElement('div');
         newDiv2.classList.add('county-name');
         newDiv2.textContent = county.countyName;
         newDiv.append(newDiv2);
         countiesElement.append(newDiv);
      });
      const countiesListElement = document.querySelector('#counties-list');
      [...countiesListElement.childNodes].forEach(function (childNode) {
         childNode.remove();
      });
      countiesInfo.forEach(function (county) {
         const newLi = document.createElement('li');
         newLi.classList.add('county');
         newLi.append(counties.createCanvas({
            county: county,
            height: 20,
            isHorizontal: true,
            width: 80
         }));
         newLi.append(counties.createCanvas({
            county: county,
            height: 20,
            isVertical: true,
            width: 80
         }));
         newLi.append(counties.createCanvas({
            county: county,
            height: 40,
            isHorizontal: true,
            isVertical: true,
            width: 80
         }));
         newLi.append(counties.createCanvas({
            county: county,
            height: 80,
            isHorizontal: true,
            isVertical: true,
            width: 40
         }));
         newLi.append(counties.createCanvas({
            county: county,
            height: 1,
            width: 1
         }));
         newLi.append(counties.createCanvas({
            county: county,
            height: 1,
            isHorizontal: true,
            width: 20
         }));
         newLi.append(counties.createCanvas({
            county: county,
            height: 20,
            isVertical: true,
            width: 1
         }));
         newLi.append(counties.createCanvas({
            county: county,
            height: 1,
            isHorizontal: true,
            isVertical: true,
            width: 1
         }));
         newLi.append(counties.createCanvas({
            county: county,
            height: 1,
            isHorizontal: true,
            width: 1
         }));
         newLi.append(counties.createCanvas({
            county: county,
            height: 1,
            isVertical: true,
            width: 1
         }));
         const newCodeDiv = counties.createCountyElement(county);
         newCodeDiv.textContent = county.countyCode.toUpperCase();
         newCodeDiv.classList.add('county-code');
         newCodeDiv.classList.add('county-colour-name');
         newLi.append(newCodeDiv);
         const newClassDiv = document.createElement('div');
         newClassDiv.classList.add('county-name');
         newClassDiv.textContent = county.classLevel ?? '-';
         newLi.append(newClassDiv);
         const newColourDiv = counties.createCountyElement(county);
         newColourDiv.classList.add('county-colour-name');
         newLi.append(newColourDiv);
         const newColourAbbrevDiv = counties.createCountyElement(county);
         newColourAbbrevDiv.classList.add('county-colour-name');
         newColourAbbrevDiv.textContent = county.countyAbbreviation ?? county.countyName;
         newLi.append(newColourAbbrevDiv);
         countiesListElement.append(newLi);
      });
      const countiesPointsTablesElement = document.querySelector('#counties-points-tables');
      [...countiesPointsTablesElement.childNodes].forEach(function (childNode) {
         childNode.remove();
      });
      const classLevels = [...new Set(
         countiesInfo.map(
            (county) => county.classLevel
         ).filter(
            (classLevel) => Number.isInteger(classLevel)
         )
      )].sort(
         (x, y) => x - y
      );
      const ordinalise = (n) => (
         (!Number.isInteger(n) || n < 0)
         ? n
         : (Math.floor(n / 10) % 10 !== 1 && n % 10 === 1)
         ? n + 'st'
         : (Math.floor(n / 10) % 10 !== 1 && n % 10 === 2)
         ? n + 'nd'
         : (Math.floor(n / 10) % 10 !== 1 && n % 10 === 3)
         ? n + 'rd'
         : n + 'th'
      );
      classLevels.forEach(function (classLevel) {
         const newPointsTableDiv = document.createElement('div');
         newPointsTableDiv.classList.add('counties-points-table');
         const newClassLevelDiv = document.createElement('div');
         newClassLevelDiv.textContent = ordinalise(classLevel) + ' class';
         newPointsTableDiv.append(newClassLevelDiv);
         const newPointsTableUl = document.createElement('ul');
         newPointsTableUl.classList.add('counties-list');
         countiesInfo.filter(
            (county) => county.classLevel === classLevel
         ).forEach(function (county) {
            const newLi = document.createElement('li');
            newLi.classList.add('county');
            const newClassDiv = document.createElement('div');
            newClassDiv.classList.add('county-name');
            newClassDiv.textContent = county.classLevel ?? '-';
            newLi.append(newClassDiv);
            newLi.append(counties.createCanvas({
               county: county,
               height: 1,
               isHorizontal: true,
               width: 20
            }));
            const newCountyNameDiv = document.createElement('div');
            newCountyNameDiv.classList.add('county-name');
            newCountyNameDiv.textContent = county.countyName;
            newLi.append(newCountyNameDiv);
            newPointsTableUl.append(newLi);
         });
         newPointsTableDiv.append(newPointsTableUl);
         countiesPointsTablesElement.append(newPointsTableDiv);
      });
   };

   const countiesInfo = counties.createInfo();
   updateCounties();
});
