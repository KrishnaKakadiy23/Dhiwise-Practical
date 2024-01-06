import React from 'react'
import { APP_PREFIX_PATH } from 'constants/route.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const appsRoute = [
   
    {
        key: 'appsCrm.calendar',
        path: `${APP_PREFIX_PATH}/crm/calendar`,
        component: React.lazy(() => import('views/crm/Calendar')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrm.customers',
        path: `${APP_PREFIX_PATH}/crm/customers`,
        component: React.lazy(() => import('views/crm/Customers')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Customers',
        },
    },
    {
        key: 'appsCrm.customerDetails',
        path: `${APP_PREFIX_PATH}/crm/customer-details`,
        component: React.lazy(() => import('views/crm/CustomerDetail')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Customer Details',
            headerContainer: true,
        },
    },
  
    {
        key: 'appsSales.dashboard',
        path: `${APP_PREFIX_PATH}/sales/dashboard`,
        component: React.lazy(() => import('views/sales/SalesDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.productList',
        path: `${APP_PREFIX_PATH}/sales/product-list`,
        component: React.lazy(() => import('views/sales/ProductList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.productEdit',
        path: `${APP_PREFIX_PATH}/sales/product-edit/:productId`,
        component: React.lazy(() => import('views/sales/ProductEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Edit Product',
        },
    },
    {
        key: 'appsSales.productNew',
        path: `${APP_PREFIX_PATH}/sales/product-new`,
        component: React.lazy(() => import('views/sales/ProductNew')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Add New Product',
        },
    },
    {
        key: 'appsSales.orderList',
        path: `${APP_PREFIX_PATH}/sales/order-list`,
        component: React.lazy(() => import('views/sales/OrderList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.orderDetails',
        path: `${APP_PREFIX_PATH}/sales/order-details/:orderId`,
        component: React.lazy(() => import('views/sales/OrderDetails')),
        authority: [ADMIN, USER],
    },
  
    {
        key: 'appsknowledgeBase.helpCenter',
        path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
        component: React.lazy(() => import('views/knowledge-base/HelpCenter')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
        },
    },
    {
        key: 'appsknowledgeBase.article',
        path: `${APP_PREFIX_PATH}/knowledge-base/article`,
        component: React.lazy(() => import('views/knowledge-base/Article')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsknowledgeBase.manageArticles',
        path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
        component: React.lazy(() =>
            import('views/knowledge-base/ManageArticles')
        ),
        authority: [ADMIN, USER],
        meta: {
            header: 'Manage Articles',
            extraHeader: React.lazy(() =>
                import(
                    'views/knowledge-base/ManageArticles/components/PanelHeader'
                )
            ),
            headerContainer: true,
        },
    },
    {
        key: 'appsknowledgeBase.editArticle',
        path: `${APP_PREFIX_PATH}/knowledge-base/edit-article`,
        component: React.lazy(() => import('views/knowledge-base/EditArticle')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsAccount.settings',
        path: `${APP_PREFIX_PATH}/account/settings/:tab`,
        component: React.lazy(() => import('views/account/Settings')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Settings',
            headerContainer: true,
        },
    },

]

export default appsRoute
