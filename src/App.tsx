import { useState } from 'react'
import { Button } from './components/common/Button'
import { ButtonVariant } from './components/common/Button/Button.constants'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button
      variant = {ButtonVariant.Default}
      onClick={() => setCount}
    >
      Quero Adotar
    </Button>

    <Button 
      variant = {ButtonVariant.Outlined}
      onClick={() => setCount((count) => count + 1)}
      >
      Tenho um abrigo
    </Button>

    <Button 
      variant = {ButtonVariant.Text}
      onClick={() => setCount((count) => count + 1)}
      >
      Tenho um abrigo
    </Button>

    <Button 
      variant = {ButtonVariant.Disabled}
      onClick={() => setCount((count) => count + 1)}
      >
      Tenho um abrigo
    </Button>

    </>
  )
}
