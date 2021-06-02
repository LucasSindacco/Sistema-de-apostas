var coins = 0;
const setNumber = () => {
    const buttonNumbers = document.querySelector('.btn-add');
    const input = document.querySelector('input');
    const betNumber = document.querySelector('.bet-value');
    buttonNumbers.addEventListener('click', () => {
        if (input.value.length > 3 || input.value.length < 3) {
            const modalError = document.querySelector('.modal-error');
            document.querySelector('.erro-number').textContent = `Apenas três números`;
            modalError.classList.add('active');
            setTimeout(() => {
                modalError.classList.remove('active');
            }, 2000)
        } else {
            betNumber.textContent = input.value;
        }
    });
    const buttonRandom = document.querySelector('button');
    buttonRandom.addEventListener('click', () => {
        const numbersRandom = document.querySelectorAll('#number-math');
        for (let i = 0; i < numbersRandom.length; i++) {
            numbersRandom[i].textContent = Math.floor(Math.random() * 11);
            if (numbersRandom[i].textContent === betNumber) {
                const modalWin = document.querySelector('.modal-accept');
                const textAccept = document.querySelector('.win');
                modalWin.classList.add('active');
                textAccept.textContent = `Parabéns você acertou, recompensa adicionada`;
                const textcoins = document.querySelector('.text-points');
                textcoins.textContent = coins++;
            } else {
                const modalLose = document.querySelector('.modal-lose');
                const textAccept = document.querySelector('.lose');
                modalLose.classList.add('active');
                textAccept.textContent = `Que pena você errou, recompensa removida`;
                setTimeout(() => {
                    modalLose.classList.remove('active');
                }, 2000)
                const textcoins = document.querySelector('.text-points');
                textcoins.textContent = coins--;
            }
        }
    });
}
setNumber();