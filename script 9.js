let is_equal_pressed = false;
document.addEventListener('DOMContentLoaded', function(){
    // Обработчики событий для кнопок ввода цифр
    document.querySelectorAll("button[class *='btn_']").forEach(element =>{
        element.addEventListener('click',function(element){
            if(is_equal_pressed)
            {
                document.querySelector('input').value = "";
                document.querySelector('.gray-input').textContent = "";
                is_equal_pressed = false;
            }
            if(isNaN(parseFloat(document.querySelector('input').value.slice(-1))) === true && document.querySelector('input').value.slice(-1) !== '.')
            {
                document.querySelector('.gray-input').textContent = "";
            }
            document.querySelector('input').value+=element.target.textContent;
            document.querySelector('.gray-input').textContent+=element.target.textContent;
        })
    });

    // Очистка ввода
    document.querySelector('.delete').addEventListener('click',function(){
        document.querySelector('input').value = "";
        document.querySelector('.gray-input').textContent = "";
    })

    // Удаление одного символа
    document.querySelector('.left').addEventListener('click', function(){
        document.querySelector('input').value = document.querySelector('input').value.slice(0,-1);
        document.querySelector('.gray-input').textContent=document.querySelector('.gray-input').textContent.slice(0,-1);
    })

    // Операторы
    document.querySelectorAll('.operation').forEach(element =>{
        element.addEventListener('click', function(element){
            if (is_equal_pressed){is_equal_pressed = false;}
            if(document.querySelector('input').value.length!==0 ){
                if(isNaN(parseFloat(document.querySelector('input').value.slice(-1))) == 1)
                {
                    document.querySelector('input').value = document.querySelector('input').value.slice(0,-1);
                    document.querySelector('.gray-input').textContent =document.querySelector('.gray-input').textContent.slice(0,-1);
                }
                document.querySelector('.gray-input').textContent+=element.target.textContent;
                document.querySelector('input').value+=element.target.textContent;
            }
        });
    })

    // Добавление точки
    document.querySelector('.dot').addEventListener('click', function(){
        if(document.querySelector('input').value.slice(-1) !== '.')
        {
            document.querySelector('input').value+= '.';
            document.querySelector('.gray-input').textContent+='.'
        }
    })

    // Вычисление результата
    document.querySelector('.equal').addEventListener('click',function(){
        if(isNaN(parseFloat(document.querySelector('input').value.slice(-1))) == 0)
        {
            document.querySelector('input').value = eval(document.querySelector('input').value);
            document.querySelector('.gray-input').textContent = document.querySelector('input').value;
            is_equal_pressed = true
        }

    })
})