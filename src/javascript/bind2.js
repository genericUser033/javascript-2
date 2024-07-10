const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (() => {
    const cars = ['BMW'];

    const root = $('#root');
    const input = $('#input');
    const submit= $('#submit');

    return {
        add(car) {
            cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1);
        },
        render() {
            root.innerHTML = cars.map((car, index) => `
                <li>
                    ${car}
                    <span class="delete" data-index=$"{index}">&times</span>
                </li>
                
            `).join('');
        },
        handleDelete() {
            console.log('hjdjdj')
        },
        init() {
            // Handle DOM event
            submit.onclick = () => {
                const car = input.value;
                this.add(car);
                this.render();

                input.value = ''
                input.focus()
            }

            root.onclick = this.handleDelete;

            // When an event handler is a method of an object (like handleDelete in app), JavaScript ensures that this inside the method refers to the object itself (app in this case) when the method is called as an event handler.
            // If you were to use this.handleDelete(), the function would execute immediately during the assignment, rather than waiting for a click event on root.
            this.render();// app.init => this === app
        }
    }
})();

app.init()

// Delegate pattern
// bat duoc nhung su kien click cua element sau khi duoc them vao DOM