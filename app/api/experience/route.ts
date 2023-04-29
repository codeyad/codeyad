import { NextResponse } from 'next/server'
import { Experience } from '@/app/interfaces'

const experiences: Experience[] = [
	{
		id: 1,
		position: 'React and Redux Developer',
		company: 'Pinterest by Bairesdev',
		startDate: 'Dec 2021',
		endDate: null,
		description: [
			'Improved performance solving Front-End tasks.',
			`Development, maintenance and improvement of web components that are used by millions of people in our
      website. The tech stack is React, Lit element and Sass.`,
			`Development, maintenance and improvement of web components that are used by millions of people in our
      website. The tech stack is React, Lit element and Sass.`,
		],
	},
	{
		id: 2,
		position: 'Web Developer',
		company: 'Senasa',
		startDate: 'April 2018',
		endDate: 'Dec 2021',
		description: [
			`Developed an app that improved a complex and slow internal process that added value to thousands of customers.
      The main tech stack was Vuejs and C#.`,
			`Decreased the development process in the team by quickly learning and doing different assignments such as web
      development and SQL scripts creation. The main stack was React/Angular, C# and SQL.`,
		],
	},
	{
		id: 3,
		position: 'Web Developer',
		company: 'Fennix Global',
		startDate: 'May 2016',
		endDate: 'April 2017',
		description: [
			`Developed custom features for our google map implementation with real time data from tracking devices. The stack
      used was AngularJS, Google Map API, NodeJS.`,
		],
	},
	{
		id: 4,
		position: 'Developer',
		company: 'Media Revolution',
		startDate: 'March 2014',
		endDate: 'July 2015',
		description: [
			`Improved the team development process by quickly learning and developing what was needed. The stack waved
      from PHP to AngularJS and Ionic.`,
		],
	},
]

export async function GET(request: Request) {
	return NextResponse.json(experiences)
}
