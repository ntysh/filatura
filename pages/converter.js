const COLUMNS = 80;
const ROWS = 60;
const RAMP = "@%#*+=-:. ";

const input = document.querySelector("#image-input");
const source = document.querySelector("#source");
const output = document.querySelector("#ascii");
const save = document.querySelector("#save");
const terminalCommand = document.querySelector("#terminal-command");
const preview = document.createElement("canvas");
const previewContext = preview.getContext("2d", { willReadFrequently: true });
const asciiCanvas = document.createElement("canvas");
const asciiContext = asciiCanvas.getContext("2d", { willReadFrequently: true });

preview.width = 320;
preview.height = 240;
asciiCanvas.width = COLUMNS;
asciiCanvas.height = ROWS;

let downloadUrl = "";

function asciiName(name) {
  const cleaned = String(name || "SOURCE.JPG")
    .replace(/[^\x20-\x7e]/g, "_")
    .replace(/\s+/g, "_")
    .toUpperCase();
  return cleaned || "SOURCE.JPG";
}

function cover(sourceWidth, sourceHeight, targetWidth, targetHeight) {
  const sourceRatio = sourceWidth / sourceHeight;
  const targetRatio = targetWidth / targetHeight;

  if (sourceRatio > targetRatio) {
    const width = sourceHeight * targetRatio;
    return { x: (sourceWidth - width) / 2, y: 0, width, height: sourceHeight };
  }

  const height = sourceWidth / targetRatio;
  return { x: 0, y: (sourceHeight - height) / 2, width: sourceWidth, height };
}

function drawCover(context, image, width, height) {
  const crop = cover(image.width, image.height, width, height);
  context.clearRect(0, 0, width, height);
  context.imageSmoothingEnabled = false;
  context.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    width,
    height
  );
}

function toAscii() {
  const pixels = asciiContext.getImageData(0, 0, COLUMNS, ROWS).data;
  const lines = [];

  for (let y = 0; y < ROWS; y += 1) {
    let line = "";
    for (let x = 0; x < COLUMNS; x += 1) {
      const offset = (y * COLUMNS + x) * 4;
      const light = (
        pixels[offset] * 0.2126
        + pixels[offset + 1] * 0.7152
        + pixels[offset + 2] * 0.0722
      ) / 255;
      const index = Math.min(RAMP.length - 1, Math.floor(light * RAMP.length));
      line += RAMP[index];
    }
    lines.push(line);
  }

  return lines;
}

function setDownload(name, lines) {
  if (downloadUrl) URL.revokeObjectURL(downloadUrl);
  const content = [
    `; SOURCE ${name}`,
    `; SIZE ${COLUMNS} X ${ROWS}`,
    ...lines
  ].join("\n");
  downloadUrl = URL.createObjectURL(new Blob([content], { type: "text/plain" }));
  save.href = downloadUrl;
  save.removeAttribute("aria-disabled");
}

function render(image, filename) {
  const name = asciiName(filename);
  drawCover(previewContext, image, preview.width, preview.height);
  source.src = preview.toDataURL("image/png");
  drawCover(asciiContext, image, COLUMNS, ROWS);
  const lines = toAscii();
  output.textContent = lines.join("\n");
  terminalCommand.textContent = "> LOAD PERSONAL.JAC";
  terminalCommand.hidden = false;
  setDownload(name, lines);
}

function loadFile(file) {
  if (!file || !file.type.startsWith("image/")) return;
  const image = new Image();
  const url = URL.createObjectURL(file);

  image.onload = () => {
    render(image, file.name);
    URL.revokeObjectURL(url);
  };
  image.onerror = () => {
    terminalCommand.textContent = "> IMAGE ERROR";
    terminalCommand.hidden = false;
    URL.revokeObjectURL(url);
  };
  image.src = url;
}

input.addEventListener("change", () => loadFile(input.files?.[0]));

document.addEventListener("dragover", (event) => {
  event.preventDefault();
  document.body.classList.add("is-dragging");
});

document.addEventListener("dragleave", (event) => {
  if (!event.relatedTarget) document.body.classList.remove("is-dragging");
});

document.addEventListener("drop", (event) => {
  event.preventDefault();
  document.body.classList.remove("is-dragging");
  loadFile(event.dataTransfer?.files?.[0]);
});

window.addEventListener("pagehide", () => {
  if (downloadUrl) URL.revokeObjectURL(downloadUrl);
});
