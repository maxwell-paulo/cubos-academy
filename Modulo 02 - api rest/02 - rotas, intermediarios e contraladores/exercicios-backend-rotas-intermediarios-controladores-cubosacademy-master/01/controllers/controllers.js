export const somarNumeros = (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    res.send("Por favor atribuir os valores de num1 e num 2");
  } else {
    const soma = Number(num1) + Number(num2);

    res.send(String(soma));
  }
};

export const subtrairNumeros = (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    res.send("Por favor atribuir os valores de num1 e num 2");
  } else {
    const subtracao = Number(num1) - Number(num2);

    res.send(String(subtracao));
  }
};

export const multiplicarNumeros = (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    res.send("Por favor atribuir os valores de num1 e num 2");
  } else {
    const multiplicacao = Number(num1) * Number(num2);

    res.send(String(multiplicacao));
  }
};

export const dividirNumeros = (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    res.send("Por favor atribuir os valores de num1 e num 2");
  } else {
    const divisao = Number(num1) / Number(num2);

    res.send(String(divisao));
  }
};
