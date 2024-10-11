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

function toggleSelectors() {
  var subTasks = document.getElementById("selectors-subtasks");
  if (subTasks.style.display === "none") {
    subTasks.style.display = "flex";
    subTasks.style.flexDirection = "column";
    subTasks.style.gap = "20px";
  } else {
    subTasks.style.display = "none";
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
