import { useState } from 'preact/hooks'
import ky from 'ky'
import './app.css'

export function App() {
  const [message, setMessage] = useState('')
  const [said, setSaid] = useState('')


  async function submit(ev: SubmitEvent) {
    ev.preventDefault()
    const response = await ky(`https://dash.deno.com/playground/cow-say-99?say=${message}`).text()
    setSaid(response)
  }

  return (
    <>
      <form onSubmit={ev => submit(ev)}>
        <textarea name="say" value={message} onInput={ev => setMessage(ev.currentTarget.value)}></textarea>
        <button type="submit">SAY</button>
        <hr />
        <textarea name="said" value={said} readOnly></textarea>
      </form>
    </>
  )
}
