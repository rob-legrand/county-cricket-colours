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
      includeSections: {
         colours: true,
         classes: true,
         graphics: true,
         table: true,
         matchups: true
      },
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

   const includeColoursCheckbox = document.querySelector('#include-colours-section');
   const includeClassesCheckbox = document.querySelector('#include-classes-section');
   const includeGraphicsCheckbox = document.querySelector('#include-graphics-section');
   const includeTableCheckbox = document.querySelector('#include-table-section');
   const includeMatchupsCheckbox = document.querySelector('#include-matchups-section');
   const includeClassesFieldset = document.querySelector('#include-classes');
   includeClassesFieldset.replaceChildren(
      counties.createCountyElement({
         elementType: 'legend',
         textContent: 'Include classes'
      }),
      ...allClassLevels.map(
         (classLevel) => counties.createCountyElement({
            elementType: 'label',
            children: [
               counties.createCountyElement({
                  elementType: 'input',
                  attributes: {type: 'checkbox'}
               }),
               document.createTextNode('\u00a0' + ordinalise(classLevel))
            ]
         })
      )
   );
   const includeClassCheckboxes = [...includeClassesFieldset.querySelectorAll('input')];
   const includeEnglandCheckbox = document.querySelector('#include-england');
   const includeWalesCheckbox = document.querySelector('#include-wales');
   const includeScotlandCheckbox = document.querySelector('#include-scotland');
   const showAlternateColoursCheckbox = document.querySelector('#show-alternate-colours');
   const useWelshCountyNamesCheckbox = document.querySelector('#use-welsh-county-names');
   const coloursSection = document.querySelector('#colours-section');
   const classesSection = document.querySelector('#classes-section');
   const graphicsSection = document.querySelector('#graphics-section');
   const tableSection = document.querySelector('#table-section');
   const matchupsSection = document.querySelector('#matchups-section');

   const fitToPrototype = (thingToFit, prototypeThing) => (
      Array.isArray(prototypeThing)
      ? (
         Array.isArray(thingToFit)
         ? thingToFit.map(
            (x, index) => fitToPrototype(
               x,
               prototypeThing?.[
                  index % prototypeThing.length
               ]
            )
         )
         : prototypeThing.map(
            (x, index) => fitToPrototype(
               thingToFit?.[index],
               x
            )
         )
      )
      : typeof prototypeThing === 'object'
      ? Object.fromEntries(
         Object.entries(prototypeThing).map(
            (x) => [
               x[0],
               fitToPrototype(
                  thingToFit?.[x[0]],
                  x[1]
               )
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
      includeColoursCheckbox.checked = options.includeSections.colours;
      includeClassesCheckbox.checked = options.includeSections.classes;
      includeGraphicsCheckbox.checked = options.includeSections.graphics;
      includeTableCheckbox.checked = options.includeSections.table;
      includeMatchupsCheckbox.checked = options.includeSections.matchups;
      includeClassCheckboxes.forEach(function (includeClassCheckbox, whichClassLevel) {
         includeClassCheckbox.checked = options.includeClasses[whichClassLevel];
      });
      includeEnglandCheckbox.checked = options.includeCountries.england;
      includeWalesCheckbox.checked = options.includeCountries.wales;
      includeScotlandCheckbox.checked = options.includeCountries.scotland;
      showAlternateColoursCheckbox.checked = options.showAlternateColours;
      useWelshCountyNamesCheckbox.checked = options.useWelshCountyNames;

      coloursSection.replaceChildren(...(
         options.includeSections.colours
         ? includedCountiesInfo
         : []
      ).map(
         (county) => [
            {
               colours: county.colours,
               text: (
                  county.classLevel ?? '-'
               ) + ' ' + (
                  options.useWelshCountyNames
                  ? county.countyNameInWelsh ?? county.countyName
                  : county.countyName
               )
            },
            ...(
               (
                  options.showAlternateColours
                  && Array.isArray(county.alternateColours)
               )
               ? county.alternateColours.map(
                  (colours) => ({
                     colours: colours,
                     text: (
                        options.useWelshCountyNames
                        ? county.countyNameInWelsh ?? county.countyName
                        : county.countyName
                     )
                  })
               )
               : []
            )
         ]
      ).flat().map(
         (colours) => counties.createCountyElement({
            classList: ['county'],
            children: [
               counties.createCanvas({
                  colours: colours.colours,
                  height: 120,
                  isHorizontal: true,
                  width: 144
               }),
               counties.createCountyElement({
                  classList: ['county-name'],
                  textContent: colours.text
               })
            ]
         })
      ));

      classesSection.replaceChildren(...(
         options.includeSections.classes
         ? includedClassLevels
         : []
      ).map(
         (classLevel) => counties.createCountyElement({
            classList: ['county-class'],
            children: [
               counties.createCountyElement({
                  textContent: ordinalise(classLevel) + ' class'
               }),
               counties.createCountyElement({
                  elementType: 'ul',
                  classList: ['county-list'],
                  children: includedCountiesInfo.filter(
                     (county) => county.classLevel === classLevel
                  ).map(
                     (county, rank) => counties.createCountyElement({
                        elementType: 'li',
                        classList: ['county'],
                        children: [
                           counties.createCountyElement({
                              classList: ['county-rank'],
                              textContent: rank + 1 ?? '-'
                           }),
                           counties.createCountyElement({
                              county: county,
                              classList: ['county-code', 'county-colour-name'],
                              textType: 'countyCode'
                           }),
                           counties.createCanvas({
                              colours: county.colours,
                              height: 40,
                              isHorizontal: true,
                              width: 40
                           }),
                           counties.createCountyElement({
                              county: county,
                              classList: ['county-name'],
                              textType: 'countyName',
                              useWelsh: options.useWelshCountyNames,
                              colourStyle: 'none'
                           })
                        ]
                     })
                  )
               })
            ]
         })
      ));

      graphicsSection.replaceChildren(...(
         options.includeSections.graphics
         ? includedCountiesInfo
         : []
      ).map(
         (county) => counties.createCountyElement({
            elementType: 'li',
            classList: ['county'],
            children: [
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
               counties.createCanvas({
                  colours: county.colours,
                  height: 1,
                  width: 1
               }),
               counties.createCountyElement({
                  county: county,
                  classList: ['county-code', 'county-colour-name'],
                  textType: 'countyCode'
               }),
               counties.createCountyElement({
                  classList: ['county-name'],
                  textContent: county.classLevel ?? '-'
               }),
               counties.createCountyElement({
                  county: county,
                  classList: ['county-colour-name'],
                  textType: 'countyName',
                  useWelsh: options.useWelshCountyNames
               }),
               counties.createCountyElement({
                  county: county,
                  classList: ['county-colour-name'],
                  textType: 'countyAbbreviation'
               })
            ]
         })
      ));

      tableSection.replaceChildren(...(
         options.includeSections.table
         ? includedCountiesInfo
         : []
      ).map(function (county, rank) {
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

      const scoreboardMatchups = includedCountiesInfo.map(
         (ignore, indexRight) => includedCountiesInfo.map(
            (ignore0, indexLeft) => [indexLeft, indexRight]
         )
      ).flat().filter(
         (indices) => indices[0] !== indices[1]
      );
      matchupsSection.replaceChildren(...(
         options.includeSections.matchups
         ? scoreboardMatchups
         : []
      ).map(
         (indices) => counties.createCountyElement({
            classList: ['matchup'],
            children: indices.map(
               (index, which) => counties.createCountyElement({
                  county: includedCountiesInfo[index],
                  classList: ['county-code', 'county-colour-name'],
                  textType: 'countyCode',
                  colourStyle: 'scoreboard',
                  opponentCounty: (
                     which === 1
                     && includedCountiesInfo[indices[0]]
                  )
               })
            )
         })
      ));

      coloursSection.style.display = (
         options.includeSections.colours
         ? ''
         : 'none'
      );
      classesSection.style.display = (
         options.includeSections.classes
         ? ''
         : 'none'
      );
      graphicsSection.style.display = (
         options.includeSections.graphics
         ? ''
         : 'none'
      );
      tableSection.style.display = (
         options.includeSections.table
         ? ''
         : 'none'
      );
      matchupsSection.style.display = (
         options.includeSections.matchups
         ? ''
         : 'none'
      );
   };

   document.querySelector('body').addEventListener('click', function () {
      if (isMenuOpen) {
         isMenuOpen = false;
         updateCounties();
      }
   });
   document.querySelector('#menu').addEventListener('click', function (ev) {
      isMenuOpen = !isMenuOpen;
      updateCounties();
      ev.stopPropagation();
   });
   [...document.querySelectorAll('#options input')].forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
         options.includeSections.colours = includeColoursCheckbox.checked;
         options.includeSections.classes = includeClassesCheckbox.checked;
         options.includeSections.graphics = includeGraphicsCheckbox.checked;
         options.includeSections.table = includeTableCheckbox.checked;
         options.includeSections.matchups = includeMatchupsCheckbox.checked;
         options.includeClasses = includeClassCheckboxes.map(
            (includeClassCheckbox) => includeClassCheckbox.checked
         );
         options.includeCountries.england = includeEnglandCheckbox.checked;
         options.includeCountries.wales = includeWalesCheckbox.checked;
         options.includeCountries.scotland = includeScotlandCheckbox.checked;
         options.showAlternateColours = showAlternateColoursCheckbox.checked;
         options.useWelshCountyNames = useWelshCountyNamesCheckbox.checked;
         updateCounties();
      });
   });
   document.querySelector('#options').addEventListener('click', function (ev) {
      ev.stopPropagation();
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
