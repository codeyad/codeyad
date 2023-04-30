import Body from './components/body'
import './globals.css'

export const metadata = {
	title: 'Codeyad',
	description: "Codeyad's Page",
	icons: {
		icon: [{ url: 'favicon.ico' }],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className='scroll-smooth'>
			<Body>{children}</Body>
		</html>
	)
}
