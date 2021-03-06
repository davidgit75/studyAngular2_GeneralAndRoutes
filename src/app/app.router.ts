import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RequestComponent } from './components/request/request.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { UsersComponent } from './components/users/users.component';
import { FormComponent } from './components/form/form.component';
//import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';


export const routing = RouterModule.forRoot([
    {path: "", component: LoginComponent},
    {path: "app", component: SidebarComponent,
        children: [
            {path: "request", component: RequestComponent},
            {path: "content", component: ContentComponent},
            {path: "users", component: UsersComponent},
            {path: "form", component: FormComponent},
        ]
    },
]);