import {RouteInterface} from '../../src/interfaces'

export const home: RouteInterface = {
    path: '/',
    title: 'Главная',
    exact: true,
}

export const tickets: RouteInterface = {
    path: '/tickets',
    title: 'Афиша и билеты',
    exact: false,
}
