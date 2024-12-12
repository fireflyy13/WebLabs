function hideAllLabDescriptions() {
  var fieldDescribe = document.querySelectorAll(".field-describe > div");
  fieldDescribe.forEach(function (div) {
    div.style.display = "none";
  });
}

function showLab1Tasks() {
  hideAllLabDescriptions();
  var labContainer = document.querySelector(".tasks");
  labContainer.innerHTML = `
    <button class="task" onClick="showPoint1()">Опис предметного середовища</button>
    <button class="task" onClick="showPoint2()">Тема, Мета, Місце</button>
    <button class="task" onClick="showPoint3()">Структура документів</button>
    <button class="task" onClick="showPoint4()">HTML-код таблиці</button>
    <button class="task" onClick="showPoint5()">HTML-код форми</button>
    <button class="task" onClick="showPoint6()">HTML-код зображення</button>
    <button class="task" onClick="showPoint7()">Висновки</button>
  `;
  labContainer.style.display = "flex";
}

function showLab2Tasks() {
  hideAllLabDescriptions();
  var labContainer = document.querySelector(".tasks");
  labContainer.innerHTML = `
    <button class="task" onClick="showPoint2_1()">Тема, Мета, Місце розташування</button>
    <button class="task" onClick="toggleSelectors()">Селектори</button>
    <div id="selectors-subtasks" style="display: none; padding-left: 20px;">
      <button class="task" onClick="showPoint2_3()">Селектори тегу</button>
      <button class="task" onClick="showPoint2_4()">Селектори класу</button>
      <button class="task" onClick="showPoint2_5()">Селектори ідентифікаторів</button>
      <button class="task" onClick="showPoint2_6()">Інші селектори</button>
    </div>
    <button class="task" style="font-size: 12px" onClick="showPoint2_7()">Шрифти, Текст, Таблиці, Фон, Контур, Списки, Просунутий</button>
     <button class="task" onClick="showPoint2_8()">Висновки</button>
  `;
  labContainer.style.display = "flex";
}

function showLab3Tasks() {
  hideAllLabDescriptions();
  var labContainer = document.querySelector(".tasks");
  labContainer.innerHTML = `
    <button class="task" onClick="showPoint3_1()">Тема, Мета, Місце розташування</button>
     <button class="task" onClick="showPoint3_2()">ЗАВДАННЯ №1</button>
    <button class="task" onClick="toggleSelectors()">ЗАВДАННЯ №2</button>
    <div id="selectors-subtasks" style="display: none; padding-left: 20px;">
      <button class="task" onClick="showPoint3_3()">Фіксована таблична верстка</button>
      <button class="task" onClick="showPoint3_4()">Гумова таблична верстка</button>
      <button class="task" onClick="showPoint3_5()">Фіксована блокова верстка</button>
      <button class="task" onClick="showPoint3_6()">Гумова блокова верстка</button>
    </div>
     <button class="task" onClick="toggleSelectors3()">ЗАВДАННЯ №3 FLEXBOX</button>
    <div id="selectors-subtasks3" style="display: none; padding-left: 20px;">
      <button class="task" onClick="showPoint3_7()">Скріншот сторінки (Flexbox)</button>
      <button class="task" onClick="showPoint3_8()">HTML-код (Flexbox)</button>
      <button class="task" onClick="showPoint3_9()">CSS-код (Flexbox)</button>
    </div>
    <button class="task" onClick="showPoint3_10()">ВИСНОВКИ</button>
  `;
  labContainer.style.display = "flex";
}

function showLab4Tasks() {
  hideAllLabDescriptions();
  var labContainer = document.querySelector(".tasks");
  labContainer.innerHTML = `
    <button class="task" onClick="showPoint4_1()">Тема, Мета, Місце розташування</button>
   <button class="task" onClick="showPoint4_2()">Десктопна версія</button>
   <button class="task" onClick="showPoint4_3()">Планшетна версія</button>
   <button class="task" onClick="showPoint4_4()">Мобільна версія</button>
   <button class="task" onClick="showPoint4_5()">Висновки</button>
  `;
  labContainer.style.display = "flex";
}

function showLab5Tasks() {
  hideAllLabDescriptions();
  var labContainer = document.querySelector(".tasks");
  labContainer.innerHTML = `
    <button class="task" onClick="showPoint5_1()">Тема, Мета, Місце розташування</button>
    <button class="task" onClick="showPoint5_2()">Завдання 1</button>
    <button class="task" onClick="showPoint5_3()">Завдання 2</button>
    <button class="task" onClick="showPoint5_4()">Завдання 3</button>
    <button class="task" onClick="showPoint5_5()">Завдання 4</button>
    <button class="task" onClick="showPoint5_6()">Завдання 5</button>
    <button class="task" onClick="showPoint5_7()">Висновки</button>
  `;
  labContainer.style.display = "flex";
}

function showLab6Tasks() {
  hideAllLabDescriptions();
  var labContainer = document.querySelector(".tasks");
  labContainer.innerHTML = `
    <button class="task" onClick="showPoint6_1()">Тема, Мета, Місце розташування</button>
    <button class="task" onClick="showPoint6_2()">Завдання 2</button>
    <button class="task" onClick="showPoint6_3()">Завдання 4</button>
    <button class="task" onClick="showPoint6_4()">Завдання 6</button>
    <button class="task" onClick="showPoint6_5()">Завдання 8</button>
    <button class="task" onClick="showPoint6_6()">Завдання 9</button>
      <button class="task" onClick="showPoint6_7()">Завдання 10</button>
    <button class="task" onClick="showPoint6_8()">Висновки</button>
  `;
  labContainer.style.display = "flex";
}

function showLab7Tasks() {
  hideAllLabDescriptions();
  var labContainer = document.querySelector(".tasks");
  labContainer.innerHTML = `
    <button class="task" onClick="showPoint7_1()">Тема, Мета, Місце розташування</button>
    <button class="task" onClick="showPoint7_2()">Завдання 2</button>
    <button class="task" onClick="showPoint7_3()">Завдання 4</button>
    <button class="task" onClick="showPoint7_4()">Завдання 6</button>
    <button class="task" onClick="showPoint7_5()">Завдання 7</button>
    <button class="task" onClick="showPoint7_6()">Завдання 8</button>
    <button class="task" onClick="showPoint7_7()">Завдання 9</button>
      <button class="task" onClick="showPoint7_8()">Завдання 10</button>
    <button class="task" onClick="showPoint7_9()">Висновки</button>
  `;
  labContainer.style.display = "flex";
}

function showLab8Tasks() {
  hideAllLabDescriptions();
  var labContainer = document.querySelector(".tasks");
  labContainer.innerHTML = `
    <button class="task" onClick="showPoint8_1()">Тема, Мета, Місце розташування</button>
    <button class="task" onClick="showPoint8_2()">Завдання 1</button>
    <button class="task" onClick="showPoint8_3()">Завдання 2</button>
    <button class="task" onClick="showPoint8_4()">Висновки</button>
  `;
  labContainer.style.display = "flex";
}

function toggleSelectors() {
  var subTasks = document.getElementById("selectors-subtasks");
  if (subTasks.style.display === "none") {
    subTasks.style.display = "flex";
    subTasks.style.flexDirection = "column";
    subTasks.style.gap = "20px";
  } else {
    subTasks.style.display = "none";
  }

  var subTasks3 = document.getElementById("selectors-subtasks3");
  if (subTasks3.style.display !== "none") {
    subTasks3.style.display = "none";
  }
}

function toggleSelectors3() {
  toggleSelectors();
  var subTasks = document.getElementById("selectors-subtasks3");
  if (subTasks.style.display === "none") {
    subTasks.style.display = "flex";
    subTasks.style.flexDirection = "column";
    subTasks.style.gap = "20px";
  } else {
    subTasks.style.display = "none";
  }

  var subTasks1 = document.getElementById("selectors-subtasks");
  if (subTasks1.style.display !== "none") {
    subTasks1.style.display = "none";
  }
}
function showPoint1() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point1").style.display = "block";
}

function showPoint2() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point2").style.display = "block";
}

function showPoint3() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point3").style.display = "block";
}

function showPoint4() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point4").style.display = "block";
}

function showPoint5() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point5").style.display = "block";
}

function showPoint6() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point6").style.display = "block";
}

function showPoint7() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point7").style.display = "block";
}

function showPoint2_3() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point2_3").style.display = "block";
}

function showPoint2_4() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point2_4").style.display = "block";
}

function showPoint2_5() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point2_5").style.display = "block";
}

function showPoint2_6() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point2_6").style.display = "block";
}

function showPoint2_1() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point2_1").style.display = "block";
}

function showPoint2_7() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point2_7").style.display = "block";
}

function showPoint2_8() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point2_8").style.display = "block";
}

function showPoint3_1() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point3_1").style.display = "block";
}

function showPoint3_2() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point3_2").style.display = "block";
}

function showPoint3_3() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point3_3").style.display = "block";
}

function showPoint3_4() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point3_4").style.display = "block";
}

function showPoint3_5() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point3_5").style.display = "block";
}

function showPoint3_6() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point3_6").style.display = "block";
}

function showPoint3_7() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point3_7").style.display = "block";
}

function showPoint3_8() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point3_8").style.display = "block";
}

function showPoint3_9() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point3_9").style.display = "block";
}

function showPoint3_10() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point3_10").style.display = "block";
}

function showPoint4_1() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point4_1").style.display = "block";
}

function showPoint4_2() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point4_2").style.display = "block";
}

function showPoint4_3() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point4_3").style.display = "block";
}

function showPoint4_4() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point4_4").style.display = "block";
}

function showPoint4_5() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point4_5").style.display = "block";
}

function showPoint5_1() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point5_1").style.display = "block";
}

function showPoint5_2() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point5_2").style.display = "block";
}

function showPoint5_3() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point5_3").style.display = "block";
}

function showPoint5_4() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point5_4").style.display = "block";
}

function showPoint5_5() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point5_5").style.display = "block";
}

function showPoint5_6() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point5_6").style.display = "block";
}

function showPoint5_7() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point5_7").style.display = "block";
}

function showPoint6_1() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point6_1").style.display = "block";
}

function showPoint6_2() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point6_2").style.display = "block";
}

function showPoint6_3() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point6_3").style.display = "block";
}

function showPoint6_4() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point6_4").style.display = "block";
}

function showPoint6_5() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point6_5").style.display = "block";
}

function showPoint6_6() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point6_6").style.display = "block";
}

function showPoint6_7() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point6_7").style.display = "block";
}

function showPoint6_8() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point6_8").style.display = "block";
}

function showPoint7_1() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point7_1").style.display = "block";
}

function showPoint7_2() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point7_2").style.display = "block";
}

function showPoint7_3() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point7_3").style.display = "block";
}

function showPoint7_4() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point7_4").style.display = "block";
}

function showPoint7_5() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point7_5").style.display = "block";
}

function showPoint7_6() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point7_6").style.display = "block";
}

function showPoint7_7() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point7_7").style.display = "block";
}

function showPoint7_8() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point7_8").style.display = "block";
}

function showPoint7_9() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point7_9").style.display = "block";
}

function showPoint8_1() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point8_1").style.display = "block";
}

function showPoint8_2() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point8_2").style.display = "block";
}

function showPoint8_3() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point8_3").style.display = "block";
}

function showPoint8_4() {
  var points = document.querySelectorAll(".field-describe > div");
  points.forEach((point) => (point.style.display = "none"));
  document.getElementById("point8_4").style.display = "block";
}

window.onload = function () {
  showLab1Tasks();
};
