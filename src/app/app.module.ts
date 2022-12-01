import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageboxComponent } from './messagebox/messagebox.component';
import { ChatscreenComponent } from './chatscreen/chatscreen.component';
import { StartComponent } from './start/start.component';
import { HttpClientModule } from '@angular/common/http';

export const appRoutes: Routes = [
  { path: 'home', component: StartComponent },
  { path: 'chat', component: ChatscreenComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    MessageboxComponent,
    ChatscreenComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
