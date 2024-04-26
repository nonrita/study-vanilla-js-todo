import "./style.css"

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const addTextInputDom = document.querySelector("#add-text");
  const addText = addTextInputDom.value;
  addTextInputDom.value = "";
  
  // li生成
  const li = document.createElement("li");
  
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  
  // p生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = addText;

  // 完了,削除ボタン生成
  const button = document.createElement("button");
  const completeButton = button.cloneNode(false);
  const deleteButton = button.cloneNode(false);
  completeButton.innerText = "完了";
  deleteButton.innerText = "削除";

  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親にあるliタグは以下の完了ボタンと削除ボタンを削除
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    // 戻すボタンを生成してdivタグは以下に設定
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      alert();
    });

    moveTarget.firstElementChild.appendChild(backButton);
    document.querySelector("#complete-list").appendChild(moveTarget);
  });

  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親にあるliタグを未完了リストから削除
    const deleteTarget = deleteButton.closest("li");
    document.querySelector("#incomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.querySelector("#incomplete-list").appendChild(li);
};

document.querySelector("#add-button")
  .addEventListener("click", onClickAdd);