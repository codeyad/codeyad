import htmlImage from '../../public/images/html.png'
import css from '../../public/images/css-3.png'
import js from '../../public/images/js.png'
import react from '../../public/images/react.png'
import next from '../../public/images/nexjs.png'

import { Preahvihear } from 'next/font/google'

const preahvihear = Preahvihear({
	subsets: ['latin'],
	weight: '400',
})

const Portfolio = () => {
	return (
		<section id='portfolio' className={`${preahvihear.className}`}>
			<div className='flex flex-col justify-center items-center text-center max-w-7xl py-28 m-auto space-y-10'>
				<h1 className='text-5xl md:text-6xl font-bold w-full'>Portfolio</h1>

				<div className='flex justify-center items-end flex-wrap  space-x-6 py-10 max-w-xs sm:max-w-lg space-y-10'>
					<h3 className='text-3xl md:text-4xl font-bold w-full'>
						Wait, didn't this page impressed you enough?, well, portfolio coming
						soon...
					</h3>
				</div>
			</div>
		</section>
	)
}

export default Portfolio
