export interface Job {
  clientInfo: {
    firstName: String;
    lasttName: String;
    email: { type: String; unique: true };
    address: {
      street: String;
      zip: String;
      city: String;
    };
  };
  workerEmail: { type: String; unique: true };
  startDate: Date;
  endDate: Date;
  hourlyRate: Number;
}
