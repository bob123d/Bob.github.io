// English Traslte
document.getElementById('englishButton').addEventListener('click', function() {
    document.querySelector('h1').textContent = 'DuckAgent';
    document.querySelector('.profile-info p:nth-of-type(1)').textContent = 'Age: 13';
    document.querySelector('.profile-info p:nth-of-type(2)').textContent = 'Email: kiril.tx07@gmail.com';
    document.querySelector('.experience h2').textContent = 'Experience';
    const experienceItems = document.querySelectorAll('.experience li');
    experienceItems[0].textContent = 'Project A - Description of what was done';
    experienceItems[1].textContent = 'Project B - Description of what was done';
    experienceItems[2].textContent = 'Project C - Description of what was done';
    document.getElementById('timerButton').textContent = 'Open Timer';
    document.getElementById('Calculator').textContent = 'Open Calculator';
    document.querySelector('.button-no:nth-of-type(1)').textContent = 'Not working';
    document.querySelector('.button-no:nth-of-type(2)').textContent = 'Not working';
    document.querySelector('.button-no:nth-of-type(3)').textContent = 'Not working';
    document.getElementById('Lan').textContent = 'Language';
    console.log(" Text Successfully Swich To English")
});

// Rassin Translet

document.getElementById('russianButton').addEventListener('click', function() {
    document.querySelector('h1').textContent = 'DuckAgent';
    document.querySelector('.profile-info p:nth-of-type(1)').textContent = 'Возраст: 13';
    document.querySelector('.profile-info p:nth-of-type(2)').textContent = 'Email: kiril.tx07@gmail.com';
    document.querySelector('.experience h2').textContent = 'Опыт';
    const experienceItems = document.querySelectorAll('.experience li');
    experienceItems[0].textContent = 'Проект А - Описание проделанной работы';
    experienceItems[1].textContent = 'Проект B - Описание проделанной работы';
    experienceItems[2].textContent = 'Проект C - Описание проделанной работы';
    document.getElementById('timerButton').textContent = 'Открыть Таймер';
    document.getElementById('Calculator').textContent = 'Открыть Калькулятор';
    document.querySelector('.button-no:nth-of-type(1)').textContent = 'Не работает';
    document.querySelector('.button-no:nth-of-type(2)').textContent = 'Не работает';
    document.querySelector('.button-no:nth-of-type(3)').textContent = 'Не работает';
    document.getElementById('Lan').textContent = 'Язык';
    console.log(" Text Successfully Swich To Russian")
});

// Buttons to Projects

document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded successfully");
    const backButton = document.getElementById("timerButton");
    backButton.addEventListener("click", function() {
        try {
            window.location.href = "./timer.html";
        } catch (error) {
            console.error("Navigation error: ", error);
            alert("Failed to navigate. Please check the file path.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded successfully");
    const backButton = document.getElementById("Calculator");
    backButton.addEventListener("click", function() {
        try {
            window.location.href = "./calculator.html";
        } catch (error) {
            console.error("Navigation error: ", error);
            alert("Failed to navigate. Please check the file path.");
        }
    });
});

