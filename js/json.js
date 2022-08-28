// JavaScript object Not

const user = {id: 1, name: 'Gorib Amir', job: 'actor'}

const stringified = JSON.stringify(user)
// console.log(stringified)

const shop = {
    owner: 'Alia',
    addres: {
        street: 'kochukhet voot er goli',
        city: 'ranbir', 
        country: 'bd'
    },
    product: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 5400,
    isOpen: true,
    isNew: false
}

const shopJSON = JSON.stringify(shop)
console.log(shopJSON)
const shopObject = JSON.parse(shopJSON)
console.log(shopObject);
