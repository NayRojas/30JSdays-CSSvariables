const inputs = document.querySelectorAll(".controls input");

function handleUpdated() {
  const suffix = this.dataset.size || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
  console.log(this.value);
}

inputs.forEach((input) => input.addEventListener("change", handleUpdated));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdated));
