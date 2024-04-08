const countdown = (auctionTime: string) => {
  const countDownDate = new Date(auctionTime).getTime()
  let message = ''

  const now = new Date().getTime()

  const distance = countDownDate - now

  if (distance < 0) {
    message = 'EXPIRED'
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

  message = days + 'd ' + hours + 'h ' + minutes + 'm '

  return message
}

export default countdown
