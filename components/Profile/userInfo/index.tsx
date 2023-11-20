import AddressUser from './Address'
import Children from './Children'
import ContactsUser from './Contacts'
import DataUser from './DataUser'
import Password from './Password'
import style from './styles.module.scss'

const UserInfo = () => {
	return (
		<div className={style.wrapper__info}>
			<DataUser />
			<ContactsUser />
			<AddressUser />
			<Children />
			<Password />
		</div>
	)
}

export default UserInfo
