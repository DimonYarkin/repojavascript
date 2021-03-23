var a = 1, b = 1, c, d;
let body = document.body;
var div = document.createElement("div");
body.appendChild(div)
c = ++a; //alert(c);           // 2


let textInner = `<h4>c = ++a; результат = ${c}</h4>`
    + '<p>Здесь используется префиксная форма записи унарного оператора. '
    + 'Исходя из этого переменная <b>a</b> будет инкремирована на единицу и равна 2 <br>'
    + 'и переменная <b>c</b> после присваивания тоже будет равна 2 </p>';
d = b++;            // 1

textInner += `<h4>d = b++; результат = ${d}</h4>`
    + '<p>Здесь используется постфиксная форма записи унарного оператора. '
    + 'Исходя из этого переменная <b>b</b> в данном выражении не будет инкремирована на единицу и равна 1 <br>'
    + 'и переменная <b>d</b> после присваивания тоже будет равна 1 </p>';
c = (2 + ++a);       // 5

textInner += `<h4>c = (2+ ++a); результат = ${c}</h4>`
    + '<p>Здесь используется префиксная форма записи унарного оператора. '
    + 'Исходя из этого переменная <b>a</b> в данном выражении будет инкремирована на единицу и равна 3 <br>'
    + 'и переменная <b>c</b> после присваивания будет равна 5 </p>';

d = (2 + b++);       // 4

textInner += `<h4>d = (2+ b++); результат = ${d}</h4>`
    + '<p>Здесь используется постфиксная форма записи унарного оператора. В педыдущем выражении перенная <b>b</b> была инкремирована на 1 и сейчас равна 2'
    + 'Исходя из этого переменная <b>b</b> в данном выражении не будет инкремирована на единицу и равна 2 <br>'
    + 'и переменная <b>d</b> после присваивания будет равна 4 </p>';
textInner += `<h4>В итоге после всех интрементов переменная <b>a</b> = ${a} и переменная <b>b</b> = ${b}</h4>`
div.innerHTML = textInner