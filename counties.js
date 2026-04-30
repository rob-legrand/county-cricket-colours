/*jslint browser, maxlen: 100 */

import {countiesInfo} from './countiesInfo.js';

const counties = (function () {

   const util = Object.freeze({
      convertToRgb: (colour) => (
         self.isColour(colour)
         ? (
            'rgb('
            + colour[0] + ', '
            + colour[1] + ', '
            + colour[2] + ')'
         )
         : colour
      ),
      crossProduct: (left, right) => left.flatMap(
         // Create an array with all possible pairs of elements from arrays left and right.
         (leftOne) => right.map(
            (rightOne) => [leftOne, rightOne]
         )
      ),
      deepCopy: (oldThing, func) => (
         // Create a new object, deeply copied, with func applied at each level.
         typeof func === 'function'
         ? func
         : (x) => x
      )(
         Array.isArray(oldThing)
         // If it's an array, use map directly.
         ? oldThing.map(
            (x) => util.deepCopy(x, func)
         )
         : typeof oldThing === 'object'
         // If it's a non-array object, we must be less direct.
         ? Object.fromEntries(
            Object.entries(oldThing).map(
               (x) => [x[0], util.deepCopy(x[1], func)]
            )
         )
         // Otherwise, no recursion is required.
         : oldThing
      )
   });

   const self = Object.freeze({
      calcColourDifference: (colorA, colorB) => (
         (colorA[0] - colorB[0]) ** 2
         + (colorA[1] - colorB[1]) ** 2
         + (colorA[2] - colorB[2]) ** 2
      ),
      chooseContrastingColour: (primaryColour) => (
         self.calcColourDifference(
            primaryColour,
            self.namedColours.black
         ) > self.calcColourDifference(
            primaryColour,
            self.namedColours.white
         )
         ? self.namedColours.black
         : self.namedColours.white
      ),
      chooseContrastingScoreboardColours: (homeColours, awayColourses) => (
         (!self.isColour(homeColours) && !self.isColourList(homeColours))
         ? [self.namedColours.cream, self.findFirstColour(awayColourses)]
         : !self.isColourListList(awayColourses)
         ? [self.findFirstColour(homeColours), self.namedColours.cream]
         : self.findMostDifferentColourPair(
            homeColours,
            awayColourses.find(
               (awayColours) => self.calcColourDifference(
                  ...self.findMostDifferentColourPair(
                     homeColours,
                     awayColours
                  )
               ) > 5700
            ) ?? awayColourses[0]
         )
      ),
      chooseScoreboardColours: (homeCounty, awayCounty) => (
         [homeCounty, awayCounty].every(self.hasCountyColours)
         ? self.chooseContrastingScoreboardColours(
            self.listScoreboardColours(homeCounty)[0],
            self.listScoreboardColours(awayCounty)
         )
         : [homeCounty, awayCounty].map(
            (county) => (
               self.hasCountyColours(county)
               ? self.findFirstColour(self.listScoreboardColours(county))
               : self.namedColours.cream
            )
         )
      ),
      createCanvas: function (args) {
         const numRows = 20;
         const pixelsPerRow = Math.ceil(Math.min(
            (
               args.isHorizontal
               ? args.height
               : Number.POSITIVE_INFINITY
            ),
            (
               args.isVertical
               ? args.width
               : Number.POSITIVE_INFINITY
            )
         ) / numRows);
         const newCanvas = document.createElement('canvas');
         if (args.isHorizontal) {
            if (args.isVertical) {
               if (args.width > args.height) {
                  newCanvas.height = numRows * pixelsPerRow;
                  newCanvas.width = Math.max(Math.round(args.width), newCanvas.height);
               } else {
                  newCanvas.width = numRows * pixelsPerRow;
                  newCanvas.height = Math.max(Math.round(args.height), newCanvas.width);
               }
            } else {
               newCanvas.height = numRows * pixelsPerRow;
               newCanvas.width = Math.round(args.width);
            }
         } else {
            if (args.isVertical) {
               newCanvas.width = numRows * pixelsPerRow;
               newCanvas.height = Math.round(args.height);
            } else {
               newCanvas.width = Math.round(args.width);
               newCanvas.height = Math.round(args.height);
            }
         }
         newCanvas.getContext('2d').fillStyle = util.convertToRgb(self.namedColours.cream);
         newCanvas.getContext('2d').fillRect(0, 0, newCanvas.width, newCanvas.height);
         if (args.isHorizontal) {
            args.colours.reduce(
               function (totalRowsSoFar, stripe) {
                  if (Object.hasOwn(stripe, 'colour')) {
                     newCanvas.getContext('2d').fillStyle = util.convertToRgb(stripe.colour);
                     newCanvas.getContext('2d').fillRect(
                        0,
                        totalRowsSoFar,
                        newCanvas.width - (
                           args.isVertical
                           ? newCanvas.height - totalRowsSoFar - stripe.rows * pixelsPerRow
                           : 0
                        ),
                        stripe.rows * pixelsPerRow
                     );
                  }
                  return totalRowsSoFar + stripe.rows * pixelsPerRow;
               },
               Math.round(
                  newCanvas.height - (numRows + self.getNumRows(args.colours)) * pixelsPerRow / 2
               )
            );
         }
         if (args.isVertical) {
            args.colours.reduce(
               function (totalRowsSoFar, stripe) {
                  if (Object.hasOwn(stripe, 'colour')) {
                     newCanvas.getContext('2d').fillStyle = util.convertToRgb(stripe.colour);
                     newCanvas.getContext('2d').fillRect(
                        totalRowsSoFar,
                        0,
                        stripe.rows * pixelsPerRow,
                        newCanvas.height - (
                           args.isHorizontal
                           ? newCanvas.width - totalRowsSoFar - stripe.rows * pixelsPerRow
                           : 0
                        )
                     );
                  }
                  return totalRowsSoFar + stripe.rows * pixelsPerRow;
               },
               Math.round(
                  newCanvas.width - (numRows + self.getNumRows(args.colours)) * pixelsPerRow / 2
               )
            );
         }
         return newCanvas;
      },
      createColourList: (list) => (
         self.isColour(list)
         ? [list]
         : Array.isArray(list)
         ? list.filter(self.isColour)
         : []
      ),
      createColourListList: (list) => (
         self.isColour(list)
         ? [self.createColourList(list)]
         : Array.isArray(list)
         ? list.map(self.createColourList)
         : []
      ),
      createElement: function (options) {
         const newElement = document.createElement(options?.elementType ?? 'div');
         if (typeof options?.attributes === 'object') {
            Object.entries(options.attributes).forEach(function ([name, value]) {
               newElement.setAttribute(name, value);
            });
         }
         if (Array.isArray(options?.classList)) {
            newElement.classList.add(...options.classList);
         }
         newElement.replaceChildren(...(
            Array.isArray(options?.children)
            ? options.children
            : [document.createTextNode(
               options?.textType === 'countyName'
               ? (
                  options?.useWelsh
                  ? options.county?.countyNameInWelsh
                  : undefined
               ) ?? options.county?.countyName ?? ''
               : options?.textType === 'countyAbbreviation'
               ? options.county?.countyAbbreviation ?? options.county?.countyName ?? ''
               : options?.textType === 'countyCode'
               ? options.county?.countyCode?.toUpperCase?.() ?? ''
               : options?.textType === 'chapmanCode'
               ? (
                  options.county?.chapmanCode?.toUpperCase?.()
                  ?? options.county?.countyCode?.toUpperCase?.()
                  ?? ''
               )
               : options?.textType === 'hcsCode'
               ? (
                  options.county?.hcsCode?.toUpperCase?.()
                  ?? options.county?.countyCode?.toUpperCase?.()
                  ?? ''
               )
               : options?.textType === 'classLevel'
               ? options.county?.classLevel ?? '-'
               : options?.textType === 'country'
               ? options.county?.country ?? '-'
               : options?.county?.countyName ?? ''
            )]
         ));
         const scoreboardColour = (
            self.hasCountyColours(options?.homeCounty)
            ? self.chooseScoreboardColours(
               options.homeCounty,
               options?.county
            )[1]
            : self.chooseScoreboardColours(
               options?.county,
               options?.awayCounty
            )[0]
         );
         newElement.style.color = util.convertToRgb(
            self.hasCountyColours(options?.county)
            ? (
               options?.colourStyle === 'none'
               ? ''
               : options?.colourStyle === 'scoreboard'
               ? self.chooseContrastingColour(scoreboardColour)
               : options.county.textColour ?? self.namedColours.cream
            )
            : ''
         );
         newElement.style.backgroundColor = util.convertToRgb(
            self.hasCountyColours(options?.county)
            ? (
               options?.colourStyle === 'none'
               ? ''
               : options?.colourStyle === 'scoreboard'
               ? scoreboardColour
               : options.county.backgroundColour ?? self.namedColours.cream
            )
            : ''
         );
         newElement.style.borderColor = util.convertToRgb(
            self.hasCountyColours(options?.county)
            ? (
               options?.colourStyle === 'none'
               ? ''
               : options?.colourStyle === 'scoreboard'
               ? scoreboardColour
               : (
                  options.county.borderColour
                  ?? options.county.backgroundColour
                  ?? self.namedColours.cream
               )
            )
            : ''
         );
         return newElement;
      },
      createInfo: () => util.deepCopy(countiesInfo, Object.freeze),
      findFirstColour: (list) => (
         self.isColour(list)
         ? list
         : Array.isArray(list)
         ? self.findFirstColour(list?.[0])
         : self.namedColours.cream
      ),
      findMostDifferentColourPair: (leftColours, rightColours) => util.crossProduct(
         self.createColourList(leftColours),
         self.createColourList(rightColours)
      ).reduce(
         (bestPair, newPair) => (
            (
               self.calcColourDifference(...newPair)
               > self.calcColourDifference(...bestPair)
            )
            ? newPair
            : bestPair
         )
      ),
      flipLightness: (colour) => colour.map(
         (colourLevel) => colourLevel + 255 - Math.max(...colour) - Math.min(...colour)
      ),
      getNumRows: (colours) => colours.reduce(
         (numRowsSoFar, stripe) => numRowsSoFar + stripe.rows,
         0
      ),
      hasCountyColours: (county) => self.isColourListList(
         self.listBasicScoreboardColours(county)
      ),
      isColour: (colour) => (
         Array.isArray(colour)
         && colour.length === 3
         && colour.every(
            (colourLevel) => (
               Number.isInteger(colourLevel)
               && colourLevel >= 0
               && colourLevel < 256
            )
         )
      ),
      isColourList: (list) => (
         Array.isArray(list)
         && list.length > 0
         && list.every(self.isColour)
      ),
      isColourListList: (list) => (
         Array.isArray(list)
         && list.length > 0
         && list.every(
            (x) => self.isColour(x) || self.isColourList(x)
         )
      ),
      listBasicScoreboardColours: (county) => [
         ...(
            Array.isArray(county?.scoreboardColours)
            ? county.scoreboardColours
            : []
         ),
         county?.backgroundColour,
         county?.borderColour,
         county?.textColour
      ].filter(
         (x) => self.isColour(x) || self.isColourList(x)
      ),
      listScoreboardColours: (county) => [
         ...self.listBasicScoreboardColours(county),
         ...self.listBasicScoreboardColours(county).map(
            (x) => (
               self.isColour(x)
               ? self.listVariedLightnesses(x)
               : self.isColourList(x)
               ? x.map(self.listVariedLightnesses).flat()
               : []
            )
         ).flat(),
         self.namedColours.darkGrey,
         self.namedColours.lightGrey,
         self.namedColours.cream,
         self.namedColours.black
      ].filter(
         (x) => self.isColour(x) || self.isColourList(x)
      ),
      listVariedLightnesses: (colour) => [
         ...self.listVariedLightnessesLower(colour).toReversed(),
         ...self.listVariedLightnessesHigher(colour)
      ],
      listVariedLightnessesLower: (colour) => Array.from(
         {length: Math.min(...colour)},
         (ignore, index) => colour.map(
            (colourLevel) => colourLevel + index - Math.min(...colour)
         )
      ),
      listVariedLightnessesHigher: (colour) => Array.from(
         {length: 255 - Math.max(...colour)},
         (ignore, index) => colour.map(
            (colourLevel) => colourLevel + index + 1
         )
      ),
      namedColours: {
         black: [0, 0, 0],
         cream: [255, 245, 225],
         darkGrey: [75, 75, 75],
         lightGrey: [180, 180, 180],
         white: [255, 255, 255]
      }
   });

   return self;
}());

export {counties};
