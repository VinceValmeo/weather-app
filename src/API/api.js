const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b0b79b58a6msh5ff93d3f3e595cfp17235cjsnfdc2bfa88237",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export { geoApiOptions, GEO_API_URL };

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "7ce8e9022bba99fa1814643eef973b68";
