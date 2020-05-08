interface Student {
  name: string;
  age: number;
}

const student: Student = {
  name: "Todd",
  age: 27,
};

function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

const newPerson = freeze(student);

//Inside the hood

type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
