import { Menu } from "../types/Menu";

const initMenu = (): Menu[] => {
    return [
        { name: 'Home', link: '/home', icon: 'fa-solid fa-home' },
        { name: 'About', link: '/about', icon: 'fa-solid fa-circle-info' },
        { name: 'Content', link: '/content', icon: 'fa-solid fa-play' },
    ];
};

export const menu = initMenu();