/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

// Initialize withPWA with configuration
const withPWA = withPWAInit({
  reactStrictMode: true,
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		buildExcludes: [/middleware-manifest.json$/]
	}
});

// Define the Next.js configuration
const nextConfig = {
  env: {
    mainURL: "http://next.alquran.ru/wp-json",
  },
};

// Export the configuration wrapped with PWA
export default withPWA(nextConfig);
