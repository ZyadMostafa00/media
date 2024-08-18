import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
// import { WatchPipe } from './watch.pipe';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    // WatchPipe

  ]
  ,
  bootstrap: [AppComponent],
})
export class AppServerModule {}
