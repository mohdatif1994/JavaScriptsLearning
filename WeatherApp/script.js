async function getWeather() {
    const apiKey = 'e4000a939dcda4cce6b02990d566d6db'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather').innerHTML = error.message;
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;

    weatherDiv.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${description}</p>
    `;
}