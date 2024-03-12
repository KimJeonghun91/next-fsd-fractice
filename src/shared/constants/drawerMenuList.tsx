import { IconDashboard } from "@/shared/assets/images";
import { PrivateRoutes } from "@constants/urls";

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
                path: PrivateRoutes.Home,
                includePaths: [],
            },
            {
                title: '보드2',
                path: PrivateRoutes.Home,
                includePaths: [],
            },
            {
                title: '보드3',
                path: PrivateRoutes.Home,
                includePaths: [],
            },
        ],
    },
];
