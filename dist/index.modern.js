import React from 'react';

var styles = {"modal":"_styles-module__modal__Xt-75","header":"_styles-module__header__1aDvk","close":"_styles-module__close__2I1sI","bg":"_styles-module__bg__2jfzS"};

const Modal = ({
  isOpen,
  onClose,
  children
}) => {
  if (isOpen === false) {
    return null;
  }
  const close = e => {
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: styles.modal
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.header
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: styles.close
  }, "\xD7")), children), /*#__PURE__*/React.createElement("div", {
    className: styles.bg,
    onClick: e => close(e)
  }));
};

export default Modal;
//# sourceMappingURL=index.modern.js.map
