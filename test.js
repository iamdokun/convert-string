// Create function to convert given string to the output below

// Input
const optionRule =
  "{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})";

// Output Example
/* const output = {
  and: [
    1069,
    { or: [1070, 1071, 1072] },
    1244,
    { or: [1245, 1339] },
  ]
}; */

const fnconvertString = (str) => {
  const strArr = str.split(" AND ");
  const output = strArr.map((item) => {
    let temp = item.split(" OR ");
    if (temp.length < 2) {
      return Number(temp[0].replace(/[{()}]/g, ""));
    } else {
      let temp1 = temp.map((i) => Number(i.replace(/[{()}]/g, "")));
      return {
        or: temp1,
      };
    }
  });
  return output;
};

let result = fnconvertString(optionRule);

console.log("result:", result);
