import SidePanel from '@/components/Profile/SidePanel'
import TitleH from '@/components/Profile/TitleH1'
import UserInfo from '@/components/Profile/userInfo'
import style from './style.module.scss'

const Page = () => {
	return (
		<div className={style.wrapper_profile}>
			<div className={style.side__panel}>
				<SidePanel />
			</div>
			<div className={style.user__data}>
				<div className={style.wrapper__items}>
					<TitleH label={'Мій профіль'} />
				</div>
				<div className={style.wrapp__userInfo}>
					<UserInfo />
				</div>
			</div>
		</div>
	)
}
export default Page
