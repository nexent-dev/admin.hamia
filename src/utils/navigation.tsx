import { lazy } from 'react'
import type { AppRoute } from '../interfaces/route'
import { FaTachometerAlt, FaUsers, FaChartLine, FaUser, FaCog, FaComments, FaHotel, FaReceipt } from 'react-icons/fa'
// ////////////////////////////////////////////////////////////////////////// //
const Login = lazy(() => import('../pages/auth/login'))
const RequestPasswordReset = lazy(() => import('../pages/auth/request-password-reset'))
const ResetPassword = lazy(() => import('../pages/auth/reset-password'))
const FinalizeAccountSetup = lazy(() => import('../pages/auth/finalize-account-setup'))
const Dashboard = lazy(() => import('../pages/protected/dashboard'))
const Profile = lazy(() => import('../pages/protected/profile'))
// ////////////////////////////////////////////////////////////////////////// //

// ////////////////////////////////////////////////////////////////////////// //
const ClientsList = lazy(() => import('../pages/protected/clients/list'))
const ListingsList = lazy(() => import('../pages/protected/listings/list'))
const BookingsList = lazy(() => import('../pages/protected/bookings/list'))
const ChatbotConversations = lazy(() => import('../pages/protected/chatbot/conversations'))
const Analytics = lazy(() => import('../pages/protected/reports/analytics'))
const Settings = lazy(() => import('../pages/protected/settings'))
// ////////////////////////////////////////////////////////////////////////// //

const auth_routes = [
    {
        path: '/',
        element: Login
    },
    {
        path: '/login',
        element: Login
    },
    {
        path: '/request-password-reset',
        element: RequestPasswordReset
    },
    {
        path: '/reset-password',
        element: ResetPassword
    },
    {
        path: '/finalize-account-setup',
        element: FinalizeAccountSetup
    },
]


const protected_routes: AppRoute[] = [
  {
    type: "ChildRoute",
    title: "Dashboard",
    path: "/",
    slug: "dashboard",
    subtitle: "Overview and stats",
    element: Dashboard,
    icon: FaTachometerAlt,
    render: true,
  },
  {
    type: "ParentRoute",
    title: "Clients",
    path: "/clients",
    slug: "clients",
    subtitle: "Manage guests and accounts",
    element: Dashboard,
    render: true,
    children: [
      {
        path: "list",
        title: "All Clients",
        slug: "clients/list",
        subtitle: "List of all clients",
        element: ClientsList,
        icon: FaUsers,
        render: true,
      },
    ],
  },
  {
    type: "ParentRoute",
    title: "Hosts",
    path: "/listings",
    slug: "hosts",
    subtitle: "Manage hosts and properties",
    element: Dashboard,
    render: true,
    children: [
      {
        path: "list",
        title: "All Hosts",
        slug: "hosts/list",
        subtitle: "List of all hosts",
        element: ListingsList,
        icon: FaHotel,
        render: true,
      },
    ],
  },
  {
    type: "ParentRoute",
    title: "Bookings",
    path: "/bookings",
    slug: "bookings",
    subtitle: "Manage reservations and stays",
    element: Dashboard,
    render: true,
    children: [
      {
        path: "list",
        title: "All Bookings",
        slug: "bookings/list",
        subtitle: "List of all bookings",
        element: BookingsList,
        icon: FaReceipt,
        render: true,
      },
    ],
  },
  {
    type: "ParentRoute",
    title: "Reports",
    path: "/reports",
    slug: "reports",
    subtitle: "Analytics and performance reports",
    element: Dashboard,
    render: true,
    children: [
      {
        path: "analytics",
        title: "Analytics",
        slug: "reports/analytics",
        subtitle: "System usage and revenue insights",
        element: Analytics,
        icon: FaChartLine,
        render: true,
      },
      {
        path: "chatbot/conversations",
        title: "Chatbot conversations",
        slug: "reports/chatbot-conversations",
        subtitle: "All chatbot conversations",
        element: ChatbotConversations,
        icon: FaComments,
        render: true,
      },
    ],
  },
  {
    type: "ChildRoute",
    title: "Profile",
    path: "/profile",
    slug: "profile",
    subtitle: "Manage your account details",
    element: Profile,
    icon: FaUser,
    render: true,
  },
  {
    type: "ChildRoute",
    title: "Settings",
    path: "/settings",
    slug: "settings",
    subtitle: "System configuration",
    element: Settings,
    icon: FaCog,
    render: true,
  },
];

const flat_protected_routes = protected_routes.flatMap((route) => {
  if (route.type === "ChildRoute") {
    return [route];
  }

  if (route.type === "ParentRoute" && route.children) {
    return route.children.map((childRoute) => {
      return {
        ...childRoute,
        path: `${route.path}/${childRoute.path}`,
      };
    });
  }

  return [];
});

export {
    auth_routes,
    protected_routes,
    flat_protected_routes
}
