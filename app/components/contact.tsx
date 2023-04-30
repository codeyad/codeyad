import github from '../../public/images/github.png'
import linkedin from '../../public/images/linkedin.png'
import gmail from '../../public/images/gmail.png'
import Image, { StaticImageData } from 'next/image'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: '400',
})

const contactList: { img: StaticImageData; alt: string; href: string }[] = [
	{
		img: github,
		alt: 'github',
		href: 'https://github.com/codeyad',
	},
	{
		img: linkedin,
		alt: 'linkedin',
		href: 'https://www.linkedin.com/in/melvis-perez/',
	},
	{
		img: gmail,
		alt: 'gmail',
		href: 'ing.yadperez@gmail.com',
	},
]

const Contact = () => {
	return (
		<section id='contact' className={`${plusJakarta.className}`}>
			<div className='flex flex-col justify-center items-center text-center max-w-7xl py-28 m-auto space-y-10'>
				<h1 className='text-5xl md:text-6xl font-bold w-full'>Contact Me</h1>

				<div className='flex justify-center gap-6 items-end flex-wrap  space-x-6 py-10 max-w-xs sm:max-w-lg space-y-10'>
					{contactList.map((contact, i) => (
						<div
							key={i + 1}
							className='w-24 flex flex-col justify-center items-center group'
						>
							<a
								href={`${contact.href.includes('@') ? 'mailto:' : ''}${
									contact.href
								}`}
							>
								<Image
									className={`cursor-pointer ${
										contact.alt.includes('git') ? 'bg-white rounded-full' : ''
									}`}
									src={contact.img}
									alt={contact.alt}
								/>
								<div className='bg-purple-500 w-full h-2 rounded-full blur'></div>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Contact
