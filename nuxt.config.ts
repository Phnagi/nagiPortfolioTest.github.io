// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title:"nagi",
      bodyAttrs: { style: ' margin:0; padding: 0;  box-sizing: border-box;' },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
      { 
       
        name: 'viewport', 
        content: 'width=device-width, initial-scale=1', 
      }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  },
  
  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
  ],

  // modules: [
  //   '@nuxt-alt/proxy',
  // ],
  // axios: {
  //   proxy: true
  // },
  // proxy: {
  //   proxies: {
  //     '/api/': {
  //       target: 'http://127.0.0.1:3006',
  //       changeOrigin: true // 允許cors跨域
  //     }
  //   }
  // }


  // modules: [
  //   '@nuxtjs/axios',
  //   '@nuxtjs/proxy'
  // ],
  // axios: {
  //   proxy: true
  // },
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:3000/',
  //     pathRewrite: {
  //       '^/api': '/',
  //     }
  //   }
  // }
  routes: { '/': { prerender: true }, '/*': { cors: true } },

  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:3000/',
          changeOrigin: true
        }
      }
    }
  }

  
})
