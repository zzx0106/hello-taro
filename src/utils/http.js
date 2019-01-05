// url	String	是		开发者服务器接口地址
// data	Object/String/ArrayBuffer	否		请求的参数
// header	Object	否		设置请求的 header，header 中不能设置 Referer。
// method	String	否	GET	（需大写）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
// dataType	String	否	json	如果设为 json，会尝试对返回的数据做一次 JSON.parse
// responseType	String	否	text	设置响应的数据类型。合法值：text、arraybuffer
// success	Function	否		接口调用成功的回调函数
// fail	Function	否		接口调用失败的回调函数
// complete	Function	否		接口调用结束的回调函数（调用成功、失败都会执行）

// H5 端附加参数说明：

// 参数	类型	必填	默认值	说明
// jsonp	String/Boolean	否		使用 jsonp，且使用此值作为回调函数名
// jsonpCache	Boolean	否	false	jsonp 请求 url 是否需要被缓存
// mode	String	否	same-origin	是否允许跨域请求。有效值：no-cors, cors, same-origin
// credentials	String	否	omit	是否携带 Cookie。有效值：include, same-origin, omit
// cache	String	否	default	缓存模式。有效值：default, no-cache, reload, force-cache, only-if-cached
import Taro from '@tarojs/taro';
import Api from './api';
class Http extends Api {
  constructor(params) {
    super();
    const { baseUrl = '' } = params;
    this.loading = false;
    this.reqcb = null;
    this.rescb = null;
    this.scb = null;
    this.ecb = null;
    this.baseUrl = baseUrl;
    this.options = {
      header: {
        'Content-Type': 'application/json; charset=UTF-8',
        'X-Requested-with': 'XMLHTTPRequest',
      },
      dataType: 'json',
    };
  }
  /**
   * 拦截器
   * @param {Function} reqcb
   * @param {Function} rescb
   */
  interceptor(reqcb, rescb) {
    if (typeof reqcb !== 'function' || typeof rescb !== 'function') {
      throw new Error('reqcb or rescb must be function');
      return;
    }
    this.reqcb = reqcb;
    this.rescb = rescb;
  }
  loading(scb, ecb) {
    if (typeof scb !== 'function' || typeof ecb !== 'function') {
      throw new Error('scb or ecb must be function');
      return;
    }
    this.scb = scb;
    this.ecb = ecb;
  }
  setOptions(options) {
    this.options = {
      ...this.options,
      ...options,
    };
  }
  get(url) {
    new Promise((resolve, reject) => {
      if (this.scb) this.scb();
      Taro.request({
        ...this.options,
        ...{
          url: this.this.baseUrl + url,
          method: 'GET',
          success(res) {
            resolve(res);
          },
          fail(err) {
            reject(err);
          },
          complete() {
            if (this.ecb) this.ecb();
          },
        },
      });
    });
  }
  post(url, data) {
    new Promise((resolve, reject) => {
      if (this.scb) this.scb();
      if (this.reqcb) data = this.reqcb(data);
      Taro.request({
        ...this.options,
        ...{
          url: this.this.baseUrl + url,
          method: 'POST',
          data: JSON.stringify(data),
          success(res) {
            res = this.rescb(res);
            resolve(res);
          },
          fail(err) {
            reject(err);
          },
          complete() {
            if (this.ecb) this.ecb();
          },
        },
      });
    });
  }
  upload(url) {
    const support = ['ALIPAY', 'RN', 'WEAPP'];
    if (support.indexOf(Taro.getEnv()) === -1) {
      throw new Error(`This method(${Taro.getEnv()}) is not supported in this environment`);
      return;
    }
    return Taro.uploadFile({
      url: this.baseUrl + url, 
      filePath: tempFilePaths[0],
      name: 'file',
      formData: {
        user: 'test',
      },
    });
  }
}
