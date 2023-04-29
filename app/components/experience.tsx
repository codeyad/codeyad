import { Preahvihear } from 'next/font/google'
import ExperienceCard from './experienceCard'
import { Experience } from '../interfaces'
const preahvihear = Preahvihear({
	subsets: ['latin'],
	weight: '400',
})

const dev = process.env.NODE_ENV !== 'production'
const server = dev ? 'http://localhost:3000' : 'https://github.com/codeyad'
const getExperience = async (): Promise<Experience[]> => {
	const response = await fetch(`${server}/api/experience`)
	const data = await response.json()
	return data
}
const experiences = getExperience()

export default async function Experience() {
	return (
		<section id='experience' className={`relative ${preahvihear.className}`}>
			<div className='flex flex-col py-28 justify-center items-center text-center space-y-20'>
				<h1 className='text-5xl md:text-6xl font-bold w-full]'>
					Work Experience
				</h1>
				<div>
					{(await experiences).map((experience, i, arr) => (
						<>
							<ExperienceCard key={experience.id} {...experience} />
							{i + 1 !== arr.length ? (
								<div className='w-10 h-24   m-auto bg-purple-500 dark:bg-gradient-to-b from-purple-950 to to-purple-500 '></div>
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
