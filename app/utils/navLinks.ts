interface NavLink {
    id: number,
    name: string,
    href: string
}

export const navLinks: NavLink[] = [
    {id: 1, name: 'HOME', href: '/'},
    {id: 2, name: 'ABOUT', href: '/'},
    {id: 3, name: 'SHOP', href: '/'},
    {id: 4, name: 'BLOG', href: '/'},
    {id: 5, name: 'PAGES', href: '/'},
    {id: 6, name: 'SERVICES', href: '/'},
    {id: 7, name: 'CONTACT', href: '/'},
]