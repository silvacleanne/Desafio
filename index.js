function submitForm() {
    const name = document.getElementById("name").value;

    if (name != "") {
        alert(`Olá ${name}, Formulário enviado com sucesso!`);
    }
}
