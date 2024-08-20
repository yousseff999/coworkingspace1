import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation.model';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-manage-reservations',
  templateUrl: './manage-reservations.component.html',
  styleUrls: ['./manage-reservations.component.css']
})
export class ManageReservationsComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservations();
  }


getReservations(): void {
  this.reservationService.getReservations().subscribe(
    (data: Reservation[]) => {
      // Create separate Date objects
      data.forEach(reservation => {
        reservation.dateDebutObj = new Date(reservation.dateDebut);
        reservation.dateFinObj = new Date(reservation.dateFin);
      });

      this.reservations = data;
    },
    (error: any) => {
      console.error('Error fetching reservations', error);
    }
  );
}
  
  

  deleteReservation(id: number): void {
    if (id === undefined) {
      console.error('Invalid reservation ID');
      return;
    }

    this.reservationService.deleteReservation(id).subscribe(
      () => {
        this.reservations = this.reservations.filter(r => r.idReservation !== id);
        console.log('Reservation deleted successfully');
      },
      (error: any) => {
        console.error('Error deleting reservation', error);
      }
    );
  }
}
