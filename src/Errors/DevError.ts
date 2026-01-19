class DevError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'DevError'
  }
}

export default DevError
