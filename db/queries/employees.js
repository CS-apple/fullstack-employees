
import db from "#db/client"

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  // TODO
  const sql = `INSERT INTO employees (name, birthday, salary ) VALUES ($1,$2,$3) RETURNING *`;
  const {rows: [employee]} = await db.query(sql,[name, birthday, salary])
  if(!employee)return null
  return employee;
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // TODO
  const sql = `SELECT * FROM employees`;
  const {rows: employees} = await db.query(sql)
  return employees;

}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
  const sql = `SELECT * FROM employees WHERE id = $1`;
  const {rows: [employee]} = await db.query(sql,[id])
  if(!employee) return null;
  return employee;
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
  const sql = `
    UPDATE employees 
    SET
      name= $2,
      birthday = $3,
      salary = $4
    WHERE id = $1
    RETURNING *
  `;
  const {rows: [employee]} = await db.query(sql, [id, name, birthday, salary]);
  if (!employee)return null;
  return employee;

}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
  const sql = `
    DELETE FROM employees
    WHERE id = $1
    RETURNING *
    `;
  const {rows: [employee]} = await db.query(sql, [id])
  if(!employee) return null
  return employee
}


export const employeeList = [
  {
    name: "Dimitri",
    birthday:"1993-06-11",
    salary: 1000
  },
  {
    name: "Michelle",
    birthday:"1996-01-4",
    salary: 1800
  },
  {
    name: "Katia",
    birthday:"1995-05-26",
    salary: 1000
  },
  {
    name: "Maury",
    birthday:"1999-01-01",
    salary: 1100
  },
  {
    name: "Jade",
    birthday:"1993-06-11",
    salary: 1400
  },
  {
    name: "Rafick",
    birthday:"1993-06-11",
    salary: 1600
  },
  {
    name: "Mandy",
    birthday:"1998-06-01",
    salary: 1000
  },
  {
    name: "Sylvester",
    birthday:"1993-06-11",
    salary: 1000
  },
  {
    name: "Helena",
    birthday:"1993-06-11",
    salary: 1000
  },
  {
    name: "Guilia",
    birthday:"1993-06-11",
    salary: 1000
  },

]