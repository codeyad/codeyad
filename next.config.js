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

console.log(
	nextConfig,
	process.env.NODE_ENV,
	'TEST..............................'
)

module.exports = nextConfig
