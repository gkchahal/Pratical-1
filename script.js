var nameEle             =document.body.querySelector(".name");
var increaseEle = document.body.querySelector(".inc");
var decreaseEle = document.body.querySelector(".dec");
var numberEle = document.body.querySelector(".number");
var number = 0;
numberEle.innerHTML = number;

var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for (var i = 0; i < list.length; i++) {
  var ele = document.createElement("div");
  ele.innerHTML = list[i].name + " is " + list[i].age + " years old";
   if (list[i].age > 40) {
  ele.style.color = "Red";
  }
  if (list[i].age < 20) {
  ele.style.color = "Blue";
  }

  nameEle.appendChild(ele);
}

function increase(num) {
  number = number + num;
  numberEle.innerHTML = number;
}function decrease() {
  number = number - 1;
  numberEle.innerHTML = number;
}increaseEle.addEventListener("click", function() {
  increase(1);
});