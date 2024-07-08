const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(numbers);
console.log(sum);

const data = [
  { id: 1, type: "A" },
  { id: 2, type: "B" },
  { id: 3, type: "A" },
];

const countByType = data.reduce((acc, item) => {
  acc[item.type] = (acc[item.type] || 0) + 1;
  return acc;
}, {});

console.log(countByType); // Output: { A: 2, B: 1 }
