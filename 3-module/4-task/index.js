function showSalary(users, age) {
  let getAge = users
    .filter((elem) => elem.age <= age)
    .map((prop) => {
      return `${prop.name}, ${prop.balance}`;
    });
  let usStr = getAge.join("\n");
  return usStr;
}
