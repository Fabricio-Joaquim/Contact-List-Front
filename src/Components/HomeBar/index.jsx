import React from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { RiLogoutBoxLine } from 'react-icons/ri'
import * as Styled from './style'
import useNavigation from '../../hooks'
const HomeBar = ({ children }) => {
    const navigator = useNavigation()
    const sizeIcons = 34
    const handlerPageHome = () => window.history.back()
    const handlerPageLogout = () => navigator.navigateTo('/')
    return (
        <Styled.MainWarpper>
            <BsArrowLeftCircle size={sizeIcons} onClick={handlerPageHome} />
            <h2>{children}</h2>
            <RiLogoutBoxLine size={sizeIcons} onClick={handlerPageLogout} />
        </Styled.MainWarpper>


    )
}

export default HomeBar