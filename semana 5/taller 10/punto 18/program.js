let a = 0, b = 1, siguiente;

document.write(a);
document.write(b);

for (let i = 2; i < 10; i++) {
    siguiente = a + b;
    document.write(siguiente);
    a = b;
    b = siguiente;
}
