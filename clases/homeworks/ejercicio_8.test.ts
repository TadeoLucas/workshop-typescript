import { Persona } from "./ejercicio 8"


describe.only(
  'Vamos a testear: Persona',
  ()=>{

    it('Can create an instance of Persona', ()=> {
      const newPersona = new Persona(
        'coco',
        21,
        'coco@email.com'
      )
      expect(newPersona.nombre).toBe('coco')
    })

  }
)