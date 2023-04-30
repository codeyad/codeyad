import { Plus_Jakarta_Sans } from 'next/font/google'
import ExperienceCard from './experienceCard'
import { Experience as InterfaceExperience } from '../interfaces'
const plusJakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: '400',
})

const dev = process.env.NODE_ENV !== 'production'
const server = dev
	? 'http://localhost:3000'
	: 'https://codeyad.github.io/codeyad'
const getExperience = async (): Promise<InterfaceExperience[]> => {
	const response = await fetch(`${server}/api/experience`)
	const data = await response.json()
	return data.experiences
}
const experiences = getExperience()

const Experience = async () => {
	return (
		<section id='experience' className={`relative ${plusJakarta.className}`}>
			<div className='flex flex-col py-28 justify-center items-center text-center space-y-20 px-4'>
				<h1 className='text-5xl md:text-6xl font-bold w-full'>
					Work Experience
				</h1>
				<div>
					{(await experiences).map((experience, i, arr) => (
						<>
							<ExperienceCard key={experience.id} {...experience} />
							{i + 1 !== arr.length ? (
								<div className='w-10 h-24 m-auto bg-gradient-to-b from-purple-950 to to-purple-500 '></div>
							) : (
								''
							)}
						</>
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience
