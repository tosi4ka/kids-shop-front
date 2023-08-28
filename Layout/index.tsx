import { TheHeader } from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import SignInModal from '@/components/Modals'
import navigationsData from '../data/navigation.json'

import truckIcon from '../public/icons/truck.svg'
import articlesIcon from '../public/icons/Articles.svg'
import priceTagIcon from '../public/icons/Label.svg'
import giftIcon from '../public/icons/gift.svg'
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
		icon: articlesIcon,
		text: '30 днів на обмін та повернення'
	},
	{
		icon: priceTagIcon,
		text: 'Тільки оригінальні бренди'
	},
	{
		icon: giftIcon,
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
