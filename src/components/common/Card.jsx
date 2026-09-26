
const Card = ({children}) => {
  return (
    <div className="border border-blue-800/30 rounded-lg bg-white/20 hover:bg-white/40">
      {children}
    </div>
  )
}

export default Card
