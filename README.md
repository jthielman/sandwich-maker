# Sandwich Maker

## Description
This app allows a user to convert temperatures from degrees Fahrenheit to degrees Celsius or vice versa.  The result of the conversion is displayed in a box at the bottom of the page and is color coded according to whether it is a hot, cold or middling temperature.

## Screenshots
The main view:

![Main View](https://raw.githubusercontent.com/jthielman/temperature-converter/master/screenshots/main_view.png)

### Converting temperatures
A hot temperature displays red:

![A hot temperature converted](https://raw.githubusercontent.com/jthielman/temperature-converter/master/screenshots/hot.png)

A cold temperature displays blue:

![A cold temperature converted](https://raw.githubusercontent.com/jthielman/temperature-converter/master/screenshots/cold.png)

A middling temperature displays green:

![A middling temperature converted](https://raw.githubusercontent.com/jthielman/temperature-converter/master/screenshots/middling.png)

## How to Run
- Clone down this project
- Install [http-server](https://www.npmjs.com/package/http-server) from npm
- At the root of this project run the following command: `hs -p 8080`
- In your browser navigate to `https://localhost:8080`