console.log("Lever page detected");

document.querySelectorAll("input").forEach(input => {
  if (input.labels?.[0]?.innerText.includes("First Name")) {
    input.value = "Ashna";
  }
}); 

console.log("Lever page detected");

function fillForm() {
  document.querySelectorAll("input").forEach(input => {
    const label = input.labels?.[0]?.innerText?.toLowerCase();

     
    if (label?.includes("full name")) {
      input.value = "Ashna R";
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }

    if (label?.includes("first name")) {
      input.value = "Ashna";
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }

    if (label?.includes("last name")) {
      input.value = "R";
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }

    if (label?.includes("email")) {
      input.value = "ashna@email.com";
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }

    if (label?.includes("phone")) {
      input.value = "1234567890";
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
}

fillForm();

// Resume upload trigger
const fileInput = document.querySelector("input[type='file']");
if (fileInput) {
  fileInput.click(); // Opens the file picker
  console.log("Please select your resume file manually");
}

document.querySelectorAll("select").forEach(select => {
  const label = select.labels?.[0]?.innerText?.toLowerCase();

  if (label?.includes("location")) {
    select.value = select.options[1].value; // Picks the first option
    select.dispatchEvent(new Event("change", { bubbles: true }));
  }

  if (label?.includes("experience")) {
    select.value = select.options[2].value; // Picks third option
    select.dispatchEvent(new Event("change", { bubbles: true }));
  }
});

document.querySelectorAll("textarea").forEach(area => {
  const label = area.labels?.[0]?.innerText?.toLowerCase();

  if (label?.includes("why")) {
    area.value = "I am very interested in this internship because…";
    area.dispatchEvent(new Event("input", { bubbles: true }));
  }
});

document.querySelectorAll("input[type='checkbox']").forEach(box => {
  if (!box.checked) box.click(); // Selects it
});

document.querySelectorAll("input[type='radio']").forEach(radio => {
  if (!radio.checked) radio.click(); // Picks first option
});  