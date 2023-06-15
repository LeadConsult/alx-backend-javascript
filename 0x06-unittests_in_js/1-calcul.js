function calculateNumber(type, a, b) {
  const a_num = Math.round(a);
  const b_num = Math.round(b);
  let c = 0;
  switch (type) {
  case 'SUM':
c = a_num + b_num;
break;
  case 'SUBTRACT':
c = a_num - b_num;
break;
  case 'DIVIDE':
    if (b_num === 0) {
          c = "Error";
    } else {
          c = a_num / b_num;
    }
    break;
  }
  return c;
}

module.exports = calculateNumber;
