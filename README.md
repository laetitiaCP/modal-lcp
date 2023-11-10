# modal-lcp

> Simple modal in React

[![NPM](https://img.shields.io/npm/v/modal-lcp.svg)](https://www.npmjs.com/package/modal-lcp) ![Static Badge](https://img.shields.io/badge/made_with%20-%20javascript%20-%20blue) ![Static Badge](https://img.shields.io/badge/react-green)



## Install

```bash
npm install --save modal-lcp
```

## Usage

```jsx
import React, { useState } from 'react'
import Modal from 'modal-lcp'
import 'modal-lcp/dist/index.css'

const Example = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
    
   return (
	   <div>
		  <button onClick={openModal}>Cliquez ici</button>
		  <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
			<h2>TEST</h2>
		  </Modal>
		</div>
   )
}
```

## License

MIT © [laetitiaCP](https://github.com/laetitiaCP)
