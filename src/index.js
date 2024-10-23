import './styles.css'
import { Dropdown } from './Dropdown.js'

const element1 = document.createElement('div')
element1.textContent = 'Test1'

const element2 = document.createElement('div')
element2.textContent = 'Test2'

const dropdown1 = new Dropdown('dropdown1', element1)
const dropdown2 = new Dropdown('dropdown2', element2)
