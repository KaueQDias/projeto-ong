const validationRules = {
  nome: {
    validate: (value) => value.trim().length >= 3,
    message: "O nome deve ter pelo menos 3 caracteres."
  },
  email: {
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message: "Por favor, insira um e-mail válido."
  },
  cpf: {
    validate: (value) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value),
    message: "Formato de CPF inválido. Use 123.456.789-00."
  },
  telefone: {
    validate: (value) => /^\(\d{2}\) \d{5}-\d{4}$/.test(value),
    message: "Formato de telefone inválido. Use (99) 99999-9999."
  },
  nascimento: {
    validate: (value) => value.trim() !== "",
    message: "A data de nascimento é obrigatória."
  },
  estado: {
    validate: (value) => value.trim() !== "",
    message: "Por favor, selecione um estado."
  }
};

function showError(input, message) {
  const formGroup = input.parentElement.closest('.form-group');
  const errorEl = formGroup.querySelector('.form-error');
  
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.add('visible');
  }
}

function showSuccess(input) {
  const formGroup = input.parentElement.closest('.form-group');
  const errorEl = formGroup.querySelector('.form-error');

  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
  if (errorEl) {
    errorEl.textContent = "";
    errorEl.classList.remove('visible');
  }
}

function validateField(input) {
  const rule = validationRules[input.id];
  if (!rule) return true;

  if (rule.validate(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(input, rule.message);
    return false;
  }
}

export function initFormValidation() {
  const form = document.querySelector("#cadastro-form");
  if (!form) return;

  const inputsToValidate = Array.from(form.querySelectorAll("[data-validate]"));

  inputsToValidate.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let isFormValid = true;
    inputsToValidate.forEach(input => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      alert("Formulário enviado com sucesso!");
      form.reset();
      inputsToValidate.forEach(input => {
        input.classList.remove('is-valid', 'is-invalid');
      });
    } else {
      alert("Por favor, corrija os erros no formulário.");
    }
  });
}