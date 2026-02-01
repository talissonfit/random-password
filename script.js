const btnGenerate = document.getElementById('generate-btn');
const inputPw1 = document.getElementById('pw1');
const inputPw2 = document.getElementById('pw2');
const toast = document.getElementById('toast');

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
const length = 15;

// Função para gerar uma senha única
function createPassword() {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

// Gera e exibe as senhas
function displayPasswords() {
    inputPw1.value = createPassword();
    inputPw2.value = createPassword();
}

// Função para copiar para o clipboard
async function copyToClipboard(id) {
    const copyText = document.getElementById(id).value;
    
    if (!copyText) return;

    try {
        await navigator.clipboard.writeText(copyText);
        showToast();
    } catch (err) {
        console.error('Erro ao copiar: ', err);
    }
}

// Mostra o aviso visual de "Copiado"
function showToast() {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// Event Listeners
btnGenerate.addEventListener('click', displayPasswords);

// Gera senhas ao carregar a página pela primeira vez
window.onload = displayPasswords;