import style from './Navigation.module.scss';

import hangerImage from '../../../assets/img/clothes-hanger.png';

import { FaShoppingBag } from 'react-icons/fa';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa6';

import { NavigationProps } from '../../../types/types';

const Navigation: React.FC<NavigationProps> = ({
	cartHandler,
	itemsInCart,
	setMobileNav,
	setError,
	setPopup,
	setIsShoes,
	isShoes,
	setIsClothes,
	isClothes,
}) => {
	return (
		<div className={style.navbar__container}>
			<FaBars
				onClick={() => {
					setMobileNav(true);
				}}
				className={style.burgerBtn}
				size={35}
			/>
			<div className={style.navbar__categories}>
				<button
					className={`${isClothes ? style.active : ''} ${style['category-btn']}`}
					onClick={() => {
						setIsShoes(false);
						setIsClothes(true);
					}}>
					Clothes
				</button>
				<button
					className={`${isShoes ? style.active : ''} ${style['category-btn']}`}
					onClick={() => {
						setIsShoes(true);
						setIsClothes(false);
					}}>
					Shoes
				</button>
				<button
					className={style['category-btn']}
					onClick={() => {
						setPopup(true);
						setError({
							text: 'This feature is unavaliable.',
						});
					}}>
					Accessories
				</button>
			</div>
			<div className={style['logo-box']}>
				<img className={style.logo} src={hangerImage} alt='hanger' />
				<h2>FashionStore</h2>
			</div>

			<div className={style['icons-box']}>
				<button className={style['shopping-cart-btn']} onClick={cartHandler}>
					<FaShoppingBag className={style.icon} size={25} />
					<div className={style.counter}>
						<p>{itemsInCart.length}</p>
					</div>
				</button>
				<button
					className={style['shopping-cart-btn']}
					onClick={() => {
						setPopup(true);
						setError({
							text: 'This feature is unavaliable.',
						});
					}}>
					<FaScrewdriverWrench className={style.icon} size={25} />
				</button>
			</div>
		</div>
	);
};

export default Navigation;
