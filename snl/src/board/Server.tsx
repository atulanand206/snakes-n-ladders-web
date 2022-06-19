export const newBoard = async () => {
  const data = {
    size: 8,
    players: 2,
  }
  const res = await fetch(`${process.env.REACT_APP_SERVER}/new`, {
    method: 'POST',
    body: JSON.stringify(data) 
  })
  return res.json()
}