import { MockBackendService } from './mock-backend/mock-backend.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // Bootstrap mock backend service
  constructor(private mockBackend: MockBackendService) { }
}
