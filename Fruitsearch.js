let availableKeywords = [
    'Apple', 
    'Apricot', 
    'Avocado 🥑',
    'Banana', 
    'Bilberry', 
    'Blackberry', 
    'Blackcurrant', 
    'Blueberry', 
    'Boysenberry', 
    'Currant', 
    'Cherry', 
    'Coconut', 
    'Cranberry', 
    'Cucumber', 
    'Custard apple', 
    'Damson', 
    'Date', 
    'Dragonfruit', 
    'Durian', 
    'Elderberry', 
    'Feijoa', 
    'Fig', 
    'Gooseberry', 
    'Grape', 
    'Raisin', 
    'Grapefruit', 
    'Guava', 
    'Honeyberry', 
    'Huckleberry', 
    'Jabuticaba', 
    'Jackfruit', 
    'Jambul', 
    'Juniper berry', 
    'Kiwifruit', 
    'Kumquat', 
    'Lemon', 
    'Lime', 
    'Loquat', 
    'Longan', 
    'Lychee', 
    'Mango', 
    'Mangosteen', 
    'Marionberry', 
    'Melon', 
    'Cantaloupe', 
    'Honeydew', 
    'Watermelon', 
    'Miracle fruit', 
    'Mulberry', 
    'Nectarine', 
    'Nance', 
    'Olive', 
    'Orange', 
    'Clementine', 
    'Mandarine', 
    'Tangerine', 
    'Papaya', 
    'Passionfruit', 
    'Peach', 
    'Pear', 
    'Persimmon', 
    'Plantain', 
    'Plum', 
    'Pineapple', 
    'Pomegranate', 
    'Pomelo', 
    'Quince', 
    'Raspberry', 
    'Salmonberry', 
    'Rambutan', 
    'Redcurrant', 
    'Salak', 
    'Satsuma', 
    'Soursop', 
    'Star fruit', 
    'Strawberry', 
    'Tamarillo', 
    'Tamarind', 
    'Yuzu',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){ //when we start typing the input box this will be executed
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
         return keyword.toLowerCase().includes(input.toLowerCase());
        }); //filter all keywords whatever we type
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</list>"
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>"; //removes comma
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}