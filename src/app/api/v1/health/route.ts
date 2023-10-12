async function health() {
  return Response.json({
    message: 'API is up and running!',
    success: true
  })
}

export { health as GET }
