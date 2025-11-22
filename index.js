const Form = document.querySelector('form');
const Input = document.querySelector('.input');

const walk = document.querySelector('.walk_text');
const bicycle = document.querySelector('.bicycle_text');
const car = document.querySelector('.car_text');
const plane = document.querySelector('.plane_text');

Form.addEventListener('submit', (e) => {
    e.preventDefault();

    const distance = (Input.value.trim());

    if (!distance) {
        return;
    }

    const walkSpeed = 3.6;
    const bicycleSpeed = 20;
    const carSpeed = 70;
    const planeSpeed = 800;

    walk.innerHTML = `${(distance / walkSpeed).toFixed(2)} time`;
    bicycle.innerHTML = `${(distance / bicycleSpeed).toFixed(2)} time`;
    car.innerHTML = `${(distance / carSpeed).toFixed(2)} time`;
    plane.innerHTML = `${(distance / planeSpeed).toFixed(2)} time`;
    Input.value = '';
});