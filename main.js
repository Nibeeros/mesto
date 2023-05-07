(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var i=n((function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_isValid",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e)})),r(this,"_showInputError",(function(e){var t=o._formElement.querySelector(".".concat(e.id));e.classList.add(o._settings.inputErrorClass),t.classList.add(o._settings.errorClass),t.textContent=e.validationMessage})),r(this,"_hideInputError",(function(e){var t=o._formElement.querySelector(".".concat(e.id));e.classList.remove(o._settings.inputErrorClass),t.classList.remove(o._settings.errorClass),t.textContent=""})),r(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),r(this,"_setEventListeners",(function(){o._toggleButtonState(),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._isValid(e),o._toggleButtonState()}))}))})),r(this,"_toggleButtonState",(function(){o._hasInvalidInput()?o.disableButton():o._enableButton()})),r(this,"disableButton",(function(){o._submitButton.classList.add(o._settings.inactiveButtonClass),o._submitButton.setAttribute("disabled","disabled")})),r(this,"_enableButton",(function(){o._submitButton.classList.remove(o._settings.inactiveButtonClass),o._submitButton.removeAttribute("disabled")})),r(this,"enableValidation",(function(){o._setEventListeners()})),this._settings=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._submitButton=this._formElement.querySelector(this._settings.submitButtonSelector)}));function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function e(t,n,r,o,i,u,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._id=t.id,this._likes=t.likes,this._ownerId=t.ownerId,this._userId=r,this._handleCardClick=o,this._templateSelector=n,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__image"),this._likeButton=this._element.querySelector(".element__like"),this._deleteBusket=this._element.querySelector(".element__del"),this._likeCard=i,this._dislikeCard=u,this._handleCardsConfirm=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._owner(),this._liked(),this._likeTotal=this._element.querySelector(".element__like-total"),this._likeTotal.textContent="".concat(this._likes.length),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("element__like_active")?e._dislikeCard():e._likeCard()})),this._cardImage.addEventListener("click",(function(){e._handleOpenPopup()})),this._deleteBusket.addEventListener("click",(function(){e._handleCardsConfirm(e)}))}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"_owner",value:function(){this._userId!==this._ownerId&&this._element.querySelector(".element__del").remove()}},{key:"handleLikeClick",value:function(){this._likeButton.classList.toggle("element__like_active")}},{key:"_liked",value:function(){var e=this;this._likes.some((function(t){return t._id===e._userId}))&&this.handleLikeClick()}},{key:"getLikesTotal",value:function(e){this._likeTotal.textContent="".concat(e.likes.length)}},{key:"_handleOpenPopup",value:function(){this._handleCardClick(this._link,this._name)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t),this._userJob=document.querySelector(n),this._userAvatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userJob:this._userJob.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userJob.textContent=t}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=n,this._renderer=t}var t,n;return t=e,(n=[{key:"renderer",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscPress=this._handleEscPress.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscPress)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscPress)}},{key:"_handleEscPress",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target===e._popup&&e.close()})),this._popup.querySelector(".popup__close").addEventListener("mouseup",(function(){e.close()}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__images"),t._title=t._popup.querySelector(".popup__images-title"),t}return t=u,(n=[{key:"open",value:function(e,t){this._image.src=e,this._image.alt=t,this._title.textContent=t,S(w(u.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._formElement=n._popup.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".popup__item"),n._submitBtn=n._formElement.querySelector(".popup__save"),n._submitForm=t,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){return e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;O(C(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){O(C(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"sabmitBtnSave",value:function(){this._submitBtn.textContent="Сохранение..."}},{key:"sabmitBtnSaveComplite",value:function(e){this._submitBtn.textContent=e}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then((function(e){return t._getResponseData(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getResponseData(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"dislikeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._formElement=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;A(x(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}},{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_),N=document.querySelector(".profile__adit-button"),V=(document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".profile__update")),J=(document.querySelector(".profile__avatar"),document.querySelectorAll(".popup"),document.querySelector(".popup_edit-profile"),document.querySelector(".popup__close_edit-profile"),document.querySelector(".popup__form_edit-profile"),document.querySelector(".popup__item_edit-profile_name")),F=document.querySelector(".popup__item_edit-profile_job"),G=document.querySelector(".profile__add-button"),H=(document.querySelector(".popup_edit-card"),document.querySelector(".popup__close_edit-card"),document.querySelector(".popup__form_edit-card"),document.querySelector(".popup__item_edit-card_name"),document.querySelector(".popup__item_edit-card_job"),document.querySelector(".popup__save_edit-profile"),document.querySelector(".popup__save_edit-card"),document.querySelector(".popup_edit-image"),document.querySelector(".popup__images"),document.querySelector(".popup__images-title"),document.querySelector(".popup__close_edit-image"),document.querySelector(".elements"));function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z,$={};z={formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_inactive",inputErrorClass:"popup__item_type_error",errorClass:"popup__error_active"},Array.from(document.querySelectorAll(z.formSelector)).forEach((function(e){var t=new i(z,e),n=e.getAttribute("name");$[n]=t,t.enableValidation()}));var K=new f(".profile__title",".profile__subtitle",".profile__avatar"),Q=new k(".popup_edit-image");Q.setEventListeners();var W=new m((function(e){var t=Y(e);W.addItem(t)}),H),X=null;function Y(e){var t=new c({name:e.name,link:e.link,id:e._id,likes:e.likes,ownerId:e.owner._id},".card-template",X,(function(e,t){Q.open(e,t)}),(function(){te.likeCard(e._id).then((function(e){t.handleLikeClick(),t.getLikesTotal(e)})).catch((function(e){return console.log(e)}))}),(function(){te.dislikeCard(e._id).then((function(e){t.handleLikeClick(),t.getLikesTotal(e)})).catch((function(e){return console.log(e)}))}),(function(e){re.open(),re.setSubmitAction((function(){te.removeCard(e._id).then((function(){e.removeCard(),re.close()})).catch((function(e){return console.log(e)}))}))}));return t.generateCard()}var Z=new L(".popup_edit-profile",(function(e){Z.sabmitBtnSave(),te.setUserInfo({name:e.name,job:e.job}).then((function(e){K.setUserInfo(e.name,e.about),Z.close()})).catch((function(e){return console.log(e)})).finally((function(){Z.sabmitBtnSaveComplite("Сохранить")}))}));N.addEventListener("click",(function(){Z.open();var e=K.getUserInfo();J.value=e.userName,F.value=e.userJob,$["edit-profile"].disableButton()})),Z.setEventListeners();var ee=new L(".popup_edit-card",(function(e){ee.sabmitBtnSave(),te.addNewCard({name:e.place,link:e.link}).then((function(e){var t=Y(e);W.addItem(t),ee.close()})).catch((function(e){return console.log(e)})).finally((function(){ee.sabmitBtnSaveComplite("Создать")}))}));G.addEventListener("click",(function(){ee.open(),$["edit-card"].disableButton()})),ee.setEventListeners();var te=new T({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"66250356-2b07-4fcc-a641-4965330ce9d5","content-type":"application/json"}});Promise.all([te.getUserInfo(),te.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];X=o._id,K.setUserInfo(o.name,o.about),K.setUserAvatar(o.avatar),W.renderer(i)})).catch((function(e){return console.log(e)}));var ne=new L(".popup_edit-avatar",(function(e){ne.sabmitBtnSave(),te.updateAvatar({avatar:e.avatar}).then((function(e){K.setUserAvatar(e.avatar),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){ne.sabmitBtnSaveComplite("Сохранить")}))}));ne.setEventListeners(),V.addEventListener("click",(function(){ne.open(),$["edit-avatar"].disableButton()}));var re=new D(".popup_confirm");re.setEventListeners()})();