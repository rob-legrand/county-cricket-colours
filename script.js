/*jslint browser */

import {counties} from './counties.js';

document.addEventListener('DOMContentLoaded', function () {
   'use strict';

   const updateCounties = function () {

      const includeAlternateColours = false;

      const countiesElement = document.querySelector('#counties');
      countiesElement.replaceChildren(...countiesInfo.map(function (county) {
         const countyDiv = document.createElement('div');
         countyDiv.classList.add('county');
         countyDiv.replaceChildren(
            counties.createCanvas({
               colours: county.colours,
               height: 120,
               isHorizontal: true,
               width: 144
            }),
            (function () {
               const countyNameDiv = document.createElement('div');
               countyNameDiv.classList.add('county-name');
               countyNameDiv.textContent = county.classLevel + ' ' + county.countyName;
               return countyNameDiv;
            }())
         );
         return countyDiv;
      }));

      if (includeAlternateColours) {
         countiesElement.replaceChildren();
         countiesInfo.forEach(function (county) {
            const countyDiv = document.createElement('div');
            countyDiv.classList.add('county');
            countyDiv.append(counties.createCanvas({
               colours: county.colours,
               height: 120,
               isHorizontal: true,
               width: 144
            }));
            const countyNameDiv = document.createElement('div');
            countyNameDiv.classList.add('county-name');
            countyNameDiv.textContent = county.classLevel + ' ' + county.countyName;
            countyDiv.append(countyNameDiv);
            countiesElement.append(countyDiv);
            if (Array.isArray(county.alternateColours)) {
               county.alternateColours.forEach(function (colours) {
                  const countyAlternateDiv = document.createElement('div');
                  countyAlternateDiv.classList.add('county');
                  countyAlternateDiv.append(counties.createCanvas({
                     colours: colours,
                     height: 120,
                     isHorizontal: true,
                     width: 144
                  }));
                  const countyNameAlternateDiv = document.createElement('div');
                  countyNameAlternateDiv.classList.add('county-name');
                  countyNameAlternateDiv.textContent = county.countyName;
                  countyAlternateDiv.append(countyNameAlternateDiv);
                  countiesElement.append(countyAlternateDiv);
               });
            }
         });
      }

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
      const countiesPointsTablesElement = document.querySelector('#counties-points-tables');
      countiesPointsTablesElement.replaceChildren(...classLevels.map(function (classLevel) {
         const newPointsTableDiv = document.createElement('div');
         newPointsTableDiv.classList.add('counties-points-table');
         const newClassLevelDiv = document.createElement('div');
         newClassLevelDiv.textContent = ordinalise(classLevel) + ' class';
         const newPointsTableUl = document.createElement('ul');
         newPointsTableUl.classList.add('counties-list');
         newPointsTableUl.replaceChildren(
            ...countiesInfo.filter(
               (county) => county.classLevel === classLevel
            ).map(function (county, rank) {
               const newLi = document.createElement('li');
               newLi.classList.add('county');
               const newRankDiv = document.createElement('div');
               newRankDiv.classList.add('county-rank');
               newRankDiv.textContent = rank + 1 ?? '-';
               const newCodeDiv = counties.createCountyElement(county);
               newCodeDiv.textContent = county.countyCode.toUpperCase();
               newCodeDiv.classList.add('county-code');
               newCodeDiv.classList.add('county-colour-name');
               const newCountyNameDiv = document.createElement('div');
               newCountyNameDiv.classList.add('county-name');
               newCountyNameDiv.textContent = county.countyName;
               newLi.replaceChildren(
                  newRankDiv,
                  newCodeDiv,
                  counties.createCanvas({
                     colours: county.colours,
                     height: 40,
                     isHorizontal: true,
                     width: 40
                  }),
                  newCountyNameDiv
               );
               return newLi;
            })
         );
         newPointsTableDiv.replaceChildren(newClassLevelDiv, newPointsTableUl);
         return newPointsTableDiv;
      }));

      const countiesListElement = document.querySelector('#counties-list');
      countiesListElement.replaceChildren(...countiesInfo.map(function (county) {
         const newLi = document.createElement('li');
         newLi.classList.add('county');
         const newCodeDiv = counties.createCountyElement(county);
         newCodeDiv.textContent = county.countyCode.toUpperCase();
         newCodeDiv.classList.add('county-code');
         newCodeDiv.classList.add('county-colour-name');
         const newClassDiv = document.createElement('div');
         newClassDiv.classList.add('county-name');
         newClassDiv.textContent = county.classLevel ?? '-';
         const newColourDiv = counties.createCountyElement(county);
         newColourDiv.classList.add('county-colour-name');
         const newColourAbbrevDiv = counties.createCountyElement(county);
         newColourAbbrevDiv.classList.add('county-colour-name');
         newColourAbbrevDiv.textContent = county.countyAbbreviation ?? county.countyName;
         newLi.replaceChildren(
            counties.createCanvas({
               colours: county.colours,
               height: 20,
               isHorizontal: true,
               width: 80
            }),
            counties.createCanvas({
               colours: county.colours,
               height: 20,
               isVertical: true,
               width: 80
            }),
            counties.createCanvas({
               colours: county.colours,
               height: 40,
               isHorizontal: true,
               isVertical: true,
               width: 80
            }),
            counties.createCanvas({
               colours: county.colours,
               height: 80,
               isHorizontal: true,
               isVertical: true,
               width: 40
            }),
            counties.createCanvas({
               colours: county.colours,
               height: 1,
               width: 1
            }),
            counties.createCanvas({
               colours: county.colours,
               height: 1,
               isHorizontal: true,
               width: 20
            }),
            counties.createCanvas({
               colours: county.colours,
               height: 20,
               isVertical: true,
               width: 1
            }),
            counties.createCanvas({
               colours: county.colours,
               height: 1,
               isHorizontal: true,
               isVertical: true,
               width: 1
            }),
            counties.createCanvas({
               colours: county.colours,
               height: 1,
               isHorizontal: true,
               width: 1
            }),
            counties.createCanvas({
               colours: county.colours,
               height: 1,
               isVertical: true,
               width: 1
            }),
            newCodeDiv,
            newClassDiv,
            newColourDiv,
            newColourAbbrevDiv
         );
         return newLi;
      }));
   };

   const countiesInfo = counties.createInfo();
   updateCounties();
});
