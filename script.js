/*jslint browser */

import {counties} from './counties.js';

document.addEventListener('DOMContentLoaded', function () {
   'use strict';
   let options;

   const defaultOptions = {
      includeAlternateColours: false,
      useWelshCountyNames: false
   };
   const localStorageKey = 'county-cricket-colours';

   const countiesElement = document.querySelector('#counties');
   const toggleAlternateColoursCheckbox = document.querySelector('#toggle-alternate-colours');
   const toggleWelshNamesCheckbox = document.querySelector('#toggle-welsh-names');

   const updateCounties = function () {
      localStorage.setItem(localStorageKey, JSON.stringify(options));

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
               countyNameDiv.textContent = (
                  county.classLevel ?? '-'
               ) + ' ' + (
                  options.useWelshCountyNames
                  ? county.countyNameInWelsh ?? county.countyName
                  : county.countyName
               );
               return countyNameDiv;
            }())
         );
         return countyDiv;
      }));
      if (options.includeAlternateColours) {
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
            countyNameDiv.textContent = (
               county.classLevel ?? '-'
            ) + ' ' + (
               options.useWelshCountyNames
               ? county.countyNameInWelsh ?? county.countyName
               : county.countyName
            );
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
                  countyNameAlternateDiv.textContent = (
                     options.useWelshCountyNames
                     ? county.countyNameInWelsh ?? county.countyName
                     : county.countyName
                  );
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
      )].toSorted(
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
      const countiesClassesElement = document.querySelector('#counties-classes');
      countiesClassesElement.replaceChildren(...classLevels.map(function (classLevel) {
         const newClassDiv = document.createElement('div');
         newClassDiv.classList.add('counties-class');
         const newClassLevelDiv = document.createElement('div');
         newClassLevelDiv.textContent = ordinalise(classLevel) + ' class';
         const newClassUl = document.createElement('ul');
         newClassUl.classList.add('counties-list');
         newClassUl.replaceChildren(
            ...countiesInfo.filter(
               (county) => county.classLevel === classLevel
            ).map(function (county, rank) {
               const newLi = document.createElement('li');
               newLi.classList.add('county');
               const newRankDiv = document.createElement('div');
               newRankDiv.classList.add('county-rank');
               newRankDiv.textContent = rank + 1 ?? '-';
               const newCodeDiv = counties.createCountyElement(county, {
                  classList: ['county-code', 'county-colour-name'],
                  textContent: county.countyCode.toUpperCase(),
                  useWelshCountyNames: options.useWelshCountyNames
               });
               const newCountyNameDiv = document.createElement('div');
               newCountyNameDiv.classList.add('county-name');
               newCountyNameDiv.textContent = (
                  options.useWelshCountyNames
                  ? county.countyNameInWelsh ?? county.countyName
                  : county.countyName
               );
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
         newClassDiv.replaceChildren(newClassLevelDiv, newClassUl);
         return newClassDiv;
      }));

      const countiesListElement = document.querySelector('#counties-list');
      countiesListElement.replaceChildren(...countiesInfo.map(function (county) {
         const newLi = document.createElement('li');
         newLi.classList.add('county');
         const newCodeDiv = counties.createCountyElement(county, {
            classList: ['county-code', 'county-colour-name'],
            textContent: county.countyCode.toUpperCase(),
            useWelshCountyNames: options.useWelshCountyNames
         });
         const newClassDiv = document.createElement('div');
         newClassDiv.classList.add('county-name');
         newClassDiv.textContent = county.classLevel ?? '-';
         const newColourDiv = counties.createCountyElement(county, {
            classList: ['county-colour-name'],
            useWelshCountyNames: options.useWelshCountyNames
         });
         const newColourAbbrevDiv = counties.createCountyElement(county, {
            classList: ['county-colour-name'],
            textContent: county.countyAbbreviation ?? county.countyName,
            useWelshCountyNames: options.useWelshCountyNames
         });
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

      const countiesPointsTableElement = document.querySelector('#counties-points-table');
      countiesPointsTableElement.replaceChildren(...countiesInfo.map(function (county, rank) {
         const newPointsTableRow = document.createElement('tr');
         const newCanvasCell = document.createElement('td');
         newCanvasCell.classList.add('centered');
         newCanvasCell.replaceChildren(
            counties.createCanvas({
               colours: county.colours,
               height: 40,
               isHorizontal: true,
               width: 40
            })
         );
         const newRankCell = counties.createCountyElement(county, {
            elementType: 'td',
            classList: ['county-colour-name'],
            textContent: rank + 1 ?? '-',
            useWelshCountyNames: options.useWelshCountyNames
         });
         const newClassCell = counties.createCountyElement(county, {
            elementType: 'td',
            classList: ['county-colour-name'],
            textContent: ordinalise(county.classLevel ?? '-'),
            useWelshCountyNames: options.useWelshCountyNames
         });
         const newCodeCell = counties.createCountyElement(county, {
            elementType: 'td',
            classList: ['county-code', 'county-colour-name'],
            textContent: county.countyCode.toUpperCase(),
            useWelshCountyNames: options.useWelshCountyNames
         });
         const newCountyNameCells = Array.from(
            {length: 3},
            function () {
               const newCountyNameCell = counties.createCountyElement(county, {
                  elementType: 'td',
                  classList: ['county-colour-name'],
                  useWelshCountyNames: options.useWelshCountyNames
               });
               return newCountyNameCell;
            }
         );
         newPointsTableRow.replaceChildren(
            newCanvasCell,
            newRankCell,
            newClassCell,
            newCodeCell,
            ...newCountyNameCells
         );
         return newPointsTableRow;
      }));

      toggleAlternateColoursCheckbox.checked = options.includeAlternateColours;
      toggleWelshNamesCheckbox.checked = options.useWelshCountyNames;
   };

   toggleAlternateColoursCheckbox.addEventListener('click', function () {
      options.includeAlternateColours = !options.includeAlternateColours;
      updateCounties();
   });

   toggleWelshNamesCheckbox.addEventListener('click', function () {
      options.useWelshCountyNames = !options.useWelshCountyNames;
      updateCounties();
   });

   const countiesInfo = counties.createInfo();
   options = (function () {
      try {
         return JSON.parse(localStorage.getItem(localStorageKey));
      } catch (ignore) {
      }
   }()) ?? defaultOptions;
   updateCounties();
});
