import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {
  private recommendationsSource = new BehaviorSubject({});
  currentRecommendations = this.recommendationsSource.asObservable();

  constructor(
    private dataService: DataService
  ) { }

  updateRecommendations(userLogin) {
    this.dataService.getRecommendations(userLogin)
      .subscribe((response) => this.recommendationsSource.next(response));
  }
}
