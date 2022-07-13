//children
const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Este é o título do Container</h2>
        {children}
        {myValue}
    </div>
  )
}

export default Container