import Big from "big.js";

const isNumber = (item) => {
  return /[0-9]+/.test(item);
};

const operate = (num1, num2, operation) => {
  const n1 = Big(num1 || "0");
  const n2 = Big(num2 || (operation === "÷" || operation === "x" ? "1" : "0"));

  switch (operation) {
    case "+":
      return n1.plus(n2).toString();
    case "-":
      return n1.minus(n2).toString();
    case "x":
      return n1.times(n2).toString();
    case "÷":
      console.log(n2, n2 === "0");
      if (n2.eq("0")) {
        alert("Divide by 0 error");
        return "0";
      }
      return n1.div(n2).toString();
    default:
      throw Error(`Unknown operation '${operation}'`);
  }
};

const calculate = (state, buttonName) => {
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && state.next === "0") {
      return {};
    }

    if (state.operation) {
      if (state.next) {
        return { next: state.next + buttonName };
      }
      return { next: buttonName };
    }

    if (state.next) {
      return {
        next: state.next === "0" ? buttonName : state.next + buttonName,
        total: null,
      };
    }

    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === "%") {
    if (state.operation && state.next) {
      const result = operate(state.total, state.next, state.operation);
      return {
        total: Big(result)
          .div(Big("100"))
          .toString(),
        next: null,
        operation: null,
      };
    }
    if (state.next) {
      return {
        next: Big(state.next)
          .div(Big("100"))
          .toString(),
      };
    }
    return {};
  }

  if (buttonName === ".") {
    if (state.next) {
      if (state.next.includes(".")) {
        return {};
      }
      return { next: state.next + "." };
    }
    return {};
  }

  if (buttonName === "=") {
    if (state.next && state.operation) {
      return {
        total: operate(state.total, state.next, state.operation),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === "+/-") {
    if (state.next) {
      return { next: (-1 * parseFloat(state.next)).toString() };
    }
    if (state.total) {
      return { total: (-1 * parseFloat(state.total)).toString() };
    }
    return {};
  }

  if (state.operation) {
    return {
      total: operate(state.total, state.next, state.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!state.next) {
    return { operation: buttonName };
  }

  return {
    total: state.next,
    next: null,
    operation: buttonName,
  };
};

export default calculate;
