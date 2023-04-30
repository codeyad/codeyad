const url = process.env.NODE_ENV === 'development' ? '' : '/codeyad'

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	output: 'export',
	images: { unoptimized: true },
	trailingSlash: false,
	basePath: url,
}

module.exports = nextConfig
