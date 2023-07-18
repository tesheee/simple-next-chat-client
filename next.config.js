/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/socket.io/:path*",
        destination: "http://localhost:4000/socket.io/:path*", // Замените на свой адрес сервера
      },
    ];
  },
};
