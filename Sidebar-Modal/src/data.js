import React from 'react'
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/resume',
    text: 'resume',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://touch.facebook.com/login/?next&ref=dbl&fl&refid=8',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/',
    icon: <FaLinkedin />,
  }
]
