const StyleDictionaryPackage = require('style-dictionary');
const { registerTransforms } = require('@tokens-studio/sd-transforms')

registerTransforms(StyleDictionaryPackage);

StyleDictionaryPackage.registerTransformGroup({
  name: 'styleguide',
  transforms: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"]
});

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

// function getStyleDictionaryConfig(brand, platform) {
//   return {
//     "source": [
//       `tokens/brands/${brand}/*.json`,
//       "tokens/globals/**/*.json",
//       `tokens/platforms/${platform}/*.json`,
//       // `tokens/studio/themes/theme-light.json`,
//     ],
//     "platforms": {
//       "web": {
//         "transformGroup": "tokens-studio",
//         "buildPath": `build/web/${brand}/`,
//         "files": [{
//           "destination": "tokens.scss",
//           "format": "scss/variables"
//         },{
//           "destination": "_variables.css",
//           "format": "css/variables"
//         }]
//       },
//       "android": {
//         "transformGroup": "tokens-studio",
//         "buildPath": `build/android/${brand}/`,
//         "files": [{
//           "destination": "tokens.colors.xml",
//           "template": "android/colors"
//         },{
//           "destination": "tokens.dimens.xml",
//           "template": "android/dimens"
//         },{
//           "destination": "tokens.font_dimens.xml",
//           "template": "android/fontDimens"
//         }]
//       },
//       "ios": {
//         "transformGroup": "tokens-studio",
//         "buildPath": `build/ios/${brand}/`,
//         "files": [{
//           "destination": "tokens.h",
//           "template": "ios/macros"
//         }]
//       },
//       "json": {
//         "transformGroup": "tokens-studio",
//         "buildPath": `build/tokens/${brand}/`,
//         "files": [{
//           "destination": 'tokens.json',
//           "format": 'json/nested'
//         }]
//       },
//       "js": {
//         "buildPath": `build/js/${brand}/`,
//         "transformGroup": "tokens-studio",
//         "files": [
//           // {
//           //   "destination": 'tokens.js',
//           //   "format": 'customFormat',
//           //   "options": {
//           //     "outputReferences": true
//           //   },
//           // },
//           {
//             "destination": "flat.json",
//             "format": "json/flat"
//           },
//           {
//             "destination": "nested.json",
//             "format": "json/nested"
//           },
//           {
//             "destination": "variables.js",
//             "format": "javascript/es6"
//           },
//         ]
//       },
//       "styleguide": {
//         "transformGroup": "styleguide",
//         "buildPath": `dist/styleguide/`,
//         "files": [
//             {
//                 "destination": `${platform}_${brand}.json`,
//                 "format": "json/flat"
//             },
//             {
//                 "destination": `${platform}_${brand}.scss`,
//                 "format": "scss/variables"
//             }
//         ]
//       },
//     }
//   };
// }

function getTokensStudioStyleDictionaryConfig(theme) {
  return {
    "source": [
      `tokens/themes/theme-${theme}.json`,
      'tokens/*.json',
    ],
    "platforms": {
      "web": {
        "transformGroup": "tokens-studio",
        "buildPath": `src/styles/web/${theme}/`,
        "files": [{
          "destination": "tokens.scss",
          "format": "scss/variables"
        },{
          "destination": "_variables.css",
          "format": "css/variables"
        },{
          "destination": 'js_nested.json',
          "format": 'json/nested'
        }]
      },
      "json": {
        "transformGroup": "tokens-studio",
        "buildPath": `src/styles/json/${theme}/`,
        "files": [
          {
            "destination": 'nested.json',
            "format": 'json/nested'
          },
          {
            "destination": "flat.json",
            "format": "json/flat"
          },
        ]
      },
      "js": {
        "buildPath": `src/styles/js/${theme}/`,
        "transformGroup": "tokens-studio",
        "files": [
          // {
          //   "destination": 'tokens.js',
          //   "format": 'customFormat',
          //   "options": {
          //     "outputReferences": true
          //   },
          // },
          {
            "destination": "variables.js",
            "format": "javascript/es6"
          },
        ]
      },
      "styleguide": {
        "transformGroup": "styleguide",
        "buildPath": `dist/styleguide/`,
        "files": [
            {
                "destination": `${theme}.json`,
                "format": "json/flat"
            },
            {
                "destination": `${theme}.scss`,
                "format": "scss/variables"
            }
        ]
      },
    }
  };
}

console.log('Build started...');

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

const BRANDS = ['brand_1', 'brand_2', 'brand_3'];
const PLATFORMS = ['web', 'ios', 'android', 'js', 'json', 'styleguide'];

// BRANDS.map(function (brand) {
//   PLATFORMS.map(function (platform) {

//     console.log('\n==============================================');
//     console.log(`\nProcessing: [${platform}] [${brand}]`);

//     const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand, platform));

//     StyleDictionary.buildPlatform(platform);

//     console.log('\nEnd processing');

//   });
// });

const UI_PLATFORMS = ['web', 'js', 'json'];
const THEMES = ['light', 'dark'];
// UI BERRY TEST
THEMES.map(function (theme) {
  UI_PLATFORMS.map(function (platform) {

    console.log('\n==============================================');
    console.log(`\nProcessing: [${theme}]`);

    const StyleDictionary = StyleDictionaryPackage.extend(getTokensStudioStyleDictionaryConfig(theme));

    StyleDictionary.buildPlatform(platform);

    console.log('\nEnd processing');

  });
});
// console.log('\n==============================================');
// console.log(`\nProcessing: test`);

// const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(brand, platform));

// StyleDictionary.buildPlatform(platform);

console.log('\nEnd processing');

console.log('\n==============================================');
console.log('\nBuild completed!');
