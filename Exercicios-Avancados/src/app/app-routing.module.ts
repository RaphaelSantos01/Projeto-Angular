import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'shared-components',
    loadChildren: () => import('./pages/shared-components/shared-components.module').then( m => m.SharedComponentsPageModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./pages/forms/forms.module').then( m => m.FormsPageModule)
  },
  {
    path: 'real-time-updates',
    loadChildren: () => import('./pages/real-time-updates/real-time-updates.module').then( m => m.RealTimeUpdatesPageModule)
  },
  {
    path: 'lazy-loading',
    loadChildren: () => import('./pages/lazy-loading/lazy-loading.module').then( m => m.LazyLoadingPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'internationalization',
    loadChildren: () => import('./pages/internationalization/internationalization.module').then( m => m.InternationalizationPageModule)
  },
  {
    path: 'analytics',
    loadChildren: () => import('./pages/analytics/analytics.module').then( m => m.AnalyticsPageModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./pages/testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'pwa',
    loadChildren: () => import('./pages/pwa/pwa.module').then( m => m.PwaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
