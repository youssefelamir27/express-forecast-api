Weather Forecast API
A sleek real-time weather application that provides instant weather information for any location worldwide. Built with Node.js, Express, and modern web technologies.
<img width="1685" height="944" alt="image" src="https://github.com/user-attachments/assets/24acddeb-0705-4475-8333-31a089585578" />

🌟 Features

Real-Time Weather Data: Get current temperature, coordinates, and weather conditions
Global Coverage: Search for any city or country worldwide
Beautiful UI: Modern glassmorphism design with smooth animations
Responsive Design: Works seamlessly on desktop, tablet, and mobile devices
Error Handling: User-friendly error messages for invalid locations
Fast & Lightweight: Optimized for quick load times

🚀 Demo
Enter any location name and instantly receive:

Current temperature (°C)
Geographic coordinates (latitude & longitude)
Location details

🛠️ Built With

Backend: Node.js, Express.js
Frontend: Vanilla JavaScript, HTML5, CSS3
Template Engine: Handlebars (HBS)
Weather API: WeatherAPI.com
Icons: Font Awesome

📋 Prerequisites
Make sure you have the following installed:

Node.js (v12.0 or higher)
npm (comes with Node.js)
A free API key from WeatherAPI.com

⚡ Quick Start
1. Clone the repository
bashgit clone https://github.com/youssefelamir27/express-forecast-api.git
cd express-forecast-api
2. Install dependencies
bashnpm install
3. Set up environment variables
Create a .env file in the root directory:
envWEATHER_API_KEY=your_api_key_here
PORT=3002
4. Update the API configuration
Open src/tools/forecastFile.js and replace the hardcoded API key with:
javascriptconst apiKey = process.env.WEATHER_API_KEY;
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${address}`;
5. Run the application
bashnode src/app.js
6. Open in browser
Navigate to http://localhost:3002
🔌 API Usage
Weather Endpoint
Endpoint: GET /weather
Query Parameters:

address (required): City name or country

Example Request:
http://localhost:3002/weather?address=Paris
Example Response:
json{
  "data": {
    "lat": 48.8566,
    "long": 2.3522,
    "temp": 18
  },
  "address": "Paris"
}
Error Response:
json{
  "error": "Location not found"
}
🎨 Features Breakdown
Glassmorphism UI
Modern frosted glass effect with backdrop blur for a premium look
Smooth Animations
Hover effects and transitions for better user experience
Input Validation
Client and server-side validation for robust error handling
Responsive Layout
Mobile-first design that adapts to all screen sizes
🔒 Security Notes

Never commit .env files to version control
Regenerate API keys if accidentally exposed
API keys should always be stored in environment variables
Use .gitignore to exclude sensitive files

🚧 Roadmap

 Add 7-day weather forecast
 Display weather condition icons
 Implement geolocation for automatic location detection
 Add Fahrenheit/Celsius toggle
 Show additional data (humidity, wind speed, pressure)
 Add search history
 Deploy to Heroku/Vercel
 Add unit tests

🤝 Contributing
Contributions, issues, and feature requests are welcome!

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

📝 License
This project is MIT licensed.
👨‍💻 Author
Youssef Elamir

GitHub: @youssefelamir27
Project Link: https://github.com/youssefelamir27/express-forecast-api

🙏 Acknowledgments

WeatherAPI for providing free weather data
Font Awesome for beautiful icons
Express.js for the amazing web framework


⭐ Star this repo if you find it helpful!
Made with ❤️ by Youssef Elamir
