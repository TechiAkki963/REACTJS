const filter = (...args) => {
  return args.filter((e) => e % 2 === 0);
};

console.log(filter(1, 3, 5, 8, 11, 12, 15, 18));
