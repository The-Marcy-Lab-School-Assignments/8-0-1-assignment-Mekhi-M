export const LanguageButtons = ({english, spanish, chinese, japanese, haitian, hawaiian}) => {
  return (
    <section style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '410px'}}>
      <button onClick={english}>English</button>
      <button onClick={spanish}>Spanish</button>
      <button onClick={chinese}>Chinese (Simplified)</button>
      <button onClick={japanese}>Japanese</button>
      <button onClick={haitian}>Haitian Creole</button>
      <button onClick={hawaiian}>Hawaiian</button>
    </section>
  )
}