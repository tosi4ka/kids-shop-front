'use client'

import { TheHeader } from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import SignInModal from '@/components/Modals'
import navigationsData from '../data/navigation.json'

import truckIcon from '../public/icons/truck.svg'
import shirtIcon from '../public/icons/shirt.svg'
import priceTagIcon from '../public/icons/price tag.svg'
import silhouetteIcon from '../public/icons/silhouette.svg'
import logoIcon from '../public/icons/logo.svg'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<TheHeader />
			<SignInModal />
			<main>{children}</main>
			<TheFooter
				offresData={offresData}
				logo={logoIcon}
				navigationLinksData={navigationLinksData}
				payments={navigationsData.footer.payments}
			/>
		</>
	)
}

export default Layout

const offresData = [
	{
		icon: truckIcon,
		text: 'Бескоштовна доставка на покупки від 1000 ₴'
	},
	{
		icon: shirtIcon,
		text: '30 днів на обмін та повернення'
	},
	{
		icon: priceTagIcon,
		text: 'Тільки оригінальні бренди'
	},
	{
		icon: silhouetteIcon,
		text: 'Програми лояльності для постійних клієнтів'
	}
]

const navigationLinksData = [
	{
		title: 'Наші контакти',
		contacts: navigationsData.footer.contacts,
		socials: navigationsData.footer.socials
	},
	{
		title: 'Допомога',
		linksData: navigationsData.footer.help
	},
	{
		title: 'Часто шукають',
		linksData: navigationsData.footer.often_searched
	}
]
