import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {
  searchTerm: string = '';
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      likes: 15,
      favorites: 8
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      likes: 5,
      favorites: 2
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      likes: 12,
      favorites: 6
    },
    {
      id: 4,
      title: 'Moderniser l\'interface utilisateur',
      description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      likes: 25,
      favorites: 15
    },
    {
      id: 5,
      title: 'Formation à la sécurité informatique',
      description: 'Organisation d\'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.',
      category: 'Formation',
      date: new Date('2025-02-05'),
      status: 'acceptee',
      likes: 32,
      favorites: 20
    }
  ];

  filteredSuggestions: Suggestion[] = [...this.suggestions];

  filterSuggestions(): void {
    if (!this.searchTerm) {
      this.filteredSuggestions = [...this.suggestions];
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredSuggestions = this.suggestions.filter(suggestion =>
      suggestion.title.toLowerCase().includes(term) ||
      suggestion.category.toLowerCase().includes(term)
    );
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'acceptee': return 'bg-success';
      case 'refusee': return 'bg-danger';
      case 'en_attente': return 'bg-warning text-dark';
      default: return 'bg-secondary';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'acceptee': return 'ACCEPTÉE';
      case 'refusee': return 'REFUSÉE';
      case 'en_attente': return 'EN ATTENTE';
      default: return status;
    }
  }

  likeSuggestion(suggestion: Suggestion): void {
    console.log(`Liked suggestion: ${suggestion.title}`);
    alert(`Vous avez aimé la suggestion: ${suggestion.title}`);
  }

  addToFavorites(suggestion: Suggestion): void {
    console.log(`Added to favorites: ${suggestion.title}`);
    alert(`Suggestion "${suggestion.title}" ajoutée aux favoris`);
  }
}
