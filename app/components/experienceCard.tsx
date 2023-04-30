interface props {
	position: string
	company: string
	startDate: string
	endDate: string | null
	description: string[]
}

const ExperienceCard = ({
	position,
	company,
	startDate,
	endDate,
	description,
}: props) => {
	return (
		<div className='relative bg-eerieBlack z-10 flex justify-center items-center w-full md:w-1/2 m-auto border border-purple-500 rounded-2xl p-4'>
			<div className='w-1/3'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					viewBox='0 0 64 64'
				>
					<defs>
						<style>
							{
								'\n                                .cls-1 {\n                                    fill: url(#linear-gradient);\n                                }\n\n                                .cls-2 {\n                                    fill: url(#linear-gradient-2);\n                                }\n\n                                .cls-3 {\n                                    fill: url(#linear-gradient-3);\n                                }\n\n                                .cls-4 {\n                                    fill: url(#linear-gradient-4);\n                                }\n                            '
							}
						</style>
						<linearGradient
							id='linear-gradient'
							x1={16.49}
							y1={15.68}
							x2={26.94}
							y2={15.68}
							gradientUnits='userSpaceOnUse'
						>
							<stop offset={0} stopColor='#17a6d7' />
							<stop offset={1} stopColor='#9d31fe' />
						</linearGradient>
						<linearGradient
							id='linear-gradient-2'
							x1={16.49}
							y1={32}
							x2={26.94}
							y2={32}
							xlinkHref='#linear-gradient'
						/>
						<linearGradient
							id='linear-gradient-3'
							x1={16.49}
							y1={48.32}
							x2={26.94}
							y2={48.32}
							xlinkHref='#linear-gradient'
						/>
						<linearGradient
							id='linear-gradient-4'
							x1={2.03}
							y1={32}
							x2={61.97}
							y2={32}
							xlinkHref='#linear-gradient'
						/>
					</defs>
					<g id='Layer_84' data-name='Layer 84'>
						<path
							className='cls-1'
							d='M24.94,10H18.49a2,2,0,0,0-2,2v7.35a2,2,0,0,0,2,2h6.45a2,2,0,0,0,2-2V12A2,2,0,0,0,24.94,10Zm-2,7.35H20.49V14h2.45Z'
						/>
						<path
							className='cls-2'
							d='M24.94,26.32H18.49a2,2,0,0,0-2,2v7.36a2,2,0,0,0,2,2h6.45a2,2,0,0,0,2-2V28.32A2,2,0,0,0,24.94,26.32Zm-2,7.36H20.49V30.32h2.45Z'
						/>
						<path
							className='cls-3'
							d='M24.94,42.65H18.49a2,2,0,0,0-2,2V52a2,2,0,0,0,2,2h6.45a2,2,0,0,0,2-2V44.65A2,2,0,0,0,24.94,42.65Zm-2,7.35H20.49V46.65h2.45Z'
						/>
						<path
							className='cls-4'
							d='M60,58H55.06V26.1a2,2,0,0,0-2-2H48V4a2,2,0,0,0-2-2H10.94a2,2,0,0,0-2,2V58H4a2,2,0,0,0,0,4H60A2,2,0,0,0,60,58ZM12.94,6H44V24.1H32.4a2,2,0,0,0-2,2V58H12.94ZM46,58H34.4V28.1H51.06V58Z'
						/>
					</g>
				</svg>
			</div>
			<div className='w-2/3'>
				<div className='py-2'>
					<h2 className='text-2xl font-sans font-bold'>{position}</h2>
					<h3 className='text-xl font-sans font-bold'>{company}</h3>
					<h3 className='text-xl font-sans'>
						{startDate} - {endDate || 'Present'}
					</h3>
				</div>
				<ul className='px-4 text-left space-y-2 tracking-normal leading-5'>
					{description.map((text, i) => (
						<li key={i + 1} className='list-disc'>
							<p className='text-md '>{text}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default ExperienceCard
