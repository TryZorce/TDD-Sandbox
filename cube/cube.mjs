export default class Cube {
    constructor(lgCote) {
      this.lgCote = lgCote;
    }
  
    perimetre() {
      return 12 * this.lgCote;
    }
  
    aireFace() {
      return this.lgCote * this.lgCote;
    }
  
    surface() {
      return 6 * this.aireFace();
    }
  
    volume() {
      return this.lgCote * this.lgCote * this.lgCote;
    }
  }
  