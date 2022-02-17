import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenComponent } from './authen/authen.component';
import { InscripEtape1Component } from './authen/inscrip-etape1/inscrip-etape1.component';
import { InscripEtape2Component } from './authen/inscrip-etape2/inscrip-etape2.component';
import { MdpForgetComponent } from './authen/mdp-forget/mdp-forget.component';
import { MdpNewComponent } from './authen/mdp-new/mdp-new.component';
import { OnbordingComponent } from './onbording/onbording.component';
import { CompteComponent } from './compte/compte.component';
import { CompteInfoComponent } from './compte/compte-info/compte-info.component';
import { ComptePrefComponent } from './compte/compte-pref/compte-pref.component';
import { CompteContactComponent } from './compte/compte-contact/compte-contact.component';
import { CompteFaqComponent } from './compte/compte-faq/compte-faq.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsNewEtape1Component } from './produits/produits-new-etape1/produits-new-etape1.component';
import { ProduitsNewEtape2Component } from './produits/produits-new-etape2/produits-new-etape2.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceEtape2Component } from './maintenance/maintenance-etape2/maintenance-etape2.component';
import { MaintenanceEtape3Component } from './maintenance/maintenance-etape3/maintenance-etape3.component';
import { MaintenanceEtape4Component } from './maintenance/maintenance-etape4/maintenance-etape4.component';
import { MaintenanceRecapComponent } from './maintenance/maintenance-recap/maintenance-recap.component';
import { MaintenanceEnvoieComponent } from './maintenance/maintenance-envoie/maintenance-envoie.component';
import { MaintenanceChauffeEauComponent } from './maintenance/maintenance-chauffe-eau/maintenance-chauffe-eau.component';
import { MaintenanceClimComponent } from './maintenance/maintenance-clim/maintenance-clim.component';
import { MaintenancePhotoComponent } from './maintenance/maintenance-photo/maintenance-photo.component';
import { MaintenanceBorneComponent } from './maintenance/maintenance-borne/maintenance-borne.component';
import { DetailscoverComponent } from './detailscover/detailscover.component';
import { DetailsComponent } from './details/details.component';

import { AstuceVolumeComponent } from './details/astuce-volume/astuce-volume.component';
import { AstucePilotageComponent } from './details/astuce-pilotage/astuce-pilotage.component';
import { ParametresComponent } from './details/parametres/parametres.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenComponent,
    InscripEtape1Component,
    InscripEtape2Component,
    MdpForgetComponent,
    MdpNewComponent,
    OnbordingComponent,
    CompteComponent,
    CompteInfoComponent,
    ComptePrefComponent,
    CompteContactComponent,
    CompteFaqComponent,
    ProduitsComponent,
    ProduitsNewEtape1Component,
    ProduitsNewEtape2Component,
    AccueilComponent,
    MaintenanceComponent,
    MaintenanceEtape2Component,
    MaintenanceEtape3Component,
    MaintenanceEtape4Component,
    MaintenanceRecapComponent,
    MaintenanceEnvoieComponent,
    MaintenanceChauffeEauComponent,
    MaintenanceClimComponent,
    MaintenancePhotoComponent,
    MaintenanceBorneComponent,
    DetailscoverComponent,
    DetailsComponent,

    AstuceVolumeComponent,
    AstucePilotageComponent,
    ParametresComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
