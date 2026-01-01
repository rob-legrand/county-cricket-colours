/*jslint browser */

import {counties} from './counties.js';

document.addEventListener('DOMContentLoaded', function () {
   'use strict';
   let isMenuOpen;
   let options;

   const countiesInfo = counties.createInfo();
   const allClassLevels = [...new Set(
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

   const defaultOptions = {
      includeClasses: allClassLevels.map(
         () => true
      ),
      includeCountries: {
         england: true,
         wales: true,
         scotland: true
      },
      showAlternateColours: false,
      useWelshCountyNames: false
   };
   const localStorageKey = 'county-cricket-colours';

   const includeClassesFieldset = document.querySelector('#include-classes');
   includeClassesFieldset.replaceChildren(
      (function () {
         const newLegend = document.createElement('legend');
         newLegend.replaceChildren(document.createTextNode('Include classes'));
         return newLegend;
      }()),
      ...allClassLevels.map(function (classLevel) {
         const newClassLabel = document.createElement('label');
         const newClassCheckbox = document.createElement('input');
         newClassCheckbox.setAttribute('type', 'checkbox');
         newClassLabel.replaceChildren(
            newClassCheckbox,
            document.createTextNode('\u00a0' + ordinalise(classLevel))
         );
         return newClassLabel;
      })
   );
   const includeClassCheckboxes = [...includeClassesFieldset.querySelectorAll('input')];

   const countiesElement = document.querySelector('#counties');
   const includeEnglandCheckbox = document.querySelector('#include-england');
   const includeWalesCheckbox = document.querySelector('#include-wales');
   const includeScotlandCheckbox = document.querySelector('#include-scotland');
   const showAlternateColoursCheckbox = document.querySelector('#show-alternate-colours');
   const useWelshCountyNamesCheckbox = document.querySelector('#use-welsh-county-names');

   const fitToPrototype = (thingToFit, prototypeThing) => (
      Array.isArray(prototypeThing)
      ? prototypeThing.map(
         (x, index) => fitToPrototype(thingToFit?.[index], x)
      )
      : typeof prototypeThing === 'object'
      ? Object.fromEntries(
         Object.entries(prototypeThing).map(
            (x) => [
               x[0],
               fitToPrototype(thingToFit?.[x[0]], x[1])
            ]
         )
      )
      : typeof thingToFit === typeof prototypeThing
      ? thingToFit
      : prototypeThing
   );

   const updateCounties = function () {
      localStorage.setItem(localStorageKey, JSON.stringify(options));

      const includedCountiesInfo = countiesInfo.filter(
         (county) => (
            options.includeClasses[allClassLevels.findIndex(
               (classLevel) => classLevel === county.classLevel
            )]
            && options.includeCountries[county.country.toLowerCase()]
         )
      );
      const includedClassLevels = [...new Set(
         includedCountiesInfo.map(
            (county) => county.classLevel
         ).filter(
            (classLevel) => Number.isInteger(classLevel)
         )
      )].toSorted(
         (x, y) => x - y
      );

      document.querySelector('#options').style.display = (
         isMenuOpen
         ? ''
         : 'none'
      );
      includeClassCheckboxes.forEach(function (includeClassCheckbox, whichClassLevel) {
         includeClassCheckbox.checked = options.includeClasses[whichClassLevel];
      });
      includeEnglandCheckbox.checked = options.includeCountries.england;
      includeWalesCheckbox.checked = options.includeCountries.wales;
      includeScotlandCheckbox.checked = options.includeCountries.scotland;
      showAlternateColoursCheckbox.checked = options.showAlternateColours;
      useWelshCountyNamesCheckbox.checked = options.useWelshCountyNames;

      countiesElement.replaceChildren(...includedCountiesInfo.map(function (county) {
         const countyDiv = document.createElement('div');
         countyDiv.classList.add('county');
         countyDiv.replaceChildren(
            counties.createCanvas({
               colours: county.colours,
               height: 120,
               isHorizontal: true,
               width: 144
            }),
            counties.createCountyElement({
               classList: ['county-name'],
               textContent: (
                  county.classLevel ?? '-'
               ) + ' ' + (
                  options.useWelshCountyNames
                  ? county.countyNameInWelsh ?? county.countyName
                  : county.countyName
               )
            })
         );
         return countyDiv;
      }));
      if (options.showAlternateColours) {
         countiesElement.replaceChildren();
         includedCountiesInfo.forEach(function (county) {
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

      const countiesClassesElement = document.querySelector('#counties-classes');
      countiesClassesElement.replaceChildren(...includedClassLevels.map(function (classLevel) {
         const newClassDiv = document.createElement('div');
         newClassDiv.classList.add('counties-class');
         const newClassLevelDiv = document.createElement('div');
         newClassLevelDiv.textContent = ordinalise(classLevel) + ' class';
         const newClassUl = document.createElement('ul');
         newClassUl.classList.add('counties-list');
         newClassUl.replaceChildren(
            ...includedCountiesInfo.filter(
               (county) => county.classLevel === classLevel
            ).map(function (county, rank) {
               const newLi = document.createElement('li');
               newLi.classList.add('county');
               const newRankDiv = document.createElement('div');
               newRankDiv.classList.add('county-rank');
               newRankDiv.textContent = rank + 1 ?? '-';
               const newCodeDiv = counties.createCountyElement({
                  county: county,
                  classList: ['county-code', 'county-colour-name'],
                  textType: 'countyCode'
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
      countiesListElement.replaceChildren(...includedCountiesInfo.map(function (county) {
         const newLi = document.createElement('li');
         newLi.classList.add('county');
         const newCodeDiv = counties.createCountyElement({
            county: county,
            classList: ['county-code', 'county-colour-name'],
            textType: 'countyCode'
         });
         const newClassDiv = document.createElement('div');
         newClassDiv.classList.add('county-name');
         newClassDiv.textContent = county.classLevel ?? '-';
         const newColourDiv = counties.createCountyElement({
            county: county,
            classList: ['county-colour-name'],
            textType: 'countyName',
            useWelsh: options.useWelshCountyNames
         });
         const newColourAbbrevDiv = counties.createCountyElement({
            county: county,
            classList: ['county-colour-name'],
            textContent: county.countyAbbreviation ?? county.countyName
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
      countiesPointsTableElement.replaceChildren(...includedCountiesInfo.map(function (county, rank) {
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
         const newRankCell = counties.createCountyElement({
            elementType: 'td',
            county: county,
            classList: ['county-colour-name'],
            textContent: rank + 1 ?? '-'
         });
         const newClassCell = counties.createCountyElement({
            elementType: 'td',
            county: county,
            classList: ['county-colour-name'],
            textContent: ordinalise(county.classLevel ?? '-')
         });
         const newCodeCell = counties.createCountyElement({
            elementType: 'td',
            county: county,
            classList: ['county-code', 'county-colour-name'],
            textType: 'countyCode'
         });
         const newCountyNameCells = Array.from(
            {length: 3},
            () => counties.createCountyElement({
               elementType: 'td',
               county: county,
               classList: ['county-colour-name'],
               textType: 'countyName',
               useWelsh: options.useWelshCountyNames
            })
         );
         const newCountryCell = counties.createCountyElement({
            elementType: 'td',
            county: county,
            classList: ['county-colour-name'],
            textType: 'country'
         });
         newPointsTableRow.replaceChildren(
            newCanvasCell,
            newRankCell,
            newClassCell,
            newCodeCell,
            ...newCountyNameCells,
            newCountryCell
         );
         return newPointsTableRow;
      }));

      const countiesScoreboardsElement = document.querySelector('#counties-scoreboards');
      const countyMatchups = includedCountiesInfo.map(
         (ignore, indexLeft) => includedCountiesInfo.map(
            (ignore0, indexRight) => [indexLeft, indexRight]
         )
      ).flat().filter(
         (indices) => indices[0] !== indices[1]
      );
      countiesScoreboardsElement.replaceChildren(
         ...countyMatchups.map(
            (indices) => counties.createCountyElement({
               classList: ['matchup'],
               children: indices.map(
                  (index) => counties.createCountyElement({
                     county: includedCountiesInfo[index],
                     classList: ['county-code', 'county-colour-name'],
                     textType: 'countyCode',
                     colourStyle: 'scoreboard'
                  })
               )
            })
         )
      );
   };

   document.querySelector('#menu').addEventListener('click', function () {
      isMenuOpen = !isMenuOpen;
      updateCounties();
   });

   const readOptions = function () {
      options.includeClasses = includeClassCheckboxes.map(
         (includeClassCheckbox) => includeClassCheckbox.checked
      );
      options.includeCountries.england = includeEnglandCheckbox.checked;
      options.includeCountries.wales = includeWalesCheckbox.checked;
      options.includeCountries.scotland = includeScotlandCheckbox.checked;
      options.showAlternateColours = showAlternateColoursCheckbox.checked;
      options.useWelshCountyNames = useWelshCountyNamesCheckbox.checked;
      updateCounties();
   };
   [
      ...includeClassCheckboxes,
      includeEnglandCheckbox,
      includeWalesCheckbox,
      includeScotlandCheckbox,
      showAlternateColoursCheckbox,
      useWelshCountyNamesCheckbox
   ].forEach(function (checkbox) {
      checkbox.addEventListener('change', readOptions);
   });

   isMenuOpen = false;
   options = fitToPrototype(
      (function () {
         try {
            return JSON.parse(localStorage.getItem(localStorageKey));
         } catch (ignore) {
         }
      }()),
      defaultOptions
   );
   updateCounties();
});
