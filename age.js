function ageCalculator(name, yearOfBirth, currentYear) {
  const howOld = currentYear - yearOfBirth;
  let result = name + ' is ' + howOld + ' years old.';
  return result;
}

console.log(ageCalculator('Miranda', 1983, 2015));
console.log(ageCalculator('Ferdinand', 1988, 2015));
