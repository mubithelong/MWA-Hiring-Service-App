export interface Worker {
  employeeProfile: {
    name: String;
    email: String;
    address: { street: String; zip: String; city: String; country: String };
  };
  _id?: String;
  jobName: { name: String };
  hourlyRate: Number;
  experiance: Number;
}
