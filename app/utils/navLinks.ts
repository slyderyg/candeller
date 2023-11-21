interface NavLink {
    id: number,
    name: string,
    href: string
}

export const navLinks: NavLink[] = [
    {id: 1, name: 'HOME', href: '/'},
    {id: 2, name: 'ABOUT', href: '/about'},
    {id: 3, name: 'SHOP', href: '/shop'},
    {id: 4, name: 'BLOG', href: '/blog'},
    {id: 7, name: 'CONTACT', href: '/contact'},
]