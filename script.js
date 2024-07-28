document.addEventListener('DOMContentLoaded', function() {
    let inputTexto = document.querySelector("#input-texto");
    let btnCriptografar = document.querySelector("#criptografar");
    let btnDescriptografar = document.querySelector("#descriptografar");
    let areaSemResultado = document.querySelector("#nada");
    let textoResultado = document.querySelector("#resultado");
    let btnCopiarResultado = document.querySelector("#copiar-resultado");

    function verificarCaracteresNaoAceitos(texto) {
        let caracteres = /[^a-z\s]/;
        return caracteres.test(texto);
    }

    function criptografar(texto) {
        return texto
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");
    }

    function descriptografar(texto) {
        return texto
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");
    }

    btnCriptografar.addEventListener("click", function() {
        let textoInicial = inputTexto.value;

        if (textoInicial === "") {
            alert("Digite um texto para ser criptografado");
            return;
        }
        if (!verificarCaracteresNaoAceitos(textoInicial)) {
            let textoParaCriptografar = criptografar(textoInicial);
            textoResultado.textContent = textoParaCriptografar;
            areaSemResultado.style.display = "none";
            textoResultado.style.display = "block";
            btnCopiarResultado.style.display = "block";
        } else {
            alert("O texto pode conter apenas letras minúsculas e sem acento");
        }

        inputTexto.value = "";
    });

    btnDescriptografar.addEventListener("click", function() {
        let textoInicial = inputTexto.value;

        if (textoInicial === "") {
            alert("Digite um texto para ser descriptografado");
            return;
        }
        if (!verificarCaracteresNaoAceitos(textoInicial)) {
            let textoParaDescriptografar = descriptografar(textoInicial);
            textoResultado.textContent = textoParaDescriptografar;
            areaSemResultado.style.display = "none";
            textoResultado.style.display = "block";
            btnCopiarResultado.style.display = "block";
        } else {
            alert("O texto pode conter apenas letras minúsculas e sem acento");
        }

        inputTexto.value = "";
    });

    btnCopiarResultado.addEventListener("click", function() {
        navigator.clipboard.writeText(textoResultado.textContent);
        alert("Texto copiado para a área de transferência!");
    });
});
