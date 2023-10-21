const student = [
  {id : 12, name : "Tanjir"},
  {id : 14, name : "Shawal"},
  {id : 12, name : "Adib"},
  {id : 15, name : "samiul"},
]
const Name = student.map(s => s.name);
console.log(Name);
for( let i = 0; i < Name.length; i ++){
  let element = Name[i];
  console.log(element)
}
