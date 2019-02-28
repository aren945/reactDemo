import jsonp from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';

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

interface IAjaxOptions {
  url: string,
  data?: {
    params: object
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

  public static ajax(options: IAjaxOptions) {
    const baseUrl = 'https://www.easy-mock.com/mock/5c7533756c6bc45a69241bd1/mockapi';
    return new Promise((resolve, rej) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseUrl,
        timeout: 5000,
        params: (options.data && options.data.params ) || ''
      }).then(res => {
        if (res.status === 200) {
          let data = res.data;
          if (data['code'] === 0) {
            resolve(data);
          } else {
            Modal.info({
              title: '提示',
              content: data['msg']
            })
          }
        } else {
          rej(res.status)
        }
      })
    })
  }
}
