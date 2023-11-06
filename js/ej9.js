for (let i = 1; i <= 500; i++) {
  if (i % 4 === 0) {
    document.write(`<p>${i} multiplo de 4</p>`);
  }else if (i % 9 === 0) {
    document.write(`<p>${i} multiplo de 9</p>`);
  }else{
    document.write(`<p>${i}</p>`);

  }

  if (i % 5 === 0) {
    document.write(`-----------------------------------------`);
  }
}
