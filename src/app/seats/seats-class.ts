export class Seat {
  constructor(
    private id: number,
    private rep = '*',
    private isBook = false,
    private isDouble = false,
    private status = '',
    private isReserved = false,
    private price = null,
    private availability = true
    ) {
  }
  setid(id: number) {
    this.id = id;
  }
  setStatus(status: string) {
    this.status = status;
  }
  getStatus(): string {
    return this.status;
  }
  setPrice(price: number ) {
    this.price = price;
  }
  getPrice(): number {
    return this.price;
  }
  setAvailability(availability: boolean) {
    this.availability = availability;
    if (!this.availability && !this.isBook) {
      this.setRep('#');
    }
  }
  markAsReserved() {
    if (!this.isReserved) {
      this.setRep('O');
      this.isReserved = true;
    }
  }
  getId() {
    return this.id;
  }
  getAvailability() {
    return this.availability;
  }
  setRep(rep: string) {
    this.rep = rep;
  }
}
