const personlist = [{name:'Laura',lastName:'Muñoz', age:28},
{name:'Brayan',lastName:'Manrique', age:31},
{name:'Julian',lastName:'Lopez', age:32},
{name:'Sofia',lastName:'Perez', age:7},
{name:'Jhoselin',lastName:'Gomez', age:13},
{name:'Deyxie',lastName:'Muñoz', age:33},
{name:'Fernanda',lastName:'Madrid', age:15}
]

const filterAge= (list) => {
const filterData= list?.filter((value) => value.age >= 18)



const sortData = filterData.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  
  return sortData
}

console.log (filterAge (personlist))

