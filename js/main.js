let ticketNumber = document.getElementById('select_1');
let formOfpayment = document.getElementById('select_2');
option = document.querySelectorAll('select option');

// Создаём цикл для всех option
for (var i = 0; i < option.length; i++) {
    // Присваиваем для всех option свою функцию
    option[i].my_function = function () {
        console.log('Кількість квитків: ' + this.getAttribute('value'));
    };
};

ticketNumber.onchange = function () {
    var indexSelected = ticketNumber.selectedIndex,
        option = ticketNumber.querySelectorAll('option')[indexSelected];

    // Запускаем функцию выбранного option
    option.my_function();
};


// Создаём цикл для всех option
for (var i = 0; i < option.length; i++) {
    // Присваиваем для всех option свою функцию
    option[i].my_function1 = function () {
        console.log('Форма оплати: ' + this.getAttribute('value'));
    };
};

formOfpayment.onchange = function () {
    var indexSelected = formOfpayment.selectedIndex,
        option = formOfpayment.querySelectorAll('option')[indexSelected];

    // Запускаем функцию выбранного option
    option.my_function1();
};