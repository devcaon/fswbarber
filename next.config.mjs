/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "utfs.io",
			},
			{
				hostname: "instagram.ffor4-1.fna.fbcdn.net",
			},
		],
	},
};

export default nextConfig;
