// regarding the .map function in react

//Arrays for map function

const myNumbers = [1, 2, 3, 4, 5, 6];

const mySandwich = [
  "bread",
  "mayo",
  "ham",
  "cheese",
  "tomato",
  "mayo",
  "bread",
];

const myUsers = [
  { name: "Alice", age: 30, id: "21421241" },
  { name: "Bob", age: 24, id: "41421241" },
  { name: "Carol", age: 33, id: "61421241" },
];

const squaredNum = myNumbers.map((number) => number * number);

const captialisedString = mySandwich.map(
  (ingredients) => ingredients.charAt(0).toUpperCase() + ingredients.slice(1)
);

// this…
// const userName = myUsers.map((userName) => userName.name);
// const userAge = myUsers.map((userAge) => userAge.age);
// can be simplified to this…
const userDetails = myUsers.map((user) => `${user.name} is ${user.age}. `);

export default function TestMap() {
  return (
    <>
      <p>{squaredNum}</p>
      <p>{captialisedString}</p>
      <p>{userDetails}</p>
      <ul>
        {myUsers.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age}
          </li>
        ))}
      </ul>
    </>
  );
}
