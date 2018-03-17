class Trip {
  constructor(myTrain, tripData ) {
    this.speed = myTrain.speed;
    //
    this.starting_location = tripData.departure.address;
    this.starting_latitude = tripData.departure.lat;
    this.starting_longitude = tripData.departure.lng;
    //
    this.ending_location = tripData.arrival.address;
    this.ending_latitude = tripData.arrival.lat;
    this.ending_longitude = tripData.arrival.lng;
    //
    this.departure_date = tripData.date;
    this.departure_time = tripData.time;
    //
    this.name = tripData.name;
  }
  
  get distance() {
    return distance(this.starting_latitude, this.starting_longitude, this.ending_latitude, this.ending_longitude);
  }
  
  get time() {
    var trip_distance = this.distance;
    var speed = this.speed;
    var time = trip_distance / speed;
    var hours = time * 60 * 60;
    return parseInt( time.toFixed(2) );
  }
  
  get departure () {
    //return Date.parse('yesterday');
    return Date.parse(this.departure_date + " " + this.departure_time);
  }
  
  get arrival() {
    var departure = this.departure;
    return departure.add( this.time ).hours();
  }
  
  get departed() {
    //var result = Date.today().compareTo( this.departure );
    var result = this.departure.compareTo( Date.today() );
    //return result;
    if ( result <= 0 )
      return true;
    return false;
  }
  
  get arrived() {
    //var result = Date.today().compareTo( this.arrival );
    var result = this.arrival.compareTo( Date.today() );
    //return result;
    if ( result <= 0 )
      return true;
    return false;
  }
}