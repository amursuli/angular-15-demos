import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HelloComponent} from "./hello/hello.component";
import {CarouselComponent} from "./carousel/carousel.component";

const appRoutes: Routes = [
  {
    path: '', component: CarouselComponent
  }
];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
