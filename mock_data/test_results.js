export default {
  tests: [
    {
      id: 1,
      pass: false,
      expected: "2",
      actual: "6",
      input: '"honey sugar" "rice milk potato"',
    },
    {
      id: 2,
      pass: false,
      expected: "1",
      actual: "2",
      input:
        '"pork shrimp marshmallow" "asparagus shrimp lobster crayfish bacon"',
    },
    {
      id: 3,
      pass: true,
      expected: "5",
      actual: "5",
      input: '"a e i o u" "b c d f g h j k l m n p q r s t v w x y z"',
    },
    {
      id: 4,
      pass: true,
      expected: "3",
      actual: "3",
      input:
        '"chocolate vanilla strawberry" "napolean creamcheese ham steak eggs veal liver"',
    },
    {
      id: 5,
      pass: true,
      expected: "0",
      actual: "0",
      input: '"this that" "the other that this"',
    },
    {
      id: 6,
      pass: false,
      expected: "4",
      actual: "5",
      input: '"eggs grits butter coffee" "fried omelette poached tea salt"',
    },
    {
      id: 7,
      pass: false,
      expected: "3",
      actual: "6",
      input: '"milk sugar chocolate" "milkchocolate"',
    },
  ],
  message: "Try using while loops",
};
