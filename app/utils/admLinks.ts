interface AdmLink {
    id: number,
    name: string,
    href: string
}

export const admLinks: AdmLink[] = [
    {id: 1, name: 'MANAGE', href: '/manage'},
    {id: 2, name: 'ADD NEW ITEM', href: '/addnew'},
    {id: 3, name: 'ACTIVE ORDERS', href: '/activeorders'},
    {id: 4, name: 'COMPLETED ORDERS', href: '/completedorders'},
]