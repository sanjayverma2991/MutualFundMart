import {Routes, RouterModule} from '@angular/router';

// categories
import {CategoriesComponent} from './categories/categories.component';
import {CategoryDetailFormComponent} from './categories/categorydetails-form.component';

// user profile
import {ProfileFormComponent} from './users/profile-form.component';
import {BuyerDeatilFormComponent} from './users/buyerdetail-form.component';

// purchases
import {ViewCartFormComponent} from './purchases/viewcart-form.component';
import {PurchaseHistoryFormComponent} from './purchases/purchasehistory-form.component';

// home
import {HomepageComponent} from './homepage/homepage.component';
import {whatarethevarioustypesoffunds} from './homepage/HomePageFolder/what-are-the-various-types-of-funds'
import {SocanIinvestnowformyvacation8monthslater} from './homepage/HomePageFolder/So-can-I-invest-now-for-my-vacation-8-months-later';
import {WhyshouldoneinvestinMutualFunds} from './homepage/HomePageFolder/Why-should-one-invest-in-Mutua-lFunds';
import {canmutualfundshelpcreatewealth} from './homepage/HomePageFolder/can-mutual-funds-help-create-wealth';

// chart
import {BarChartDemoComponent} from './charts/bar-chart-demo';

const appRoutes :Routes=
[
    { path: '', component:HomepageComponent },
    { path: 'category', component:CategoriesComponent },
    { path: 'view/:catg_id', component: CategoryDetailFormComponent },

    { path: 'profile/:user_id', component: ProfileFormComponent},
    { path: 'buyerdetails', component: BuyerDeatilFormComponent},

    { path: 'cart', component: ViewCartFormComponent},
    { path: 'purchaseHistory', component: PurchaseHistoryFormComponent},
    { path: 'purchase', component: PurchaseHistoryFormComponent},

    { path : 'whatarethevarioustypesoffunds',component:whatarethevarioustypesoffunds},
    { path : 'SocanIinvestnowformyvacation8monthslater',component:SocanIinvestnowformyvacation8monthslater},
    { path : 'WhyshouldoneinvestinMutualFunds',component:WhyshouldoneinvestinMutualFunds},
    { path : 'canmutualfundshelpcreatewealth',component:canmutualfundshelpcreatewealth},

    { path: 'charts', component: BarChartDemoComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
