import type { NextPage } from 'next'
import { DefaultHead } from '../layouts/Head'
import { Navbar } from '../layouts/Navbar'

const Home: NextPage = () => {
	return (
		<>
			<DefaultHead />
			<Navbar />
		</>
	)
}

export default Home