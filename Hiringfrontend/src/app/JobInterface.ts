export interface Job {
  clientInfo: {
    name: String;
    address: {
      street: String;
      zip: String;
      city: String;
    };
  };
  startDate: Date;
  endDate: Date;
  hourlyRate: Number;
  workerId: String;
}
