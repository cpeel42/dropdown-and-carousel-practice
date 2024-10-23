class Dropdown {
  constructor(text, content) {
    this.isOpen = false 
    this.body = document.querySelector('body')
    this.dropdown = document.querySelector('[data-dropdown-template]').content.cloneNode(true)
    this.button = this.dropdown.querySelector('[data-dropdown-button]')
    
    this.button.textContent = text
    this.button.addEventListener('click', () => this.toggle())

    this.content = this.dropdown.querySelector('[data-dropdown-content]')
    this.content.appendChild(content)

    this.body.append(this.button)
    this.body.append(this.content)

    this.content.style.display = 'none'
  }

  toggle() {
    if (this.isOpen) {
      this.hide()
    } else {
      this.show()
    }
  }

  show() {
    console.log('showing')
    this.content.style.display = 'block'
    this.isOpen = true  // Update state to open
  }

  hide() {
    console.log('hiding')
    this.content.style.display = 'none'
    this.isOpen = false  // Update state to closed
  }
}


export { Dropdown }
