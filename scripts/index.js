const formBody = document.querySelector(".body");
const newTodoBtn = document.querySelector(".add-btn");
const win = document.querySelector(".win");

newTodoBtn.addEventListener("click", function () {
  let right = document.createElement("div");
  let middle = document.createElement("div");
  let left = document.createElement("div");
  let newForm = document.createElement("form");
  let check = document.createElement("input");
  let label = document.createElement("textarea");
  let editBtn = document.createElement("button");
  let delBtn = document.createElement("button");

  right.classList.add("right");
  middle.classList.add("middle");
  left.classList.add("left");
  newForm.classList.add("new-form");
  check.setAttribute("type", "checkbox");
  label.setAttribute("placeholder", "Enter New To Do Here...");
  label.classList.add("new-label");
  editBtn.classList.add("btn", "edit");
  editBtn.textContent = "Edit";
  delBtn.classList.add("btn", "delete");
  delBtn.textContent = "X";

  right.append(editBtn, delBtn);
  middle.append(label);
  left.append(check);
  newForm.append(left, middle, right);

  formBody.append(newForm);

  delBtn.addEventListener("click", function (e) {
    e.preventDefault();
    win.style.display = "block";
    window.addEventListener("click", function (e) {
      if (e.target == win) {
        win.style.display = "none";
      }
    });
    let cancelBtn = document.querySelector(".cancel");
    let delBtn = document.querySelector(".del");
    delBtn.addEventListener("click", function () {
      newForm.remove();
      win.style.display = "none";
    });
    cancelBtn.addEventListener("click", function () {
      win.style.display = "none";
    });
  });

  check.addEventListener("click", function () {
    label.classList.toggle("on-line");
  });

  editBtn.addEventListener("click", function (e) {
    e.preventDefault();
    label.focus();
  });

  label.focus();
});
