/* export type Employee = {
  id: number
  name: string
}
 */

export interface IEmployee {
  id: number
  name: string
}

export class Employee implements IEmployee {
  public id: number
  public name: string

  constructor(id: number, name: string);
  constructor(obj: IEmployee);
  constructor(fst: number | IEmployee, snd?: string) {
    if (typeof fst === 'number') {
      this.id = fst
      this.name = snd ?? ''
    } else {
      this.id = fst.id
      this.name = fst.name
    }
  }
  toString(): string {
    return `Employee[id=${this.id}, name=${this.name}]`
  }
}
