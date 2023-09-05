import { FC } from 'react'
import Head from 'next/head'

interface MetaProps {
	title: string
	description?: string
}

const Meta: FC<MetaProps> = ({ title, description }) => {
	return (
		<Head>
			<title>{title}</title>
			{description && <meta name='description' content={description} />}
		</Head>
	)
}

export default Meta
