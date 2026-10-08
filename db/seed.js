import db from "#db/client";
import { createEmployee, employeeList } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO//
  //loop though employee list 
  //for each employee create employee
  for (const employee of employeeList){
    const addedEmployee = await createEmployee(employee);
  }
}
