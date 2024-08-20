import { Component } from '@angular/core';
import { reclamationService } from '../../services/reclamation.service';
import { Reclamation } from '../../models/reclamation';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-rec-list',
  templateUrl: './rec-list.component.html',
  styleUrl: './rec-list.component.css'
})
export class RecListComponent   {

  reclamations: Reclamation[] = [];
  private router: Router; 

  constructor(private reclamationService: reclamationService,router: Router) { 
    this.router = router; 
  }

  ngOnInit(): void {
    this.fetchReclamations();
  }

  fetchReclamations(): void {
    this.reclamationService.getAllReclamations().subscribe(
      (data: Reclamation[]) => {
        this.reclamations = data;
        this.reclamations.forEach(reclamation => {
          if (reclamation.reclamationID !== undefined) {
            this.reclamationService.getImageUrl(reclamation.reclamationID).subscribe(
              (imageUrl: string) => {
                reclamation.recImage = imageUrl;
              },
              error => {
                console.error('Error fetching image URL', error);
              }
            );
          } else {
            console.warn('Reclamation ID is undefined');
          }
        });
      },
      error => {
        console.error('Error fetching reclamations', error);
      }
    );
  }
  deleteReclamation(id: number): void {
    if (confirm('Are you sure you want to delete this reclamation?')) {
      this.reclamationService.deleteReclamation(id).subscribe(
        () => {
          this.reclamations = this.reclamations.filter(r => r.reclamationID !== id);
          console.log('Reclamation deleted successfully');
        },
        error => {
          console.error('There was an error deleting the reclamation!', error);
        }
      );
    }
  }
  respondToReclamation(id: number): void {
    this.reclamationService.getReclamation(id).subscribe(
      (reclamation: Reclamation) => {
        // Navigate to the respond component with the reclamation ID
        this.router.navigate(['/respond', id]);
      },
      error => {
        console.error('Error fetching reclamation details', error);
      }
    );
  }

}