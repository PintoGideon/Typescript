interface Janitor {
  name: string;
  age: number;
  address: {
    [key: string]: string;
  };
  contact_number: number;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const janitor: MyPick<Janitor, "name" | "age" | "address"> = {
  name: "Todd",
  age: 27,
  address: {
    mosaic: "1694 Beacon Street",
  },
};
