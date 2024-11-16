const phonebook = new Map();
for (let i = 1; i <= 100000; i++) {
  const name = `Anh ${i}`;
  const phoneNumber = `0797570${i}`;
  phonebook.set(name, phoneNumber);
}
console.log(phonebook.get("Anh 2"));
console.log(phonebook.get("Anh 988"));
