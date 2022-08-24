// 1
const list1 = [1,2,3,4,5]
const list2 = [1,2,3,4,5]
const list3 = [1,2,3,4,5]
const list4 = [1,2,3,4,5]
const list5 = [1,2,3,4,5]

const alllist = [...list1,...list2,...list3,...list4,...list5]
console.log(alllist)


const obj1 = {
    key1:'head',
    key2:'stomack',
    key3:'beck',
    key4:'food',
    key5:'hand'
}

const obj2 = {
    ...obj1,
    key6:'leg',
    key7:'shoulder',
    key8:'fingers'
}

console.log(obj2)


let click = document.getElementById('button1')
click.onclick = function() {
    let input = document.querySelector('input').value
    document.querySelector('.textInput').innerHTML="Hello "+input
}



