import { useState } from 'react'
import type { FC } from 'react'
// import viteLogo from '../public/vite.svg'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import reactLogo from 'assets/react.svg'
import './App.css'

const title = import.meta.env.VITE_APP_TITLE // 追加
console.dir(import.meta.env) // 追加

// function App () {
const App: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> */}
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* <a href="https://react.dev" target="_blank" rel="noreferrer"> */}
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>Vite + React</h1> コメントアウト */}
  <h1>{title}</h1> {/* 環境変数を利用したタイトルの挿入 */}
      <div className="card">
        <button onClick={() => { setCount((count) => count + 1) }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
