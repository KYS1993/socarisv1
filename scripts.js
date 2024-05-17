document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const loginContainer = document.querySelector('.login-container');

    // Mover os elementos para o centro
    setTimeout(() => {
        header.style.left = '0';
        loginContainer.style.left = '0';
    }, 100); // Pequeno atraso para garantir que o CSS está aplicado

    // Voltar os elementos para a posição original após 1 segundo
    setTimeout(() => {
        header.style.left = '-100vw';
        loginContainer.style.left = '-100vw';
    }, 1100); // 1 segundo após a animação inicial
});
