export interface Worker {
  jobTitle: String;
  employeeProfile: {
    firstName: String;
    lastName: String;
    email: { type: String; unique: true };
    address: { street: String; zip: String; city: String };
  };
  _id?: String;

  hourlyRate: Number;
  experiance: Number;
}
