console.log("pdf make");


function dsp(id) {
    return  document.getElementById(id).value
}

function openpdf (version) {
   let claim=""
   let kontur="тестовой"
    if (version==="production") {
        kontur="продуктивной"
        claim=`Настоящим заявлением подтверждаем, что все бизнес-процессы организации отработаны в тестовой версии, интеграция со шлюзом Ветис.API не приводит к их нарушению и задержке. Пользователи обучены работе с интеграционным решением.`
    }
    var docDefinition = {
        content: [
            {
                text: 'Врио директора ФБГУ ВНИИЗЖ Штырёву М.Н.',
                margin: [0, 10, 0, 0],
                alignment: 'right',
            },
            {
                text: 'от ' + dsp("ceo_position_r"),
                // margin: [0, 0, 0, 80],
                alignment: 'right',
            },
            {
                text: dsp('ceo_fio_r'),
                // margin: [0, 0, 0, 80],
                alignment: 'right',
            },
            {
                text: dsp('businessEntityName'),
                // margin: [0, 0, 0, 100],
                alignment: 'right',
            },
            {
                text: 'Заявление',
                margin: [0, 30, 0, 0],
                alignment: 'center',
                bold: true,
            },
            {
                text: ' Просим предоставить доступ к '+kontur+' версии универсального шлюза Ветис.API для оформления ветеринарных документов из нашей информационной системы.',
                margin: [0, 10, 0, 20],
                alignment: 'justify',
            },
            {
                text: 'Сведения об организации:',
            },
            {
                text: 'Название организации: ' + dsp('businessEntityName'),
                margin: [10, 5, 0, 0],

            },
            {
                text: 'Реквизиты организации:',
                margin: [5, 5, 0, 0],
            },
            {
                text: 'Юридический адрес: '+ dsp('businessEntityAddress'),
                margin: [10, 5, 0, 0],
            },
            {
                text: "ИНН: "+dsp('inn'),
                margin: [10, 0, 0, 0],
            },
            {
                text: "ОГРН: " + dsp('ogrn'),
                margin: [10, 0, 0, 0],
            },
            {
                text: 'Контактное лицо по техническим вопросам:',
                margin: [5, 10, 0, 0],
            },
            {
                text: "ФИО: " + dsp('fio'),
                margin: [20, 0, 0, 0],
            },
            {
                text: 'Должность: ' + dsp('position'),
                margin: [20, 0, 0, 0],
            },
            {
                text: 'Адрес электронной почты: ' + dsp('email'),
                margin: [20, 0, 0, 0],
            },
            {
                text: 'Контактный телефон: ' + dsp('phone'),
                margin: [20, 0, 0, 0],
            },
            {
                text: 'Название подключаемой системы: Меркурий.net',
                margin: [10, 5, 0, 0],
            },
            {
                text: claim,
                margin: [0, 10, 0, 0],
            },
            {
                text: dsp("ceo_position")+" "+dsp("ceo_fio") + '   ____________' ,
                alignment: "right",
                margin: [0, 35, 0, 0],
            },
            {
                text: "подпись",
                fontSize:8,
                alignment: "right",
                margin: [0, 0, 15, 0],
            },
            {
                text: 'МП',
                alignment: "right",
                margin: [0, 50, 20, 0],
            },
        ],
    }


    pdfMake.createPdf(docDefinition).open();
}

