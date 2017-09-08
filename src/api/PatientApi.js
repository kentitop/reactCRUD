import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const patients = [
   {
      firstName: "John",
      lastName: "Cena",
      email: "q.dot@test.com",
      phone: "03040394939",
      birthday: "03/09/1991",
      id:"11610229244306956503",
      medicines: []
   },
   {
      firstName: "Boul",
      lastName: "Bill",
      email: "dot@test.com",
      phone: "03040394939",
      birthday: "03/09/1991",
      id:"1161022963506956089",
      medicines: []
   },
   {
      firstName: "Mike",
      lastName: "Doiu",
      email: "q.dt@test.com",
      phone: "03040394939",
      birthday: "03/09/1991",
      id:"11610229663456653",
      medicines: []
   },
   {
      firstName: "Moul",
      lastName: "Own",
      email: "dot@test.com",
      phone: "03040394939",
      birthday: "03/09/1991",
      id:"116102296624556503",
      medicines: []
   },
   {
      firstName: "Olez",
      lastName: "Palz",
      email: "qt@test.com",
      phone: "03040394939",
      birthday: "03/09/1991",
      id:"1161022966445664503",
      medicines: []
   },
   {
      firstName: "Jenny",
      lastName: "Lopez",
      email: "q.dot@test.com",
      phone: "03040394939",
      birthday: "03/09/1991",
      id:"1161022966423354503",
      medicines: []
   },
   {
      firstName: "Selena",
      lastName: "Molass",
      email: "q.dot@test.com",
      phone: "03040394939",
      birthday: "03/09/1991",
      id:"1161022966403945603",
      medicines: []
   },
   {
      firstName: "Iris",
      lastName: "Paliss",
      email: "q.dot@test.com",
      phone: "03040394939",
      birthday: "03/09/1991",
      id:"1161022966406956453",
      medicines: []
   },
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (patient) => {
  return patient.firstName.toLowerCase() + '-' + patient.lastName.toLowerCase();
};

class PatientApi {
    static getAllPatients() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], patients));
            }, delay);
        });
    }

    static savePatient(patient) {
        patient = Object.assign({}, patient); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minPatientNameLength = 1;
                if (patient.lastName.length < minPatientNameLength) {
                    reject(`Name must be at least ${minPatientNameLength} characters.`);
                }

                if (patient.id) {
                    const existingPatientIndex = patients.findIndex(a => a.id === patient.id);
                    patients.splice(existingPatientIndex, 1, patient);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new patients in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    patient.id = generateId(patient);
                    // patient.watchHref = `http://www.pluralsight.com/patients/${patient.id}`;
                    patients.push(patient);
                }

                resolve(patient);
            }, delay);
        });
    }

    static deletePatient(patientId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfPatientToDelete = patients.findIndex(patient => patient.id === patientId);
                patients.splice(indexOfPatientToDelete, 1);
                resolve();
            }, delay);
        });
    }


    static getPatient(patientId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingPatientIndex = patients.findIndex(patient => patient.id === patientId);

                const patientFound = Object.assign({}, patients[existingPatientIndex]);

                resolve(patientFound);

            }, delay);
        });
    }

}

export default PatientApi;
