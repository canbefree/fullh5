import './default.scss'
import * as React from 'react';

import  {createRoot} from 'react-dom/client'
import App from './App'

const app = document.getElementById('app')
const root = createRoot(app as Element)

root.render(<App></App>)
