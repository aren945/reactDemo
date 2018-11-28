import jsonp from 'jsonp';

interface IjsonpOptions {
  url: string
}

interface Iweather {
  data: {
    alarm: object,
    forecast_1h: object,
    observe: {
      degree: string,
      humidity: string,
      precipitation: string,
      pressure: string,
      update_time: string,
      weather: string,
      weather_code: string,
      weather_short: string,
      wind_direction: string,
      wind_power: string
    }
  }
}

export default class Axios {
  public static jsonp(options: IjsonpOptions): Promise<Iweather> {
    return new Promise((res, rej) => {
      jsonp(options.url, {
        param: 'callback'
      }, (err, data)=> {
         if (!err) {
           res(data)
         } else {
           rej(err)
         }
      })
    })
  }
}
