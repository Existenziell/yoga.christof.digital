export const htmlEmail = (name, message) => {
  return (
    <div style={{ fontFamily: `'Trebuchet MS', sans-serif, 'Open Sans'` }}>
      <img src="https://yoga.christof.digital/icons/logo-mobile.png" alt="Logo" />
      <h1>Hello {name}</h1>
      <p>This is a confirmation, that your message to yoga.christof.digital has indeed been received sucessfully.<br />I&apos;ll come back to you as soon as possible.</p>
      <p>Thank you so much,<br />Christof</p>
      <div style={{ marginTop: '40px' }}>
        <p>Your message:<br />{message}</p>
      </div>
    </div>
  )
}
