import { IconDashboard } from "../assets/images";
import { PrivateRoutes } from "./urls";

export const DRAWER_MENU_LIST = [
    {
        title: '랜딩 페이지',
        labelIcon: <IconDashboard />,
        path: PrivateRoutes.Home,
    },
    {
        title: '대시보드',
        path: 'charge-history-section',
        labelIcon: <IconDashboard />,
        subMenu: [
            {
                title: '보드1',
                path: PrivateRoutes.Board,
                includePaths: [],
            },
            {
                title: '보드222222',
                path: PrivateRoutes.Board2,
                includePaths: [],
            },
            {
                title: '보드3',
                path: PrivateRoutes.Board3,
                includePaths: [],
            },
        ],
    },
];
