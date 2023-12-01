export class Recipe {
      id: number;
      name: string;
      description: string;
      ingridients: string;
  
      constructor(id: number, name: string, description: string, ingridients: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.ingridients = ingridients;
      }
    }
  