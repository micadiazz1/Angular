import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BegamingHardwareComponent } from './begaming-hardware/begaming-hardware.component';
import { BegamingAboutComponent } from './begaming-about/begaming-about.component';

const routes: Routes = [{
  path:'',
  redirectTo:'hardware',
  pathMatch:'full'
},
{
  path:'hardware',
  component:BegamingHardwareComponent
},
{
  path:'about',
  component:BegamingAboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
