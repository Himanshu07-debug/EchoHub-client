/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // configuring images so that next can support images from out source
  images : {
    domains : ["avatars.githubusercontent.com"],
  }
};

export default nextConfig;
