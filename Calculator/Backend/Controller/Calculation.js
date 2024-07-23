export const calculates = (req, res) => {
  const { num1, num2, operation } = req.body;
  let result = 0;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "mul":
      result = num1 * num2;
      break;
    case "div":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }
  res.send({ result });
};
