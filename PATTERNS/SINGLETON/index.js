// monostate - not recommended

class ChiefExecutiveOfficer {
  get name() {
    return ChiefExecutiveOfficer._name;
  }

  set name(value) {
    ChiefExecutiveOfficer._name = value;
  }

  get age() {
    return ChiefExecutiveOfficer._age;
  }

  set age(value) {
    ChiefExecutiveOfficer._age = value;
  }
}

ChiefExecutiveOfficer._age = undefined;
ChiefExecutiveOfficer._name = undefined;
