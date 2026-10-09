const form = document.querySelector("#todo-form");
    const input = document.querySelector("#todo-input");
    const list = document.querySelector("#todo-list");
    const emptyMessage = document.querySelector("#empty-message");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const taskText = input.value.trim();
      if (!taskText) return;

      const item = document.createElement("li");
      const checkbox = document.createElement("input");
      const text = document.createElement("span");
      const deleteButton = document.createElement("button");

      checkbox.type = "checkbox";
      checkbox.setAttribute("aria-label", `Complete ${taskText}`);

      text.textContent = taskText;

      deleteButton.type = "button";
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-button";
      deleteButton.setAttribute("aria-label", `Delete ${taskText}`);

      checkbox.addEventListener("change", () => {
        item.classList.toggle("completed", checkbox.checked);
      });

      deleteButton.addEventListener("click", () => {
        item.remove();
        updateEmptyMessage();
      });

      item.append(checkbox, text, deleteButton);
      list.append(item);

      input.value = "";
      input.focus();
      updateEmptyMessage();
    });

    function updateEmptyMessage() {
      emptyMessage.hidden = list.children.length > 0;
    }