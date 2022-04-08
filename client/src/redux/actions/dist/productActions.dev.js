"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productReviewCreateAction = exports.productUpdateAction = exports.productCreateAction = exports.productDeleteAction = exports.productDetailsAction = exports.productListAllAction = exports.productListAction = void 0;

var _productConstants = require("../constants/productConstants");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productListAction = function productListAction(keyword, pageNumber) {
  return function _callee(dispatch) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: _productConstants.PRODUCT_LIST_REQUEST
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(process.env.REACT_APP_DEV_API, "/products?keyword=").concat(keyword, "&pageNumber=").concat(pageNumber)));

          case 4:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: _productConstants.PRODUCT_LIST_SUCCESS,
              payload: data
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: _productConstants.PRODUCT_LIST_FAILURE,
              payload: _context.t0.response && _context.t0.response.data.message ? _context.t0.response.data.message : _context.t0.message
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.productListAction = productListAction;

var productListAllAction = function productListAllAction() {
  return function _callee2(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            dispatch({
              type: _productConstants.PRODUCT_LIST_ALL_REQUEST
            });
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(process.env.REACT_APP_DEV_API, "/products/list")));

          case 4:
            _ref2 = _context2.sent;
            data = _ref2.data;
            dispatch({
              type: _productConstants.PRODUCT_LIST_ALL_SUCCESS,
              payload: data
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            dispatch({
              type: _productConstants.PRODUCT_LIST_ALL_FAILURE,
              payload: _context2.t0.response && _context2.t0.response.data.message ? _context2.t0.response.data.message : _context2.t0.message
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.productListAllAction = productListAllAction;

var productDetailsAction = function productDetailsAction(id) {
  return function _callee3(dispatch) {
    var _ref3, data;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            dispatch({
              type: _productConstants.PRODUCT_DETAILS_REQUEST
            });
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("".concat(process.env.REACT_APP_DEV_API, "/products/").concat(id)));

          case 4:
            _ref3 = _context3.sent;
            data = _ref3.data;
            dispatch({
              type: _productConstants.PRODUCT_DETAILS_SUCCESS,
              payload: data
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            dispatch({
              type: _productConstants.PRODUCT_DETAILS_FAILURE,
              payload: _context3.t0.response && _context3.t0.response.data.message ? _context3.t0.response.data.message : _context3.t0.message
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.productDetailsAction = productDetailsAction;

var productDeleteAction = function productDeleteAction(id) {
  return function _callee4(dispatch, getState) {
    var _getState, userData, config, _ref4, data;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            dispatch({
              type: _productConstants.PRODUCT_DELETE_REQUEST
            });
            _getState = getState(), userData = _getState.userLogin.userData;
            config = {
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(userData.token, " ")
              }
            };
            _context4.next = 6;
            return regeneratorRuntime.awrap(_axios["default"]["delete"]("".concat(process.env.REACT_APP_DEV_API, "/products/").concat(id), config));

          case 6:
            _ref4 = _context4.sent;
            data = _ref4.data;
            dispatch({
              type: _productConstants.PRODUCT_DELETE_SUCCESS,
              payload: data
            });
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            dispatch({
              type: _productConstants.PRODUCT_DELETE_FAILURE,
              payload: _context4.t0.response && _context4.t0.response.data.message ? _context4.t0.response.data.message : _context4.t0.message
            });

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.productDeleteAction = productDeleteAction;

var productCreateAction = function productCreateAction() {
  return function _callee5(dispatch, getState) {
    var _getState2, userData, config, _ref5, data;

    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            dispatch({
              type: _productConstants.PRODUCT_CREATE_REQUEST
            });
            _getState2 = getState(), userData = _getState2.userLogin.userData;
            config = {
              headers: {
                Authorization: "Bearer ".concat(userData.token)
              }
            };
            _context5.next = 6;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(process.env.REACT_APP_DEV_API, "/products"), {}, config));

          case 6:
            _ref5 = _context5.sent;
            data = _ref5.data;
            dispatch({
              type: _productConstants.PRODUCT_CREATE_SUCCESS,
              payload: data
            });
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            dispatch({
              type: _productConstants.PRODUCT_CREATE_FAILURE,
              payload: _context5.t0.response && _context5.t0.response.data.message ? _context5.t0.response.data.message : _context5.t0.message
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
};

exports.productCreateAction = productCreateAction;

var productUpdateAction = function productUpdateAction(product) {
  return function _callee6(dispatch, getState) {
    var _getState3, userData, config, _ref6, data;

    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            dispatch({
              type: _productConstants.PRODUCT_UPDATE_REQUEST
            });
            _getState3 = getState(), userData = _getState3.userLogin.userData;
            config = {
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(userData.token)
              }
            };
            _context6.next = 6;
            return regeneratorRuntime.awrap(_axios["default"].put("".concat(process.env.REACT_APP_DEV_API, "/products/").concat(product._id), product, config));

          case 6:
            _ref6 = _context6.sent;
            data = _ref6.data;
            dispatch({
              type: _productConstants.PRODUCT_UPDATE_SUCCESS,
              payload: data
            });
            dispatch({
              type: _productConstants.PRODUCT_DETAILS_SUCCESS,
              payload: data
            });
            _context6.next = 15;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            dispatch({
              type: _productConstants.PRODUCT_UPDATE_FAILURE,
              payload: _context6.t0.response && _context6.t0.response.data.message ? _context6.t0.response.data.message : _context6.t0.message
            });

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
};

exports.productUpdateAction = productUpdateAction;

var productReviewCreateAction = function productReviewCreateAction(productId, review) {
  return function _callee7(dispatch, getState) {
    var _getState4, userData, config;

    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            dispatch({
              type: _productConstants.PRODUCT_CREATE_REVIEW_REQUEST
            });
            _getState4 = getState(), userData = _getState4.userLogin.userData;
            config = {
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(userData.token)
              }
            };
            _context7.next = 6;
            return regeneratorRuntime.awrap(_axios["default"].post("".concat(process.env.REACT_APP_DEV_API, "/products/").concat(productId, "/reviews"), review, config));

          case 6:
            dispatch({
              type: _productConstants.PRODUCT_CREATE_REVIEW_SUCCESS
            });
            _context7.next = 12;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            dispatch({
              type: _productConstants.PRODUCT_CREATE_REVIEW_FAILURE,
              payload: _context7.t0.response && _context7.t0.response.data.message ? _context7.t0.response.data.message : _context7.t0.message
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.productReviewCreateAction = productReviewCreateAction;