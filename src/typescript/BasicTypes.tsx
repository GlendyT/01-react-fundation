

export const BasicTypes = () => {

    const name:string = "Fernando"
    const age:number = 37
    const isActive:boolean = true
    const powers:string[] = ["React", "ReactNative", "Angular", "Vue", "Qwik"]

  return (
    <>
    <h1>Tipos Basicos</h1>
    {name} {age} {isActive ? "true": "false"}
    <br/>
    {powers.join(", ")}
    </>
  )
}
