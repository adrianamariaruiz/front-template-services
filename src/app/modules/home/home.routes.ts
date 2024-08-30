import { Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
    ],
  },
];

export default routes;