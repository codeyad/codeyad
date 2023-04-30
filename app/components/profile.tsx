import Image from 'next/image'
import profileImage from '../../public/images/profile.png'
import arrowImage from '../../public/images/Arrow.png'
import { Plus_Jakarta_Sans } from 'next/font/google'
const plusJakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: '400',
})

const Profile = () => {
	return (
		<section id='profile' className={`${plusJakarta.className} pb-28 pt-16`}>
			<div className='flex flex-col justify-center items-center space-y-4 px-4 py-40 md:flex-row md:space-y-0 md:space-x-8'>
				<div className='relative flex justify-center items-center w-80 h-80 md:w-96 md:h-96 bg-gradient-radial from-purple-500 from-10%  via-purple-700 via-20% to-darkPurple  to-70% '>
					<Image
						src={profileImage}
						alt=''
						className='rounded-full object-cover w-2/3 h-2/3 '
					/>

					<div className='absolute -top-16 left-56 md:-top-10  md:left-72 flex flex-row-reverse justify-center items-start w-20 md:w-96 h-12'>
						<Image
							className='absolute top-10 -left-14 md:top-0 md:left-0'
							src={arrowImage}
							alt=''
						/>
						<p className='text-center w-full text-lg pl-3 md:pt-5 md:pl-10'>
							Hello!, I'm
							<span className='text-purple-500 animate-pulse font-bold pl-2'>
								Melvis Perez
							</span>
						</p>
					</div>
				</div>

				<div className=' md:w-1/2 flex flex-col  justify-center items-center text-center md:text-left space-y-6'>
					<h1 className='text-5xl md:text-7xl font-bold '>
						Welcome to my personal page...
					</h1>
					<p className='text-lg leading-5 font-thin tracking-wide px-8 md:px-0 w-full'>
						A place where you'll learn about my awesome journey :D
					</p>
				</div>
			</div>

			<div className='flex flex-col justify-center items-center space-y-10 px-4 py-6   max-w-5xl m-auto'>
				<div className='text-center space-y-4 md:text-left min-w-full'>
					<h1 className='text-5xl md:text-6xl font-bold w-full'>
						I'm a Front-End Developer. <span className='animate-ping'>|</span>
					</h1>
					<p className='text-lg leading-5 font-thin tracking-wide px-8 md:px-0 w-full'>
						Currently working at
						<svg
							className='gUZ GjR U9O kVc fill-red-600 bg-white rounded-full mx-0 inline-block'
							height='24'
							width='24'
							viewBox='0 0 24 24'
							aria-hidden='true'
							aria-label=''
							role='img'
						>
							<path d='M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12'></path>
						</svg>{' '}
						<span className='text-red-600'> Pinterest </span>by{' '}
						<svg
							className=' fill-blue-600 bg-white rounded-md mx-0 inline-block'
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
							width='24px'
							height='24px'
							viewBox='0 0 24 24'
							version='1.1'
						>
							<g id='surface1'>
								<path
									style={{
										stroke: 'none',
										fillRule: 'nonzero',
										fillOpacity: 1,
									}}
									d='M 5.144531 0.535156 C 2.625 0.992188 0.730469 2.988281 0.417969 5.488281 C 0.34375 6.054688 0.320312 8.734375 0.34375 12.671875 L 0.375 18.949219 L 0.675781 19.6875 C 1.050781 20.636719 1.316406 21.0625 1.972656 21.757812 C 2.625 22.453125 3.472656 22.976562 4.4375 23.261719 C 5.144531 23.476562 5.355469 23.488281 12 23.488281 C 18.644531 23.488281 18.855469 23.476562 19.5625 23.261719 C 21.386719 22.707031 22.703125 21.417969 23.378906 19.539062 C 23.625 18.84375 23.625 18.800781 23.65625 12.683594 C 23.679688 8.9375 23.644531 6.148438 23.582031 5.550781 C 23.335938 3.300781 21.921875 1.578125 19.640625 0.726562 C 19.027344 0.492188 18.933594 0.480469 12.320312 0.46875 C 8.636719 0.460938 5.410156 0.492188 5.144531 0.535156 Z M 8.773438 3.480469 C 9.449219 3.671875 10.113281 4.25 10.296875 4.773438 C 10.5 5.390625 10.351562 5.808594 9.558594 6.863281 C 7.980469 8.96875 6.363281 11.722656 5.3125 14.070312 C 5.152344 14.445312 4.972656 14.734375 4.90625 14.710938 C 4.691406 14.636719 3.964844 13.300781 3.75 12.609375 C 2.894531 9.863281 3.4375 6.863281 5.121094 5.007812 C 5.816406 4.25 6.460938 3.789062 7.210938 3.511719 C 7.894531 3.265625 8.066406 3.265625 8.773438 3.480469 Z M 15.6875 5.039062 C 17.988281 6.019531 19.683594 8.53125 19.285156 10.398438 C 19.125 11.179688 18.707031 11.699219 17.433594 12.726562 C 15.609375 14.179688 12.652344 15.980469 9.953125 17.296875 C 8.851562 17.828125 8.796875 17.839844 8.355469 17.722656 C 7.070312 17.378906 6.054688 16.058594 6.269531 15.019531 C 6.417969 14.304688 8.796875 10.035156 10.050781 8.21875 C 11.207031 6.554688 12.375 5.304688 13.125 4.941406 C 13.8125 4.613281 14.753906 4.644531 15.6875 5.039062 Z M 19.660156 13.976562 C 19.832031 14.070312 20.121094 14.390625 20.304688 14.679688 C 20.765625 15.417969 20.765625 16.335938 20.304688 17.242188 C 19.800781 18.234375 18.675781 19.300781 17.570312 19.835938 C 15.148438 21 11.980469 20.851562 9.769531 19.453125 C 9.289062 19.152344 9.128906 18.898438 9.429688 18.898438 C 9.535156 18.898438 11.710938 17.851562 12.695312 17.316406 C 14.304688 16.460938 15.804688 15.523438 17.1875 14.53125 C 17.710938 14.15625 18.269531 13.816406 18.417969 13.761719 C 18.769531 13.65625 19.242188 13.738281 19.660156 13.976562 Z M 19.660156 13.976562 '
								/>
								<path
									style={{
										stroke: 'none',
										fillRule: 'nonzero',
										fill: 'rgb(0%,0%,0%)',
										fillOpacity: 1,
									}}
									d='M 22.53125 22.6875 C 22.53125 22.976562 22.554688 23.09375 22.574219 22.921875 C 22.597656 22.761719 22.597656 22.527344 22.574219 22.386719 C 22.554688 22.261719 22.53125 22.386719 22.53125 22.6875 Z M 22.53125 22.6875 '
								/>
								<path
									style={{
										stroke: 'none',
										fillRule: 'nonzero',
										fill: 'rgb(0%,0%,0%)',
										fillOpacity: 1,
									}}
									d='M 22.972656 22.570312 C 22.886719 22.75 22.886719 22.859375 22.972656 22.976562 C 23.066406 23.101562 23.101562 23.058594 23.101562 22.730469 C 23.109375 22.496094 23.109375 22.3125 23.101562 22.3125 C 23.101562 22.3125 23.035156 22.429688 22.972656 22.570312 Z M 22.972656 22.570312 '
								/>
								<path
									style={{
										stroke: 'none',
										fillRule: 'nonzero',
										fill: 'rgb(0%,0%,0%)',
										fillOpacity: 1,
									}}
									d='M 23.582031 22.699219 C 23.582031 22.816406 23.613281 22.847656 23.644531 22.761719 C 23.679688 22.6875 23.667969 22.589844 23.636719 22.558594 C 23.605469 22.515625 23.570312 22.578125 23.582031 22.699219 Z M 23.582031 22.699219 '
								/>
							</g>
						</svg>{' '}
						<span className='text-blue-600'>Bairesdev</span>
					</p>
				</div>

				<div className='text-center space-y-4 md:text-left'>
					<p className='text-lg leading-5 font-thin tracking-wide px-8 md:px-0 w-full'>
						I'm currently working at Front-End developer with 9 years of
						experience, very proficient in javascript and with experience in
						frameworks/libraries like React, Angular and Vuejs. Counting also
						with experience working in Back-End with techs like NodeJS and PHP.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Profile
