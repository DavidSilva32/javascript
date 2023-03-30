let index = 0

while (index < 10) {
    console.log(index)
    // index = index + 1
    // index += 1

    // Mesma coisa que acima
    index++
}

const person = {
    name: 'Jane',
    age: '21'
}

for (property in person) {
    console.log(person[property])
}