import Profile from './components/profile'
import Experience from './components/experience'
import Stack from './components/stack'
import Portfolio from './components/portfolio'
import Contact from './components/contact'

export default function Home() {
	return (
		<main className='bg-darkPurple w-full min-h-screen text-white '>
			<Profile />
			{/* @ts-expect-error Server Component */}
			<Experience />
			<Stack />
			<Portfolio />
			<Contact />
		</main>
	)
}
