import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  {path :'',component:AboutComponent,data:
     { title: "about",
      breadcrumb: "about",
      }
  },
  { path:'home',component:HomeComponent,data: 
    {
      title: "Home",
      breadcrumb: "Home",
    },
  },
  {path :'',component:HeaderComponent,data:
    { title: "Header",
     breadcrumb: "Header",
     }
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
