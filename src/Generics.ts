/*
const person = {
  name: "Todd",
  age: 27,
};

type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

const anotherPerson: Person = {
  name: "John",
  age: 30,
};

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, "age");
*/

class TypeScriptLessons {
  constructor(private name: string, private lessonNumber: number) {}
}

/*
class List {
  private list: any[];

  addItem(item: any): void {
    this.list.push(item);
  }

  getList(): any[] {
    return this.list;
  }
}

const list = new List();
// We don't want to harcode the list for a particular type of list
list.addItem(new TypeScriptLessons("Learning Generics", 1));

// Alternatively we could also use the same code to create a list for other types
// This can get error prone very quickly

//list.addItem(new GiftCoupons("Uber"));


// Let's modify our class List a bit 

*/

class List<T> {
  private list: T[];

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): T[] {
    return this.list;
  }
}

const list = new List<TypeScriptLessons>();
list.addItem(new TypeScriptLessons("Learning Generics", 1));
const retrievedList = list.getList();

class Coupon {
  constructor(private name: string) {}
}

const couponList = new List<Coupon>();
couponList.addItem(new Coupon("Uber"));
const retrievedCouponList = couponList.getList();


