\# Weather App



A real-time weather application built with Node.js and Express that allows users to search for weather information by location.



\## Features



\- Search weather by city or country name

\- Display current temperature, latitude, and longitude

\- Real-time data from WeatherAPI

\- Clean and responsive user interface

\- Error handling for invalid locations



\## Technologies Used



\- \*\*Backend:\*\* Node.js, Express.js

\- \*\*Frontend:\*\* HTML, CSS, JavaScript

\- \*\*Template Engine:\*\* Handlebars (HBS)

\- \*\*API:\*\* WeatherAPI

\- \*\*Icons:\*\* Font Awesome



\## Prerequisites



Before running this application, make sure you have:



\- Node.js installed (v12 or higher)

\- npm (Node Package Manager)

\- A WeatherAPI key (get one free at \[weatherapi.com](https://www.weatherapi.com/))



\## Installation



1\. Clone the repository:

```bash

git clone https://github.com/yourusername/weather-app.git

cd weather-app

```



2\. Install dependencies:

```bash

npm install

```



3\. Create a `.env` file in the root directory and add your API key:

```

WEATHER\_API\_KEY=your\_api\_key\_here

PORT=3002

```



4\. Update `forecastFile.js` to use the environment variable instead of the hardcoded API key



\## Usage



1\. Start the server:

```bash

node src/app.js

```



2\. Open your browser and navigate to:

```

http://localhost:3002

```



3\. Enter a city or country name in the search box and click "search"



4\. View the weather information including:

&nbsp;  - Location name

&nbsp;  - Latitude and Longitude

&nbsp;  - Current temperature (in Celsius)



\## Project Structure



```

weather-app/

├── src/

│   ├── app.js              # Express server and routes

│   └── tools/

│       ├── forecastFile.js # Weather API logic

│       └── geocode.js      # Geocoding functionality

├── public/

│   ├── css/

│   │   └── style.css       # Styling

│   ├── js/

│   │   └── script.js       # Frontend JavaScript

│   └── image/              # Background images

├── views/

│   └── index.hbs           # Main HTML template

└── package.json

```



\## API Endpoint



\*\*GET\*\* `/weather?address={location}`



Returns weather data for the specified location.



\*\*Example:\*\*

```

http://localhost:3002/weather?address=London

```



\*\*Response:\*\*

```json

{

&nbsp; "data": {

&nbsp;   "lat": 51.52,

&nbsp;   "long": -0.11,

&nbsp;   "temp": 15

&nbsp; },

&nbsp; "address": "London"

}

```



\## Future Improvements



\- \[ ] Add 7-day forecast

\- \[ ] Display weather icons/conditions

\- \[ ] Add geolocation to detect user's current location

\- \[ ] Implement temperature unit toggle (Celsius/Fahrenheit)

\- \[ ] Add more weather details (humidity, wind speed, etc.)

\- \[ ] Deploy to a live server



\## Contributing



Contributions are welcome! Please feel free to submit a Pull Request.



\## License



This project is open source and available under the \[MIT License](LICENSE).



\## Author



Your Name - \[Your GitHub Profile](https://github.com/yourusername)



\## Acknowledgments



\- Weather data provided by \[WeatherAPI](https://www.weatherapi.com/)

\- Icons from \[Font Awesome](https://fontawesome.com/)



---



\*\*Note:\*\* Remember to never commit your `.env` file or expose your API keys in public repositories.

