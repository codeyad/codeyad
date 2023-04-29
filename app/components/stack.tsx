import htmlImage from '../../public/images/html.png'
import css from '../../public/images/css-3.png'
import js from '../../public/images/js.png'
import react from '../../public/images/react.png'
import next from '../../public/images/nexjs.png'
import redux from '../../public/images/redux.png'
import tailwind from '../../public/images/tailwind.png'
import jest from '../../public/images/jest.png'
import sass from '../../public/images/sass.png'
import git from '../../public/images/git.png'
import Image, { StaticImageData } from 'next/image'
import { Preahvihear } from 'next/font/google'

const preahvihear = Preahvihear({
	subsets: ['latin'],
	weight: '400',
})

const stackList: { img: StaticImageData; alt: string }[] = [
	{
		img: htmlImage,
		alt: 'HTML',
	},
	{
		img: css,
		alt: 'CSS 3',
	},
	{
		img: js,
		alt: 'Javascript',
	},
	{
		img: react,
		alt: 'React',
	},
	{
		img: next,
		alt: 'NextJs',
	},
	{
		img: redux,
		alt: 'Redux',
	},
	{
		img: tailwind,
		alt: 'Tailwind',
	},
	{
		img: jest,
		alt: 'Jest',
	},
	{
		img: sass,
		alt: 'Sass',
	},
	{
		img: git,
		alt: 'Git',
	},
]

const Stack = () => {
	return (
		<section id='stack' className={`${preahvihear.className}`}>
			<div className='flex flex-col justify-center items-center text-center max-w-7xl py-28 m-auto space-y-10'>
				<h1 className='text-5xl md:text-6xl font-bold w-full'>Tech Stack</h1>

				<div className='flex justify-center items-end flex-wrap  space-x-6 py-10 max-w-xs sm:max-w-lg space-y-10'>
					{stackList.map((stack, i) => (
						<div
							key={i + 1}
							className='w-12 flex flex-col justify-center items-center group'
						>
							<Image
								className='cursor-pointer animate-bounce hover:animate-none hover:scale-125'
								src={stack.img}
								alt={stack.alt}
							/>
							<div className='bg-purple-500 w-full h-2 rounded-full blur'></div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Stack
