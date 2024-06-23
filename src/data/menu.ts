import { Menu } from "../types/Menu";

const initMenu = (): Menu[] => {
    return [
        { name: 'Home', link: '/home', icon: 'fa-solid fa-home' },
        { name: 'About', link: '/about', icon: 'fa-solid fa-home' },
    ];
};

export const menu = initMenu();

// export const menu = [
//     { name: 'Home', link: '/home', icon: 'fa-solid fa-home' },
//     { name: 'About', link: '/about', icon: 'fa-solid fa-home' },
// ]