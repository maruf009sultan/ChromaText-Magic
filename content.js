let selectedTextRange = null;
let colorPicker = null;
let lastColor = '#ff0000'; // Default last used color

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' && window.getSelection().toString()) {
    const selection = window.getSelection();
    selectedTextRange = selection.getRangeAt(0);
    
    if (colorPicker) {
      colorPicker.remove();
    }

    createColorPicker();
  }
});

function createColorPicker() {
  colorPicker = document.createElement('div');
  colorPicker.id = 'color-picker';
  colorPicker.innerHTML = `
    <input type="color" id="color-input" value="${lastColor}">
    <button id="apply-color">Apply</button>
  `;

  document.body.appendChild(colorPicker);

  const rect = selectedTextRange.getBoundingClientRect();
  colorPicker.style.top = `${rect.bottom + window.scrollY}px`;
  colorPicker.style.left = `${rect.left + window.scrollX}px`;

  document.getElementById('color-input').addEventListener('change', (e) => {
    lastColor = e.target.value;
  });

  document.getElementById('apply-color').addEventListener('click', () => {
    applyHighlight(lastColor);
    navigator.clipboard.writeText(lastColor).then(() => {
      colorPicker.remove();
    });
  });
}

function applyHighlight(color) {
  const selection = window.getSelection();
  if (selection.rangeCount) {
    const range = selection.getRangeAt(0);
    const selectedText = range.toString();
    if (selectedText) {
      const span = document.createElement('span');
      span.style.color = color;
      span.textContent = selectedText;

      // Replace the selected range with the new span
      range.deleteContents();
      range.insertNode(span);

      selection.removeAllRanges();
    }
  }
}