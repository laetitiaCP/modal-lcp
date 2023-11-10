function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"modal":"_styles-module__modal__Xt-75","header":"_styles-module__header__1aDvk","close":"_styles-module__close__2I1sI","bg":"_styles-module__bg__2jfzS"};

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children;
  if (isOpen === false) {
    return null;
  }
  var close = function close(e) {
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
    onClick: function onClick(e) {
      return close(e);
    }
  }));
};

module.exports = Modal;
//# sourceMappingURL=index.js.map
