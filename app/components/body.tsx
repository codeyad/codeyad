'use client'

import { Plus_Jakarta_Sans } from 'next/font/google'
import NavBar from './navbar'
import { useState, ReactNode } from 'react'
const plusJakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: '400',
})

const Body = ({ children }: { children: ReactNode }) => {
	const [modalIsOpened, setModalIsOpened] = useState(false)
	return (
		<body
			className={`${plusJakarta.className} ${
				modalIsOpened ? 'overflow-y-hidden' : ''
			}`}
		>
			<NavBar onOpenModal={isOpened => setModalIsOpened(isOpened)} />
			{children}
		</body>
	)
}

export default Body
