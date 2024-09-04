export const FontSizeButtons = ({increment, decrement}) => {
  return (
    <section style={{display: 'flex', justifyContent: 'center', gap: '5rem'}}>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </section>
  )
}