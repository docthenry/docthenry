class Movie {
    constructor(title, availableCopies) {
      this.title = title;
      this.availableCopies = availableCopies;
      this.rentedCopies = 0;
    }
  
    rentMovie() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        this.rentedCopies++;
        return true;
      } else {
        return false; // Movie not available for rent
      }
    }
  
    returnMovie() {
      if (this.rentedCopies > 0) {
        this.rentedCopies--;
        this.availableCopies++;
        return true;
      } else {
        return false; // No rented copies to return
      }
    }
  }