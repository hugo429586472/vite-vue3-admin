const mode = import.meta.env.VITE_BUILD_MODE || 'local'

const hosts = {
  local: {
    host: 'http://occam-demo-api.dev.rccchina.com',
  },
  dev: {
    host: 'http://occam-demo-api.dev.rccchina.com',
  },
  online: {
    host: 'http://occam-demo-api.rccchina.com',
  }
}

const settings = {
  intervalTime: 60,
  homeName: 'home', // 默认打开的首页的路由name值，默认为home
  version: '0.1.2'
}

const domains = {
  local: '',
  dev: '.iccchina.com',
  test: '.iccchina.com',
  online: '.iccchina.com'
}

const vuex_key = 'vite-vue3-admin-vuex'

export default {
  ...hosts[mode],
  ...settings,
  domain: domains[mode],
  vuex_key: vuex_key
}
