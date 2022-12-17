/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  trailingSlash: true
}
module.exports = (env, argv) => {
  return {   
      devServer: {  
          public: 'http://pcfixarmavir.ru',
      }
    }
  }

module.exports = nextConfig
