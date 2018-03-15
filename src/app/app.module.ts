import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImageryModule } from './imagery/imagery.module';
import { ProvidersModule } from './providers/providers.module';
import { CustomModule } from './custom/custom.module';


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
