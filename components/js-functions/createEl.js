function createEl(tagName, classNames, dataJS) {
  if (typeof tagName === "string") {
    const newEl = document.createElement(tagName);

    if (classNames && typeof classNames === "string") {
      newEl.className = classNames;
    }
    if (dataJS && typeof dataJS === "string") {
      newEl.setAttribute("data-js", dataJS);
    }
    return newEl;
  } else {
    console.error('createEl: typeof tagName !== "string"');
  }
}

export { createEl };
