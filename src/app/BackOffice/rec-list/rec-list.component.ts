import { Component } from '@angular/core';
import { reclamationService } from '../../services/reclamation.service';
import { Reclamation } from '../../models/reclamation';
@Component({
  selector: 'app-rec-list',
  templateUrl: './rec-list.component.html',
  styleUrl: './rec-list.component.css'
})
export class RecListComponent   {

  reclamations: Reclamation[] = [];

  constructor(private reclamationService: reclamationService) { }

  ngOnInit(): void {
    this.fetchReclamations();
  }

  fetchReclamations(): void {
    this.reclamationService.getAllReclamations().subscribe(
      (data: Reclamation[]) => {
        this.reclamations = data;
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
}