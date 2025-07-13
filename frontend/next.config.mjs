/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Habilita polling para que funcione el hot reload dentro de Docker
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,            // Revisa cambios cada 1 segundo
      aggregateTimeout: 300, // Espera 300ms antes de recompilar
    };
    return config;
  },
};

export default nextConfig;
