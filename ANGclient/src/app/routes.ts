
// Importer les classes pour définir les routes
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'


// Créer une constante pour définir le comportement des routes
const appRoutes: Routes = [
    /*
        Définir une route : Créer un objet avec path et component
    */
    {
        path: '',
        loadChildren: './components/homepage/module#HomepageModule'
    },
    {
        path: 'login',
        loadChildren: './components/login/module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './components/register/module#RegisterModule'
    },
    {
        path: 'dashboard',
        loadChildren: './components/dashboard/module#DashboardModule'
    }
]

// Exporter une autre constante pour utiliser les routes
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)