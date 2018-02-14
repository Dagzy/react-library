// const person = {
//     username: 'Kenn',
//     profession: 'Secret Agent'
// }

// console.log(`${person.username}, ${person.profession}, extraordinaire`);

class User {
    constructor(){
        let quizzle = "quizzleberry pie";
        console.log(quizzle);

        // function talk(){
        //     console.log(this.quizzle)
        // }
        // talk();
        const talky = () => {
            console.log(this)
        }
        talky();
    }
}
const q = new User();
q.quizzle = 'smashy';
q.whizzle = 'smushy';
console.log(q.whizzle)