import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
//import { TasksService } from './app/tasks/tasks.service';

//  Says this is the worse approach, bec the TasksService is ALWAYS loaded,
//  even tho maybe u only need it for 1/5 web pages or something.
//  So @Injectable() is better.

//bootstrapApplication(AppComponent, {
//providers: [TasksService],
//}).catch((err) => console.error(err));
bootstrapApplication(AppComponent).catch((err) => console.error(err));
