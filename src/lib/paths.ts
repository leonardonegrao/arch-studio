const pagePath = {
  home: {
    title: 'Home',
    path: '/'
  },
  portfolio: {
    title: 'Portfolio',
    path: '/portfolio'
  },
  aboutUs: {
    title: 'About Us',
    path: '/about-us'
  },
  contact: {
    title: 'Contact',
    path: '/contact'
  },
}

export function getPageName(routerPathName: string): string {
  if (routerPathName === pagePath.home.path)
    return pagePath.home.title
  else if (routerPathName === pagePath.portfolio.path)
    return pagePath.portfolio.title
  else if (routerPathName === pagePath.aboutUs.path)
    return pagePath.aboutUs.title
  return pagePath.contact.title
}