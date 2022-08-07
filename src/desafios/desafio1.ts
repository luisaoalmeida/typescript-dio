// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

const employee = {
    id: 10,
    nome: "Luisa"
}

const employee2: {codigo: number, nome: string} = {
    codigo: 20,
    nome: 'Emanuelle'
}

interface Employee {
    codigo: number,
    nome: string
};

const employeeObj = {} as Employee;
employeeObj.codigo = 10;
employeeObj.nome = 'Luisa';

const employeeObj2: Employee = {
    codigo: 20,
    nome: 'Emanuelle'
}