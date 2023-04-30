'use client'

import { useState } from 'react'
import { Audiowide } from 'next/font/google'
const audioWide = Audiowide({
	subsets: ['latin'],
	weight: '400',
})

interface Props {
	onOpenModal: (isOpened: boolean) => void
}

const NavBar = ({ onOpenModal }: Props) => {
	const [menuIsOpened, setMenuIsOpened] = useState(false)

	const linkitems = [
		{
			title: 'Profile',
			href: '#profile',
		},
		{
			title: 'Experience',
			href: '#experience',
		},
		{
			title: 'Stack',
			href: '#stack',
		},
		{
			title: 'Portfolio',
			href: '#portfolio',
		},
		{
			title: 'Contact',
			href: '#contact',
		},
	]

	const linkList = () =>
		linkitems.map((item, i) => (
			<a
				key={i + 1}
				className=' hover:text-rebeccaPurple  duration-300'
				href={item.href}
			>
				{item.title}
			</a>
		))

	const handleMenu = () => {
		setMenuIsOpened(!menuIsOpened)
		onOpenModal(!menuIsOpened)
	}

	const url = process.env.NODE_ENV === 'development' ? '/' : '/codeyad'

	return (
		<nav className='z-20 w-full flex justify-between items-center px-10 bg-eerieBlack sticky top-0 shadow-2xl shadow-purple-800'>
			<div className='w-1/2 md:flex justify-start items-center spacing-x-4 py-3 font-bold p-0 text-white'>
				<div
					className={`flex flex-col justify-center items-center border-white border-2 bg-purple-500 rounded-full h-16 w-16  overflow-hidden ${audioWide.className}`}
				>
					<a href={url} className='text-3xl'>
						CY
					</a>
					<p className='text-[10px]'>CodeYad</p>
				</div>
			</div>

			<div className='hidden w-1/2 md:flex justify-around space-x-4 py-3 text-white font-bold text-md'>
				{linkList()}
			</div>
			<div
				className={`relative md:hidden hamburger-menu w-7 h-7 cursor-pointer z-30 ${
					menuIsOpened ? 'open' : ''
				}`}
				onClick={handleMenu}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div
				className={`${
					menuIsOpened ? '' : 'hidden'
				} w-screen h-screen absolute top-0 left-0 bg-eerieBlack opacity-90 text-white font-bold text-md `}
			>
				<div
					className='flex flex-col justify-center items-center space-y-5 py-6 h-1/2'
					onClick={handleMenu}
				>
					{linkList()}
				</div>
			</div>
		</nav>
	)
}

export default NavBar
