/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
class MDCFoundation {

  /** @return enum{cssClasses} */
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  /** @return enum{strings} */
  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  /** @return enum{numbers} */
  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  /** @return {!Object} */
  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  /**
   * @param {!A} adapter
   */
  constructor(adapter = {}) {
    /** @private {!A} */
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCFoundation;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* unused harmony reexport util */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








class MDCRipple extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root, {isUnbounded = undefined} = {}) {
    const ripple = new MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (isUnbounded !== undefined) {
      ripple.unbounded = isUnbounded;
    }
    return ripple;
  }

  static createAdapter(instance) {
    const MATCHES = __WEBPACK_IMPORTED_MODULE_2__util__["b" /* getMatchesProperty */](HTMLElement.prototype);

    return {
      browserSupportsCssVars: () => __WEBPACK_IMPORTED_MODULE_2__util__["d" /* supportsCssVariables */](window),
      isUnbounded: () => instance.unbounded,
      isSurfaceActive: () => instance.root_[MATCHES](':active'),
      isSurfaceDisabled: () => instance.disabled,
      addClass: (className) => instance.root_.classList.add(className),
      removeClass: (className) => instance.root_.classList.remove(className),
      registerInteractionHandler: (evtType, handler) =>
          instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* applyPassive */]()),
      deregisterInteractionHandler: (evtType, handler) =>
          instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* applyPassive */]()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => instance.root_.style.setProperty(varName, value),
      computeBoundingRect: () => instance.root_.getBoundingClientRect(),
      getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset}),
    };
  }

  get unbounded() {
    return this.unbounded_;
  }

  set unbounded(unbounded) {
    const {UNBOUNDED} = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].cssClasses;
    this.unbounded_ = Boolean(unbounded);
    if (this.unbounded_) {
      this.root_.classList.add(UNBOUNDED);
    } else {
      this.root_.classList.remove(UNBOUNDED);
    }
  }

  activate() {
    this.foundation_.activate();
  }

  deactivate() {
    this.foundation_.deactivate();
  }

  layout() {
    this.foundation_.layout();
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */](MDCRipple.createAdapter(this));
  }

  initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCRipple;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(1);
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * @template F
 */
class MDCComponent {

  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  }

  /**
   * @param {!Element} root
   * @param {!F} foundation
   * @param {...?} args
   */
  constructor(root, foundation = undefined, ...args) {
    /** @protected {!Element} */
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @private {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize(/* ...args */) {
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
  }

  /**
   * @return {!F} foundation
   */
  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
      'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  }

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */
  emit(evtType, evtData, shouldBubble = false) {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble,
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCComponent;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCorrectEventName;
/* harmony export (immutable) */ __webpack_exports__["b"] = getCorrectPropertyName;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   noPrefix: string,
 *   webkitPrefix: string
 * }}
 */
let VendorPropertyMapType;

/** @const {Object<string, !VendorPropertyMapType>} */
const eventTypeMap = {
  'animationstart': {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart',
    styleProperty: 'animation',
  },
  'animationend': {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd',
    styleProperty: 'animation',
  },
  'animationiteration': {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration',
    styleProperty: 'animation',
  },
  'transitionend': {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd',
    styleProperty: 'transition',
  },
};

/** @const {Object<string, !VendorPropertyMapType>} */
const cssPropertyMap = {
  'animation': {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation',
  },
  'transform': {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform',
  },
  'transition': {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition',
  },
};

/**
 * @param {!Object} windowObj
 * @return {boolean}
 */
function hasProperShape(windowObj) {
  return (windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function');
}

/**
 * @param {string} eventType
 * @return {boolean}
 */
function eventFoundInMaps(eventType) {
  return (eventType in eventTypeMap || eventType in cssPropertyMap);
}

/**
 * @param {string} eventType
 * @param {!Object<string, !VendorPropertyMapType>} map
 * @param {!Element} el
 * @return {string}
 */
function getJavaScriptEventName(eventType, map, el) {
  return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
}

/**
 * Helper function to determine browser prefix for CSS3 animation events
 * and property names.
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  const map = /** @type {!Object<string, !VendorPropertyMapType>} */ (
    eventType in eventTypeMap ? eventTypeMap : cssPropertyMap
  );
  const el = windowObj['document']['createElement']('div');
  let eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.

const transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];
/* harmony export (immutable) */ __webpack_exports__["c"] = transformStyleProperties;


/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/**
 * @param {!Object} windowObj
 * @param {string} eventType
 * @return {string}
 */
function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["a"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["b"] = getMatchesProperty;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNormalizedEventCoords;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let supportsPassive_;

function supportsCssVariables(windowObj) {
  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  const weAreFeatureDetectingSafari10plus = (
    windowObj.CSS.supports('(--css-vars: yes)') &&
    windowObj.CSS.supports('color', '#00000000')
  );
  return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}

function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  const {x, y} = pageOffset;
  const documentX = x + clientRect.left;
  const documentY = y + clientRect.top;

  let normalizedX;
  let normalizedY;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return {x: normalizedX, y: normalizedY};
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = remapEvent;
/* harmony export (immutable) */ __webpack_exports__["b"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["f"] = supportsCssCustomProperties;
/* harmony export (immutable) */ __webpack_exports__["a"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["e"] = saveElementTabState;
/* harmony export (immutable) */ __webpack_exports__["d"] = restoreElementTabState;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const TAB_DATA = 'data-mdc-tabindex';
const TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

let storedTransformPropertyName_;
let supportsPassive_;

// Remap touch events to pointer events, if the browser doesn't support touch events.
function remapEvent(eventName, globalObj = window) {
  if (!('ontouchstart' in globalObj.document)) {
    switch (eventName) {
    case 'touchstart':
      return 'pointerdown';
    case 'touchmove':
      return 'pointermove';
    case 'touchend':
      return 'pointerup';
    default:
      return eventName;
    }
  }

  return eventName;
}

// Choose the correct transform property to use on the current browser.
function getTransformPropertyName(globalObj = window, forceRefresh = false) {
  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    const el = globalObj.document.createElement('div');
    const transformPropertyName = ('transform' in el.style ? 'transform' : '-webkit-transform');
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Determine whether the current browser supports CSS properties.
function supportsCssCustomProperties(globalObj = window) {
  if ('CSS' in globalObj) {
    return globalObj.CSS.supports('(--color: red)');
  }
  return false;
}

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}

// Save the tab state for an element.
function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

// Restore the tab state for an element, if it was saved.
function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simple__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__simple__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__simple__["b"]; });
/* unused harmony reexport util */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["b"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["a"] = bezierProgress;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @type {string|undefined} */
let storedTransformPropertyName_;

/**
 * Returns the name of the correct transform property to use on the current browser.
 * @param {!Window} globalObj
 * @param {boolean=} forceRefresh
 * @return {string}
 */
function getTransformPropertyName(globalObj, forceRefresh = false) {
  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    const el = globalObj.document.createElement('div');
    const transformPropertyName = ('transform' in el.style ? 'transform' : 'webkitTransform');
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

/**
 * Clamps a value between the minimum and the maximum, returning the clamped value.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}


/**
 * Returns the easing value to apply at time t, for a given cubic bezier curve.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Parameters are as follows:
 * - time: The current time in the animation, scaled between 0 and 1.
 * - x1: The x value of control point P1.
 * - y1: The y value of control point P1.
 * - x2: The x value of control point P2.
 * - y2: The y value of control point P2.
 * @param {number} time
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
function bezierProgress(time, x1, y1, x2, y2) {
  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
}

/**
 * Compute a single coordinate at a position point between 0 and 1.
 * c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} t
 * @param {number} c1
 * @param {number} c2
 * @return {number}
 */
function getBezierCoordinate_(t, c1, c2) {
  // Special case start and end.
  if (t === 0 || t === 1) {
    return t;
  }

  // Step one - from 4 points to 3
  let ic0 = t * c1;
  let ic1 = c1 + t * (c2 - c1);
  const ic2 = c2 + t * (1 - c2);

  // Step two - from 3 points to 2
  ic0 += t * (ic1 - ic0);
  ic1 += t * (ic2 - ic1);

  // Final step - last point
  return ic0 + t * (ic1 - ic0);
}

/**
 * Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} xVal
 * @param {number} x1
 * @param {number} x2
 * @return {number}
 */
function solvePositionFromXValue_(xVal, x1, x2) {
  const EPSILON = 1e-6;
  const MAX_ITERATIONS = 8;

  if (xVal <= 0) {
    return 0;
  } else if (xVal >= 1) {
    return 1;
  }

  // Initial estimate of t using linear interpolation.
  let t = xVal;

  // Try gradient descent to solve for t. If it works, it is very fast.
  let tMin = 0;
  let tMax = 1;
  let value = 0;
  for (let i = 0; i < MAX_ITERATIONS; i++) {
    value = getBezierCoordinate_(t, x1, x2);
    const derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
    if (Math.abs(value - xVal) < EPSILON) {
      return t;
    } else if (Math.abs(derivative) < EPSILON) {
      break;
    } else {
      if (value < xVal) {
        tMin = t;
      } else {
        tMax = t;
      }
      t -= (value - xVal) / derivative;
    }
  }

  // If the gradient descent got stuck in a local minimum, e.g. because
  // the derivative was close to 0, use a Dichotomy refinement instead.
  // We limit the number of interations to 8.
  for (let i = 0; Math.abs(value - xVal) > EPSILON && i < MAX_ITERATIONS; i++) {
    if (value < xVal) {
      tMin = t;
      t = (t + tMax) / 2;
    } else {
      tMax = t;
      t = (t + tMin) / 2;
    }
    value = getBezierCoordinate_(t, x1, x2);
  }
  return t;
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  INPUT_SELECTOR: '.mdc-textfield__input',
  LABEL_SELECTOR: '.mdc-textfield__label',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;


const cssClasses = {
  ROOT: 'mdc-textfield',
  UPGRADED: 'mdc-textfield--upgraded',
  DISABLED: 'mdc-textfield--disabled',
  FOCUSED: 'mdc-textfield--focused',
  INVALID: 'mdc-textfield--invalid',
  HELPTEXT_PERSISTENT: 'mdc-textfield-helptext--persistent',
  HELPTEXT_VALIDATION_MSG: 'mdc-textfield-helptext--validation-msg',
  LABEL_FLOAT_ABOVE: 'mdc-textfield__label--float-above',
  BOX: 'mdc-textfield--box',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  ACTIVE: 'mdc-slider--active',
  DISABLED: 'mdc-slider--disabled',
  DISCRETE: 'mdc-slider--discrete',
  FOCUS: 'mdc-slider--focus',
  IN_TRANSIT: 'mdc-slider--in-transit',
  OFF: 'mdc-slider--off',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  TRACK_SELECTOR: '.mdc-slider__track',
  THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
  ARIA_VALUEMIN: 'aria-valuemin',
  ARIA_VALUEMAX: 'aria-valuemax',
  ARIA_VALUENOW: 'aria-valuenow',
  ARIA_DISABLED: 'aria-disabled',
  STEP_DATA_ATTR: 'data-step',
  CHANGE_EVENT: 'MDCSlider:change',
  INPUT_EVENT: 'MDCSlider:input',
};
/* harmony export (immutable) */ __webpack_exports__["c"] = strings;


const numbers = {
  PAGE_FACTOR: 4,
};
/* harmony export (immutable) */ __webpack_exports__["b"] = numbers;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__foundation__["a"]; });
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









class MDCTab extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  static attachTo(root) {
    return new MDCTab(root);
  }

  get computedWidth() {
    return this.foundation_.getComputedWidth();
  }

  get computedLeft() {
    return this.foundation_.getComputedLeft();
  }

  get isActive() {
    return this.foundation_.isActive();
  }

  set isActive(isActive) {
    this.foundation_.setActive(isActive);
  }

  get preventDefaultOnClick() {
    return this.foundation_.preventsDefaultOnClick();
  }

  set preventDefaultOnClick(preventDefaultOnClick) {
    this.foundation_.setPreventDefaultOnClick(preventDefaultOnClick);
  }

  constructor(...args) {
    super(...args);

    this.ripple_ = __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].attachTo(this.root_);
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      getOffsetWidth: () => this.root_.offsetWidth,
      getOffsetLeft: () => this.root_.offsetLeft,
      notifySelected: () => this.emit(__WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.SELECTED_EVENT, {tab: this}, true),
    });
  }

  initialSyncWithDOM() {
    this.isActive = this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].ACTIVE);
  }

  measureSelf() {
    this.foundation_.measureSelf();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTab;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  ACTIVE: 'mdc-tab--active',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  SELECTED_EVENT: 'MDCTab:selected',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(68);
/* unused harmony reexport MDCTabBarFoundation */
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








class MDCTabBar extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  static attachTo(root) {
    return new MDCTabBar(root);
  }

  get tabs() {
    return this.tabs_;
  }

  get activeTab() {
    const activeIndex = this.foundation_.getActiveTabIndex();
    return this.tabs[activeIndex];
  }

  set activeTab(tab) {
    this.setActiveTab_(tab, false);
  }

  get activeTabIndex() {
    return this.foundation_.getActiveTabIndex();
  }

  set activeTabIndex(index) {
    this.setActiveTabIndex_(index, false);
  }

  initialize(tabFactory = (el) => new __WEBPACK_IMPORTED_MODULE_1__tab__["a" /* MDCTab */](el)) {
    this.indicator_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.INDICATOR_SELECTOR);
    this.tabs_ = this.gatherTabs_(tabFactory);
    this.tabSelectedHandler_ = ({detail}) => {
      const {tab} = detail;
      this.setActiveTab_(tab, true);
    };
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      bindOnMDCTabSelectedEvent: () => this.listen(
        __WEBPACK_IMPORTED_MODULE_1__tab__["b" /* MDCTabFoundation */].strings.SELECTED_EVENT, this.tabSelectedHandler_),
      unbindOnMDCTabSelectedEvent: () => this.unlisten(
        __WEBPACK_IMPORTED_MODULE_1__tab__["b" /* MDCTabFoundation */].strings.SELECTED_EVENT, this.tabSelectedHandler_),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getOffsetWidth: () => this.root_.offsetWidth,
      setStyleForIndicator: (propertyName, value) => this.indicator_.style.setProperty(propertyName, value),
      getOffsetWidthForIndicator: () => this.indicator_.offsetWidth,
      notifyChange: (evtData) => this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CHANGE_EVENT, evtData),
      getNumberOfTabs: () => this.tabs.length,
      isTabActiveAtIndex: (index) => this.tabs[index].isActive,
      setTabActiveAtIndex: (index, isActive) => {
        this.tabs[index].isActive = isActive;
      },
      isDefaultPreventedOnClickForTabAtIndex: (index) => this.tabs[index].preventDefaultOnClick,
      setPreventDefaultOnClickForTabAtIndex: (index, preventDefaultOnClick) => {
        this.tabs[index].preventDefaultOnClick = preventDefaultOnClick;
      },
      measureTabAtIndex: (index) => this.tabs[index].measureSelf(),
      getComputedWidthForTabAtIndex: (index) => this.tabs[index].computedWidth,
      getComputedLeftForTabAtIndex: (index) => this.tabs[index].computedLeft,
    });
  }

  gatherTabs_(tabFactory) {
    const tabElements = [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.TAB_SELECTOR));
    return tabElements.map((el) => tabFactory(el));
  }

  setActiveTabIndex_(activeTabIndex, notifyChange) {
    this.foundation_.switchToTabAtIndex(activeTabIndex, notifyChange);
  }

  layout() {
    this.foundation_.layout();
  }

  setActiveTab_(activeTab, notifyChange) {
    const indexOfTab = this.tabs.indexOf(activeTab);
    if (indexOfTab < 0) {
      throw new Error('Invalid tab component given as activeTab: Tab not found within this component\'s tab list');
    }
    this.setActiveTabIndex_(indexOfTab, notifyChange);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTabBar;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_material_components_web__ = __webpack_require__(16);


// let MDCIconToggle = require('material-components-web');

__WEBPACK_IMPORTED_MODULE_0_material_components_web__["MDCIconToggle"].attachTo(document.querySelector('.mdc-icon-toggle'));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_checkbox__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_form_field__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_grid_list__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_icon_toggle__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_radio__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ripple__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_dialog__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_drawer__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_textfield__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_snackbar__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_linear_progress__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_menu__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_select__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_slider__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_tabs__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_toolbar__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_auto_init__ = __webpack_require__(77);
/* unused harmony reexport base */
/* unused harmony reexport checkbox */
/* unused harmony reexport dialog */
/* unused harmony reexport drawer */
/* unused harmony reexport formField */
/* unused harmony reexport gridList */
/* unused harmony reexport iconToggle */
/* unused harmony reexport linearProgress */
/* unused harmony reexport radio */
/* unused harmony reexport ripple */
/* unused harmony reexport snackbar */
/* unused harmony reexport tabs */
/* unused harmony reexport textfield */
/* unused harmony reexport menu */
/* unused harmony reexport select */
/* unused harmony reexport slider */
/* unused harmony reexport toolbar */
/* unused harmony reexport autoInit */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




















// Register all components
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCCheckbox', __WEBPACK_IMPORTED_MODULE_1__material_checkbox__["a" /* MDCCheckbox */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCDialog', __WEBPACK_IMPORTED_MODULE_7__material_dialog__["a" /* MDCDialog */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCPersistentDrawer', __WEBPACK_IMPORTED_MODULE_8__material_drawer__["a" /* MDCPersistentDrawer */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCTemporaryDrawer', __WEBPACK_IMPORTED_MODULE_8__material_drawer__["b" /* MDCTemporaryDrawer */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCRipple', __WEBPACK_IMPORTED_MODULE_6__material_ripple__["a" /* MDCRipple */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCGridList', __WEBPACK_IMPORTED_MODULE_3__material_grid_list__["a" /* MDCGridList */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCIconToggle', __WEBPACK_IMPORTED_MODULE_4__material_icon_toggle__["a" /* MDCIconToggle */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCLinearProgress', __WEBPACK_IMPORTED_MODULE_11__material_linear_progress__["a" /* MDCLinearProgress */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCRadio', __WEBPACK_IMPORTED_MODULE_5__material_radio__["a" /* MDCRadio */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCSnackbar', __WEBPACK_IMPORTED_MODULE_10__material_snackbar__["a" /* MDCSnackbar */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCTab', __WEBPACK_IMPORTED_MODULE_15__material_tabs__["a" /* MDCTab */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCTabBar', __WEBPACK_IMPORTED_MODULE_15__material_tabs__["b" /* MDCTabBar */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCTextfield', __WEBPACK_IMPORTED_MODULE_9__material_textfield__["a" /* MDCTextfield */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCSimpleMenu', __WEBPACK_IMPORTED_MODULE_12__material_menu__["a" /* MDCSimpleMenu */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCSelect', __WEBPACK_IMPORTED_MODULE_13__material_select__["a" /* MDCSelect */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCSlider', __WEBPACK_IMPORTED_MODULE_14__material_slider__["a" /* MDCSlider */]);
__WEBPACK_IMPORTED_MODULE_17__material_auto_init__["a" /* default */].register('MDCToolbar', __WEBPACK_IMPORTED_MODULE_16__material_toolbar__["a" /* MDCToolbar */]);

// Export all components.



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_animation__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(20);
/* unused harmony reexport MDCCheckboxFoundation */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










class MDCCheckbox extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCCheckbox(root);
  }

  get nativeCb_() {
    const {NATIVE_CONTROL_SELECTOR} = __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings;
    return this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
  }

  constructor(...args) {
    super(...args);
    this.ripple_ = this.initRipple_();
  }

  initRipple_() {
    const MATCHES = __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__["b" /* getMatchesProperty */](HTMLElement.prototype);
    const adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].createAdapter(this), {
      isUnbounded: () => true,
      isSurfaceActive: () => this.nativeCb_[MATCHES](':active'),
      registerInteractionHandler: (type, handler) => this.nativeCb_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeCb_.removeEventListener(type, handler),
      computeBoundingRect: () => {
        const {left, top} = this.root_.getBoundingClientRect();
        const DIM = 40;
        return {
          top,
          left,
          right: left + DIM,
          bottom: top + DIM,
          width: DIM,
          height: DIM,
        };
      },
    });
    const foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](this.root_, foundation);
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      registerAnimationEndHandler:
        (handler) => this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_3__material_animation__["a" /* getCorrectEventName */](window, 'animationend'), handler),
      deregisterAnimationEndHandler:
        (handler) => this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_3__material_animation__["a" /* getCorrectEventName */](window, 'animationend'), handler),
      registerChangeHandler: (handler) => this.nativeCb_.addEventListener('change', handler),
      deregisterChangeHandler: (handler) => this.nativeCb_.removeEventListener('change', handler),
      getNativeControl: () => this.nativeCb_,
      forceLayout: () => this.root_.offsetWidth,
      isAttachedToDOM: () => Boolean(this.root_.parentNode),
    });
  }

  get ripple() {
    return this.ripple_;
  }

  get checked() {
    return this.foundation_.isChecked();
  }

  set checked(checked) {
    this.foundation_.setChecked(checked);
  }

  get indeterminate() {
    return this.foundation_.isIndeterminate();
  }

  set indeterminate(indeterminate) {
    this.foundation_.setIndeterminate(indeterminate);
  }

  get disabled() {
    return this.foundation_.isDisabled();
  }

  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  get value() {
    return this.foundation_.getValue();
  }

  set value(value) {
    this.foundation_.setValue(value);
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCCheckbox;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(6);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






const DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus',
};

class MDCRippleFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */];
  }

  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */];
  }

  static get defaultAdapter() {
    return {
      browserSupportsCssVars: () => /* boolean - cached */ {},
      isUnbounded: () => /* boolean */ {},
      isSurfaceActive: () => /* boolean */ {},
      isSurfaceDisabled: () => /* boolean */ {},
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      updateCssVariable: (/* varName: string, value: string */) => {},
      computeBoundingRect: () => /* ClientRect */ {},
      getWindowPageOffset: () => /* {x: number, y: number} */ {},
    };
  }

  // We compute this property so that we are not querying information about the client
  // until the point in time where the foundation requests it. This prevents scenarios where
  // client-side feature-detection may happen too early, such as when components are rendered on the server
  // and then initialized at mount time on the client.
  get isSupported_() {
    return this.adapter_.browserSupportsCssVars();
  }

  constructor(adapter) {
    super(Object.assign(MDCRippleFoundation.defaultAdapter, adapter));

    this.layoutFrame_ = 0;
    this.frame_ = {width: 0, height: 0};
    this.activationState_ = this.defaultActivationState_();
    this.xfDuration_ = 0;
    this.initialSize_ = 0;
    this.maxRadius_ = 0;
    this.listenerInfos_ = [
      {activate: 'touchstart', deactivate: 'touchend'},
      {activate: 'pointerdown', deactivate: 'pointerup'},
      {activate: 'mousedown', deactivate: 'mouseup'},
      {activate: 'keydown', deactivate: 'keyup'},
      {focus: 'focus', blur: 'blur'},
    ];
    this.listeners_ = {
      activate: (e) => this.activate_(e),
      deactivate: (e) => this.deactivate_(e),
      focus: () => requestAnimationFrame(
        () => this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
      ),
      blur: () => requestAnimationFrame(
        () => this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
      ),
    };
    this.resizeHandler_ = () => this.layout();
    this.unboundedCoords_ = {
      left: 0,
      top: 0,
    };
    this.fgScale_ = 0;
    this.activationTimer_ = 0;
    this.fgDeactivationRemovalTimer_ = 0;
    this.activationAnimationHasEnded_ = false;
    this.activationTimerCallback_ = () => {
      this.activationAnimationHasEnded_ = true;
      this.runDeactivationUXLogicIfReady_();
    };
  }

  defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationStartTime: 0,
      activationEvent: null,
      isProgrammatic: false,
    };
  }

  init() {
    if (!this.isSupported_) {
      return;
    }
    this.addEventListeners_();

    const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.addClass(ROOT);
      if (this.adapter_.isUnbounded()) {
        this.adapter_.addClass(UNBOUNDED);
      }
      this.layoutInternal_();
    });
  }

  addEventListeners_() {
    this.listenerInfos_.forEach((info) => {
      Object.keys(info).forEach((k) => {
        this.adapter_.registerInteractionHandler(info[k], this.listeners_[k]);
      });
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  }

  activate_(e) {
    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    const {activationState_: activationState} = this;
    if (activationState.isActivated) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : (
      e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown'
    );
    activationState.activationStartTime = Date.now();

    requestAnimationFrame(() => {
      // This needs to be wrapped in an rAF call b/c web browsers
      // report active states inconsistently when they're called within
      // event handling code:
      // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
      // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
      activationState.wasElementMadeActive = (e && e.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      } else {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  activate() {
    this.activate_(null);
  }

  animateActivation_() {
    const {VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END} = MDCRippleFoundation.strings;
    const {
      BG_ACTIVE_FILL,
      FG_DEACTIVATION,
      FG_ACTIVATION,
    } = MDCRippleFoundation.cssClasses;
    const {DEACTIVATION_TIMEOUT_MS} = MDCRippleFoundation.numbers;

    let translateStart = '';
    let translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      const {startPoint, endPoint} = this.getFgTranslationCoordinates_();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    // Force layout in order to re-trigger the animation.
    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(BG_ACTIVE_FILL);
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(() => this.activationTimerCallback_(), DEACTIVATION_TIMEOUT_MS);
  }

  getFgTranslationCoordinates_() {
    const {activationState_: activationState} = this;
    const {activationEvent, wasActivatedByPointer} = activationState;

    let startPoint;
    if (wasActivatedByPointer) {
      startPoint = __WEBPACK_IMPORTED_MODULE_2__util__["c" /* getNormalizedEventCoords */](
        activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()
      );
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2,
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - (this.initialSize_ / 2),
      y: startPoint.y - (this.initialSize_ / 2),
    };

    const endPoint = {
      x: (this.frame_.width / 2) - (this.initialSize_ / 2),
      y: (this.frame_.height / 2) - (this.initialSize_ / 2),
    };

    return {startPoint, endPoint};
  }

  runDeactivationUXLogicIfReady_() {
    const {FG_DEACTIVATION} = MDCRippleFoundation.cssClasses;
    const {hasDeactivationUXRun, isActivated} = this.activationState_;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(() => {
        this.adapter_.removeClass(FG_DEACTIVATION);
      }, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
    }
  }

  rmBoundedActivationClasses_() {
    const {BG_ACTIVE_FILL, FG_ACTIVATION} = MDCRippleFoundation.cssClasses;
    this.adapter_.removeClass(BG_ACTIVE_FILL);
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  }

  deactivate_(e) {
    const {activationState_: activationState} = this;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }
    // Programmatic deactivation.
    if (activationState.isProgrammatic) {
      const evtObject = null;
      requestAnimationFrame(() => this.animateDeactivation_(evtObject, Object.assign({}, activationState)));
      this.activationState_ = this.defaultActivationState_();
      return;
    }

    const actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
    const expectedActivationType = activationState.activationEvent.type;
    // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
    // Essentially, what we need to do here is decouple the deactivation UX from the actual
    // deactivation state itself. This way, touch/pointer events in sequence do not trample one
    // another.
    const needsDeactivationUX = actualActivationType === expectedActivationType;
    let needsActualDeactivation = needsDeactivationUX;
    if (activationState.wasActivatedByPointer) {
      needsActualDeactivation = e.type === 'mouseup';
    }

    const state = Object.assign({}, activationState);
    requestAnimationFrame(() => {
      if (needsDeactivationUX) {
        this.activationState_.hasDeactivationUXRun = true;
        this.animateDeactivation_(e, state);
      }

      if (needsActualDeactivation) {
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  deactivate() {
    this.deactivate_(null);
  }

  animateDeactivation_(e, {wasActivatedByPointer, wasElementMadeActive}) {
    const {BG_FOCUSED} = MDCRippleFoundation.cssClasses;
    if (wasActivatedByPointer || wasElementMadeActive) {
      // Remove class left over by element being focused
      this.adapter_.removeClass(BG_FOCUSED);
      this.runDeactivationUXLogicIfReady_();
    }
  }

  destroy() {
    if (!this.isSupported_) {
      return;
    }
    this.removeEventListeners_();

    const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.removeClass(ROOT);
      this.adapter_.removeClass(UNBOUNDED);
      this.removeCssVars_();
    });
  }

  removeEventListeners_() {
    this.listenerInfos_.forEach((info) => {
      Object.keys(info).forEach((k) => {
        this.adapter_.deregisterInteractionHandler(info[k], this.listeners_[k]);
      });
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  removeCssVars_() {
    const {strings} = MDCRippleFoundation;
    Object.keys(strings).forEach((k) => {
      if (k.indexOf('VAR_') === 0) {
        this.adapter_.updateCssVariable(strings[k], null);
      }
    });
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();

    const maxDim = Math.max(this.frame_.height, this.frame_.width);
    const surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

    // 60% of the largest dimension of the surface
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

    // Diameter of the surface + 10px
    this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;
    this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
    this.updateLayoutCssVars_();
  }

  updateLayoutCssVars_() {
    const {
      VAR_SURFACE_WIDTH, VAR_SURFACE_HEIGHT, VAR_FG_SIZE,
      VAR_LEFT, VAR_TOP, VAR_FG_SCALE,
    } = MDCRippleFoundation.strings;

    this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, `${this.frame_.width}px`);
    this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, `${this.frame_.height}px`);
    this.adapter_.updateCssVariable(VAR_FG_SIZE, `${this.initialSize_}px`);
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
        top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
      };

      this.adapter_.updateCssVariable(VAR_LEFT, `${this.unboundedCoords_.left}px`);
      this.adapter_.updateCssVariable(VAR_TOP, `${this.unboundedCoords_.top}px`);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCRippleFoundation;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  VAR_SURFACE_WIDTH: '--mdc-ripple-surface-width',
  VAR_SURFACE_HEIGHT: '--mdc-ripple-surface-height',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
};
/* harmony export (immutable) */ __webpack_exports__["c"] = strings;


const numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 300,
  FG_DEACTIVATION_MS: 83,
};
/* harmony export (immutable) */ __webpack_exports__["b"] = numbers;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(21);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




const CB_PROTO_PROPS = ['checked', 'indeterminate'];

class MDCCheckboxFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */];
  }

  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerAnimationEndHandler: (/* handler: EventListener */) => {},
      deregisterAnimationEndHandler: (/* handler: EventListener */) => {},
      registerChangeHandler: (/* handler: EventListener */) => {},
      deregisterChangeHandler: (/* handler: EventListener */) => {},
      getNativeControl: () => /* HTMLInputElement */ {},
      forceLayout: () => {},
      isAttachedToDOM: () => /* boolean */ {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCCheckboxFoundation.defaultAdapter, adapter));

    this.currentCheckState_ = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].TRANSITION_STATE_INIT;
    this.currentAnimationClass_ = '';
    this.animEndLatchTimer_ = 0;
    this.animEndHandler_ = () => {
      clearTimeout(this.animEndLatchTimer_);
      this.animEndLatchTimer_ = setTimeout(() => {
        this.adapter_.removeClass(this.currentAnimationClass_);
        this.adapter_.deregisterAnimationEndHandler(this.animEndHandler_);
      }, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */].ANIM_END_LATCH_MS);
    };
    this.changeHandler_ = () => this.transitionCheckState_();
  }

  init() {
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].UPGRADED);
    this.adapter_.registerChangeHandler(this.changeHandler_);
    this.installPropertyChangeHooks_();
  }

  destroy() {
    this.adapter_.deregisterChangeHandler(this.changeHandler_);
    this.uninstallPropertyChangeHooks_();
  }

  isChecked() {
    return this.getNativeControl_().checked;
  }

  setChecked(checked) {
    this.getNativeControl_().checked = checked;
  }

  isIndeterminate() {
    return this.getNativeControl_().indeterminate;
  }

  setIndeterminate(indeterminate) {
    this.getNativeControl_().indeterminate = indeterminate;
  }

  isDisabled() {
    return this.getNativeControl_().disabled;
  }

  setDisabled(disabled) {
    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].DISABLED);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].DISABLED);
    }
  }

  getValue() {
    return this.getNativeControl_().value;
  }

  setValue(value) {
    this.getNativeControl_().value = value;
  }

  installPropertyChangeHooks_() {
    const nativeCb = this.getNativeControl_();
    const cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach((controlState) => {
      const desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
      // We have to check for this descriptor, since some browsers (Safari) don't support its return.
      // See: https://bugs.webkit.org/show_bug.cgi?id=49739
      if (validDescriptor(desc)) {
        Object.defineProperty(nativeCb, controlState, {
          get: desc.get,
          set: (state) => {
            desc.set.call(nativeCb, state);
            this.transitionCheckState_();
          },
          configurable: desc.configurable,
          enumerable: desc.enumerable,
        });
      }
    });
  }

  uninstallPropertyChangeHooks_() {
    const nativeCb = this.getNativeControl_();
    const cbProto = Object.getPrototypeOf(nativeCb);

    CB_PROTO_PROPS.forEach((controlState) => {
      const desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
      if (validDescriptor(desc)) {
        Object.defineProperty(nativeCb, controlState, desc);
      }
    });
  }

  transitionCheckState_() {
    const nativeCb = this.adapter_.getNativeControl();
    if (!nativeCb) {
      return;
    }
    const oldState = this.currentCheckState_;
    const newState = this.determineCheckState_(nativeCb);
    if (oldState === newState) {
      return;
    }

    // Check to ensure that there isn't a previously existing animation class, in case for example
    // the user interacted with the checkbox before the animation was finished.
    if (this.currentAnimationClass_.length > 0) {
      clearTimeout(this.animEndLatchTimer_);
      this.adapter_.forceLayout();
      this.adapter_.removeClass(this.currentAnimationClass_);
    }

    this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
    this.currentCheckState_ = newState;

    // Check for parentNode so that animations are only run when the element is attached
    // to the DOM.
    if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
      this.adapter_.addClass(this.currentAnimationClass_);
      this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
    }
  }

  determineCheckState_(nativeCb) {
    const {
      TRANSITION_STATE_INDETERMINATE,
      TRANSITION_STATE_CHECKED,
      TRANSITION_STATE_UNCHECKED,
    } = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */];

    if (nativeCb.indeterminate) {
      return TRANSITION_STATE_INDETERMINATE;
    }
    return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  }

  getTransitionAnimationClass_(oldState, newState) {
    const {
      TRANSITION_STATE_INIT,
      TRANSITION_STATE_CHECKED,
      TRANSITION_STATE_UNCHECKED,
    } = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */];

    const {
      ANIM_UNCHECKED_CHECKED,
      ANIM_UNCHECKED_INDETERMINATE,
      ANIM_CHECKED_UNCHECKED,
      ANIM_CHECKED_INDETERMINATE,
      ANIM_INDETERMINATE_CHECKED,
      ANIM_INDETERMINATE_UNCHECKED,
    } = MDCCheckboxFoundation.cssClasses;

    switch (oldState) {
    case TRANSITION_STATE_INIT:
      if (newState === TRANSITION_STATE_UNCHECKED) {
        return '';
      }
        // fallthrough
    case TRANSITION_STATE_UNCHECKED:
      return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
    case TRANSITION_STATE_CHECKED:
      return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
      // TRANSITION_STATE_INDETERMINATE
    default:
      return newState === TRANSITION_STATE_CHECKED ?
          ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  }

  getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      indeterminate: false,
      disabled: false,
      value: null,
    };
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCCheckboxFoundation;


function validDescriptor(inputPropDesc) {
  return inputPropDesc && typeof inputPropDesc.set === 'function';
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const ROOT = 'mdc-checkbox';

const cssClasses = {
  ROOT: 'mdc-checkbox',
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  DISABLED: 'mdc-checkbox--disabled',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  NATIVE_CONTROL_SELECTOR: `.${ROOT}__native-control`,
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
};
/* harmony export (immutable) */ __webpack_exports__["c"] = strings;


const numbers = {
  ANIM_END_LATCH_MS: 100,
};
/* harmony export (immutable) */ __webpack_exports__["b"] = numbers;



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(23);
/* unused harmony reexport MDCFormFieldFoundation */
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






class MDCFormField extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCFormField(root);
  }

  set input(input) {
    this.input_ = input;
  }

  get input() {
    return this.input_;
  }

  get label_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.LABEL_SELECTOR);
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      registerInteractionHandler: (type, handler) => this.label_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.label_.removeEventListener(type, handler),
      activateInputRipple: () => {
        if (this.input_ && this.input_.ripple) {
          this.input_.ripple.activate();
        }
      },
      deactivateInputRipple: () => {
        if (this.input_ && this.input_.ripple) {
          this.input_.ripple.deactivate();
        }
      },
    });
  }
}
/* unused harmony export MDCFormField */



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(24);
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCFormFieldFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      activateInputRipple: () => {},
      deactivateInputRipple: () => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCFormFieldFoundation.defaultAdapter, adapter));
    this.clickHandler_ = (evt) => this.handleClick_(evt);
  }

  init() {
    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
  }

  handleClick_() {
    this.adapter_.activateInputRipple();
    requestAnimationFrame(() => this.adapter_.deactivateInputRipple());
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCFormFieldFoundation;



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  ROOT: 'mdc-form-field',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  LABEL_SELECTOR: '.mdc-form-field > label',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(26);
/* unused harmony reexport MDCGridListFoundation */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







class MDCGridList extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCGridList(root);
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      getOffsetWidth: () => this.root_.offsetWidth,
      getNumberOfTiles: () => {
        return this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TILE_SELECTOR).length;
      },
      getOffsetWidthForTileAtIndex: (index) => {
        return this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TILE_SELECTOR)[index].offsetWidth;
      },
      setStyleForTilesElement: (property, value) => {
        this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TILES_SELECTOR).style[property] = value;
      },
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCGridList;



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(27);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCGridListFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* strings */];
  }

  static get defaultAdapter() {
    return {
      getOffsetWidth: () => /* number */ 0,
      getNumberOfTiles: () => /* number */ 0,
      getOffsetWidthForTileAtIndex: (/* index: number */) => /* number */ 0,
      setStyleForTilesElement: (/* property: string, value: string */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
    };
  }
  constructor(adapter) {
    super(Object.assign(MDCGridListFoundation.defaultAdapter, adapter));
    this.resizeHandler_ = () => this.alignCenter();
    this.resizeFrame_ = 0;
  }
  init() {
    this.alignCenter();
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  }
  destroy() {
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }
  alignCenter() {
    if (this.resizeFrame_ !== 0) {
      cancelAnimationFrame(this.resizeFrame_);
    }
    this.resizeFrame_ = requestAnimationFrame(() => {
      this.alignCenter_();
      this.resizeFrame_ = 0;
    });
  }
  alignCenter_() {
    if (this.adapter_.getNumberOfTiles() == 0) {
      return;
    }
    const gridWidth = this.adapter_.getOffsetWidth();
    const itemWidth = this.adapter_.getOffsetWidthForTileAtIndex(0);
    const tilesWidth = itemWidth * Math.floor(gridWidth / itemWidth);
    this.adapter_.setStyleForTilesElement('width', `${tilesWidth}px`);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCGridListFoundation;



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const strings = {
  TILES_SELECTOR: '.mdc-grid-list__tiles',
  TILE_SELECTOR: '.mdc-grid-tile',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = strings;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(29);
/* unused harmony reexport MDCIconToggleFoundation */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








class MDCIconToggle extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCIconToggle(root);
  }

  constructor(...args) {
    super(...args);
    this.ripple_ = this.initRipple_();
  }

  get iconEl_() {
    const {iconInnerSelector: sel} = this.root_.dataset;
    return sel ? this.root_.querySelector(sel) : this.root_;
  }

  initRipple_() {
    const adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].createAdapter(this), {
      isUnbounded: () => true,
      isSurfaceActive: () => this.foundation_.isKeyboardActivated(),
      computeBoundingRect: () => {
        const dim = 48;
        const {left, top} = this.root_.getBoundingClientRect();
        return {
          left,
          top,
          width: dim,
          height: dim,
          right: left + dim,
          bottom: left + dim,
        };
      },
    });
    const foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](this.root_, foundation);
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: (className) => this.iconEl_.classList.add(className),
      removeClass: (className) => this.iconEl_.classList.remove(className),
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      setText: (text) => {
        this.iconEl_.textContent = text;
      },
      getTabIndex: () => /* number */ this.root_.tabIndex,
      setTabIndex: (tabIndex) => {
        this.root_.tabIndex = tabIndex;
      },
      getAttr: (name, value) => this.root_.getAttribute(name, value),
      setAttr: (name, value) => this.root_.setAttribute(name, value),
      rmAttr: (name) => this.root_.removeAttribute(name),
      notifyChange: (evtData) => this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CHANGE_EVENT, evtData),
    });
  }

  initialSyncWithDOM() {
    this.on = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ARIA_PRESSED) === 'true';
    this.disabled = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ARIA_DISABLED) === 'true';
  }

  get on() {
    return this.foundation_.isOn();
  }

  set on(isOn) {
    this.foundation_.toggle(isOn);
  }

  get disabled() {
    return this.foundation_.isDisabled();
  }

  set disabled(isDisabled) {
    this.foundation_.setDisabled(isDisabled);
  }

  refreshToggleData() {
    this.foundation_.refreshToggleData();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCIconToggle;



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(30);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCIconToggleFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      setText: (/* text: string */) => {},
      getTabIndex: () => /* number */ 0,
      setTabIndex: (/* tabIndex: number */) => {},
      getAttr: (/* name: string */) => /* string */ '',
      setAttr: (/* name: string, value: string */) => {},
      rmAttr: (/* name: string */) => {},
      notifyChange: (/* evtData: {isOn: boolean} */) => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCIconToggleFoundation.defaultAdapter, adapter));
    this.on_ = false;
    this.disabled_ = false;
    this.savedTabIndex_ = -1;
    this.toggleOnData_ = null;
    this.toggleOffData_ = null;
    this.clickHandler_ = () => this.toggleFromEvt_();
    this.isHandlingKeydown_ = false;
    this.keydownHandler_ = (evt) => {
      if (isSpace(evt)) {
        this.isHandlingKeydown_ = true;
        return evt.preventDefault();
      }
    };
    this.keyupHandler_ = (evt) => {
      if (isSpace(evt)) {
        this.isHandlingKeydown_ = false;
        this.toggleFromEvt_();
      }
    };
  }

  init() {
    this.refreshToggleData();
    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
  }

  refreshToggleData() {
    const {DATA_TOGGLE_ON, DATA_TOGGLE_OFF} = MDCIconToggleFoundation.strings;
    this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
    this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
  }

  toggleFromEvt_() {
    this.toggle();
    const {on_: isOn} = this;
    this.adapter_.notifyChange({isOn});
  }

  isOn() {
    return this.on_;
  }

  toggle(isOn = !this.on_) {
    this.on_ = isOn;

    const {ARIA_LABEL, ARIA_PRESSED} = MDCIconToggleFoundation.strings;
    const {content, label, cssClass} = this.on_ ? this.toggleOnData_ : this.toggleOffData_;
    const {cssClass: classToRemove} = this.on_ ? this.toggleOffData_ : this.toggleOnData_;

    if (this.on_) {
      this.adapter_.setAttr(ARIA_PRESSED, 'true');
    } else {
      this.adapter_.setAttr(ARIA_PRESSED, 'false');
    }

    if (classToRemove) {
      this.adapter_.removeClass(classToRemove);
    }
    if (cssClass) {
      this.adapter_.addClass(cssClass);
    }
    if (content) {
      this.adapter_.setText(content);
    }
    if (label) {
      this.adapter_.setAttr(ARIA_LABEL, label);
    }
  }

  parseJsonDataAttr_(dataAttr) {
    const val = this.adapter_.getAttr(dataAttr);
    if (!val) {
      return {};
    }
    return JSON.parse(val);
  }

  isDisabled() {
    return this.disabled_;
  }

  setDisabled(isDisabled) {
    this.disabled_ = isDisabled;

    const {DISABLED} = MDCIconToggleFoundation.cssClasses;
    const {ARIA_DISABLED} = MDCIconToggleFoundation.strings;

    if (this.disabled_) {
      this.savedTabIndex = this.adapter_.getTabIndex();
      this.adapter_.setTabIndex(-1);
      this.adapter_.setAttr(ARIA_DISABLED, 'true');
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.setTabIndex(this.savedTabIndex);
      this.adapter_.rmAttr(ARIA_DISABLED);
      this.adapter_.removeClass(DISABLED);
    }
  }

  isKeyboardActivated() {
    return this.isHandlingKeydown_;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCIconToggleFoundation;


function isSpace({key, keyCode}) {
  return key && key === 'Space' || keyCode === 32;
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cssClasses = {
  ROOT: 'mdc-icon-toggle',
  DISABLED: 'mdc-icon-toggle--disabled',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  DATA_TOGGLE_ON: 'data-toggle-on',
  DATA_TOGGLE_OFF: 'data-toggle-off',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_LABEL: 'aria-label',
  CHANGE_EVENT: 'MDCIconToggle:change',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(32);
/* unused harmony reexport MDCRadioFoundation */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








class MDCRadio extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCRadio(root);
  }

  get checked() {
    return this.foundation_.isChecked();
  }

  set checked(checked) {
    this.foundation_.setChecked(checked);
  }

  get disabled() {
    return this.foundation_.isDisabled();
  }

  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  get value() {
    return this.foundation_.getValue();
  }

  set value(value) {
    this.foundation_.setValue(value);
  }

  get ripple() {
    return this.ripple_;
  }

  constructor(...args) {
    super(...args);
    this.ripple_ = this.initRipple_();
  }

  initRipple_() {
    const adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].createAdapter(this), {
      isUnbounded: () => true,
      // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
      // UI we desire.
      isSurfaceActive: () => false,
      registerInteractionHandler: (type, handler) => this.nativeControl_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.nativeControl_.removeEventListener(type, handler),
      computeBoundingRect: () => {
        const {left, top} = this.root_.getBoundingClientRect();
        const DIM = 40;
        return {
          top,
          left,
          right: left + DIM,
          bottom: top + DIM,
          width: DIM,
          height: DIM,
        };
      },
    });
    const foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["b" /* MDCRippleFoundation */](adapter);
    return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](this.root_, foundation);
  }

  get nativeControl_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR);
  }

  destroy() {
    this.ripple_.destroy();
    super.destroy();
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      getNativeControl: () => this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR),
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCRadio;



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(33);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCRadioFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      getNativeControl: () => /* HTMLInputElement */ {},
    };
  }

  isChecked() {
    return this.getNativeControl_().checked;
  }

  setChecked(checked) {
    this.getNativeControl_().checked = checked;
  }

  isDisabled() {
    return this.getNativeControl_().disabled;
  }

  setDisabled(disabled) {
    const {DISABLED} = MDCRadioFoundation.cssClasses;
    this.getNativeControl_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  }

  getValue() {
    return this.getNativeControl_().value;
  }

  setValue(value) {
    this.getNativeControl_().value = value;
  }

  getNativeControl_() {
    return this.adapter_.getNativeControl() || {
      checked: false,
      disabled: false,
      value: null,
    };
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCRadioFoundation;



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;


const cssClasses = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(37);
/* unused harmony reexport MDCDialogFoundation */
/* unused harmony reexport util */
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










class MDCDialog extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCDialog(root);
  }

  get open() {
    return this.foundation_.isOpen();
  }

  get acceptButton_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ACCEPT_SELECTOR);
  }

  get dialogSurface_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.DIALOG_SURFACE_SELECTOR);
  }

  initialize() {
    this.focusTrap_ = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* createFocusTrapInstance */](this.dialogSurface_, this.acceptButton_);
    this.footerBtnRipples_ = [];

    const footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
    for (let i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
      this.footerBtnRipples_.push(new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](footerBtn));
    }
  }

  destroy() {
    this.footerBtnRipples_.forEach((ripple) => ripple.destroy());
    super.destroy();
  }

  show() {
    this.foundation_.open();
  }

  close() {
    this.foundation_.close();
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      addBodyClass: (className) => document.body.classList.add(className),
      removeBodyClass: (className) => document.body.classList.remove(className),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      registerInteractionHandler: (evt, handler) => this.root_.addEventListener(evt, handler),
      deregisterInteractionHandler: (evt, handler) => this.root_.removeEventListener(evt, handler),
      registerSurfaceInteractionHandler: (evt, handler) => this.dialogSurface_.addEventListener(evt, handler),
      deregisterSurfaceInteractionHandler: (evt, handler) => this.dialogSurface_.removeEventListener(evt, handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      registerTransitionEndHandler: (handler) => this.dialogSurface_.addEventListener('transitionend', handler),
      deregisterTransitionEndHandler: (handler) => this.dialogSurface_.removeEventListener('transitionend', handler),
      notifyAccept: () => this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ACCEPT_EVENT),
      notifyCancel: () => this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CANCEL_EVENT),
      trapFocusOnSurface: () => this.focusTrap_.activate(),
      untrapFocusOnSurface: () => this.focusTrap_.deactivate(),
      isDialog: (el) => el === this.dialogSurface_,
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCDialog;



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(36);
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCDialogFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      addBodyClass: (/* className: string */) => {},
      removeBodyClass: (/* className: string */) => {},
      eventTargetHasClass: (/* target: EventTarget, className: string */) => /* boolean */ false,
      registerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerSurfaceInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterSurfaceInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerDocumentKeydownHandler: (/* handler: EventListener */) => {},
      deregisterDocumentKeydownHandler: (/* handler: EventListener */) => {},
      registerTransitionEndHandler: (/* handler: EventListener */) => {},
      deregisterTransitionEndHandler: (/* handler: EventListener */) => {},
      notifyAccept: () => {},
      notifyCancel: () => {},
      trapFocusOnSurface: () => {},
      untrapFocusOnSurface: () => {},
      isDialog: (/* el: Element */) => /* boolean */ false,
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCDialogFoundation.defaultAdapter, adapter));
    this.isOpen_ = false;
    this.componentClickHandler_ = () => this.cancel(true);
    this.dialogClickHandler_ = (evt) => this.handleDialogClick_(evt);
    this.documentKeydownHandler_ = (evt) => {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        this.cancel(true);
      }
    };
    this.transitionEndHandler_ = (evt) => this.handleTransitionEnd_(evt);
  };

  destroy() {
    // Ensure that dialog is cleaned up when destroyed
    if (this.isOpen_) {
      this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.untrapFocusOnSurface();
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
      this.enableScroll_();
    }
  }

  open() {
    this.isOpen_ = true;
    this.disableScroll_();
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
  }

  close() {
    this.isOpen_ = false;
    this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.adapter_.untrapFocusOnSurface();
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
    this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
  }

  isOpen() {
    return this.isOpen_;
  }

  accept(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyAccept();
    }

    this.close();
  }

  cancel(shouldNotify) {
    if (shouldNotify) {
      this.adapter_.notifyCancel();
    }

    this.close();
  }

  handleDialogClick_(evt) {
    evt.stopPropagation();
    const {target} = evt;
    if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACCEPT_BTN)) {
      this.accept(true);
    } else if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].CANCEL_BTN)) {
      this.cancel(true);
    }
  }

  handleTransitionEnd_(evt) {
    if (this.adapter_.isDialog(evt.target)) {
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
      if (this.isOpen_) {
        this.adapter_.trapFocusOnSurface();
      } else {
        this.enableScroll_();
      };
    };
  };

  disableScroll_() {
    this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  }

  enableScroll_() {
    this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCDialogFoundation;



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  ANIMATING: 'mdc-dialog--animating',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept',
  ACCEPT_EVENT: 'MDCDialog:accept',
  CANCEL_EVENT: 'MDCDialog:cancel',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createFocusTrapInstance;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_focus_trap__);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



function createFocusTrapInstance(surfaceEl, acceptButtonEl, focusTrapFactory = __WEBPACK_IMPORTED_MODULE_0_focus_trap___default.a) {
  return focusTrapFactory(surfaceEl, {
    initialFocus: acceptButtonEl,
    clickOutsideDeactivates: true,
  });
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var tabbable = __webpack_require__(39);

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;

  var container = (typeof element === 'string')
    ? document.querySelector(element)
    : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate !== undefined)
    ? userOptions.returnFocusOnDeactivate
    : true;
  config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates !== undefined)
    ? userOptions.escapeDeactivates
    : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause,
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: (activateOptions && activateOptions.onActivate !== undefined)
        ? activateOptions.onActivate
        : config.onActivate,
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: (deactivateOptions && deactivateOptions.returnFocus !== undefined)
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate,
      onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined)
        ? deactivateOptions.onDeactivate
        : config.onDeactivate,
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    tryFocus(firstFocusNode());
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    e.preventDefault();
    updateTabbableNodes();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);
    var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
    var firstTabbableNode = tabbableNodes[0];

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

module.exports = focusTrap;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function(el) {
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable();

  var candidateSelectors = [
    'input',
    'select',
    'a[href]',
    'textarea',
    'button',
    '[tabindex]',
  ];

  var candidates = el.querySelectorAll(candidateSelectors);

  var candidate, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

    if (
      candidateIndex < 0
      || (candidate.tagName === 'INPUT' && candidate.type === 'hidden')
      || candidate.disabled
      || isUnavailable(candidate)
    ) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        tabIndex: candidateIndex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(function(a, b) {
      return a.tabIndex - b.tabIndex;
    })
    .map(function(a) {
      return a.node
    });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
}

function createIsUnavailable() {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === document.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || window.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === document.documentElement) return false;

    var computedStyle = window.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  }
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__temporary__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__temporary__["a"]; });
/* unused harmony reexport MDCTemporaryDrawerFoundation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__persistent__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__persistent__["a"]; });
/* unused harmony reexport MDCPersistentDrawerFoundation */
/* unused harmony reexport util */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(7);
/* unused harmony reexport MDCTemporaryDrawerFoundation */
/* unused harmony reexport util */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








class MDCTemporaryDrawer extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCTemporaryDrawer(root);
  }

  get open() {
    return this.foundation_.isOpen();
  }

  set open(value) {
    if (value) {
      this.foundation_.open();
    } else {
      this.foundation_.close();
    }
  }

  /* Return the drawer element inside the component. */
  get drawer() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
  }

  getDefaultFoundation() {
    const {FOCUSABLE_ELEMENTS, OPACITY_VAR_NAME} = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings;

    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      addBodyClass: (className) => document.body.classList.add(className),
      removeBodyClass: (className) => document.body.classList.remove(className),
      hasNecessaryDom: () => Boolean(this.drawer),
      registerInteractionHandler: (evt, handler) =>
          this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* remapEvent */](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* applyPassive */]()),
      deregisterInteractionHandler: (evt, handler) =>
          this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* remapEvent */](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* applyPassive */]()),
      registerDrawerInteractionHandler: (evt, handler) =>
          this.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* remapEvent */](evt), handler),
      deregisterDrawerInteractionHandler: (evt, handler) =>
          this.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* remapEvent */](evt), handler),
      registerTransitionEndHandler: (handler) => this.drawer.addEventListener('transitionend', handler),
      deregisterTransitionEndHandler: (handler) => this.drawer.removeEventListener('transitionend', handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      getDrawerWidth: () => this.drawer.offsetWidth,
      setTranslateX: (value) => this.drawer.style.setProperty(
          __WEBPACK_IMPORTED_MODULE_2__util__["b" /* getTransformPropertyName */](), value === null ? null : `translateX(${value}px)`),
      updateCssVariable: (value) => {
        if (__WEBPACK_IMPORTED_MODULE_2__util__["f" /* supportsCssCustomProperties */]()) {
          this.root_.style.setProperty(OPACITY_VAR_NAME, value);
        }
      },
      getFocusableElements: () => this.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
      saveElementTabState: (el) => __WEBPACK_IMPORTED_MODULE_2__util__["e" /* saveElementTabState */](el),
      restoreElementTabState: (el) => __WEBPACK_IMPORTED_MODULE_2__util__["d" /* restoreElementTabState */](el),
      makeElementUntabbable: (el) => el.setAttribute('tabindex', -1),
      notifyOpen: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.OPEN_EVENT),
      notifyClose: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CLOSE_EVENT),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      isDrawer: (el) => el === this.drawer,
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTemporaryDrawer;



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(45);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCTemporaryDrawerFoundation extends __WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* MDCSlidableDrawerFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return Object.assign(__WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
      addBodyClass: (/* className: string */) => {},
      removeBodyClass: (/* className: string */) => {},
      isDrawer: () => false,
      updateCssVariable: (/* value: string */) => {},
    });
  }

  constructor(adapter) {
    super(
      Object.assign(MDCTemporaryDrawerFoundation.defaultAdapter, adapter),
      MDCTemporaryDrawerFoundation.cssClasses.ROOT,
      MDCTemporaryDrawerFoundation.cssClasses.ANIMATING,
      MDCTemporaryDrawerFoundation.cssClasses.OPEN);

    this.componentClickHandler_ = () => this.close();
  }

  init() {
    super.init();

    // Make browser aware of custom property being used in this element.
    // Workaround for certain types of hard-to-reproduce heisenbugs.
    this.adapter_.updateCssVariable(0);
    this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
  }

  destroy() {
    super.destroy();

    this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    this.enableScroll_();
  }

  open() {
    this.disableScroll_();
    // Make sure custom property values are cleared before starting.
    this.adapter_.updateCssVariable('');

    super.open();
  }

  close() {
    // Make sure custom property values are cleared before making any changes.
    this.adapter_.updateCssVariable('');

    super.close();
  }

  prepareForTouchEnd_() {
    super.prepareForTouchEnd_();

    this.adapter_.updateCssVariable('');
  }

  updateDrawer_() {
    super.updateDrawer_();

    const newOpacity = Math.max(0, 1 + this.direction_ * (this.newPosition_ / this.drawerWidth_));
    this.adapter_.updateCssVariable(newOpacity);
  }

  isRootTransitioningEventTarget_(el) {
    return this.adapter_.isDrawer(el);
  }

  handleTransitionEnd_(evt) {
    super.handleTransitionEnd_(evt);
    if (!this.isOpen_) {
      this.enableScroll_();
    }
  };

  disableScroll_() {
    this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  }

  enableScroll_() {
    this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTemporaryDrawerFoundation;



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const FOCUSABLE_ELEMENTS =
	'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' +
	'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
/* harmony export (immutable) */ __webpack_exports__["a"] = FOCUSABLE_ELEMENTS;



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



class MDCSlidableDrawerFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      hasClass: (/* className: string */) => {},
      hasNecessaryDom: () => /* boolean */ false,
      registerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerDrawerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterDrawerInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerTransitionEndHandler: (/* handler: EventListener */) => {},
      deregisterTransitionEndHandler: (/* handler: EventListener */) => {},
      registerDocumentKeydownHandler: (/* handler: EventListener */) => {},
      deregisterDocumentKeydownHandler: (/* handler: EventListener */) => {},
      setTranslateX: (/* value: number | null */) => {},
      getFocusableElements: () => /* NodeList */ {},
      saveElementTabState: (/* el: Element */) => {},
      restoreElementTabState: (/* el: Element */) => {},
      makeElementUntabbable: (/* el: Element */) => {},
      notifyOpen: () => {},
      notifyClose: () => {},
      isRtl: () => /* boolean */ false,
      getDrawerWidth: () => /* number */ 0,
    };
  }

  constructor(adapter, rootCssClass, animatingCssClass, openCssClass) {
    super(Object.assign(MDCSlidableDrawerFoundation.defaultAdapter, adapter));

    this.rootCssClass_ = rootCssClass;
    this.animatingCssClass_ = animatingCssClass;
    this.openCssClass_ = openCssClass;

    this.transitionEndHandler_ = (evt) => this.handleTransitionEnd_(evt);

    this.inert_ = false;

    this.drawerClickHandler_ = (evt) => evt.stopPropagation();
    this.componentTouchStartHandler_ = (evt) => this.handleTouchStart_(evt);
    this.componentTouchMoveHandler_ = (evt) => this.handleTouchMove_(evt);
    this.componentTouchEndHandler_ = (evt) => this.handleTouchEnd_(evt);
    this.documentKeydownHandler_ = (evt) => {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        this.close();
      }
    };
  }

  init() {
    const ROOT = this.rootCssClass_;
    const OPEN = this.openCssClass_;

    if (!this.adapter_.hasClass(ROOT)) {
      throw new Error(`${ROOT} class required in root element.`);
    }

    if (!this.adapter_.hasNecessaryDom()) {
      throw new Error(`Required DOM nodes missing in ${ROOT} component.`);
    }

    if (this.adapter_.hasClass(OPEN)) {
      this.isOpen_ = true;
    } else {
      this.detabinate_();
      this.isOpen_ = false;
    }

    this.adapter_.registerDrawerInteractionHandler('click', this.drawerClickHandler_);
    this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
    this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
    this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
  }

  destroy() {
    this.adapter_.deregisterDrawerInteractionHandler('click', this.drawerClickHandler_);
    this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
    this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
    this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
    // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
  }

  open() {
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.addClass(this.animatingCssClass_);
    this.adapter_.addClass(this.openCssClass_);
    this.retabinate_();
    // Debounce multiple calls
    if (!this.isOpen_) {
      this.adapter_.notifyOpen();
    }
    this.isOpen_ = true;
  }

  close() {
    this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
    this.adapter_.addClass(this.animatingCssClass_);
    this.adapter_.removeClass(this.openCssClass_);
    this.detabinate_();
    // Debounce multiple calls
    if (this.isOpen_) {
      this.adapter_.notifyClose();
    }
    this.isOpen_ = false;
  }

  isOpen() {
    return this.isOpen_;
  }

  /**
   *  Render all children of the drawer inert when it's closed.
   */
  detabinate_() {
    if (this.inert_) {
      return;
    }

    const elements = this.adapter_.getFocusableElements();
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        this.adapter_.saveElementTabState(elements[i]);
        this.adapter_.makeElementUntabbable(elements[i]);
      }
    }

    this.inert_ = true;
  }

  /**
   *  Make all children of the drawer tabbable again when it's open.
   */
  retabinate_() {
    if (!this.inert_) {
      return;
    }

    const elements = this.adapter_.getFocusableElements();
    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        this.adapter_.restoreElementTabState(elements[i]);
      }
    }

    this.inert_ = false;
  }

  handleTouchStart_(evt) {
    if (!this.adapter_.hasClass(this.openCssClass_)) {
      return;
    }
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.direction_ = this.adapter_.isRtl() ? -1 : 1;
    this.drawerWidth_ = this.adapter_.getDrawerWidth();
    this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
    this.currentX_ = this.startX_;

    this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
  }

  handleTouchMove_(evt) {
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
  }

  handleTouchEnd_(evt) {
    if (evt.pointerType && evt.pointerType !== 'touch') {
      return;
    }

    this.prepareForTouchEnd_();

    // Did the user close the drawer by more than 50%?
    if (Math.abs(this.newPosition_ / this.drawerWidth_) >= 0.5) {
      this.close();
    } else {
      // Triggering an open here means we'll get a nice animation back to the fully open state.
      this.open();
    }
  }

  prepareForTouchEnd_() {
    cancelAnimationFrame(this.updateRaf_);
    this.adapter_.setTranslateX(null);
  }

  updateDrawer_() {
    this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
    this.adapter_.setTranslateX(this.newPosition_);
  }

  get newPosition_() {
    let newPos = null;

    if (this.direction_ === 1) {
      newPos = Math.min(0, this.currentX_ - this.startX_);
    } else {
      newPos = Math.max(0, this.currentX_ - this.startX_);
    }

    return newPos;
  }

  isRootTransitioningEventTarget_() {
    // Classes extending MDCSlidableDrawerFoundation should implement this method to return true or false
    // if the event target is the root event target currently transitioning.
    return false;
  }

  handleTransitionEnd_(evt) {
    if (this.isRootTransitioningEventTarget_(evt.target)) {
      this.adapter_.removeClass(this.animatingCssClass_);
      this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
    }
  };
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSlidableDrawerFoundation;



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(5);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



const cssClasses = {
  ROOT: 'mdc-temporary-drawer',
  OPEN: 'mdc-temporary-drawer--open',
  ANIMATING: 'mdc-temporary-drawer--animating',
  SCROLL_LOCK: 'mdc-drawer-scroll-lock',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  DRAWER_SELECTOR: '.mdc-temporary-drawer__drawer',
  OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* FOCUSABLE_ELEMENTS */],
  OPEN_EVENT: 'MDCTemporaryDrawer:open',
  CLOSE_EVENT: 'MDCTemporaryDrawer:close',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(7);
/* unused harmony reexport MDCPersistentDrawerFoundation */
/* unused harmony reexport util */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








class MDCPersistentDrawer extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCPersistentDrawer(root);
  }

  get open() {
    return this.foundation_.isOpen();
  }

  set open(value) {
    if (value) {
      this.foundation_.open();
    } else {
      this.foundation_.close();
    }
  }

  /* Return the drawer element inside the component. */
  get drawer() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
  }

  getDefaultFoundation() {
    const {FOCUSABLE_ELEMENTS} = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings;

    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.drawer),
      registerInteractionHandler: (evt, handler) =>
          this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* remapEvent */](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* applyPassive */]()),
      deregisterInteractionHandler: (evt, handler) =>
          this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* remapEvent */](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* applyPassive */]()),
      registerDrawerInteractionHandler: (evt, handler) =>
          this.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* remapEvent */](evt), handler),
      deregisterDrawerInteractionHandler: (evt, handler) =>
          this.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* remapEvent */](evt), handler),
      registerTransitionEndHandler: (handler) =>
          this.root_.addEventListener('transitionend', handler),
      deregisterTransitionEndHandler: (handler) =>
          this.root_.removeEventListener('transitionend', handler),
      registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
      deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
      getDrawerWidth: () => this.drawer.offsetWidth,
      setTranslateX: (value) => this.drawer.style.setProperty(
          __WEBPACK_IMPORTED_MODULE_2__util__["b" /* getTransformPropertyName */](), value === null ? null : `translateX(${value}px)`),
      getFocusableElements: () => this.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
      saveElementTabState: (el) => __WEBPACK_IMPORTED_MODULE_2__util__["e" /* saveElementTabState */](el),
      restoreElementTabState: (el) => __WEBPACK_IMPORTED_MODULE_2__util__["d" /* restoreElementTabState */](el),
      makeElementUntabbable: (el) => el.setAttribute('tabindex', -1),
      notifyOpen: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.OPEN_EVENT),
      notifyClose: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CLOSE_EVENT),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      isDrawer: (el) => el === this.drawer,
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCPersistentDrawer;



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(48);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCPersistentDrawerFoundation extends __WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* MDCSlidableDrawerFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return Object.assign(__WEBPACK_IMPORTED_MODULE_0__slidable__["b" /* MDCSlidableDrawerFoundation */].defaultAdapter, {
      isDrawer: () => false,
    });
  }

  constructor(adapter) {
    super(
      Object.assign(MDCPersistentDrawerFoundation.defaultAdapter, adapter),
      MDCPersistentDrawerFoundation.cssClasses.ROOT,
      MDCPersistentDrawerFoundation.cssClasses.ANIMATING,
      MDCPersistentDrawerFoundation.cssClasses.OPEN);
  }

  isRootTransitioningEventTarget_(el) {
    return this.adapter_.isDrawer(el);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCPersistentDrawerFoundation;



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slidable__ = __webpack_require__(5);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



const cssClasses = {
  ROOT: 'mdc-persistent-drawer',
  OPEN: 'mdc-persistent-drawer--open',
  ANIMATING: 'mdc-persistent-drawer--animating',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  DRAWER_SELECTOR: '.mdc-persistent-drawer__drawer',
  FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable__["a" /* FOCUSABLE_ELEMENTS */],
  OPEN_EVENT: 'MDCPersistentDrawer:open',
  CLOSE_EVENT: 'MDCPersistentDrawer:close',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(50);
/* unused harmony reexport MDCTextfieldFoundation */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









class MDCTextfield extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCTextfield(root);
  }

  initialize(rippleFactory = (el) => new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](el)) {
    this.input_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].INPUT_SELECTOR);
    this.label_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].LABEL_SELECTOR);
    this.helptextElement = null;
    this.ripple = null;
    if (this.input_.hasAttribute('aria-controls')) {
      this.helptextElement = document.getElementById(this.input_.getAttribute('aria-controls'));
    }
    if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].BOX)) {
      this.ripple = rippleFactory(this.root_);
    };
  }

  destroy() {
    if (this.ripple) {
      this.ripple.destroy();
    }
    super.destroy();
  }

  initialSyncWithDom() {
    this.disabled = this.input_.disabled;
  }

  get disabled() {
    return this.foundation_.isDisabled();
  }

  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */](Object.assign({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      addClassToLabel: (className) => {
        const label = this.label_;
        if (label) {
          label.classList.add(className);
        }
      },
      removeClassFromLabel: (className) => {
        const label = this.label_;
        if (label) {
          label.classList.remove(className);
        }
      },
    }, this.getInputAdapterMethods_(), this.getHelptextAdapterMethods_()));
  }

  getInputAdapterMethods_() {
    return {
      registerInputFocusHandler: (handler) => this.input_.addEventListener('focus', handler),
      registerInputBlurHandler: (handler) => this.input_.addEventListener('blur', handler),
      registerInputInputHandler: (handler) => this.input_.addEventListener('input', handler),
      registerInputKeydownHandler: (handler) => this.input_.addEventListener('keydown', handler),
      deregisterInputFocusHandler: (handler) => this.input_.removeEventListener('focus', handler),
      deregisterInputBlurHandler: (handler) => this.input_.removeEventListener('blur', handler),
      deregisterInputInputHandler: (handler) => this.input_.removeEventListener('input', handler),
      deregisterInputKeydownHandler: (handler) => this.input_.removeEventListener('keydown', handler),
      getNativeInput: () => this.input_,
    };
  }

  getHelptextAdapterMethods_() {
    return {
      addClassToHelptext: (className) => {
        if (this.helptextElement) {
          this.helptextElement.classList.add(className);
        }
      },
      removeClassFromHelptext: (className) => {
        if (this.helptextElement) {
          this.helptextElement.classList.remove(className);
        }
      },
      helptextHasClass: (className) => {
        if (!this.helptextElement) {
          return false;
        }
        return this.helptextElement.classList.contains(className);
      },
      setHelptextAttr: (name, value) => {
        if (this.helptextElement) {
          this.helptextElement.setAttribute(name, value);
        }
      },
      removeHelptextAttr: (name) => {
        if (this.helptextElement) {
          this.helptextElement.removeAttribute(name);
        }
      },
    };
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTextfield;



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(10);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCTextfieldFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      addClassToLabel: (/* className: string */) => {},
      removeClassFromLabel: (/* className: string */) => {},
      addClassToHelptext: (/* className: string */) => {},
      removeClassFromHelptext: (/* className: string */) => {},
      helptextHasClass: (/* className: string */) => /* boolean */ false,
      registerInputFocusHandler: (/* handler: EventListener */) => {},
      deregisterInputFocusHandler: (/* handler: EventListener */) => {},
      registerInputBlurHandler: (/* handler: EventListener */) => {},
      deregisterInputBlurHandler: (/* handler: EventListener */) => {},
      registerInputInputHandler: (/* handler: EventListener */) => {},
      deregisterInputInputHandler: (/* handler: EventListener */) => {},
      registerInputKeydownHandler: (/* handler: EventListener */) => {},
      deregisterInputKeydownHandler: (/* handler: EventListener */) => {},
      setHelptextAttr: (/* name: string, value: string */) => {},
      removeHelptextAttr: (/* name: string */) => {},
      getNativeInput: () => /* HTMLInputElement */ ({}),
    };
  }

  constructor(adapter = {}) {
    super(Object.assign(MDCTextfieldFoundation.defaultAdapter, adapter));

    this.receivedUserInput_ = false;
    this.inputFocusHandler_ = () => this.activateFocus_();
    this.inputBlurHandler_ = () => this.deactivateFocus_();
    this.inputInputHandler_ = () => this.autoCompleteFocus_();
    this.inputKeydownHandler_ = () => this.receivedUserInput_ = true;
  }

  init() {
    this.adapter_.addClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
    this.adapter_.registerInputFocusHandler(this.inputFocusHandler_);
    this.adapter_.registerInputBlurHandler(this.inputBlurHandler_);
    this.adapter_.registerInputInputHandler(this.inputInputHandler_);
    this.adapter_.registerInputKeydownHandler(this.inputKeydownHandler_);

    // Ensure label does not collide with any pre-filled value.
    if (this.getNativeInput_().value) {
      this.adapter_.addClassToLabel(MDCTextfieldFoundation.cssClasses.LABEL_FLOAT_ABOVE);
    }
  }

  destroy() {
    this.adapter_.removeClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
    this.adapter_.deregisterInputFocusHandler(this.inputFocusHandler_);
    this.adapter_.deregisterInputBlurHandler(this.inputBlurHandler_);
    this.adapter_.deregisterInputInputHandler(this.inputInputHandler_);
    this.adapter_.deregisterInputKeydownHandler(this.inputKeydownHandler_);
  }

  activateFocus_() {
    const {FOCUSED, LABEL_FLOAT_ABOVE} = MDCTextfieldFoundation.cssClasses;
    this.adapter_.addClass(FOCUSED);
    this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
    this.showHelptext_();
  }

  autoCompleteFocus_() {
    if (!this.receivedUserInput_) {
      this.activateFocus_();
    }
  }

  showHelptext_() {
    const {ARIA_HIDDEN} = MDCTextfieldFoundation.strings;
    this.adapter_.removeHelptextAttr(ARIA_HIDDEN);
  }

  deactivateFocus_() {
    const {FOCUSED, INVALID, LABEL_FLOAT_ABOVE} = MDCTextfieldFoundation.cssClasses;
    const input = this.getNativeInput_();
    const isValid = input.checkValidity();

    this.adapter_.removeClass(FOCUSED);
    if (!input.value && !this.isBadInput_()) {
      this.adapter_.removeClassFromLabel(LABEL_FLOAT_ABOVE);
      this.receivedUserInput_ = false;
    }
    if (isValid) {
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.addClass(INVALID);
    }
    this.updateHelptextOnDeactivation_(isValid);
  }

  updateHelptextOnDeactivation_(isValid) {
    const {HELPTEXT_PERSISTENT, HELPTEXT_VALIDATION_MSG} = MDCTextfieldFoundation.cssClasses;
    const {ROLE} = MDCTextfieldFoundation.strings;
    const helptextIsPersistent = this.adapter_.helptextHasClass(HELPTEXT_PERSISTENT);
    const helptextIsValidationMsg = this.adapter_.helptextHasClass(HELPTEXT_VALIDATION_MSG);
    const validationMsgNeedsDisplay = helptextIsValidationMsg && !isValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setHelptextAttr(ROLE, 'alert');
    } else {
      this.adapter_.removeHelptextAttr(ROLE);
    }

    if (helptextIsPersistent || validationMsgNeedsDisplay) {
      return;
    }
    this.hideHelptext_();
  }

  hideHelptext_() {
    const {ARIA_HIDDEN} = MDCTextfieldFoundation.strings;
    this.adapter_.setHelptextAttr(ARIA_HIDDEN, 'true');
  }

  isBadInput_() {
    const input = this.getNativeInput_();
    return input.validity ? input.validity.badInput : input.badInput;
  }

  isDisabled() {
    return this.getNativeInput_().disabled;
  }

  setDisabled(disabled) {
    const {DISABLED} = MDCTextfieldFoundation.cssClasses;
    this.getNativeInput_().disabled = disabled;
    if (disabled) {
      this.adapter_.addClass(DISABLED);
    } else {
      this.adapter_.removeClass(DISABLED);
    }
  }

  getNativeInput_() {
    return this.adapter_.getNativeInput() || {
      checkValidity: () => true,
      value: '',
      disabled: false,
      badInput: false,
    };
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTextfieldFoundation;



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_animation__ = __webpack_require__(4);
/* unused harmony reexport MDCSnackbarFoundation */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







class MDCSnackbar extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCSnackbar(root);
  }

  show(data) {
    this.foundation_.show(data);
  }

  getDefaultFoundation() {
    const {
      TEXT_SELECTOR,
      ACTION_BUTTON_SELECTOR,
    } = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings;
    const getText = () => this.root_.querySelector(TEXT_SELECTOR);
    const getActionButton = () => this.root_.querySelector(ACTION_BUTTON_SELECTOR);

    /* eslint brace-style: "off" */
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setAriaHidden: () => this.root_.setAttribute('aria-hidden', 'true'),
      unsetAriaHidden: () => this.root_.removeAttribute('aria-hidden'),
      setActionAriaHidden: () => getActionButton().setAttribute('aria-hidden', 'true'),
      unsetActionAriaHidden: () => getActionButton().removeAttribute('aria-hidden'),
      setActionText: (text) => { getActionButton().textContent = text; },
      setMessageText: (text) => { getText().textContent = text; },
      registerActionClickHandler: (handler) => getActionButton().addEventListener('click', handler),
      deregisterActionClickHandler: (handler) => getActionButton().removeEventListener('click', handler),
      registerTransitionEndHandler:
        (handler) => this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__material_animation__["a" /* getCorrectEventName */](window, 'transitionend'), handler),
      deregisterTransitionEndHandler:
        (handler) => this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__material_animation__["a" /* getCorrectEventName */](window, 'transitionend'), handler),
    });
  }

  get dismissesOnAction() {
    return this.foundation_.dismissesOnAction();
  }

  set dismissesOnAction(dismissesOnAction) {
    this.foundation_.setDismissOnAction(dismissesOnAction);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSnackbar;



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(53);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCSnackbarFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      setAriaHidden: () => {},
      unsetAriaHidden: () => {},
      setMessageText: (/* message: string */) => {},
      setActionText: (/* actionText: string */) => {},
      setActionAriaHidden: () => {},
      unsetActionAriaHidden: () => {},
      registerActionClickHandler: (/* handler: EventListener */) => {},
      deregisterActionClickHandler: (/* handler: EventListener */) => {},
      registerTransitionEndHandler: (/* handler: EventListener */) => {},
      deregisterTransitionEndHandler: (/* handler: EventListener */) => {},
    };
  }

  get active() {
    return this.active_;
  }

  constructor(adapter) {
    super(Object.assign(MDCSnackbarFoundation.defaultAdapter, adapter));

    this.active_ = false;
    this.dismissOnAction_ = true;
    this.queue_ = [];
    this.actionClickHandler_ = () => this.invokeAction_();
  }

  init() {
    this.adapter_.registerActionClickHandler(this.actionClickHandler_);
    this.adapter_.setAriaHidden();
    this.adapter_.setActionAriaHidden();
  }

  destroy() {
    this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
  }

  dismissesOnAction() {
    return this.dismissOnAction_;
  }

  setDismissOnAction(dismissOnAction) {
    this.dismissOnAction_ = !!dismissOnAction;
  }

  show(data) {
    if (!data) {
      throw new Error(
        'Please provide a data object with at least a message to display.');
    }
    if (!data.message) {
      throw new Error('Please provide a message to be displayed.');
    }
    if (data.actionHandler && !data.actionText) {
      throw new Error('Please provide action text with the handler.');
    }

    if (this.active) {
      this.queue_.push(data);
      return;
    }

    const {ACTIVE, MULTILINE, ACTION_ON_BOTTOM} = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    const {MESSAGE_TIMEOUT} = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */];

    this.adapter_.setMessageText(data.message);

    if (data.multiline) {
      this.adapter_.addClass(MULTILINE);
      if (data.actionOnBottom) {
        this.adapter_.addClass(ACTION_ON_BOTTOM);
      }
    }

    if (data.actionHandler) {
      this.adapter_.setActionText(data.actionText);
      this.actionHandler_ = data.actionHandler;
      this.setActionHidden_(false);
    } else {
      this.setActionHidden_(true);
      this.actionHandler_ = null;
      this.adapter_.setActionText(null);
    }

    this.active_ = true;
    this.adapter_.addClass(ACTIVE);
    this.adapter_.unsetAriaHidden();

    this.timeoutId_ = setTimeout(this.cleanup_.bind(this), data.timeout || MESSAGE_TIMEOUT);
  }

  invokeAction_() {
    try {
      if (!this.actionHandler_) {
        return;
      }

      this.actionHandler_();
    } finally {
      if (this.dismissOnAction_) {
        clearTimeout(this.timeoutId_);
        this.cleanup_();
      }
    }
  }

  cleanup_() {
    const {ACTIVE, MULTILINE, ACTION_ON_BOTTOM} = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];

    this.adapter_.removeClass(ACTIVE);

    const handler = () => {
      this.adapter_.deregisterTransitionEndHandler(handler);
      this.adapter_.removeClass(MULTILINE);
      this.adapter_.removeClass(ACTION_ON_BOTTOM);
      this.setActionHidden_(true);
      this.adapter_.setMessageText(null);
      this.adapter_.setActionText(null);
      this.adapter_.setAriaHidden();
      this.active_ = false;
      this.showNext_();
    };

    this.adapter_.registerTransitionEndHandler(handler);
  }

  showNext_() {
    if (!this.queue_.length) {
      return;
    }

    this.show(this.queue_.shift());
  }

  setActionHidden_(isHidden) {
    if (isHidden) {
      this.adapter_.setActionAriaHidden();
    } else {
      this.adapter_.unsetActionAriaHidden();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSnackbarFoundation;



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cssClasses = {
  ROOT: 'mdc-snackbar',
  TEXT: 'mdc-snackbar__text',
  ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
  ACTION_BUTTON: 'mdc-snackbar__action-button',
  ACTIVE: 'mdc-snackbar--active',
  MULTILINE: 'mdc-snackbar--multiline',
  ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  TEXT_SELECTOR: '.mdc-snackbar__text',
  ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
  ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button',
};
/* harmony export (immutable) */ __webpack_exports__["c"] = strings;


const numbers = {
  MESSAGE_TIMEOUT: 2750,
};
/* harmony export (immutable) */ __webpack_exports__["b"] = numbers;



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(55);
/* unused harmony reexport MDCLinearProgressFoundation */
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






class MDCLinearProgress extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCLinearProgress(root);
  }

  set determinate(value) {
    this.foundation_.setDeterminate(value);
  }

  set progress(value) {
    this.foundation_.setProgress(value);
  }

  set buffer(value) {
    this.foundation_.setBuffer(value);
  }

  set reverse(value) {
    this.foundation_.setReverse(value);
  }

  open() {
    this.foundation_.open();
  }

  close() {
    this.foundation_.close();
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      getPrimaryBar: () => this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.PRIMARY_BAR_SELECTOR),
      getBuffer: () => this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.BUFFER_SELECTOR),
      hasClass: (className) => this.root_.classList.contains(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setStyle: (el, styleProperty, value) => el.style[styleProperty] = value,
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCLinearProgress;



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_animation__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(56);
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






class MDCLinearProgressFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      getPrimaryBar: () => /* el: Element */ {},
      getBuffer: () => /* el: Element */ {},
      hasClass: (/* className: string */) => false,
      removeClass: (/* className: string */) => {},
      setStyle: (/* el: Element, styleProperty: string, value: number */) => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCLinearProgressFoundation.defaultAdapter, adapter));
  }

  init() {
    this.determinate_ = !this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].INDETERMINATE_CLASS);
    this.reverse_ = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].REVERSED_CLASS);
  }

  setDeterminate(isDeterminate) {
    this.determinate_ = isDeterminate;
    if (this.determinate_) {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].INDETERMINATE_CLASS);
    } else {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].INDETERMINATE_CLASS);
      this.setScale_(this.adapter_.getPrimaryBar(), 1);
      this.setScale_(this.adapter_.getBuffer(), 1);
    }
  }

  setProgress(value) {
    if (this.determinate_) {
      this.setScale_(this.adapter_.getPrimaryBar(), value);
    }
  }

  setBuffer(value) {
    if (this.determinate_) {
      this.setScale_(this.adapter_.getBuffer(), value);
    }
  }

  setReverse(isReversed) {
    this.reverse_ = isReversed;
    if (this.reverse_) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].REVERSED_CLASS);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].REVERSED_CLASS);
    }
  }

  open() {
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CLOSED_CLASS);
  }

  close() {
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].CLOSED_CLASS);
  }

  setScale_(el, scaleValue) {
    const value = 'scaleX(' + scaleValue + ')';
    __WEBPACK_IMPORTED_MODULE_1__material_animation__["c" /* transformStyleProperties */].forEach((transformStyleProperty) => {
      this.adapter_.setStyle(el, transformStyleProperty, value);
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCLinearProgressFoundation;



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  CLOSED_CLASS: 'mdc-linear-progress--closed',
  INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
  REVERSED_CLASS: 'mdc-linear-progress--reversed',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
  BUFFER_SELECTOR: '.mdc-linear-progress__buffer',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







/**
 * @extends MDCComponent<!MDCSimpleMenuFoundation>
 */
class MDCSimpleMenu extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);
    /** @private {!Element} */
    this.previousFocus_;
  }

  /**
   * @param {!Element} root
   * @return {!MDCSimpleMenu}
   */
  static attachTo(root) {
    return new MDCSimpleMenu(root);
  }

  /** @return {boolean} */
  get open() {
    return this.foundation_.isOpen();
  }

  /** @param {boolean} value */
  set open(value) {
    if (value) {
      this.foundation_.open();
    } else {
      this.foundation_.close();
    }
  }

  /** @param {{focusIndex: ?number}=} options */
  show({focusIndex = null} = {}) {
    this.foundation_.open({focusIndex: focusIndex});
  }

  hide() {
    this.foundation_.close();
  }

  /**
   * Return the item container element inside the component.
   * @return {?Element}
   */
  get itemsContainer_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.ITEMS_SELECTOR);
  }

  /**
   * Return the items within the menu. Note that this only contains the set of elements within
   * the items container that are proper list items, and not supplemental / presentational DOM
   * elements.
   * @return {!Array<!Element>}
   */
  get items() {
    const {itemsContainer_: itemsContainer} = this;
    return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
  }

  /** @return {!MDCSimpleMenuFoundation} */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      hasClass: (className) => this.root_.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.itemsContainer_),
      getAttributeForEventTarget: (target, attributeName) => target.getAttribute(attributeName),
      getInnerDimensions: () => {
        const {itemsContainer_: itemsContainer} = this;
        return {width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight};
      },
      hasAnchor: () => this.root_.parentElement && this.root_.parentElement.classList.contains('mdc-menu-anchor'),
      getAnchorDimensions: () => this.root_.parentElement.getBoundingClientRect(),
      getWindowDimensions: () => {
        return {width: window.innerWidth, height: window.innerHeight};
      },
      setScale: (x, y) => {
        this.root_.style[__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getTransformPropertyName */](window)] = `scale(${x}, ${y})`;
      },
      setInnerScale: (x, y) => {
        this.itemsContainer_.style[__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getTransformPropertyName */](window)] = `scale(${x}, ${y})`;
      },
      getNumberOfItems: () => this.items.length,
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      registerBodyClickHandler: (handler) => document.body.addEventListener('click', handler),
      deregisterBodyClickHandler: (handler) => document.body.removeEventListener('click', handler),
      getYParamsForItemAtIndex: (index) => {
        const {offsetTop: top, offsetHeight: height} = this.items[index];
        return {top, height};
      },
      setTransitionDelayForItemAtIndex: (index, value) =>
        this.items[index].style.setProperty('transition-delay', value),
      getIndexForEventTarget: (target) => this.items.indexOf(target),
      notifySelected: (evtData) => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.SELECTED_EVENT, {
        index: evtData.index,
        item: this.items[evtData.index],
      }),
      notifyCancel: () => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CANCEL_EVENT, {}),
      saveFocus: () => {
        this.previousFocus_ = document.activeElement;
      },
      restoreFocus: () => {
        if (this.previousFocus_) {
          this.previousFocus_.focus();
        }
      },
      isFocused: () => document.activeElement === this.root_,
      focus: () => this.root_.focus(),
      getFocusedItemIndex: () => this.items.indexOf(document.activeElement),
      focusItemAtIndex: (index) => this.items[index].focus(),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        this.root_.style[`${__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getTransformPropertyName */](window)}-origin`] = origin;
      },
      setPosition: (position) => {
        this.root_.style.left = 'left' in position ? position.left : null;
        this.root_.style.right = 'right' in position ? position.right : null;
        this.root_.style.top = 'top' in position ? position.top : null;
        this.root_.style.bottom = 'bottom' in position ? position.bottom : null;
      },
      getAccurateTime: () => window.performance.now(),
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSimpleMenu;



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(9);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @extends {MDCFoundation<!MDCSimpleMenuAdapter>}
 */
class MDCSimpleMenuFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  /** @return enum{strings} */
  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
  }

  /** @return enum{numbers} */
  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
  }

  /**
   * {@see MDCSimpleMenuAdapter} for typing information on parameters and return
   * types.
   * @return {!MDCSimpleMenuAdapter}
   */
  static get defaultAdapter() {
    return /** @type {!MDCSimpleMenuAdapter} */ ({
      addClass: () => {},
      removeClass: () => {},
      hasClass: () => false,
      hasNecessaryDom: () => false,
      getAttributeForEventTarget: () => {},
      getInnerDimensions: () => ({}),
      hasAnchor: () => false,
      getAnchorDimensions: () => ({}),
      getWindowDimensions: () => ({}),
      setScale: () => {},
      setInnerScale: () => {},
      getNumberOfItems: () => 0,
      registerInteractionHandler: () => {},
      deregisterInteractionHandler: () => {},
      registerBodyClickHandler: () => {},
      deregisterBodyClickHandler: () => {},
      getYParamsForItemAtIndex: () => ({}),
      setTransitionDelayForItemAtIndex: () => {},
      getIndexForEventTarget: () => 0,
      notifySelected: () => {},
      notifyCancel: () => {},
      saveFocus: () => {},
      restoreFocus: () => {},
      isFocused: () => false,
      focus: () => {},
      getFocusedItemIndex: () => -1,
      focusItemAtIndex: () => {},
      isRtl: () => false,
      setTransformOrigin: () => {},
      setPosition: () => {},
      getAccurateTime: () => 0,
    });
  }

  /** @param {!MDCSimpleMenuAdapter} adapter */
  constructor(adapter) {
    super(Object.assign(MDCSimpleMenuFoundation.defaultAdapter, adapter));

    /** @private {function(!Event)} */
    this.clickHandler_ = (evt) => this.handlePossibleSelected_(evt);
    /** @private {function(!Event)} */
    this.keydownHandler_ = (evt) => this.handleKeyboardDown_(evt);
    /** @private {function(!Event)} */
    this.keyupHandler_ = (evt) => this.handleKeyboardUp_(evt);
    /** @private {function(!Event)} */
    this.documentClickHandler_ = (evt) => {
      this.adapter_.notifyCancel();
      this.close(evt);
    };
    /** @private {boolean} */
    this.isOpen_ = false;
    /** @private {number} */
    this.startScaleX_ = 0;
    /** @private {number} */
    this.startScaleY_ = 0;
    /** @private {number} */
    this.targetScale_ = 1;
    /** @private {number} */
    this.scaleX_ = 0;
    /** @private {number} */
    this.scaleY_ = 0;
    /** @private {boolean} */
    this.running_ = false;
    /** @private {number} */
    this.selectedTriggerTimerId_ = 0;
    /** @private {number} */
    this.animationRequestId_ = 0;
    /** @private {!{ width: number, height: number }} */
    this.dimensions_;
    /** @private {number} */
    this.startTime_;
    /** @private {number} */
    this.itemHeight_;
  }

  init() {
    const {ROOT, OPEN} = MDCSimpleMenuFoundation.cssClasses;

    if (!this.adapter_.hasClass(ROOT)) {
      throw new Error(`${ROOT} class required in root element.`);
    }

    if (!this.adapter_.hasNecessaryDom()) {
      throw new Error(`Required DOM nodes missing in ${ROOT} component.`);
    }

    if (this.adapter_.hasClass(OPEN)) {
      this.isOpen_ = true;
    }

    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
  }

  destroy() {
    clearTimeout(this.selectedTriggerTimerId_);
    // Cancel any currently running animations.
    cancelAnimationFrame(this.animationRequestId_);
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
  }

  /**
   * Calculates transition delays for individual menu items, so that they fade in one at a time.
   * @private
   */
  applyTransitionDelays_() {
    const {BOTTOM_LEFT, BOTTOM_RIGHT} = MDCSimpleMenuFoundation.cssClasses;
    const numItems = this.adapter_.getNumberOfItems();
    const {height} = this.dimensions_;
    const transitionDuration = MDCSimpleMenuFoundation.numbers.TRANSITION_DURATION_MS / 1000;
    const start = MDCSimpleMenuFoundation.numbers.TRANSITION_SCALE_ADJUSTMENT_Y;

    for (let index = 0; index < numItems; index++) {
      const {top: itemTop, height: itemHeight} = this.adapter_.getYParamsForItemAtIndex(index);
      this.itemHeight_ = itemHeight;
      let itemDelayFraction = itemTop / height;
      if (this.adapter_.hasClass(BOTTOM_LEFT) || this.adapter_.hasClass(BOTTOM_RIGHT)) {
        itemDelayFraction = ((height - itemTop - itemHeight) / height);
      }
      const itemDelay = (start + itemDelayFraction * (1 - start)) * transitionDuration;
      // Use toFixed() here to normalize CSS unit precision across browsers
      this.adapter_.setTransitionDelayForItemAtIndex(index, `${itemDelay.toFixed(3)}s`);
    }
  }

  /**
   * Removes transition delays from menu items.
   * @private
   */
  removeTransitionDelays_() {
    const numItems = this.adapter_.getNumberOfItems();
    for (let i = 0; i < numItems; i++) {
      this.adapter_.setTransitionDelayForItemAtIndex(i, null);
    }
  }

  /**
   * Animates menu opening or closing.
   * @private
   */
  animationLoop_() {
    const time = this.adapter_.getAccurateTime();
    const {TRANSITION_DURATION_MS, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2,
        TRANSITION_SCALE_ADJUSTMENT_X, TRANSITION_SCALE_ADJUSTMENT_Y} = MDCSimpleMenuFoundation.numbers;
    const currentTime = __WEBPACK_IMPORTED_MODULE_3__util__["b" /* clamp */]((time - this.startTime_) / TRANSITION_DURATION_MS);

    // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.
    let currentTimeX = __WEBPACK_IMPORTED_MODULE_3__util__["b" /* clamp */](
      (currentTime - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X)
    );
    // No time-shifting on the Y axis when closing.
    let currentTimeY = currentTime;

    let startScaleY = this.startScaleY_;
    if (this.targetScale_ === 1) {
      // Start with the menu at the height of a single item.
      if (this.itemHeight_) {
        startScaleY = Math.max(this.itemHeight_ / this.dimensions_.height, startScaleY);
      }
      // X axis moves faster, so time-shift forward.
      currentTimeX = __WEBPACK_IMPORTED_MODULE_3__util__["b" /* clamp */](currentTime + TRANSITION_SCALE_ADJUSTMENT_X);
      // Y axis moves slower, so time-shift backwards and adjust speed by the difference.
      currentTimeY = __WEBPACK_IMPORTED_MODULE_3__util__["b" /* clamp */](
        (currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y)
      );
    }

    // Apply cubic bezier easing independently to each axis.
    const easeX = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* bezierProgress */](currentTimeX, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
    const easeY = __WEBPACK_IMPORTED_MODULE_3__util__["a" /* bezierProgress */](currentTimeY, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);

    // Calculate the scales to apply to the outer container and inner container.
    this.scaleX_ = this.startScaleX_ + (this.targetScale_ - this.startScaleX_) * easeX;
    const invScaleX = 1 / (this.scaleX_ === 0 ? 1 : this.scaleX_);
    this.scaleY_ = startScaleY + (this.targetScale_ - startScaleY) * easeY;
    const invScaleY = 1 / (this.scaleY_ === 0 ? 1 : this.scaleY_);

    // Apply scales.
    this.adapter_.setScale(this.scaleX_, this.scaleY_);
    this.adapter_.setInnerScale(invScaleX, invScaleY);

    // Stop animation when we've covered the entire 0 - 1 range of time.
    if (currentTime < 1) {
      this.animationRequestId_ = requestAnimationFrame(() => this.animationLoop_());
    } else {
      this.animationRequestId_ = 0;
      this.running_ = false;
      this.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
    }
  }

  /**
   * Starts the open or close animation.
   * @private
   */
  animateMenu_() {
    this.startTime_ = this.adapter_.getAccurateTime();
    this.startScaleX_ = this.scaleX_;
    this.startScaleY_ = this.scaleY_;

    this.targetScale_ = this.isOpen_ ? 1 : 0;

    if (!this.running_) {
      this.running_ = true;
      this.animationRequestId_ = requestAnimationFrame(() => this.animationLoop_());
    }
  }

  /**
   * @param {?number} focusIndex
   * @private
   */
  focusOnOpen_(focusIndex) {
    if (focusIndex === null) {
      // First, try focusing the menu.
      this.adapter_.focus();
      // If that doesn't work, focus first item instead.
      if (!this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(0);
      }
    } else {
      this.adapter_.focusItemAtIndex(focusIndex);
    }
  }

  /**
   * Handle keys that we want to repeat on hold (tab and arrows).
   * @param {!Event} evt
   * @return {boolean}
   * @private
   */
  handleKeyboardDown_(evt) {
    // Do nothing if Alt, Ctrl or Meta are pressed.
    if (evt.altKey || evt.ctrlKey || evt.metaKey) {
      return true;
    }

    const {keyCode, key, shiftKey} = evt;
    const isTab = key === 'Tab' || keyCode === 9;
    const isArrowUp = key === 'ArrowUp' || keyCode === 38;
    const isArrowDown = key === 'ArrowDown' || keyCode === 40;
    const isSpace = key === 'Space' || keyCode === 32;

    const focusedItemIndex = this.adapter_.getFocusedItemIndex();
    const lastItemIndex = this.adapter_.getNumberOfItems() - 1;

    if (shiftKey && isTab && focusedItemIndex === 0) {
      this.adapter_.focusItemAtIndex(lastItemIndex);
      evt.preventDefault();
      return false;
    }

    if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
      this.adapter_.focusItemAtIndex(0);
      evt.preventDefault();
      return false;
    }

    // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
    if (isArrowUp || isArrowDown || isSpace) {
      evt.preventDefault();
    }

    if (isArrowUp) {
      if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(lastItemIndex);
      } else {
        this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
      }
    } else if (isArrowDown) {
      if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
        this.adapter_.focusItemAtIndex(0);
      } else {
        this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
      }
    }

    return true;
  }

  /**
   * Handle keys that we don't want to repeat on hold (Enter, Space, Escape).
   * @param {!Event} evt
   * @return {boolean}
   * @private
   */
  handleKeyboardUp_(evt) {
    // Do nothing if Alt, Ctrl or Meta are pressed.
    if (evt.altKey || evt.ctrlKey || evt.metaKey) {
      return true;
    }

    const {keyCode, key} = evt;
    const isEnter = key === 'Enter' || keyCode === 13;
    const isSpace = key === 'Space' || keyCode === 32;
    const isEscape = key === 'Escape' || keyCode === 27;

    if (isEnter || isSpace) {
      this.handlePossibleSelected_(evt);
    }

    if (isEscape) {
      this.adapter_.notifyCancel();
      this.close();
    }

    return true;
  }

  /**
   * @param {!Event} evt
   * @private
   */
  handlePossibleSelected_(evt) {
    if (this.adapter_.getAttributeForEventTarget(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].ARIA_DISABLED_ATTR) === 'true') {
      return;
    }
    const targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
    if (targetIndex < 0) {
      return;
    }
    // Debounce multiple selections
    if (this.selectedTriggerTimerId_) {
      return;
    }
    this.selectedTriggerTimerId_ = setTimeout(() => {
      this.selectedTriggerTimerId_ = 0;
      this.close();
      this.adapter_.notifySelected({index: targetIndex});
    }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].SELECTED_TRIGGER_DELAY);
  }

  /** @private */
  autoPosition_() {
    if (!this.adapter_.hasAnchor()) {
      return;
    }

    // Defaults: open from the top left.
    let vertical = 'top';
    let horizontal = 'left';

    const anchor = this.adapter_.getAnchorDimensions();
    const windowDimensions = this.adapter_.getWindowDimensions();

    const topOverflow = anchor.top + this.dimensions_.height - windowDimensions.height;
    const bottomOverflow = this.dimensions_.height - anchor.bottom;
    const extendsBeyondTopBounds = topOverflow > 0;

    if (extendsBeyondTopBounds) {
      if (bottomOverflow < topOverflow) {
        vertical = 'bottom';
      }
    }

    const leftOverflow = anchor.left + this.dimensions_.width - windowDimensions.width;
    const rightOverflow = this.dimensions_.width - anchor.right;
    const extendsBeyondLeftBounds = leftOverflow > 0;
    const extendsBeyondRightBounds = rightOverflow > 0;

    if (this.adapter_.isRtl()) {
      // In RTL, we prefer to open from the right.
      horizontal = 'right';
      if (extendsBeyondRightBounds && leftOverflow < rightOverflow) {
        horizontal = 'left';
      }
    } else if (extendsBeyondLeftBounds && rightOverflow < leftOverflow) {
      horizontal = 'right';
    }

    const position = {
      [horizontal]: '0',
      [vertical]: '0',
    };

    this.adapter_.setTransformOrigin(`${vertical} ${horizontal}`);
    this.adapter_.setPosition(position);
  }


  /**
   * Open the menu.
   * @param {{focusIndex: ?number}=} options
   */
  open({focusIndex = null} = {}) {
    this.adapter_.saveFocus();
    this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
    this.animationRequestId_ = requestAnimationFrame(() => {
      this.dimensions_ = this.adapter_.getInnerDimensions();
      this.applyTransitionDelays_();
      this.autoPosition_();
      this.animateMenu_();
      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
      this.focusOnOpen_(focusIndex);
      this.adapter_.registerBodyClickHandler(this.documentClickHandler_);
    });
    this.isOpen_ = true;
  }

  /**
   * Closes the menu.
   * @param {Event=} evt
   */
  close(evt = null) {
    const targetIsDisabled = evt ?
      this.adapter_.getAttributeForEventTarget(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */].ARIA_DISABLED_ATTR) === 'true' :
      false;

    if (targetIsDisabled) {
      return;
    }

    this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
    this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
    requestAnimationFrame(() => {
      this.removeTransitionDelays_();
      this.animateMenu_();
      this.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
    });
    this.isOpen_ = false;
    this.adapter_.restoreFocus();
  }

  /** @return {boolean} */
  isOpen() {
    return this.isOpen_;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSimpleMenuFoundation;





/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Simple Menu. Provides an interface for managing
 * - classes
 * - dom
 * - focus
 * - position
 * - dimensions
 * - event handlers
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */
class MDCSimpleMenuAdapter {
  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /**
   * @param {string} className
   * @return {boolean}
   */
  hasClass(className) {}

  /** @return {boolean} */
  hasNecessaryDom() {}

  /**
   * @param {EventTarget} target
   * @param {string} attributeName
   * @return {string}
   */
  getAttributeForEventTarget(target, attributeName) {}

  /** @return {{ width: number, height: number }} */
  getInnerDimensions() {}

  /** @return {boolean} */
  hasAnchor() {}

  /** @return {{width: number, height: number, top: number, right: number, bottom: number, left: number}} */
  getAnchorDimensions() {}

  /** @return {{ width: number, height: number }} */
  getWindowDimensions() {}

  /**
   * @param {number} x
   * @param {number} y
   */
  setScale(x, y) {}

  /**
   * @param {number} x
   * @param {number} y
   */
  setInnerScale(x, y) {}

  /** @return {number} */
  getNumberOfItems() {}

  /**
   * @param {string} type
   * @param {function(!Event)} handler
   */
  registerInteractionHandler(type, handler) {}

  /**
   * @param {string} type
   * @param {function(!Event)} handler
   */
  deregisterInteractionHandler(type, handler) {}

  /** @param {function(!Event)} handler */
  registerBodyClickHandler(handler) {}

  /** @param {function(!Event)} handler */
  deregisterBodyClickHandler(handler) {}

  /**
   * @param {number} index
   * @return {{top: number, height: number}}
   */
  getYParamsForItemAtIndex(index) {}

  /**
   * @param {number} index
   * @param {string|null} value
   */
  setTransitionDelayForItemAtIndex(index, value) {}

  /**
   * @param {EventTarget} target
   * @return {number}
   */
  getIndexForEventTarget(target) {}

  /** @param {{index: number}} evtData */
  notifySelected(evtData) {}

  notifyCancel() {}

  saveFocus() {}

  restoreFocus() {}

  /** @return {boolean} */
  isFocused() {}

  focus() {}

  /** @return {number} */
  getFocusedItemIndex() /* number */ {}

  /** @param {number} index */
  focusItemAtIndex(index) {}

  /** @return {boolean} */
  isRtl() {}

  /** @param {string} origin */
  setTransformOrigin(origin) {}

  /** @param {{
  *   top: (string|undefined),
  *   right: (string|undefined),
  *   bottom: (string|undefined),
  *   left: (string|undefined)
  * }} position */
  setPosition(position) {}

  /** @return {number} */
  getAccurateTime() {}
}
/* unused harmony export default */



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @enum {string} */
const cssClasses = {
  ROOT: 'mdc-simple-menu',
  OPEN: 'mdc-simple-menu--open',
  ANIMATING: 'mdc-simple-menu--animating',
  TOP_RIGHT: 'mdc-simple-menu--open-from-top-right',
  BOTTOM_LEFT: 'mdc-simple-menu--open-from-bottom-left',
  BOTTOM_RIGHT: 'mdc-simple-menu--open-from-bottom-right',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


/** @enum {string} */
const strings = {
  ITEMS_SELECTOR: '.mdc-simple-menu__items',
  SELECTED_EVENT: 'MDCSimpleMenu:selected',
  CANCEL_EVENT: 'MDCSimpleMenu:cancel',
  ARIA_DISABLED_ATTR: 'aria-disabled',
};
/* harmony export (immutable) */ __webpack_exports__["c"] = strings;


/** @enum {number} */
const numbers = {
  // Amount of time to wait before triggering a selected event on the menu. Note that this time
  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
  // animate before closing the menu
  SELECTED_TRIGGER_DELAY: 50,
  // Total duration of the menu animation.
  TRANSITION_DURATION_MS: 300,
  // The menu starts its open animation with the X axis at this time value (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_X: 0.5,
  // The time value the menu waits until the animation starts on the Y axis (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_Y: 0.2,
  // The cubic bezier control points for the animation (cubic-bezier(0, 0, 0.2, 1)).
  TRANSITION_X1: 0,
  TRANSITION_Y1: 0,
  TRANSITION_X2: 0.2,
  TRANSITION_Y2: 1,
};
/* harmony export (immutable) */ __webpack_exports__["b"] = numbers;



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_menu__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(62);
/* unused harmony reexport MDCSelectFoundation */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








class MDCSelect extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCSelect(root);
  }

  get value() {
    return this.foundation_.getValue();
  }

  get options() {
    return this.menu_.items;
  }

  get selectedOptions() {
    return this.root_.querySelectorAll('[aria-selected]');
  }

  get selectedIndex() {
    return this.foundation_.getSelectedIndex();
  }

  set selectedIndex(selectedIndex) {
    this.foundation_.setSelectedIndex(selectedIndex);
  }

  get disabled() {
    return this.foundation_.isDisabled();
  }

  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  item(index) {
    return this.options[index] || null;
  }

  nameditem(key) {
    // NOTE: IE11 precludes us from using Array.prototype.find
    for (let i = 0, options = this.options, option; (option = options[i]); i++) {
      if (option.id === key || option.getAttribute('name') === key) {
        return option;
      }
    }
    return null;
  }

  initialize(menuFactory = (el) => new __WEBPACK_IMPORTED_MODULE_1__material_menu__["a" /* MDCSimpleMenu */](el)) {
    this.menuEl_ = this.root_.querySelector('.mdc-select__menu');
    this.menu_ = menuFactory(this.menuEl_);
    this.selectedText_ = this.root_.querySelector('.mdc-select__selected-text');
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      setAttr: (attr, value) => this.root_.setAttribute(attr, value),
      rmAttr: (attr, value) => this.root_.removeAttribute(attr, value),
      computeBoundingRect: () => this.root_.getBoundingClientRect(),
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      focus: () => this.root_.focus(),
      makeTabbable: () => {
        this.root_.tabIndex = 0;
      },
      makeUntabbable: () => {
        this.root_.tabIndex = -1;
      },
      getComputedStyleValue: (prop) => window.getComputedStyle(this.root_).getPropertyValue(prop),
      setStyle: (propertyName, value) => this.root_.style.setProperty(propertyName, value),
      create2dRenderingContext: () => document.createElement('canvas').getContext('2d'),
      setMenuElStyle: (propertyName, value) => this.menuEl_.style.setProperty(propertyName, value),
      setMenuElAttr: (attr, value) => this.menuEl_.setAttribute(attr, value),
      rmMenuElAttr: (attr) => this.menuEl_.removeAttribute(attr),
      getMenuElOffsetHeight: () => this.menuEl_.offsetHeight,
      openMenu: (focusIndex) => this.menu_.show({focusIndex}),
      isMenuOpen: () => this.menu_.open,
      setSelectedTextContent: (selectedTextContent) => {
        this.selectedText_.textContent = selectedTextContent;
      },
      getNumberOfOptions: () => this.options.length,
      getTextForOptionAtIndex: (index) => this.options[index].textContent,
      getValueForOptionAtIndex: (index) => this.options[index].id || this.options[index].textContent,
      setAttrForOptionAtIndex: (index, attr, value) => this.options[index].setAttribute(attr, value),
      rmAttrForOptionAtIndex: (index, attr) => this.options[index].removeAttribute(attr),
      getOffsetTopForOptionAtIndex: (index) => this.options[index].offsetTop,
      registerMenuInteractionHandler: (type, handler) => this.menu_.listen(type, handler),
      deregisterMenuInteractionHandler: (type, handler) => this.menu_.unlisten(type, handler),
      notifyChange: () => this.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.CHANGE_EVENT, this),
      getWindowInnerHeight: () => window.innerHeight,
    });
  }

  initialSyncWithDOM() {
    const selectedOption = this.selectedOptions[0];
    const idx = selectedOption ? this.options.indexOf(selectedOption) : -1;
    if (idx >= 0) {
      this.selectedIndex = idx;
    }

    if (this.root_.getAttribute('aria-disabled') === 'true') {
      this.disabled = true;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSelect;



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_menu__ = __webpack_require__(8);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





const OPENER_KEYS = [
  {key: 'ArrowUp', keyCode: 38, forType: 'keydown'},
  {key: 'ArrowDown', keyCode: 40, forType: 'keydown'},
  {key: 'Space', keyCode: 32, forType: 'keyup'},
];

class MDCSelectFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      setAttr: (/* attr: string, value: string */) => {},
      rmAttr: (/* attr: string */) => {},
      computeBoundingRect: () => /* {left: number, top: number} */ ({left: 0, top: 0}),
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      focus: () => {},
      makeTabbable: () => {},
      makeUntabbable: () => {},
      getComputedStyleValue: (/* propertyName: string */) => /* string */ '',
      setStyle: (/* propertyName: string, value: string */) => {},
      create2dRenderingContext: () => /* {font: string, measureText: (string) => {width: number}} */ ({
        font: '',
        measureText: () => ({width: 0}),
      }),
      setMenuElStyle: (/* propertyName: string, value: string */) => {},
      setMenuElAttr: (/* attr: string, value: string */) => {},
      rmMenuElAttr: (/* attr: string */) => {},
      getMenuElOffsetHeight: () => /* number */ 0,
      openMenu: (/* focusIndex: number */) => {},
      isMenuOpen: () => /* boolean */ false,
      setSelectedTextContent: (/* textContent: string */) => {},
      getNumberOfOptions: () => /* number */ 0,
      getTextForOptionAtIndex: (/* index: number */) => /* string */ '',
      getValueForOptionAtIndex: (/* index: number */) => /* string */ '',
      setAttrForOptionAtIndex: (/* index: number, attr: string, value: string */) => {},
      rmAttrForOptionAtIndex: (/* index: number, attr: string */) => {},
      getOffsetTopForOptionAtIndex: (/* index: number */) => /* number */ 0,
      registerMenuInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterMenuInteractionHandler: (/* type: string, handler: EventListener */) => {},
      notifyChange: () => {},
      getWindowInnerHeight: () => /* number */ 0,
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCSelectFoundation.defaultAdapter, adapter));
    this.ctx_ = null;
    this.selectedIndex_ = -1;
    this.disabled_ = false;
    this.displayHandler_ = (evt) => {
      evt.preventDefault();
      if (!this.adapter_.isMenuOpen()) {
        this.open_();
      }
    };
    this.displayViaKeyboardHandler_ = (evt) => this.handleDisplayViaKeyboard_(evt);
    this.selectionHandler_ = ({detail}) => {
      const {index} = detail;
      this.close_();
      if (index !== this.selectedIndex_) {
        this.setSelectedIndex(index);
        this.adapter_.notifyChange();
      }
    };
    this.cancelHandler_ = () => {
      this.close_();
    };
  }

  init() {
    this.ctx_ = this.adapter_.create2dRenderingContext();
    this.adapter_.registerInteractionHandler('click', this.displayHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.displayViaKeyboardHandler_);
    this.adapter_.registerInteractionHandler('keyup', this.displayViaKeyboardHandler_);
    this.adapter_.registerMenuInteractionHandler(
      __WEBPACK_IMPORTED_MODULE_2__material_menu__["b" /* MDCSimpleMenuFoundation */].strings.SELECTED_EVENT, this.selectionHandler_);
    this.adapter_.registerMenuInteractionHandler(
      __WEBPACK_IMPORTED_MODULE_2__material_menu__["b" /* MDCSimpleMenuFoundation */].strings.CANCEL_EVENT, this.cancelHandler_);
    this.resize();
  }

  destroy() {
    // Drop reference to context object to prevent potential leaks
    this.ctx_ = null;
    this.adapter_.deregisterInteractionHandler('click', this.displayHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.displayViaKeyboardHandler_);
    this.adapter_.deregisterInteractionHandler('keyup', this.displayViaKeyboardHandler_);
    this.adapter_.deregisterMenuInteractionHandler(
      __WEBPACK_IMPORTED_MODULE_2__material_menu__["b" /* MDCSimpleMenuFoundation */].strings.SELECTED_EVENT, this.selectionHandler_);
    this.adapter_.deregisterMenuInteractionHandler(
      __WEBPACK_IMPORTED_MODULE_2__material_menu__["b" /* MDCSimpleMenuFoundation */].strings.CANCEL_EVENT, this.cancelHandler_);
  }

  getValue() {
    return this.selectedIndex_ >= 0 ? this.adapter_.getValueForOptionAtIndex(this.selectedIndex_) : '';
  }

  getSelectedIndex() {
    return this.selectedIndex_;
  }

  setSelectedIndex(index) {
    const prevSelectedIndex = this.selectedIndex_;
    if (prevSelectedIndex >= 0) {
      this.adapter_.rmAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected');
    }

    this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfOptions() ? index : -1;
    let selectedTextContent = '';
    if (this.selectedIndex_ >= 0) {
      selectedTextContent = this.adapter_.getTextForOptionAtIndex(this.selectedIndex_).trim();
      this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
    }
    this.adapter_.setSelectedTextContent(selectedTextContent);
  }

  isDisabled() {
    return this.disabled_;
  }

  setDisabled(disabled) {
    const {DISABLED} = MDCSelectFoundation.cssClasses;
    this.disabled_ = disabled;
    if (this.disabled_) {
      this.adapter_.addClass(DISABLED);
      this.adapter_.setAttr('aria-disabled', 'true');
      this.adapter_.makeUntabbable();
    } else {
      this.adapter_.removeClass(DISABLED);
      this.adapter_.rmAttr('aria-disabled');
      this.adapter_.makeTabbable();
    }
  }

  resize() {
    const font = this.adapter_.getComputedStyleValue('font');
    const letterSpacing = parseFloat(this.adapter_.getComputedStyleValue('letter-spacing'));
    if (font) {
      this.ctx_.font = font;
    } else {
      const primaryFontFamily = this.adapter_.getComputedStyleValue('font-family').split(',')[0];
      const fontSize = this.adapter_.getComputedStyleValue('font-size');
      this.ctx_.font = `${fontSize} ${primaryFontFamily}`;
    }

    let maxTextLength = 0;
    for (let i = 0, l = this.adapter_.getNumberOfOptions(); i < l; i++) {
      const txt = this.adapter_.getTextForOptionAtIndex(i).trim();
      const {width} = this.ctx_.measureText(txt);
      const addedSpace = letterSpacing * txt.length;
      maxTextLength = Math.max(maxTextLength, Math.ceil(width + addedSpace));
    }
    this.adapter_.setStyle('width', `${maxTextLength}px`);
  }

  open_() {
    const {OPEN} = MDCSelectFoundation.cssClasses;
    const focusIndex = this.selectedIndex_ < 0 ? 0 : this.selectedIndex_;
    const {left, top, transformOrigin} = this.computeMenuStylesForOpenAtIndex_(focusIndex);

    this.adapter_.setMenuElStyle('left', left);
    this.adapter_.setMenuElStyle('top', top);
    this.adapter_.setMenuElStyle('transform-origin', transformOrigin);
    this.adapter_.addClass(OPEN);
    this.adapter_.openMenu(focusIndex);
  }

  computeMenuStylesForOpenAtIndex_(index) {
    const innerHeight = this.adapter_.getWindowInnerHeight();
    const {left, top} = this.adapter_.computeBoundingRect();

    this.adapter_.setMenuElAttr('aria-hidden', 'true');
    this.adapter_.setMenuElStyle('display', 'block');
    const menuHeight = this.adapter_.getMenuElOffsetHeight();
    const itemOffsetTop = this.adapter_.getOffsetTopForOptionAtIndex(index);
    this.adapter_.setMenuElStyle('display', '');
    this.adapter_.rmMenuElAttr('aria-hidden');

    let adjustedTop = top - itemOffsetTop;
    const adjustedHeight = menuHeight - itemOffsetTop;
    const overflowsTop = adjustedTop < 0;
    const overflowsBottom = adjustedTop + adjustedHeight > innerHeight;
    if (overflowsTop) {
      adjustedTop = 0;
    } else if (overflowsBottom) {
      adjustedTop = Math.max(0, adjustedTop - adjustedHeight);
    }

    return {
      left: `${left}px`,
      top: `${adjustedTop}px`,
      transformOrigin: `center ${itemOffsetTop}px`,
    };
  }

  close_() {
    const {OPEN} = MDCSelectFoundation.cssClasses;
    this.adapter_.removeClass(OPEN);
    this.adapter_.focus();
  }

  handleDisplayViaKeyboard_(evt) {
    // We use a hard-coded 2 instead of Event.AT_TARGET to avoid having to reference a browser
    // global.
    const EVENT_PHASE_AT_TARGET = 2;
    if (evt.eventPhase !== EVENT_PHASE_AT_TARGET) {
      return;
    }

    // Prevent pressing space down from scrolling the page
    const isSpaceDown = evt.type === 'keydown' && (evt.key === 'Space' || evt.keyCode === 32);
    if (isSpaceDown) {
      evt.preventDefault();
    }

    const isOpenerKey = OPENER_KEYS.some(({key, keyCode, forType}) => {
      return evt.type === forType && (evt.key === key || evt.keyCode === keyCode);
    });
    if (isOpenerKey) {
      this.displayHandler_(evt);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSelectFoundation;



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cssClasses = {
  ROOT: 'mdc-select',
  OPEN: 'mdc-select--open',
  DISABLED: 'mdc-select--disabled',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  CHANGE_EVENT: 'MDCSelect:change',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(65);
/* unused harmony reexport MDCSliderFoundation */
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








class MDCSlider extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  static attachTo(root) {
    return new MDCSlider(root);
  }

  get value() {
    return this.foundation_.getValue();
  }

  set value(value) {
    this.foundation_.setValue(value);
  }

  get min() {
    return this.foundation_.getMin();
  }

  set min(min) {
    this.foundation_.setMin(min);
  }

  get max() {
    return this.foundation_.getMax();
  }

  set max(max) {
    this.foundation_.setMax(max);
  }

  get step() {
    return this.foundation_.getStep();
  }

  set step(step) {
    this.foundation_.setStep(step);
  }

  get disabled() {
    return this.foundation_.isDisabled();
  }

  set disabled(disabled) {
    this.foundation_.setDisabled(disabled);
  }

  initialize() {
    this.thumbContainer_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].THUMB_CONTAINER_SELECTOR);
    this.track_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].TRACK_SELECTOR);
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      getAttribute: (name) => this.root_.getAttribute(name),
      setAttribute: (name, value) => this.root_.setAttribute(name, value),
      removeAttribute: (name) => this.root_.removeAttribute(name),
      computeBoundingRect: () => this.root_.getBoundingClientRect(),
      getTabIndex: () => this.root_.tabIndex,
      registerInteractionHandler: (type, handler) => {
        this.root_.addEventListener(type, handler);
      },
      deregisterInteractionHandler: (type, handler) => {
        this.root_.removeEventListener(type, handler);
      },
      registerThumbContainerInteractionHandler: (type, handler) => {
        this.thumbContainer_.addEventListener(type, handler);
      },
      deregisterThumbContainerInteractionHandler: (type, handler) => {
        this.thumbContainer_.removeEventListener(type, handler);
      },
      registerBodyInteractionHandler: (type, handler) => {
        document.body.addEventListener(type, handler);
      },
      deregisterBodyInteractionHandler: (type, handler) => {
        document.body.removeEventListener(type, handler);
      },
      registerResizeHandler: (handler) => {
        window.addEventListener('resize', handler);
      },
      deregisterResizeHandler: (handler) => {
        window.removeEventListener('resize', handler);
      },
      notifyInput: () => {
        this.emit(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].INPUT_EVENT, this);
      },
      notifyChange: () => {
        this.emit(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].CHANGE_EVENT, this);
      },
      setThumbContainerStyleProperty: (propertyName, value) => {
        this.thumbContainer_.style.setProperty(propertyName, value);
      },
      setTrackStyleProperty: (propertyName, value) => {
        this.track_.style.setProperty(propertyName, value);
      },
      isRTL: () => getComputedStyle(this.root_).direction === 'rtl',
    });
  }

  initialSyncWithDOM() {
    const origValueNow = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].ARIA_VALUENOW));
    this.min = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].ARIA_VALUEMIN)) || this.min;
    this.max = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].ARIA_VALUEMAX)) || this.max;
    this.step = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].STEP_DATA_ATTR)) || this.step;
    this.value = origValueNow || this.value;
    this.disabled = (
      this.root_.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].ARIA_DISABLED) &&
      this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */].ARIA_DISABLED) !== 'false'
    );
  }

  layout() {
    this.foundation_.layout();
  }

  stepUp(amount = (this.step || 1)) {
    this.value += amount;
  }

  stepDown(amount = (this.step || 1)) {
    this.value -= amount;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSlider;



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_animation__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_base_foundation__ = __webpack_require__(1);
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






const KEY_IDS = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
};

class MDCSliderFoundation extends __WEBPACK_IMPORTED_MODULE_2__material_base_foundation__["a" /* default */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */];
  }

  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* numbers */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      getAttribute: (/* name: string */) => /* string|null */ null,
      setAttribute: (/* name: string, value: string */) => {},
      removeAttribute: (/* name: string */) => {},
      computeBoundingRect: () => /* ClientRect */ ({
        top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0,
      }),
      getTabIndex: () => /* number */ 0,
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      registerThumbContainerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterThumbContainerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      registerBodyInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterBodyInteractionHandler: (/* type: string, handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      notifyInput: () => {},
      notifyChange: () => {},
      setThumbContainerStyleProperty: (/* propertyName: string, value: string */) => {},
      setTrackStyleProperty: (/* propertyName: string, value: string */) => {},
      isRTL: () => /* boolean */ false,
    };
  }

  constructor(adapter = {}) {
    super(Object.assign(MDCSliderFoundation.defaultAdapter, adapter));
    this.rect_ = null;
    // We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
    // because those could be valid tabindices set by the client code.
    this.savedTabIndex_ = NaN;
    this.off_ = false;
    this.active_ = false;
    this.inTransit_ = false;
    this.handlingThumbTargetEvt_ = false;
    this.min_ = 0;
    this.max_ = 100;
    this.step_ = 0;
    this.value_ = 0;
    this.disabled_ = false;
    this.preventFocusState_ = false;
    this.updateUIFrame_ = 0;
    this.thumbContainerPointerHandler_ = () => {
      this.handlingThumbTargetEvt_ = true;
    };
    this.mousedownHandler_ = this.createDownHandler_('mousemove', 'mouseup');
    this.pointerdownHandler_ = this.createDownHandler_('pointermove', 'pointerup');
    this.touchstartHandler_ = this.createDownHandler_(
      'touchmove', 'touchend', ({targetTouches}) => targetTouches[0].pageX);
    this.keydownHandler_ = (evt) => this.handleKeydown_(evt);
    this.focusHandler_ = () => this.handleFocus_();
    this.blurHandler_ = () => this.handleBlur_();
    this.resizeHandler_ = () => this.layout();
  }

  init() {
    this.adapter_.registerInteractionHandler('mousedown', this.mousedownHandler_);
    this.adapter_.registerInteractionHandler('pointerdown', this.pointerdownHandler_);
    this.adapter_.registerInteractionHandler('touchstart', this.touchstartHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    ['mousedown', 'pointerdown', 'touchstart'].forEach((evtName) => {
      this.adapter_.registerThumbContainerInteractionHandler(evtName, this.thumbContainerPointerHandler_);
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.layout();
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('mousedown', this.mousedownHandler_);
    this.adapter_.deregisterInteractionHandler('pointerdown', this.mousedownHandler_);
    this.adapter_.deregisterInteractionHandler('touchstart', this.mousedownHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
    ['mousedown', 'pointerdown', 'touchstart'].forEach((evtName) => {
      this.adapter_.deregisterThumbContainerInteractionHandler(evtName, this.thumbContainerPointerHandler_);
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  layout() {
    this.rect_ = this.adapter_.computeBoundingRect();
    this.updateUIForCurrentValue_();
  }

  getValue() {
    return this.value_;
  }

  setValue(value) {
    this.setValue_(value, false);
  }

  getMax() {
    return this.max_;
  }

  setMax(max) {
    if (max < this.min_) {
      throw new Error('Cannot set max to be less than the slider\'s minimum value');
    }
    this.max_ = max;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */].ARIA_VALUEMAX, String(this.max_));
  }

  getMin() {
    return this.min_;
  }

  setMin(min) {
    if (min > this.max_) {
      throw new Error('Cannot set min to be greater than the slider\'s maximum value');
    }
    this.min_ = min;
    this.setValue_(this.value_, false, true);
    this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */].ARIA_VALUEMIN, String(this.min_));
  }

  getStep() {
    return this.step_;
  }

  setStep(step) {
    if (step < 0) {
      throw new Error('Step cannot be set to a negative number');
    }
    this.step_ = step;
    this.setValue_(this.value_, false, true);
  }

  isDisabled() {
    return this.disabled_;
  }

  setDisabled(disabled) {
    this.disabled_ = disabled;
    this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].DISABLED, this.disabled_);
    if (this.disabled_) {
      this.savedTabIndex_ = this.adapter_.getTabIndex();
      this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */].ARIA_DISABLED, 'true');
      this.adapter_.removeAttribute('tabindex');
    } else {
      this.adapter_.removeAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */].ARIA_DISABLED);
      if (!isNaN(this.savedTabIndex_)) {
        this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
      }
    }
  }

  createDownHandler_(moveEvt, upEvt, getPageX = ({pageX}) => pageX) {
    const moveHandler = (evt) => {
      evt.preventDefault();
      this.setValueFromEvt_(evt, getPageX);
    };

    const upHandler = () => {
      this.setActive_(false);
      this.adapter_.deregisterBodyInteractionHandler(moveEvt, moveHandler);
      this.adapter_.deregisterBodyInteractionHandler(upEvt, upHandler);
      this.adapter_.notifyChange();
    };

    const downHandler = (evt) => {
      if (this.disabled_) {
        return;
      }

      this.preventFocusState_ = true;
      this.setInTransit_(!this.handlingThumbTargetEvt_);
      this.handlingThumbTargetEvt_ = false;

      this.setActive_(true);

      this.adapter_.registerBodyInteractionHandler(moveEvt, moveHandler);
      this.adapter_.registerBodyInteractionHandler(upEvt, upHandler);
      this.setValueFromEvt_(evt, getPageX);
    };

    return downHandler;
  }

  setValueFromEvt_(evt, getPageX) {
    const pageX = getPageX(evt);
    const value = this.computeValueFromPageX_(pageX);
    this.setValue_(value, true);
  }

  computeValueFromPageX_(pageX) {
    const {max_: max, min_: min} = this;
    const xPos = pageX - this.rect_.left;
    let pctComplete = xPos / this.rect_.width;
    if (this.adapter_.isRTL()) {
      pctComplete = 1 - pctComplete;
    }
    // Fit the percentage complete between the range [min,max]
    // by remapping from [0, 1] to [min, min+(max-min)].
    return min + pctComplete * (max - min);
  }

  handleKeydown_(evt) {
    const keyId = this.getKeyId_(evt);
    const value = this.getValueForKeyId_(keyId);
    if (isNaN(value)) {
      return;
    }

    // Prevent page from scrolling due to key presses that would normally scroll the page
    evt.preventDefault();
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].FOCUS);
    this.setValue_(value, true);
    this.adapter_.notifyChange();
  }

  getKeyId_(kbdEvt) {
    switch (kbdEvt.key || kbdEvt.keyCode) {
    case KEY_IDS.ARROW_LEFT:
    case 37:
      return KEY_IDS.ARROW_LEFT;
    case KEY_IDS.ARROW_RIGHT:
    case 39:
      return KEY_IDS.ARROW_RIGHT;
    case KEY_IDS.ARROW_UP:
    case 38:
      return KEY_IDS.ARROW_UP;
    case KEY_IDS.ARROW_DOWN:
    case 40:
      return KEY_IDS.ARROW_DOWN;
    case KEY_IDS.HOME:
    case 36:
      return KEY_IDS.HOME;
    case KEY_IDS.END:
    case 35:
      return KEY_IDS.END;
    case KEY_IDS.PAGE_UP:
    case 33:
      return KEY_IDS.PAGE_UP;
    case KEY_IDS.PAGE_DOWN:
    case 34:
      return KEY_IDS.PAGE_DOWN;
    default:
      // Doesn't matter
      return '';
    }
  }

  getValueForKeyId_(keyId) {
    const {max_: max, min_: min, step_: step} = this;
    let delta = step || (max - min) / 100;
    const valueNeedsToBeFlipped = this.adapter_.isRTL() && (
      keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT
    );
    if (valueNeedsToBeFlipped) {
      delta = -delta;
    }

    switch (keyId) {
    case KEY_IDS.ARROW_LEFT:
    case KEY_IDS.ARROW_DOWN:
      return this.value_ - delta;
    case KEY_IDS.ARROW_RIGHT:
    case KEY_IDS.ARROW_UP:
      return this.value_ + delta;
    case KEY_IDS.HOME:
      return this.min_;
    case KEY_IDS.END:
      return this.max_;
    case KEY_IDS.PAGE_UP:
      return this.value_ + delta * __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* numbers */].PAGE_FACTOR;
    case KEY_IDS.PAGE_DOWN:
      return this.value_ - delta * __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* numbers */].PAGE_FACTOR;
    default:
      return NaN;
    }
  }

  handleFocus_() {
    if (this.preventFocusState_) {
      return;
    }
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].FOCUS);
  }

  handleBlur_() {
    this.preventFocusState_ = false;
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].FOCUS);
  }

  setValue_(value, shouldFireInput, force = false) {
    if (value === this.value_ && !force) {
      return;
    }

    const {min_: min, max_: max} = this;
    const valueSetToBoundary = value === min || value === max;
    if (this.step_ && !valueSetToBoundary) {
      value = this.quantize_(value);
    }
    if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    this.value_ = value;
    this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* strings */].ARIA_VALUENOW, String(this.value_));
    this.updateUIForCurrentValue_();

    if (shouldFireInput) {
      this.adapter_.notifyInput();
    }
  }

  quantize_(value) {
    const numSteps = Math.round(value / this.step_);
    const quantizedVal = numSteps * this.step_;
    return quantizedVal;
  }

  updateUIForCurrentValue_() {
    const {max_: max, min_: min, value_: value} = this;
    const pctComplete = (value - min) / (max - min);
    let translatePx = pctComplete * this.rect_.width;
    if (this.adapter_.isRTL()) {
      translatePx = this.rect_.width - translatePx;
    }

    const transformProp = __WEBPACK_IMPORTED_MODULE_1__material_animation__["b" /* getCorrectPropertyName */](window, 'transform');
    const transitionendEvtName = __WEBPACK_IMPORTED_MODULE_1__material_animation__["a" /* getCorrectEventName */](window, 'transitionend');

    if (this.inTransit_) {
      const onTransitionEnd = () => {
        this.setInTransit_(false);
        this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
      };
      this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
    }

    this.updateUIFrame_ = requestAnimationFrame(() => {
      this.setOff_(pctComplete === 0);
      // NOTE(traviskaufman): It would be nice to use calc() here,
      // but IE cannot handle calcs in transforms correctly.
      // See: https://goo.gl/NC2itk
      // Also note that the -50% offset is used to center the slider thumb.
      this.adapter_.setThumbContainerStyleProperty(transformProp, `translateX(${translatePx}px) translateX(-50%)`);
      this.adapter_.setTrackStyleProperty(transformProp, `scaleX(${pctComplete})`);
    });
  }

  setOff_(off) {
    this.off_ = off;
    this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].OFF, this.off_);
  }

  setActive_(active) {
    this.active_ = active;
    this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].ACTIVE, this.active_);
  }

  setInTransit_(inTransit) {
    this.inTransit_ = inTransit;
    this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* cssClasses */].IN_TRANSIT, this.inTransit_);
  }

  toggleClass_(className, shouldBePresent) {
    if (shouldBePresent) {
      this.adapter_.addClass(className);
    } else {
      this.adapter_.removeClass(className);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCSliderFoundation;



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab__ = __webpack_require__(12);
/* unused harmony reexport MDCTabFoundation */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_bar__ = __webpack_require__(14);
/* unused harmony reexport MDCTabBarFoundation */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__tab_bar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_bar_scroller__ = __webpack_require__(70);
/* unused harmony reexport MDCTabBarScrollerFoundation */
/* unused harmony reexport MDCTabBarScroller */
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 
 
 


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(13);
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class MDCTabFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerInteractionHandler: (/* type: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
      getOffsetWidth: () => /* number */ 0,
      getOffsetLeft: () => /* number */ 0,
      notifySelected: () => {},
    };
  }

  constructor(adapter = {}) {
    super(Object.assign(MDCTabFoundation.defaultAdapter, adapter));

    this.computedWidth_ = 0;
    this.computedLeft_ = 0;
    this.isActive_ = false;
    this.preventDefaultOnClick_ = false;

    this.clickHandler_ = (evt) => {
      if (this.preventDefaultOnClick_) {
        evt.preventDefault();
      }
      this.adapter_.notifySelected();
    };

    this.keydownHandler_ = (evt) => {
      if (evt.key && evt.key === 'Enter' || evt.keyCode === 13) {
        this.adapter_.notifySelected();
      }
    };
  }

  init() {
    this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
  }

  destroy() {
    this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
  }

  getComputedWidth() {
    return this.computedWidth_;
  }

  getComputedLeft() {
    return this.computedLeft_;
  }

  isActive() {
    return this.isActive_;
  }

  setActive(isActive) {
    this.isActive_ = isActive;
    if (this.isActive_) {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTIVE);
    } else {
      this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACTIVE);
    }
  }

  preventsDefaultOnClick() {
    return this.preventDefaultOnClick_;
  }

  setPreventDefaultOnClick(preventDefaultOnClick) {
    this.preventDefaultOnClick_ = preventDefaultOnClick;
  }

  measureSelf() {
    this.computedWidth_ = this.adapter_.getOffsetWidth();
    this.computedLeft_ = this.adapter_.getOffsetLeft();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTabFoundation;



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_animation__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(69);
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






class MDCTabBarFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      bindOnMDCTabSelectedEvent: () => {},
      unbindOnMDCTabSelectedEvent: () => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      getOffsetWidth: () => /* number */ 0,
      setStyleForIndicator: (/* propertyName: string, value: string */) => {},
      getOffsetWidthForIndicator: () => /* number */ 0,
      notifyChange: (/* evtData: {activeTabIndex: number} */) => {},
      getNumberOfTabs: () => /* number */ 0,
      isTabActiveAtIndex: (/* index: number */) => /* boolean */ false,
      setTabActiveAtIndex: (/* index: number, isActive: true */) => {},
      isDefaultPreventedOnClickForTabAtIndex: (/* index: number */) => /* boolean */ false,
      setPreventDefaultOnClickForTabAtIndex: (/* index: number, preventDefaultOnClick: boolean */) => {},
      measureTabAtIndex: (/* index: number */) => {},
      getComputedWidthForTabAtIndex: (/* index: number */) => /* number */ 0,
      getComputedLeftForTabAtIndex: (/* index: number */) => /* number */ 0,
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCTabBarFoundation.defaultAdapter, adapter));

    this.isIndicatorShown_ = false;
    this.computedWidth_ = 0;
    this.computedLeft_ = 0;
    this.activeTabIndex_ = 0;
    this.layoutFrame_ = 0;
    this.resizeHandler_ = () => this.layout();
  }

  init() {
    this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].UPGRADED);
    this.adapter_.bindOnMDCTabSelectedEvent();
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    const activeTabIndex = this.findActiveTabIndex_();
    if (activeTabIndex >= 0) {
      this.activeTabIndex_ = activeTabIndex;
    }
    this.layout();
  }

  destroy() {
    this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].UPGRADED);
    this.adapter_.unbindOnMDCTabSelectedEvent();
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  layoutInternal_() {
    this.forEachTabIndex_((index) => this.adapter_.measureTabAtIndex(index));
    this.computedWidth_ = this.adapter_.getOffsetWidth();
    this.layoutIndicator_();
  }

  layoutIndicator_() {
    const isIndicatorFirstRender = !this.isIndicatorShown_;

    // Ensure that indicator appears in the right position immediately for correct first render.
    if (isIndicatorFirstRender) {
      this.adapter_.setStyleForIndicator('transition', 'none');
    }

    const translateAmtForActiveTabLeft = this.adapter_.getComputedLeftForTabAtIndex(this.activeTabIndex_);
    const scaleAmtForActiveTabWidth =
      this.adapter_.getComputedWidthForTabAtIndex(this.activeTabIndex_) / this.adapter_.getOffsetWidth();

    const transformValue = `translateX(${translateAmtForActiveTabLeft}px) scale(${scaleAmtForActiveTabWidth}, 1)`;
    this.adapter_.setStyleForIndicator(__WEBPACK_IMPORTED_MODULE_1__material_animation__["b" /* getCorrectPropertyName */](window, 'transform'), transformValue);

    if (isIndicatorFirstRender) {
      // Force layout so that transform styles to take effect.
      this.adapter_.getOffsetWidthForIndicator();
      this.adapter_.setStyleForIndicator('transition', '');
      this.adapter_.setStyleForIndicator('visibility', 'visible');
      this.isIndicatorShown_ = true;
    }
  }

  findActiveTabIndex_() {
    let activeTabIndex = -1;
    this.forEachTabIndex_((index) => {
      if (this.adapter_.isTabActiveAtIndex(index)) {
        activeTabIndex = index;
        return true;
      }
    });
    return activeTabIndex;
  }

  forEachTabIndex_(iterator) {
    const numTabs = this.adapter_.getNumberOfTabs();
    for (let index = 0; index < numTabs; index++) {
      const shouldBreak = iterator(index);
      if (shouldBreak) {
        break;
      }
    }
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  switchToTabAtIndex(index, shouldNotify) {
    if (index === this.activeTabIndex_) {
      return;
    }

    if (index < 0 || index >= this.adapter_.getNumberOfTabs()) {
      throw new Error(`Out of bounds index specified for tab: ${index}`);
    }

    const prevActiveTabIndex = this.activeTabIndex_;
    this.activeTabIndex_ = index;
    requestAnimationFrame(() => {
      if (prevActiveTabIndex >= 0) {
        this.adapter_.setTabActiveAtIndex(prevActiveTabIndex, false);
      }
      this.adapter_.setTabActiveAtIndex(this.activeTabIndex_, true);
      this.layoutIndicator_();
      if (shouldNotify) {
        this.adapter_.notifyChange({activeTabIndex: this.activeTabIndex_});
      }
    });
  }

  getActiveTabIndex() {
    return this.findActiveTabIndex_();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTabBarFoundation;



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  UPGRADED: 'mdc-tab-bar-upgraded',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  TAB_SELECTOR: '.mdc-tab',
  INDICATOR_SELECTOR: '.mdc-tab-bar__indicator',
  CHANGE_EVENT: 'MDCTabBar:change',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_animation__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(71);
/* unused harmony reexport MDCTabBarScrollerFoundation */
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









class MDCTabBarScroller extends __WEBPACK_IMPORTED_MODULE_1__material_base_component__["a" /* default */] {
  static attachTo(root) {
    return new MDCTabBarScroller(root);
  }

  get tabBar() {
    return this.tabBar_;
  }

  initialize(tabBarFactory = (root) => new __WEBPACK_IMPORTED_MODULE_2__tab_bar__["a" /* MDCTabBar */](root)) {
    this.scrollFrame_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.FRAME_SELECTOR);
    this.tabBarEl_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.TABS_SELECTOR);
    this.forwardIndicator_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.INDICATOR_FORWARD_SELECTOR);
    this.backIndicator_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */].strings.INDICATOR_BACK_SELECTOR);
    this.tabBar_ = tabBarFactory(this.tabBarEl_);
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a" /* default */]({
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      addClassToForwardIndicator: (className) => this.forwardIndicator_.classList.add(className),
      removeClassFromForwardIndicator: (className) => this.forwardIndicator_.classList.remove(className),
      addClassToBackIndicator: (className) => this.backIndicator_.classList.add(className),
      removeClassFromBackIndicator: (className) => this.backIndicator_.classList.remove(className),
      isRTL: () =>
        getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      registerBackIndicatorClickHandler: (handler) =>
        this.backIndicator_.addEventListener('click', handler),
      deregisterBackIndicatorClickHandler: (handler) =>
        this.backIndicator_.removeEventListener('click', handler),
      registerForwardIndicatorClickHandler: (handler) =>
        this.forwardIndicator_.addEventListener('click', handler),
      deregisterForwardIndicatorClickHandler: (handler) =>
        this.forwardIndicator_.removeEventListener('click', handler),
      registerCapturedInteractionHandler: (evt, handler) =>
        this.root_.addEventListener(evt, handler, true),
      deregisterCapturedInteractionHandler: (evt, handler) =>
        this.root_.removeEventListener(evt, handler, true),
      registerWindowResizeHandler: (handler) =>
        window.addEventListener('resize', handler),
      deregisterWindowResizeHandler: (handler) =>
        window.removeEventListener('resize', handler),
      getNumberOfTabs: () => this.tabBar.tabs.length,
      getComputedWidthForTabAtIndex: (index) => this.tabBar.tabs[index].computedWidth,
      getComputedLeftForTabAtIndex: (index) => this.tabBar.tabs[index].computedLeft,
      getOffsetWidthForScrollFrame: () => this.scrollFrame_.offsetWidth,
      getScrollLeftForScrollFrame: () => this.scrollFrame_.scrollLeft,
      setScrollLeftForScrollFrame: (scrollLeftAmount) => this.scrollFrame_.scrollLeft = scrollLeftAmount,
      getOffsetWidthForTabBar: () => this.tabBarEl_.offsetWidth,
      setTransformStyleForTabBar: (value) => {
        this.tabBarEl_.style.setProperty(__WEBPACK_IMPORTED_MODULE_0__material_animation__["b" /* getCorrectPropertyName */](window, 'transform'), value);
      },
      getOffsetLeftForEventTarget: (target) => target.offsetLeft,
      getOffsetWidthForEventTarget: (target) => target.offsetWidth,
    });
  }

  layout() {
    this.foundation_.layout();
  }
}
/* unused harmony export MDCTabBarScroller */



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(72);
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






class MDCTabBarScrollerFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
  }

  static get defaultAdapter() {
    return {
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      eventTargetHasClass: (/* target: EventTarget, className: string */) => /* boolean */ false,
      addClassToForwardIndicator: (/* className: string */) => {},
      removeClassFromForwardIndicator: (/* className: string */) => {},
      addClassToBackIndicator: (/* className: string */) => {},
      removeClassFromBackIndicator: (/* className: string */) => {},
      isRTL: () => /* boolean */ false,
      registerBackIndicatorClickHandler: (/* handler: EventListener */) => {},
      deregisterBackIndicatorClickHandler: (/* handler: EventListener */) => {},
      registerForwardIndicatorClickHandler: (/* handler: EventListener */) => {},
      deregisterForwardIndicatorClickHandler: (/* handler: EventListener */) => {},
      registerCapturedInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      deregisterCapturedInteractionHandler: (/* evt: string, handler: EventListener */) => {},
      registerWindowResizeHandler: (/* handler: EventListener */) => {},
      deregisterWindowResizeHandler: (/* handler: EventListener */) => {},
      getNumberOfTabs: () => /* number */ 0,
      getComputedWidthForTabAtIndex: () => /* number */ 0,
      getComputedLeftForTabAtIndex: () => /* number */ 0,
      getOffsetWidthForScrollFrame: () => /* number */ 0,
      getScrollLeftForScrollFrame: () => /* number */ 0,
      setScrollLeftForScrollFrame: (/* scrollLeftAmount: number */) => {},
      getOffsetWidthForTabBar: () => /* number */ 0,
      setTransformStyleForTabBar: (/* value: string */) => {},
      getOffsetLeftForEventTarget: (/* target: EventTarget */) => /* number */ 0,
      getOffsetWidthForEventTarget: (/* target: EventTarget */) => /* number */ 0,
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCTabBarScrollerFoundation.defaultAdapter, adapter));

    this.pointerDownRecognized_ = false;
    this.currentTranslateOffset_ = 0;
    this.focusedTarget_ = null;
    this.layoutFrame_ = 0;
    this.scrollFrameScrollLeft_ = 0;
    this.forwardIndicatorClickHandler_ = (evt) => this.scrollForward(evt);
    this.backIndicatorClickHandler_ = (evt) => this.scrollBack(evt);
    this.resizeHandler_ = () => this.layout();
    this.interactionHandler_ = (evt) => {
      if (evt.type == 'touchstart' || evt.type == 'mousedown') {
        this.pointerDownRecognized_ = true;
      }
      this.handlePossibleTabKeyboardFocus_(evt);

      if (evt.type == 'focus') {
        this.pointerDownRecognized_ = false;
      }
    };
  }

  init() {
    this.adapter_.registerBackIndicatorClickHandler(this.backIndicatorClickHandler_);
    this.adapter_.registerForwardIndicatorClickHandler(this.forwardIndicatorClickHandler_);
    this.adapter_.registerWindowResizeHandler(this.resizeHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach((evtType) => {
      this.adapter_.registerCapturedInteractionHandler(evtType, this.interactionHandler_);
    });
    this.layout();
  }

  destroy() {
    this.adapter_.deregisterBackIndicatorClickHandler(this.backIndicatorClickHandler_);
    this.adapter_.deregisterForwardIndicatorClickHandler(this.forwardIndicatorClickHandler_);
    this.adapter_.deregisterWindowResizeHandler(this.resizeHandler_);
    ['touchstart', 'mousedown', 'focus'].forEach((evtType) => {
      this.adapter_.deregisterCapturedInteractionHandler(evtType, this.interactionHandler_);
    });
  }

  scrollBack(evt = null) {
    if (evt) {
      evt.preventDefault();
    }

    let tabWidthAccumulator = 0;
    let scrollTargetIndex = 0;

    for (let i = this.adapter_.getNumberOfTabs() - 1; i > 0; i--) {
      const tabOffsetLeft = this.adapter_.getComputedLeftForTabAtIndex(i);
      const tabBarWidthLessTabOffsetLeft = this.adapter_.getOffsetWidthForTabBar() - tabOffsetLeft;

      let tabIsNotOccluded = tabOffsetLeft > this.currentTranslateOffset_;
      if (this.isRTL_()) {
        tabIsNotOccluded = tabBarWidthLessTabOffsetLeft > this.currentTranslateOffset_;
      }

      if (tabIsNotOccluded) {
        continue;
      }

      tabWidthAccumulator += this.adapter_.getComputedWidthForTabAtIndex(i);

      const scrollTargetDetermined = tabWidthAccumulator > this.adapter_.getOffsetWidthForScrollFrame();
      if (scrollTargetDetermined) {
        scrollTargetIndex = this.isRTL_() ? i + 1 : i;
        break;
      }
    }

    this.scrollToTabAtIndex_(scrollTargetIndex);
  }

  scrollForward(evt = null) {
    if (evt) {
      evt.preventDefault();
    }

    const scrollFrameOffsetWidth = this.adapter_.getOffsetWidthForScrollFrame() + this.currentTranslateOffset_;
    let scrollTargetIndex = 0;

    for (let i = 0; i < this.adapter_.getNumberOfTabs(); i++) {
      const tabOffsetLeftAndWidth =
        this.adapter_.getComputedLeftForTabAtIndex(i) + this.adapter_.getComputedWidthForTabAtIndex(i);
      let scrollTargetDetermined = tabOffsetLeftAndWidth > scrollFrameOffsetWidth;

      if (this.isRTL_()) {
        const frameOffsetAndTabWidth =
          scrollFrameOffsetWidth - this.adapter_.getComputedWidthForTabAtIndex(i);
        const tabOffsetLeftAndWidth =
          this.adapter_.getComputedLeftForTabAtIndex(i) + this.adapter_.getComputedWidthForTabAtIndex(i);
        const tabRightOffset =
          this.adapter_.getOffsetWidthForTabBar() - tabOffsetLeftAndWidth;

        scrollTargetDetermined = tabRightOffset > frameOffsetAndTabWidth;
      }

      if (scrollTargetDetermined) {
        scrollTargetIndex = i;
        break;
      }
    }

    this.scrollToTabAtIndex_(scrollTargetIndex);
  }

  layout() {
    cancelAnimationFrame(this.layoutFrame_);
    this.scrollFrameScrollLeft_ = this.adapter_.getScrollLeftForScrollFrame();
    this.layoutFrame_ = requestAnimationFrame(() => this.layout_());
  }

  isRTL_() {
    return this.adapter_.isRTL();
  }

  handlePossibleTabKeyboardFocus_(evt) {
    if (!this.adapter_.eventTargetHasClass(evt.target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].TAB) || this.pointerDownRecognized_) {
      return;
    }

    const resetAmt = this.isRTL_() ? this.scrollFrameScrollLeft_ : 0;
    this.adapter_.setScrollLeftForScrollFrame(resetAmt);

    this.focusedTarget_ = evt.target;
    const scrollFrameWidth = this.adapter_.getOffsetWidthForScrollFrame();
    const tabBarWidth = this.adapter_.getOffsetWidthForTabBar();
    const leftEdge = this.adapter_.getOffsetLeftForEventTarget(this.focusedTarget_);
    const rightEdge = leftEdge + this.adapter_.getOffsetWidthForEventTarget(this.focusedTarget_);

    let shouldScrollBack = rightEdge <= this.currentTranslateOffset_;
    let shouldScrollForward = rightEdge > this.currentTranslateOffset_ + scrollFrameWidth;

    if (this.isRTL_()) {
      const normalizedLeftOffset = tabBarWidth - leftEdge;
      shouldScrollBack = leftEdge >= tabBarWidth - this.currentTranslateOffset_;
      shouldScrollForward = normalizedLeftOffset > scrollFrameWidth + this.currentTranslateOffset_;
    }

    if (shouldScrollForward) {
      this.scrollForward();
    } else if (shouldScrollBack) {
      this.scrollBack();
    }

    this.pointerDownRecognized_ = false;
  }

  layout_() {
    const frameWidth = this.adapter_.getOffsetWidthForScrollFrame();
    const isOverflowing = this.adapter_.getOffsetWidthForTabBar() > frameWidth;

    if (!isOverflowing) {
      this.currentTranslateOffset_ = 0;
    }

    this.shiftFrame_();
    this.updateIndicatorEnabledStates_();
  }

  scrollToTabAtIndex_(index) {
    const scrollTargetOffsetLeft = this.adapter_.getComputedLeftForTabAtIndex(index);
    const scrollTargetOffsetWidth = this.adapter_.getComputedWidthForTabAtIndex(index);

    this.currentTranslateOffset_ =
      this.normalizeForRTL_(scrollTargetOffsetLeft, scrollTargetOffsetWidth);

    requestAnimationFrame(() => this.shiftFrame_());
  }

  normalizeForRTL_(left, width) {
    return this.isRTL_() ? this.adapter_.getOffsetWidthForTabBar() - (left + width) : left;
  }

  shiftFrame_() {
    const shiftAmount = this.isRTL_() ?
      this.currentTranslateOffset_ : -this.currentTranslateOffset_;

    this.adapter_.setTransformStyleForTabBar(`translateX(${shiftAmount}px)`);
    this.updateIndicatorEnabledStates_();
  }

  updateIndicatorEnabledStates_() {
    const {INDICATOR_ENABLED} = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    if (this.currentTranslateOffset_ === 0) {
      this.adapter_.removeClassFromBackIndicator(INDICATOR_ENABLED);
    } else {
      this.adapter_.addClassToBackIndicator(INDICATOR_ENABLED);
    }

    const remainingTabBarWidth = this.adapter_.getOffsetWidthForTabBar() - this.currentTranslateOffset_;
    if (remainingTabBarWidth > this.adapter_.getOffsetWidthForScrollFrame()) {
      this.adapter_.addClassToForwardIndicator(INDICATOR_ENABLED);
    } else {
      this.adapter_.removeClassFromForwardIndicator(INDICATOR_ENABLED);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCTabBarScrollerFoundation;



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  INDICATOR_FORWARD: 'mdc-tab-bar-scroller__indicator--forward',
  INDICATOR_BACK: 'mdc-tab-bar-scroller__indicator--back',
  INDICATOR_ENABLED: 'mdc-tab-bar-scroller__indicator--enabled',
  TAB: 'mdc-tab',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  FRAME_SELECTOR: '.mdc-tab-bar-scroller__scroll-frame',
  TABS_SELECTOR: '.mdc-tab-bar-scroller__scroll-frame__tabs',
  TAB_SELECTOR: '.mdc-tab',
  INDICATOR_FORWARD_SELECTOR: '.mdc-tab-bar-scroller__indicator--forward',
  INDICATOR_BACK_SELECTOR: '.mdc-tab-bar-scroller__indicator--back',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = strings;



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(76);
/* unused harmony reexport MDCToolbarFoundation */
/* unused harmony reexport util */
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









class MDCToolbar extends __WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */] {
  static attachTo(root) {
    return new MDCToolbar(root);
  }

  get firstRowElement_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.FIRST_ROW_SELECTOR);
  }

  get titleElement_() {
    return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.TITLE_SELECTOR);
  }

  set fixedAdjustElement(fixedAdjustElement) {
    this.fixedAdjustElement_ = fixedAdjustElement;
    this.foundation_.updateAdjustElementStyles();
  }

  get fixedAdjustElement() {
    return this.fixedAdjustElement_;
  }

  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
      hasClass: (className) => this.root_.classList.contains(className),
      addClass: (className) => this.root_.classList.add(className),
      removeClass: (className) => this.root_.classList.remove(className),
      registerScrollHandler: (handler) => window.addEventListener('scroll', handler, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* applyPassive */]()),
      deregisterScrollHandler: (handler) => window.removeEventListener('scroll', handler, __WEBPACK_IMPORTED_MODULE_2__util__["a" /* applyPassive */]()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getViewportWidth: () => window.innerWidth,
      getViewportScrollY: () => window.pageYOffset,
      getOffsetHeight: () => this.root_.offsetHeight,
      getFirstRowElementOffsetHeight: () => this.firstRowElement_.offsetHeight,
      notifyChange: (evtData) => this.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.CHANGE_EVENT, evtData),
      setStyle: (property, value) => this.root_.style.setProperty(property, value),
      setStyleForTitleElement: (property, value) => this.titleElement_.style.setProperty(property, value),
      setStyleForFlexibleRowElement: (property, value) => this.firstRowElement_.style.setProperty(property, value),
      setStyleForFixedAdjustElement: (property, value) => {
        if (this.fixedAdjustElement) {
          this.fixedAdjustElement.style.setProperty(property, value);
        }
      },
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCToolbar;



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(75);
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



class MDCToolbarFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* strings */];
  }

  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* numbers */];
  }

  static get defaultAdapter() {
    return {
      hasClass: (/* className: string */) => /* boolean */ false,
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerScrollHandler: (/* handler: EventListener */) => {},
      deregisterScrollHandler: (/* handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      getViewportWidth: () => /* number */ 0,
      getViewportScrollY: () => /* number */ 0,
      getOffsetHeight: () => /* number */ 0,
      getFirstRowElementOffsetHeight: () => /* number */ 0,
      notifyChange: (/* evtData: {flexibleExpansionRatio: number} */) => {},
      setStyle: (/* property: string, value: string */) => {},
      setStyleForTitleElement: (/* property: string, value: string */) => {},
      setStyleForFlexibleRowElement: (/* property: string, value: string */) => {},
      setStyleForFixedAdjustElement: (/* property: string, value: string */) => {},
    };
  }

  constructor(adapter) {
    super(Object.assign(MDCToolbarFoundation.defaultAdapter, adapter));
    this.resizeHandler_ = () => this.checkRowHeight_();
    this.scrollHandler_ = () => this.updateToolbarStyles_();
    this.checkRowHeightFrame_ = 0;
    this.scrollFrame_ = 0;
    this.executedLastChange_ = false;

    this.calculations_ = {
      toolbarRowHeight: 0,
      // Calculated Height ratio. We use ratio to calculate corresponding heights in resize event.
      toolbarRatio: 0,  // The ratio of toolbar height to row height
      flexibleExpansionRatio: 0, // The ratio of flexible space height to row height
      maxTranslateYRatio: 0, // The ratio of max toolbar move up distance to row height
      scrollThresholdRatio: 0, // The ratio of max scrollTop that we should listen to to row height
      // Derived Heights based on the above key ratios.
      toolbarHeight: 0,
      flexibleExpansionHeight: 0, // Flexible row minus toolbar height (derived)
      maxTranslateYDistance: 0, // When toolbar only fix last row (derived)
      scrollThreshold: 0,
    };
    // Toolbar fixed behavior
    // If toolbar is fixed
    this.fixed_ = false;
    // If fixed is targeted only at the last row
    this.fixedLastrow_ = false;
    // Toolbar flexible behavior
    // If the first row is flexible
    this.hasFlexibleRow_ = false;
    // If use the default behavior
    this.useFlexDefaultBehavior_ = false;
  }

  init() {
    this.fixed_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED);
    this.fixedLastrow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED_LASTROW) & this.fixed_;
    this.hasFlexibleRow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.TOOLBAR_ROW_FLEXIBLE);
    if (this.hasFlexibleRow_) {
      this.useFlexDefaultBehavior_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR);
    }
    this.initKeyRatio_();
    this.setKeyHeights_();
    this.adapter_.registerResizeHandler(this.resizeHandler_);
    this.adapter_.registerScrollHandler(this.scrollHandler_);
  }

  destroy() {
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    this.adapter_.deregisterScrollHandler(this.scrollHandler_);
  }

  updateAdjustElementStyles() {
    if (this.fixed_) {
      this.adapter_.setStyleForFixedAdjustElement('margin-top', `${this.calculations_.toolbarHeight}px`);
    }
  }

  getFlexibleExpansionRatio_(scrollTop) {
    // To prevent division by zero when there is no flexibleExpansionHeight
    const delta = 0.0001;
    return Math.max(0, 1 - scrollTop / (this.calculations_.flexibleExpansionHeight + delta));
  }

  checkRowHeight_() {
    cancelAnimationFrame(this.checkRowHeightFrame_);
    this.checkRowHeightFrame_ = requestAnimationFrame(() => this.setKeyHeights_());
  }

  setKeyHeights_() {
    const newToolbarRowHeight = this.getRowHeight_();
    if (newToolbarRowHeight !== this.calculations_.toolbarRowHeight) {
      this.calculations_.toolbarRowHeight = newToolbarRowHeight;
      this.calculations_.toolbarHeight = this.calculations_.toolbarRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.flexibleExpansionHeight =
        this.calculations_.flexibleExpansionRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.maxTranslateYDistance =
        this.calculations_.maxTranslateYRatio * this.calculations_.toolbarRowHeight;
      this.calculations_.scrollThreshold =
        this.calculations_.scrollThresholdRatio * this.calculations_.toolbarRowHeight;
      this.updateAdjustElementStyles();
      this.updateToolbarStyles_();
    }
  }

  updateToolbarStyles_() {
    cancelAnimationFrame(this.scrollFrame_);
    this.scrollFrame_ = requestAnimationFrame(() => {
      const scrollTop = this.adapter_.getViewportScrollY();
      const hasScrolledOutOfThreshold = this.scrolledOutOfThreshold_(scrollTop);

      if (hasScrolledOutOfThreshold && this.executedLastChange_) {
        return;
      }

      const flexibleExpansionRatio = this.getFlexibleExpansionRatio_(scrollTop);

      this.updateToolbarFlexibleState_(flexibleExpansionRatio);
      if (this.fixedLastrow_) {
        this.updateToolbarFixedState_(scrollTop);
      }
      if (this.hasFlexibleRow_) {
        this.updateFlexibleRowElementStyles_(flexibleExpansionRatio);
      }
      this.executedLastChange_ = hasScrolledOutOfThreshold;
      this.adapter_.notifyChange({flexibleExpansionRatio: flexibleExpansionRatio});
    });
  }

  scrolledOutOfThreshold_(scrollTop) {
    return scrollTop > this.calculations_.scrollThreshold;
  }

  initKeyRatio_() {
    const toolbarRowHeight = this.getRowHeight_();
    const firstRowMaxRatio = this.adapter_.getFirstRowElementOffsetHeight() / toolbarRowHeight;
    this.calculations_.toolbarRatio = this.adapter_.getOffsetHeight() / toolbarRowHeight;
    this.calculations_.flexibleExpansionRatio = firstRowMaxRatio - 1;
    this.calculations_.maxTranslateYRatio =
      this.fixedLastrow_ ? this.calculations_.toolbarRatio - firstRowMaxRatio : 0;
    this.calculations_.scrollThresholdRatio =
      (this.fixedLastrow_ ? this.calculations_.toolbarRatio : firstRowMaxRatio) - 1;
  }

  getRowHeight_() {
    const breakpoint = MDCToolbarFoundation.numbers.TOOLBAR_MOBILE_BREAKPOINT;
    return this.adapter_.getViewportWidth() < breakpoint ?
      MDCToolbarFoundation.numbers.TOOLBAR_ROW_MOBILE_HEIGHT : MDCToolbarFoundation.numbers.TOOLBAR_ROW_HEIGHT;
  }

  updateToolbarFlexibleState_(flexibleExpansionRatio) {
    this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
    this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
    if (flexibleExpansionRatio === 1) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
    } else if (flexibleExpansionRatio === 0) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
    }
  }

  updateToolbarFixedState_(scrollTop) {
    const translateDistance = Math.max(0, Math.min(
      scrollTop - this.calculations_.flexibleExpansionHeight,
      this.calculations_.maxTranslateYDistance));
    this.adapter_.setStyle('transform', `translateY(${-translateDistance}px)`);

    if (translateDistance === this.calculations_.maxTranslateYDistance) {
      this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
    } else {
      this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
    }
  }

  updateFlexibleRowElementStyles_(flexibleExpansionRatio) {
    if (this.fixed_) {
      const height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
      this.adapter_.setStyleForFlexibleRowElement('height',
        `${height + this.calculations_.toolbarRowHeight}px`);
    }
    if (this.useFlexDefaultBehavior_) {
      this.updateElementStylesDefaultBehavior_(flexibleExpansionRatio);
    }
  }

  updateElementStylesDefaultBehavior_(flexibleExpansionRatio) {
    const maxTitleSize = MDCToolbarFoundation.numbers.MAX_TITLE_SIZE;
    const minTitleSize = MDCToolbarFoundation.numbers.MIN_TITLE_SIZE;
    const currentTitleSize = (maxTitleSize - minTitleSize) * flexibleExpansionRatio + minTitleSize;

    this.adapter_.setStyleForTitleElement('font-size', `${currentTitleSize}rem`);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCToolbarFoundation;



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  FIXED: 'mdc-toolbar--fixed',
  FIXED_LASTROW: 'mdc-toolbar--fixed-lastrow-only',
  FIXED_AT_LAST_ROW: 'mdc-toolbar--fixed-at-last-row',
  TOOLBAR_ROW_FLEXIBLE: 'mdc-toolbar--flexible',
  FLEXIBLE_DEFAULT_BEHAVIOR: 'mdc-toolbar--flexible-default-behavior',
  FLEXIBLE_MAX: 'mdc-toolbar--flexible-space-maximized',
  FLEXIBLE_MIN: 'mdc-toolbar--flexible-space-minimized',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  TITLE_SELECTOR: '.mdc-toolbar__title',
  FIRST_ROW_SELECTOR: '.mdc-toolbar__row:first-child',
  CHANGE_EVENT: 'MDCToolbar:change',
};
/* harmony export (immutable) */ __webpack_exports__["c"] = strings;


const numbers = {
  MAX_TITLE_SIZE: 2.125,
  MIN_TITLE_SIZE: 1.25,
  TOOLBAR_ROW_HEIGHT: 64,
  TOOLBAR_ROW_MOBILE_HEIGHT: 56,
  TOOLBAR_MOBILE_BREAKPOINT: 600,
};
/* harmony export (immutable) */ __webpack_exports__["b"] = numbers;



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyPassive;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let supportsPassive_;

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mdcAutoInit;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const registry = Object.create(null);

const CONSOLE_WARN = console.warn.bind(console);

/**
 * Auto-initializes all mdc components on a page.
 */
function mdcAutoInit(root = document, warn = CONSOLE_WARN) {
  const nodes = root.querySelectorAll('[data-mdc-auto-init]');
  for (let i = 0, node; (node = nodes[i]); i++) {
    const ctorName = node.dataset.mdcAutoInit;
    if (!ctorName) {
      throw new Error('(mdc-auto-init) Constructor name must be given.');
    }

    const Ctor = registry[ctorName];
    if (typeof Ctor !== 'function') {
      throw new Error(
        `(mdc-auto-init) Could not find constructor in registry for ${ctorName}`);
    }

    if (node[ctorName]) {
      warn(`(mdc-auto-init) Component already initialized for ${node}. Skipping...`);
      continue;
    }

    // TODO: Should we make an eslint rule for an attachTo() static method?
    const component = Ctor.attachTo(node);
    Object.defineProperty(node, ctorName, {
      value: component,
      writable: false,
      enumerable: false,
      configurable: true,
    });
  }
}

mdcAutoInit.register = function(componentName, Ctor, warn = CONSOLE_WARN) {
  if (typeof Ctor !== 'function') {
    throw new Error(`(mdc-auto-init) Invalid Ctor value ${Ctor}. Expected function`);
  }
  if (registry[componentName]) {
    warn(
      `(mdc-auto-init) Overriding registration for ${componentName} with ${Ctor}. ` +
      `Was: ${registry[componentName]}`);
  }
  registry[componentName] = Ctor;
};

mdcAutoInit.deregister = function(componentName) {
  delete registry[componentName];
};

mdcAutoInit.deregisterAll = function() {
  Object.keys(registry).forEach(this.deregister, this);
};


/***/ })
/******/ ]);