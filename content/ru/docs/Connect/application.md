---
title: ""
linkTitle: "Заявление"
js: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/pdfmake.min.js"
date: 2020-10-20
description: >
---

{{< rawhtml >}}   
  <form>
  <label for="businessEntityName">Название организации, либо ИП:</label><br>
  <input type="text" id="businessEntityName" size="100"><br>
  
  <label for="businessEntityAdress">Юридический адрес:</label><br>
  <input type="text" id="businessEntityAddress" size="100"><br>
  
  <label for="inn">ИНН:</label><br>
  <input type="text" id="inn" name="inn" size="12"><br>
  
  <label for="ogrn">ОГРН/ОГРНИП:</label><br>
  <input type="text" id="ogrn" size="30"><br>
  
  <label>Должность руководителя организации:</label><br>
  <input type="text" id="ceo_position" size="30"><br>
  <input type="text" id="ceo_position_r" size="30" placeholder="в родительном падеже"><br>
  <label>ФИО руководителя организации:</label><br>
  <input type="text" id="ceo_fio" size="100"><br>
  <input type="text" id="ceo_fio_r" size="100" placeholder="в родительном падеже"><br>
  
  <label><strong>Данные ответственного лица:</strong></label><br>
  <label for="fio">Должность: &nbsp</label> <input type="text" id="position" size="30"><br>
  <label for="fio">ФИО: &nbsp</label> <input type="text" id="fio" size="100"><br>
  <label for="email">e-mail:</label><input type="email" id="email" size="50"><br>
  <label for="phone">Тел:&nbsp &nbsp &nbsp</label><input type="tel" id="phone" size="12"><br> 
   
  </form>

   <p>
   <input type="button" value="Тестовый" onclick='openpdf("test")'>
   
   <input type="button" value="Продуктивный" onclick='openpdf("production")'>
   </p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.68/vfs_fonts.js"></script>

<script src="/assets/js/pdf_test.js"></script>

{{< /rawhtml >}}