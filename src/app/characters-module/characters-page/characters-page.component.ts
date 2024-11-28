import { Component, OnInit } from '@angular/core';
import { CharacterServiceService } from '../services/character-service.service';
import { CharactersResponseI } from '../interfaces/charactersResponse-i';
import { CharacterI } from '../interfaces/character-i';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css',
})
export class CharactersPageComponent implements OnInit {
  constructor(private charactersService: CharacterServiceService) {}
  charactersResponse: CharactersResponseI | undefined;
  charactersList: CharacterI[] = [];
  inputValue: string = '';

  ngOnInit(): void {
    this.charactersService.getCharactersResponse().subscribe((response) => {
      this.charactersResponse = response;
    });

    console.log(this.charactersList);
  }

  validateInput(value: string): boolean {
    const regex = /^[a-zA-Z0-9]*$/;
    const input = value;

    if (!regex.test(input)) {
      return false;
    } else {
      return true;
    }
  }

  loadCharacters(): void {
    if (this.validateInput(this.inputValue)) {
      if (this.charactersResponse)
        this.charactersList = this.charactersResponse.items;
      console.log(this.charactersList);
    } else {
      alert('No se pueden ingresar caracteres especiales');
    }
  }
}
