

export const BasicFunctions = () => {

    const addTwoNumber =  (a:number, b:number): string => {
       // return (a + b).toString()
       return `${ a + b}`
    }
  return (
    <>
     <h1>Functiones</h1>
     <span>El resultado de sumar: { addTwoNumber(2 , 8)}</span>
    </>
  )
}
