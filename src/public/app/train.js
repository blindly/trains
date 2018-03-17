/*
class Train {
  constructor() {
    this.name = "Choo Choo";
    this.speed = 4;
    this.level = 0;
  }
  
  departing() {
    return "All Aboard! ";
  }
  
  arriving( ) {
    return "Now Arriving! ";
  }
  
  get sound() {
    return "choo choo";
  }
  
}
*/

class Train {
  constructor(data) {
    this.name = data.name;
    this.speed = data.speed;
    //this.level = level;
  }
  
  departing() {
    return "All Aboard! ";
  }
  
  arriving( ) {
    return "Now Arriving! ";
  }
  
  get sound() {
    return "choo choo";
  }
  
}