import React from 'react'
import { ILayout } from '../../common/types/layout'
import TopBarComponent from '../topBar'
import { useLocation } from 'react-router-dom'

const LayoutComponent = ({children}: ILayout) => {
	const location = useLocation()


	
	return location.pathname === '/login' ||
    location.pathname === '/register' ? (
    <>
      {children}
    </>
  ) : (
    <>
      <TopBarComponent />
      {children}
    </>
  );
}

export default LayoutComponent