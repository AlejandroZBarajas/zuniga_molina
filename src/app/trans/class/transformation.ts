  export class Transformation {

    ki:string;
    name: string;
    image: string;
    description: string 
  
    constructor(data: Partial<Transformation>) {

      this.ki = data.ki || ""
      this.name = data.name || '';
      this.image = data.image || '';
      this.description = data.description || ''
    }

  }
  