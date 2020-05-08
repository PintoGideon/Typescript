interface Lecturer {
  name: string;
  age: number;
}

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

function updatePerson(person: Lecturer, prop: MyPartial<Lecturer>) {
  return { ...person, ...prop };
}

const lecturer: Lecturer = {
  name: "Gideon",
  age: 26,
};

updatePerson(lecturer, { name: "ABC" });

// Required Mapped Type

interface Pastor {
  name: string;
  age?: number;
}

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

function printAge(person: Required<Pastor>) {
  return `${person.name} is ${person.age}`;
}

const pastor: Required<Pastor> = {
  name: "Todd",
  age: 27,
};

const age = printAge(pastor);
