function scuberGreetingForFeet(someNumber) {
  if (someNumber <= 400) {
    return 'This one is on me!';
  }
  else if (someNumber > 400 && someNumber <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (someNumber > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(someCity) {
  const value
  someCity ? "Ok, sounds good." : "No go.";
  return value 
}