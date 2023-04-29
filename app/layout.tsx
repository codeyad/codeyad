import Body from './components/body'
import './globals.css'

export const metadata = {
	title: 'Codeyad',
	description: "Codeyad's Portfolio Page",
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
