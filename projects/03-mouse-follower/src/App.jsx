import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    const { clientX, clientY } = event
    setPosition({ x: clientX, y: clientY })
  }

  // User effect to handle mouse position
  useEffect(() => {
    console.log('effect', { enabled })

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Cleanup when the component is unmounted or the dependencies changes
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgb(0,0,0,0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Deactivate' : 'Activate'} follow pointer
      </button>
    </>
  )
}

function App () {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}
      <br />
      <button onClick={() => setMounted(!mounted)}>
        Toggle Mounted Follow Mouse Component
      </button>
    </main>
  )
}

export default App
