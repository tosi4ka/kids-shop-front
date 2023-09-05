import { Suspense } from 'react'
import Layout from '.'

const PageLaypot = ({ children }: { children: React.ReactNode }) => {
	return (
		<Suspense fallback='Щось пішло не так'>
			<Layout>{children}</Layout>
		</Suspense>
	)
}

export default PageLaypot
