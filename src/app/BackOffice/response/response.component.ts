import { Component } from '@angular/core';
import { reclamationService } from '../../services/reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {
  reclamationId!: number;
  responseText: string = '';

  constructor(
    private reclamationService: reclamationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reclamationId = +this.route.snapshot.paramMap.get('id')!;
  }

  sendResponse(): void {
    this.reclamationService.respondToReclamation(this.reclamationId, this.responseText).subscribe(
      () => {
        console.log('Response sent successfully');
        this.router.navigate(['/reclamations']); // Redirect back to the reclamations list
      },
      error => {
        console.error('Error sending response', error);
      }
    );
  }
}
