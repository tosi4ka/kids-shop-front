'use client'

import Image from 'next/image'
import style from './style.module.scss'
import maleIcon from '../../public/icons/maleIcon.svg'
import femaleIcon from '../../public/icons/femaleIcon.svg'
import {ProductTypes} from '@/types/productsTypes'
import {useAppDispatch} from '@/store'
import {addProductColor, addProductSize, addToCart, selectIsItemInCart} from '@/features/cartSlice'
import {useSelector} from 'react-redux'
import {useState} from 'react'
import {addToFavorite, removeProduct, selectIsItemInFavorite} from '@/features/favoriteSlice'
import starIcon from '../../public/MainPage/MainOurTop/Star.svg'
import topIcon from '../../public/MainPage/MainOurTop/top_logo.png'
import {outCapitalizeFirstLetterBrand} from '../functions/outCapitalizeLetter'

interface ProductCardProps {
    key: number
    data: ProductTypes
    isFavorite: boolean
    setShowMessage?: (message: { show: boolean; isAddToCart: boolean }) => void
}

const ProductCard: React.FC<ProductCardProps> = props => {
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const dispatch = useAppDispatch()

    const isItemInCart = useSelector(selectIsItemInCart(props.data.id))
    const isItemInFavorite = useSelector(selectIsItemInFavorite(props.data.id))

    const handleAddToCart = (data: ProductTypes, message?: boolean) => {
        dispatch(addToCart(data))
        selectedColor
            ? dispatch(addProductColor({id: props.data.id, color: selectedColor}))
            : null
        selectedSize
            ? dispatch(addProductSize({id: props.data.id, size: selectedSize}))
            : null
        message &&
        props.setShowMessage &&
        props.setShowMessage({show: true, isAddToCart: true})
        setTimeout(() => {
            props.setShowMessage &&
            props.setShowMessage({show: false, isAddToCart: true})
        }, 5000)
    }

    const handleAddColor = (color: string) => {
        setSelectedColor(color)
    }

    const handleAddSize = (size: string) => {
        setSelectedSize(size)
    }

    const handleAddToFavorite = (data: ProductTypes) => {
        dispatch(addToFavorite(data))
    }

    const handleRemoveFromFavorite = (id: number) => {
        dispatch(removeProduct(id))
        props.setShowMessage &&
        props.setShowMessage({show: true, isAddToCart: false})
        setTimeout(() => {
            props.setShowMessage &&
            props.setShowMessage({show: false, isAddToCart: false})
        }, 5000)
    }

    return (
        <div className={style.card__slider_slide}>
            <Image
                className={style.top_icon}
                src={topIcon}
                alt='top Icon'
                width={41}
                height={28}
            />
            <div className={style.image}>
                <Image
                    src={props.data.product_images[0].product_image}
                    alt={props.data.name}
                    fill
                    sizes='100vw'
                    style={{objectFit: 'cover', objectPosition: '50% 0'}}
                />
                <div className={style.indicator_for}>
                    <Image src={props.data.male ? maleIcon : femaleIcon} alt='sex icon'/>
                </div>
                <div className={style.cards_buttons_add_to_wrapper}>
                    {props.isFavorite ? (
                        <div
                            className={`${style.add_to} ${style.add_to_favorite} ${
                                isItemInFavorite ? style.add_to_active : ''
                            }`}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='40'
                                height='40'
                                viewBox='0 0 40 40'
                                fill='none'
                                className={style.svg}
                                onClick={() => handleAddToFavorite(props.data)}
                            >
                                <circle cx='20' cy='20' r='20' fill='#A663EE'/>
                                <path
                                    d='M20 26.4444C20 26.4444 13 22.4849 13 17.6768C13.0001 16.827 13.2917 16.0034 13.825 15.3462C14.3583 14.689 15.1005 14.2386 15.9254 14.0717C16.7503 13.9047 17.607 14.0315 18.3499 14.4305C19.0927 14.8295 19.6758 15.476 20 16.2602L20 16.2602C20.3242 15.476 20.9073 14.8295 21.6501 14.4305C22.393 14.0315 23.2497 13.9047 24.0746 14.0717C24.8995 14.2386 25.6417 14.689 26.175 15.3462C26.7083 16.0034 26.9999 16.827 27 17.6768C27 22.4849 20 26.4444 20 26.4444Z'
                                    stroke='#CD9EFF'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                    ) : (
                        <div className={`${style.add_to} ${style.add_to_favorite}`}>
                            <svg
                                width='40'
                                height='40'
                                viewBox='0 0 40 40'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className={style.svg}
                                onClick={() => handleRemoveFromFavorite(props.data.id)}
                            >
                                <circle cx='20' cy='20' r='15' fill='#FCFBFE'/>
                                <path
                                    d='M14.9231 15L15.6282 26.7273C15.6617 27.4627 16.1359 28 16.7564 28H23.2436C23.8666 28 24.332 27.4627 24.3718 26.7273L25.0769 15M14 15H26M17.9487 14.5455V12.9545C17.9484 12.8291 17.9681 12.7048 18.0067 12.5888C18.0452 12.4728 18.1019 12.3675 18.1734 12.2788C18.2448 12.1901 18.3298 12.1198 18.4232 12.0719C18.5167 12.0241 18.6168 11.9996 18.7179 12H21.2821C21.3832 11.9996 21.4833 12.0241 21.5768 12.0719C21.6702 12.1198 21.7552 12.1901 21.8266 12.2788C21.8981 12.3675 21.9548 12.4728 21.9933 12.5888C22.0319 12.7048 22.0516 12.8291 22.0513 12.9545V14.5455'
                                    stroke='#CD9EFF'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </div>
                    )}

                    <div
                        className={`${style.add_to} ${style.add_to_cart} ${
                            isItemInCart ? style.add_to_active : ''
                        }`}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='40'
                            height='40'
                            viewBox='0 0 40 40'
                            fill='none'
                            className={style.svg}
                            onClick={() =>
                                !isItemInCart
                                    ? handleAddToCart(props.data, true)
                                    : handleAddToCart(props.data)
                            }
                        >
                            <circle cx='20' cy='20' r='15' fill='#A663EE'/>
                            <path
                                d='M17.0833 16.0435C17.0833 15.2363 17.3906 14.4622 17.9376 13.8914C18.4846 13.3207 19.2265 13 20 13C20.7735 13 21.5154 13.3207 22.0624 13.8914C22.6094 14.4622 22.9167 15.2363 22.9167 16.0435M13.5833 16.0435H26.4167C26.7388 16.0435 27 16.316 27 16.6522V26.3913C27 26.7275 26.7388 27 26.4167 27H13.5833C13.2612 27 13 26.7275 13 26.3913V16.6522C13 16.316 13.2612 16.0435 13.5833 16.0435Z'
                                stroke='#CD9EFF'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </div>
                </div>

                {props.data.is_sale ? (
                    <div className={style.is_sale}>
						<span
                            className={style.sale_text}
                        >{`-${props.data.discount?.name}%`}</span>
                    </div>
                ) : null}
            </div>
            <div className={style.card_info}>
                <div className={style.upper_row}>
                    <div className={style.card_title_row}>
                        <span className={style.card_brand}>{outCapitalizeFirstLetterBrand(props.data.brand.name)}</span>
                        <span className={style.card_title}>{props.data.name}</span>
                    </div>
                    <div className={style.raiting}>
                        <div className={style.raiting_block}>
                            <Image src={starIcon} alt='star icon' width={20} height={20}/>
                            <span>{props.data.rating}</span>
                        </div>
                        <span>(16)</span>
                    </div>
                </div>
                <div className={style.category_wrapp}>
                    <span className={style.card_title}>{props.data.name}</span>
                    <div className={style.card_price_wrapp}>
                        <span className={style.card_price}>{props.data.price}₴</span>
                        <div className={style.indicator_for}>
                            <Image
                                src={props.data.male ? maleIcon : femaleIcon}
                                alt='sex icon'
                            />
                        </div>
                    </div>
                </div>
                <div className={style.circle_wrapp}>
                    {props.data.color?.map((item, index) => (
                        <div
                            className={`${style.circle} ${
                                selectedColor === item.name ? style.circle_active : ''
                            }`}
                            style={{
                                backgroundColor: item.name
                            }}
                            data-color={item.name}
                            key={index}
                            onClick={() => handleAddColor(item.name)}
                        ></div>
                    ))}
                </div>
                {/* <div className={style.colors_and_sizes}> */}

                {/* <div className={style.sizes_wrap}>
						{getUniqueLetterSizes(props.data.product_size).map(
							(item, index) => (
								<div
									className={`${style.size_item} ${
										selectedSize === item ? style.size_item_active : ''
									}`}
									key={index}
									onClick={() => handleAddSize(item)}
								>
									{item}
								</div>
							)
						)}
					</div> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default ProductCard
