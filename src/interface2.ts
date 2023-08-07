interface Person {
  name: string;
  age?: number;
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "사람",
  age: 20,
};

const expert: Developer = {
  name: "개발",
  skills: ["react", "javascript"],
};

const people: Person[] = [person, expert];
