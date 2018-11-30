var mon_array = new Array();
var tue_array = new Array();
var wed_array = new Array();
var thu_array = new Array();
var fri_array = new Array();

function ToDo(date, title, content, priority) {
  this.date = date;
  this.title = title;
  this.content = content;

  this.priority = priority; // 우선순위도 추가.
}

function showPopup() {
  document.getElementById('light').style.display = 'block'; // 보이게
  document.getElementById('fade').style.display = 'block';
  document.getElementById('closePopup').style.display = 'block';
  document.getElementById('btn_Add').style.display = 'block';

  document.getElementById('pop_inputBox_priority_pre').style.display = 'none'; // 안보이게
  document.getElementById('pop_inputBox_priority_to').style.display = 'none'; // 안보이게
  document.getElementById('btn_Change').style.display = 'none';
  document.getElementById('closePopup_obj').style.display = 'none';
  document.getElementById('pop_btn_Selector_obj').style.display = 'none';

  document.getElementById('pop_btn_Selector').removeAttribute("disabled");
}

function closePopup() {
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none'
  document.getElementById('pop_btn_Selector').value = "";
  document.getElementById('pop_inputBox_title').value = "";
  document.getElementById('pop_inputBox_content').value = "";
}

function showPopup_obj(obj, arr) {
  document.getElementById('btn_Add').style.display = 'none';
  document.getElementById('closePopup').style.display = 'none';

  document.getElementById('closePopup_obj').style.display = 'block';
  document.getElementById('pop_inputBox_priority_pre').style.display = 'block';
  document.getElementById('pop_inputBox_priority_to').style.display = 'block';
  document.getElementById('btn_Change').style.display = 'block';
  document.getElementById('pop_btn_Selector_obj').style.display = 'block';

  var indexOfArray = obj.parentNode.getAttribute('value') - 1;
  // obj.parentNode = <div id mon_field> 이다.
  // 배열의 몇 번째 인덱스인지
  console.log("open한 배열의 index 번호  " + indexOfArray);

  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block'

  document.getElementById('pop_btn_Selector').value = arr[indexOfArray].date;
  document.getElementById('pop_btn_Selector').setAttribute("disabled", "true");

  document.getElementById('pop_inputBox_title').value = arr[indexOfArray].title;
  document.getElementById('pop_inputBox_content').value = arr[indexOfArray].content;

  document.getElementById('pop_inputBox_priority_pre').value = arr[indexOfArray].priority;
  document.getElementById('pop_inputBox_priority_pre').setAttribute("disabled", "true");

  console.log("수정버튼 누르기전 value" + document.getElementById('pop_inputBox_priority_pre').value);

}

function closePopup_obj() {
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none'
  document.getElementById('pop_btn_Selector').value = "";
  document.getElementById('pop_inputBox_title').value = "";
  document.getElementById('pop_inputBox_content').value = "";
}

function test(){
  console.log("test");
}

function add_item() {

  var newToDo = new ToDo(document.getElementById('pop_btn_Selector').value, // 새로운 일정 객체 생성.
    document.getElementById('pop_inputBox_title').value,
    document.getElementById('pop_inputBox_content').value, null);

  var i = newToDo.date;

  switch (i) {
    case 'Monday':
      newToDo.priority = mon_array.length + 1;
      mon_array.push(newToDo);

      document.getElementById('mon_p_date').innerHTML = "Date : " + newToDo.date;
      document.getElementById('mon_p_title').innerHTML = "Title : " + newToDo.title;

      var div = document.createElement('div');
      div.innerHTML = document.getElementById('mon_pre_set').innerHTML;
      div.setAttribute("class", "obj_pre_set");
      div.setAttribute("value", mon_array.length);
      div.setAttribute("id", "Monday");
      document.getElementById('mon_field').appendChild(div);
      break;

    case 'Tuesday':
      newToDo.priority = tue_array.length + 1;
      tue_array.push(newToDo);

      document.getElementById('tue_p_date').innerHTML = "Date : " + newToDo.date;
      document.getElementById('tue_p_title').innerHTML = "Title : " + newToDo.title;

      var div = document.createElement('div');
      div.innerHTML = document.getElementById('tue_pre_set').innerHTML;
      div.setAttribute("class", "obj_pre_set");
      div.setAttribute("value", tue_array.length);
      div.setAttribute("id", "Tuesday");
      document.getElementById('tue_field').appendChild(div);
      break;

    case 'Wednesday':
      newToDo.priority = wed_array.length + 1;
      wed_array.push(newToDo);

      document.getElementById('wed_p_date').innerHTML = "Date : " + newToDo.date;
      document.getElementById('wed_p_title').innerHTML = "Title : " + newToDo.title;

      var div = document.createElement('div');
      div.innerHTML = document.getElementById('wed_pre_set').innerHTML;
      div.setAttribute("class", "obj_pre_set");
      div.setAttribute("value", wed_array.length);
      div.setAttribute("id", "Wednesday");
      document.getElementById('wed_field').appendChild(div);
      break;

    case 'Thursday':
      newToDo.priority = thu_array.length + 1;
      thu_array.push(newToDo);

      document.getElementById('thu_p_date').innerHTML = "Date : " + newToDo.date;
      document.getElementById('thu_p_title').innerHTML = "Title : " + newToDo.title;

      var div = document.createElement('div');
      div.innerHTML = document.getElementById('thu_pre_set').innerHTML;
      div.setAttribute("class", "obj_pre_set");
      div.setAttribute("value", thu_array.length);
      div.setAttribute("id", "Thursday");
      document.getElementById('thu_field').appendChild(div);
      break;

    case 'Friday':
      newToDo.priority = fri_array.length + 1;
      fri_array.push(newToDo);

      document.getElementById('fri_p_date').innerHTML = "Date : " + newToDo.date;
      document.getElementById('fri_p_title').innerHTML = "Title : " + newToDo.title;

      var div = document.createElement('div');
      div.innerHTML = document.getElementById('fri_pre_set').innerHTML;
      div.setAttribute("class", "obj_pre_set");
      div.setAttribute("value", fri_array.length);
      div.setAttribute("id", "Friday");
      document.getElementById('fri_field').appendChild(div);
      break;

    default:
  }

  closePopup();
}

function change_item() {

  var pre_set = document.getElementsByClassName('obj_pre_set');
  var targetField;
  var targetArray;
  var isDateChange = 0;
  for (var i = 0; i < pre_set.length; i++) {
    if (pre_set[i].getAttribute('id') == document.getElementById('pop_btn_Selector').value) {
      targetField = pre_set[i].parentNode;
    }
  }
  console.log(targetField);

  switch (targetField.getAttribute('id')) {
    case 'mon_field':
      targetArray = mon_array;
      break;
    case 'tue_field':
      targetArray = tue_array;
      break;
    case 'wed_field':
      targetArray = wed_array;
      break;
    case 'thu_field':
      targetArray = thu_array;
      break;
    case 'fri_field':
      targetArray = fri_array;
      break;
    default:
      break;
  }
  console.log("타겟 어레이" + targetArray[0].date);

  if (targetArray[0].date != document.getElementById('pop_btn_Selector_obj').value &&
    document.getElementById('pop_btn_Selector_obj').value != "") {

    console.log("@@@@@요일 변화가 감지되었습니다!@@@@@");
    isDateChange = 1; // 요일변화가 감지되었으니 1로 바꿔준다.

    //var indexOfArray = obj.parentNode.getAttribute('value') - 1; // 1을 삭제한다고 치면 1부터 끝까지 모든 객체 index를 -1 해줘야..
    var indexOfArray = document.getElementById('pop_inputBox_priority_pre').value - 1;
    console.log("삭제할 객체의 배열 index :" + indexOfArray);
    var tempSave = targetArray[indexOfArray]; // 삭제하기전에 객체 정보 임시저장.
    targetArray.splice(indexOfArray, 1); // 배열에서 중간삭제 실행.

    var targetDiv;
    var nodes = targetField.childNodes;

    for (var i = 0; i < nodes.length; i++) { // 타겟필드의 차일드노드들을 검색.
      var node = nodes.item(i);
      if (node.getAttribute('value') == indexOfArray + 1) {
        targetDiv = node;
      }
    }

    console.log("인덱스에 해당하는 targetDiv : " + targetDiv.getAttribute('value')); // 삭제하려는 tempDiv를 구했다.
    var tempDiv = targetDiv;
    for (var i = indexOfArray; i <= targetArray.length; i++) {
      tempDiv.setAttribute('value', i);
      tempDiv = tempDiv.nextSibling;
    }
    for (var i = 0; i < targetArray.length; i++) {
      targetArray[i].priority = i + 1;
    }

    console.log(targetField);
    console.log(targetDiv);
    targetField.removeChild(targetDiv);

    // 자 이제 tempSave에 삭제된놈이 임시저장되어있다.
    console.log("tempSave : " + tempSave.date);
    console.log("tempSave : " + tempSave.title);
    console.log("tempSave : " + tempSave.content);
    console.log("tempSave : " + tempSave.priority);
    // 이 tempSave의 우선순위를 pop_inputBox_priority_to 값으로 바꿔준다
    // pop_btn_Selector_obj의 값 (Tuesday) 에 따라 targetField를 다시 찾는다.
    // 해당 타겟필드에 추가해준다.???
    tempSave.date = document.getElementById('pop_btn_Selector_obj').value;
    tempSave.priority = document.getElementById('pop_inputBox_priority_to').value; // tempSave 객체의 우선순위 바꿔준다.

    switch (document.getElementById('pop_btn_Selector_obj').value) {
      case 'Monday':
        targetField = document.getElementById('mon_field');
        targetArray = mon_array;
        break;
      case 'Tuesday':
        targetField = document.getElementById('tue_field');
        targetArray = tue_array;
        break;
      case 'Wednesday':
        targetField = document.getElementById('wed_field');
        targetArray = wed_array;
        break;
      case 'Thursday':
        targetField = document.getElementById('thu_field');
        targetArray = thu_array;
        break;
      case 'Friday':
        targetField = document.getElementById('fri_field');
        targetArray = fri_array;
        break;
    }
    console.log("아래는 이동할 타겟 필드");
    console.log(targetField);

    var toDiv; // 배열에 추가하기 전에 일단 toDiv를 찾는다.
    var nodes = targetField.childNodes;
    for (var i = 0; i < nodes.length; i++) { // 타겟필드의 차일드노드들을 검색.
      var node = nodes.item(i);
      if (node.getAttribute('value') == tempSave.priority) {
        toDiv = node;
      }
    }

    targetArray.splice(tempSave.priority - 1, 0, tempSave); // Tue, 제목, 내용, 바뀔우선순위 저정되어있겠지..?
    // 만약 1번으로 이동한다면 0번 인덱스에 삽입한다. 우선순위 재설정도 해줘야한다.
    // tempSave를 바탕으로 새 div를 만들고 삽입해준다.
    //만약 이동할 배열에 아무것도 없으면 그냥 appendChild, 무언가 있으면 insertbebore
    switch (tempSave.date) {
      case 'Monday':
        document.getElementById('mon_p_date').innerHTML = "Date : " + tempSave.date;
        document.getElementById('mon_p_title').innerHTML = "Title : " + tempSave.title;
        var preDiv = document.createElement('div'); // tempSave를 div화한것.
        preDiv.innerHTML = document.getElementById('mon_pre_set').innerHTML;
        preDiv.setAttribute("class", "obj_pre_set");
        preDiv.setAttribute("value", tempSave.priority);
        preDiv.setAttribute("id", "Monday");
        //document.getElementById('tue_field').appendChild(preDiv); // mon_field에 새 div 추가
        if (targetField.childNodes.length == 0) {
          console.log("월요일 필드 비었음 append");
          document.getElementById('mon_field').appendChild(preDiv); // mon_field에 새 div 추가
        } else {
          targetField.insertBefore(preDiv, toDiv);

          var nodes = targetField.childNodes;
          for (var i = 0; i < nodes.length; i++) { // 타겟필드의 차일드노드들을 검색.
            var node = nodes.item(i);

            node.setAttribute('value', i + 1);
          }
          for (var i = 0; i < targetArray.length; i++) { // 모든 priority 초기화
            targetArray[i].priority = i + 1;
          }
        }
        break;
      case 'Tuesday':
        document.getElementById('tue_p_date').innerHTML = "Date : " + tempSave.date;
        document.getElementById('tue_p_title').innerHTML = "Title : " + tempSave.title;
        var preDiv = document.createElement('div'); // tempSave를 div화한것.
        preDiv.innerHTML = document.getElementById('tue_pre_set').innerHTML;
        preDiv.setAttribute("class", "obj_pre_set");
        preDiv.setAttribute("value", tempSave.priority);
        preDiv.setAttribute("id", "Tuesday");
        //document.getElementById('tue_field').appendChild(preDiv); // mon_field에 새 div 추가

        if (targetField.childNodes.length == 0) {
          console.log("화요일 필드 비었음 append");
          document.getElementById('tue_field').appendChild(preDiv); // mon_field에 새 div 추가
        } else {
          targetField.insertBefore(preDiv, toDiv);

          var nodes = targetField.childNodes;
          for (var i = 0; i < nodes.length; i++) { // 타겟필드의 차일드노드들을 검색.
            var node = nodes.item(i);

            node.setAttribute('value', i + 1);
          }
          for (var i = 0; i < targetArray.length; i++) { // 모든 priority 초기화
            targetArray[i].priority = i + 1;
          }
        }
        break;
      case 'Wednesday':
        document.getElementById('wed_p_date').innerHTML = "Date : " + tempSave.date;
        document.getElementById('wed_p_title').innerHTML = "Title : " + tempSave.title;
        var preDiv = document.createElement('div'); // tempSave를 div화한것.
        preDiv.innerHTML = document.getElementById('wed_pre_set').innerHTML;
        preDiv.setAttribute("class", "obj_pre_set");
        preDiv.setAttribute("value", tempSave.priority);
        preDiv.setAttribute("id", "Wednesday");
        //document.getElementById('tue_field').appendChild(preDiv); // mon_field에 새 div 추가

        if (targetField.childNodes.length == 0) {
          console.log("수요일 필드 비었음 append");
          document.getElementById('wed_field').appendChild(preDiv); // mon_field에 새 div 추가
        } else {
          targetField.insertBefore(preDiv, toDiv);

          var nodes = targetField.childNodes;
          for (var i = 0; i < nodes.length; i++) { // 타겟필드의 차일드노드들을 검색.
            var node = nodes.item(i);

            node.setAttribute('value', i + 1);
          }
          for (var i = 0; i < targetArray.length; i++) { // 모든 priority 초기화
            targetArray[i].priority = i + 1;
          }
        }
        break;
      case 'Thursday':
        document.getElementById('thu_p_date').innerHTML = "Date : " + tempSave.date;
        document.getElementById('thu_p_title').innerHTML = "Title : " + tempSave.title;
        var preDiv = document.createElement('div'); // tempSave를 div화한것.
        preDiv.innerHTML = document.getElementById('thu_pre_set').innerHTML;
        preDiv.setAttribute("class", "obj_pre_set");
        preDiv.setAttribute("value", tempSave.priority);
        preDiv.setAttribute("id", "Thursday");
        //document.getElementById('tue_field').appendChild(preDiv); // mon_field에 새 div 추가

        if (targetField.childNodes.length == 0) {
          console.log("목요일 필드 비었음 append");
          document.getElementById('thu_field').appendChild(preDiv); // mon_field에 새 div 추가
        } else {
          targetField.insertBefore(preDiv, toDiv);

          var nodes = targetField.childNodes;
          for (var i = 0; i < nodes.length; i++) { // 타겟필드의 차일드노드들을 검색.
            var node = nodes.item(i);

            node.setAttribute('value', i + 1);
          }
          for (var i = 0; i < targetArray.length; i++) { // 모든 priority 초기화
            targetArray[i].priority = i + 1;
          }
        }
        break;
      case 'Friday':
        document.getElementById('fri_p_date').innerHTML = "Date : " + tempSave.date;
        document.getElementById('fri_p_title').innerHTML = "Title : " + tempSave.title;
        var preDiv = document.createElement('div'); // tempSave를 div화한것.
        preDiv.innerHTML = document.getElementById('fri_pre_set').innerHTML;
        preDiv.setAttribute("class", "obj_pre_set");
        preDiv.setAttribute("value", tempSave.priority);
        preDiv.setAttribute("id", "Friday");
        //document.getElementById('tue_field').appendChild(preDiv); // mon_field에 새 div 추가

        if (targetField.childNodes.length == 0) {
          console.log("금요일 필드 비었음 append");
          document.getElementById('fri_field').appendChild(preDiv); // mon_field에 새 div 추가
        } else {
          targetField.insertBefore(preDiv, toDiv);

          var nodes = targetField.childNodes;
          for (var i = 0; i < nodes.length; i++) { // 타겟필드의 차일드노드들을 검색.
            var node = nodes.item(i);

            node.setAttribute('value', i + 1);
          }
          for (var i = 0; i < targetArray.length; i++) { // 모든 priority 초기화
            targetArray[i].priority = i + 1;
          }
        }
        break;
    }

  }

  /*-----------------------------게시판 내용 변경, 우선순위/내용-------------------------------------*/
  if ((targetArray[0].date == document.getElementById('pop_btn_Selector_obj').value ||
      document.getElementById('pop_btn_Selector_obj').value == "") && isDateChange != 1) {

    var preIndex = document.getElementById('pop_inputBox_priority_pre').value;
    // 우선순위 변경에 값이 null이 아닐경우
    if (document.getElementById('pop_inputBox_priority_to').value != "") {

      var toIndex = document.getElementById('pop_inputBox_priority_to').value;
      console.log("선택한 div값" + document.getElementById('pop_inputBox_priority_pre').value);
      console.log("바꿀 div값" + document.getElementById('pop_inputBox_priority_to').value);

      var preDiv; // 현재 클릭한 div 를 저장하는 변수.
      var toDiv; // 변경할 대상 div를 저장하는 변수.

      console.log(targetField);

      var nodes = targetField.childNodes; // nodes는 타겟 필드의 childnode들이다.
      console.log("자식 노드들의 개수는 : " + nodes.length); // 자식 노드들의 개수 출력.

      for (var i = 0; i < nodes.length; i++) { // 자식 노드들을 다 돌면서 바꾸려는 대상 div 찾는다.
        var node = nodes.item(i);
        if (node.getAttribute('value') == preIndex) {
          preDiv = node;
        } else if (node.getAttribute('value') == toIndex) {
          toDiv = node;
        }
      }
      if (preIndex > toIndex) { // 뒤에 있는걸 앞으로 땡길때.
        targetField.insertBefore(preDiv, toDiv);
      } else { // 앞에있는걸 뒤로 땡길때.
        targetField.insertBefore(preDiv, toDiv.nextSibling);
      }
      targetArray.splice(toIndex - 1, 0, targetArray.splice(preIndex - 1, 1)[0]);

      for (var i = 0; i < targetArray.length; i++) {
        targetArray[i].priority = (i + 1); // 객체들의 우선순위 초기화 1 2 3 4 ...
        var node = nodes.item(i);
        node.setAttribute('value', i + 1);
      }
      console.log(document.getElementById('pop_btn_Selector').value);
      console.log(document.getElementById('pop_inputBox_title').value);
      console.log(document.getElementById('pop_inputBox_content').value);

      targetArray[toIndex - 1].date = document.getElementById('pop_btn_Selector').value;
      targetArray[toIndex - 1].title = document.getElementById('pop_inputBox_title').value;
      targetArray[toIndex - 1].content = document.getElementById('pop_inputBox_content').value;

      var nodes = targetField.childNodes;

      nodes.item(toIndex - 1).childNodes.item(1).innerHTML = "Date : " + targetArray[toIndex - 1].date; // 첫번째 <p>
      nodes.item(toIndex - 1).childNodes.item(1).nextSibling.nextSibling.innerHTML =
        "Title : " + targetArray[toIndex - 1].title; // 두번째 <p> 개행문자때문에 다음거 구할라면 두번써야함.
    } // -->> 여기서 끝
    else { // 바꿀 우선순위 입력 안하고 내용만 바꿀 경우.
      // 수정 버튼을 누르는 순간을 생각하면..
      console.log("내용만 변경합니다.");
      targetArray[preIndex - 1].date = document.getElementById('pop_btn_Selector').value;
      targetArray[preIndex - 1].title = document.getElementById('pop_inputBox_title').value;
      targetArray[preIndex - 1].content = document.getElementById('pop_inputBox_content').value;

      var nodes = targetField.childNodes;

      nodes.item(preIndex - 1).childNodes.item(1).innerHTML = "Date : " + targetArray[preIndex - 1].date; // 첫번째 <p>
      nodes.item(preIndex - 1).childNodes.item(1).nextSibling.nextSibling.innerHTML =
        "Title : " + targetArray[preIndex - 1].title; // 두번째 <p> 개행문자때문에 다음거 구할라면 두번써야함.

    }

  }

  /*-----------------------------게시판 내용 변경 끝, 우선순위/내용-------------------------------------*/

  for (var i = 0; i < targetArray.length; i++) {
    console.log("Date: " + targetArray[i].date);
    console.log("Title: " + targetArray[i].title);
    console.log("Content: " + targetArray[i].content);
    console.log("Priority: " + targetArray[i].priority);
  } // 배열 출력해보기.

  document.getElementById('pop_inputBox_priority_to').value = "";
  document.getElementById('pop_btn_Selector_obj').value = "";
  console.log(preIndex);
  closePopup();

}


function remove_item(obj, dateIndex) {
  console.log("삭제한 요일 인덱스  " + dateIndex);

  switch (dateIndex) {
    case 0:
      var indexOfArray = obj.parentNode.getAttribute('value') - 1; // 1을 삭제한다고 치면 1부터 끝까지 모든 객체 index를 -1 해줘야..
      console.log("삭제한 객체의 배열 index :" + indexOfArray);

      mon_array.splice(indexOfArray, 1); // 배열에서 해당 인덱스 삭제.

      var temp = obj.parentNode;
      for (var i = indexOfArray; i <= mon_array.length; i++) {
        temp.setAttribute('value', i);
        temp = temp.nextSibling;
      }
      for (var i = 0; i < mon_array.length; i++) { // 모든 priority 초기화
        mon_array[i].priority = i + 1;
      }
      console.log("splice 후 배열의 길이 " + mon_array.length)

      for (var i = 0; i < mon_array.length; i++) {
        console.log("Date: " + mon_array[i].date);
        console.log("Title: " + mon_array[i].title);
        console.log("Content: " + mon_array[i].content);
        console.log("Priority: " + mon_array[i].priority);
      } // 배열 출력해보기.

      document.getElementById('mon_field').removeChild(obj.parentNode);
      break;

    case 1:
      var indexOfArray = obj.parentNode.getAttribute('value') - 1;
      console.log("삭제한 객체의 배열 index :" + indexOfArray);

      tue_array.splice(indexOfArray, 1); // 배열에서 해당 인덱스 삭제.

      var temp = obj.parentNode;
      for (var i = indexOfArray; i <= tue_array.length; i++) {
        temp.setAttribute('value', i);
        temp = temp.nextSibling;
      }
      for (var i = 0; i < tue_array.length; i++) { // 모든 priority 초기화
        tue_array[i].priority = i + 1;
      }

      console.log("splice 후 배열의 길이 " + tue_array.length)

      for (var i = 0; i < tue_array.length; i++) {
        console.log("Date: " + tue_array[i].date);
        console.log("Title: " + tue_array[i].title);
        console.log("Content: " + tue_array[i].content);
        console.log("Priority: " + tue_array[i].priority);
      } // 배열 출력해보기.
      document.getElementById('tue_field').removeChild(obj.parentNode);
      break;

    case 2:
      var indexOfArray = obj.parentNode.getAttribute('value') - 1;
      console.log("삭제한 객체의 배열 index :" + indexOfArray);

      wed_array.splice(indexOfArray, 1); // 배열에서 해당 인덱스 삭제.

      var temp = obj.parentNode;
      for (var i = indexOfArray; i <= wed_array.length; i++) {
        temp.setAttribute('value', i);
        temp = temp.nextSibling;
      }
      for (var i = 0; i < wed_array.length; i++) { // 모든 priority 초기화
        tue_array[i].priority = i + 1;
      }

      console.log("splice 후 배열의 길이 " + wed_array.length)

      for (var i = 0; i < wed_array.length; i++) {
        console.log("Date: " + wed_array[i].date);
        console.log("Title: " + wed_array[i].title);
        console.log("Content: " + wed_array[i].content);
        console.log("Priority: " + wed_array[i].priority);
      } // 배열 출력해보기.
      document.getElementById('wed_field').removeChild(obj.parentNode);
      break;

    case 3:
      var indexOfArray = obj.parentNode.getAttribute('value') - 1;
      console.log("삭제한 객체의 배열 index :" + indexOfArray);

      thu_array.splice(indexOfArray, 1); // 배열에서 해당 인덱스 삭제.

      var temp = obj.parentNode;
      for (var i = indexOfArray; i <= thu_array.length; i++) {
        temp.setAttribute('value', i);
        temp = temp.nextSibling;
      }
      for (var i = 0; i < thu_array.length; i++) { // 모든 priority 초기화
        thu_array[i].priority = i + 1;
      }

      console.log("splice 후 배열의 길이 " + thu_array.length)

      for (var i = 0; i < thu_array.length; i++) {
        console.log("Date: " + thu_array[i].date);
        console.log("Title: " + thu_array[i].title);
        console.log("Content: " + thu_array[i].content);
        console.log("Priority: " + thu_array[i].priority);
      } // 배열 출력해보기.
      document.getElementById('thu_field').removeChild(obj.parentNode);
      break;

    case 4:
      var indexOfArray = obj.parentNode.getAttribute('value') - 1;
      console.log("삭제한 객체의 배열 index :" + indexOfArray);

      fri_array.splice(indexOfArray, 1); // 배열에서 해당 인덱스 삭제.

      var temp = obj.parentNode;
      for (var i = indexOfArray; i <= fri_array.length; i++) {
        temp.setAttribute('value', i);
        temp = temp.nextSibling;
      }
      for (var i = 0; i < fri_array.length; i++) { // 모든 priority 초기화
        fri_array[i].priority = i + 1;
      }

      console.log("splice 후 배열의 길이 " + fri_array.length)

      for (var i = 0; i < fri_array.length; i++) {
        console.log("Date: " + fri_array[i].date);
        console.log("Title: " + fri_array[i].title);
        console.log("Content: " + fri_array[i].content);
        console.log("Priority: " + fri_array[i].priority);
      } // 배열 출력해보기.
      document.getElementById('fri_field').removeChild(obj.parentNode);
      break;
  }
}


function searchByDate(value) {
  console.log(value);
  document.getElementById('input_Search').value="";

  var targetFieldArray = new Array();
  var fieldIndex;
  targetFieldArray.push(document.getElementById('mon_field'));
  targetFieldArray.push(document.getElementById('tue_field'));
  targetFieldArray.push(document.getElementById('wed_field'));
  targetFieldArray.push(document.getElementById('thu_field'));
  targetFieldArray.push(document.getElementById('fri_field'));

  if (value != "") {
    var targetField;
    switch (value) {
      case 'Monday':
        targetField = document.getElementById('mon_field');
        fieldIndex = 0;
        break;
      case 'Tuesday':
        targetField = document.getElementById('tue_field');
        fieldIndex = 1;
        break;
      case 'Wednesday':
        targetField = document.getElementById('wed_field');
        fieldIndex = 2;
        break;
      case 'Thursday':
        targetField = document.getElementById('thu_field');
        fieldIndex = 3;
        break;
      case 'Friday':
        targetField = document.getElementById('fri_field');
        fieldIndex = 4;
        break;
      default: // 요일이 아닐 경우에는 다보여줘야한다.
        break;
    }

    console.log(targetField);

    var nodes = targetField.childNodes;
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].style.display = 'block'; // 타겟필드는 모두 다 보이게
    }
    for (var a = 0; a < targetFieldArray.length; a++) {
      if (a != fieldIndex) {
        var nodes = targetFieldArray[a].childNodes;
        for (var i = 0; i < nodes.length; i++) {
          nodes[i].style.display = 'none';
        }
      }
    }

  } else { // 셀렉터 값이 요일 이 아닐경우 다보여줘야한다.

    for (var a = 0; a < targetFieldArray.length; a++) {
      var nodes = targetFieldArray[a].childNodes;
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.display = 'block';
      }
    }

  }
}

function searchByTitle() {
  if (event.keyCode == 13) {
    console.log("엔터키 입력됨.");

    var targetDate = document.getElementById('btn_Selector').value;
    console.log(targetDate);
    var targetArray;

    var targetFieldArray = new Array();
    var targetArrayArray = new Array();
    var fieldIndex;
    targetFieldArray.push(document.getElementById('mon_field'));
    targetFieldArray.push(document.getElementById('tue_field'));
    targetFieldArray.push(document.getElementById('wed_field'));
    targetFieldArray.push(document.getElementById('thu_field'));
    targetFieldArray.push(document.getElementById('fri_field'));
    targetArrayArray.push(mon_array);
    targetArrayArray.push(tue_array);
    targetArrayArray.push(wed_array);
    targetArrayArray.push(thu_array);
    targetArrayArray.push(fri_array);


    if (targetDate != "") {
      var targetField;
      switch (targetDate) {
        case 'Monday':
          targetField = document.getElementById('mon_field');
          targetArray = mon_array;
          break;
        case 'Tuesday':
          targetField = document.getElementById('tue_field');
          targetArray = tue_array;
          break;
        case 'Wednesday':
          targetField = document.getElementById('wed_field');
          targetArray = wed_array;
          break;
        case 'Thursday':
          targetField = document.getElementById('thu_field');
          targetArray = thu_array;
          break;
        case 'Friday':
          targetField = document.getElementById('fri_field');
          targetArray = fri_array;
          break;
        default:
      }

      var nodes = targetField.childNodes;
      for (var i = 0; i < nodes.length; i++) {
        var title = targetArray[i].title;
        var findTitle = document.getElementById('input_Search').value;
        if (title.indexOf(findTitle) != -1) {
          nodes[i].style.display = 'block'; // 검색 결과를 포함하면 보이게.
        } else {
          nodes[i].style.display = 'none'; // 아니라면 안보이게.
        }
      }


    } else {

      for (var a = 0; a < targetFieldArray.length; a++) { // 필드의 모든 div들 다 돈다.
        var nodes = targetFieldArray[a].childNodes;
        var tArray = targetArrayArray[a];
        for (var i = 0; i < nodes.length; i++) {
          console.log(nodes[i])
          var title = tArray[i].title;
          var findTitle = document.getElementById('input_Search').value;
          if (title.indexOf(findTitle) != -1) {
            nodes[i].style.display = 'block'; // 검색 결과를 포함하면 보이게.
          } else {
            nodes[i].style.display = 'none'; // 아니라면 안보이게.
          }
        }
      }

    }

  }
}
