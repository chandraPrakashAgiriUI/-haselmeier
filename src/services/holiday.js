import axios from 'axios';

const KEY = '6a7dc08e-4f7c-4673-9a3a-f4743397a32d';

export default class HolidayServices {
  static async get(serviceName, countryCode, year) {
    const URL = serviceName === 'holidays'
      ? `https://holidayapi.com/v1/holidays?pretty&key=${KEY}&country=${countryCode}&year=${year}`
      : `https://holidayapi.com/v1/countries?pretty&key=${KEY}`;
    return axios.get(URL);
  }
}
