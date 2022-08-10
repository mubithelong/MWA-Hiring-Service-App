export interface Jobpost {
  exprience: string;
  jobname: string;
  workerEmail: { type: String; unique: true };
  startdate: Date;
  enddate: Date;
  hourlyRate: Number;
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

  employeeProfile: {
    firstName: String;
    lasttName: String;
    email: { type: String; unique: true };
  };
}
