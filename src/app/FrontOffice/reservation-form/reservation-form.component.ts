import { Component } from '@angular/core';
import { Reservation } from '../../models/reservation.model';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent {
  reservation: Reservation = {
    dateDebut: '',
    dateFin: '',
    duree: 0,
    salle: { idSalle: 1, description: '', nombrePlace: 0, forfait: 0, numSalle: '' },
    user: { idUser: 1, firstName: '', lastName: '', email: '', phoneNumber: '', role: '' }
  };
  constructor(private reservationService: ReservationService) { }
  onSubmit() {
    this.reservationService.createReservation(this.reservation).subscribe(
      response => {
        console.log('Reservation created successfully', response);
      },
      error => {
        console.error('Error creating reservation', error);
      }
    );
  }

}
