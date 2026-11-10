import { Component } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TasksComponent],
  //  This won't work, because other services won't check for an Element Injector
  //  bec they aren't elements!
  //providers: [LoggingService],
})
export class AppComponent {}
