const Saludo = ( {name, lastname, fn, children} ) => {
  
  if(fn){
    fn()
  }

  const styles = {
    title: 'font-mono text3xl undreline font-bold m-5'
  }

  return (
    <>    
        <h1 className={styles.title}>!Saludos a: {name}{lastname}!</h1>
        {children}
    </>
  )
}
export default Saludo