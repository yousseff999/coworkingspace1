import { Component,OnInit  } from '@angular/core';
import { reclamationService } from '../../services/reclamation.service';
import { Reclamation } from '../../models/reclamation';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-rec',
  templateUrl: './add-rec.component.html',
  styleUrl: './add-rec.component.css'
})
export class AddRecComponent {
  reclamation: Reclamation = {
    reclamationTitle: '',
    reclamationDescription: '',
    category: '',
    recImage: '',
    reclamationDate: new Date(),
    userReclamations: null
  };

  constructor(private reclamationService: reclamationService) { }

  onSubmit() {
    const formData = new FormData();
    formData.append('reclamationTitle', this.reclamation.reclamationTitle);
    formData.append('reclamationDescription', this.reclamation.reclamationDescription);
    formData.append('category', this.reclamation.category);
    // Assuming `recImage` is the file input element
    if (this.reclamation.recImage) {
        formData.append('recImage', this.reclamation.recImage);
    }

    this.reclamationService.addReclamation(formData).subscribe(
      (response: any) => { // Add type for response
    console.log('Reclamation added successfully', response);
  },
  (error: any) => { // Add type for error
    console.error('There was an error!', error);
  }
    );
}
onFileChange(event: any) {
  if (event.target.files.length > 0) {
      this.reclamation.recImage = event.target.files[0];
  }
}
}
