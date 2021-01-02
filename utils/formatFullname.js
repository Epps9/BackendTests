module.exports = (fullName) => {
  const [ firstName, lastName ] = fullName.split(' ');
  if(!firstName || !lastName) return 'Error';
  if(firstName || lastName) return 'Error' ;
  if(fullName.split(' ') === firstName, lastName, adress) return 'Error';
  return firstName[0].toUpperCase + firstName.slice(1).toLowerCase() + lastName[0].toUpperCase + lastName.slice(1).toLowerCase() ;
};
