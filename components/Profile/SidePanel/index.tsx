import MenuItems from './SidePanelItem'
import UserLogin from './UserLogin'
import style from './styles.module.scss'

const SdePanel = () => {
	return (
		<div className={style.profile__menu}>
			<div className={style.menu__profileName}>
				<UserLogin />
			</div>
			<div className={style.menu__item}>
				<MenuItems />
			</div>
		</div>
	)
}
export default SdePanel
