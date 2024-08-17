import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation.model';
import { ReservationService } from '../../services/reservation.service';


@Component({
  selector: 'app-admin-reservations',
  templateUrl: './admin-reservation.component.html',
  styleUrls: ['./admin-reservation.component.css']
})
export class AdminReservationsComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getAllReservations();
  }

  getAllReservations(): void {
    this.reservationService.getReservations().subscribe(
      (data: Reservation[]) => {
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
