import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css']
})
export class SuggestionDetailsComponent implements OnInit {
  suggestionId: string | null = null;
  suggestion: Suggestion | undefined;
  
  private suggestions: Suggestion[] = [
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

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.suggestionId = this.route.snapshot.paramMap.get('id');
    
    if (this.suggestionId) {
      const id = parseInt(this.suggestionId, 10);
      this.suggestion = this.suggestions.find(s => s.id === id);
    }
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

  // Add like functionality
  likeSuggestion(): void {
    if (this.suggestion) {
      this.suggestion.likes = (this.suggestion.likes || 0) + 1;
    }
  }

  // Add favorite functionality
  toggleFavorite(): void {
    if (this.suggestion) {
      this.suggestion.favorites = (this.suggestion.favorites || 0) + 1;
    }
  }

  backToList(): void {
    this.router.navigate(['/suggestions']);
  }
}