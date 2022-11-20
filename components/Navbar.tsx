import React, { useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const Navbar = () => {

  const location = useRouter()

  const [age, setAge] = useState('')
  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string)
  }

  const [navHeight, setNavHeight] = useState(false)
  const navHeightChange = () => {
    if (window.scrollY >= 80) {
      setNavHeight(true)
    }
    else {
      setNavHeight(false)
    }
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', navHeightChange)
  }

  const [visible, setVisible] = useState(false)
  const handleNavLinkClick = () => {
    if (visible === true) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  const [arrowClick, setArrowClick] = useState(false)
  const handleClickArrowBtn = () => {
    if (arrowClick === true) {
      setArrowClick(false)
    } else {
      setArrowClick(true)
    }
  }

  const navLinkData = [
    {
      linkText: 'Welcom',
      linkPath: '/',
    },
    {
      linkText: 'About Aksanti',
      linkPath: '/who-we-are',
      subLinks: [
        {
          subLinkText: 'What We Do',
          subLinkPath: '/who-we-are',
        },
        {
          subLinkText: 'Our History & Timeline',
          subLinkPath: '/our-history',
        },
        {
          subLinkText: 'Our Future',
          subLinkPath: '/our-future',
        },
        {
          subLinkText: 'Our Logo',
          subLinkPath: '/our-logo',
        },
        {
          subLinkText: 'Corporate Information',
          subLinkPath: '/corporate-information',
        },
      ]
    },
    {
      linkText: 'Business Areas',
      linkPath: '/business-areas',
      subLinks: [
        {
          subLinkText: 'Mining',
          subLinkPath: '/aksanti-mining',
        },
        {
          subLinkText: 'Oil',
          subLinkPath: '/aksanti-oil',
        },
        {
          subLinkText: 'Wood',
          subLinkPath: '/aksanti-wood',
        },
        {
          subLinkText: 'Properties & Construction',
          subLinkPath: '/aksanti-properties',
        },
        {
          subLinkText: 'Technology',
          subLinkPath: '/tech',
        },
        {
          subLinkText: 'Food-Agriculture (Coming soon)',
          subLinkPath: '/food-agriculture',
        },
      ]
    },
    {
      linkText: 'Aksanti Philosophy',
      linkPath: '/aksanti-philosophy',
      subLinks: [
        {
          subLinkText: 'Our Motivation & Leadership',
          subLinkPath: '/aksanti-philosophy',
        },
        {
          subLinkText: 'Our Credo',
          subLinkPath: '/our-credo',
        },
        {
          subLinkText: 'Aksanti Sana Foundation',
          subLinkPath: '/foundation',
        },
      ]
    },
    {
      linkText: 'Africa',
      linkPath: '/why-africa',
      subLinks: [
        {
          subLinkText: 'Why Africa',
          subLinkPath: '/why-africa',
        },
        {
          subLinkText: 'Investing In Africa',
          subLinkPath: '/invest-in-africa',
        },
        {
          subLinkText: 'African Developism',
          subLinkPath: '/african-developism',
        },
      ]
    },
    {
      linkText: 'Contact',
      linkPath: '/contact',
    },
  ]

  let navLinkPath = false
  navLinkData.map((item: any) => {
    item.subLinks?.find((subItem: any) => {
      if (subItem.subLinkPath === location.pathname) {
        navLinkPath = item.linkPath
        return true
      }
      return false
    })
  })

  return (
    <nav className='fixed top-0 w-full bg-white z-50'>
      <div className={`mx-auto max-w-7xl flex justify-between items-center px-4 duration-300 ${navHeight ? 'py-2' : 'py-3'}`}>
        <Link href='/' className={`inline-flex justify-start duration-300 ${navHeight ? 'h-12' : 'h-14'}`}>
          <img src='/AppLogo.png' className='w-auto h-full object-contain' alt='app-logo' />
        </Link>
        <div className='flex justify-end items-center gap-8'>
          <div className='hidden items-center'>
            <div className='absolute px-2 opacity-60 z-10'>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              className='nav-search pl-10 pr-2 pt-1 pb-0.5 rounded bg-gray-100'
            />
          </div>
          <div className={`fixed top-0 bottom-0 duration-300 w-80 ${visible === true ? 'left-0' : '-left-80'} h-auto lg:h-10 block lg:flex items-center lg:w-auto pt-16 lg:pt-0 bg-gray-800 lg:bg-transparent lg:static overflow-y-auto lg:overflow-y-visible z-50`}>
            <ul className='flex flex-col lg:flex-row overflow-hidden lg:overflow-visible h-auto lg:h-full justify-center lg:items-center gap-x-8 gap-y-0 lg:gap-y-8'>
              {
                navLinkData.map((item: any, index: number) => {
                  return (
                    <li className='group relative flex flex-col lg:flex-row items-start lg:items-center h-full' key={index}>
                      <Link href={item.linkPath} passHref className={`nav-link ${navLinkPath === item.linkPath ? 'sub-page-active' : ''} ${location.pathname === item.linkPath ? 'page-active' : 'page-deactive'} flex items-start lg:items-center w-full lg:w-auto h-full bg-gray-800 lg:bg-transparent z-20`} onClick={handleNavLinkClick}>
                        {item.linkText}
                      </Link>
                      {
                        item.subLinks && (
                          <div className='block lg:hidden absolute right-0 z-50 px-4 py-2.5' onClick={handleClickArrowBtn}>
                            <ChevronRightIcon className='text-white' />
                          </div>
                        )
                      }
                      {
                        item.subLinks && (
                          <ul className={`static lg:absolute flex lg:hidden ml-8 lg:ml-0 ${((navLinkData.length - 2) === index) ? '-right-5 w-64 lg:w-48' : '-left-5 w-64'} h-0 lg:h-auto group-hover:h-auto group-hover:flex flex-col duration-300 bg-gray-700 lg:bg-gray-50 py-0 group-hover:py-3 lg:py-3 overflow-hidden rounded-md shadow-md top-10 border-t-0 group-hover:border-t-4 lg:border-t-4 border-gray-600 z-10`}>
                            {
                              item.subLinks.map((subItem: any, subIndex: number) => {
                                return (
                                  <li className='w-full duration-300 hover:bg-gray-200' key={subIndex}>
                                    <Link href={subItem.subLinkPath} passHref className={`sub-nav-link nav-link inline-block ${location.pathname === subItem.subLinkPath ? 'page-active' : 'page-deactive'} duration-200 hover:text-black w-full px-6 py-2.5`} onClick={handleNavLinkClick}>
                                      {subItem.subLinkText}
                                    </Link>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        )
                      }
                    </li>
                  )
                })
              }
            </ul>
            <div className='block lg:hidden absolute p-1 bg-gray-900 rounded-sm top-6 right-6' onClick={handleNavLinkClick}>
              <CloseIcon className='text-white' />
            </div>
          </div>
          <div className='hidden'>
            <FormControl className='nav-selector'>
              <Select
                value={age}
                onChange={handleLanguageChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value=''>EN</MenuItem>
                <MenuItem value={20}>FR</MenuItem>
                <MenuItem value={30}>ES</MenuItem>
                <MenuItem value={40}>DE</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className='block lg:hidden p-1 bg-gray-100 rounded-sm duration-200 active:bg-gray-300' onClick={handleNavLinkClick}>
            <MenuIcon className='text-sky-900' />
          </div>
          <div className={`mobile-overflow block lg:hidden fixed top-0 bottom-0 w-full ${visible === true ? 'left-0' : '-left-full'} right-0 bg-gray-200 opacity-60 z-30`} onClick={handleNavLinkClick}></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
