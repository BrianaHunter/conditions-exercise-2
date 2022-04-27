// console.log(name1.length);//10
// console.log(name2.length);//15
// console.log(name3.length);//14

//TEST
// const name1 = 'Wess'
// const name2 = 'Wess'
// const name3 = 'Wess'

const name1 = 'Wes Gibbins'
const name2 = 'Annalise Keating'
const name3 = 'Laurel Castillo'

if (name1.length > name2.length && name1.length > name3.length) {
    console.log(`${name1} has the longest name.`)
} 
if (name2.length > name1.length && name2.length > name3.length) {
    console.log(`${name2} has the longest name.`)
} 
if (name3.length > name1.length && name3.length > name2.length) {
    console.log(`${name3} has the longest name.`)
} 
if (name1.length === name2.length && name1.length > name3.length) {
    console.log(`${name1} and ${name2} has the longest name.`)
} 
if (name3.length === name2.length && name3.length > name1.length) {
    console.log(`${name3} and ${name2} has the longest name.`)
} 
if (name1.length === name3.length && name3.length > name2.length) {
    console.log(`${name1} and ${name3} has the longest name.`)
} 
if (name1.length === name2.length && name1.length === name3.length) {
    console.log(`All three names, ${name1}, ${name2} and ${name3}, are the same length.`)
} 