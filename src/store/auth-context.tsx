import React, {useState,ReactNode} from 'react';
import style from './App.module.scss';
import { Items,AuthContextProps,ErrorInfo } from '../types/types';

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [isCart, setIsCart] = useState(false);
	const [itemsInCart, setItems] = useState<Items[]>([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [popup, setPopup] = useState(false);
	const [isMobileNav, setMobileNav] = useState(false);
	const [error, setError] = useState<ErrorInfo>();

	const [isShoes, setIsShoes] = useState(true);
	const [isClothes, setIsClothes] = useState(false);
	const [isAccessories, setIsAccessories] = useState(false);

	const addItemsToCart = (item: Items) => {
		const itemExists = itemsInCart.some(cartItem => cartItem.id === item.id);

		if (itemExists) {
			setPopup(true);
			setError({
				text: 'This item is already in the cart!',
			});
			return;
		}
		const newItem = {
			...item,
			count: 1,
		};
		setTotalPrice(totalPrice + item.price);
		setItems([...itemsInCart, newItem]);
	};

	const overflowClass = isCart || isMobileNav ? style['overflow-hidden'] : '';

    return (
        <AuthContext.Provider value={{
            onAddItems: addItemsToCart,
            isCart,
            setIsCart,
            itemsInCart,
            setItems,
            totalPrice,
            setTotalPrice,
            popup,
            setPopup,
            isMobileNav,
            setMobileNav,
            error,
            setError,
            isShoes,
            setIsShoes,
            isClothes,
            setIsClothes,
            isAccessories,
            setIsAccessories,
            overflowClass
          }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;