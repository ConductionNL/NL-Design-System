interface CreateElementProps {
  tagName: string;
  className: [];
  attributes: any;
  value?: "";
  innerText: "";
  onclick: any;
}

export function createElement(props: CreateElementProps) {
  // create element
  const element = document.createElement(props.tagName) as HTMLInputElement;
  if (props.value !== undefined) {
    element.value = props.value;
  }

  // set element inner text
  element.innerText = props.innerText;

  // add attributes to element
  for (const [key, value] of props.attributes) {
    element.setAttribute(key, value);
  }

  // add classes to attribute
  for (let i = 0; i < props.className.length; i++) {
    element.classList.add(props.className[i]);
  }

  if (onclick !== null) {
    element.addEventListener("click", props.onclick, false);
  }

  return element;
}

//interface AddElementProps {
//    container: string,
//    newKey: string,
//    newValue: string,
//    inputName: string,
//    onClickFunction: null,
//    label: true
//}

//export function addElement (props: AddElementProps) {
//    let key = document.getElementById(props.newKey) as HTMLInputElement;
//    let value = document.getElementById(props.newValue) as HTMLInputElement;
//    let form = document.getElementById(props.container) as HTMLInputElement;

//    if (key !== null && value !== null && ( key.value.length == 0 || value.value.length == 0)) {
//        return;
//    }

//    //create row
//    let formGroupRow = createElement("div", ["row",key.value.replaceAll(" ", "-"),]);

//    //set classNames for elements

//    // create input value
//    let formGroupColValue = createElement("div",);
//    formGroupColValue.classList.add("col-5");
//    let formGroupValue = createElement("div", ["from-group"]);
//    let inputLabel = null;
//    if (props.label) {
//        inputLabel = createElement(
//            "label",
//            ["utrecht-form-label"],
//            { for: value.value },
//            "",
//            key.value
//        );
//    }
//    let inputValue = createElement(
//        "input",
//        ["utrecht-textbox", "utrecht-textbox--html-input", "mb-2"],
//        {
//            type: "text",
//            id: value.value,
//            name: `${inputName}[${key.value.replaceAll(" ", "-")}]`,
//        },
//        value.value
//    );

//    //create delete button
//    let formGroupButton = createElement("div", [
//        "col-2",
//        "d-flex",
//        "mt-auto",
//        "mb-3",
//    ]);
//    let deleteButton = createElement(
//        "button",
//        ["utrecht-button", "utrecht-button-sm", "btn-sm", "btn-danger"],
//        { type: "button" },
//        key.value,
//        "Delete",
//        onClickFunction
//    );

//    // adds the inputs in the div form-group
//    if (inputLabel !== null) {
//        formGroupValue.appendChild(inputLabel);
//    }
//    formGroupValue.appendChild(inputValue);
//    // adds the elements in in the col
//    formGroupColValue.appendChild(formGroupValue);
//    formGroupButton.appendChild(deleteButton);
//    // adds the elements in the row
//    formGroupRow.appendChild(formGroupColValue);
//    formGroupRow.appendChild(formGroupButton);
//    // adds the row to the newInputs div
//    form.appendChild(formGroupRow);

//    key.value = "";
//    value.value = "";
//};

export function deleteElementFunction(event: any) {
  const elements = document.getElementsByClassName(event.target.value);

  for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

export function closeModal(id: string) {
  const element = document.createElement("button");
  const modal = document.getElementById("modalFooter" + id) as HTMLInputElement;

  element.setAttribute("data-bs-dismiss", "modal");
  element.style.display = "none";

  modal.appendChild(element);

  element.click();

  modal.removeChild(element);
}
