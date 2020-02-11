// -- 1. CONSOLE.GROUP --
console.group('Firs lever of group');
console.log('string');
console.log('string');
console.group('Next level');
console.log('string');
console.log('string');
console.groupEnd();

// -- 2. CONSOLE.TABLE --
const obj = {
    name: 'Anton',
    surname: 'Burkun',
    position: 'PM',
    course: 'front-end pro'
};
console.table(obj);

// -- 3. CONSOLE.TIME --

console.time();
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.timeEnd();

// -- 4. CONSOLE.TRACE --

function wrapper() {
    function inner() {
        console.trace();
    }

    inner();
}

wrapper();

// -- 5. CONSOLE.CLEAR --
console.clear();