export class Reclamation {
  reclamationID?: number;
  reclamationTitle: string = '';
  reclamationDescription: string = '';
  category: string = ''; // Assurez-vous que cette correspond à votre énumération dans le backend
  recImage: string = '';
  reclamationDate: Date = new Date();
  userReclamations: any = {}; // Vous pouvez créer un modèle pour l'utilisateur également
}
