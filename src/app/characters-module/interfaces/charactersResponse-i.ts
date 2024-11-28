import { CharacterI } from './character-i';

export interface CharactersResponseI {
  items: CharacterI[];
  meta: MetaResponseI;
  links: LinksI;
}

interface MetaResponseI {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

interface LinksI {
  first: string;
  previous: string;
  next: string;
  last: string;
}
