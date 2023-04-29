'use client'

import { Preahvihear } from 'next/font/google'
import NavBar from './navbar'
import { useState, ReactNode } from 'react'
const preahvihear = Preahvihear({
	subsets: ['latin'],
	weight: '400',
})

export default function Body({ children }: { children: ReactNode }) {
	const [modalIsOpened, setModalIsOpened] = useState(false)
	return (
		<body
			className={`${preahvihear.className} ${
				modalIsOpened ? 'overflow-y-hidden' : ''
			}`}
		>
			<NavBar onOpenModal={isOpened => setModalIsOpened(isOpened)} />
			{children}
		</body>
	)
}
