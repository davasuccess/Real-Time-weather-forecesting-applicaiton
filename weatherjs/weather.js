class Weather {
  constructor(city, state) {
    this.apiKey = 'bfdb4aaf2e7bd79e9978692ca307664f';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.weatherstack.com/current? access_key = 'bfdb4aaf2e7bd79e9978692ca307664f'${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}