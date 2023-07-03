export function InputEmail(props) {
	const icon = {
		error: icons.error,
		agree: icons.agree,
	};
	if (props.error_1) {
		icon.error = icons.error_1;
	}
	return (
		<div className={style.input_block_out}>
			{/* <div className={theme[props.theme ? props.theme : 'standard']}> */}
			<div className={theme[props.theme]}>
				<input
					className={`
                    ${style.input}
                    ${props.error ? style.input_error : ''}
                    ${props.correct ? style.input_correct : ''}
                    ${props.className}
                    `}
					type='email'
					onChange={props.onChange}
					value={props.value}
					id={
						props.emailFormID
							? props.emailFormID + 'email'
							: 'email'
					}
					name='email'
					style={
						props.uppercase ? { textTransform: 'uppercase' } : null
					}
					placeholder={props.noPlace ? '' : 'Email *'}
				/>
				{props.anotherPlace ? (
					<AddingPlaceholder
						text={
							props.anotherPlace ? props.anotherPlace : 'Email *'
						}
						value={props.value}
					/>
				) : (
					''
				)}
				{props.noIcons ? (
					''
				) : (
					<div className={style.error_icon}>
						{props.error
							? icon.error
							: props.value === ''
							? ''
							: icon.agree}
					</div>
				)}
			</div>
			<div
				className={
					errorTheme[props.errorTheme ? props.errorTheme : 'standard']
				}
			>
				{props.error}
			</div>
		</div>
	);
}

export function InputCall(props) {
	const icon = {
		error: icons.error,
		agree: icons.agree,
	};
	if (props.error_1) {
		icon.error = icons.error_1;
	}
	return (
		<div className={style.input_block_out}>
			{/* <div className={theme[props.theme ? props.theme : 'standard']}> */}
			<div className={theme[props.theme]}>
				<input
					minLength='5'
					maxLength='30'
					className={`
                    ${style.input}
                    ${props.error ? style.input_error : ''}
                    ${props.correct ? style.input_correct : ''}
                    ${props.className}
                    `}
					type='tel'
					style={
						props.uppercase ? { textTransform: 'uppercase' } : null
					}
					id={
						props.phoneFormID
							? props.phoneFormID + 'phoneNumber'
							: 'phoneNumber'
					}
					name='phoneNumber'
					placeholder={
						props.noPlace
							? ''
							: props.en
							? 'Phone number *'
							: 'Телефон *'
					}
					onChange={props.onChange}
					value={props.value}
				/>
				{props.anotherPlace ? (
					<AddingPlaceholder
						text={
							props.anotherPlace
								? props.anotherPlace
								: 'Phone number *'
						}
						value={props.value}
					/>
				) : (
					''
				)}
				{props.noIcons ? (
					''
				) : (
					<div className={style.error_icon}>
						{props.error
							? icon.error
							: props.value === ''
							? ''
							: icon.agree}
					</div>
				)}
			</div>
			<div
				className={
					errorTheme[props.errorTheme ? props.errorTheme : 'standard']
				}
			>
				{props.error}
			</div>
		</div>
	);
}

export function InputName(props) {
	const icon = {
		error: icons.error,
		agree: icons.agree,
	};
	if (props.error_1) {
		icon.error = icons.error_1;
	}
	return (
		<div className={style.input_block_out}>
			{/* <div className={theme[props.theme ? props.theme : 'standard']}> */}
			<div className={theme[props.theme]}>
				<input
					maxLength='30'
					className={`
                    ${style.input}
                    ${props.error ? style.input_error : ''}
                    ${props.correct ? style.input_correct : ''}
                    ${props.className}
                    `}
					style={
						props.uppercase ? { textTransform: 'uppercase' } : null
					}
					id={props.nameFormID ? props.nameFormID + 'name' : 'name'}
					name='name'
					type='name'
					placeholder={
						props.noPlace ? '' : props.en ? 'Name *' : 'Имя *'
					}
					onChange={props.onChange}
					value={props.value}
				/>
				{props.anotherPlace ? (
					<AddingPlaceholder
						text={props.anotherPlace ? props.anotherPlace : 'Имя *'}
						value={props.value}
					/>
				) : (
					''
				)}
				{props.noIcons ? (
					''
				) : (
					<div className={style.error_icon}>
						{props.error
							? icon.error
							: props.value === ''
							? ''
							: icon.agree}
					</div>
				)}
			</div>
			<div
				className={
					errorTheme[props.errorTheme ? props.errorTheme : 'standard']
				}
			>
				{props.error}
			</div>
		</div>
	);
}
