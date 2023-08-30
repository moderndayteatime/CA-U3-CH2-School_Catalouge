class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
   get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if(typeof newNumberOfStudents === "number") {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.")
    }
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`)
  }

  static pickSubsituteTeacher(subsituteTeacher) {
    if (subsituteTeacher === undefined || subsituteTeacher.length === 0) {
    console.log("Empty array. Input subsitute teacher.")
    } else {
    let randomIndex = Math.floor(Math.random()*(subsituteTeacher.length-1))
    return subsituteTeacher[randomIndex];
    }
  }
}

  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name);
      this._numberOfStudents = numberOfStudents;
      this._level = "primary";
      this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
      this._pickupPolicy = pickupPolicy;
    }
  }

  class Middle extends School {
    constructor(name, numberOfStudents) {
      super(name);
      this._level = "middle";
      this._numberOfStudents = numberOfStudents;
    }
  }

  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name);
      this._level = "high";
      this._numberOfStudents = numberOfStudents;
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
  }
  }

  const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

  lorraineHansbury.quickFacts();

  School.pickSubsituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);


const alSmith = new HighSchool("Al E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])


  console.log(lorraineHansbury)
  console.log(alSmith)
 // console.log(alSmith.sportsTeams)

