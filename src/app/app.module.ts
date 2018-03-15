import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ImageryModule } from '@injectable-custom-providers/imagery/imagery.module';
import { ProvidersModule } from '@injectable-custom-providers/providers/providers.module';
import { CustomModule } from '@custom/custom/custom.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageryModule,
    ProvidersModule,
    CustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
