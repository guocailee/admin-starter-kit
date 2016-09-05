/**
 * 配置文件
 * @type {Object}
 */
module.exports = {
  port: 9000,
  hosts: {
    donwloadCenter: 'http://192.168.1.207:8001/dispatch',
    accountCenter: 'http://172.17.35.2:8009/dispatch'
  },
  message: {
    'sessionId': '5sus91blxuc5ioss8j6wd45q7',
    'lang': 'zh-CN',
    'tz': '+8:00',
    'platform': 'webatt',
    'agent': 'ZK',
    'intfVer': '1.0.0',
    'sys': 'timecube',
    'sid': '',
    'payload': {
      'params': {}
    }
  }
}
