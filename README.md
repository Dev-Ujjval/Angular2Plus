Step 1] First of all, we need to create an Angular Application
> ng new locali18

Step 2] Need to install the Angular Language package
> npm install @angular/localize 

Step 3] Now, open the polyfill.ts file and add the below line of code in that file 
import 'zone.js/dist/zone';  // Included with Angular CLI.  
import '@angular/localize/init'  

Step 4] Now, in the application open the app.component.html file and change the existing code with this one

<h1>Static Locale Change</h1>  
<div class="container-fluid">  
    <div class="row">  
        <h1 i18n>Hello i18n!</h1>  
        <h1 i18n="header">An introduction header for this sample</h1>  
        <h1 i18n="@@country">Canada</h1>  
    </div>  
</div> 

Step 5] create the translation file
> ng xi18n --output-path src/locale

Step 6] update the build configuration related to the locale. Need to perform the below changes in the angular.json
```
      "prefix": "app",  
      "i18n": {
        "sourceLocale": "en-US",
        "locales": {
          "en": {
            "translation": "src/locale/messages.xlf"
          },
          "fr": {
            "translation": "src/locale/messages.fr.xlf"
          }
        }
```
```
            "styles": [  
              "src/styles.css"  
            ],  
            "scripts": [],  
            "localize":true  
```
```
"configurations": {
  "production": {
  },
  "fr": {
          "localize": 
          [
            "fr"
          ]
        },
  "en": {
          "localize": 
          [
            "en"
          ]
        }
}

```
```
"configurations": {
  "production": {
    "browserTarget": "localei18:build:production"
  },
  "en": {
    "browserTarget": "localei18:build:en"
  },
  "fr": {
    "browserTarget": "localei18:build:fr"
  }
}
```

Step 7] update the package.json
"scripts": {  
    "ng": "ng",  
    "start": "ng serve --configuration=production",  
    "start:fr": "ng serve --configuration=fr",  
    "start:en": "ng serve --configuration=en",  
    "build": "ng build",  
    "build:prod": "ng build --configuration=production",  
    "test": "ng test",  
    "lint": "ng lint",  
    "e2e": "ng e2e"  
  },

Step 8] Build the project by using `ng build --prod` and it will prepare separate files for each locale.

Step 9] start the application, we can run the application with a specific locale with the npm run start command
> npm run start:fr 


Now we can serve the app with different locales by running `npm run start` OR `npm run start:fr`

We can build the app including all locales by running `npm run build` OR `npm run build:prod`

To test build, we will use `http-server` npm package so install it with `npm i -g http-server`. Now go to your project path & run `http-server dist/localei18`.
