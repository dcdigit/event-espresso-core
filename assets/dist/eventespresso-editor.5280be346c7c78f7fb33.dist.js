this["eejs"] = this["eejs"] || {}; this["eejs"]["editor"] =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/src/editor/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/editor/editor.css":
/*!**************************************!*\
  !*** ./assets/src/editor/editor.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-editor-div":"ee-editor-div","components-panel":"components-panel","espresso-editor-legend-div":"espresso-editor-legend-div","espresso-editor-legend-ul":"espresso-editor-legend-ul","espresso-editor":"espresso-editor","ee-form-row":"ee-form-row","components-panel__body":"components-panel__body","is-opened":"is-opened","ee-editor-event-dates-and-tickets":"ee-editor-event-dates-and-tickets","ee-metabox-heading":"ee-metabox-heading","dashicon":"dashicon","ee-editor-details-reg-url-link":"ee-editor-details-reg-url-link","components-modal__frame":"components-modal__frame","components-modal__content":"components-modal__content","components-modal__header-heading":"components-modal__header-heading","components-panel__body-title":"components-panel__body-title","rdtOpen":"rdtOpen","rdtPicker":"rdtPicker","rdtNext":"rdtNext","rdtPrev":"rdtPrev","rdtSwitch":"rdtSwitch","dow":"dow","rdtNew":"rdtNew","rdtOld":"rdtOld","rdtActive":"rdtActive","rdtToday":"rdtToday","time_picker_container":"time_picker_container","modal_container":"modal_container","pl-3":"pl-3","px-3":"px-3","pr-3":"pr-3"};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/editor-date-entity-actions-menu.js":
/*!**************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/actions-menu/editor-date-entity-actions-menu.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _menu_items_assign_tickets_menu_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-items/assign-tickets-menu-item */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/menu-items/assign-tickets-menu-item.js");
/* harmony import */ var _menu_items_date_entity_main_menu_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-items/date-entity-main-menu-item */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/menu-items/date-entity-main-menu-item.js");
/* harmony import */ var _menu_items_edit_date_details_menu_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-items/edit-date-details-menu-item */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/menu-items/edit-date-details-menu-item.js");
/* harmony import */ var _edit_form_date_entity_form_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-form/date-entity-form-modal */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-modal.js");
/* harmony import */ var _edit_form_use_event_date_editor_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../edit-form/use-event-date-editor-id */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-event-date-editor-id.js");



/**
 * External imports
 */




/**
 * Internal dependencies
 */








var EditorDateEntityActionsMenu = function EditorDateEntityActionsMenu(_ref) {
  var dateEntity = _ref.dateEntity;
  var editorId = Object(_edit_form_use_event_date_editor_id__WEBPACK_IMPORTED_MODULE_10__["default"])(dateEntity);

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      menuItems = _useState2[0],
      setMenuItems = _useState2[1];

  var _useEntityActionMenuI = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["useEntityActionMenuItems"])(),
      getActionsMenuForEntity = _useEntityActionMenuI.getActionsMenuForEntity,
      registerEntityActionsMenuItem = _useEntityActionMenuI.registerEntityActionsMenuItem;

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    registerEntityActionsMenuItem(dateEntity, 'main-menu', function () {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_menu_items_date_entity_main_menu_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: "main-menu-".concat(dateEntity.id),
        dateEntity: dateEntity
      });
    });
    registerEntityActionsMenuItem(dateEntity, 'edit-details', function () {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_menu_items_edit_date_details_menu_item__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: "edit-details-".concat(dateEntity.id),
        dateEntity: dateEntity
      });
    });
    registerEntityActionsMenuItem(dateEntity, 'assign-tickets', function () {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_menu_items_assign_tickets_menu_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: "assign-tickets-".concat(dateEntity.id),
        dateEntity: dateEntity
      });
    });
    setMenuItems(getActionsMenuForEntity(dateEntity));
  }, [dateEntity, getActionsMenuForEntity, registerEntityActionsMenuItem]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    id: "ee-editor-date-actions-menu-".concat(dateEntity.id),
    className: 'ee-editor-date-actions-menu'
  }, menuItems), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_edit_form_date_entity_form_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    editorId: editorId,
    dateEntity: dateEntity
  }));
};

EditorDateEntityActionsMenu.propTypes = {
  dateEntity: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__["ifValidDateEntity"])(EditorDateEntityActionsMenu));

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/index.js":
/*!************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/actions-menu/index.js ***!
  \************************************************************************************/
/*! exports provided: EditorDateEntityActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_date_entity_actions_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-date-entity-actions-menu */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/editor-date-entity-actions-menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityActionsMenu", function() { return _editor_date_entity_actions_menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/menu-items/assign-tickets-menu-item.js":
/*!******************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/actions-menu/menu-items/assign-tickets-menu-item.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ticket_assignments_manager_ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ticket-assignments-manager/ticket-assignments-manager-modal */ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager-modal.js");
/* harmony import */ var _ticket_assignments_manager_use_ticket_assignments_editor_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ticket-assignments-manager/use-ticket-assignments-editor-id */ "./assets/src/editor/events/ticket-assignments-manager/use-ticket-assignments-editor-id.js");


/**
 * External imports
 */





/**
 * Internal imports
 */



/**
 * @function
 * @param {Object} props
 * @return {Function} menu item for opening the Ticket Assignments Manager
 */

var AssignTicketsMenuItem = function AssignTicketsMenuItem(_ref) {
  var dateEntity = _ref.dateEntity;

  // get tickets that are assigned to this event date
  var _useEventDateTickets = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useEventDateTickets"])(dateEntity),
      tickets = _useEventDateTickets.tickets,
      ticketsLoaded = _useEventDateTickets.ticketsLoaded;

  var _useEventEditorTicket = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useEventEditorTickets"])(),
      allTickets = _useEventEditorTicket.tickets;

  var editorId = Object(_ticket_assignments_manager_use_ticket_assignments_editor_id__WEBPACK_IMPORTED_MODULE_7__["default"])(dateEntity, null, [], allTickets);
  var tooltip = tickets.length < 1 ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('warning! no assigned tickets - click to fix', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('assign tickets', 'event_espresso');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["IconMenuItem"], {
    index: 2,
    tooltip: tooltip,
    id: "view-tickets-date-".concat(dateEntity.id),
    htmlClass: "view-tickets-date",
    dashicon: "tickets-alt",
    onClick: Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["useOpenEditor"])(editorId),
    itemCount: ticketsLoaded ? tickets.length : null,
    disabled: !ticketsLoaded
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ticket_assignments_manager_ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    editorId: editorId,
    dateEntity: dateEntity,
    allTicketEntities: allTickets,
    editorTitle: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["_x"])('Ticket Assignments for: %1$s', 'Ticket Assignments for: date name & start date', 'event_espresso'), "".concat(dateEntity.name, " (").concat(dateEntity.start.toFormat('ddd MMM DD, YYYY'), ")"))
  }));
};

AssignTicketsMenuItem.propTypes = {
  dateEntity: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["ifValidDateEntity"])(AssignTicketsMenuItem));

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/menu-items/date-entity-main-menu-item.js":
/*!********************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/actions-menu/menu-items/date-entity-main-menu-item.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _edit_form_use_event_date_editor_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../edit-form/use-event-date-editor-id */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-event-date-editor-id.js");


/**
 * External imports
 */







var DateEntityMainMenuItem = function DateEntityMainMenuItem(_ref) {
  var dateEntity = _ref.dateEntity;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["DropDownMenu"], {
    tooltip: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('event date main menu', 'event_espresso'),
    htmlClass: "ee-editor-date-".concat(dateEntity.id),
    menuItems: [{
      title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('edit date', 'event_espresso'),
      icon: 'edit',
      onClick: Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["useOpenEditor"])(Object(_edit_form_use_event_date_editor_id__WEBPACK_IMPORTED_MODULE_6__["default"])(dateEntity))
    }, {
      title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('copy date', 'event_espresso'),
      icon: 'admin-page',
      onClick: Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useCopyDateEntity"])(dateEntity)
    }, {
      title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('trash date', 'event_espresso'),
      icon: 'trash',
      onClick: Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useTrashDateEntity"])(dateEntity)
    }]
  });
};

DateEntityMainMenuItem.propTypes = {
  dateEntity: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["ifValidDateEntity"])(DateEntityMainMenuItem));

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/menu-items/edit-date-details-menu-item.js":
/*!*********************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/actions-menu/menu-items/edit-date-details-menu-item.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _edit_form_use_event_date_editor_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../edit-form/use-event-date-editor-id */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-event-date-editor-id.js");


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



var EditDateDetailsMenuItem = function EditDateDetailsMenuItem(_ref) {
  var dateEntity = _ref.dateEntity;
  var editorId = Object(_edit_form_use_event_date_editor_id__WEBPACK_IMPORTED_MODULE_5__["default"])(dateEntity);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["IconMenuItem"], {
    index: 1,
    tooltip: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('edit date', 'event_espresso'),
    id: "edit-date-".concat(dateEntity.id),
    htmlClass: "edit-date",
    dashicon: "edit",
    onClick: Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["useOpenEditor"])(editorId)
  });
};

EditDateDetailsMenuItem.propTypes = {
  dateEntity: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["ifValidDateEntity"])(EditDateDetailsMenuItem));

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/style.css":
/*!*************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/actions-menu/style.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-editor-date-actions-menu":"ee-editor-date-actions-menu"};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/add-new-date-entity-button.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/add-new-date-entity-button.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _edit_form_date_entity_form_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-form/date-entity-form-modal */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-modal.js");
/* harmony import */ var _edit_form_use_event_date_editor_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-form/use-event-date-editor-id */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-event-date-editor-id.js");
/* harmony import */ var _ticket_assignments_manager_ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ticket-assignments-manager/ticket-assignments-manager-modal */ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager-modal.js");
/* harmony import */ var _ticket_assignments_manager_use_ticket_assignments_editor_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ticket-assignments-manager/use-ticket-assignments-editor-id */ "./assets/src/editor/events/ticket-assignments-manager/use-ticket-assignments-editor-id.js");



/**
 * External imports
 */






/**
 * Internal imports
 */






var AddNewDateEntityButton = function AddNewDateEntityButton() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      newDate = _useState4[0],
      cacheNewDate = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      toggleDateEditor = _useState6[0],
      setToggleDateEditor = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      toggleTamEditor = _useState8[0],
      setToggleTamEditor = _useState8[1]; // editor event and callback for generating a new event date


  var _useEventEditorEvent = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4__["useEventEditorEvent"])(),
      eventEntity = _useEventEditorEvent.eventEntity,
      eventEntityLoaded = _useEventEditorEvent.eventEntityLoaded;

  var createDateEntity = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4__["useCreateDateEntity"])(eventEntity, cacheNewDate); // date editor controls

  var dateEditorId = Object(_edit_form_use_event_date_editor_id__WEBPACK_IMPORTED_MODULE_8__["default"])(newDate, 'new-date');
  var openDateEditor = Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__["useOpenEditor"])(dateEditorId); // all tickets and ticket assignments editor controls

  var _useEventEditorTicket = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4__["useEventEditorTickets"])(),
      tickets = _useEventEditorTicket.tickets;

  var tamEditorId = Object(_ticket_assignments_manager_use_ticket_assignments_editor_id__WEBPACK_IMPORTED_MODULE_10__["default"])(newDate, null, [], tickets, 'new-date');
  var openTamEditor = Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__["useOpenEditor"])(tamEditorId); // using the button click event to create the new date entity
  // was causing issues with re-renders due to the async nature of things.
  // triggering everything after render makes the UI run more smoothly

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (loading) {
      setLoading(false);
      createDateEntity();
      setToggleDateEditor(true);
    }
  }); // because we have to wait for a valid date entity to be created,
  // we can't simply open the editor via the Add New Date click event,
  // so instead we toggle the following flag to indicate this

  if (toggleDateEditor) {
    openDateEditor();
  } // a similar timing scenario exists with the ticket assignments editor


  if (toggleTamEditor) {
    openTamEditor();
  } // once the date editor has been opened, we can flip that toggle to off


  var onDateEditorOpen = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setToggleDateEditor(false);
  }, []); // when the date editor closes, indicate that we want the tam editor opened

  var onDateEditorClose = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setToggleTamEditor(true);
  }, []); // then upon the tam editor opening set the toggle to off again

  var onTamEditorOpen = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setToggleTamEditor(false);
  }, []); // once the tam editor closes, unset the cached date,
  // which will get picked up by the main date editor list
  // and free up the cache for creating another new date

  var onTamEditorClose = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    cacheNewDate(null);
  }, []); // don't bother rendering the date form modal if a new date does not exist

  var dateEditor = newDate ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_edit_form_date_entity_form_modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    editorId: dateEditorId,
    dateEntity: newDate,
    onEditorOpen: onDateEditorOpen,
    onEditorClose: onDateEditorClose
  }) : null; // also don't render the tam editor modal if a new date does not exist

  var tamEditor = newDate ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_ticket_assignments_manager_ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    editorId: tamEditorId,
    dateEntity: newDate,
    allTicketEntities: tickets,
    editorTitle: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["_x"])('Ticket Assignments for: %1$s', 'Ticket Assignments for: date name & start date', 'event_espresso'), "".concat(newDate.name, " (").concat(newDate.start.toFormat('ddd MMM DD, YYYY'), ")")),
    onEditorOpen: onTamEditorOpen,
    onEditorClose: onTamEditorClose
  }) : null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["LoadingNotice"], {
    loading: loading,
    htmlClass: 'ee-loading-new-entity'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["EspressoButton"], {
    icon: 'calendar',
    buttonText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Add New Date', 'event_espresso'),
    onClick: function onClick(click) {
      Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__["cancelClickEvent"])(click, 'AddNewDateEntityButton');
      setLoading(true);
    },
    disabled: !eventEntityLoaded
  }), dateEditor, tamEditor);
};

/* harmony default export */ __webpack_exports__["default"] = (AddNewDateEntityButton);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-modal.js":
/*!**************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form-modal.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _date_entity_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-entity-form */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form.js");
/* harmony import */ var _use_date_entity_form_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-date-entity-form-schema */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-form-schema.js");




/**
 * External imports
 */




/**
 * Internal dependencies
 */



/**
 * @function
 * @param {Object} props
 * @member {string} editorId
 * @member {Object} dateEntity model object defining the Event Date
 * @member {Function} onEditorOpen
 * @member {Function} onEditorClose
 * @member {Object} otherProps
 * @return {Object} rendered form with editor modal and form handler
 */

var DateEntityFormModal = function DateEntityFormModal(_ref) {
  var editorId = _ref.editorId,
      dateEntity = _ref.dateEntity,
      onEditorOpen = _ref.onEditorOpen,
      onEditorClose = _ref.onEditorClose,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["editorId", "dateEntity", "onEditorOpen", "onEditorClose"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__["EditorModal"], {
    editorId: editorId,
    editorTitle: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Event Date Editor', 'event_espresso'),
    editorHtmlClass: 'ee-event-date-editor-modal',
    editorCloseButtonLabel: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('close event date editor', 'event_espresso'),
    onEditorOpen: onEditorOpen,
    onEditorClose: onEditorClose
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["FormHandler"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    FormComponent: _date_entity_form__WEBPACK_IMPORTED_MODULE_7__["default"],
    formData: Object(_use_date_entity_form_schema__WEBPACK_IMPORTED_MODULE_8__["default"])(dateEntity),
    dateEntity: dateEntity,
    loading: false
  }, otherProps)));
};

DateEntityFormModal.propTypes = {
  editorId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  dateEntity: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  onEditorOpen: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onEditorClose: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__["ifValidDateEntity"])(DateEntityFormModal));

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _use_date_entity_form_input_prefix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-date-entity-form-input-prefix */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-form-input-prefix.js");
/* harmony import */ var _use_date_entity_input_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-date-entity-input-config */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-input-config.js");
/* harmony import */ var _helpers_forms_use_edit_entity_form_inputs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../helpers/forms/use-edit-entity-form-inputs */ "./assets/src/editor/helpers/forms/use-edit-entity-form-inputs.js");




/**
 * External imports
 */




/**
 * Internal dependencies
 */




var FormSection = _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["twoColumnAdminFormLayout"].FormSection,
    FormWrapper = _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["twoColumnAdminFormLayout"].FormWrapper;
/**
 * @param {Object} props
 * @member {Object} dateEntity model object defining the Event Date
 * @member {Function} updateField callback for editing a field
 * @member {Function} touchField callback for marking field as changed
 * @member {Object} currentValues form data
 * @member {Object} initialValues initial form data
 * @return {Object} rendered form for editing date entity
 */

var DateEntityForm = function DateEntityForm(_ref) {
  var dateEntity = _ref.dateEntity,
      updateField = _ref.updateField,
      touchField = _ref.touchField,
      currentValues = _ref.currentValues,
      initialValues = _ref.initialValues,
      formProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["dateEntity", "updateField", "touchField", "currentValues", "initialValues"]);

  var prefix = Object(_use_date_entity_form_input_prefix__WEBPACK_IMPORTED_MODULE_7__["default"])(dateEntity);
  var inputConfig = Object(_use_date_entity_input_config__WEBPACK_IMPORTED_MODULE_8__["default"])({
    dateEntity: dateEntity,
    prefix: prefix,
    updateField: updateField,
    touchField: touchField
  }); // entity properties we don't want to be editable

  var exclude = ['eventId', 'sold', 'reserved', 'order', 'parent', 'deleted'];
  var formRows = Object(_helpers_forms_use_edit_entity_form_inputs__WEBPACK_IMPORTED_MODULE_9__["default"])(dateEntity, inputConfig, prefix, currentValues, exclude);
  var newObject = isNaN(parseInt(dateEntity.id, 10)); // edit forms for existing objects must have initial values

  return !(!newObject && Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(initialValues)) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(FormWrapper, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(FormSection, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    htmlId: "".concat(prefix, "-form-section"),
    showRequiredNotice: true,
    children: formRows
  }, formProps))) : null;
};

DateEntityForm.propTypes = {
  dateEntity: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  currentValues: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};
DateEntityForm.defaultProps = {
  currentValues: {},
  initialValues: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__["ifValidDateEntity"])(DateEntityForm));

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/index.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/index.js ***!
  \*********************************************************************************/
/*! exports provided: DateEntityForm, useDateEntityFormInputPrefix, useDateEntityFormSchema, useDateEntityInputConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_entity_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-entity-form */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/date-entity-form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityForm", function() { return _date_entity_form__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _use_date_entity_form_input_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-date-entity-form-input-prefix */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-form-input-prefix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDateEntityFormInputPrefix", function() { return _use_date_entity_form_input_prefix__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _use_date_entity_form_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-date-entity-form-schema */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-form-schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDateEntityFormSchema", function() { return _use_date_entity_form_schema__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _use_date_entity_input_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-date-entity-input-config */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-input-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDateEntityInputConfig", function() { return _use_date_entity_input_config__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-form-input-prefix.js":
/*!*************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-form-input-prefix.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


/**
 * returns Event Date Entity form prefix
 *
 * @function
 * @param {Object} dateEntity  EE Date object
 * @return {Object} rendered form
 */

var useDateEntityFormInputPrefix = function useDateEntityFormInputPrefix(dateEntity) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(dateEntity, 'datetime') ? "ee-event-date-".concat(dateEntity.id) : '';
  }, [dateEntity.id]);
};

/* harmony default export */ __webpack_exports__["default"] = (useDateEntityFormInputPrefix);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-form-schema.js":
/*!*******************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-form-schema.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_date_entity_form_input_prefix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-date-entity-form-input-prefix */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-form-input-prefix.js");


/**
 * External imports
 */


/**
 * Internal imports
 */


/**
 * returns an object mapping
 * Event Date Entity properties
 * to form prefixes
 *
 * @function
 * @param {Object} dateEntity  EE Date object
 * @return {Object} rendered form
 */

var useDateEntityFormSchema = function useDateEntityFormSchema(dateEntity) {
  var _ref;

  var prefix = Object(_use_date_entity_form_input_prefix__WEBPACK_IMPORTED_MODULE_3__["default"])(dateEntity);

  if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(dateEntity, 'datetime')) {
    return {};
  }

  return _ref = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-id"), dateEntity.id), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-eventId"), dateEntity.EVT_ID), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-name"), dateEntity.name || ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-description"), dateEntity.description || ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-start"), dateEntity.start.toISO()), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-end"), dateEntity.end.toISO()), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-regLimit"), Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_1__["parseInfinity"])(dateEntity.regLimit || -1, false, true)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-sold"), dateEntity.sold || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-reserved"), dateEntity.reserved || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-order"), dateEntity.order || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-parent"), dateEntity.parent || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-deleted"), dateEntity.deleted || false), _ref;
};

/* harmony default export */ __webpack_exports__["default"] = (useDateEntityFormSchema);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-input-config.js":
/*!********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-date-entity-input-config.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mutations_ticket_mutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mutations/ticket-mutations */ "./assets/src/editor/events/mutations/ticket-mutations.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External imports
 */








/**
 * Internal dependencies
 */


/**
 * input configuration for event date entity edit form
 *
 * @function
 * @param {Object} props
 * @member {Object} dateEntity
 * @member {string} prefix partial identifier for React Final Form data schema
 * @member {Function} updateField callback for editing a field
 * @member {Function} touchField callback for marking field as changed
 * @return {Array} memoized config array
 */

var useDateEntityInputConfig = function useDateEntityInputConfig(_ref) {
  var dateEntity = _ref.dateEntity,
      prefix = _ref.prefix,
      updateField = _ref.updateField,
      touchField = _ref.touchField;
  warning__WEBPACK_IMPORTED_MODULE_1___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_7__["isModelEntityOfModel"])(dateEntity, 'datetime'), 'Can not generate input config data because an invalid date entity was supplied.');
  var now = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["ServerDateTime"]();
  var dateInputFormProps = {
    entity: dateEntity,
    dateProps: {
      start: 'start',
      end: 'end'
    }
  };

  var _useEntityDateChangeL = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__["useEntityDateChangeListeners"])(_objectSpread({}, dateInputFormProps, {
    startDateFormKey: "".concat(prefix, "-start"),
    endDateFormKey: "".concat(prefix, "-end"),
    updateField: updateField,
    touchField: touchField
  })),
      startDateChangeListener = _useEntityDateChangeL.startDateChangeListener,
      endDateChangeListener = _useEntityDateChangeL.endDateChangeListener;

  var _useEntityDateChangeV = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__["useEntityDateChangeValidators"])(dateInputFormProps),
      startDateChangeValidator = _useEntityDateChangeV.startDateChangeValidator,
      endDateChangeValidator = _useEntityDateChangeV.endDateChangeValidator;

  var endDateIsAfterStartDate = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__["useEndDateAfterStartDateValidator"])(dateInputFormProps);
  var updateRelatedTickets = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__["useEventDateUpdateRelatedTickets"])(dateEntity); // useEntityDateChangeValidators use-entity-date-change-validators

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return [{
      id: 'id',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Date ID', 'event_espresso'),
      default: false,
      disabled: true,
      inputWidth: 3,
      required: true,
      validations: _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["validations"].required
    }, {
      id: 'eventId',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Event ID', 'event_espresso'),
      default: false,
      disabled: true,
      inputWidth: 3,
      required: true,
      validations: _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["validations"].required
    }, {
      id: 'name',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Date Label', 'event_espresso'),
      default: '',
      changeListener: function changeListener(value) {
        dateEntity.name = value;
      },
      minLength: 3
    }, {
      id: 'description',
      type: 'textarea',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Description', 'event_espresso'),
      default: '',
      changeListener: function changeListener(value) {
        dateEntity.description = value;
      }
    }, {
      id: 'start',
      type: 'datetime-local',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Start Date & Time', 'event_espresso'),
      default: now.plus(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Duration"].fromObject({
        days: 30
      })).toISO(false),
      // one month from now
      changeListener: startDateChangeListener,
      validate: startDateChangeValidator,
      validations: _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["validations"].required,
      required: true,
      inputWidth: 6
    }, {
      id: 'end',
      type: 'datetime-local',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('End Date & Time', 'event_espresso'),
      default: now.plus(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Duration"].fromObject({
        days: 60
      })).toISO(false),
      // two months from now
      changeListener: endDateChangeListener,
      validate: endDateChangeValidator,
      isInvalidDate: endDateIsAfterStartDate,
      validations: _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["validations"].required,
      required: true,
      inputWidth: 6
    }, {
      id: 'regLimit',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Capacity', 'event_espresso'),
      default: -1,
      changeListener: function changeListener(value) {
        var capacity = Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__["parseInfinity"])(value || -1, true, true);
        dateEntity.regLimit = capacity;
        var updateTicketQty = Object(_mutations_ticket_mutations__WEBPACK_IMPORTED_MODULE_9__["updateTicketQtyAfterCapacityChange"])(capacity);
        updateRelatedTickets([updateTicketQty]);
      },
      min: -1,
      inputWidth: 3,
      helpText: {
        regular: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('The maximum number of registrants that can attend the event at this particular date.%sSet to 0 to close registration or set to -1 for no limit.', 'event_espresso'), '\n')
      }
    }, {
      id: 'sold',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Sold Count', 'event_espresso'),
      disabled: true,
      default: 0,
      changeListener: function changeListener(value) {
        dateEntity.sold = parseInt(value || 0, 10);
      },
      min: 0,
      inputWidth: 3,
      helpText: {
        regular: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quantity of tickets that have been sold for this Date', 'event_espresso')
      }
    }, {
      id: 'reserved',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Reserved Count', 'event_espresso'),
      disabled: true,
      default: 0,
      changeListener: function changeListener(value) {
        dateEntity.reserved = parseInt(value || 0, 10);
      },
      min: 0,
      inputWidth: 3,
      helpText: {
        regular: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quantity of tickets reserved, but not yet fully purchased', 'event_espresso')
      }
    }, {
      id: 'order',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Display Order', 'event_espresso'),
      disabled: true,
      default: 0,
      changeListener: function changeListener(value) {
        dateEntity.order = parseInt(value || 0, 10);
      },
      inputWidth: 2
    }, {
      id: 'parent',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Parent Date', 'event_espresso'),
      disabled: true,
      default: 0,
      changeListener: function changeListener(value) {
        dateEntity.parent = parseInt(value || 0, 10);
      },
      inputWidth: 2
    }, {
      id: 'deleted',
      type: 'toggle',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Archived', 'event_espresso'),
      default: false,
      changeListener: function changeListener(value) {
        dateEntity.deleted = parseInt(value || 0, 10) === 1;
      },
      inputWidth: 2,
      helpText: {
        ifChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('this event date is archived', 'event_espresso'),
        ifNotChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('this event date is NOT archived', 'event_espresso')
      }
    }];
  }, [dateEntity.id, dateEntity.EVT_ID, dateEntity.name, dateEntity.description, dateEntity.start.toISO(), dateEntity.end.toISO(), dateEntity.regLimit, dateEntity.sold, dateEntity.reserved, dateEntity.order, dateEntity.parent, dateEntity.deleted]);
};

/* harmony default export */ __webpack_exports__["default"] = (useDateEntityInputConfig);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-event-date-editor-id.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/edit-form/use-event-date-editor-id.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

/**
 * @function
 * @param {Object} eventDate
 * @param {string} prefix
 * @return {string} editor id for event date
 */

var useEventDateEditorId = function useEventDateEditorId(eventDate) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var editorId = Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__["isModelEntityOfModel"])(eventDate, 'datetime') ? "event-date-editor-".concat(eventDate.id) : '';
  return prefix !== '' && editorId !== '' ? "".concat(prefix, "-").concat(editorId) : editorId;
};

/* harmony default export */ __webpack_exports__["default"] = (useEventDateEditorId);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/editor-date-entities-list.js":
/*!*******************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/editor-date-entities-list.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _add_new_date_entity_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-new-date-entity-button */ "./assets/src/editor/events/dates-and-times/editor-date/add-new-date-entity-button.js");
/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-bar */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/index.js");
/* harmony import */ var _grid_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid-view */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/index.js");
/* harmony import */ var _list_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-view */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/index.js");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ticket_assignments_manager_edit_all_ticket_assignments_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ticket-assignments-manager/edit-all-ticket-assignments-button */ "./assets/src/editor/events/ticket-assignments-manager/edit-all-ticket-assignments-button.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External imports
 */



/**
 * Internal dependencies
 */







var FormWrapper = _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["twoColumnAdminFormLayout"].FormWrapper,
    FormButtonsRow = _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["twoColumnAdminFormLayout"].FormButtonsRow;
/**
 * EditorDateEntitiesList
 *
 * displays a paginated list of event dates with a filter bar
 * for controlling how and what event dates are displayed
 *
 * @param {boolean} eventDatesLoaded
 * @param {Object} otherProps
 * @return {Object} rendered event dates list
 */

var EditorDateEntitiesList = function EditorDateEntitiesList(_ref) {
  var eventDatesLoaded = _ref.eventDatesLoaded,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["eventDatesLoaded"]);

  var listId = 'event-editor-dates-list';

  var _useEventEditorEventD = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_10__["useEventEditorEventDates"])(),
      eventDates = _useEventEditorEventD.eventDates;

  var _useDatesListFilterSt = Object(_filter_bar__WEBPACK_IMPORTED_MODULE_7__["useDatesListFilterState"])({
    listId: listId
  }),
      showDates = _useDatesListFilterSt.showDates,
      datesSortedBy = _useDatesListFilterSt.datesSortedBy,
      displayDates = _useDatesListFilterSt.displayDates,
      filteredDateIds = _useDatesListFilterSt.filteredDateIds;

  var _useEntityListFilterS = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["useEntityListFilterState"])({
    listId: listId
  }),
      view = _useEntityListFilterS.view,
      perPage = _useEntityListFilterS.perPage,
      entityListFilters = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_useEntityListFilterS, ["view", "perPage"]);

  var filteredDates = Object(_filter_bar__WEBPACK_IMPORTED_MODULE_7__["useFilteredDatesList"])(_objectSpread({
    listId: listId,
    showDates: showDates,
    datesSortedBy: datesSortedBy,
    displayDates: displayDates,
    dateEntities: eventDates
  }, entityListFilters));

  var _useEntityPagination = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["useEntityPagination"])(perPage, filteredDates),
      currentPage = _useEntityPagination.currentPage,
      setCurrentPage = _useEntityPagination.setCurrentPage,
      paginatedEntities = _useEntityPagination.paginatedEntities; // update the date ids in state whenever the filters change


  var _useDatesListFilterSt2 = Object(_filter_bar__WEBPACK_IMPORTED_MODULE_7__["useDatesListFilterStateSetters"])(listId),
      setFilteredDates = _useDatesListFilterSt2.setFilteredDates,
      setDatesSortedBy = _useDatesListFilterSt2.setDatesSortedBy;

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (Array.isArray(paginatedEntities)) {
      var eventDateIds = paginatedEntities.map(function (dateEntity) {
        return dateEntity.id;
      });
      setFilteredDates(eventDateIds);
    }
  }, [currentPage, perPage, showDates, datesSortedBy, eventDates.length]);
  var entityOrder = Array.isArray(filteredDateIds) ? filteredDateIds.join('-') : '';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(FormWrapper, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_filter_bar__WEBPACK_IMPORTED_MODULE_7__["DatesListFilterBar"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    listId: listId,
    view: view,
    perPage: perPage,
    showDates: showDates,
    datesSortedBy: datesSortedBy,
    displayDates: displayDates
  }, entityListFilters)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["EntityPagination"], {
    key: "dates-pagination-".concat(entityOrder),
    listId: listId,
    currentPage: currentPage,
    entitiesPerPage: perPage,
    totalCount: filteredDates.length,
    setCurrentPage: setCurrentPage
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["EntityList"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, otherProps, {
    key: "dates-list-".concat(entityOrder),
    entities: paginatedEntities,
    allEventDates: eventDates,
    EntityGridView: _grid_view__WEBPACK_IMPORTED_MODULE_8__["EditorDateEntitiesGridView"],
    EntityListView: _list_view__WEBPACK_IMPORTED_MODULE_9__["EditorDateEntitiesListView"],
    view: view,
    showDate: displayDates,
    setEntityIds: setFilteredDates,
    setSortBy: setDatesSortedBy,
    loading: !eventDatesLoaded,
    loadingNotice: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["_x"])('loading event dates%s', 'loading event dates...', 'event_espresso'), String.fromCharCode(8230)),
    noResultsText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('no results found (try changing filters)', 'event_espresso')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(FormButtonsRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_add_new_date_entity_button__WEBPACK_IMPORTED_MODULE_6__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_ticket_assignments_manager_edit_all_ticket_assignments_button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    eventDates: paginatedEntities
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EditorDateEntitiesList);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/event-date-registrations-link.js":
/*!***********************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/event-date-registrations-link.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);


/**
 * External imports
 */







var ADMIN_ROUTES = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_4__["routes"].ADMIN_ROUTES,
    ADMIN_ROUTE_ACTION_DEFAULT = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_4__["routes"].ADMIN_ROUTE_ACTION_DEFAULT,
    getAdminUrl = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_4__["routes"].getAdminUrl;
/**
 * returns a rendered Dashicon wrapped in an HTML <a> tag that links to
 * the registrations admin list table filtered for the provided eventDate
 *
 * @param {BaseEntity} dateEntity    The date object.
 * @return {Object} rendered link to registrations list table for datetime
 */

var EventDateRegistrationsLink = function EventDateRegistrationsLink(_ref) {
  var dateEntity = _ref.dateEntity;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var regListUrl = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__["addQueryArgs"])(getAdminUrl(ADMIN_ROUTES.REGISTRATIONS, ADMIN_ROUTE_ACTION_DEFAULT), {
      event_id: dateEntity.evtId,
      datetime_id: dateEntity.id,
      return: 'edit'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      text: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('view registrations for this date.', 'event_espresso')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: regListUrl,
      className: 'ee-editor-details-reg-url-link',
      target: '_blank',
      rel: 'noopener norefferer'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
      icon: "groups",
      size: 24
    })));
  }, [dateEntity.evtId, dateEntity.id]);
};

EventDateRegistrationsLink.propTypes = {
  dateEntity: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__["ifValidDateEntity"])(EventDateRegistrationsLink));

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/event-date-venue-edit-link.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/event-date-venue-edit-link.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);


/**
 * External imports
 */








var ADMIN_ROUTES = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3__["routes"].ADMIN_ROUTES,
    ADMIN_ROUTE_ACTIONS = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3__["routes"].ADMIN_ROUTE_ACTIONS,
    getAdminUrl = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_3__["routes"].getAdminUrl;
/**
 * returns a rendered Dashicon wrapped in an HTML <a> tag that links to
 * the registrations admin list table filtered for the provided eventDate
 *
 * @param {BaseEntity} eventDate    The date object.
 * @param {boolean} showVenue
 * @param {string} wrapperElement   html element tag to wrap link with
 * @return {Object} rendered link to registrations list table for datetime
 */

var EventDateVenueEditLink = function EventDateVenueEditLink(_ref) {
  var eventDate = _ref.eventDate,
      showVenue = _ref.showVenue,
      wrapperElement = _ref.wrapperElement;

  var _useEventForEventDate = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__["useEventForEventDate"])(eventDate),
      eventEntity = _useEventForEventDate.eventEntity;

  var _useEventVenue = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__["useEventVenue"])(eventEntity),
      venue = _useEventVenue.venue;

  var venueId = 0;
  var venueName = '';

  if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_6__["isModelEntityOfModel"])(venue, 'venue')) {
    venueId = venue.id;
    venueName = venue.name;
  }

  var WrapperElement = wrapperElement ? wrapperElement : 'h3';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (venueId === 0 || !showVenue) {
      return '';
    }

    var editVenueUrl = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__["addQueryArgs"])(getAdminUrl(ADMIN_ROUTES.VENUES, ADMIN_ROUTE_ACTIONS.VENUES.EDIT), {
      post: venueId,
      return: 'edit'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrapperElement, {
      className: "ee-editor-date-location-div"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      text: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('venue editor opens in a new window', 'event_espresso')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: editVenueUrl,
      className: "ee-editor-date-edit-venue-link",
      target: "_blank",
      rel: "noopener noreferrer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
      icon: "admin-home",
      size: 16
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "ee-editor-date-venue-name-span"
    }, venueName), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
      icon: "external",
      size: 14
    }))));
  }, [venueId, venueName, showVenue, wrapperElement]);
};

EventDateVenueEditLink.propTypes = {
  eventDate: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  showVenue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  wrapperElement: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
EventDateVenueEditLink.defaultProps = {
  showVenue: false,
  wrapperElement: 'h3'
};
/* harmony default export */ __webpack_exports__["default"] = (EventDateVenueEditLink);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/controls/dates-sorted-by-control.js":
/*!*************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/controls/dates-sorted-by-control.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External imports
 */




/**
 * filter for controlling the sorting of a list of Event Dates
 *
 * @param {string} datesSortedBy
 * @param {Function} setDatesSortedBy
 * @return {Object} rendered control
 */

var DatesSortedByControl = function DatesSortedByControl(_ref) {
  var datesSortedBy = _ref.datesSortedBy,
      setDatesSortedBy = _ref.setDatesSortedBy;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('sort', 'event_espresso'),
      className: "espresso-date-list-filter-bar-order-select",
      value: datesSortedBy,
      options: [{
        value: 'chronologically',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('chronologically', 'event_espresso')
      }, {
        value: 'by-name',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('by date name', 'event_espresso')
      }, {
        value: 'by-id',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('by date ID', 'event_espresso')
      }, {
        value: 'by-order',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('by custom order', 'event_espresso')
      }],
      onChange: setDatesSortedBy
    });
  }, [datesSortedBy, setDatesSortedBy]);
};

DatesSortedByControl.propTypes = {
  datesSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setDatesSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DatesSortedByControl);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/controls/display-dates-control.js":
/*!***********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/controls/display-dates-control.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External imports
 */




/**
 * filter for controlling which dates display in a list of Event Dates
 *
 * @param {string} displayDates
 * @param {Function} setDisplayDates
 * @return {Object} rendered control
 */

var DisplayDatesControl = function DisplayDatesControl(_ref) {
  var displayDates = _ref.displayDates,
      setDisplayDates = _ref.setDisplayDates;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('display', 'event_espresso'),
      className: "espresso-date-list-filter-bar-display-select",
      value: displayDates,
      options: [{
        value: 'start',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('start dates only', 'event_espresso')
      }, {
        value: 'end',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('end dates only', 'event_espresso')
      }, {
        value: 'both',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('start and end dates', 'event_espresso')
      }],
      onChange: setDisplayDates
    });
  }, [displayDates, setDisplayDates]);
};

DisplayDatesControl.propTypes = {
  displayDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setDisplayDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayDatesControl);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/controls/show-dates-control.js":
/*!********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/controls/show-dates-control.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External imports
 */




/**
 * filter for controlling which dates display in a list of Event Dates
 *
 * @param {string} showDates
 * @param {Function} setShowDates
 * @return {Object} rendered control
 */

var ShowDatesControl = function ShowDatesControl(_ref) {
  var showDates = _ref.showDates,
      setShowDates = _ref.setShowDates;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('show', 'event_espresso'),
      className: "espresso-date-list-filter-bar-show-select",
      value: showDates,
      options: [{
        value: 'all',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('all dates', 'event_espresso')
      }, {
        value: 'active-upcoming',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('all active and upcoming', 'event_espresso')
      }, {
        value: 'active-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('active dates only', 'event_espresso')
      }, {
        value: 'upcoming-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('upcoming dates only', 'event_espresso')
      }, {
        value: 'next-active-upcoming-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('next active or upcoming only', 'event_espresso')
      }, {
        value: 'sold-out-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('sold out dates only', 'event_espresso')
      }, {
        value: 'above-90-capacity',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('dates above 90% capacity', 'event_espresso')
      }, {
        value: 'above-75-capacity',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('dates above 75% capacity', 'event_espresso')
      }, {
        value: 'above-50-capacity',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('dates above 50% capacity', 'event_espresso')
      }, {
        value: 'below-50-capacity',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('dates below 50% capacity', 'event_espresso')
      }, {
        value: 'recently-expired-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('recently expired dates', 'event_espresso')
      }, {
        value: 'expired-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('all expired dates', 'event_espresso')
      }, {
        value: 'trashed-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('trashed dates only', 'event_espresso')
      }],
      onChange: setShowDates
    });
  }, [showDates, setShowDates]);
};

ShowDatesControl.propTypes = {
  showDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setShowDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ShowDatesControl);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/date-entities-list-filter-utils.js":
/*!************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/date-entities-list-filter-utils.js ***!
  \************************************************************************************************************/
/*! exports provided: filterDateEntities, sortDateEntitiesList, searchDateEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDateEntities", function() { return filterDateEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDateEntitiesList", function() { return sortDateEntitiesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchDateEntities", function() { return searchDateEntities; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



/**
 * filterDateEntities
 * reduces dateEntities array based on value of the "showDates" filter
 *
 * @param {Array} dateEntities    original dateEntities array
 * @param {string} showDates    value for the "showDates" filter
 * @return {Array}         filtered dateEntities array
 */

var filterDateEntities = function filterDateEntities(dateEntities) {
  var showDates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'active-upcoming';
  dateEntities = sortDateEntitiesList(dateEntities);

  switch (showDates) {
    case 'all':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity);
      });

    case 'active-upcoming':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isActive(dateEntity) || _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isUpcoming(dateEntity);
      });

    case 'active-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isActive(dateEntity);
      });

    case 'upcoming-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isUpcoming(dateEntity);
      });

    case 'next-active-upcoming-only':
      dateEntities = filterDateEntities(dateEntities);
      return [Object(lodash__WEBPACK_IMPORTED_MODULE_0__["first"])(dateEntities)];

    case 'sold-out-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity) && (validStatus(dateEntity) && _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isSoldOut(dateEntity) || capacityAtOrAbove(dateEntity, 100));
      });

    case 'above-90-capacity':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity) && capacityAtOrAbove(dateEntity, 90);
      });

    case 'above-75-capacity':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity) && capacityAtOrAbove(dateEntity, 75);
      });

    case 'above-50-capacity':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity) && capacityAtOrAbove(dateEntity, 50);
      });

    case 'below-50-capacity':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity) && capacityBelow(dateEntity, 50);
      });

    case 'recently-expired-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isRecentlyExpired(dateEntity) && !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity);
      });

    case 'expired-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isExpired(dateEntity) && !_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity);
      });

    case 'trashed-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed(dateEntity);
      });
  }

  return dateEntities;
};
/**
 * sortDateEntitiesList
 * reduces dateEntities array based on value of the "datesSortedBy" filter
 *
 * @param {Array} dateEntities    original dateEntities array
 * @param {string} sort   value for the "datesSortedBy" filter
 * @return {Array}         filtered dateEntities array
 */

var sortDateEntitiesList = function sortDateEntitiesList(dateEntities) {
  var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'chronologically';
  dateEntities = dateEntities || [];

  switch (sort) {
    case 'chronologically':
      dateEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(dateEntities, [function (dateEntity) {
        return _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__["DateTime"].isValid(dateEntity.start) ? dateEntity.start.toMillis() : 0;
      }, 'name', 'id']);
      break;

    case 'by-name':
      dateEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(dateEntities, ['name']);
      break;

    case 'by-id':
      dateEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(dateEntities, ['id']);
      break;

    case 'by-order':
      dateEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(dateEntities, ['order']);
      break;
  }

  return dateEntities;
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @param {number} capacity
 * @return {boolean} true if sold/regLimit >= capacity
 */

var capacityAtOrAbove = function capacityAtOrAbove(dateEntity, capacity) {
  return validSold(dateEntity) && validFiniteReglimit(dateEntity) && parseInt(dateEntity.sold, 10) / parseInt(dateEntity.regLimit, 10) >= capacity / 100;
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @param {number} capacity
 * @return {boolean} true if sold/regLimit less than than capacity
 */


var capacityBelow = function capacityBelow(dateEntity, capacity) {
  return validInfiniteReglimit(dateEntity) || validSold(dateEntity) && validFiniteReglimit(dateEntity) && parseInt(dateEntity.sold, 10) / parseInt(dateEntity.regLimit, 10) < capacity / 100;
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @return {boolean} true if regLimit property is valid
 */


var validStatus = function validStatus(dateEntity) {
  return typeof dateEntity.status === 'string';
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @return {boolean} true if regLimit property is valid
 */


var validReglimit = function validReglimit(dateEntity) {
  return typeof dateEntity.regLimit === 'string' || typeof dateEntity.regLimit === 'number';
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @return {boolean} true if regLimit property is valid and NOT infinite
 */


var validFiniteReglimit = function validFiniteReglimit(dateEntity) {
  return validReglimit(dateEntity) && dateEntity.regLimit !== 'INF' && dateEntity.regLimit !== Infinity;
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @return {boolean} true if regLimit property is valid and unlimited
 */


var validInfiniteReglimit = function validInfiniteReglimit(dateEntity) {
  return validReglimit(dateEntity) && (dateEntity.regLimit === 'INF' || dateEntity.regLimit === Infinity);
};
/**
 * @param {Object} dateEntity    event dateEntity object
 * @return {boolean} true if regLimit property is valid
 */


var validSold = function validSold(dateEntity) {
  return typeof dateEntity.sold === 'string' || typeof dateEntity.sold === 'number';
};
/**
 * searchDateEntities
 * reduces dateEntities array based on value of the "searchDateName" filter
 *
 * @param {Array} dateEntities    		original dateEntities array
 * @param {string} searchText 	value for the "searchDateName" filter
 * @return {Array}         		filtered dateEntities array
 */


var searchDateEntities = function searchDateEntities(dateEntities) {
  var searchText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  dateEntities = searchText !== '' ? dateEntities.filter(function (dateEntity) {
    return dateEntity.name.toLowerCase().search(searchText.toLowerCase()) !== -1;
  }) : dateEntities;
  return dateEntities;
};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/dates-list-entity-filters.js":
/*!******************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/dates-list-entity-filters.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_dates_list_filter_state_setters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-dates-list-filter-state-setters */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/use-dates-list-filter-state-setters.js");
/* harmony import */ var _controls_display_dates_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/display-dates-control */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/controls/display-dates-control.js");
/* harmony import */ var _controls_dates_sorted_by_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/dates-sorted-by-control */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/controls/dates-sorted-by-control.js");
/* harmony import */ var _controls_show_dates_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/show-dates-control */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/controls/show-dates-control.js");


/**
 * External imports
 */

/**
 * Internal imports
 */





/**
 * filters for controlling the display of a list of Event Dates
 *
 * @param {string} listId
 * @param {string} showDates
 * @param {string} datesSortedBy
 * @param {string} displayDates
 * @return {Object} EditorDatesListView with added DateListFilters
 */

var DatesListEntityFilters = function DatesListEntityFilters(_ref) {
  var listId = _ref.listId,
      showDates = _ref.showDates,
      datesSortedBy = _ref.datesSortedBy,
      displayDates = _ref.displayDates;

  var _useDatesListFilterSt = Object(_use_dates_list_filter_state_setters__WEBPACK_IMPORTED_MODULE_2__["default"])(listId),
      setShowDates = _useDatesListFilterSt.setShowDates,
      setDatesSortedBy = _useDatesListFilterSt.setDatesSortedBy,
      setDisplayDates = _useDatesListFilterSt.setDisplayDates;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ee-show-dates-filter ee-filter-bar-filter"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_show_dates_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    showDates: showDates,
    setShowDates: setShowDates
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ee-sort-dates-filter ee-filter-bar-filter"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_dates_sorted_by_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    datesSortedBy: datesSortedBy,
    setDatesSortedBy: setDatesSortedBy
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ee-display-dates-dates-filter ee-filter-bar-filter"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_display_dates_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    displayDates: displayDates,
    setDisplayDates: setDisplayDates
  })));
};

DatesListEntityFilters.propTypes = {
  listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  showDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  datesSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  displayDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (DatesListEntityFilters);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/dates-list-filter-bar.js":
/*!**************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/dates-list-filter-bar.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dates_list_entity_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dates-list-entity-filters */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/dates-list-entity-filters.js");


/**
 * External imports
 */



/**
 * DatesListFilterBar
 * filters for controlling the display of a list of Event Dates
 *
 * @param {string} listId
 * @param {string} showDates
 * @param {string} datesSortedBy
 * @param {string} displayDates
 * @param {string} searchText
 * @param {number} perPage
 * @param {string} view

 * @return {Object} EditorDatesListView with added DateListFilters
 */

var DatesListFilterBar = function DatesListFilterBar(_ref) {
  var listId = _ref.listId,
      showDates = _ref.showDates,
      datesSortedBy = _ref.datesSortedBy,
      displayDates = _ref.displayDates,
      searchText = _ref.searchText,
      perPage = _ref.perPage,
      view = _ref.view;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["EntityListFilterBar"], {
    listId: listId,
    view: view,
    perPage: perPage,
    searchText: searchText,
    entityFilters: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_dates_list_entity_filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
      listId: listId,
      showDates: showDates,
      datesSortedBy: datesSortedBy,
      displayDates: displayDates
    })
  });
};

DatesListFilterBar.propTypes = {
  listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  showDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  datesSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  displayDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  searchText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  perPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  view: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (DatesListFilterBar);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/index.js":
/*!**********************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/index.js ***!
  \**********************************************************************************/
/*! exports provided: DatesListFilterBar, useDatesListFilterState, useDatesListFilterStateSetters, useFilteredDatesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dates_list_filter_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dates-list-filter-bar */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/dates-list-filter-bar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatesListFilterBar", function() { return _dates_list_filter_bar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _use_dates_list_filter_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-dates-list-filter-state */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/use-dates-list-filter-state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDatesListFilterState", function() { return _use_dates_list_filter_state__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _use_dates_list_filter_state_setters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-dates-list-filter-state-setters */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/use-dates-list-filter-state-setters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDatesListFilterStateSetters", function() { return _use_dates_list_filter_state_setters__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _use_filtered_dates_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-filtered-dates-list */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/use-filtered-dates-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFilteredDatesList", function() { return _use_filtered_dates_list__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/use-dates-list-filter-state-setters.js":
/*!****************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/use-dates-list-filter-state-setters.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */


var useDatesListFilterStateSetters = function useDatesListFilterStateSetters(listId) {
  var store = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])('eventespresso/filter-state');
  return {
    setShowDates: function setShowDates(showDates) {
      return store.setFilter(listId, 'showDates', showDates);
    },
    setDatesSortedBy: function setDatesSortedBy(datesSortedBy) {
      return store.setFilter(listId, 'datesSortedBy', datesSortedBy);
    },
    setDisplayDates: function setDisplayDates(displayDates) {
      return store.setFilter(listId, 'displayDates', displayDates);
    },
    setFilteredDates: function setFilteredDates(eventDateIds) {
      return store.setFilter(listId, 'filteredDateIds', eventDateIds);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useDatesListFilterStateSetters);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/use-dates-list-filter-state.js":
/*!********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/use-dates-list-filter-state.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

/**
 * provides state management for DatesListFilterBar component
 *
 * @param {string} listId
 * @param {string} defaultShowDates
 * @param {string} defaultDatesSortedBy
 * @param {string} defaultDisplayDates
 * @return {Object} dates list filter state getters
 */

var useDatesListFilterState = function useDatesListFilterState(_ref) {
  var listId = _ref.listId,
      _ref$defaultShowDates = _ref.defaultShowDates,
      defaultShowDates = _ref$defaultShowDates === void 0 ? 'active-upcoming' : _ref$defaultShowDates,
      _ref$defaultDatesSort = _ref.defaultDatesSortedBy,
      defaultDatesSortedBy = _ref$defaultDatesSort === void 0 ? 'chronologically' : _ref$defaultDatesSort,
      _ref$defaultDisplayDa = _ref.defaultDisplayDates,
      defaultDisplayDates = _ref$defaultDisplayDa === void 0 ? 'start' : _ref$defaultDisplayDa;
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    var store = select('eventespresso/filter-state');
    return {
      showDates: store.getFilter(listId, 'showDates', defaultShowDates),
      datesSortedBy: store.getFilter(listId, 'datesSortedBy', defaultDatesSortedBy),
      displayDates: store.getFilter(listId, 'displayDates', defaultDisplayDates),
      filteredDateIds: store.getFilter(listId, 'filteredDateIds', null)
    };
  }, [listId, defaultShowDates, defaultDatesSortedBy, defaultDisplayDates]);
};

/* harmony default export */ __webpack_exports__["default"] = (useDatesListFilterState);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/use-filtered-dates-list.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/filter-bar/use-filtered-dates-list.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date-entities-list-filter-utils */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/date-entities-list-filter-utils.js");
/**
 * External imports
 */




var EMPTY_ARRAY = []; // useFilteredEventDates use-filtered-event-dates

var useFilteredDatesList = function useFilteredDatesList(_ref) {
  var dateEntities = _ref.dateEntities,
      showDates = _ref.showDates,
      datesSortedBy = _ref.datesSortedBy,
      _ref$searchText = _ref.searchText,
      searchText = _ref$searchText === void 0 ? '' : _ref$searchText;
  var dates = Array.isArray(dateEntities) ? dateEntities : EMPTY_ARRAY;
  var searchedDates = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["useFilterEntitiesBySearchText"])(dates, searchText);
  var filteredDates = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return showDates && searchedDates !== EMPTY_ARRAY ? Object(_date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_3__["filterDateEntities"])(searchedDates, showDates) : EMPTY_ARRAY;
  }, [searchedDates, showDates]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return datesSortedBy && filteredDates !== EMPTY_ARRAY ? Object(_date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_3__["sortDateEntitiesList"])(filteredDates, datesSortedBy) : EMPTY_ARRAY;
  }, [filteredDates, datesSortedBy]);
};

useFilteredDatesList.propTypes = {
  dateEntities: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),
  showDates: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  datesSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  searchText: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number])
};
/* harmony default export */ __webpack_exports__["default"] = (useFilteredDatesList);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entities-grid-view.css":
/*!***********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entities-grid-view.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-dates-list-grid-view":"ee-dates-list-grid-view","ee-editor-date-main":"ee-editor-date-main","ee-editor-date-details-wrapper-div":"ee-editor-date-details-wrapper-div","ee-editor-date-name-heading":"ee-editor-date-name-heading","ee-inline-edit-text":"ee-inline-edit-text","ee-long-title":"ee-long-title","ee-editor-date-desc-div":"ee-editor-date-desc-div","ee-date-desc-excerpt":"ee-date-desc-excerpt","ee-editor-date-location-div":"ee-editor-date-location-div","ee-editor-date-edit-venue-link":"ee-editor-date-edit-venue-link","ee-editor-date-venue-name-span":"ee-editor-date-venue-name-span","dashicon":"dashicon","ee-menu-item-icon":"ee-menu-item-icon","dashicons-location":"dashicons-location","ee-editor-date-details-sold-rsrvd-cap-div":"ee-editor-date-details-sold-rsrvd-cap-div","ee-editor-date-actions-menu":"ee-editor-date-actions-menu"};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entities-grid-view.js":
/*!**********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entities-grid-view.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_date_entity_grid_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor-date-entity-grid-item */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-grid-item.js");
/* harmony import */ var _editor_date_entities_grid_view_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor-date-entities-grid-view.css */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entities-grid-view.css");
/* harmony import */ var _editor_date_entities_grid_view_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editor_date_entities_grid_view_css__WEBPACK_IMPORTED_MODULE_7__);




/**
 * External imports
 */



/**
 * Internal dependencies
 */



/**
 * EditorDateEntitiesGridView
 * Displays dates as mobile/finger friendly blocks
 * with the most relevant info visible
 *
 * @function
 * @param {Array} entities    array of JSON objects defining the Event Dates
 * @param {string} htmlClass
 * @param {mixed} otherProps
 * @return {Component}          list of rendered Event Dates
 */

var EditorDateEntitiesGridView = function EditorDateEntitiesGridView(_ref) {
  var entities = _ref.entities,
      htmlClass = _ref.htmlClass,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["entities", "htmlClass"]);

  htmlClass = classnames__WEBPACK_IMPORTED_MODULE_4___default()(htmlClass, 'ee-dates-list-grid-view');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: htmlClass
  }, entities.map(function (dateEntity) {
    return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(dateEntity, 'datetime') ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_editor_date_entity_grid_item__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, otherProps, {
      key: dateEntity.id,
      dateEntity: dateEntity
    })) : null;
  }));
};

EditorDateEntitiesGridView.propTypes = {
  entities: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  htmlClass: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};
EditorDateEntitiesGridView.defaultProps = {
  entities: [],
  htmlClass: ''
};
/* harmony default export */ __webpack_exports__["default"] = (EditorDateEntitiesGridView);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-details.js":
/*!******************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-details.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _event_date_details_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-date-details-panel */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/event-date-details-panel.js");
/* harmony import */ var _inline_edit_event_date_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline-edit-event-date-name */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/inline-edit-event-date-name.js");
/* harmony import */ var _inline_edit_event_date_description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline-edit-event-date-description */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/inline-edit-event-date-description.js");
/* harmony import */ var _event_date_venue_edit_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event-date-venue-edit-link */ "./assets/src/editor/events/dates-and-times/editor-date/event-date-venue-edit-link.js");


/**
 * External imports
 */


/**
 * Internal dependencies
 */






var EditorDateEntityDetails = function EditorDateEntityDetails(_ref) {
  var dateEntity = _ref.dateEntity,
      showDesc = _ref.showDesc,
      showVenue = _ref.showVenue;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'ee-editor-date-details-wrapper-div'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inline_edit_event_date_name__WEBPACK_IMPORTED_MODULE_4__["default"], {
    eventDate: dateEntity
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inline_edit_event_date_description__WEBPACK_IMPORTED_MODULE_5__["default"], {
    eventDate: dateEntity,
    showDesc: showDesc
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_event_date_venue_edit_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    eventDate: dateEntity,
    showVenue: showVenue
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_event_date_details_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    eventDate: dateEntity
  }));
};

EditorDateEntityDetails.propTypes = {
  dateEntity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  showDesc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  showVenue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
EditorDateEntityDetails.defaultProps = {
  showDesc: 'excerpt',
  showVenue: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["ifValidDateEntity"])(EditorDateEntityDetails));

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-grid-item.js":
/*!********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-grid-item.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_date_entity_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor-date-entity-details */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-details.js");
/* harmony import */ var _event_date_calendar_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-date-calendar-date */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/event-date-calendar-date.js");
/* harmony import */ var _actions_menu_editor_date_entity_actions_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions-menu/editor-date-entity-actions-menu */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/editor-date-entity-actions-menu.js");


/**
 * External imports
 */




/**
 * Internal dependencies
 */




/**
 * EditorDateGridItem
 * Component for displaying an Event Date as a visual block in grid views
 *
 * @function
 * @param {Object} dateEntity   the Event Date
 * @param {string} showDate
 * @param {string} showDesc
 * @param {boolean} showVenue
 * @return {Object} rendered date grid item
 */

var EditorDateEntityGridItem = function EditorDateEntityGridItem(_ref) {
  var dateEntity = _ref.dateEntity,
      showDate = _ref.showDate,
      showDesc = _ref.showDesc,
      showVenue = _ref.showVenue;
  var dateStyleClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ee-editor-date-main', {
    'ee-editor-date-range': showDate === 'both',
    'ee-editor-date-single': showDate !== 'both'
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["EntityPaperFrame"], {
    entityID: dateEntity.id
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: dateStyleClass
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_event_date_calendar_date__WEBPACK_IMPORTED_MODULE_6__["default"], {
    eventDate: dateEntity,
    showDate: showDate
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_editor_date_entity_details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dateEntity: dateEntity,
    showDesc: showDesc,
    showVenue: showVenue
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_actions_menu_editor_date_entity_actions_menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    dateEntity: dateEntity
  }));
};

EditorDateEntityGridItem.propTypes = {
  dateEntity: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  showDate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  showDesc: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  showVenue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
EditorDateEntityGridItem.defaultProps = {
  showDate: 'start',
  showDesc: 'excerpt',
  showVenue: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__["ifValidDateEntity"])(EditorDateEntityGridItem));

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/event-date-calendar-date.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/event-date-calendar-date.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External imports
 */





var getBackgroundColorClass = _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["dateTimeModel"].getBackgroundColorClass,
    getDateTimeStatusTextLabel = _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["dateTimeModel"].getDateTimeStatusTextLabel;

var EventDateCalendarDate = function EventDateCalendarDate(_ref) {
  var eventDate = _ref.eventDate,
      showDate = _ref.showDate;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var sidebarColorClass = 'ee-editor-date-calendar-sidebar ';
    sidebarColorClass += getBackgroundColorClass(eventDate);
    var dateStatus = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      key: 1,
      className: 'ee-status-tag'
    }, getDateTimeStatusTextLabel(eventDate));

    switch (showDate) {
      case 'end':
        var endTime = eventDate.end.toFormat('h:mm a');
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["BiggieCalendarDate"], {
          date: eventDate.end,
          htmlClass: sidebarColorClass,
          headerText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('ends', 'event_espresso'),
          footerText: [endTime, dateStatus]
        });

      case 'both':
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["CalendarDateRange"], {
          startDate: eventDate.start,
          endDate: eventDate.end,
          htmlClass: sidebarColorClass,
          headerText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Event Date', 'event_espresso'),
          footerText: dateStatus,
          showTime: true
        });

      case 'start':
      default:
        var startTime = eventDate.start.toFormat('h:mm a');
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["BiggieCalendarDate"], {
          date: eventDate.start,
          htmlClass: sidebarColorClass,
          headerText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('starts', 'event_espresso'),
          footerText: [startTime, dateStatus]
        });
    }
  }, [showDate, eventDate.start.toISO(), eventDate.end.toISO(), eventDate.regLimit, eventDate.sold, eventDate.deleted]);
};

EventDateCalendarDate.propTypes = {
  eventDate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  showDate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
EventDateCalendarDate.defaultProps = {
  showDate: ''
};
/* harmony default export */ __webpack_exports__["default"] = (EventDateCalendarDate);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/event-date-details-panel.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/event-date-details-panel.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _event_date_registrations_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../event-date-registrations-link */ "./assets/src/editor/events/dates-and-times/editor-date/event-date-registrations-link.js");
/* harmony import */ var _mutations_ticket_mutations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mutations/ticket-mutations */ "./assets/src/editor/events/mutations/ticket-mutations.js");


/**
 * External imports
 */







/**
 * Internal dependencies
 */




var EventDateDetailsPanel = function EventDateDetailsPanel(_ref) {
  var eventDate = _ref.eventDate;
  var updateRelatedTickets = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_6__["useEventDateUpdateRelatedTickets"])(eventDate);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var details = [{
      id: 'ee-event-date-sold',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('sold', 'event_espresso'),
      value: eventDate.sold || 0
    }, {
      id: 'ee-event-date-capacity',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('capacity', 'event_espresso'),
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["InfinitySymbol"], {
        value: eventDate.regLimit,
        asInt: true
      }),
      editable: {
        type: 'text',
        valueType: 'infinite',
        onChange: function onChange(cap) {
          var capacity = Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__["parseInfinity"])(cap, true, true);
          eventDate.regLimit = capacity;
          var updateTicketQty = Object(_mutations_ticket_mutations__WEBPACK_IMPORTED_MODULE_8__["updateTicketQtyAfterCapacityChange"])(capacity);
          updateRelatedTickets([updateTicketQty]);
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["InfinitySymbol"], {
            value: capacity,
            asInt: true
          });
        }
      }
    }, {
      id: 'ee-event-date-registrations',
      htmlClass: 'ee-has-tooltip',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('reg list', 'event_espresso'),
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_event_date_registrations_link__WEBPACK_IMPORTED_MODULE_7__["default"], {
        dateEntity: eventDate
      })
    }];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["EntityDetailsPanel"], {
      details: details,
      htmlClass: "ee-editor-date-details-sold-rsrvd-cap-div"
    });
  }, [eventDate.evtId, eventDate.id, eventDate.sold, eventDate.reserved, eventDate.regLimit]);
};

EventDateDetailsPanel.propTypes = {
  eventDate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EventDateDetailsPanel);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/index.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/index.js ***!
  \*********************************************************************************/
/*! exports provided: EditorDateEntityDetails, EditorDateEntityGridItem, EditorDateEntitiesGridView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_date_entity_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-date-entity-details */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-details.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityDetails", function() { return _editor_date_entity_details__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _editor_date_entity_grid_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-date-entity-grid-item */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entity-grid-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityGridItem", function() { return _editor_date_entity_grid_item__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _editor_date_entities_grid_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-date-entities-grid-view */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/editor-date-entities-grid-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesGridView", function() { return _editor_date_entities_grid_view__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/inline-edit-event-date-description.js":
/*!**************************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/inline-edit-event-date-description.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External imports
 */






var InlineEditEventDateDescription = function InlineEditEventDateDescription(_ref) {
  var eventDate = _ref.eventDate,
      showDesc = _ref.showDesc,
      wrapperElement = _ref.wrapperElement;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var WrapperElement = wrapperElement ? wrapperElement : 'div';
    var htmlClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ee-editor-date-desc-div', {
      'ee-date-desc-excerpt': showDesc === 'excerpt'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrapperElement, {
      className: htmlClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["InlineEditInput"], {
      htmlId: "event-date-desc-".concat(eventDate.id),
      type: "textarea",
      value: eventDate.description,
      onChange: function onChange(desc) {
        eventDate.description = desc;
        return desc;
      },
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Date Description', 'event_espresso')
    }));
  }, [eventDate.id, eventDate.description, showDesc, wrapperElement]);
};

InlineEditEventDateDescription.propTypes = {
  eventDate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  showDesc: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  wrapperElement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
InlineEditEventDateDescription.defaultProps = {
  showDesc: 'excerpt'
};
/* harmony default export */ __webpack_exports__["default"] = (InlineEditEventDateDescription);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/inline-edit-event-date-name.js":
/*!*******************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/grid-view/inline-edit-event-date-name.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External imports
 */






var InlineEditEventDateName = function InlineEditEventDateName(_ref) {
  var eventDate = _ref.eventDate,
      wrapperElement = _ref.wrapperElement;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var WrapperElement = wrapperElement ? wrapperElement : 'h1';
    var htmlClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ee-editor-date-name-heading', {
      'ee-long-title': eventDate.name && eventDate.name.length > 40
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrapperElement, {
      className: htmlClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["InlineEditInput"], {
      htmlId: "event-date-name-".concat(eventDate.id),
      type: "text",
      value: eventDate.name,
      onChange: function onChange(name) {
        eventDate.name = name;
        return name;
      },
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Date Name', 'event_espresso'),
      noticeStyle: {
        left: '50px'
      }
    }));
  }, [eventDate.id, eventDate.name]);
};

InlineEditEventDateName.propTypes = {
  eventDate: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  wrapperElement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (InlineEditEventDateName);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/index.js":
/*!***********************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/index.js ***!
  \***********************************************************************/
/*! exports provided: EditorDateEntitiesList, EditorDateEntityActionsMenu, DateEntityForm, useDateEntityFormInputPrefix, useDateEntityFormSchema, useDateEntityInputConfig, DatesListFilterBar, useDatesListFilterState, useDatesListFilterStateSetters, useFilteredDatesList, EditorDateEntityDetails, EditorDateEntityGridItem, EditorDateEntitiesGridView, EditorDateEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions-menu */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityActionsMenu", function() { return _actions_menu__WEBPACK_IMPORTED_MODULE_0__["EditorDateEntityActionsMenu"]; });

/* harmony import */ var _edit_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-form */ "./assets/src/editor/events/dates-and-times/editor-date/edit-form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityForm", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_1__["DateEntityForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDateEntityFormInputPrefix", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_1__["useDateEntityFormInputPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDateEntityFormSchema", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_1__["useDateEntityFormSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDateEntityInputConfig", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_1__["useDateEntityInputConfig"]; });

/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-bar */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatesListFilterBar", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_2__["DatesListFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDatesListFilterState", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_2__["useDatesListFilterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDatesListFilterStateSetters", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_2__["useDatesListFilterStateSetters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFilteredDatesList", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_2__["useFilteredDatesList"]; });

/* harmony import */ var _grid_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-view */ "./assets/src/editor/events/dates-and-times/editor-date/grid-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityDetails", function() { return _grid_view__WEBPACK_IMPORTED_MODULE_3__["EditorDateEntityDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityGridItem", function() { return _grid_view__WEBPACK_IMPORTED_MODULE_3__["EditorDateEntityGridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesGridView", function() { return _grid_view__WEBPACK_IMPORTED_MODULE_3__["EditorDateEntitiesGridView"]; });

/* harmony import */ var _list_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-view */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesListView", function() { return _list_view__WEBPACK_IMPORTED_MODULE_4__["EditorDateEntitiesListView"]; });

/* harmony import */ var _editor_date_entities_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor-date-entities-list */ "./assets/src/editor/events/dates-and-times/editor-date/editor-date-entities-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesList", function() { return _editor_date_entities_list__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/list-view/dates-list-table-header.js":
/*!***************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/list-view/dates-list-table-header.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External imports
 */

/**
 * DatesListTableHeader
 * header details for the Dates list table
 *
 * @function
 * @return {Object} of Event Date list table header details
 */

var datesListTableHeader = function datesListTableHeader() {
  return {
    key: 'dates-list-header',
    type: 'row',
    primary: true,
    class: 'ee-editor-date-list-items-header-row',
    cells: [{
      key: 'stripe',
      type: 'cell',
      class: 'ee-date-list-col-hdr ee-entity-list-status-stripe ee-rspnsv-table-column-micro',
      value: ''
    }, {
      key: 'id',
      type: 'cell',
      class: 'ee-date-list-col-hdr ee-date-list-col-id ee-number-column ee-rspnsv-table-column-tiny',
      value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('ID', 'event_espresso')
    }, {
      key: 'name',
      type: 'cell',
      class: 'ee-date-list-col-hdr ee-date-list-col-name ee-rspnsv-table-column-huge',
      value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Name', 'event_espresso')
    }, {
      key: 'start',
      type: 'cell',
      class: 'ee-date-list-col-hdr ee-date-list-col-name-start ee-rspnsv-table-column-default',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-long-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Start Date', 'event_espresso')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-short-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Start', 'event_espresso')))
    }, {
      key: 'end',
      type: 'cell',
      class: 'ee-date-list-col-hdr ee-date-list-col-end ee-rspnsv-table-column-default',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-long-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('End Date', 'event_espresso')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-short-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('End', 'event_espresso')))
    }, {
      key: 'capacity',
      type: 'cell',
      class: 'ee-date-list-col-hdr ee-date-list-col-capacity ee-rspnsv-table-column-tiny ee-number-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-long-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Capacity', 'event_espresso')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-short-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cap', 'event_espresso')))
    }, {
      key: 'sold',
      type: 'cell',
      class: 'ee-date-list-col-hdr ee-date-list-col-sold ee-rspnsv-table-column-tiny ee-number-column',
      value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Sold', 'event_espresso')
    }, {
      key: 'reserved',
      type: 'cell',
      class: 'ee-date-list-col-hdr ee-date-list-col-reserved ee-rspnsv-table-column-tiny ee-number-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-long-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reserved', 'event_espresso')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-short-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Rsrvd', 'event_espresso')))
    }, {
      key: 'registrations',
      type: 'cell',
      class: 'ee-date-list-col-hdr ee-date-list-col-registrations ee-rspnsv-table-column-smaller ee-centered-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-long-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reg list', 'event_espresso')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-short-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Regs', 'event_espresso')))
    }, {
      key: 'actions',
      type: 'cell',
      class: 'ee-date-list-col-hdr ee-date-list-col-actions ee-rspnsv-table-column-big ee-centered-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-long-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Actions', 'event_espresso'))
    }]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (datesListTableHeader);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/list-view/dates-list-table-row.js":
/*!************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/list-view/dates-list-table-row.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_menu_editor_date_entity_actions_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions-menu/editor-date-entity-actions-menu */ "./assets/src/editor/events/dates-and-times/editor-date/actions-menu/editor-date-entity-actions-menu.js");
/* harmony import */ var _event_date_registrations_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event-date-registrations-link */ "./assets/src/editor/events/dates-and-times/editor-date/event-date-registrations-link.js");



/**
 * External imports
 */



/**
 * Internal dependencies
 */



var DATE_TIME_FORMAT = 'ddd MMM YY h:mm a';
var getBackgroundColorClass = _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["dateTimeModel"].getBackgroundColorClass,
    status = _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["dateTimeModel"].status;
/**
 * EditorDateEntityListItem
 * Displays Event Date as a table row similar to existing eventEntity editor UI
 *
 * @function
 * @param {Object} dateEntity Event Date entity
 * @param {Object} otherProps
 * @return {Object} row data for the provided date entity
 */

var datesListTableRow = function datesListTableRow(dateEntity, otherProps) {
  var statusClass = status(dateEntity);
  var bgClass = getBackgroundColorClass(dateEntity);
  return {
    key: "row-".concat(dateEntity.id),
    type: 'row',
    id: "ee-editor-date-list-view-row-".concat(dateEntity.id),
    class: "ee-editor-date-list-view-row ".concat(statusClass),
    cells: [{
      key: 'stripe',
      type: 'cell',
      class: "ee-date-list-cell ee-entity-list-status-stripe ".concat(bgClass, " ee-rspnsv-table-column-micro"),
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'ee-rspnsv-table-show-on-mobile'
      }, dateEntity.name)
    }, {
      key: 'id',
      type: 'cell',
      class: 'ee-date-list-cell ee-date-list-col-id ee-rspnsv-table-column-tiny ee-number-column',
      value: Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__["shortenCuid"])(dateEntity.id)
    }, {
      key: 'name',
      type: 'cell',
      class: 'ee-date-list-cell ee-date-list-col-name ee-rspnsv-table-column-bigger ee-rspnsv-table-hide-on-mobile',
      value: dateEntity.name
    }, {
      key: 'start',
      type: 'cell',
      class: 'ee-date-list-cell ee-date-list-col-start ee-rspnsv-table-column-default',
      value: dateEntity.start.toFormat(DATE_TIME_FORMAT)
    }, {
      key: 'end',
      type: 'cell',
      class: 'ee-date-list-cell ee-date-list-col-end ee-rspnsv-table-column-default',
      value: dateEntity.end.toFormat(DATE_TIME_FORMAT)
    }, {
      key: 'capacity',
      type: 'cell',
      class: 'ee-date-list-cell ee-date-list-col-capacity ee-rspnsv-table-column-tiny ee-number-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_3__["InfinitySymbol"], {
        value: dateEntity.regLimit,
        asInt: true
      })
    }, {
      key: 'sold',
      type: 'cell',
      class: 'ee-date-list-cell ee-date-list-col-sold ee-rspnsv-table-column-tiny ee-number-column',
      value: dateEntity.sold
    }, {
      key: 'reserved',
      type: 'cell',
      class: 'ee-date-list-cell ee-date-list-col-reserved ee-rspnsv-table-column-tiny ee-number-column',
      value: dateEntity.reserved
    }, {
      key: 'registrations',
      type: 'cell',
      class: 'ee-date-list-cell ee-date-list-col-registrations ee-rspnsv-table-column-smaller ee-centered-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_event_date_registrations_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dateEntity: dateEntity
      })
    }, {
      key: 'actions',
      type: 'cell',
      class: 'ee-date-list-cell ee-date-list-col-actions ee-rspnsv-table-column-big',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_actions_menu_editor_date_entity_actions_menu__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        dateEntity: dateEntity
      }, otherProps))
    }]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (datesListTableRow);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entities-list-view.css":
/*!***********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entities-list-view.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-editor-date-actions-menu":"ee-editor-date-actions-menu","ee-rspnsv-table":"ee-rspnsv-table","ee-date-list-col-actions":"ee-date-list-col-actions","ee-rspnsv-table-body-td":"ee-rspnsv-table-body-td","ee-rspnsv-table-mobile-only-column-value":"ee-rspnsv-table-mobile-only-column-value"};

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entities-list-view.js":
/*!**********************************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entities-list-view.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dates_list_table_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dates-list-table-header */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/dates-list-table-header.js");
/* harmony import */ var _dates_list_table_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dates-list-table-row */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/dates-list-table-row.js");
/* harmony import */ var _use_reorder_dates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-reorder-dates */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/use-reorder-dates.js");
/* harmony import */ var _editor_date_entities_list_view_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor-date-entities-list-view.css */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entities-list-view.css");
/* harmony import */ var _editor_date_entities_list_view_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_editor_date_entities_list_view_css__WEBPACK_IMPORTED_MODULE_10__);



/**
 * External imports
 */






/**
 * Internal dependencies
 */





var noZebraStripe = ['row', 'stripe', 'name', 'actions'];
/**
 * EditorDateEntitiesListView
 * Displays event date details in a standard list table like view
 *
 * @function
 * @param {Object} props
 * @member {Array} entities         filtered array of Event Date model objects
 * @member {Array} allEventDates    array of ALL Event Date model objects
 * @member {string} showDate
 * @member {string} htmlClass
 * @member {Object} otherProps
 * @return {Object} rendered table of Event Dates
 */

var EditorDateEntitiesListView = function EditorDateEntitiesListView(_ref) {
  var entities = _ref.entities,
      allEventDates = _ref.allEventDates,
      showDate = _ref.showDate,
      setEntityIds = _ref.setEntityIds,
      setSortBy = _ref.setSortBy,
      htmlClass = _ref.htmlClass,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["entities", "allEventDates", "showDate", "setEntityIds", "setSortBy", "htmlClass"]);

  var reorderDates = Object(_use_reorder_dates__WEBPACK_IMPORTED_MODULE_9__["default"])(entities, allEventDates, setEntityIds, setSortBy);
  /**
   * toggles display of start and end date columns
   * based on incoming value of showDate
   *
   * @function
   * @return {Function} cached callback
   */

  var filterColumns = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(
  /**
   * @function
   * @param {Object} columns
   * @return {Object} columns
   */
  function (columns) {
    var colSwap = {
      start: 'end',
      end: 'start'
    };
    var exclude = colSwap[showDate] ? colSwap[showDate] : '';
    columns.cells = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["filterColumnsByKey"])(columns.cells, exclude);
    return columns;
  }, [showDate]);
  var formRows = entities.map(
  /**
   * @function
   * @param {Object} dateEntity
   * @return {Array} columns
   */
  function (dateEntity) {
    var columns = Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__["isModelEntityOfModel"])(dateEntity, 'datetime') ? Object(_dates_list_table_row__WEBPACK_IMPORTED_MODULE_8__["default"])(dateEntity, otherProps) : null;
    return filterColumns(columns);
  });
  htmlClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(htmlClass, 'ee-dates-list-list-view');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["ResponsiveTable"], {
    headerRows: [filterColumns(Object(_dates_list_table_header__WEBPACK_IMPORTED_MODULE_7__["default"])())],
    tableRows: Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["addZebraStripesOnMobile"])(formRows, noZebraStripe),
    metaData: {
      tableId: 'date-entities-list-view',
      tableCaption: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Event Dates', 'event_espresso')
    },
    classes: {
      tableClass: htmlClass
    },
    onDragEnd: reorderDates
  });
};

EditorDateEntitiesListView.propTypes = {
  entities: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  allEventDates: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  showDate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  htmlClass: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  doRefresh: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
EditorDateEntitiesListView.defaultProps = {
  showDate: '',
  htmlClass: ''
};
/* harmony default export */ __webpack_exports__["default"] = (EditorDateEntitiesListView);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/list-view/index.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/list-view/index.js ***!
  \*********************************************************************************/
/*! exports provided: EditorDateEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_date_entities_list_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-date-entities-list-view */ "./assets/src/editor/events/dates-and-times/editor-date/list-view/editor-date-entities-list-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesListView", function() { return _editor_date_entities_list_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/editor-date/list-view/use-reorder-dates.js":
/*!*********************************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/editor-date/list-view/use-reorder-dates.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


/**
 * @function
 * @param {Array} filteredEventDates
 * @param {Array} allEventDates
 * @param {Function} setEntityIds
 * @param {Function} setSortBy
 * @return {Function} callback for reordering ticket entity list
 */

var useReorderDates = function useReorderDates(filteredEventDates, allEventDates, setEntityIds, setSortBy) {
  var reorderEntities = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["useReorderEntities"])({
    modelName: 'datetime',
    setEntityIds: setEntityIds,
    setSortBy: setSortBy
  });
  /**
   * @function
   * @param {Object} result
   * @return {Function}
   */

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (result) {
    var destination = result.destination,
        source = result.source;

    if (!destination || source.index === destination.index && destination.droppableId === source.droppableId || destination.droppableId !== 'date-entities-list-view-droppable') {
      return;
    }

    reorderEntities(filteredEventDates, allEventDates, source.index, destination.index);
  }, [filteredEventDates, allEventDates, reorderEntities]);
};

/* harmony default export */ __webpack_exports__["default"] = (useReorderDates);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/event-dates-metabox.js":
/*!*************************************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/event-dates-metabox.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../editor.css */ "./assets/src/editor/editor.css");
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editor_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dates_and_times__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dates-and-times */ "./assets/src/editor/events/dates-and-times/index.js");


/**
 * External dependencies
 */




/**
 * Internal imports
 */



/**
 * EventDatesMetabox
 *
 * displays a "metabox" for managing an event's datetimes
 *
 * @param {boolean} eventDatesLoaded
 * @param {boolean} venueLoaded
 * @param {number} eventId
 * @return {Object} rendered event dates metabox
 */

var EventDatesMetabox = function EventDatesMetabox(_ref) {
  var eventId = _ref.eventId,
      eventDatesLoaded = _ref.eventDatesLoaded,
      venueLoaded = _ref.venueLoaded;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
    className: "ee-metabox-heading"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["EspressoIcon"], {
    icon: "calendar"
  }), Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Event Dates', 'event_espresso')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    id: "ee-editor-event-dates-".concat(eventId),
    className: "ee-editor-event-dates espresso-editor"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], {
    className: "ee-editor-event-dates ee-form-row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_dates_and_times__WEBPACK_IMPORTED_MODULE_6__["EditorDateEntitiesList"], {
    for: 'event-dates-metabox',
    eventDatesLoaded: eventDatesLoaded,
    venueLoaded: venueLoaded
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null));
};

EventDatesMetabox.propTypes = {
  eventId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EventDatesMetabox);

/***/ }),

/***/ "./assets/src/editor/events/dates-and-times/index.js":
/*!***********************************************************!*\
  !*** ./assets/src/editor/events/dates-and-times/index.js ***!
  \***********************************************************/
/*! exports provided: EventDatesMetabox, EditorDateEntitiesList, EditorDateEntityActionsMenu, DateEntityForm, useDateEntityFormInputPrefix, useDateEntityFormSchema, useDateEntityInputConfig, DatesListFilterBar, useDatesListFilterState, useDatesListFilterStateSetters, useFilteredDatesList, EditorDateEntityDetails, EditorDateEntityGridItem, EditorDateEntitiesGridView, EditorDateEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dates_and_times_event_dates_metabox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dates-and-times/event-dates-metabox */ "./assets/src/editor/events/dates-and-times/event-dates-metabox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDatesMetabox", function() { return _dates_and_times_event_dates_metabox__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _editor_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-date */ "./assets/src/editor/events/dates-and-times/editor-date/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesList", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityActionsMenu", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntityActionsMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateEntityForm", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["DateEntityForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDateEntityFormInputPrefix", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["useDateEntityFormInputPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDateEntityFormSchema", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["useDateEntityFormSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDateEntityInputConfig", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["useDateEntityInputConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatesListFilterBar", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["DatesListFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDatesListFilterState", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["useDatesListFilterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDatesListFilterStateSetters", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["useDatesListFilterStateSetters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFilteredDatesList", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["useFilteredDatesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityDetails", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntityDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntityGridItem", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntityGridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesGridView", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntitiesGridView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorDateEntitiesListView", function() { return _editor_date__WEBPACK_IMPORTED_MODULE_1__["EditorDateEntitiesListView"]; });




/***/ }),

/***/ "./assets/src/editor/events/event-editor.js":
/*!**************************************************!*\
  !*** ./assets/src/editor/events/event-editor.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dates_and_times_event_dates_metabox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dates-and-times/event-dates-metabox */ "./assets/src/editor/events/dates-and-times/event-dates-metabox.js");
/* harmony import */ var _tickets_tickets_metabox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tickets/tickets-metabox */ "./assets/src/editor/events/tickets/tickets-metabox.js");
/* harmony import */ var _initialization_use_editor_initialization_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initialization/use-editor-initialization.js */ "./assets/src/editor/events/initialization/use-editor-initialization.js");
/* harmony import */ var _initialization_use_editor_persistence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./initialization/use-editor-persistence */ "./assets/src/editor/events/initialization/use-editor-persistence.js");


/**
 * External dependencies
 */



/**
 * Internal imports
 */





/**
 * @param {number} eventId
 * @param {Object} eventData
 * @return {Object} rendered event dates metabox
 */

var EventEditor = function EventEditor(_ref) {
  var eventId = _ref.eventId,
      eventData = _ref.eventData;
  Object(_initialization_use_editor_persistence__WEBPACK_IMPORTED_MODULE_7__["default"])(eventId);

  var _useEditorInitializat = Object(_initialization_use_editor_initialization_js__WEBPACK_IMPORTED_MODULE_6__["default"])(eventData),
      initialized = _useEditorInitializat.initialized;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["FormPlaceholder"], {
    loading: !initialized,
    notice: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["_x"])('loading event dates and available tickets%s', 'loading event dates and available tickets...', 'event_espresso'), String.fromCharCode(8230))
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["FormContainer"], {
    loading: !initialized,
    id: "ee-editor-event-dates-and-tickets-".concat(eventId),
    htmlClass: "ee-editor-event-dates-and-tickets"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_dates_and_times_event_dates_metabox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    eventId: eventId,
    eventDatesLoaded: initialized,
    venueLoaded: initialized
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tickets_tickets_metabox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    eventId: eventId,
    ticketsLoaded: initialized
  })));
};

EventEditor.propTypes = {
  eventId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
  eventData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (EventEditor);

/***/ }),

/***/ "./assets/src/editor/events/index.js":
/*!*******************************************!*\
  !*** ./assets/src/editor/events/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-editor */ "./assets/src/editor/events/event-editor.js");


/**
 * External imports
 */

/**
 * Internal imports
 */

 // find the 'normal-sortables' metabox

var container = document.getElementById('normal-sortables'); // create and place our 'ee-editor-div' div before that

var editor = document.createElement('div');
editor.className = 'ee-editor-div';
container.prepend(editor); // then load the editor data we dumped into DOM and render theEventEditor

var eventData = window.eeEditorEventData;

if (eventData.eventId) {
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_event_editor__WEBPACK_IMPORTED_MODULE_1__["default"], {
    eventId: eventData.eventId,
    eventData: eventData
  }), editor);
}

/***/ }),

/***/ "./assets/src/editor/events/initialization/data-hydrator.js":
/*!******************************************************************!*\
  !*** ./assets/src/editor/events/initialization/data-hydrator.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/asyncIterator */ "./node_modules/@babel/runtime/helpers/asyncIterator.js");
/* harmony import */ var _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/awaitAsyncGenerator */ "./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js");
/* harmony import */ var _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/wrapAsyncGenerator */ "./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js");
/* harmony import */ var _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _eventespresso_model_schema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @eventespresso/model-schema */ "@eventespresso/model-schema");
/* harmony import */ var _eventespresso_model_schema__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model_schema__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__);










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External imports
 */






var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__["dispatch"])('eventespresso/core'),
    hydrateEntity = _dispatch.hydrateEntity,
    resolveRelationRecordForRelation = _dispatch.resolveRelationRecordForRelation,
    resolveGetRelatedEntitiesForIds = _dispatch.resolveGetRelatedEntitiesForIds;

var _dispatch2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__["dispatch"])('eventespresso/lists'),
    receiveEntityResponse = _dispatch2.receiveEntityResponse,
    resolveGetEntities = _dispatch2.resolveGetEntities;

var _dispatch3 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_13__["dispatch"])('eventespresso/schema'),
    receiveSchemaForModelAndResolve = _dispatch3.receiveSchemaForModelAndResolve;
/**
 * adds all event editor data to the store
 *
 * @param {Object} eventData
 */


var hydrateData =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_wrapAsyncGenerator__WEBPACK_IMPORTED_MODULE_8___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee(eventData) {
    var schemas, relations, tktRegCount, rawData, hydratedEntities;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            /*eslint no-unused-vars: "off"*/
            schemas = eventData.schemas, relations = eventData.relations, tktRegCount = eventData.tktRegCount, rawData = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5___default()(eventData, ["schemas", "relations", "tktRegCount"]);

            if (rawData.hasOwnProperty('eventId')) {
              delete rawData.eventId;
            }

            _context.next = 4;
            return _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_7___default()(hydrateSchemas(schemas, relations));

          case 4:
            _context.next = 6;
            return _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_7___default()(hydrateEntityData(rawData, schemas));

          case 6:
            hydratedEntities = _context.sent;
            _context.next = 9;
            return _babel_runtime_helpers_awaitAsyncGenerator__WEBPACK_IMPORTED_MODULE_7___default()(hydrateRelations(rawData, hydratedEntities, relations));

          case 9:
            _context.next = 11;
            return hydratedEntities;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function hydrateData(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * adds entity data to the store
 *
 * @param {Object} schemas
 * @param {Object} relations
 * @return {Object[]} entities
 */


var hydrateSchemas =
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3(schemas, relations) {
    var relationSchemas, modelSchemas, _i, _modelSchemas, _modelSchemas$_i, model, schemaData, schema, modelSchema, modelRelations, _i2, _Object$keys, modelRelation, relationSingular, relationPlural, generator, getRelationSchema;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            relationSchemas = [];

            if (!schemas) {
              _context3.next = 32;
              break;
            }

            modelSchemas = Object.entries(schemas);
            _i = 0, _modelSchemas = modelSchemas;

          case 4:
            if (!(_i < _modelSchemas.length)) {
              _context3.next = 32;
              break;
            }

            _modelSchemas$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_modelSchemas[_i], 2), model = _modelSchemas$_i[0], schemaData = _modelSchemas$_i[1];

            if (schemaData.hasOwnProperty('schema')) {
              _context3.next = 8;
              break;
            }

            throw new TypeError('Invalid Schema ');

          case 8:
            _context3.next = 10;
            return receiveSchemaForModelAndResolve(model, schemaData);

          case 10:
            schema = _context3.sent;

            if (!(relations.hasOwnProperty(model) && schema.hasOwnProperty('schema') && schema.schema.hasOwnProperty('schema') && schema.schema.schema.hasOwnProperty('properties'))) {
              _context3.next = 29;
              break;
            }

            modelSchema = schema.schema.schema.properties;
            modelRelations = Object.values(relations[model]);
            modelRelations = Array.isArray(modelRelations) ? modelRelations.pop() : {};
            modelRelations = isDataObject(modelRelations) ? modelRelations : {};
            _i2 = 0, _Object$keys = Object.keys(modelRelations);

          case 17:
            if (!(_i2 < _Object$keys.length)) {
              _context3.next = 29;
              break;
            }

            modelRelation = _Object$keys[_i2];
            relationSingular = modelRelation.toLowerCase();
            relationPlural = Object(_eventespresso_model__WEBPACK_IMPORTED_MODULE_10__["pluralModelName"])(relationSingular);

            if (!modelSchema.hasOwnProperty(relationPlural)) {
              _context3.next = 26;
              break;
            }

            generator = Object(_eventespresso_model_schema__WEBPACK_IMPORTED_MODULE_11__["hydrateRelationSchema"])({
              schema: modelSchema[relationPlural]
            }, model, relationSingular);

            getRelationSchema =
            /*#__PURE__*/
            function () {
              var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2(gen) {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, resolved;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _context2.prev = 2;
                        _iterator = _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_6___default()(gen);

                      case 4:
                        _context2.next = 6;
                        return _iterator.next();

                      case 6:
                        _step = _context2.sent;
                        _iteratorNormalCompletion = _step.done;
                        _context2.next = 10;
                        return _step.value;

                      case 10:
                        _value = _context2.sent;

                        if (_iteratorNormalCompletion) {
                          _context2.next = 17;
                          break;
                        }

                        resolved = _value;

                        if (resolved.hasOwnProperty('relationSchema') && resolved.relationSchema.hasOwnProperty('schema')) {
                          relationSchemas.push(resolved.relationSchema.schema);
                        } else {
                          warning__WEBPACK_IMPORTED_MODULE_9___default()(false, 'INVALID RELATION SCHEMA');
                        }

                      case 14:
                        _iteratorNormalCompletion = true;
                        _context2.next = 4;
                        break;

                      case 17:
                        _context2.next = 23;
                        break;

                      case 19:
                        _context2.prev = 19;
                        _context2.t0 = _context2["catch"](2);
                        _didIteratorError = true;
                        _iteratorError = _context2.t0;

                      case 23:
                        _context2.prev = 23;
                        _context2.prev = 24;

                        if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
                          _context2.next = 28;
                          break;
                        }

                        _context2.next = 28;
                        return _iterator.return();

                      case 28:
                        _context2.prev = 28;

                        if (!_didIteratorError) {
                          _context2.next = 31;
                          break;
                        }

                        throw _iteratorError;

                      case 31:
                        return _context2.finish(28);

                      case 32:
                        return _context2.finish(23);

                      case 33:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[2, 19, 23, 33], [24,, 28, 32]]);
              }));

              return function getRelationSchema(_x4) {
                return _ref3.apply(this, arguments);
              };
            }();

            _context3.next = 26;
            return getRelationSchema(generator);

          case 26:
            _i2++;
            _context3.next = 17;
            break;

          case 29:
            _i++;
            _context3.next = 4;
            break;

          case 32:
            return _context3.abrupt("return", relationSchemas);

          case 33:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function hydrateSchemas(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * adds entity data to the store
 *
 * @param {Object} rawData
 * @param {Object} schemas
 * @return {Object[]} entities
 */


var hydrateEntityData =
/*#__PURE__*/
function () {
  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4(rawData, schemas) {
    var allHydratedEntities, modelEntities, _loop, _i3, _modelEntities;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            allHydratedEntities = {};

            if (!rawData) {
              _context5.next = 10;
              break;
            }

            modelEntities = Object.entries(rawData);
            _loop =
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _loop() {
              var _modelEntities$_i, model, entityData, modelSchema, entities;

              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _loop$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _modelEntities$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_modelEntities[_i3], 2), model = _modelEntities$_i[0], entityData = _modelEntities$_i[1];
                      modelSchema = schemas[model] ? schemas[model] : null;
                      modelSchema = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(modelSchema) === 'object' && modelSchema.hasOwnProperty('schema') ? modelSchema.schema : null;
                      _context4.next = 5;
                      return hydrateEntities(model, modelSchema, entityData).then(function (hydratedEntities) {
                        return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, model, hydratedEntities);
                      });

                    case 5:
                      entities = _context4.sent;

                      if (model === 'price_type') {
                        receiveEntityResponse(model, undefined, Object.values(entities[model]));
                        resolveGetEntities(model);
                      }

                      allHydratedEntities = _objectSpread({}, allHydratedEntities, {}, entities);

                    case 8:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _loop);
            });
            _i3 = 0, _modelEntities = modelEntities;

          case 5:
            if (!(_i3 < _modelEntities.length)) {
              _context5.next = 10;
              break;
            }

            return _context5.delegateYield(_loop(), "t0", 7);

          case 7:
            _i3++;
            _context5.next = 5;
            break;

          case 10:
            return _context5.abrupt("return", allHydratedEntities);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee4);
  }));

  return function hydrateEntityData(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * adds entity data to the store
 *
 * @param {string} model
 * @param {Object} modelSchema
 * @param {Array|Object} rawData - entities indexed by entityID
 * @return {Object[]} entities
 */


var hydrateEntities =
/*#__PURE__*/
function () {
  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee5(model, modelSchema, rawData) {
    var entityData, hydratedEntities, _i4, _Object$values, moreEntityData, entities;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee5$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            entityData = isDataObject(rawData) ? Object.values(rawData) : rawData;

            if (!isDataObject(entityData)) {
              _context6.next = 14;
              break;
            }

            hydratedEntities = {};
            _i4 = 0, _Object$values = Object.values(entityData);

          case 4:
            if (!(_i4 < _Object$values.length)) {
              _context6.next = 13;
              break;
            }

            moreEntityData = _Object$values[_i4];
            _context6.next = 8;
            return hydrateEntities(model, modelSchema, moreEntityData);

          case 8:
            entities = _context6.sent;
            hydratedEntities = _objectSpread({}, hydratedEntities, {}, entities);

          case 10:
            _i4++;
            _context6.next = 4;
            break;

          case 13:
            return _context6.abrupt("return", hydratedEntities);

          case 14:
            return _context6.abrupt("return", hydrateAndReceiveEntities(model, modelSchema, entityData));

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee5);
  }));

  return function hydrateEntities(_x7, _x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * creates entities from data amd adds them to the store
 *
 * @param {string} model
 * @param {Object} modelSchema
 * @param {Object[]} entities
 * @return {Object[]} entities
 */


var hydrateAndReceiveEntities =
/*#__PURE__*/
function () {
  var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee6(model, modelSchema, entities) {
    var resolvedEntities, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, entityData, entity;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee6$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            resolvedEntities = {};

            if (!Array.isArray(entities)) {
              _context7.next = 30;
              break;
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context7.prev = 5;
            _iterator2 = entities[Symbol.iterator]();

          case 7:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context7.next = 16;
              break;
            }

            entityData = _step2.value;
            _context7.next = 11;
            return hydrateEntity(model, {
              schema: modelSchema
            }, entityData);

          case 11:
            entity = _context7.sent;

            if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_12__["isModelEntityOfModel"])(entity, model)) {
              resolvedEntities[entity.id] = entity;
            } else {
              warning__WEBPACK_IMPORTED_MODULE_9___default()(false, 'INVALID ENTITY');
            }

          case 13:
            _iteratorNormalCompletion2 = true;
            _context7.next = 7;
            break;

          case 16:
            _context7.next = 22;
            break;

          case 18:
            _context7.prev = 18;
            _context7.t0 = _context7["catch"](5);
            _didIteratorError2 = true;
            _iteratorError2 = _context7.t0;

          case 22:
            _context7.prev = 22;
            _context7.prev = 23;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 25:
            _context7.prev = 25;

            if (!_didIteratorError2) {
              _context7.next = 28;
              break;
            }

            throw _iteratorError2;

          case 28:
            return _context7.finish(25);

          case 29:
            return _context7.finish(22);

          case 30:
            return _context7.abrupt("return", resolvedEntities);

          case 31:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee6, null, [[5, 18, 22, 30], [23,, 25, 29]]);
  }));

  return function hydrateAndReceiveEntities(_x10, _x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * adds entity data to the store
 *
 * @param {Object} rawData
 * @param {Object[]} hydratedEntities
 * @param {Object} related
 * @return {Object[]} entities
 */


var hydrateRelations =
/*#__PURE__*/
function () {
  var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee7(rawData, hydratedEntities, related) {
    var _i5, _Object$entries, _Object$entries$_i, modelName, entities, relatedEntities, relatedIds, _i6, _Object$values2, entity, _i7, _Object$entries2, _Object$entries2$_i, relatedModelName, relatedEntityIds, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, relatedEntityId, relatedEntity;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee7$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            if (!(isDataObject(hydratedEntities) && isDataObject(related))) {
              _context8.next = 46;
              break;
            }

            _i5 = 0, _Object$entries = Object.entries(hydratedEntities);

          case 2:
            if (!(_i5 < _Object$entries.length)) {
              _context8.next = 46;
              break;
            }

            _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries[_i5], 2), modelName = _Object$entries$_i[0], entities = _Object$entries$_i[1];

            if (!related.hasOwnProperty(modelName)) {
              _context8.next = 43;
              break;
            }

            relatedEntities = related[modelName];
            relatedIds = {};
            _i6 = 0, _Object$values2 = Object.values(entities);

          case 8:
            if (!(_i6 < _Object$values2.length)) {
              _context8.next = 42;
              break;
            }

            entity = _Object$values2[_i6];

            if (!relatedEntities.hasOwnProperty(entity.id)) {
              _context8.next = 39;
              break;
            }

            _i7 = 0, _Object$entries2 = Object.entries(relatedEntities[entity.id]);

          case 12:
            if (!(_i7 < _Object$entries2.length)) {
              _context8.next = 39;
              break;
            }

            _Object$entries2$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_Object$entries2[_i7], 2), relatedModelName = _Object$entries2$_i[0], relatedEntityIds = _Object$entries2$_i[1];
            relatedIds[relatedModelName] = relatedIds[relatedModelName] || [];
            relatedIds[relatedModelName].push(entity.id);

            if (!Array.isArray(relatedEntityIds)) {
              _context8.next = 36;
              break;
            }

            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context8.prev = 20;

            for (_iterator3 = relatedEntityIds[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              relatedEntityId = _step3.value;
              relatedEntity = retrieveHydratedEntity(relatedModelName, relatedEntityId, hydratedEntities);

              if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_12__["isModelEntityOfModel"])(relatedEntity, relatedModelName)) {
                resolveRelationRecordForRelation(relatedEntity, modelName, entity.id);
              } else {
                warning__WEBPACK_IMPORTED_MODULE_9___default()(false, 'INVALID ENTITY RELATION');
              }
            }

            _context8.next = 28;
            break;

          case 24:
            _context8.prev = 24;
            _context8.t0 = _context8["catch"](20);
            _didIteratorError3 = true;
            _iteratorError3 = _context8.t0;

          case 28:
            _context8.prev = 28;
            _context8.prev = 29;

            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }

          case 31:
            _context8.prev = 31;

            if (!_didIteratorError3) {
              _context8.next = 34;
              break;
            }

            throw _iteratorError3;

          case 34:
            return _context8.finish(31);

          case 35:
            return _context8.finish(28);

          case 36:
            _i7++;
            _context8.next = 12;
            break;

          case 39:
            _i6++;
            _context8.next = 8;
            break;

          case 42:
            resolveGetRelatedEntitiesForIds(modelName, relatedIds);

          case 43:
            _i5++;
            _context8.next = 2;
            break;

          case 46:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee7, null, [[20, 24, 28, 36], [29,, 31, 35]]);
  }));

  return function hydrateRelations(_x13, _x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}();
/**
 * @param {string} modelName
 * @param {number|string} entityID
 * @param {Object} hydratedEntities
 * @return {Object} entity
 */


var retrieveHydratedEntity = function retrieveHydratedEntity(modelName, entityID, hydratedEntities) {
  if (hydratedEntities.hasOwnProperty(modelName) && hydratedEntities[modelName].hasOwnProperty(entityID)) {
    return hydratedEntities[modelName][entityID];
  }

  return null;
};

var isDataObject = function isDataObject(dataObject) {
  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(dataObject) === 'object' && !Array.isArray(dataObject);
};

/* harmony default export */ __webpack_exports__["default"] = (hydrateData);

/***/ }),

/***/ "./assets/src/editor/events/initialization/use-editor-initialization.js":
/*!******************************************************************************!*\
  !*** ./assets/src/editor/events/initialization/use-editor-initialization.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncIterator */ "./node_modules/@babel/runtime/helpers/asyncIterator.js");
/* harmony import */ var _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_hydrator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-hydrator */ "./assets/src/editor/events/initialization/data-hydrator.js");





/**
 * External imports
 */


/**
 * External imports
 */


var EMPTY_ARRAY = [];
var EMPTY_OBJECT = {};

var useEditorInitialization = function useEditorInitialization(eventData) {
  var dataGenerator = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useRef"])(Object(_data_hydrator__WEBPACK_IMPORTED_MODULE_6__["default"])(eventData));

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      initialized = _useState2[0],
      setInitialized = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useState"])(EMPTY_OBJECT),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      event = _useState4[0],
      setEvent = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useState"])(EMPTY_ARRAY),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      eventDates = _useState6[0],
      setEventDates = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useState"])(EMPTY_ARRAY),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      tickets = _useState8[0],
      setTickets = _useState8[1];

  var _useState9 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useState"])(EMPTY_OBJECT),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState9, 2),
      venue = _useState10[0],
      setVenue = _useState10[1];

  var eventLoaded = event !== EMPTY_OBJECT;
  var eventDatesLoaded = eventDates !== EMPTY_ARRAY;
  var ticketsLoaded = tickets !== EMPTY_ARRAY;
  var venueLoaded = venue !== EMPTY_OBJECT;

  var initializeEntities =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(generator) {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, entities;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _context.prev = 2;
              _iterator = _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_3___default()(generator);

            case 4:
              _context.next = 6;
              return _iterator.next();

            case 6:
              _step = _context.sent;
              _iteratorNormalCompletion = _step.done;
              _context.next = 10;
              return _step.value;

            case 10:
              _value = _context.sent;

              if (_iteratorNormalCompletion) {
                _context.next = 20;
                break;
              }

              entities = _value;

              if (entities.hasOwnProperty('event') && Array.isArray(entities.event)) {
                setEvent(entities.event.pop());
              }

              if (entities.hasOwnProperty('datetime') && Array.isArray(entities.datetime) && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(entities.datetime)) {
                setEventDates(entities.datetime);
              }

              if (entities.hasOwnProperty('ticket') && Array.isArray(entities.ticket) && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(entities.ticket)) {
                setTickets(entities.ticket);
              }

              if (entities.hasOwnProperty('venue') && Array.isArray(entities.venue) && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(entities.venue)) {
                setVenue(entities.venue.pop());
              }

            case 17:
              _iteratorNormalCompletion = true;
              _context.next = 4;
              break;

            case 20:
              _context.next = 26;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](2);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 26:
              _context.prev = 26;
              _context.prev = 27;

              if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
                _context.next = 31;
                break;
              }

              _context.next = 31;
              return _iterator.return();

            case 31:
              _context.prev = 31;

              if (!_didIteratorError) {
                _context.next = 34;
                break;
              }

              throw _iteratorError;

            case 34:
              return _context.finish(31);

            case 35:
              return _context.finish(26);

            case 36:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 22, 26, 36], [27,, 31, 35]]);
    }));

    return function initializeEntities(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (!initialized) {
    initializeEntities(dataGenerator.current).then(function () {
      setInitialized(true);
    });
  }

  return {
    initialized: initialized,
    eventLoaded: eventLoaded,
    eventDatesLoaded: eventDatesLoaded,
    ticketsLoaded: ticketsLoaded,
    venueLoaded: venueLoaded
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useEditorInitialization);

/***/ }),

/***/ "./assets/src/editor/events/initialization/use-editor-persistence.js":
/*!***************************************************************************!*\
  !*** ./assets/src/editor/events/initialization/use-editor-persistence.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);



/**
 * External imports
 */



/**
 * A custom hook connecting with the update/publish submit action in a WordPress
 * post editor that will persist any dirty store state for the `eventespresso/core`
 * store when submit is triggered by  user.
 *
 * @param {number} eventId  The eventId (post id) for the current editor
 *                          instance.  Currently used for breaking cache on
 *                          callbacks.
 */

var useEditorPersistence = function useEditorPersistence(eventId) {
  var eventProcessed = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])('eventespresso/core'),
      persistAllDeletes = _useDispatch.persistAllDeletes,
      persistAllAddRelations = _useDispatch.persistAllAddRelations,
      persistAllDeleteRelations = _useDispatch.persistAllDeleteRelations,
      persistAllEntities = _useDispatch.persistAllEntities;

  var persistAll = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(eventProcessed.current === false)) {
                _context.next = 13;
                break;
              }

              event.preventDefault();
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('#submitpost').find('#major-publishing-actions .spinner', '#minor-publishing-actions .spinner').addClass('is-active');
              _context.next = 5;
              return persistAllDeletes();

            case 5:
              _context.next = 7;
              return persistAllEntities();

            case 7:
              _context.next = 9;
              return persistAllAddRelations();

            case 9:
              _context.next = 11;
              return persistAllDeleteRelations();

            case 11:
              eventProcessed.current = true;
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('form#post').trigger('submit.edit-post');

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [eventId]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()('form#post').on('submit', persistAll);
    return function () {
      return jquery__WEBPACK_IMPORTED_MODULE_4___default()('form#post').off('submit', persistAll);
    };
  }, [persistAll]);
};

/* harmony default export */ __webpack_exports__["default"] = (useEditorPersistence);

/***/ }),

/***/ "./assets/src/editor/events/mutations/ticket-mutations.js":
/*!****************************************************************!*\
  !*** ./assets/src/editor/events/mutations/ticket-mutations.js ***!
  \****************************************************************/
/*! exports provided: updateTicketQtyAfterCapacityChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTicketQtyAfterCapacityChange", function() { return updateTicketQtyAfterCapacityChange; });
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

/**
 * A mutation function to update the ticket quantity
 * based on the related datetime capacity change.
 *
 * @param {number} capacity  The datetime capacity.
 */

var updateTicketQtyAfterCapacityChange = function updateTicketQtyAfterCapacityChange(capacity) {
  return function (ticket) {
    // Make sure that the non negative ticket qty value is compared with
    // a non negative datetime capacity value in Math.min()
    var nonNegativeDTTCapacity = Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_0__["parseInfinity"])(capacity, false, false);
    var nonNegativeTKTQty = Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_0__["parseInfinity"])(ticket.qty, false, false);
    var qty = Math.min(nonNegativeDTTCapacity, nonNegativeTKTQty);
    ticket.qty = Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_0__["parseInfinity"])(qty, true, true);
  };
};

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/cancel-ticket-assignments-button.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/cancel-ticket-assignments-button.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External imports
 */



var FormCancelButton = _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["twoColumnAdminFormLayout"].FormCancelButton;

var nullFunc = function nullFunc() {
  return true;
};
/**
 * @function
 * @param {Function} closeEditor
 * @param {Function} processChanges
 * @return {Object} rendered submit button
 */


var CancelTicketAssignmentsButton = function CancelTicketAssignmentsButton(_ref) {
  var _ref$closeEditor = _ref.closeEditor,
      closeEditor = _ref$closeEditor === void 0 ? nullFunc : _ref$closeEditor,
      _ref$beforeEditorClos = _ref.beforeEditorClose,
      beforeEditorClose = _ref$beforeEditorClos === void 0 ? nullFunc : _ref$beforeEditorClos;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormCancelButton, {
      onClick: function onClick(click) {
        if (beforeEditorClose()) {
          closeEditor(click);
        }
      }
    });
  }, [beforeEditorClose]);
};

CancelTicketAssignmentsButton.propTypes = {
  closeEditor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  beforeEditorClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CancelTicketAssignmentsButton);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/edit-all-ticket-assignments-button.js":
/*!***************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/edit-all-ticket-assignments-button.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket-assignments-manager-modal */ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager-modal.js");
/* harmony import */ var _use_ticket_assignments_editor_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-ticket-assignments-editor-id */ "./assets/src/editor/events/ticket-assignments-manager/use-ticket-assignments-editor-id.js");


/**
 * External imports
 */






/**
 * Internal dependencies
 */



/**
 * DatesListFilterBar
 * filters for controlling the display of a list of Event Dates
 *
 * @param {BaseEntity[]} eventDates
 * @return {Object} EditorDatesListView with added DateListFilters
 */

var EditAllTicketAssignmentsButton = function EditAllTicketAssignmentsButton(_ref) {
  var eventDates = _ref.eventDates;

  var _useEventEditorTicket = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4__["useEventEditorTickets"])(),
      tickets = _useEventEditorTicket.tickets;

  var editorId = Object(_use_ticket_assignments_editor_id__WEBPACK_IMPORTED_MODULE_7__["default"])(null, null, eventDates, tickets);
  var openEditor = Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__["useOpenEditor"])(editorId);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["EspressoButton"], {
      icon: 'tickets-alt',
      buttonText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Ticket Assignments', 'event_espresso'),
      onClick: openEditor,
      disabled: !(Array.isArray(tickets) && tickets.length)
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      editorId: editorId,
      allDateEntities: eventDates,
      allTicketEntities: tickets,
      editorTitle: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Ticket Assignments for All Event Dates', ' event_espresso')
    }));
  }, [editorId, eventDates, tickets]);
};

EditAllTicketAssignmentsButton.propTypes = {
  eventDates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EditAllTicketAssignmentsButton);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/filters/actions.js":
/*!********************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/filters/actions.js ***!
  \********************************************************************************/
/*! exports provided: showArchivedDatesAction, showExpiredDatesAction, showArchivedTicketsAction, showExpiredTicketsAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArchivedDatesAction", function() { return showArchivedDatesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showExpiredDatesAction", function() { return showExpiredDatesAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArchivedTicketsAction", function() { return showArchivedTicketsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showExpiredTicketsAction", function() { return showExpiredTicketsAction; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/editor/events/ticket-assignments-manager/filters/constants.js");
/**
 * Internal imports
 */

var showArchivedDatesAction = {
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SHOW_ARCHIVED_DATES"]
};
var showExpiredDatesAction = {
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SHOW_EXPIRED_DATES"]
};
var showArchivedTicketsAction = {
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SHOW_ARCHIVED_TICKETS"]
};
var showExpiredTicketsAction = {
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["SHOW_EXPIRED_TICKETS"]
};

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/filters/constants.js":
/*!**********************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/filters/constants.js ***!
  \**********************************************************************************/
/*! exports provided: DEFAULT_FILTER_STATE, SHOW_ARCHIVED_DATES, SHOW_EXPIRED_DATES, SHOW_ARCHIVED_TICKETS, SHOW_EXPIRED_TICKETS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_FILTER_STATE", function() { return DEFAULT_FILTER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ARCHIVED_DATES", function() { return SHOW_ARCHIVED_DATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_EXPIRED_DATES", function() { return SHOW_EXPIRED_DATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ARCHIVED_TICKETS", function() { return SHOW_ARCHIVED_TICKETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_EXPIRED_TICKETS", function() { return SHOW_EXPIRED_TICKETS; });
/**
 * default state object
 */
var DEFAULT_FILTER_STATE = {
  showArchivedDates: false,
  showExpiredDates: false,
  showArchivedTickets: false,
  showExpiredTickets: false
};
/**
 * action types
 */

var SHOW_ARCHIVED_DATES = 'SHOW_ARCHIVED_DATES';
var SHOW_EXPIRED_DATES = 'SHOW_EXPIRED_DATES';
var SHOW_ARCHIVED_TICKETS = 'SHOW_ARCHIVED_TICKETS';
var SHOW_EXPIRED_TICKETS = 'SHOW_EXPIRED_TICKETS';

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/filters/date-filters.js":
/*!*************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/filters/date-filters.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./assets/src/editor/events/ticket-assignments-manager/filters/actions.js");


/**
 * External imports
 */




/**
 * Internal imports
 */


var FormColumn = _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["twoColumnAdminFormLayout"].FormColumn;
/**
 * controls for toggling date filters
 *
 * @function
 * @param {boolean} showDateFilters
 * @param {boolean} showArchivedDates
 * @param {boolean} showExpiredDates
 * @param {number} dateFiltersOffset
 * @param {Function} setFilter
 * @return {Object} rendered date filter toggles
 */

var DateFilters = function DateFilters(_ref) {
  var showDateFilters = _ref.showDateFilters,
      showArchivedDates = _ref.showArchivedDates,
      showExpiredDates = _ref.showExpiredDates,
      dateFiltersOffset = _ref.dateFiltersOffset,
      setFilter = _ref.setFilter;
  var toggleArchivedDates = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return setFilter(_actions__WEBPACK_IMPORTED_MODULE_4__["showArchivedDatesAction"]);
  }, [setFilter, _actions__WEBPACK_IMPORTED_MODULE_4__["showArchivedDatesAction"]]);
  var toggleExpiredDates = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return setFilter(_actions__WEBPACK_IMPORTED_MODULE_4__["showExpiredDatesAction"]);
  }, [setFilter, _actions__WEBPACK_IMPORTED_MODULE_4__["showExpiredDatesAction"]]);
  return showDateFilters && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormColumn, {
    colSize: '2h',
    offset: dateFiltersOffset
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    checked: showArchivedDates,
    instanceId: 'showArchivedDates',
    label: showArchivedDates ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('archived dates shown', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('show archived dates?', 'event_espresso'),
    onChange: toggleArchivedDates
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormColumn, {
    colSize: '2h'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    checked: showExpiredDates,
    instanceId: 'showExpiredDates',
    label: showExpiredDates ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('expired dates shown', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('show expired dates?', 'event_espresso'),
    onChange: toggleExpiredDates
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DateFilters);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/filters/filter-notice.js":
/*!**************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/filters/filter-notice.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External imports
 */


var FormInfo = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormInfo;
/**
 * FormInfo component about ticket filters
 *
 * @function
 * @param {boolean} showFilterNotice
 * @param {number} dateFiltersOffset
 * @return {Object} rendered filter notice
 */

var FilterNotice = function FilterNotice(_ref) {
  var dateFiltersOffset = _ref.dateFiltersOffset;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInfo, {
    formInfo: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Not seeing any dates or tickets? Try changing the filters above.', 'event_espresso'),
    dashicon: 'warning',
    dismissable: false,
    colSize: 12 - dateFiltersOffset,
    offset: dateFiltersOffset
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FilterNotice);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/filters/filters.js":
/*!********************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/filters/filters.js ***!
  \********************************************************************************/
/*! exports provided: filterDates, filterTickets, filterArchivedDates, filterExpiredDates, filterArchivedTickets, filterExpiredTickets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDates", function() { return filterDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTickets", function() { return filterTickets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterArchivedDates", function() { return filterArchivedDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterExpiredDates", function() { return filterExpiredDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterArchivedTickets", function() { return filterArchivedTickets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterExpiredTickets", function() { return filterExpiredTickets; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


var isTrashed = _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isTrashed,
    isExpiredDate = _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["dateTimeModel"].isExpired;
var isArchived = _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["ticketModel"].isArchived,
    isExpiredTicket = _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["ticketModel"].isExpired;
/**
 * removes archived and expired dates
 *
 * @function
 * @param {Array} dateEntities
 * @param {boolean} showArchivedDates
 * @param {boolean} showExpiredDates
 * @return {Array} filtered date entities
 */

var filterDates = function filterDates(dateEntities, showArchivedDates, showExpiredDates) {
  return filterExpiredDates(filterArchivedDates(dateEntities, showArchivedDates), showExpiredDates);
};
/**
 * removes archived and expired tickets
 *
 * @function
 * @param {Array} ticketEntities
 * @param {boolean} showArchivedTickets
 * @param {boolean} showExpiredTickets
 * @return {Array} filtered ticket entities
 */

var filterTickets = function filterTickets(ticketEntities, showArchivedTickets, showExpiredTickets) {
  return filterExpiredTickets(filterArchivedTickets(ticketEntities, showArchivedTickets), showExpiredTickets);
};
/**
 * removes archived dates
 *
 * @function
 * @param {Array} dateEntities
 * @param {boolean} showArchivedDates
 * @return {Array} filtered date entities
 */

var filterArchivedDates = function filterArchivedDates(dateEntities, showArchivedDates) {
  return !showArchivedDates ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
    return !isTrashed(dateEntity);
  }) : dateEntities;
};
/**
 * removes expired dates
 *
 * @function
 * @param {Array} dateEntities
 * @param {boolean} showExpiredDates
 * @return {Array} filtered date entities
 */

var filterExpiredDates = function filterExpiredDates(dateEntities, showExpiredDates) {
  return !showExpiredDates ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(dateEntities, function (dateEntity) {
    return !isExpiredDate(dateEntity);
  }) : dateEntities;
};
/**
 * removes archived tickets
 *
 * @function
 * @param {Array} ticketEntities
 * @param {boolean} showArchivedTickets
 * @return {Array} filtered ticket entities
 */

var filterArchivedTickets = function filterArchivedTickets(ticketEntities, showArchivedTickets) {
  return !showArchivedTickets ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(ticketEntities, function (ticketEntity) {
    return !isArchived(ticketEntity);
  }) : ticketEntities;
};
/**
 * removes expired tickets
 *
 * @function
 * @param {Array} ticketEntities
 * @param {boolean} showExpiredTickets
 * @return {Array} filtered ticket entities
 */

var filterExpiredTickets = function filterExpiredTickets(ticketEntities, showExpiredTickets) {
  return !showExpiredTickets ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(ticketEntities, function (ticketEntity) {
    return !isExpiredTicket(ticketEntity);
  }) : ticketEntities;
};

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/filters/helpers.js":
/*!********************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/filters/helpers.js ***!
  \********************************************************************************/
/*! exports provided: getShowDateFilters, getShowTicketFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowDateFilters", function() { return getShowDateFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowTicketFilters", function() { return getShowTicketFilters; });
/**
 * @function
 * @param {boolean} forSingleDate
 * @param {number} dateCount
 * @param {number} unfilteredDatesCount
 * @param {boolean} showArchivedDates
 * @param {boolean} showExpiredDates
 * @return {boolean} true if filters should be shown
 */
var getShowDateFilters = function getShowDateFilters(forSingleDate, dateCount, unfilteredDatesCount, showArchivedDates, showExpiredDates) {
  if (forSingleDate) {
    return false;
  }

  var showDateFilters = dateCount !== unfilteredDatesCount || dateCount === unfilteredDatesCount && (showArchivedDates || showExpiredDates);

  if (dateCount === 1 && !(showArchivedDates || showExpiredDates)) {
    showDateFilters = false;
  }

  return showDateFilters;
};
/**
 * @function
 * @param {boolean} forSingleTicket
 * @param {number} ticketCount
 * @param {number} unfilteredTicketCount
 * @param {boolean} showArchivedTickets
 * @param {boolean} showExpiredTickets
 * @return {boolean} true if filters should be shown
 */

var getShowTicketFilters = function getShowTicketFilters(forSingleTicket, ticketCount, unfilteredTicketCount, showArchivedTickets, showExpiredTickets) {
  if (forSingleTicket) {
    return false;
  }

  var showTicketFilters = ticketCount !== unfilteredTicketCount || ticketCount === unfilteredTicketCount && (showArchivedTickets || showExpiredTickets);

  if (ticketCount === 1 && !(showArchivedTickets || showExpiredTickets)) {
    showTicketFilters = false;
  }

  return showTicketFilters;
};

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/filters/index.js":
/*!******************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/filters/index.js ***!
  \******************************************************************************/
/*! exports provided: TicketAssignmentsFilters, useTicketAssignmentsFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ticket_assignments_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-assignments-filters */ "./assets/src/editor/events/ticket-assignments-manager/filters/ticket-assignments-filters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketAssignmentsFilters", function() { return _ticket_assignments_filters__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _use_ticket_assignments_filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-ticket-assignments-filters */ "./assets/src/editor/events/ticket-assignments-manager/filters/use-ticket-assignments-filters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketAssignmentsFilters", function() { return _use_ticket_assignments_filters__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/filters/reducer.js":
/*!********************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/filters/reducer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./assets/src/editor/events/ticket-assignments-manager/filters/constants.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External imports
 */

/**
 * Internal imports
 */


/**
* @function
* @param {Object} state
* @param {Object} action
* @return {Object} state
*/

var filterReducer = function filterReducer(state, action) {
  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_2__["SHOW_ARCHIVED_DATES"]:
      return _objectSpread({}, state, {
        showArchivedDates: !state.showArchivedDates
      });

    case _constants__WEBPACK_IMPORTED_MODULE_2__["SHOW_EXPIRED_DATES"]:
      return _objectSpread({}, state, {
        showExpiredDates: !state.showExpiredDates
      });

    case _constants__WEBPACK_IMPORTED_MODULE_2__["SHOW_ARCHIVED_TICKETS"]:
      return _objectSpread({}, state, {
        showArchivedTickets: !state.showArchivedTickets
      });

    case _constants__WEBPACK_IMPORTED_MODULE_2__["SHOW_EXPIRED_TICKETS"]:
      return _objectSpread({}, state, {
        showExpiredTickets: !state.showExpiredTickets
      });
  }

  throw new Error(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])('The "%s" action has no handling implemented', action.type));
};

/* harmony default export */ __webpack_exports__["default"] = (filterReducer);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/filters/ticket-assignments-filters.js":
/*!***************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/filters/ticket-assignments-filters.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _date_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-filters */ "./assets/src/editor/events/ticket-assignments-manager/filters/date-filters.js");
/* harmony import */ var _filter_notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-notice */ "./assets/src/editor/events/ticket-assignments-manager/filters/filter-notice.js");
/* harmony import */ var _ticket_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticket-filters */ "./assets/src/editor/events/ticket-assignments-manager/filters/ticket-filters.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./assets/src/editor/events/ticket-assignments-manager/filters/helpers.js");


/**
 * External imports
 */


/**
 * Internal imports
 */





var FormRow = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormRow;
/**
 * filters for toggling display of archived and expired entities
 *
 * @function
 * @param {Function} setFilter
 * @param {Object} filterState
 * @param {boolean} forSingleDate
 * @param {boolean} forSingleTicket
 * @param {number} unfilteredDatesCount
 * @param {number} unfilteredTicketCount
 * @param {number} filteredDatesCount
 * @param {number} filteredTicketsCount
 * @return {Object} rendered date filter toggles
 */

var TicketAssignmentsFilters = function TicketAssignmentsFilters(_ref) {
  var setFilter = _ref.setFilter,
      filterState = _ref.filterState,
      forSingleDate = _ref.forSingleDate,
      forSingleTicket = _ref.forSingleTicket,
      unfilteredDatesCount = _ref.unfilteredDatesCount,
      unfilteredTicketCount = _ref.unfilteredTicketCount,
      filteredDatesCount = _ref.filteredDatesCount,
      filteredTicketsCount = _ref.filteredTicketsCount;
  var showFilterNotice = filteredDatesCount < 1 || filteredTicketsCount < 1;
  var showDateFilters = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getShowDateFilters"])(forSingleDate, filteredDatesCount, unfilteredDatesCount, filterState.showArchivedDates, filterState.showExpiredDates);
  }, [forSingleDate, filteredDatesCount, unfilteredDatesCount, filterState.showArchivedDates, filterState.showExpiredDates]);
  var showTicketFilters = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getShowTicketFilters"])(forSingleTicket, filteredTicketsCount, unfilteredTicketCount, filterState.showArchivedTickets, filterState.showExpiredTickets);
  }, [forSingleTicket, filteredTicketsCount, unfilteredTicketCount, filterState.showArchivedTickets, filterState.showExpiredTickets]);
  var dateFiltersOffset = showDateFilters && showTicketFilters ? 2 : 7;
  var ticketFiltersOffset = showDateFilters && showTicketFilters ? 0 : 7;
  var filterNotice = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return showFilterNotice ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_filter_notice__WEBPACK_IMPORTED_MODULE_3__["default"], {
      dateFiltersOffset: dateFiltersOffset
    }) : null;
  }, [showFilterNotice, dateFiltersOffset]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'ee-ticket-assignments-manager-filters'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_date_filters__WEBPACK_IMPORTED_MODULE_2__["default"], {
    showDateFilters: showDateFilters,
    showArchivedDates: filterState.showArchivedDates,
    showExpiredDates: filterState.showExpiredDates,
    dateFiltersOffset: dateFiltersOffset,
    setFilter: setFilter
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ticket_filters__WEBPACK_IMPORTED_MODULE_4__["default"], {
    showTicketFilters: showTicketFilters,
    showArchivedTickets: filterState.showArchivedTickets,
    showExpiredTickets: filterState.showExpiredTickets,
    ticketFiltersOffset: ticketFiltersOffset,
    setFilter: setFilter
  })), filterNotice);
};

/* harmony default export */ __webpack_exports__["default"] = (TicketAssignmentsFilters);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/filters/ticket-filters.js":
/*!***************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/filters/ticket-filters.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./assets/src/editor/events/ticket-assignments-manager/filters/actions.js");


/**
 * External imports
 */




/**
 * Internal imports
 */


var FormColumn = _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["twoColumnAdminFormLayout"].FormColumn;
/**
 * controls for toggling ticket filters
 *
 * @function
 * @param {boolean} showTicketFilters
 * @param {boolean} showArchivedTickets
 * @param {boolean} showExpiredTickets
 * @param {number} ticketFiltersOffset
 * @param {Function} setFilter
 * @return {Object} rendered ticket filter toggles
 */

var TicketFilters = function TicketFilters(_ref) {
  var showTicketFilters = _ref.showTicketFilters,
      showArchivedTickets = _ref.showArchivedTickets,
      showExpiredTickets = _ref.showExpiredTickets,
      ticketFiltersOffset = _ref.ticketFiltersOffset,
      setFilter = _ref.setFilter;
  var toggleArchivedTickets = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return setFilter(_actions__WEBPACK_IMPORTED_MODULE_4__["showArchivedTicketsAction"]);
  }, [setFilter, _actions__WEBPACK_IMPORTED_MODULE_4__["showArchivedTicketsAction"]]);
  var toggleExpiredTickets = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return setFilter(_actions__WEBPACK_IMPORTED_MODULE_4__["showExpiredTicketsAction"]);
  }, [setFilter, _actions__WEBPACK_IMPORTED_MODULE_4__["showExpiredTicketsAction"]]);
  return showTicketFilters && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormColumn, {
    colSize: '2h',
    offset: ticketFiltersOffset
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    checked: showArchivedTickets,
    instanceId: 'showArchivedTickets',
    label: showArchivedTickets ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('archived tickets shown', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('show archived tickets?', 'event_espresso'),
    onChange: toggleArchivedTickets
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormColumn, {
    colSize: '2h'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    checked: showExpiredTickets,
    instanceId: 'showExpiredTickets',
    label: showExpiredTickets ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('expired tickets shown', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('show expired tickets?', 'event_espresso'),
    onChange: toggleExpiredTickets
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TicketFilters);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/filters/use-ticket-assignments-filters.js":
/*!*******************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/filters/use-ticket-assignments-filters.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./assets/src/editor/events/ticket-assignments-manager/filters/reducer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./assets/src/editor/events/ticket-assignments-manager/filters/constants.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters */ "./assets/src/editor/events/ticket-assignments-manager/filters/filters.js");


/**
 * External imports
 */


/**
 * Internal imports
 */




/**
 * filters for toggling display of archived and expired entities
 *
 * @function
 * @param {BaseEntity} dateEntity
 * @param {BaseEntity[]} dateEntities
 * @param {BaseEntity} ticketEntity
 * @param {BaseEntity[]} ticketEntities
 * @return {Object} rendered date filter toggles
 */

var useTicketAssignmentsFilters = function useTicketAssignmentsFilters(_ref) {
  var dateEntity = _ref.dateEntity,
      _ref$dateEntities = _ref.dateEntities,
      dateEntities = _ref$dateEntities === void 0 ? [] : _ref$dateEntities,
      ticketEntity = _ref.ticketEntity,
      _ref$ticketEntities = _ref.ticketEntities,
      ticketEntities = _ref$ticketEntities === void 0 ? [] : _ref$ticketEntities;

  var _useReducer = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_3__["default"], _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_FILTER_STATE"]),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),
      filterState = _useReducer2[0],
      setFilter = _useReducer2[1];

  var showArchivedDates = filterState.showArchivedDates,
      showExpiredDates = filterState.showExpiredDates,
      showArchivedTickets = filterState.showArchivedTickets,
      showExpiredTickets = filterState.showExpiredTickets;
  var filteredDateEntities = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return dateEntity ? [dateEntity] : Object(_filters__WEBPACK_IMPORTED_MODULE_5__["filterDates"])(dateEntities, showArchivedDates, showExpiredDates);
  }, [dateEntity, dateEntities, showArchivedDates, showExpiredDates]);
  var filteredTicketEntities = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return ticketEntity ? [ticketEntity] : Object(_filters__WEBPACK_IMPORTED_MODULE_5__["filterTickets"])(ticketEntities, showArchivedTickets, showExpiredTickets);
  }, [ticketEntity, ticketEntities, showArchivedTickets, showExpiredTickets]);
  return {
    setFilter: setFilter,
    filterState: filterState,
    forSingleDate: Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(dateEntity, 'datetime'),
    forSingleTicket: Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(ticketEntity, 'ticket'),
    filteredDateEntities: filteredDateEntities,
    filteredTicketEntities: filteredTicketEntities,
    unfilteredDatesCount: Array.isArray(dateEntities) ? dateEntities.length : 0,
    unfilteredTicketCount: Array.isArray(ticketEntities) ? ticketEntities.length : 0,
    filteredDatesCount: Array.isArray(filteredDateEntities) ? filteredDateEntities.length : 0,
    filteredTicketsCount: Array.isArray(filteredTicketEntities) ? filteredTicketEntities.length : 0
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketAssignmentsFilters);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/hooks/index.js":
/*!****************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/hooks/index.js ***!
  \****************************************************************************/
/*! exports provided: useAssignmentAction, useAssignmentsCalculator, useAssignmentsErrorMessage, useProcessTicketAssignments, useTicketAssignments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_assignment_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-assignment-action */ "./assets/src/editor/events/ticket-assignments-manager/hooks/use-assignment-action.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAssignmentAction", function() { return _use_assignment_action__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _use_assignments_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-assignments-calculator */ "./assets/src/editor/events/ticket-assignments-manager/hooks/use-assignments-calculator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAssignmentsCalculator", function() { return _use_assignments_calculator__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _use_assignments_error_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-assignments-error-message */ "./assets/src/editor/events/ticket-assignments-manager/hooks/use-assignments-error-message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAssignmentsErrorMessage", function() { return _use_assignments_error_message__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _use_process_ticket_assignments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-process-ticket-assignments */ "./assets/src/editor/events/ticket-assignments-manager/hooks/use-process-ticket-assignments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useProcessTicketAssignments", function() { return _use_process_ticket_assignments__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _use_ticket_assignments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-ticket-assignments */ "./assets/src/editor/events/ticket-assignments-manager/hooks/use-ticket-assignments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketAssignments", function() { return _use_ticket_assignments__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/hooks/use-assignment-action.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/hooks/use-assignment-action.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_assign_remove_tickets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/assign-remove-tickets */ "./assets/src/editor/events/ticket-assignments-manager/utils/assign-remove-tickets.js");
/**
 * External imports
 */



/**
 * Internal imports
 */


/**
 * determines what callback to use when modifying a ticket assignment
 *
 * @function
 * @param {Function} setAssignedState
 * @param {boolean} currentlyAssigned
 * @return {Function} ticket cell button action
 */

var useAssignmentAction = function useAssignmentAction(setAssignedState, currentlyAssigned) {
  /**
   * @function
   * @return {Function} add ticket action
   */
  var assignTicket = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (dateId, ticketId) {
    setAssignedState(function (prevState) {
      return Object(_utils_assign_remove_tickets__WEBPACK_IMPORTED_MODULE_3__["assignTicketEntity"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(prevState), dateId, ticketId);
    });
  }, []);
  /**
   * @function
   * @return {Function} remove ticket action
   */

  var removeTicket = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (dateId, ticketId) {
    setAssignedState(function (prevState) {
      return Object(_utils_assign_remove_tickets__WEBPACK_IMPORTED_MODULE_3__["removeTicketEntity"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(prevState), dateId, ticketId);
    });
  }, []);
  return currentlyAssigned ? removeTicket : assignTicket;
};

useAssignmentAction.propTypes = {
  setAssignedState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  currentlyAssigned: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (useAssignmentAction);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/hooks/use-assignments-calculator.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/hooks/use-assignments-calculator.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External imports
 */



var INITIAL_STATE = {
  assigned: {},
  removed: {}
};
/**
 * Temporary description for hook to be fleshed out.
 *
 * Note the following assumptions about this hook:
 * - incoming assignmentCounts has all ticketIds and dateIds accounted for in
 * the collection.  That means assignedState should never have a dateId or a
 * ticketId that doesn't exist in the assignmentCounts collection.
 *
 *
 *
 * @param {Object} currentAssignmentCounts  An object with two keys
 *                                          ( dates, tickets ) that contain
 *                                          maps of ids to counts of how
 *                                          many assignments that id has.
 * @return {Object}
 *      - hasNoAssignments {bool} Whether or not any tickets or dates
 *      in the session have missing assignments
 *      - missingAssignmentCounts {Object} An object with counts of how many
 *      assignments are missing for dates and tickets
 *      - updatedAssignmentCounts {Object} The same as assignmentCounts except
 *      modified to account for changes in assignedState.
 *      - setAssignedState {Function} callback for updating assignments
 * -
 */

var useAssignmentsCalculator = function useAssignmentsCalculator(currentAssignmentCounts) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(INITIAL_STATE),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      assignedState = _useState2[0],
      setAssignedState = _useState2[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var totalMissingAssignments = 0;
    var missingAssignmentCounts = {
      dates: 0,
      tickets: 0
    };
    var updatedCounts = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(currentAssignmentCounts); // callback for counting assignments being added or removed

    var countAssignmentChangesForDates = function countAssignmentChangesForDates(emptyCount, count, dateId) {
      // first consider any assignedState.
      var assignedStateForDate = assignedState.assigned[dateId];

      if (assignedStateForDate && Array.isArray(assignedStateForDate)) {
        assignedStateForDate.forEach(function (ticketId) {
          updatedCounts.dates[dateId]++;
          updatedCounts.tickets[ticketId]++;
        });
      } // consider any removedState


      var removedStateForDate = assignedState.removed[dateId];

      if (removedStateForDate && Array.isArray(removedStateForDate)) {
        removedStateForDate.forEach(function (ticketId) {
          updatedCounts.dates[dateId]--;
          updatedCounts.tickets[ticketId]--;
        });
      }

      if (updatedCounts.dates[dateId] === 0) {
        missingAssignmentCounts.dates++;
        emptyCount++;
      }

      return emptyCount;
    };

    var countAssignmentChangesForTickets = function countAssignmentChangesForTickets(emptyCount, count) {
      if (count === 0) {
        missingAssignmentCounts.tickets++;
        emptyCount++;
      }

      return emptyCount;
    };

    totalMissingAssignments = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["reduce"])(updatedCounts.dates, countAssignmentChangesForDates, totalMissingAssignments);
    totalMissingAssignments = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["reduce"])(updatedCounts.tickets, countAssignmentChangesForTickets, totalMissingAssignments);
    return {
      assignedState: assignedState,
      hasNoAssignments: totalMissingAssignments > 0,
      missingAssignmentCounts: missingAssignmentCounts,
      assignmentCounts: updatedCounts,
      setAssignedState: setAssignedState
    };
  }, [assignedState, currentAssignmentCounts]);
};

useAssignmentsCalculator.propTypes = {
  currentAssignmentCounts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    dates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    tickets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (useAssignmentsCalculator);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/hooks/use-assignments-error-message.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/hooks/use-assignments-error-message.js ***!
  \****************************************************************************************************/
/*! exports provided: assignmentsErrorMessages, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignmentsErrorMessages", function() { return assignmentsErrorMessages; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



var assignmentsErrorMessages = {
  singleDate: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Event Dates must always have at least one Ticket assigned ' + 'to them. If the current assignment is not correct, assign the ' + 'correct Ticket first, then remove others as required.', 'event_espresso'),
  singleTicket: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tickets must always have at least one Event Date assigned ' + 'to them. If the current assignment is not correct, assign the ' + 'correct Event Date first, then remove others as required.', 'event_espresso'),
  multiTickets: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tickets must always have at least one date assigned ' + 'to them but one or more of the tickets below does not have any. ' + 'Please correct the assignments for the highlighted cells.', 'event_espresso'),
  multiDates: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Event Dates must always have at least one Ticket assigned ' + 'to them but one or more of the Event Dates below does not have any. ' + 'Please correct the assignments for the highlighted cells.', 'event_espresso')
};
/**
 * @param {number} dateCount                number of event dates
 * @param {number} ticketCount              number of tickets
 * @param {Object} missingAssignmentCounts  An object with two keys:
 *                                          ( dates, tickets )
 *                                          with counts of how many
 *                                          assignments are missing
 * @return {string} A helpful context aware error message
 *      to show to the user when there is an entity with no assignments
 */

var useAssignmentsErrorMessage = function useAssignmentsErrorMessage(_ref) {
  var dateCount = _ref.dateCount,
      ticketCount = _ref.ticketCount,
      missingAssignmentCounts = _ref.missingAssignmentCounts;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var datesMissing = missingAssignmentCounts.dates > 0;
    var ticketsMissing = missingAssignmentCounts.tickets > 0;

    if (datesMissing && !ticketsMissing && (dateCount === 1 || ticketCount === 1)) {
      return assignmentsErrorMessages.singleDate;
    }

    if (datesMissing && ticketsMissing && ticketCount === 1 || ticketsMissing && dateCount === 1) {
      return assignmentsErrorMessages.singleTicket;
    }

    if (ticketsMissing) {
      return assignmentsErrorMessages.multiTickets;
    }

    if (datesMissing) {
      return assignmentsErrorMessages.multiDates;
    }

    return '';
  }, [dateCount, ticketCount, missingAssignmentCounts]);
};

useAssignmentsErrorMessage.propTypes = {
  dateCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  ticketCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  missingAssignmentCounts: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    assigned: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    removed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (useAssignmentsErrorMessage);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/hooks/use-process-ticket-assignments.js":
/*!*****************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/hooks/use-process-ticket-assignments.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External imports
 */






var nullFunc = function nullFunc() {};
/**
 * @param {Function} setSubmitting
 * @param {Object} assignedState - { assigned, removed }
 * @param {boolean} hasNoAssignments
 * @param {Function} closeEditor
 * @param {Function} beforeEditorClose
 * @return {Function}   callback for persisting relation changes
 *                      between tickets and dates
 */


var useProcessTicketAssignments = function useProcessTicketAssignments(_ref) {
  var setSubmitting = _ref.setSubmitting,
      assignedState = _ref.assignedState,
      hasNoAssignments = _ref.hasNoAssignments,
      closeEditor = _ref.closeEditor,
      _ref$beforeEditorClos = _ref.beforeEditorClose,
      beforeEditorClose = _ref$beforeEditorClos === void 0 ? nullFunc : _ref$beforeEditorClos;
  var addTicketEntities = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4__["useCreateRelationsForEventDateIdToTicketIds"])();
  var removeTicketEntities = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_4__["useRemoveRelationsForEventDateIdToTicketIds"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (click) {
    if (hasNoAssignments) {
      // brings up confirm modal so the editor won't close
      return beforeEditorClose();
    }

    setSubmitting(true); // remove unwanted ticket relations from dates

    var relationUpdates = [];

    for (var dateId in assignedState.removed) {
      var ticketIdsToRemove = assignedState.removed[dateId];

      if (Array.isArray(ticketIdsToRemove)) {
        relationUpdates.push(removeTicketEntities(dateId, ticketIdsToRemove));
      }
    } // assign new ticket relations to dates


    for (var _dateId in assignedState.assigned) {
      var ticketIdsToAssign = assignedState.assigned[_dateId];

      if (Array.isArray(ticketIdsToAssign)) {
        relationUpdates.push(addTicketEntities(_dateId, ticketIdsToAssign));
      }
    } // wait for relations to finish updating


    Promise.all(relationUpdates).then(function (updates) {
      var wasUpdated = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(updates, function (updated) {
        return !!updated;
      });
      beforeEditorClose(wasUpdated.length > 0);
      setSubmitting(false);
      return closeEditor(click);
    }).catch(function (error) {
      warning__WEBPACK_IMPORTED_MODULE_2___default()(false, error);
    });
  }, [assignedState, hasNoAssignments, beforeEditorClose, closeEditor]);
};

useProcessTicketAssignments.propTypes = {
  setSubmitting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  assignedState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    assigned: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    removed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
  }).isRequired,
  hasNoAssignments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  beforeEditorClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (useProcessTicketAssignments);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/hooks/use-ticket-assignments.js":
/*!*********************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/hooks/use-ticket-assignments.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dates_and_times_editor_date_filter_bar_date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dates-and-times/editor-date/filter-bar/date-entities-list-filter-utils */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/date-entities-list-filter-utils.js");
/* harmony import */ var _tickets_editor_ticket_filter_bar_tickets_list_entity_filter_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tickets/editor-ticket/filter-bar/tickets-list-entity-filter-utils */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/tickets-list-entity-filter-utils.js");
/**
 * External imports
 */




/**
 * Internal imports
 */



var EMPTY_OBJECT = {};
var INITIAL_COUNTS = {
  dates: {},
  tickets: {}
};

var useTicketAssignments = function useTicketAssignments(_ref) {
  var dateEntity = _ref.dateEntity,
      ticketEntity = _ref.ticketEntity,
      dateEntities = _ref.allDateEntities,
      ticketEntities = _ref.allTicketEntities;
  var ticketDateMap = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(EMPTY_OBJECT);
  var assignmentCounts = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(INITIAL_COUNTS);
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useSelect"])(function (select) {
    var _select = select('eventespresso/core'),
        getRelatedEntities = _select.getRelatedEntities;

    var entities; // initial setup based on incoming entity

    if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(dateEntity, 'datetime')) {
      entities = [dateEntity];
      ticketEntities = Object(_tickets_editor_ticket_filter_bar_tickets_list_entity_filter_utils__WEBPACK_IMPORTED_MODULE_5__["sortTicketEntitiesList"])(ticketEntities);
    } else if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
      entities = Object(_dates_and_times_editor_date_filter_bar_date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_4__["sortDateEntitiesList"])(dateEntities);
      ticketEntities = [ticketEntity];
    } else {
      entities = Object(_dates_and_times_editor_date_filter_bar_date_entities_list_filter_utils__WEBPACK_IMPORTED_MODULE_4__["sortDateEntitiesList"])(dateEntities);
      ticketEntities = Object(_tickets_editor_ticket_filter_bar_tickets_list_entity_filter_utils__WEBPACK_IMPORTED_MODULE_5__["sortTicketEntitiesList"])(ticketEntities);
    } // setup the assignmentCounts for all the tickets and all the dates!


    entities.forEach(function (date) {
      var relatedTickets = getRelatedEntities(date, 'ticket');
      ticketDateMap.current[date.id] = relatedTickets;
      assignmentCounts.current.dates[date.id] = relatedTickets.length || 0;
    });
    ticketEntities.forEach(function (ticket) {
      var relatedDates = getRelatedEntities(ticket, 'datetime');
      assignmentCounts.current.tickets[ticket.id] = relatedDates.length || 0; // no need to set ticketDateMap here as
      // those will already have been setup for all dates.
    });
    return {
      entities: entities,
      dateEntities: dateEntities,
      ticketEntities: ticketEntities,
      currentAssignmentCounts: assignmentCounts.current,
      ticketDateMap: ticketDateMap.current
    };
  }, [dateEntity, dateEntities, ticketEntity, ticketEntities, assignmentCounts, ticketDateMap]);
};

useTicketAssignments.propTypes = {
  dateEntity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  allDateEntities: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),
  allTicketEntities: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object)
};
/* harmony default export */ __webpack_exports__["default"] = (useTicketAssignments);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/submit-ticket-assignments-button.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/submit-ticket-assignments-button.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks */ "./assets/src/editor/events/ticket-assignments-manager/hooks/index.js");



/**
 * External imports
 */




/**
 * Internal imports
 */


var FormSubmitButton = _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["twoColumnAdminFormLayout"].FormSubmitButton;

var nullFunc = function nullFunc() {
  return true;
};
/**
 * @param {Object} assignedState
 * @param {boolean} hasNoAssignments
 * @param {Function} beforeEditorClose
 * @param {Function} closeEditor
 * @param {boolean} disabled
 * @return {Object} rendered submit button
 */


var SubmitTicketAssignmentsButton = function SubmitTicketAssignmentsButton(_ref) {
  var assignedState = _ref.assignedState,
      hasNoAssignments = _ref.hasNoAssignments,
      _ref$beforeEditorClos = _ref.beforeEditorClose,
      beforeEditorClose = _ref$beforeEditorClos === void 0 ? nullFunc : _ref$beforeEditorClos,
      _ref$closeEditor = _ref.closeEditor,
      closeEditor = _ref$closeEditor === void 0 ? nullFunc : _ref$closeEditor,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      submitting = _useState2[0],
      setSubmitting = _useState2[1];

  var processChanges = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useProcessTicketAssignments"])({
    hasNoAssignments: hasNoAssignments,
    assignedState: assignedState,
    setSubmitting: setSubmitting,
    beforeEditorClose: beforeEditorClose,
    closeEditor: closeEditor
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(FormSubmitButton, {
      onClick: function onClick() {
        return processChanges();
      },
      buttonText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Update Ticket Assignments', 'event_espresso'),
      submitting: submitting,
      submittingText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Updating Ticket Assignments', 'event_espresso'),
      disabled: disabled
    });
  }, [assignedState, hasNoAssignments, processChanges, submitting, disabled]);
};

SubmitTicketAssignmentsButton.propTypes = {
  assignedState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    assigned: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
    removed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
  }).isRequired,
  hasNoAssignments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  closeEditor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  beforeEditorClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (SubmitTicketAssignmentsButton);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/table/ticket-assignments-table.js":
/*!***********************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/table/ticket-assignments-table.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_date_rows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-date-rows */ "./assets/src/editor/events/ticket-assignments-manager/table/use-date-rows.js");
/* harmony import */ var _use_ticket_headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-ticket-headers */ "./assets/src/editor/events/ticket-assignments-manager/table/use-ticket-headers.js");


/**
 * External imports
 */





/**
 * @param {number} dateCount
 * @param {BaseEntity[]} dateEntities
 * @param {number} ticketCount
 * @param {BaseEntity[]} ticketEntities
 * @param {Object} ticketDateMap
 * @param {Object} assignedState
 * @param {Object} assignmentCounts
 * @param {boolean} hasNoAssignments
 * @param {Function} setAssignedState
 * @return {Object} rendered ticket assignments table
 */

var TicketAssignmentsTable = function TicketAssignmentsTable(_ref) {
  var dateCount = _ref.dateCount,
      dateEntities = _ref.dateEntities,
      ticketCount = _ref.ticketCount,
      ticketEntities = _ref.ticketEntities,
      ticketDateMap = _ref.ticketDateMap,
      assignedState = _ref.assignedState,
      assignmentCounts = _ref.assignmentCounts,
      hasNoAssignments = _ref.hasNoAssignments,
      setAssignedState = _ref.setAssignedState;
  var ticketHeaders = Object(_use_ticket_headers__WEBPACK_IMPORTED_MODULE_5__["default"])({
    dateCount: dateCount,
    ticketEntities: ticketEntities
  });
  var dateRows = Object(_use_date_rows__WEBPACK_IMPORTED_MODULE_4__["default"])({
    dateCount: dateCount,
    dateEntities: dateEntities,
    ticketEntities: ticketEntities,
    ticketDateMap: ticketDateMap,
    assignedState: assignedState,
    assignmentCounts: assignmentCounts,
    hasNoAssignments: hasNoAssignments,
    setAssignedState: setAssignedState
  });
  return dateCount > 0 && ticketCount > 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["ResponsiveTable"], {
    headerRows: [ticketHeaders],
    tableRows: dateRows,
    metaData: {
      tableCaption: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ticket Assignments', 'event_espresso'),
      hasRowHeaders: dateCount > 1
    },
    classes: {
      tableClass: 'ee-ticket-assignments-manager'
    }
  }) : null;
};

TicketAssignmentsTable.propTypes = {
  dateCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  dateEntities: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  ticketCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  ticketEntities: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  ticketDateMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  assignedState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    assigned: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    removed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }).isRequired,
  assignmentCounts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    dates: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    tickets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }).isRequired,
  hasNoAssignments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setAssignedState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TicketAssignmentsTable);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/table/ticket-header-cell.js":
/*!*****************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/table/ticket-header-cell.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External imports
 */





var getBackgroundColorClass = _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["ticketModel"].getBackgroundColorClass;
/**
 * @param {BaseEntity} ticketEntity
 * @return {Array} table header cell data
 */

var TicketHeaderCell = function TicketHeaderCell(_ref) {
  var ticket = _ref.ticketEntity;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var statusClass = getBackgroundColorClass(ticket);
    statusClass = "ee-tam-ticket-header-status ".concat(statusClass);
    var saleDate = ticket.startDate.toFormat('MMM DD YYYY');
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "ee-tam-ticket-header-div"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: statusClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "ee-tam-ticket-header-date"
    }, saleDate)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "ee-tam-ticket-id"
    }, "#".concat(Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_4__["shortenCuid"])(ticket.id))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "ee-tam-ticket-header-title"
    }, ticket.name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "ee-tam-ticket-header-price"
    }, "".concat(ticket.price), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "ee-tam-ticket-header-date"
    }, saleDate)));
  }, [ticket.id, ticket.name, ticket.price, ticket.startDate.toISO(), getBackgroundColorClass]);
};

TicketHeaderCell.propTypes = {
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__["ifValidTicketEntity"])(TicketHeaderCell));

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/table/use-date-rows.js":
/*!************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/table/use-date-rows.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_generate_date_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-generate-date-row */ "./assets/src/editor/events/ticket-assignments-manager/table/use-generate-date-row.js");
/* harmony import */ var _use_generate_year_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-generate-year-row */ "./assets/src/editor/events/ticket-assignments-manager/table/use-generate-year-row.js");
/**
 * External imports
 */






/**
 * @param {number} dateCount
 * @param {BaseEntity[]} dateEntities
 * @param {BaseEntity[]} ticketEntities
 * @param {Object} ticketDateMap
 * @param {Object} assignedState
 * @param {Object} assignmentCounts
 * @param {boolean} hasNoAssignments
 * @param {Function} setAssignedState
 * @return {Array} array of row data objects
 */

var useDateRows = function useDateRows(_ref) {
  var dateCount = _ref.dateCount,
      dateEntities = _ref.dateEntities,
      ticketEntities = _ref.ticketEntities,
      ticketDateMap = _ref.ticketDateMap,
      assignedState = _ref.assignedState,
      assignmentCounts = _ref.assignmentCounts,
      hasNoAssignments = _ref.hasNoAssignments,
      setAssignedState = _ref.setAssignedState;
  var yearRow = Object(_use_generate_year_row__WEBPACK_IMPORTED_MODULE_5__["default"])(ticketEntities.length);
  var dateRow = Object(_use_generate_date_row__WEBPACK_IMPORTED_MODULE_4__["default"])(dateCount, ticketEntities, ticketDateMap, assignedState, assignmentCounts, hasNoAssignments, setAssignedState);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var year = 0;
    var rows = [];
    dateEntities.forEach(function (eventDate) {
      warning__WEBPACK_IMPORTED_MODULE_1___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(eventDate, 'datetime'), 'Invalid EE Date model object!');
      var dateYear = parseInt(eventDate.start.toFormat('YYYY'), 10);

      if (dateCount > 1 && dateYear > year) {
        year = dateYear;
        rows.push(yearRow(year));
      }

      rows.push(dateRow(eventDate));
    });
    return rows;
  }, [dateCount, dateEntities, ticketEntities, ticketDateMap, assignedState, assignmentCounts]);
};

useDateRows.propTypes = {
  dateCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  dateEntities: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object).isRequired,
  ticketEntities: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object).isRequired,
  ticketDateMap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  assignedState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    assigned: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    removed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
  }).isRequired,
  assignmentCounts: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    dates: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    tickets: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
  }).isRequired,
  hasNoAssignments: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  setAssignedState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (useDateRows);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/table/use-generate-date-header.js":
/*!***********************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/table/use-generate-date-header.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External imports
 */





var getBackgroundColorClass = _eventespresso_model__WEBPACK_IMPORTED_MODULE_3__["dateTimeModel"].getBackgroundColorClass;
/**
 * @function
 * @return {Function} callback for generating data header
 */

var useGenerateDateHeader = function useGenerateDateHeader() {
  /**
   * @function
   * @param {BaseEntity} eventDate
   * @return {Object} cell data for a date header
   */
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (eventDate) {
    var statusClass = getBackgroundColorClass(eventDate);
    return {
      type: 'cell',
      key: "tam-date-cell-".concat(eventDate.id),
      class: 'ee-tam-date-label',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "ee-tam-date-label-div"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "ee-tam-date-label-inner"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "ee-tam-date-id"
      }, "#".concat(Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_4__["shortenCuid"])(eventDate.id))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "ee-tam-date-label-text"
      }, eventDate.name)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["CalendarPageDate"], {
        startDate: eventDate.start,
        statusClass: statusClass,
        size: 'small'
      }))
    };
  }, []);
};

useGenerateDateHeader.propTypes = {
  eventDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (useGenerateDateHeader);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/table/use-generate-date-row.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/table/use-generate-date-row.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_generate_date_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-generate-date-header */ "./assets/src/editor/events/ticket-assignments-manager/table/use-generate-date-header.js");
/* harmony import */ var _use_generate_ticket_cell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-generate-ticket-cell */ "./assets/src/editor/events/ticket-assignments-manager/table/use-generate-ticket-cell.js");
/**
 * External imports
 */






/**
 * @param {number} dateCount
 * @param {BaseEntity[]} ticketEntities
 * @param {Object} ticketDateMap
 * @param {Object} assignedState - { assigned, removed }
 * @param {Object} assignmentCounts - { assigned, removed }
 * @param {boolean} hasNoAssignments
 * @param {Function} setAssignedState
 * @return {Function} callback for generating date row
 */

var useGenerateDateRow = function useGenerateDateRow(dateCount, ticketEntities, ticketDateMap, assignedState, assignmentCounts, hasNoAssignments, setAssignedState) {
  var dateHeader = Object(_use_generate_date_header__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var ticketCell = Object(_use_generate_ticket_cell__WEBPACK_IMPORTED_MODULE_5__["default"])({
    assignedState: assignedState,
    assignmentCounts: assignmentCounts,
    hasNoAssignments: hasNoAssignments,
    setAssignedState: setAssignedState
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(
  /**
   * @function
   * @param {BaseEntity} eventDate
   * @return {Array} array of row data
   */
  function (eventDate) {
    var rowData = {
      key: "date-row-".concat(eventDate.id),
      type: 'row',
      class: 'ee-tam-date-row',
      cells: []
    };

    if (dateCount > 1) {
      rowData.cells.push(dateHeader(eventDate));
    }

    var dateTicketEntities = Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(eventDate, 'datetime') && ticketDateMap[eventDate.id] ? ticketDateMap[eventDate.id] : [];

    for (var x = 0; x < ticketEntities.length; x++) {
      var ticket = ticketEntities[x];
      warning__WEBPACK_IMPORTED_MODULE_1___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(ticket, 'ticket'), 'Invalid EE Ticket model object!');
      rowData.cells.push(ticketCell(eventDate.id, ticket.id, dateTicketEntities));
    }

    return rowData;
  }, [dateCount, ticketEntities, ticketDateMap, assignedState, setAssignedState]);
};

useGenerateDateRow.propTypes = {
  dateCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  eventDate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired,
  ticketEntities: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object).isRequired,
  ticketDateMap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  assignedState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    assigned: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    removed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
  }).isRequired,
  assignmentCounts: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    dates: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    tickets: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
  }).isRequired,
  hasNoAssignments: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  setAssignedState: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (useGenerateDateRow);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/table/use-generate-ticket-cell.js":
/*!***********************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/table/use-generate-ticket-cell.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggle_ticket_assignment_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toggle-ticket-assignment-button */ "./assets/src/editor/events/ticket-assignments-manager/toggle-ticket-assignment-button.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./assets/src/editor/events/ticket-assignments-manager/utils/index.js");


/**
 * External imports
 */




/**
 * @function
 * @param {Object} assignedState - { assigned, removed }
 * @param {Object} assignmentCounts - { assigned, removed }
 * @param {boolean} hasNoAssignments
 * @param {Function} setAssignedState
 * @return {Function} callback for rendering table cell
 */

var useGenerateTicketCell = function useGenerateTicketCell(_ref) {
  var assignedState = _ref.assignedState,
      assignmentCounts = _ref.assignmentCounts,
      hasNoAssignments = _ref.hasNoAssignments,
      setAssignedState = _ref.setAssignedState;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (dateId, ticketId, dateTicketEntities) {
    var assignmentsErrorClass = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAssignmentsErrorClass"])({
      dateId: dateId,
      ticketId: ticketId,
      hasNoAssignments: hasNoAssignments,
      assignmentCounts: assignmentCounts
    });
    return {
      key: "tam-ticket-cell-".concat(dateId, "-").concat(ticketId),
      type: 'cell',
      class: "ee-tam-date-row-ticket".concat(assignmentsErrorClass),
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_toggle_ticket_assignment_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        dateId: dateId,
        ticketId: ticketId,
        dateTicketEntities: dateTicketEntities,
        assignedState: assignedState,
        setAssignedState: setAssignedState
      })
    };
  }, [assignedState, assignmentCounts, hasNoAssignments, setAssignedState]);
};

useGenerateTicketCell.propTypes = {
  assignedState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    assigned: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    removed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }).isRequired,
  assignmentCounts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    assigned: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    removed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired,
  hasNoAssignments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setAssignedState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (useGenerateTicketCell);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/table/use-generate-year-row.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/table/use-generate-year-row.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External imports
 */



var TableDataCell = _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["EspressoTable"].TableDataCell;
/**
 * @function
 * @param {number} ticketCount
 * @return {Function} callback for generating year row
 */

var useGenerateYearRow = function useGenerateYearRow(ticketCount) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(
  /**
   * @function
   * @param {number} year
   * @return {Array} data for a row showing the year
   */
  function (year) {
    var yearRow = {
      type: 'row',
      key: "tam-year-row-".concat(year),
      class: 'ee-tam-year-row',
      cells: [{
        type: 'cell',
        key: "tam-date-label-".concat(year),
        class: 'ee-tam-date-label',
        value: year
      }]
    };

    for (var x = 0; x < ticketCount; x++) {
      yearRow.cells.push({
        type: 'cell',
        key: "tam-ticket-col-".concat(x + 1),
        value: '',
        render: function render(rowNumber, colNumber) {
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TableDataCell, {
            key: "row-".concat(rowNumber, "-col-").concat(colNumber),
            rowNumber: rowNumber,
            colNumber: colNumber,
            htmlClass: 'ee-tam-date-row-ticket'
          });
        }
      });
    }

    return yearRow;
  }, [ticketCount]);
};

useGenerateYearRow.propTypes = {
  ticketCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (useGenerateYearRow);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/table/use-ticket-headers.js":
/*!*****************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/table/use-ticket-headers.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ticket_header_cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticket-header-cell */ "./assets/src/editor/events/ticket-assignments-manager/table/ticket-header-cell.js");


/**
 * External imports
 */




/**
 * Internal imports
 */


/**
 * @param {number} dateCount
 * @param {BaseEntity[]} ticketEntities
 * @return {Array} table header cell data
 */

var useTicketHeaders = function useTicketHeaders(_ref) {
  var dateCount = _ref.dateCount,
      ticketEntities = _ref.ticketEntities;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var headerRow = {
      type: 'row',
      primary: true,
      key: 'tam-header-row',
      cells: []
    };

    if (dateCount > 1) {
      headerRow.cells.push({
        type: 'cell',
        key: 'tam-date-header',
        class: 'ee-tam-dates-header',
        value: ''
      });
    }

    ticketEntities.forEach(function (ticket) {
      warning__WEBPACK_IMPORTED_MODULE_2___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(ticket, 'ticket'), 'Invalid EE Ticket model object!');
      headerRow.cells.push({
        type: 'cell',
        key: "tam-ticket-header-".concat(ticket.id),
        class: 'ee-tam-ticket-header',
        value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ticket_header_cell__WEBPACK_IMPORTED_MODULE_4__["default"], {
          ticketEntity: ticket
        })
      });
    });
    return headerRow;
  }, [ticketEntities, dateCount]);
};

useTicketHeaders.propTypes = {
  dateCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  ticketEntities: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (useTicketHeaders);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-form-error-info.js":
/*!***************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-form-error-info.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External imports
 */



var FormInfo = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormInfo;
/**
 * @function TicketAssignmentsFormErrorInfo
 *
 * @param {string} errorMessage
 * @param {boolean} dismissable
 * @param {number} colSize
 * @param {number} offset
 * @return {Function} rendered form info
 */

var TicketAssignmentsFormErrorInfo = function TicketAssignmentsFormErrorInfo(_ref) {
  var errorMessage = _ref.errorMessage,
      dismissable = _ref.dismissable,
      colSize = _ref.colSize,
      offset = _ref.offset;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return errorMessage ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInfo, {
      formInfo: errorMessage,
      dashicon: 'warning',
      dismissable: dismissable,
      colSize: colSize,
      offset: offset
    }) : null;
  }, [errorMessage, dismissable, colSize, offset]);
};

TicketAssignmentsFormErrorInfo.propTypes = {
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  dismissable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  colSize: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
TicketAssignmentsFormErrorInfo.defaultProps = {
  dismissable: true,
  colSize: 10,
  offset: 1
};
/* harmony default export */ __webpack_exports__["default"] = (TicketAssignmentsFormErrorInfo);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager-modal.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager-modal.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket-assignments-manager */ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager.js");




/**
 * External imports
 */



/**
 * Internal imports
 */


/**
 * withTicketAssignmentsManagerModal
 * controls toggling of the modal
 * wraps the component that adds the TicketAssignmentsManager
 *
 * @param {string} editorId
 * @param {string} editorTitle
 * @param {string} editorHtmlClass
 * @param {string} editorCloseButtonLabel
 * @param {Function} onEditorOpen
 * @param {Function} onEditorClose
 * @param {Object} otherProps
 * @return {Object} rendered Ticket Assignments Manager with EditorModal
 */

var TicketAssignmentsManagerModal = function TicketAssignmentsManagerModal(_ref) {
  var editorId = _ref.editorId,
      editorTitle = _ref.editorTitle,
      editorHtmlClass = _ref.editorHtmlClass,
      editorCloseButtonLabel = _ref.editorCloseButtonLabel,
      onEditorOpen = _ref.onEditorOpen,
      onEditorClose = _ref.onEditorClose,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["editorId", "editorTitle", "editorHtmlClass", "editorCloseButtonLabel", "onEditorOpen", "onEditorClose"]);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__["EditorModal"], {
    editorId: editorId,
    editorTitle: editorTitle,
    editorHtmlClass: editorHtmlClass || 'ee-ticket-assignments-manager-modal',
    editorCloseButtonLabel: editorCloseButtonLabel || Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('close ticket assignments manager', 'event_espresso'),
    onEditorOpen: onEditorOpen,
    onEditorClose: onEditorClose
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_ticket_assignments_manager__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    editorId: editorId
  }, otherProps)));
};

TicketAssignmentsManagerModal.propTypes = {
  editorId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  editorTitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  editorHtmlClass: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  editorCloseButtonLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (TicketAssignmentsManagerModal);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager.css":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-ticket-assignments-manager":"ee-ticket-assignments-manager","ee-tam-dates-header":"ee-tam-dates-header","ee-tam-ticket-header-div":"ee-tam-ticket-header-div","ee-tam-ticket-header-price":"ee-tam-ticket-header-price","ee-tam-ticket-header-status":"ee-tam-ticket-header-status","ee-tam-ticket-header-title":"ee-tam-ticket-header-title","ee-tam-ticket-header-date":"ee-tam-ticket-header-date","ee-tam-date-id":"ee-tam-date-id","ee-tam-ticket-id":"ee-tam-ticket-id","ee-tam-year-row":"ee-tam-year-row","ee-tam-date-label":"ee-tam-date-label","ee-tam-date-row":"ee-tam-date-row","ee-tam-date-label-div":"ee-tam-date-label-div","ee-tam-date-label-inner":"ee-tam-date-label-inner","ee-calendar-page-date-wrapper":"ee-calendar-page-date-wrapper","ee-tam-date-label-text":"ee-tam-date-label-text","ee-tam-date-row-ticket":"ee-tam-date-row-ticket","components-icon-button":"components-icon-button","ee-tam-ticket-relation-button":"ee-tam-ticket-relation-button","dashicon":"dashicon","ee-tam-assignments-error":"ee-tam-assignments-error","ee-tam-no-ticket-relation":"ee-tam-no-ticket-relation","ee-tam-has-ticket-relation":"ee-tam-has-ticket-relation","ee-tam-add-ticket-relation":"ee-tam-add-ticket-relation","ee-tam-remove-ticket-relation":"ee-tam-remove-ticket-relation","ee-ticket-assignments-manager-filters":"ee-ticket-assignments-manager-filters","ee-entity-pagination":"ee-entity-pagination","ee-rspnsv-table":"ee-rspnsv-table","ee-rspnsv-table-body":"ee-rspnsv-table-body","ee-rspnsv-table-body-row":"ee-rspnsv-table-body-row","ee-rspnsv-table-body-td":"ee-rspnsv-table-body-td","ee-rspnsv-table-mobile-only-column-header":"ee-rspnsv-table-mobile-only-column-header","ee-rspnsv-table-mobile-only-column-value":"ee-rspnsv-table-mobile-only-column-value"};

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager.js":
/*!*******************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ticket_assignments_manager_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ticket-assignments-manager.css */ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager.css");
/* harmony import */ var _ticket_assignments_manager_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ticket_assignments_manager_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _cancel_ticket_assignments_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel-ticket-assignments-button */ "./assets/src/editor/events/ticket-assignments-manager/cancel-ticket-assignments-button.js");
/* harmony import */ var _submit_ticket_assignments_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./submit-ticket-assignments-button */ "./assets/src/editor/events/ticket-assignments-manager/submit-ticket-assignments-button.js");
/* harmony import */ var _table_ticket_assignments_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table/ticket-assignments-table */ "./assets/src/editor/events/ticket-assignments-manager/table/ticket-assignments-table.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters */ "./assets/src/editor/events/ticket-assignments-manager/filters/index.js");
/* harmony import */ var _ticket_assignments_form_error_info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ticket-assignments-form-error-info */ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-form-error-info.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks */ "./assets/src/editor/events/ticket-assignments-manager/hooks/index.js");



/**
 * External imports
 */




/**
 * Internal imports
 */








var FormSection = _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["twoColumnAdminFormLayout"].FormSection,
    FormWrapper = _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["twoColumnAdminFormLayout"].FormWrapper,
    FormButtonsRow = _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["twoColumnAdminFormLayout"].FormButtonsRow;

var nullFunc = function nullFunc() {
  return null;
};

var _window = window,
    alert = _window.alert;
/**
 * Editor for assigning tickets to event dates
 *
 * @param {string} editorId
 * @param {BaseEntity} dateEntity
 * @param {BaseEntity} ticketEntity
 * @param {BaseEntity[]} allDateEntities
 * @param {BaseEntity[]} allTicketEntities
 * @param {Function} onUpdate
 * @return {Object} rendered Ticket Assignments Manager
 */

var TicketAssignmentsManager = function TicketAssignmentsManager(_ref) {
  var editorId = _ref.editorId,
      dateEntity = _ref.dateEntity,
      ticketEntity = _ref.ticketEntity,
      allDateEntities = _ref.allDateEntities,
      allTicketEntities = _ref.allTicketEntities,
      _ref$onUpdate = _ref.onUpdate,
      onUpdate = _ref$onUpdate === void 0 ? nullFunc : _ref$onUpdate;
  var perPage = 6;
  var closeEditor = Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__["useCloseEditor"])(editorId);

  var _useTicketAssignments = Object(_hooks__WEBPACK_IMPORTED_MODULE_11__["useTicketAssignments"])({
    dateEntity: dateEntity,
    ticketEntity: ticketEntity,
    allDateEntities: allDateEntities,
    allTicketEntities: allTicketEntities
  }),
      entities = _useTicketAssignments.entities,
      dateEntities = _useTicketAssignments.dateEntities,
      ticketEntities = _useTicketAssignments.ticketEntities,
      currentAssignmentCounts = _useTicketAssignments.currentAssignmentCounts,
      ticketDateMap = _useTicketAssignments.ticketDateMap;

  var _useTicketAssignments2 = Object(_filters__WEBPACK_IMPORTED_MODULE_9__["useTicketAssignmentsFilters"])({
    dateEntity: dateEntity,
    dateEntities: dateEntities,
    ticketEntity: ticketEntity,
    ticketEntities: ticketEntities
  }),
      filteredDateEntities = _useTicketAssignments2.filteredDateEntities,
      filteredTicketEntities = _useTicketAssignments2.filteredTicketEntities,
      ticketAssignmentsFilters = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_useTicketAssignments2, ["filteredDateEntities", "filteredTicketEntities"]);

  var _useEntityPagination = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["useEntityPagination"])(perPage, filteredDateEntities),
      currentPage = _useEntityPagination.currentPage,
      setCurrentPage = _useEntityPagination.setCurrentPage,
      paginatedEntities = _useEntityPagination.paginatedEntities;

  var dateCount = Array.isArray(filteredDateEntities) ? filteredDateEntities.length : 0;
  var ticketCount = Array.isArray(filteredTicketEntities) ? filteredTicketEntities.length : 0;

  var _useAssignmentsCalcul = Object(_hooks__WEBPACK_IMPORTED_MODULE_11__["useAssignmentsCalculator"])(currentAssignmentCounts),
      assignedState = _useAssignmentsCalcul.assignedState,
      hasNoAssignments = _useAssignmentsCalcul.hasNoAssignments,
      missingAssignmentCounts = _useAssignmentsCalcul.missingAssignmentCounts,
      assignmentCounts = _useAssignmentsCalcul.assignmentCounts,
      setAssignedState = _useAssignmentsCalcul.setAssignedState;

  var noAssignmentsMessage = Object(_hooks__WEBPACK_IMPORTED_MODULE_11__["useAssignmentsErrorMessage"])({
    dateCount: dateCount,
    ticketCount: ticketCount,
    missingAssignmentCounts: missingAssignmentCounts
  });
  var beforeEditorClose = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (hasNoAssignments) {
      alert(noAssignmentsMessage);
      return false;
    }

    if (update) {
      onUpdate();
    }

    return true;
  }, [hasNoAssignments, noAssignmentsMessage, onUpdate]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(FormWrapper, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(FormSection, {
    htmlClass: 'ee-ticket-assignments-manager-form'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_filters__WEBPACK_IMPORTED_MODULE_9__["TicketAssignmentsFilters"], ticketAssignmentsFilters), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_ticket_assignments_form_error_info__WEBPACK_IMPORTED_MODULE_10__["default"], {
    errorMessage: noAssignmentsMessage
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_table_ticket_assignments_table__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dateCount: dateCount,
    ticketCount: ticketCount,
    dateEntities: paginatedEntities,
    ticketEntities: filteredTicketEntities,
    assignedState: assignedState,
    assignmentCounts: assignmentCounts,
    hasNoAssignments: hasNoAssignments,
    ticketDateMap: ticketDateMap,
    setAssignedState: setAssignedState
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["EntityPagination"], {
    listId: editorId,
    currentPage: currentPage,
    entitiesPerPage: perPage,
    totalCount: entities.length,
    setCurrentPage: setCurrentPage
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(FormButtonsRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_submit_ticket_assignments_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    assignedState: assignedState,
    hasNoAssignments: hasNoAssignments,
    beforeEditorClose: beforeEditorClose,
    closeEditor: closeEditor,
    disabled: dateCount < 1 || ticketCount < 1 || noAssignmentsMessage !== ''
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_cancel_ticket_assignments_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    beforeEditorClose: beforeEditorClose,
    closeEditor: closeEditor
  })));
};

TicketAssignmentsManager.propTypes = {
  dateEntity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  allDateEntities: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  allTicketEntities: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (TicketAssignmentsManager);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/toggle-ticket-assignment-button.js":
/*!************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/toggle-ticket-assignment-button.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks */ "./assets/src/editor/events/ticket-assignments-manager/hooks/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./assets/src/editor/events/ticket-assignments-manager/utils/index.js");


/**
 * External imports
 */




/**
 * Internal imports
 */



/**
 * @function
 * @param {number|string} dateId
 * @param {number|string} ticketId
 * @param {BaseEntity[]} dateTicketEntities
 * @param {Object} assignedState - { assigned, removed }
 * @param {Function} setAssignedState
 * @return {Function} callback for rendering table cell
 */

var ToggleTicketAssignmentButton = function ToggleTicketAssignmentButton(_ref) {
  var dateId = _ref.dateId,
      ticketId = _ref.ticketId,
      dateTicketEntities = _ref.dateTicketEntities,
      assignedState = _ref.assignedState,
      setAssignedState = _ref.setAssignedState;

  var _determineCurrentAssi = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["determineCurrentAssignment"])({
    dateId: dateId,
    ticketId: ticketId,
    dateTicketEntities: dateTicketEntities,
    assignedState: assignedState
  }),
      hasTicket = _determineCurrentAssi.hasTicket,
      isAssigned = _determineCurrentAssi.isAssigned,
      isRemoved = _determineCurrentAssi.isRemoved;

  var _getIconAndBgColor = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getIconAndBgColor"])({
    hasTicket: hasTicket,
    isAssigned: isAssigned,
    isRemoved: isRemoved
  }),
      icon = _getIconAndBgColor.icon,
      bgColor = _getIconAndBgColor.bgColor;

  var currentlyAssigned = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isCurrentlyAssigned"])(hasTicket, isAssigned, isRemoved);
  var action = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useAssignmentAction"])(setAssignedState, currentlyAssigned);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    icon: icon,
    className: bgColor,
    size: 45,
    onClick: function onClick(click) {
      Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_4__["cancelClickEvent"])(click, 'ToggleTicketAssignmentButton');
      action(dateId, ticketId);
    },
    onKeyDown: function onKeyDown(keyPress) {
      if (keyPress.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]) {
        Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_4__["cancelClickEvent"])(keyPress, 'ToggleTicketAssignmentButton');
        action(dateId, ticketId);
      }
    }
  });
};

ToggleTicketAssignmentButton.propTypes = {
  dateId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
  ticketId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
  dateTicketEntities: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  assignedState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    assigned: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    removed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }).isRequired,
  setAssignedState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ToggleTicketAssignmentButton);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/use-ticket-assignments-editor-id.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/use-ticket-assignments-editor-id.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

/**
 * generates unique modal editor identifier for
 * ticket assignment managers based on the supplied entities
 *
 * @param {BaseEntity} eventDate
 * @param {BaseEntity} ticket
 * @param {BaseEntity[]} allDates
 * @param {BaseEntity[]} allTickets
 * @param {string} prefix
 * @return {string} editor id for ticket
 */

var useTicketAssignmentsEditorId = function useTicketAssignmentsEditorId() {
  var eventDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var ticket = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var allDates = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var allTickets = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var prefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var editorId = 'ticket-assignments-manager';
  editorId += Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__["isModelEntityOfModel"])(eventDate, 'datetime') ? '-' + eventDate.id : '-0';
  editorId += Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__["isModelEntityOfModel"])(ticket, 'ticket') ? '-' + ticket.id : '-0';
  editorId += '-' + allDates.length;
  editorId += '-' + allTickets.length;
  editorId = editorId !== 'ticket-assignments-manager-0-0-0-0' ? editorId : '';
  return prefix !== '' && editorId !== '' ? "".concat(prefix, "-").concat(editorId) : editorId;
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketAssignmentsEditorId);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/utils/assign-remove-tickets.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/utils/assign-remove-tickets.js ***!
  \********************************************************************************************/
/*! exports provided: isAssigned, unAssignTicketEntity, assignTicketEntity, assignedCount, isRemoved, unRemoveTicketEntity, removeTicketEntity, removedCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAssigned", function() { return isAssigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unAssignTicketEntity", function() { return unAssignTicketEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignTicketEntity", function() { return assignTicketEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignedCount", function() { return assignedCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRemoved", function() { return isRemoved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unRemoveTicketEntity", function() { return unRemoveTicketEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTicketEntity", function() { return removeTicketEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removedCount", function() { return removedCount; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

var noIndex = -1;
/**
 * @function
 * @param {Object} assigned
 * @param {number} dateId
 * @param {number} ticketId
 * @param {boolean} returnIndex
 * @return {number|boolean} index for date id in assigned array or
 *                        boolean if returnIndex is false
 */

var isAssigned = function isAssigned(assigned, dateId, ticketId) {
  var returnIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var index = noIndex;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(assigned[dateId])) {
    index = assigned[dateId].indexOf(ticketId);
  }

  return returnIndex ? index : index > noIndex;
};
/**
 * @function
 * @param {Object} assigned
 * @param {number} dateId
 * @param {number} ticketId
 * @param {number} index
 * @return {Object} assigned
 */

var unAssignTicketEntity = function unAssignTicketEntity(assigned, dateId, ticketId) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noIndex;
  index = index === noIndex ? isAssigned(assigned, dateId, ticketId, true) : index;

  if (index > noIndex) {
    assigned[dateId].splice(index, 1);

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(assigned[dateId])) {
      delete assigned[dateId];
    }
  }

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omitBy"])(assigned, lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]);
};
/**
 * @function
 * @param {Object} prevState
 * @param {number} dateId
 * @param {number} ticketId
 * @return {Object} updated state
 */

var assignTicketEntity = function assignTicketEntity(prevState, dateId, ticketId) {
  var index = isRemoved(prevState.removed, dateId, ticketId, true);

  if (index > noIndex) {
    prevState.removed = unRemoveTicketEntity(prevState.removed, dateId, ticketId, index);
  } else {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(prevState.assigned[dateId])) {
      prevState.assigned[dateId] = [];
    }

    if (!isAssigned(prevState.assigned, dateId, ticketId)) {
      prevState.assigned[dateId].push(ticketId);
    }
  }

  return cleanState(prevState);
};
/**
 * @function
 * @param {Object} assigned
 * @param {number} dateId
 * @param {number} ticketId
 * @return {number}    		the number of dateEntity tickets in assigned
 *              			collection matching supplied ticket
 */

var assignedCount = function assignedCount(assigned) {
  var dateId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var ticketId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (dateId && Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(assigned[dateId])) {
    return assigned[dateId].length;
  }

  var index = 0;
  var count = 0;

  if (ticketId) {
    for (var dateID in assigned) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(assigned[dateID])) {
        index = assigned[dateID].indexOf(ticketId);

        if (index > noIndex) {
          count++;
        }
      }
    }
  }

  return count;
};
/**
 * @function
 * @param {Object} removed
 * @param {number} dateId
 * @param {number} ticketId
 * @param {boolean} returnIndex
 * @return {number|boolean} index for date id in removed array or
 *                        boolean if returnIndex is false
 */

var isRemoved = function isRemoved(removed, dateId, ticketId) {
  var returnIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var index = noIndex;

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(removed[dateId])) {
    index = removed[dateId].indexOf(ticketId);
  }

  return returnIndex ? index : index > noIndex;
};
/**
 * @function
 * @param {Object} removed
 * @param {number} dateId
 * @param {number} ticketId
 * @param {number} index
 * @return {Object} removed
 */

var unRemoveTicketEntity = function unRemoveTicketEntity(removed, dateId, ticketId) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noIndex;
  index = index === noIndex ? isRemoved(removed, dateId, ticketId, true) : index;

  if (index > noIndex) {
    removed[dateId].splice(index, 1);

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(removed[dateId])) {
      delete removed[dateId];
    }
  }

  return removed;
};
/**
 * @function
 * @param {Object} prevState
 * @param {number} dateId
 * @param {number} ticketId
 * @return {Object} updated state
 */

var removeTicketEntity = function removeTicketEntity(prevState, dateId, ticketId) {
  var index = isAssigned(prevState.assigned, dateId, ticketId, true);

  if (index > noIndex) {
    prevState.assigned = unAssignTicketEntity(prevState.assigned, dateId, ticketId, index);
  } else {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(prevState.removed[dateId])) {
      prevState.removed[dateId] = [];
    }

    if (!isRemoved(prevState.removed, dateId, ticketId)) {
      prevState.removed[dateId].push(ticketId);
    }
  }

  return cleanState(prevState);
};
/**
 * @function
 * @param {Object} removed
 * @param {number} dateId
 * @param {number} ticketId
 * @return {number}    		the number of date tickets in removed
 *              			collection matching supplied ticket
 */

var removedCount = function removedCount(removed) {
  var dateId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var ticketId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (dateId && Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(removed[dateId])) {
    return removed[dateId].length;
  }

  var index = 0;
  var count = 0;

  if (ticketId) {
    for (var dateID in removed) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(removed[dateID])) {
        index = removed[dateID].indexOf(ticketId);

        if (index > noIndex) {
          count++;
        }
      }
    }
  }

  return count;
};
/**
 * @function
 * @param {Object} prevState
 * @return {Object} updated state
 */

var cleanState = function cleanState(prevState) {
  var assigned = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omitBy"])(prevState.assigned, lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]);
  var removed = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omitBy"])(prevState.removed, lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]);
  return {
    assigned: assigned,
    removed: removed
  };
};

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/utils/determine-current-assignment.js":
/*!***************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/utils/determine-current-assignment.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assign_remove_tickets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assign-remove-tickets */ "./assets/src/editor/events/ticket-assignments-manager/utils/assign-remove-tickets.js");
/**
 * External imports
 */


/**
 * Internal imports
 */


var noIndex = -1;
/**
 * callback that determines whether the supplied date
 * already has a relation to the supplied ticket,
 * or is queued for removal, or has been assigned
 *
 * @param {number|string} dateId
 * @param {number|string} ticketId
 * @param {BaseEntity[]} dateTicketEntities
 * @param {Object} assignedState - { assigned, removed }
 * @return {Object} JSON object with hasTicket, isAssigned, isRemoved values
 */

var determineCurrentAssignment = function determineCurrentAssignment(_ref) {
  var dateId = _ref.dateId,
      ticketId = _ref.ticketId,
      dateTicketEntities = _ref.dateTicketEntities,
      assignedState = _ref.assignedState;
  return {
    hasTicket: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["findIndex"])(dateTicketEntities, function (ticket) {
      return ticket.id === ticketId;
    }) > noIndex,
    isAssigned: Object(_assign_remove_tickets__WEBPACK_IMPORTED_MODULE_2__["isAssigned"])(assignedState.assigned, dateId, ticketId, true) > noIndex,
    isRemoved: Object(_assign_remove_tickets__WEBPACK_IMPORTED_MODULE_2__["isRemoved"])(assignedState.removed, dateId, ticketId, true) > noIndex
  };
};

determineCurrentAssignment.propTypes = {
  dateId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
  ticketId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
  dateTicketEntities: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  assignedState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    assigned: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    removed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (determineCurrentAssignment);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/utils/get-assignments-error-class.js":
/*!**************************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/utils/get-assignments-error-class.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

/**
 * extra css class applied to ticket cell if assignment error exists
 *
 * @function
 * @param {number|string} dateId
 * @param {number|string} ticketId
 * @param {boolean} hasNoAssignments
 * @param {Object} assignmentCounts { dates, tickets }
 * @return {string} css class
 */

var getAssignmentsErrorClass = function getAssignmentsErrorClass(_ref) {
  var dateId = _ref.dateId,
      ticketId = _ref.ticketId,
      hasNoAssignments = _ref.hasNoAssignments,
      assignmentCounts = _ref.assignmentCounts;

  var entitiesHaveEmptyAssignments = function entitiesHaveEmptyAssignments() {
    return assignmentCounts.dates[dateId] === 0 || assignmentCounts.tickets[ticketId] === 0;
  };

  return hasNoAssignments && entitiesHaveEmptyAssignments() ? ' ee-tam-assignments-error' : '';
};

getAssignmentsErrorClass.propTypes = {
  dateId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]).isRequired,
  ticketId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]).isRequired,
  hasNoAssignments: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  assignmentCounts: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    assigned: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    removed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (getAssignmentsErrorClass);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/utils/get-icon-and-bg-color.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/utils/get-icon-and-bg-color.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

/**
 * icon and color class representing current ticket date assignment
 *
 * @function
 * @param {boolean} hasTicket
 * @param {boolean} isAssigned
 * @param {boolean} isRemoved
 * @return {Object} JSON object with icon and bgColor values
 */

var getIconAndBgColor = function getIconAndBgColor(_ref) {
  var hasTicket = _ref.hasTicket,
      isAssigned = _ref.isAssigned,
      isRemoved = _ref.isRemoved;
  var icon = '';
  var bgColor = 'ee-tam-ticket-relation-button';

  if (hasTicket) {
    if (isRemoved) {
      icon = 'no';
      bgColor += ' ee-tam-remove-ticket-relation';
    } else {
      icon = 'tickets-alt';
      bgColor += ' ee-tam-has-ticket-relation';
    }
  } else if (isAssigned) {
    icon = 'tickets-alt';
    bgColor += ' ee-tam-add-ticket-relation';
  } else {
    icon = 'minus';
    bgColor += ' ee-tam-no-ticket-relation';
  }

  return {
    icon: icon,
    bgColor: bgColor
  };
};

getIconAndBgColor.propTypes = {
  hasTicket: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isAssigned: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  isRemoved: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (getIconAndBgColor);

/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/utils/index.js":
/*!****************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/utils/index.js ***!
  \****************************************************************************/
/*! exports provided: determineCurrentAssignment, getAssignmentsErrorClass, getIconAndBgColor, isCurrentlyAssigned, isAssigned, unAssignTicketEntity, assignTicketEntity, assignedCount, isRemoved, unRemoveTicketEntity, removeTicketEntity, removedCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _determine_current_assignment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./determine-current-assignment */ "./assets/src/editor/events/ticket-assignments-manager/utils/determine-current-assignment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "determineCurrentAssignment", function() { return _determine_current_assignment__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _get_assignments_error_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-assignments-error-class */ "./assets/src/editor/events/ticket-assignments-manager/utils/get-assignments-error-class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAssignmentsErrorClass", function() { return _get_assignments_error_class__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _get_icon_and_bg_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-icon-and-bg-color */ "./assets/src/editor/events/ticket-assignments-manager/utils/get-icon-and-bg-color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconAndBgColor", function() { return _get_icon_and_bg_color__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _is_currently_assigned__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-currently-assigned */ "./assets/src/editor/events/ticket-assignments-manager/utils/is-currently-assigned.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCurrentlyAssigned", function() { return _is_currently_assigned__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _assign_remove_tickets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assign-remove-tickets */ "./assets/src/editor/events/ticket-assignments-manager/utils/assign-remove-tickets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAssigned", function() { return _assign_remove_tickets__WEBPACK_IMPORTED_MODULE_4__["isAssigned"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unAssignTicketEntity", function() { return _assign_remove_tickets__WEBPACK_IMPORTED_MODULE_4__["unAssignTicketEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignTicketEntity", function() { return _assign_remove_tickets__WEBPACK_IMPORTED_MODULE_4__["assignTicketEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignedCount", function() { return _assign_remove_tickets__WEBPACK_IMPORTED_MODULE_4__["assignedCount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRemoved", function() { return _assign_remove_tickets__WEBPACK_IMPORTED_MODULE_4__["isRemoved"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unRemoveTicketEntity", function() { return _assign_remove_tickets__WEBPACK_IMPORTED_MODULE_4__["unRemoveTicketEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeTicketEntity", function() { return _assign_remove_tickets__WEBPACK_IMPORTED_MODULE_4__["removeTicketEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removedCount", function() { return _assign_remove_tickets__WEBPACK_IMPORTED_MODULE_4__["removedCount"]; });







/***/ }),

/***/ "./assets/src/editor/events/ticket-assignments-manager/utils/is-currently-assigned.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/ticket-assignments-manager/utils/is-currently-assigned.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * used to determine if we are adding or removing a ticket assignment
 *
 * @function
 * @param {boolean} hasTicket
 * @param {boolean} isAssigned
 * @param {boolean} isRemoved
 * @return {boolean} true if ticket is currently assigned to event date
 */
var isCurrentlyAssigned = function isCurrentlyAssigned(hasTicket, isAssigned, isRemoved) {
  return isAssigned || hasTicket && !isRemoved;
};

/* harmony default export */ __webpack_exports__["default"] = (isCurrentlyAssigned);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/editor-ticket-actions-menu.js":
/*!***************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/actions-menu/editor-ticket-actions-menu.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _menu_items_assign_dates_menu_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-items/assign-dates-menu-item */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/menu-items/assign-dates-menu-item.js");
/* harmony import */ var _menu_items_edit_ticket_details_menu_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-items/edit-ticket-details-menu-item */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/menu-items/edit-ticket-details-menu-item.js");
/* harmony import */ var _menu_items_ticket_entity_main_menu_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-items/ticket-entity-main-menu-item */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/menu-items/ticket-entity-main-menu-item.js");
/* harmony import */ var _edit_form_edit_ticket_form_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-form/edit-ticket-form-modal */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/edit-ticket-form-modal.js");
/* harmony import */ var _price_calculator_ticket_price_calculator_menu_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../price-calculator/ticket-price-calculator-menu-item */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-menu-item.js");
/* harmony import */ var _edit_form_use_ticket_editor_id__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../edit-form/use-ticket-editor-id */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-editor-id.js");



/**
 * External imports
 */




/**
 * Internal dependencies
 */









var EditorTicketActionsMenu = function EditorTicketActionsMenu(_ref) {
  var ticketEntity = _ref.ticketEntity;
  var editorId = Object(_edit_form_use_ticket_editor_id__WEBPACK_IMPORTED_MODULE_11__["default"])(ticketEntity);

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      menuItems = _useState2[0],
      setMenuItems = _useState2[1];

  var _useEntityActionMenuI = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["useEntityActionMenuItems"])(),
      getActionsMenuForEntity = _useEntityActionMenuI.getActionsMenuForEntity,
      registerEntityActionsMenuItem = _useEntityActionMenuI.registerEntityActionsMenuItem;

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (Array.isArray(menuItems) && menuItems.length < 1) {
      registerEntityActionsMenuItem(ticketEntity, 'main-menu', function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_menu_items_ticket_entity_main_menu_item__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: "main-menu-".concat(ticketEntity.id),
          ticketEntity: ticketEntity
        });
      });
      registerEntityActionsMenuItem(ticketEntity, 'edit-details', function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_menu_items_edit_ticket_details_menu_item__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: "edit-details-".concat(ticketEntity.id),
          ticketEntity: ticketEntity
        });
      });
      registerEntityActionsMenuItem(ticketEntity, 'assign-dates', function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_menu_items_assign_dates_menu_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: "assign-dates-".concat(ticketEntity.id),
          ticketEntity: ticketEntity
        });
      });
      registerEntityActionsMenuItem(ticketEntity, 'price-calculator', function () {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_price_calculator_ticket_price_calculator_menu_item__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: "price-calculator-".concat(ticketEntity.id),
          ticketEntity: ticketEntity
        });
      });
      setMenuItems(getActionsMenuForEntity(ticketEntity));
    }
  }, [ticketEntity, getActionsMenuForEntity, registerEntityActionsMenuItem]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: 'ee-editor-ticket-actions-menu'
  }, menuItems), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_edit_form_edit_ticket_form_modal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    editorId: editorId,
    ticketEntity: ticketEntity
  }));
};

EditorTicketActionsMenu.propTypes = {
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_3__["ifValidTicketEntity"])(EditorTicketActionsMenu));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/index.js":
/*!******************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/actions-menu/index.js ***!
  \******************************************************************************/
/*! exports provided: EditorTicketActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_ticket_actions_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-ticket-actions-menu */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/editor-ticket-actions-menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketActionsMenu", function() { return _editor_ticket_actions_menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/menu-items/assign-dates-menu-item.js":
/*!**********************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/actions-menu/menu-items/assign-dates-menu-item.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ticket_assignments_manager_ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ticket-assignments-manager/ticket-assignments-manager-modal */ "./assets/src/editor/events/ticket-assignments-manager/ticket-assignments-manager-modal.js");
/* harmony import */ var _ticket_assignments_manager_use_ticket_assignments_editor_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ticket-assignments-manager/use-ticket-assignments-editor-id */ "./assets/src/editor/events/ticket-assignments-manager/use-ticket-assignments-editor-id.js");


/**
 * External imports
 */





/**
 * Internal dependencies
 */




var AssignDatesMenuItem = function AssignDatesMenuItem(_ref) {
  var ticketEntity = _ref.ticketEntity;

  var _useTicketEventDates = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useTicketEventDates"])(ticketEntity),
      eventDates = _useTicketEventDates.eventDates,
      eventDatesLoaded = _useTicketEventDates.eventDatesLoaded;

  var _useEventEditorEventD = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useEventEditorEventDates"])(),
      allEventDates = _useEventEditorEventD.eventDates;

  var editorId = Object(_ticket_assignments_manager_use_ticket_assignments_editor_id__WEBPACK_IMPORTED_MODULE_7__["default"])(null, ticketEntity, allEventDates, []);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["IconMenuItem"], {
    index: 3,
    tooltip: eventDatesLoaded && !eventDates.length ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('warning! no assigned ticket dates - click to fix', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('assign ticket to event dates', 'event_espresso'),
    id: "assign-ticket-dates-ticket-".concat(ticketEntity.id),
    htmlClass: 'assign-ticket-dates',
    dashicon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["EspressoIcon"], {
      icon: "calendar"
    }),
    tooltipPosition: "top right",
    onClick: Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["useOpenEditor"])(editorId),
    itemCount: eventDatesLoaded ? eventDates.length : null
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ticket_assignments_manager_ticket_assignments_manager_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    editorId: editorId,
    ticketEntity: ticketEntity,
    allDateEntities: allEventDates,
    editorTitle: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["_x"])('Date Assignments for Ticket:  %1$s', 'Date Assignments for Ticket:  Ticket name', 'event_espresso'), ticketEntity.name)
  }));
};

AssignDatesMenuItem.propTypes = {
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["ifValidTicketEntity"])(AssignDatesMenuItem));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/menu-items/edit-ticket-details-menu-item.js":
/*!*****************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/actions-menu/menu-items/edit-ticket-details-menu-item.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _edit_form_use_ticket_editor_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../edit-form/use-ticket-editor-id */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-editor-id.js");


/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



var EditTicketDetailsMenuItem = function EditTicketDetailsMenuItem(_ref) {
  var ticketEntity = _ref.ticketEntity;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["IconMenuItem"], {
    index: 1,
    tooltip: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('edit ticket details', 'event_espresso'),
    id: "edit-ticket-".concat(ticketEntity.id),
    htmlClass: "edit-ticket",
    dashicon: "edit",
    tooltipPosition: "top right",
    onClick: Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["useOpenEditor"])(Object(_edit_form_use_ticket_editor_id__WEBPACK_IMPORTED_MODULE_5__["default"])(ticketEntity))
  });
};

EditTicketDetailsMenuItem.propTypes = {
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["ifValidTicketEntity"])(EditTicketDetailsMenuItem));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/menu-items/ticket-entity-main-menu-item.js":
/*!****************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/actions-menu/menu-items/ticket-entity-main-menu-item.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _edit_form_use_ticket_editor_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../edit-form/use-ticket-editor-id */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-editor-id.js");


/**
 * External imports
 */





/**
 * Internal dependencies
 */



var TicketEntityMainMenuItem = function TicketEntityMainMenuItem(_ref) {
  var ticketEntity = _ref.ticketEntity;

  var _useTicketEventDates = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useTicketEventDates"])(ticketEntity),
      eventDates = _useTicketEventDates.eventDates;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["DropDownMenu"], {
    tooltip: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('ticket main menu', 'event_espresso'),
    tooltipPosition: "top right",
    htmlClass: "ee-editor-ticket-".concat(ticketEntity.id),
    menuItems: [{
      title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('edit ticket', 'event_espresso'),
      icon: 'edit',
      onClick: Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["useOpenEditor"])(Object(_edit_form_use_ticket_editor_id__WEBPACK_IMPORTED_MODULE_6__["default"])(ticketEntity)),
      ticketEntity: ticketEntity
    }, {
      title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('copy ticket', 'event_espresso'),
      icon: 'admin-page',
      onClick: Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useCopyTicket"])(ticketEntity, eventDates)
    }, {
      title: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('trash ticket', 'event_espresso'),
      icon: 'trash',
      onClick: Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useTrashTicket"])(ticketEntity)
    }]
  });
};

TicketEntityMainMenuItem.propTypes = {
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["ifValidTicketEntity"])(TicketEntityMainMenuItem));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/style.css":
/*!*******************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/actions-menu/style.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-editor-ticket-actions-menu":"ee-editor-ticket-actions-menu"};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/add-new-ticket-button.js":
/*!*********************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/add-new-ticket-button.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External imports
 */





/**
 * @param {Object} props
 * @member {boolean} loading
 * @member {Function} setLoading
 * @return {Object} rendered "Add New Ticket" Button
 */

var AddNewTicketButton = function AddNewTicketButton(_ref) {
  var loading = _ref.loading,
      setLoading = _ref.setLoading;
  var basePriceType = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__["useBasePriceType"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["LoadingNotice"], {
      loading: loading,
      htmlClass: 'ee-loading-new-entity'
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["EspressoButton"], {
      icon: 'tickets-alt',
      buttonText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Add New Ticket', 'event_espresso'),
      onClick: function onClick(click) {
        Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_3__["cancelClickEvent"])(click, 'AddNewTicketButton');
        setLoading(true);
      },
      disabled: !basePriceType
    }));
  }, [loading, setLoading, basePriceType]);
};

/* harmony default export */ __webpack_exports__["default"] = (AddNewTicketButton);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/edit-ticket-form-modal.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/edit-ticket-form-modal.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _edit_ticket_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-ticket-form */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/edit-ticket-form.js");
/* harmony import */ var _use_ticket_form_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-ticket-form-schema */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-form-schema.js");




/**
 * External imports
 */





/**
 * Internal dependencies
 */



/**
 * @function
 * @param {string} editorId
 * @param {Object} ticketEntity model object defining the Ticket
 * @param {Function} onEditorOpen
 * @param {Function} onEditorClose
 * @param {Object} otherProps
 * @return {Object} rendered form with editor modal and form handler
 */

var EditTicketFormModal = function EditTicketFormModal(_ref) {
  var editorId = _ref.editorId,
      ticketEntity = _ref.ticketEntity,
      onEditorOpen = _ref.onEditorOpen,
      onEditorClose = _ref.onEditorClose,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["editorId", "ticketEntity", "onEditorOpen", "onEditorClose"]);

  var formData = Object(_use_ticket_form_schema__WEBPACK_IMPORTED_MODULE_8__["default"])(ticketEntity);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__["EditorModal"], {
      editorId: editorId,
      editorTitle: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Ticket Editor', 'event_espresso'),
      editorHtmlClass: 'ee-ticket-editor-modal',
      editorCloseButtonLabel: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('close ticket editor', 'event_espresso'),
      onEditorOpen: onEditorOpen,
      onEditorClose: onEditorClose
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["FormHandler"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      FormComponent: _edit_ticket_form__WEBPACK_IMPORTED_MODULE_7__["default"],
      ticketEntity: ticketEntity,
      formData: formData,
      loading: false
    }, otherProps)));
  }, [editorId, ticketEntity, formData, otherProps]);
};

EditTicketFormModal.propTypes = {
  editorId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  onEditorOpen: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onEditorClose: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__["ifValidTicketEntity"])(EditTicketFormModal));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/edit-ticket-form.js":
/*!**************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/edit-ticket-form.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cuid */ "cuid");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _use_ticket_form_input_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-ticket-form-input-config */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-form-input-config.js");
/* harmony import */ var _use_ticket_form_input_prefix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-ticket-form-input-prefix */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-form-input-prefix.js");
/* harmony import */ var _helpers_forms_use_edit_entity_form_inputs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../helpers/forms/use-edit-entity-form-inputs */ "./assets/src/editor/helpers/forms/use-edit-entity-form-inputs.js");




/**
 * External imports
 */






/**
 * Internal dependencies
 */




var FormSection = _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["twoColumnAdminFormLayout"].FormSection,
    FormWrapper = _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["twoColumnAdminFormLayout"].FormWrapper;
/**
 * @param {Object} props
 * @member {Object} ticketEntity model object defining the Ticket
 * @member {Function} updateField callback for editing a field
 * @member {Function} touchField callback for marking field as changed
 * @member {Object} currentValues form data
 * @member {Object} initialValues initial form data
 * @return {Object} rendered form for editing ticket entity
 */

var EditTicketForm = function EditTicketForm(_ref) {
  var ticketEntity = _ref.ticketEntity,
      updateField = _ref.updateField,
      touchField = _ref.touchField,
      currentValues = _ref.currentValues,
      initialValues = _ref.initialValues,
      newObject = _ref.newObject,
      formProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["ticketEntity", "updateField", "touchField", "currentValues", "initialValues", "newObject"]);

  var prefix = Object(_use_ticket_form_input_prefix__WEBPACK_IMPORTED_MODULE_9__["default"])(ticketEntity);
  var inputConfig = Object(_use_ticket_form_input_config__WEBPACK_IMPORTED_MODULE_8__["default"])({
    ticket: ticketEntity,
    prefix: prefix,
    updateField: updateField,
    touchField: touchField
  }); // entity properties we don't want to be editable

  var exclude = ['TKT_ID', 'sold', 'reserved', 'order', 'parent', 'wpUser', 'status'];
  var isNewTicket = cuid__WEBPACK_IMPORTED_MODULE_7___default.a.isCuid(ticketEntity.TKT_ID);

  if (isNewTicket) {
    exclude.push('deleted');
  }

  var formRows = Object(_helpers_forms_use_edit_entity_form_inputs__WEBPACK_IMPORTED_MODULE_10__["default"])(ticketEntity, inputConfig, prefix, currentValues, exclude);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    // edit forms for existing objects must have initial values
    return !(!newObject && Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(initialValues)) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(FormWrapper, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(FormSection, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      htmlId: "".concat(prefix, "-form-section"),
      children: formRows,
      showRequiredNotice: true
    }, formProps))) : null;
  }, [newObject, initialValues, ticketEntity, formRows]);
};

EditTicketForm.propTypes = {
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  currentValues: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  newObject: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};
EditTicketForm.defaultProps = {
  currentValues: {},
  initialValues: {},
  newObject: false
};
/**
 * Enhanced EditTicketForm with FormHandler
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__["ifValidTicketEntity"])(EditTicketForm));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/index.js":
/*!***************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/index.js ***!
  \***************************************************************************/
/*! exports provided: EditTicketForm, EditTicketFormModal, NewTicketFormModal, useTicketEditorId, useTicketEntityFormInputPrefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_ticket_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-ticket-form */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/edit-ticket-form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTicketForm", function() { return _edit_ticket_form__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _edit_ticket_form_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-ticket-form-modal */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/edit-ticket-form-modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTicketFormModal", function() { return _edit_ticket_form_modal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _new_ticket_form_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-ticket-form-modal */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/new-ticket-form-modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewTicketFormModal", function() { return _new_ticket_form_modal__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _use_ticket_editor_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-ticket-editor-id */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-editor-id.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketEditorId", function() { return _use_ticket_editor_id__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketEntityFormInputPrefix", function() { return _use_ticket_editor_id__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/new-ticket-form-modal.js":
/*!*******************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/new-ticket-form-modal.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit_ticket_form_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-ticket-form-modal */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/edit-ticket-form-modal.js");
/* harmony import */ var _use_ticket_editor_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-ticket-editor-id */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-editor-id.js");



/**
 * External imports
 */



/**
 * Internal imports
 */



/**
 * @param {Object} props
 * @member {boolean} loading
 * @member {Function} setLoading
 * @return {Object} rendered Edit Ticket Form Modal
 */

var NewTicketFormModal = function NewTicketFormModal(_ref) {
  var loading = _ref.loading,
      setLoading = _ref.setLoading;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      newTicket = _useState2[0],
      cacheNewTicket = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      toggleTicketEditor = _useState4[0],
      setToggleTicketEditor = _useState4[1];

  var basePriceType = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useBasePriceType"])();
  var createTicketEntity = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useCreateTicketEntity"])(cacheNewTicket, basePriceType);
  var editorId = Object(_use_ticket_editor_id__WEBPACK_IMPORTED_MODULE_5__["default"])(newTicket, 'new-ticket');
  var openTicketEditor = Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["useOpenEditor"])(editorId); // using the button click event to create the new ticket entity
  // was causing issues with re-renders due to the async nature of things.
  // triggering everything after render makes the UI run more smoothly

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (loading) {
      setLoading(false);
      createTicketEntity();
      setToggleTicketEditor(true);
    }
  }); // because we have to wait for a valid ticket entity to be created,
  // we can't simply open the editor via the Add New Ticket click event,
  // so instead we toggle the following flag to indicate this

  if (toggleTicketEditor) {
    openTicketEditor();
  } // once the ticket editor has been opened, we can flip that toggle to off


  var onEditorOpen = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setToggleTicketEditor(false);
  }, []); // once the ticket editor closes, unset the cached ticket,
  // which will get picked up by the main ticket editor list
  // and free up the cache for creating another new ticket

  var onEditorClose = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    cacheNewTicket(null);
  }, []); // don't bother rendering the ticket form modal
  // if a new ticket does not exist

  return newTicket ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_edit_ticket_form_modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    editorId: editorId,
    ticketEntity: newTicket,
    onEditorOpen: onEditorOpen,
    onEditorClose: onEditorClose
  }) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (NewTicketFormModal);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-editor-id.js":
/*!******************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-editor-id.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

/**
 * @function
 * @param {Object} ticket
 * @param {string} prefix
 * @return {string} editor id for ticket
 */

var useTicketEditorId = function useTicketEditorId(ticket) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var editorId = Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_0__["isModelEntityOfModel"])(ticket, 'ticket') ? "ticket-editor-".concat(ticket.id) : '';
  return prefix !== '' && editorId !== '' ? "".concat(prefix, "-").concat(editorId) : editorId;
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketEditorId);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-form-input-config.js":
/*!**************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-form-input-config.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _price_calculator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../price-calculator */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/index.js");
/* harmony import */ var _price_calculator_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../price-calculator/hooks */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External imports
 */








/**
 * Internal dependencies
 */



/**
 * input configuration for ticket entity edit form
 *
 * @function
 * @param {Object} props
 * @member {Object} ticket
 * @member {string} prefix partial identifier for React Final Form data schema
 * @member {Function} updateField callback for editing a field
 * @member {Function} touchField callback for marking field as changed
 * @return {Array} memoized config array
 */

var useTicketFormInputConfig = function useTicketFormInputConfig(_ref) {
  var ticket = _ref.ticket,
      prefix = _ref.prefix,
      updateField = _ref.updateField,
      touchField = _ref.touchField;
  warning__WEBPACK_IMPORTED_MODULE_2___default()(Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_7__["isModelEntityOfModel"])(ticket, 'ticket'), 'Can not generate input config data because an invalid ticket entity was supplied.');

  var _useTicketPrices = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__["useTicketPrices"])(ticket),
      prices = _useTicketPrices.prices;

  var _usePriceTypes = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__["usePriceTypes"])(),
      priceTypes = _usePriceTypes.priceTypes;

  var dateInputFormProps = {
    entity: ticket,
    dateProps: {
      start: 'startDate',
      end: 'endDate'
    }
  };

  var _useEntityDateChangeL = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__["useEntityDateChangeListeners"])(_objectSpread({}, dateInputFormProps, {
    startDateFormKey: "".concat(prefix, "-startDate"),
    endDateFormKey: "".concat(prefix, "-endDate"),
    updateField: updateField,
    touchField: touchField
  })),
      startDateChangeListener = _useEntityDateChangeL.startDateChangeListener,
      endDateChangeListener = _useEntityDateChangeL.endDateChangeListener;

  var _useEntityDateChangeV = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__["useEntityDateChangeValidators"])(dateInputFormProps),
      startDateChangeValidator = _useEntityDateChangeV.startDateChangeValidator,
      endDateChangeValidator = _useEntityDateChangeV.endDateChangeValidator;

  var endDateIsAfterStartDate = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_5__["useEndDateAfterStartDateValidator"])(dateInputFormProps);
  var calculateTicketBasePrice = Object(_price_calculator_hooks__WEBPACK_IMPORTED_MODULE_10__["useTicketBasePriceCalculator"])(prices, priceTypes);
  var basePrice = Object(_price_calculator_hooks__WEBPACK_IMPORTED_MODULE_10__["useBasePrice"])(prices);
  var recalculateBasePrice = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (t) {
    if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_7__["isModelEntityOfModel"])(t, 'ticket')) {
      var basePriceValue = calculateTicketBasePrice(t.price.amount.toNumber());
      basePrice.amount = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Money"](Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__["parseMoneyValue"])(basePriceValue), _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["SiteCurrency"]);
    }
  }, [calculateTicketBasePrice]);
  var calculator = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_price_calculator__WEBPACK_IMPORTED_MODULE_9__["TicketPriceCalculatorMenuItem"], {
    ticketEntity: ticket
  });
  var now = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["ServerDateTime"]();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return [{
      id: 'id',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ticket ID', 'event_espresso'),
      default: false,
      disabled: true,
      inputWidth: 3,
      required: true,
      validations: _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["validations"].required
    }, {
      id: 'name',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ticket Label', 'event_espresso'),
      default: '',
      changeListener: function changeListener(value) {
        ticket.name = value;
      },
      minLength: 3
    }, {
      id: 'description',
      type: 'textarea',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Description', 'event_espresso'),
      default: '',
      changeListener: function changeListener(value) {
        ticket.description = value;
      }
    }, {
      id: 'price',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ticket Price', 'event_espresso'),
      default: 0,
      min: 0,
      step: 1,
      changeListener: function changeListener(value, prevValue) {
        if (!Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__["amountsMatch"])(value, prevValue)) {
          ticket.price = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Money"](value || 0, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["SiteCurrency"]);
          recalculateBasePrice(ticket);
        }
      },
      helpText: {
        regular: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('The total amount of money charged for this ticket. Leave blank to make this ticket selection free.%sClick the button after the input to use the Ticket Price Calculator', 'event_espresso'), ' \n')
      },
      inputWidth: 3,
      afterInput: calculator
    }, {
      id: 'taxable',
      type: 'toggle',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ticket is Taxable?', 'event_espresso'),
      default: false,
      changeListener: function changeListener(value) {
        ticket.taxable = !!value;
      },
      inputWidth: 2,
      helpText: {
        ifChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('This ticket is taxable. All configured taxes will be applied to the price of this ticket upon purchase.', 'event_espresso'),
        ifNotChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('click to make this ticket taxable', 'event_espresso')
      }
    }, {
      id: 'startDate',
      type: 'datetime-local',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ticket Sales Start', 'event_espresso'),
      default: now,
      changeListener: startDateChangeListener,
      validate: startDateChangeValidator,
      validations: _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["validations"].required,
      required: true,
      inputWidth: 6
    }, {
      id: 'endDate',
      type: 'datetime-local',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ticket Sales End', 'event_espresso'),
      default: now.plus(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_8__["Duration"].fromObject({
        days: 30
      })),
      changeListener: endDateChangeListener,
      validate: endDateChangeValidator,
      isInvalidDate: endDateIsAfterStartDate,
      validations: _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["validations"].required,
      required: true,
      inputWidth: 6
    }, {
      id: 'qty',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quantity', 'event_espresso'),
      default: Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__["parseInfinity"])(-1),
      changeListener: function changeListener(value) {
        ticket.qty = Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__["parseInfinity"])(value || -1, true, true);
      },
      min: -1,
      inputWidth: 3,
      helpText: {
        regular: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('The maximum number of this ticket available for sale.%sSet to 0 stop sales or set to -1 for no limit.', 'event_espresso'), '\n')
      }
    }, {
      id: 'min',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Minimum Quantity', 'event_espresso'),
      default: null,
      min: 0,
      changeListener: function changeListener(value) {
        ticket.min = parseInt(value || 0, 10);
      },
      inputWidth: 3,
      helpText: {
        regular: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('The minimum quantity that can be selected for this ticket. Use this to create ticket bundles or graduated pricing.%sLeave blank for no minimum.', 'event_espresso'), '\n')
      }
    }, {
      id: 'max',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Maximum Quantity', 'event_espresso'),
      default: Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__["parseInfinity"])(-1),
      min: -1,
      changeListener: function changeListener(value) {
        ticket.max = parseInt(value || 0, 10);
      },
      inputWidth: 3,
      helpText: {
        regular: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('The maximum quantity that can be selected for this ticket. Use this to create ticket bundles or graduated pricing.%sSet to -1 for no maximum.', 'event_espresso'), '\n')
      }
    }, {
      id: 'uses',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Number of Uses', 'event_espresso'),
      default: -1,
      min: 0,
      changeListener: function changeListener(value) {
        ticket.uses = Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_6__["parseInfinity"])(value || -1, true, true);
      },
      inputWidth: 3,
      helpText: {
        regular: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Controls the total number of times this ticket can be used, regardless of the number of dates it is assigned to.%sExample: A ticket might have access to 4 different dates, but setting this field to 2 would mean that the ticket could only be used twice. Leave blank for no limit.', 'event_espresso'), '\n')
      }
    }, {
      id: 'required',
      type: 'toggle',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Required Ticket?', 'event_espresso'),
      default: false,
      changeListener: function changeListener(value) {
        ticket.required = !!value;
      },
      inputWidth: 2,
      helpText: {
        ifChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('This ticket is required and must be purchased. It will appear first in frontend ticket lists.', 'event_espresso'),
        ifNotChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('click to make this ticket a required selection.', 'event_espresso')
      }
    }, {
      id: 'sold',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Sold Count', 'event_espresso'),
      disabled: true,
      default: 0,
      changeListener: function changeListener(value) {
        ticket.sold = parseInt(value || 0, 10);
      },
      min: 0,
      inputWidth: 3,
      helpText: {
        regular: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quantity of this Ticket that has been sold.', 'event_espresso')
      }
    }, {
      id: 'reserved',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Reserved Count', 'event_espresso'),
      disabled: true,
      default: 0,
      changeListener: function changeListener(value) {
        ticket.reserved = parseInt(value || 0, 10);
      },
      min: 0,
      inputWidth: 3,
      helpText: {
        regular: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quantity of tickets reserved, but not yet fully purchased', 'event_espresso')
      }
    }, {
      id: 'order',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Display Order', 'event_espresso'),
      default: 0,
      changeListener: function changeListener(value) {
        ticket.order = parseInt(value || 0, 10);
      },
      inputWidth: 2
    }, {
      id: 'isDefault',
      type: 'toggle',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Default Ticket?', 'event_espresso'),
      default: false,
      changeListener: function changeListener(value) {
        ticket.isDefault = !!value;
      },
      inputWidth: 2,
      helpText: {
        ifChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('this is a default ticket and will appear on all new events.', 'event_espresso'),
        ifNotChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('click to make this a default ticket for any new events.', 'event_espresso')
      }
    }, {
      id: 'reverseCalculate',
      type: 'toggle',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Reverse Calculate?', 'event_espresso'),
      default: false,
      changeListener: function changeListener(value) {
        ticket.reverse_calculate = !!value;
      },
      inputWidth: 2,
      helpText: {
        ifChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('the ticket base price will be reverse engineered from the provided ticket total and price modifiers.', 'event_espresso'),
        ifNotChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('the ticket total will be calculated normally from the provided ticket base price and price modifiers. click to reverse calculate the ticket base price from the total instead.', 'event_espresso')
      }
    }, {
      id: 'wpUser',
      type: 'number',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Created By', 'event_espresso'),
      default: 0,
      disabled: true,
      changeListener: function changeListener(value) {
        ticket.wpUser = parseInt(value || 0, 10);
      },
      inputWidth: 2,
      helpText: {
        regular: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('The ID of the admin that created this ticket.', 'event_espresso')
      }
    }, {
      id: 'parent',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Parent Ticket', 'event_espresso'),
      default: 0,
      disabled: true,
      changeListener: function changeListener(value) {
        ticket.parent = parseInt(value || 0, 10);
      },
      inputWidth: 2
    }, {
      id: 'deleted',
      type: 'toggle',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Archived', 'event_espresso'),
      default: false,
      changeListener: function changeListener(value) {
        ticket.deleted = parseInt(value || 0, 10) === 1;
      },
      inputWidth: 2,
      helpText: {
        ifChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('this ticket is archived', 'event_espresso'),
        ifNotChecked: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('this ticket is NOT archived', 'event_espresso')
      }
    }];
  }, [ticket.id, ticket.name, ticket.description, ticket.startDate.toISO(), ticket.endDate.toISO(), ticket.qty, ticket.sold, ticket.reserved, ticket.uses, ticket.required, ticket.min, ticket.max, ticket.price.amount.toNumber(), ticket.taxable, ticket.isDefault, ticket.reverse_calculate, ticket.wpUser, ticket.order, ticket.parent, ticket.deleted]);
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketFormInputConfig);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-form-input-prefix.js":
/*!**************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-form-input-prefix.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


/**
 * returns Ticket Entity form prefix
 *
 * @function
 * @param {Object} ticketEntity  EE Ticket object
 * @return {Object} rendered form
 */

var useTicketFormInputPrefix = function useTicketFormInputPrefix(ticketEntity) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(ticketEntity, 'ticket') ? "ee-ticket-".concat(ticketEntity.id) : '';
  }, [ticketEntity.id]);
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketFormInputPrefix);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-form-schema.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-form-schema.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _use_ticket_form_input_prefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-ticket-form-input-prefix */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/use-ticket-form-input-prefix.js");


/**
 * External imports
 */



/**
 * Internal imports
 */


/**
 * returns an object mapping Ticket Entity properties to form prefixes
 *
 * @function
 * @param {Object} ticketEntity
 * @return {Object} rendered form
 */

var useTicketFormSchema = function useTicketFormSchema(ticketEntity) {
  var prefix = Object(_use_ticket_form_input_prefix__WEBPACK_IMPORTED_MODULE_4__["default"])(ticketEntity);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var _ref;

    if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(ticketEntity, 'ticket')) {
      return {};
    }

    return _ref = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-id"), ticketEntity.id), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-name"), ticketEntity.name || ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-description"), ticketEntity.description || ''), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-qty"), Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__["parseInfinity"])(ticketEntity.qty, false, true)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-sold"), ticketEntity.sold || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-reserved"), ticketEntity.reserved || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-uses"), Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__["parseInfinity"])(ticketEntity.uses, false, true)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-required"), ticketEntity.required || false), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-min"), ticketEntity.min || null), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-max"), Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__["parseInfinity"])(ticketEntity.max, false, true)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-price"), ticketEntity.price && ticketEntity.price.amount ? ticketEntity.price.amount.toNumber() : null), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-startDate"), ticketEntity.startDate.toISO()), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-endDate"), ticketEntity.endDate.toISO()), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-taxable"), ticketEntity.taxable || false), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-order"), ticketEntity.order || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-isDefault"), ticketEntity.isDefault || false), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-reverse_calculate"), ticketEntity.reverse_calculate || false), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-wpUser"), ticketEntity.wpUser || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-parent"), ticketEntity.parent || 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_ref, "".concat(prefix, "-deleted"), ticketEntity.deleted || false), _ref;
  }, [ticketEntity.id, ticketEntity.name, ticketEntity.description, ticketEntity.startDate.toISO(), ticketEntity.endDate.toISO(), ticketEntity.qty, ticketEntity.sold, ticketEntity.reserved, ticketEntity.uses, ticketEntity.required, ticketEntity.min, ticketEntity.max, ticketEntity.price.amount.toNumber(), ticketEntity.taxable, ticketEntity.isDefault, ticketEntity.reverse_calculate, ticketEntity.wpUser, ticketEntity.order, ticketEntity.parent, ticketEntity.deleted]);
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketFormSchema);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/editor-ticket-entities-list.js":
/*!***************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/editor-ticket-entities-list.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _add_new_ticket_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-new-ticket-button */ "./assets/src/editor/events/tickets/editor-ticket/add-new-ticket-button.js");
/* harmony import */ var _use_tickets_for_event_editor_ticket_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-tickets-for-event-editor-ticket-list */ "./assets/src/editor/events/tickets/editor-ticket/use-tickets-for-event-editor-ticket-list.js");
/* harmony import */ var _edit_form___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-form/ */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/index.js");
/* harmony import */ var _grid_view___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grid-view/ */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/index.js");
/* harmony import */ var _list_view___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-view/ */ "./assets/src/editor/events/tickets/editor-ticket/list-view/index.js");
/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filter-bar */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/index.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */







var FormWrapper = _eventespresso_components__WEBPACK_IMPORTED_MODULE_5__["twoColumnAdminFormLayout"].FormWrapper,
    FormButtonsRow = _eventespresso_components__WEBPACK_IMPORTED_MODULE_5__["twoColumnAdminFormLayout"].FormButtonsRow;
/**
 * EditorTicketEntitiesList
 *
 * displays a paginated list of tickets with a filter bar
 * for controlling how and what tickets are displayed
 *
 * @param {Object} otherProps
 * @return {Object} rendered event dates list
 */

var EditorTicketEntitiesList = function EditorTicketEntitiesList(_ref) {
  var otherProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, _ref);

  var listId = 'event-editor-ticket-list';

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useTicketsListFilter = Object(_filter_bar__WEBPACK_IMPORTED_MODULE_12__["useTicketsListFilterState"])({
    listId: listId
  }),
      isChained = _useTicketsListFilter.isChained,
      showTickets = _useTicketsListFilter.showTickets,
      ticketsSortedBy = _useTicketsListFilter.ticketsSortedBy,
      displayTicketDate = _useTicketsListFilter.displayTicketDate,
      filteredTicketIds = _useTicketsListFilter.filteredTicketIds;

  var _useTicketsForEventEd = Object(_use_tickets_for_event_editor_ticket_list__WEBPACK_IMPORTED_MODULE_8__["default"])(isChained),
      tickets = _useTicketsForEventEd.tickets,
      ticketsLoaded = _useTicketsForEventEd.ticketsLoaded;

  var _useEntityListFilterS = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_5__["useEntityListFilterState"])({
    listId: listId
  }),
      view = _useEntityListFilterS.view,
      perPage = _useEntityListFilterS.perPage,
      entityListFilters = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_useEntityListFilterS, ["view", "perPage"]);

  var filteredTickets = Object(_filter_bar__WEBPACK_IMPORTED_MODULE_12__["useFilteredTicketsList"])(_objectSpread({
    ticketEntities: tickets,
    isChained: isChained,
    showTickets: showTickets,
    ticketsSortedBy: ticketsSortedBy,
    displayTicketDate: displayTicketDate,
    filteredTicketIds: filteredTicketIds
  }, entityListFilters));

  var _useEntityPagination = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_5__["useEntityPagination"])(perPage, filteredTickets),
      currentPage = _useEntityPagination.currentPage,
      setCurrentPage = _useEntityPagination.setCurrentPage,
      paginatedEntities = _useEntityPagination.paginatedEntities; // update the ticket ids in state whenever the filters change


  var _useTicketsListFilter2 = Object(_filter_bar__WEBPACK_IMPORTED_MODULE_12__["useTicketsListFilterStateSetters"])(listId),
      setFilteredTickets = _useTicketsListFilter2.setFilteredTickets,
      setTicketsSortedBy = _useTicketsListFilter2.setTicketsSortedBy;

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (Array.isArray(paginatedEntities)) {
      setFilteredTickets(paginatedEntities.map(function (ticket) {
        return ticket.id;
      }));
    }
  }, [currentPage, perPage, isChained, showTickets, ticketsSortedBy, Array.isArray(tickets) ? tickets.length : 0]);
  var entityOrder = filteredTicketIds.join('-');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(FormWrapper, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_filter_bar__WEBPACK_IMPORTED_MODULE_12__["TicketsListFilterBar"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({
    listId: listId,
    view: view,
    perPage: perPage,
    isChained: isChained,
    showTickets: showTickets,
    ticketsSortedBy: ticketsSortedBy,
    displayTicketDate: displayTicketDate,
    filteredTicketIds: filteredTicketIds
  }, entityListFilters)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_5__["EntityPagination"], {
    key: "tickets-pagination-".concat(entityOrder),
    listId: listId,
    currentPage: currentPage,
    entitiesPerPage: perPage,
    setCurrentPage: setCurrentPage,
    totalCount: filteredTickets.length
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_5__["EntityList"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, otherProps, {
    key: "tickets-list-".concat(entityOrder),
    entities: paginatedEntities,
    allTickets: tickets,
    EntityGridView: _grid_view___WEBPACK_IMPORTED_MODULE_10__["EditorTicketEntitiesGridView"],
    EntityListView: _list_view___WEBPACK_IMPORTED_MODULE_11__["EditorTicketEntitiesListView"],
    view: view,
    displayTicketDate: displayTicketDate,
    setEntityIds: setFilteredTickets,
    setSortBy: setTicketsSortedBy,
    loading: !ticketsLoaded,
    loadingNotice: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6__["_x"])('loading available tickets%s', 'loading available tickets...', 'event_espresso'), String.fromCharCode(8230)),
    noResultsText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('no results found (try changing filters)', 'event_espresso')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(FormButtonsRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_add_new_ticket_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    loading: loading,
    setLoading: setLoading
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_edit_form___WEBPACK_IMPORTED_MODULE_9__["NewTicketFormModal"], {
    loading: loading,
    setLoading: setLoading
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EditorTicketEntitiesList);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/controls/display-tickets-control.js":
/*!*******************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/controls/display-tickets-control.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External imports
 */




/**
 * filter for controlling which dates display in a list of Tickets
 *
 * @param {string} displayTicketDate
 * @param {Function} setDisplayTicketDate
 * @return {Object} rendered control
 */

var DisplayTicketsControl = function DisplayTicketsControl(_ref) {
  var displayTicketDate = _ref.displayTicketDate,
      setDisplayTicketDate = _ref.setDisplayTicketDate;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('display', 'event_espresso'),
      className: "ee-ticket-list-filter-bar-display-select",
      value: displayTicketDate,
      options: [{
        value: 'start',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('ticket sales start date only', 'event_espresso')
      }, {
        value: 'end',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('ticket sales end date only', 'event_espresso')
      }, {
        value: 'both',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('ticket sales start and end dates', 'event_espresso')
      }],
      onChange: setDisplayTicketDate
    });
  }, [displayTicketDate, setDisplayTicketDate]);
};

DisplayTicketsControl.propTypes = {
  displayTicketDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setDisplayTicketDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayTicketsControl);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/controls/show-tickets-control.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/controls/show-tickets-control.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External imports
 */




/**
 * filter for controlling which dates display in a list of Tickets
 *
 * @param {boolean} isChained
 * @param {string} showTickets
 * @param {Function} setShowTickets
 * @return {Object} rendered control
 */

var ShowTicketsControl = function ShowTicketsControl(_ref) {
  var isChained = _ref.isChained,
      showTickets = _ref.showTickets,
      setShowTickets = _ref.setShowTickets;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('show', 'event_espresso'),
      className: "ee-ticket-list-filter-bar-show-select",
      value: showTickets,
      options: [{
        value: 'all',
        label: isChained ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('all tickets for above dates', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('all tickets for all dates', 'event_espresso')
      }, {
        value: 'on-sale-and-pending',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('all on sale and sale pending', 'event_espresso')
      }, {
        value: 'on-sale-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('on sale tickets only', 'event_espresso')
      }, {
        value: 'pending-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('sale pending tickets only', 'event_espresso')
      }, {
        value: 'next-on-sale-or-pending-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('next on sale or sale pending only', 'event_espresso')
      }, {
        value: 'sold-out-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('sold out tickets only', 'event_espresso')
      }, {
        value: 'above-90-sold',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('tickets with 90% or more sold', 'event_espresso')
      }, {
        value: 'above-75-sold',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('tickets with 75% or more sold', 'event_espresso')
      }, {
        value: 'above-50-sold',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('tickets with 50% or more sold', 'event_espresso')
      }, {
        value: 'below-50-sold',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('tickets with less than 50% sold', 'event_espresso')
      }, {
        value: 'expired-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('expired tickets only', 'event_espresso')
      }, {
        value: 'archived-only',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('archived tickets only', 'event_espresso')
      }],
      onChange: setShowTickets
    });
  }, [isChained, showTickets, setShowTickets]);
};

ShowTicketsControl.propTypes = {
  isChained: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  showTickets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setShowTickets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ShowTicketsControl);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/controls/tickets-chained-button.js":
/*!******************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/controls/tickets-chained-button.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External imports
 */




/**
 * filter for controlling whether Tickets List is chained to the Dates List
 * if true, then only tickets that are related to the dates in the dates list
 * will appear, otherwise ALL tickets will appear (subject to other filters)
 *
 * @param {boolean} isChained
 * @param {Function} setIsChained
 * @return {Object} rendered control
 */

var TicketsChainedButton = function TicketsChainedButton(_ref) {
  var isChained = _ref.isChained,
      setIsChained = _ref.setIsChained;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    isChained = !!isChained;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      label: isChained ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('showing tickets for above dates only', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('showing tickets for all event dates', 'event_espresso'),
      icon: isChained ? 'admin-links' : 'editor-unlink',
      onClick: function onClick() {
        return setIsChained(!isChained);
      },
      value: isChained
    });
  }, [isChained, setIsChained]);
};

TicketsChainedButton.propTypes = {
  isChained: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setIsChained: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TicketsChainedButton);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/controls/tickets-sorted-by-control.js":
/*!*********************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/controls/tickets-sorted-by-control.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External imports
 */




/**
 * filter for controlling the sorting of a list of Tickets
 *
 * @param {string} ticketsSortedBy
 * @param {Function} setTicketsSortedBy
 * @return {Object} rendered control
 */

var TicketsSortedByControl = function TicketsSortedByControl(_ref) {
  var ticketsSortedBy = _ref.ticketsSortedBy,
      setTicketsSortedBy = _ref.setTicketsSortedBy;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('sort', 'event_espresso'),
      className: "ee-ticket-list-filter-bar-order-select",
      value: ticketsSortedBy,
      options: [{
        value: 'chronologically',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('chronologically', 'event_espresso')
      }, {
        value: 'by-name',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('by ticket name', 'event_espresso')
      }, {
        value: 'by-id',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('by ticket ID', 'event_espresso')
      }, {
        value: 'by-order',
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('by custom order', 'event_espresso')
      }],
      onChange: setTicketsSortedBy
    });
  }, [ticketsSortedBy, setTicketsSortedBy]);
};

TicketsSortedByControl.propTypes = {
  ticketsSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setTicketsSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TicketsSortedByControl);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/index.js":
/*!****************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/index.js ***!
  \****************************************************************************/
/*! exports provided: TicketsListFilterBar, useTicketsListFilterState, useTicketsListFilterStateSetters, useFilteredTicketsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tickets_list_filter_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets-list-filter-bar */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/tickets-list-filter-bar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketsListFilterBar", function() { return _tickets_list_filter_bar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _use_tickets_list_filter_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-tickets-list-filter-state */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/use-tickets-list-filter-state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketsListFilterState", function() { return _use_tickets_list_filter_state__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _use_tickets_list_filter_state_setters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-tickets-list-filter-state-setters */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/use-tickets-list-filter-state-setters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketsListFilterStateSetters", function() { return _use_tickets_list_filter_state_setters__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _use_filtered_tickets_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-filtered-tickets-list */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/use-filtered-tickets-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFilteredTicketsList", function() { return _use_filtered_tickets_list__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/style.css":
/*!*****************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/style.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-entity-list-filter-bar":"ee-entity-list-filter-bar","ee-filter-bar-filter":"ee-filter-bar-filter","ee-show-tickets-filter":"ee-show-tickets-filter","ee-ticket-dates-chained-filter":"ee-ticket-dates-chained-filter"};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/tickets-list-entity-filter-utils.js":
/*!*******************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/tickets-list-entity-filter-utils.js ***!
  \*******************************************************************************************************/
/*! exports provided: filterTicketEntities, sortTicketEntitiesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTicketEntities", function() { return filterTicketEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortTicketEntitiesList", function() { return sortTicketEntitiesList; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



/**
 * filterTicketEntities
 * reduces tickets array based on value of the "show" filter
 *
 * @param {Array} ticketEntities    original tickets array
 * @param {string} show    value for the "show" filter
 * @return {Array}         filtered tickets array
 */

var filterTicketEntities = function filterTicketEntities(ticketEntities) {
  var show = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'on-sale-and-pending';

  switch (show) {
    case 'all':
      return ticketEntities;

    case 'on-sale-and-pending':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(ticketEntities, function (ticketEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["ticketModel"].isOnSale(ticketEntity) || _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["ticketModel"].isPending(ticketEntity);
      });

    case 'on-sale-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(ticketEntities, function (ticketEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["ticketModel"].isOnSale(ticketEntity);
      });

    case 'pending-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(ticketEntities, function (ticketEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["ticketModel"].isPending(ticketEntity);
      });

    case 'next-on-sale-or-pending-only':
      ticketEntities = filterTicketEntities(ticketEntities);
      ticketEntities = sortTicketEntitiesList(ticketEntities);
      return [Object(lodash__WEBPACK_IMPORTED_MODULE_0__["first"])(ticketEntities)];

    case 'sold-out-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(ticketEntities, function (ticketEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["ticketModel"].isSoldOut(ticketEntity) || percentSoldAtOrAbove(ticketEntity, 100);
      });

    case 'above-90-sold':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(ticketEntities, function (ticketEntity) {
        return percentSoldAtOrAbove(ticketEntity, 90);
      });

    case 'above-75-sold':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(ticketEntities, function (ticketEntity) {
        return percentSoldAtOrAbove(ticketEntity, 75);
      });

    case 'above-50-sold':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(ticketEntities, function (ticketEntity) {
        return percentSoldAtOrAbove(ticketEntity, 50);
      });

    case 'below-50-sold':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(ticketEntities, function (ticketEntity) {
        return percentSoldBelow(ticketEntity, 50);
      });

    case 'expired-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(ticketEntities, function (ticketEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["ticketModel"].isExpired(ticketEntity);
      });

    case 'archived-only':
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(ticketEntities, function (ticketEntity) {
        return _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["ticketModel"].isArchived(ticketEntity);
      });
  }

  return ticketEntities;
};
/**
 * filterTicketEntities
 * reduces tickets array based on value of the "order" filter
 *
 * @param {Array} ticketEntities    original tickets array
 * @param {string} order   value for the "order" filter
 * @return {Array}         filtered tickets array
 */

var sortTicketEntitiesList = function sortTicketEntitiesList(ticketEntities) {
  var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'chronologically';

  switch (order) {
    case 'chronologically':
      ticketEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(ticketEntities, [function (ticketEntity) {
        return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(ticketEntity, 'ticket') ? ticketEntity.startDate.toMillis() : 0;
      }, 'name', 'id']);
      break;

    case 'by-name':
      ticketEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(ticketEntities, ['name']);
      break;

    case 'by-id':
      ticketEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(ticketEntities, ['id']);
      break;

    case 'by-order':
      ticketEntities = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(ticketEntities, ['order']);
      break;
  }

  return ticketEntities;
};
/**
 * @param {Object} ticketEntity    event ticket object
 * @param {number} maxQuantity
 * @return {boolean} true if sold/qty >= maxQuantity
 */

var percentSoldAtOrAbove = function percentSoldAtOrAbove(ticketEntity, maxQuantity) {
  return validFiniteQuantity(ticketEntity) && parseInt(ticketEntity.sold, 10) / parseInt(ticketEntity.qty, 10) >= maxQuantity / 100;
};
/**
 * @param {Object} ticketEntity    event ticket object
 * @param {number} maxQuantity
 * @return {boolean} true if sold/qty less than than qty
 */


var percentSoldBelow = function percentSoldBelow(ticketEntity, maxQuantity) {
  return validInfiniteQuantity(ticketEntity) || validFiniteQuantity(ticketEntity) && parseInt(ticketEntity.sold, 10) / parseInt(ticketEntity.qty, 10) < maxQuantity / 100;
};
/**
 * @param {Object} ticketEntity    event ticket object
 * @return {boolean} true if qty property is valid and NOT infinite
 */


var validFiniteQuantity = function validFiniteQuantity(ticketEntity) {
  return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(ticketEntity, 'ticket') && ticketEntity.qty !== 'INF' && ticketEntity.qty !== Infinity && parseInt(ticketEntity.qty, 10) > 0;
};
/**
 * @param {Object} ticketEntity    event ticket object
 * @return {boolean} true if qty property is valid and unlimited
 */


var validInfiniteQuantity = function validInfiniteQuantity(ticketEntity) {
  return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(ticketEntity, 'ticket') && (ticketEntity.qty === 'INF' || ticketEntity.qty === Infinity);
};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/tickets-list-entity-filters.js":
/*!**************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/tickets-list-entity-filters.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _use_tickets_list_filter_state_setters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-tickets-list-filter-state-setters */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/use-tickets-list-filter-state-setters.js");
/* harmony import */ var _controls_display_tickets_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/display-tickets-control */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/controls/display-tickets-control.js");
/* harmony import */ var _controls_show_tickets_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/show-tickets-control */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/controls/show-tickets-control.js");
/* harmony import */ var _controls_tickets_chained_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/tickets-chained-button */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/controls/tickets-chained-button.js");
/* harmony import */ var _controls_tickets_sorted_by_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/tickets-sorted-by-control */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/controls/tickets-sorted-by-control.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);


/**
 * External imports
 */

/**
 * Internal dependencies
 */







/**
 * filters for controlling the display of a list of Tickets
 *
 * @param {string} listId
 * @param {boolean} isChained
 * @param {string} showTickets
 * @param {string} ticketsSortedBy
 * @param {string} displayTicketDate
 * @return {Object} EditorTicketsListView with added TicketListFilters
 */

var TicketsListEntityFilters = function TicketsListEntityFilters(_ref) {
  var listId = _ref.listId,
      isChained = _ref.isChained,
      showTickets = _ref.showTickets,
      ticketsSortedBy = _ref.ticketsSortedBy,
      displayTicketDate = _ref.displayTicketDate;

  var _useTicketsListFilter = Object(_use_tickets_list_filter_state_setters__WEBPACK_IMPORTED_MODULE_2__["default"])(listId),
      setShowTickets = _useTicketsListFilter.setShowTickets,
      setTicketsSortedBy = _useTicketsListFilter.setTicketsSortedBy,
      setDisplayTicketDate = _useTicketsListFilter.setDisplayTicketDate,
      setIsChained = _useTicketsListFilter.setIsChained;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ee-show-tickets-filter ee-filter-bar-filter"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_show_tickets_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isChained: isChained,
    showTickets: showTickets,
    setShowTickets: setShowTickets
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ee-ticket-dates-chained-filter ee-filter-bar-filter"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_tickets_chained_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isChained: isChained,
    setIsChained: setIsChained
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ee-sort-tickets-filter ee-filter-bar-filter"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_tickets_sorted_by_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ticketsSortedBy: ticketsSortedBy,
    setTicketsSortedBy: setTicketsSortedBy
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ee-display-ticket-dates-filter ee-filter-bar-filter"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_controls_display_tickets_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    displayTicketDate: displayTicketDate,
    setDisplayTicketDate: setDisplayTicketDate
  })));
};

TicketsListEntityFilters.propTypes = {
  listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isChained: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  showTickets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  ticketsSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  displayTicketDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TicketsListEntityFilters);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/tickets-list-filter-bar.js":
/*!**********************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/tickets-list-filter-bar.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tickets_list_entity_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets-list-entity-filters */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/tickets-list-entity-filters.js");


/**
 * External imports
 */



/**
 * TicketsListFilterBar
 * filters for controlling the display of a list of Event Dates
 *
 * @param {string} listId
 * @param {string} showTickets
 * @param {string} ticketsSortedBy
 * @param {string} displayTicketDate
 * @param {boolean} isChained
 * @param {string} searchText
 * @param {number} perPage
 * @param {string} view

 * @return {Object} EditorDatesListView with added DateListFilters
 */

var TicketsListFilterBar = function TicketsListFilterBar(_ref) {
  var listId = _ref.listId,
      showTickets = _ref.showTickets,
      ticketsSortedBy = _ref.ticketsSortedBy,
      displayTicketDate = _ref.displayTicketDate,
      isChained = _ref.isChained,
      searchText = _ref.searchText,
      perPage = _ref.perPage,
      view = _ref.view;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["EntityListFilterBar"], {
    listId: listId,
    view: view,
    perPage: perPage,
    searchText: searchText,
    entityFilters: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tickets_list_entity_filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
      listId: listId,
      showTickets: showTickets,
      ticketsSortedBy: ticketsSortedBy,
      displayTicketDate: displayTicketDate,
      isChained: isChained
    })
  });
};

TicketsListFilterBar.propTypes = {
  listId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  showTickets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  ticketsSortedBy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  displayTicketDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isChained: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  searchText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  perPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  view: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (TicketsListFilterBar);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/use-filtered-tickets-list.js":
/*!************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/use-filtered-tickets-list.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tickets_list_entity_filter_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets-list-entity-filter-utils */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/tickets-list-entity-filter-utils.js");
/**
 * External imports
 */




var EMPTY_ARRAY = [];

var useFilteredTicketsList = function useFilteredTicketsList(_ref) {
  var ticketEntities = _ref.ticketEntities,
      searchText = _ref.searchText,
      showTickets = _ref.showTickets,
      ticketsSortedBy = _ref.ticketsSortedBy;
  var tickets = Array.isArray(ticketEntities) ? ticketEntities : EMPTY_ARRAY;
  var searchedTickets = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["useFilterEntitiesBySearchText"])(tickets, searchText);
  var filteredTickets = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return showTickets && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(searchedTickets) ? Object(_tickets_list_entity_filter_utils__WEBPACK_IMPORTED_MODULE_3__["filterTicketEntities"])(searchedTickets, showTickets) : EMPTY_ARRAY;
  }, [searchedTickets, showTickets]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return ticketsSortedBy && filteredTickets !== EMPTY_ARRAY ? Object(_tickets_list_entity_filter_utils__WEBPACK_IMPORTED_MODULE_3__["sortTicketEntitiesList"])(filteredTickets, ticketsSortedBy) : EMPTY_ARRAY;
  }, [filteredTickets, ticketsSortedBy]);
};

/* harmony default export */ __webpack_exports__["default"] = (useFilteredTicketsList);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/use-tickets-list-filter-state-setters.js":
/*!************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/use-tickets-list-filter-state-setters.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */


var useTicketsListFilterStateSetters = function useTicketsListFilterStateSetters(listId) {
  var store = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])('eventespresso/filter-state');
  return {
    setShowTickets: function setShowTickets(showTickets) {
      return store.setFilter(listId, 'showTickets', showTickets);
    },
    setTicketsSortedBy: function setTicketsSortedBy(ticketsSortedBy) {
      return store.setFilter(listId, 'ticketsSortedBy', ticketsSortedBy);
    },
    setDisplayTicketDate: function setDisplayTicketDate(displayTicketDate) {
      return store.setFilter(listId, 'displayTicketDate', displayTicketDate);
    },
    setIsChained: function setIsChained(isChained) {
      return store.setFilter(listId, 'isChained', !!isChained);
    },
    setFilteredTickets: function setFilteredTickets(ticketIds) {
      return store.setFilter(listId, 'filteredTicketIds', ticketIds);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketsListFilterStateSetters);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/use-tickets-list-filter-state.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/filter-bar/use-tickets-list-filter-state.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

var EMPTY_ARRAY = [];
/**
 * provides state management for TicketsListFilterBar component
 *
 * @param {string} listId
 * @param {string} defaultShowTickets
 * @param {string} defaultTicketsSortedBy
 * @param {string} defaultDisplayTicketDate
 * @param {boolean} defaultIsChained
 * @return {Object} tickets list filter state getters
 */

var useTicketsListFilterState = function useTicketsListFilterState(_ref) {
  var listId = _ref.listId,
      _ref$defaultShowTicke = _ref.defaultShowTickets,
      defaultShowTickets = _ref$defaultShowTicke === void 0 ? 'on-sale-and-pending' : _ref$defaultShowTicke,
      _ref$defaultTicketsSo = _ref.defaultTicketsSortedBy,
      defaultTicketsSortedBy = _ref$defaultTicketsSo === void 0 ? 'chronologically' : _ref$defaultTicketsSo,
      _ref$defaultDisplayTi = _ref.defaultDisplayTicketDate,
      defaultDisplayTicketDate = _ref$defaultDisplayTi === void 0 ? 'start' : _ref$defaultDisplayTi,
      _ref$defaultIsChained = _ref.defaultIsChained,
      defaultIsChained = _ref$defaultIsChained === void 0 ? true : _ref$defaultIsChained;
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    var store = select('eventespresso/filter-state');
    return {
      showTickets: store.getFilter(listId, 'showTickets', defaultShowTickets),
      ticketsSortedBy: store.getFilter(listId, 'ticketsSortedBy', defaultTicketsSortedBy),
      displayTicketDate: store.getFilter(listId, 'displayTicketDate', defaultDisplayTicketDate),
      isChained: store.getFilter(listId, 'isChained', defaultIsChained),
      filteredTicketIds: store.getFilter(listId, 'filteredTicketIds', EMPTY_ARRAY)
    };
  }, [listId, defaultShowTickets, defaultTicketsSortedBy, defaultDisplayTicketDate, defaultIsChained]);
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketsListFilterState);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entities-grid-view.css":
/*!*******************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entities-grid-view.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-tickets-list-grid-view":"ee-tickets-list-grid-view","ee-editor-ticket-main":"ee-editor-ticket-main","ee-editor-ticket-details-wrapper-div":"ee-editor-ticket-details-wrapper-div","ee-editor-ticket-name-heading":"ee-editor-ticket-name-heading","ee-inline-edit-text":"ee-inline-edit-text","ee-long-title":"ee-long-title","ee-editor-ticket-desc-div":"ee-editor-ticket-desc-div","ee-ticket-desc-excerpt":"ee-ticket-desc-excerpt","ee-ticket-price":"ee-ticket-price","ee-editor-ticket-details-sold-rsrvd-qty-div":"ee-editor-ticket-details-sold-rsrvd-qty-div","ticket-registrations-label":"ticket-registrations-label","ee-editor-ticket-actions-menu":"ee-editor-ticket-actions-menu"};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entities-grid-view.js":
/*!******************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entities-grid-view.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_ticket_entity_grid_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor-ticket-entity-grid-item */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-grid-item.js");
/* harmony import */ var _use_tickets_registration_count__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../use-tickets-registration-count */ "./assets/src/editor/events/tickets/editor-ticket/use-tickets-registration-count.js");
/* harmony import */ var _editor_ticket_entities_grid_view_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor-ticket-entities-grid-view.css */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entities-grid-view.css");
/* harmony import */ var _editor_ticket_entities_grid_view_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editor_ticket_entities_grid_view_css__WEBPACK_IMPORTED_MODULE_7__);




/**
 * External imports
 */


/**
 * Internal dependencies
 */




/**
 * EditorTicketEntitiesGridView
 * Displays tickets as mobile/finger friendly blocks
 * with the most relevant info visible
 *
 * @function
 * @param {Array} entities    array of JSON objects defining the Tickets
 * @param {string} htmlClass
 * @param {mixed} otherProps
 * @return {Component}          list of rendered Tickets
 */

var EditorTicketEntitiesGridView = function EditorTicketEntitiesGridView(_ref) {
  var entities = _ref.entities,
      htmlClass = _ref.htmlClass,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["entities", "htmlClass"]);

  var classes = htmlClass ? "".concat(htmlClass, " ee-tickets-list-grid-view") : 'ee-tickets-list-list-view';
  var registrationCounts = Object(_use_tickets_registration_count__WEBPACK_IMPORTED_MODULE_6__["default"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: classes
  }, entities.map(function (ticketEntity) {
    return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(ticketEntity, 'ticket') ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_editor_ticket_entity_grid_item__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: ticketEntity.id,
      ticketEntity: ticketEntity,
      registrationCount: registrationCounts[ticketEntity.id] || 0
    }, otherProps)) : null;
  }));
};

EditorTicketEntitiesGridView.propTypes = {
  entities: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  htmlClass: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
EditorTicketEntitiesGridView.defaultProps = {
  entities: [],
  htmlClass: ''
};
/* harmony default export */ __webpack_exports__["default"] = (EditorTicketEntitiesGridView);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-details.js":
/*!**************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-details.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inline_edit_ticket_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inline-edit-ticket-name */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/inline-edit-ticket-name.js");
/* harmony import */ var _inline_edit_ticket_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline-edit-ticket-description */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/inline-edit-ticket-description.js");
/* harmony import */ var _inline_edit_ticket_price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline-edit-ticket-price */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/inline-edit-ticket-price.js");
/* harmony import */ var _ticket_details_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket-details-panel */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/ticket-details-panel.js");


/**
 * External imports
 */


/**
 * Internal dependencies
 */





/**
 * EditorTicketEntityDetails
 *
 * @function
 * @param {Object} eventTicket    model object defining the Event Ticket
 * @return {string}    ticket details
 */

var EditorTicketEntityDetails = function EditorTicketEntityDetails(_ref) {
  var ticketEntity = _ref.ticketEntity,
      registrationCount = _ref.registrationCount,
      showDesc = _ref.showDesc,
      showPrice = _ref.showPrice;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'ee-editor-ticket-details-wrapper-div'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inline_edit_ticket_name__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ticket: ticketEntity
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inline_edit_ticket_price__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ticket: ticketEntity,
    showPrice: showPrice
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inline_edit_ticket_description__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ticket: ticketEntity,
    showDesc: showDesc
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ticket_details_panel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ticket: ticketEntity,
    registrationCount: registrationCount
  }));
};

EditorTicketEntityDetails.propTypes = {
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  registrationCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  showDesc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  showPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
EditorTicketEntityDetails.defaultProps = {
  showDesc: 'excerpt',
  showPrice: true
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["ifValidTicketEntity"])(EditorTicketEntityDetails));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-grid-item.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-grid-item.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_ticket_entity_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor-ticket-entity-details */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-details.js");
/* harmony import */ var _actions_menu_editor_ticket_actions_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions-menu/editor-ticket-actions-menu */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/editor-ticket-actions-menu.js");


/**
 * External imports
 */






/**
 * Internal dependencies
 */



var getBackgroundColorClass = _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["ticketModel"].getBackgroundColorClass,
    getTicketStatusTextLabel = _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["ticketModel"].getTicketStatusTextLabel,
    status = _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["ticketModel"].status,
    TICKET_STATUS_ID = _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["ticketModel"].TICKET_STATUS_ID;
/**
 * EditorTicketEntityGridItem
 *
 * @function
 *
 * @param {Object} ticketEntity
 * @param {string} displayTicketDate
 * @param {number} registrationCount
 * @return {Object} rendered ticket
 */

var EditorTicketEntityGridItem = function EditorTicketEntityGridItem(_ref) {
  var ticketEntity = _ref.ticketEntity,
      displayTicketDate = _ref.displayTicketDate,
      registrationCount = _ref.registrationCount;
  var ticketStart = ticketEntity.startDate.toISO();
  var ticketEnd = ticketEntity.endDate.toISO();
  var ticketStatusID = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return status(ticketEntity);
  }, [ticketEntity.deleted, ticketEntity.sold, ticketEntity.qty, ticketStart, ticketEnd]);
  var label = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (displayTicketDate === 'start') {
      if (ticketStatusID === TICKET_STATUS_ID.EXPIRED) {
        return Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Sale Ended', 'event_espresso');
      }

      if (ticketStatusID === TICKET_STATUS_ID.PENDING) {
        return Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Goes On Sale', 'event_espresso');
      }

      return Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Sale Started', 'event_espresso');
    }

    if (displayTicketDate === 'end') {
      if (ticketStatusID === TICKET_STATUS_ID.EXPIRED) {
        return Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Sale Ended', 'event_espresso');
      }

      return Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Sale Ends', 'event_espresso');
    }
  }, [ticketStatusID, displayTicketDate]);
  var ticketStatus = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      key: 1,
      className: 'ee-status-tag'
    }, getTicketStatusTextLabel(ticketEntity));
  }, // getTicketStatusTextLabel() relies solely on status()
  // which is same as ticketStatusID, so we can use that as a dependency
  [ticketStatusID]);
  var sidebarColorClass = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var bgClass = getBackgroundColorClass(ticketEntity);
    return "ee-editor-ticket-calendar-sidebar ".concat(bgClass);
  }, // getBackgroundColorClass() also relies solely on status()
  // which is same as ticketStatusID, so we can use that as a dependency
  [ticketStatusID]);
  var ticketDate = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    switch (displayTicketDate) {
      case 'end':
        var end = ticketEntity.endDate.toFormat('h:mm a');
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["BiggieCalendarDate"], {
          date: ticketEntity.endDate,
          htmlClass: sidebarColorClass,
          headerText: label,
          footerText: [end, ticketStatus],
          position: "right"
        });

      case 'both':
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["CalendarDateRange"], {
          startDate: ticketEntity.startDate,
          endDate: ticketEntity.endDate,
          htmlClass: sidebarColorClass,
          headerText: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Sale Date', 'event_espresso'),
          footerText: ticketStatus,
          position: "right"
        });

      case 'start':
      default:
        var start = ticketEntity.startDate.toFormat('h:mm a');
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["BiggieCalendarDate"], {
          date: ticketEntity.startDate,
          htmlClass: sidebarColorClass,
          headerText: label,
          footerText: [start, ticketStatus],
          position: "right"
        });
    }
  }, [// using ticketStatusID as a dependency here as well
  // and not using label since it shares same dependencies already
  ticketStatusID, displayTicketDate, ticketStart, ticketEnd]);
  var dateStyleClass = displayTicketDate === 'both' ? 'ee-editor-date-range' : 'ee-editor-date-single';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["EntityPaperFrame"], {
    entityID: ticketEntity.id
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ee-editor-ticket-main ".concat(dateStyleClass)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_editor_ticket_entity_details__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ticketEntity: ticketEntity,
    registrationCount: registrationCount
  }), ticketDate), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_actions_menu_editor_ticket_actions_menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ticketEntity: ticketEntity
  }));
};

EditorTicketEntityGridItem.propTypes = {
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  displayTicketDate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  registrationCount: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};
EditorTicketEntityGridItem.defaultProps = {
  displayTicketDate: 'start'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["ifValidTicketEntity"])(EditorTicketEntityGridItem));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/index.js":
/*!***************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/index.js ***!
  \***************************************************************************/
/*! exports provided: EditorTicketEntityDetails, EditorTicketEntityGridItem, EditorTicketEntitiesGridView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_ticket_entity_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-ticket-entity-details */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-details.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityDetails", function() { return _editor_ticket_entity_details__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _editor_ticket_entity_grid_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor-ticket-entity-grid-item */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entity-grid-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityGridItem", function() { return _editor_ticket_entity_grid_item__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _editor_ticket_entities_grid_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-ticket-entities-grid-view */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/editor-ticket-entities-grid-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesGridView", function() { return _editor_ticket_entities_grid_view__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/inline-edit-ticket-description.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/inline-edit-ticket-description.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External imports
 */






var InlineEditTicketDescription = function InlineEditTicketDescription(_ref) {
  var ticket = _ref.ticket,
      showDesc = _ref.showDesc,
      wrapperElement = _ref.wrapperElement;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var WrapperElement = wrapperElement ? wrapperElement : 'div';
    var htmlClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ee-editor-ticket-desc-div', {
      'ee-ticket-desc-excerpt': showDesc === 'excerpt'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrapperElement, {
      className: htmlClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["InlineEditInput"], {
      htmlId: "ee-editor-ticket-desc-".concat(ticket.id),
      type: "textarea",
      value: ticket.description,
      onChange: function onChange(description) {
        ticket.description = description;
        return description;
      },
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ticket Description', 'event_espresso')
    }));
  }, [ticket.id, ticket.description, showDesc, wrapperElement]);
};

InlineEditTicketDescription.propTypes = {
  ticket: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  showDesc: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  wrapperElement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
InlineEditTicketDescription.defaultProps = {
  showDesc: ''
};
/* harmony default export */ __webpack_exports__["default"] = (InlineEditTicketDescription);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/inline-edit-ticket-name.js":
/*!*********************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/inline-edit-ticket-name.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External imports
 */






var InlineEditTicketName = function InlineEditTicketName(_ref) {
  var ticket = _ref.ticket,
      wrapperElement = _ref.wrapperElement;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var WrapperElement = wrapperElement ? wrapperElement : 'h1';
    var htmlClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ee-editor-ticket-name-heading', {
      'ee-long-title': ticket.name && ticket.name.length > 40
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrapperElement, {
      className: htmlClass
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["InlineEditInput"], {
      htmlId: "ee-editor-ticket-name-".concat(ticket.id),
      type: "text",
      value: ticket.name,
      onChange: function onChange(name) {
        ticket.name = name;
        return name;
      },
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ticket Name', 'event_espresso')
    }));
  }, [ticket.id, ticket.name]);
};

InlineEditTicketName.propTypes = {
  ticket: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  wrapperElement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (InlineEditTicketName);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/inline-edit-ticket-price.js":
/*!**********************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/inline-edit-ticket-price.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _price_calculator_hooks_use_ticket_base_price_calculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../price-calculator/hooks/use-ticket-base-price-calculator */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-base-price-calculator.js");
/* harmony import */ var _price_calculator_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../price-calculator/hooks */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/index.js");


/**
 * External imports
 */







/**
 * Internal dependencies
 */



/**
 * InlineEditTicketPrice inline-edit-ticket-price
 *
 * @function
 * @param {BaseEntity} ticket JSON object defining the ticket
 * @param {boolean} showPrice
 * @param {string} wrapperElement
 * @return {Object} ticket price
 */

var InlineEditTicketPrice = function InlineEditTicketPrice(_ref) {
  var ticket = _ref.ticket,
      showPrice = _ref.showPrice,
      wrapperElement = _ref.wrapperElement;

  var _useTicketPrices = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useTicketPrices"])(ticket),
      prices = _useTicketPrices.prices;

  var _usePriceTypes = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["usePriceTypes"])(),
      priceTypes = _usePriceTypes.priceTypes;

  var calculateTicketBasePrice = Object(_price_calculator_hooks_use_ticket_base_price_calculator__WEBPACK_IMPORTED_MODULE_7__["default"])(prices, priceTypes);
  var ticketPriceAmount = ticket.price.amount.toNumber();
  var basePrice = Object(_price_calculator_hooks__WEBPACK_IMPORTED_MODULE_8__["useBasePrice"])(prices);
  var updateTicketPrice = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (amount) {
    amount = Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__["parseMoneyValue"])(amount);
    ticket.price = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__["Money"](amount, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__["SiteCurrency"]);
    var basePriceValue = calculateTicketBasePrice(amount);
    basePrice.amount = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__["Money"](Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__["parseMoneyValue"])(basePriceValue), _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_6__["SiteCurrency"]);
    return amount;
  }, [calculateTicketBasePrice]);
  var WrapperElement = wrapperElement ? wrapperElement : 'h2';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return showPrice ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrapperElement, {
      className: "ee-ticket-price"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["InlineEditInput"], {
      htmlId: "ee-editor-ticket-price-".concat(ticket.id),
      type: "text",
      value: ticketPriceAmount,
      onChange: function onChange(amount) {
        return updateTicketPrice(amount);
      },
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Ticket Price', 'event_espresso'),
      valueFormatter: ticket.price.formatter.formatMoney,
      formatterSettings: ticket.price.formatter.settings
    })) : null;
  }, [ticket.id, ticket.price.formatter.settings, ticketPriceAmount, updateTicketPrice, showPrice, WrapperElement]);
};

InlineEditTicketPrice.propTypes = {
  ticket: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  showPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  wrapperElement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
InlineEditTicketPrice.defaultProps = {
  showPrice: false
};
/* harmony default export */ __webpack_exports__["default"] = (InlineEditTicketPrice);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/grid-view/ticket-details-panel.js":
/*!******************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/grid-view/ticket-details-panel.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ticket_registrations_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ticket-registrations-link */ "./assets/src/editor/events/tickets/editor-ticket/ticket-registrations-link.js");


/**
 * External imports
 */






/**
 * Internal dependencies
 */


/**
 * ticketSoldReservedCapacity
 *
 * @function
 * @param {Object} ticket model object defining the ticket
 * @return {Object}  rendered ticket details panel
 */

var TicketDetailsPanel = function TicketDetailsPanel(_ref) {
  var ticket = _ref.ticket,
      registrationCount = _ref.registrationCount;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var details = [{
      id: 'ee-ticket-sold',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('sold', 'event_espresso'),
      value: ticket.sold
    }, {
      id: 'ee-ticket-qty',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('quantity', 'event_espresso'),
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["InfinitySymbol"], {
        value: ticket.qty,
        asInt: true
      }),
      editable: {
        type: 'text',
        valueType: 'infinite',
        onChange: function onChange(qty) {
          qty = Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__["parseInfinity"])(qty, true, true);
          ticket.qty = qty;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["InfinitySymbol"], {
            value: qty,
            asInt: true
          });
        }
      }
    }, {
      id: 'ee-ticket-reserved',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('reg count', 'event_espresso'),
      value: registrationCount
    }, {
      id: 'ee-ticket-registrations',
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('reg list', 'event_espresso'),
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ticket_registrations_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ticketEntity: ticket
      })
    }];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["EntityDetailsPanel"], {
      details: details,
      htmlClass: "ee-editor-ticket-details-sold-rsrvd-qty-div"
    });
  }, [ticket.id, ticket.qty, ticket.reserved, ticket.sold]);
};

TicketDetailsPanel.propTypes = {
  ticket: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  registrationCount: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (TicketDetailsPanel);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/index.js":
/*!*****************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/index.js ***!
  \*****************************************************************/
/*! exports provided: EditorTicketEntitiesList, useTicketsForEventEditorTicketList, EditorTicketActionsMenu, EditTicketForm, EditTicketFormModal, NewTicketFormModal, useTicketEditorId, useTicketEntityFormInputPrefix, TicketsListFilterBar, useTicketsListFilterState, useTicketsListFilterStateSetters, useFilteredTicketsList, EditorTicketEntityDetails, EditorTicketEntityGridItem, EditorTicketEntitiesGridView, EditorTicketEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions-menu */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketActionsMenu", function() { return _actions_menu__WEBPACK_IMPORTED_MODULE_0__["EditorTicketActionsMenu"]; });

/* harmony import */ var _edit_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-form */ "./assets/src/editor/events/tickets/editor-ticket/edit-form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTicketForm", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_1__["EditTicketForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTicketFormModal", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_1__["EditTicketFormModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewTicketFormModal", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_1__["NewTicketFormModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketEditorId", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_1__["useTicketEditorId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketEntityFormInputPrefix", function() { return _edit_form__WEBPACK_IMPORTED_MODULE_1__["useTicketEntityFormInputPrefix"]; });

/* harmony import */ var _filter_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-bar */ "./assets/src/editor/events/tickets/editor-ticket/filter-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketsListFilterBar", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_2__["TicketsListFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketsListFilterState", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_2__["useTicketsListFilterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketsListFilterStateSetters", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_2__["useTicketsListFilterStateSetters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFilteredTicketsList", function() { return _filter_bar__WEBPACK_IMPORTED_MODULE_2__["useFilteredTicketsList"]; });

/* harmony import */ var _grid_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-view */ "./assets/src/editor/events/tickets/editor-ticket/grid-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityDetails", function() { return _grid_view__WEBPACK_IMPORTED_MODULE_3__["EditorTicketEntityDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityGridItem", function() { return _grid_view__WEBPACK_IMPORTED_MODULE_3__["EditorTicketEntityGridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesGridView", function() { return _grid_view__WEBPACK_IMPORTED_MODULE_3__["EditorTicketEntitiesGridView"]; });

/* harmony import */ var _list_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-view */ "./assets/src/editor/events/tickets/editor-ticket/list-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesListView", function() { return _list_view__WEBPACK_IMPORTED_MODULE_4__["EditorTicketEntitiesListView"]; });

/* harmony import */ var _editor_ticket_entities_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor-ticket-entities-list */ "./assets/src/editor/events/tickets/editor-ticket/editor-ticket-entities-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesList", function() { return _editor_ticket_entities_list__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _use_tickets_for_event_editor_ticket_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-tickets-for-event-editor-ticket-list */ "./assets/src/editor/events/tickets/editor-ticket/use-tickets-for-event-editor-ticket-list.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketsForEventEditorTicketList", function() { return _use_tickets_for_event_editor_ticket_list__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entities-list-view.css":
/*!*******************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entities-list-view.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-editor-ticket-actions-menu":"ee-editor-ticket-actions-menu","ee-rspnsv-table":"ee-rspnsv-table","ee-ticket-list-col-actions":"ee-ticket-list-col-actions","ee-rspnsv-table-body-td":"ee-rspnsv-table-body-td","ee-rspnsv-table-mobile-only-column-value":"ee-rspnsv-table-mobile-only-column-value"};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entities-list-view.js":
/*!******************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entities-list-view.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tickets_list_table_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tickets-list-table-header */ "./assets/src/editor/events/tickets/editor-ticket/list-view/tickets-list-table-header.js");
/* harmony import */ var _tickets_list_table_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tickets-list-table-row */ "./assets/src/editor/events/tickets/editor-ticket/list-view/tickets-list-table-row.js");
/* harmony import */ var _use_reorder_tickets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-reorder-tickets */ "./assets/src/editor/events/tickets/editor-ticket/list-view/use-reorder-tickets.js");
/* harmony import */ var _editor_ticket_entities_list_view_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor-ticket-entities-list-view.css */ "./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entities-list-view.css");
/* harmony import */ var _editor_ticket_entities_list_view_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_editor_ticket_entities_list_view_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _use_tickets_registration_count__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../use-tickets-registration-count */ "./assets/src/editor/events/tickets/editor-ticket/use-tickets-registration-count.js");



/**
 * External imports
 */






/**
 * Internal dependencies
 */






var noZebraStripe = ['row', 'stripe', 'name', 'actions'];
/**
 * EditorTicketsListView
 * Displays tickets in a standard list table like view
 *
 * @function
 * @param {Object} props
 * @member {Array} entities  filtered array of Ticket model objects
 * @member {Array} tickets   array of ALL Ticket model objects
 * @member {string} displayTicketDate
 * @member {string} htmlClass
 * @member {Object} otherProps
 * @return {Object} rendered table of Tickets
 */

var EditorTicketEntitiesListView = function EditorTicketEntitiesListView(_ref) {
  var entities = _ref.entities,
      allTickets = _ref.allTickets,
      displayTicketDate = _ref.displayTicketDate,
      setEntityIds = _ref.setEntityIds,
      setSortBy = _ref.setSortBy,
      htmlClass = _ref.htmlClass,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["entities", "allTickets", "displayTicketDate", "setEntityIds", "setSortBy", "htmlClass"]);

  var reorderTickets = Object(_use_reorder_tickets__WEBPACK_IMPORTED_MODULE_9__["default"])(entities, allTickets, setEntityIds, setSortBy);
  var registrationCounts = Object(_use_tickets_registration_count__WEBPACK_IMPORTED_MODULE_11__["default"])();
  /**
   * toggles display of start and end date columns
   * based on incoming value of showDate
   *
   * @function
   * @param {Array} columns
   * @return {Array} columns
   */

  var filterColumns = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (columns) {
    var colSwap = {
      start: 'end',
      end: 'start'
    };
    var exclude = colSwap[displayTicketDate] ? colSwap[displayTicketDate] : '';
    return Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["filterColumnsByKey"])(columns, exclude);
  }, [displayTicketDate]);
  var formRows = entities.map(
  /**
   * @function
   * @param {Object} ticketEntity
   * @return {Array} columns
   */
  function (ticketEntity) {
    var columns = Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_5__["isModelEntityOfModel"])(ticketEntity, 'ticket') ? Object(_tickets_list_table_row__WEBPACK_IMPORTED_MODULE_8__["default"])(ticketEntity, otherProps, registrationCounts[ticketEntity.id] || 0) : null;
    return filterColumns(columns);
  });
  htmlClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(htmlClass, 'ee-tickets-list-list-view');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["ResponsiveTable"], {
    headerRows: [filterColumns(Object(_tickets_list_table_header__WEBPACK_IMPORTED_MODULE_7__["default"])())],
    tableRows: Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["addZebraStripesOnMobile"])(formRows, noZebraStripe),
    metaData: {
      tableId: 'ticket-entities-list-view',
      tableCaption: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Tickets', 'event_espresso')
    },
    classes: {
      tableClass: htmlClass
    },
    onDragEnd: reorderTickets
  });
};

EditorTicketEntitiesListView.propTypes = {
  entities: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  allTickets: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  displayTicketDate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  htmlClass: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
EditorTicketEntitiesListView.defaultProps = {
  htmlClass: ''
};
/* harmony default export */ __webpack_exports__["default"] = (EditorTicketEntitiesListView);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/list-view/index.js":
/*!***************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/list-view/index.js ***!
  \***************************************************************************/
/*! exports provided: EditorTicketEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_ticket_entities_list_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-ticket-entities-list-view */ "./assets/src/editor/events/tickets/editor-ticket/list-view/editor-ticket-entities-list-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesListView", function() { return _editor_ticket_entities_list_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/list-view/tickets-list-table-header.js":
/*!***********************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/list-view/tickets-list-table-header.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External imports
 */

/**
 * TicketsListTableHeader
 * header details for the Tickets list table
 *
 * @function
 * @return {Object} of Ticket list table header details
 */

var ticketsListTableHeader = function ticketsListTableHeader() {
  return {
    type: 'row',
    primary: true,
    key: 'ticket-header-row',
    class: 'ee-editor-ticket-list-items-header-row',
    cells: [{
      key: 'stripe',
      type: 'cell',
      class: 'ee-ticket-list-col-hdr ee-entity-list-status-stripe ee-rspnsv-table-column-micro',
      value: ''
    }, {
      key: 'id',
      type: 'cell',
      class: 'ee-ticket-list-col-hdr ee-ticket-list-col-id ee-number-column ee-rspnsv-table-column-tiny',
      value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('ID', 'event_espresso')
    }, {
      key: 'name',
      type: 'cell',
      class: 'ee-ticket-list-col-hdr ee-ticket-list-col-name ee-rspnsv-table-column-bigger',
      value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Name', 'event_espresso')
    }, {
      key: 'start',
      type: 'cell',
      class: 'ee-ticket-list-col-hdr ee-ticket-list-col-name-start ee-rspnsv-table-column-default',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-long-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Goes on Sale', 'event_espresso')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-short-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('On Sale', 'event_espresso')))
    }, {
      key: 'end',
      type: 'cell',
      class: 'ee-ticket-list-col-hdr ee-ticket-list-col-end ee-rspnsv-table-column-default',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-long-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Sale Ends', 'event_espresso')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-short-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ends', 'event_espresso')))
    }, {
      key: 'price',
      type: 'cell',
      class: 'ee-ticket-list-col-hdr ee-ticket-list-col-price ee-rspnsv-table-column-tiny ee-number-column',
      value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Price', 'event_espresso')
    }, {
      key: 'capacity',
      type: 'cell',
      class: 'ee-ticket-list-col-hdr ee-ticket-list-col-qty ee-rspnsv-table-column-tiny ee-number-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-long-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Quantity', 'event_espresso')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-short-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Qty', 'event_espresso')))
    }, {
      key: 'sold',
      type: 'cell',
      class: 'ee-ticket-list-col-hdr ee-ticket-list-col-sold ee-rspnsv-table-column-tiny ee-number-column',
      value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Sold', 'event_espresso')
    }, {
      key: 'reserved',
      type: 'cell',
      class: 'ee-ticket-list-col-hdr ee-ticket-list-col-reserved ee-rspnsv-table-column-tiny ee-number-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-long-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reserved', 'event_espresso')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-short-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Rsrvd', 'event_espresso')))
    }, {
      key: 'registrations',
      type: 'cell',
      class: 'ee-ticket-list-col-hdr ee-ticket-list-col-registrations ee-rspnsv-table-column-smaller ee-centered-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-long-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Registrations', 'event_espresso')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-short-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Regs', 'event_espresso')))
    }, {
      key: 'actions',
      type: 'cell',
      class: 'ee-ticket-list-col-hdr ee-ticket-list-col-actions ee-rspnsv-table-column-big ee-centered-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: 'ee-rspnsv-table-long-label'
      }, Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Actions', 'event_espresso'))
    }]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ticketsListTableHeader);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/list-view/tickets-list-table-row.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/list-view/tickets-list-table-row.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tickets_editor_ticket_actions_menu_editor_ticket_actions_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../tickets/editor-ticket/actions-menu/editor-ticket-actions-menu */ "./assets/src/editor/events/tickets/editor-ticket/actions-menu/editor-ticket-actions-menu.js");



/**
 * External imports
 */



/**
 * Internal dependencies
 */


var getBackgroundColorClass = _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["ticketModel"].getBackgroundColorClass,
    status = _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__["ticketModel"].status;
var DATE_TIME_FORMAT = 'ddd MMM YY h:mm a';
/**
 * ticketsListTableRow
 * Displays Ticket as a table row similar to existing eventEntity editor UI
 *
 * @function
 * @param {Object} ticketEntity Event Date entity
 * @param {Object} otherProps
 * @param {number} registrationCount
 * @return {Array} row data for the provided ticket entity
 */

var ticketsListTableRow = function ticketsListTableRow(ticketEntity, otherProps) {
  var registrationCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var statusClass = status(ticketEntity);
  var bgClass = getBackgroundColorClass(ticketEntity);
  return {
    type: 'row',
    key: "ticket-row-".concat(ticketEntity.id),
    id: "ee-editor-ticket-list-view-row-".concat(ticketEntity.id),
    class: "ee-editor-ticket-list-view-row ".concat(statusClass),
    cells: [{
      key: 'stripe',
      type: 'cell',
      class: "ee-ticket-list-cell ee-entity-list-status-stripe ".concat(bgClass, " ee-rspnsv-table-column-micro"),
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: 'ee-rspnsv-table-show-on-mobile'
      }, ticketEntity.name)
    }, {
      key: 'id',
      type: 'cell',
      class: 'ee-ticket-list-cell ee-ticket-list-col-id ee-rspnsv-table-column-tiny ee-number-column',
      value: Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_3__["shortenCuid"])(ticketEntity.id)
    }, {
      key: 'name',
      type: 'cell',
      class: 'ee-ticket-list-cell ee-ticket-list-col-name ee-rspnsv-table-column-bigger ee-rspnsv-table-hide-on-mobile',
      value: ticketEntity.name
    }, {
      key: 'start',
      type: 'cell',
      class: 'ee-ticket-list-cell ee-ticket-list-col-start ee-rspnsv-table-column-default',
      value: ticketEntity.startDate.toFormat(DATE_TIME_FORMAT)
    }, {
      key: 'end',
      type: 'cell',
      class: 'ee-ticket-list-cell ee-ticket-list-col-end ee-rspnsv-table-column-default',
      value: ticketEntity.endDate.toFormat(DATE_TIME_FORMAT)
    }, {
      key: 'price',
      type: 'cell',
      class: 'ee-ticket-list-col-hdr ee-ticket-list-col-price ee-rspnsv-table-column-tiny ee-number-column',
      value: ticketEntity.price.formatter.formatMoney(ticketEntity.price.amount, ticketEntity.price.formatter.settings)
    }, {
      key: 'quantity',
      type: 'cell',
      class: 'ee-ticket-list-cell ee-ticket-list-col-capacity ee-rspnsv-table-column-tiny ee-number-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["InfinitySymbol"], {
        value: ticketEntity.qty,
        asInt: true
      })
    }, {
      key: 'sold',
      type: 'cell',
      class: 'ee-ticket-list-cell ee-ticket-list-col-sold ee-rspnsv-table-column-tiny ee-number-column',
      value: ticketEntity.sold
    }, {
      key: 'reserved',
      type: 'cell',
      class: 'ee-ticket-list-cell ee-ticket-list-col-reserved ee-rspnsv-table-column-tiny ee-number-column',
      value: ticketEntity.reserved
    }, {
      key: 'registrations',
      type: 'cell',
      class: 'ee-ticket-list-cell ee-ticket-list-col-registrations ee-rspnsv-table-column-smaller ee-centered-column',
      value: registrationCount // should be count of related registrations

    }, {
      key: 'actions',
      type: 'cell',
      class: 'ee-ticket-list-cell ee-ticket-list-col-actions ee-rspnsv-table-column-big',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_tickets_editor_ticket_actions_menu_editor_ticket_actions_menu__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        ticketEntity: ticketEntity
      }, otherProps))
    }]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ticketsListTableRow);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/list-view/use-reorder-tickets.js":
/*!*****************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/list-view/use-reorder-tickets.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


/**
 * @function
 * @param {Array} filteredTickets
 * @param {Array} allTickets
 * @param {Function} setEntityIds
 * @param {Function} setSortBy
 * @return {Function} callback for reordering ticket entity list
 */

var useReorderTickets = function useReorderTickets(filteredTickets, allTickets, setEntityIds, setSortBy) {
  var reorderEntities = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["useReorderEntities"])({
    modelName: 'ticket',
    setEntityIds: setEntityIds,
    setSortBy: setSortBy
  });
  /**
   * @function
   * @param {Object} result
   * @return {Function}
   */

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (result) {
    var destination = result.destination,
        source = result.source;

    if (!destination || source.index === destination.index && destination.droppableId === source.droppableId || destination.droppableId !== 'ticket-entities-list-view-droppable') {
      return;
    }

    reorderEntities(filteredTickets, allTickets, source.index, destination.index);
  }, [filteredTickets, allTickets, reorderEntities]);
};

/* harmony default export */ __webpack_exports__["default"] = (useReorderTickets);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js":
/*!**************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js ***!
  \**************************************************************************************/
/*! exports provided: TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX", function() { return TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX; });
var TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX = 'ee-ticket-price-calculator';

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/form-info-ticket-price-reverse-calculation.js":
/*!***********************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/form-info-ticket-price-reverse-calculation.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External imports
 */




var FormInfo = _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["twoColumnAdminFormLayout"].FormInfo;

var FormInfoTicketPriceReverseCalculation = function FormInfoTicketPriceReverseCalculation(_ref) {
  var reverseCalculate = _ref.reverseCalculate;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInfo, {
      formInfo: reverseCalculate ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('ticket base price is being calculated' + ' by reversing the price modifiers' + ' applied to the ticket total - change' + ' the calculation direction by clicking' + ' on the arrow button to the right of the' + ' ticket total field', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('ticket total is being calculated by ' + ' applying price modifiers to base price' + ' - change the calculation direction by' + ' clicking on the arrow button to the' + ' right of the ticket total field', 'event_espresso'),
      dashicon: 'info',
      dismissable: false,
      colSize: 11,
      offset: 1
    });
  }, [reverseCalculate]);
};

FormInfoTicketPriceReverseCalculation.propTypes = {
  reverseCalculate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
FormInfoTicketPriceReverseCalculation.defaultProps = {
  reverseCalculate: true
};
/* harmony default export */ __webpack_exports__["default"] = (FormInfoTicketPriceReverseCalculation);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/form-info-warning-no-ticket-prices.js":
/*!***************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/form-info-warning-no-ticket-prices.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External imports
 */





var FormInfo = _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["twoColumnAdminFormLayout"].FormInfo;

var FormInfoWarningNoTicketPrices = function FormInfoWarningNoTicketPrices(_ref) {
  var priceCount = _ref.priceCount,
      inProgress = _ref.inProgress;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return priceCount < 1 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInfo, {
      formInfo: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No ticket prices have been set! A base price is' + ' required at the very minimum. Please wait while' + ' a new base price is generated for you.', 'event_espresso'),
      formInfoVars: [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
        icon: "plus-alt",
        key: 0
      })],
      dashicon: 'warning',
      dismissable: false,
      colSize: 11,
      offset: 1
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["LoadingNotice"], {
      loading: inProgress
    })) : null;
  }, [priceCount, inProgress]);
};

FormInfoWarningNoTicketPrices.propTypes = {
  priceCount: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
  inProgress: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
FormInfoWarningNoTicketPrices.defaultProps = {
  inProgress: false
};
/* harmony default export */ __webpack_exports__["default"] = (FormInfoWarningNoTicketPrices);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/index.js":
/*!****************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/index.js ***!
  \****************************************************************************************/
/*! exports provided: useAddTicketBasePrice, useBasePrice, useCalculateTicketPrices, useGetPriceModifiersFromFormData, useTicketBasePriceCalculator, useTicketPriceCalculatorEditorId, useTicketPriceCalculatorFormData, useTicketPriceCalculatorFormDecorator, useTicketPriceCalculatorFormHeader, useTicketPriceCalculatorFormRows, useTicketPriceCalculatorFormTotalRow, useTicketTotalCalculator, useUpdatePriceModifiersFromFormData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_add_ticket_base_price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-add-ticket-base-price */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-add-ticket-base-price.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAddTicketBasePrice", function() { return _use_add_ticket_base_price__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _use_base_price__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-base-price */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-base-price.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useBasePrice", function() { return _use_base_price__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _use_calculate_ticket_prices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-calculate-ticket-prices */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-calculate-ticket-prices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCalculateTicketPrices", function() { return _use_calculate_ticket_prices__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _use_get_price_modifiers_from_form_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-get-price-modifiers-from-form-data */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-get-price-modifiers-from-form-data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useGetPriceModifiersFromFormData", function() { return _use_get_price_modifiers_from_form_data__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _use_ticket_base_price_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-ticket-base-price-calculator */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-base-price-calculator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketBasePriceCalculator", function() { return _use_ticket_base_price_calculator__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _use_ticket_price_calculator_editor_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-ticket-price-calculator-editor-id */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-editor-id.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketPriceCalculatorEditorId", function() { return _use_ticket_price_calculator_editor_id__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _use_ticket_price_calculator_form_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-ticket-price-calculator-form-data */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketPriceCalculatorFormData", function() { return _use_ticket_price_calculator_form_data__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-ticket-price-calculator-form-decorator */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-decorator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketPriceCalculatorFormDecorator", function() { return _use_ticket_price_calculator_form_decorator__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _use_ticket_price_calculator_form_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-ticket-price-calculator-form-header */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketPriceCalculatorFormHeader", function() { return _use_ticket_price_calculator_form_header__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _use_ticket_price_calculator_form_rows__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./use-ticket-price-calculator-form-rows */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-rows.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketPriceCalculatorFormRows", function() { return _use_ticket_price_calculator_form_rows__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _use_ticket_price_calculator_form_total_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./use-ticket-price-calculator-form-total-row */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-total-row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketPriceCalculatorFormTotalRow", function() { return _use_ticket_price_calculator_form_total_row__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _use_ticket_total_calculator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./use-ticket-total-calculator */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-total-calculator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketTotalCalculator", function() { return _use_ticket_total_calculator__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _use_update_price_modifiers_from_form_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./use-update-price-modifiers-from-form-data */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-update-price-modifiers-from-form-data.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUpdatePriceModifiersFromFormData", function() { return _use_update_price_modifiers_from_form_data__WEBPACK_IMPORTED_MODULE_12__["default"]; });















/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-add-ticket-base-price.js":
/*!************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-add-ticket-base-price.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External imports
 */




/**
 * creates a  base price type price entity in the data store
 * and adds relation to the supplied ticket entity
 *
 * @function
 * @param {BaseEntity} ticket
 * @return {Object} callback for creating a base price for the ticket
 */

var useAddTicketBasePrice = function useAddTicketBasePrice(ticket) {
  var addPriceModifier = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__["useAddPriceModifier"])();

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      inProgress = _useState2[0],
      setInProgress = _useState2[1];

  return {
    addTicketBasePrice: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
      if (!inProgress) {
        setInProgress(true);
        addPriceModifier(ticket, {
          PRT_ID: 1,
          PRC_name: '',
          PRC_desc: '',
          PRC_amount: new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["Money"](Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_3__["parseMoneyValue"])(ticket.price), _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["SiteCurrency"]),
          PRC_order: 1
        });
      }
    }),
    inProgress: inProgress
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useAddTicketBasePrice);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-base-price.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-base-price.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


var BASE_PRICE_TYPES = _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["priceTypeModel"].BASE_PRICE_TYPES;
/**
 * @function
 * @param {Array} prices
 * @return {Object} A price
 */

var useBasePrice = function useBasePrice(prices) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return prices.find(function (price) {
      return price.PRT_ID === BASE_PRICE_TYPES.BASE_PRICE;
    });
  }, [prices]);
};

/* harmony default export */ __webpack_exports__["default"] = (useBasePrice);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-calculate-ticket-prices.js":
/*!**************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-calculate-ticket-prices.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/index.js");
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External imports
 */


/**
 * Internal imports
 */



/**
 * callback for calculating ticket base price or total prices
 *
 * @param {BaseEntity[]} prices
 * @param {Function} setFormData
 * @return {Function} calculateTicketPrices callback
 */

var useCalculateTicketPrices = function useCalculateTicketPrices(prices, setFormData) {
  var _usePriceTypes = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__["usePriceTypes"])(),
      priceTypes = _usePriceTypes.priceTypes;

  var calculateTicketBasePrice = Object(___WEBPACK_IMPORTED_MODULE_3__["useTicketBasePriceCalculator"])(prices, priceTypes);
  var calculateTicketTotal = Object(___WEBPACK_IMPORTED_MODULE_3__["useTicketTotalCalculator"])(prices, priceTypes);
  var getPriceModifiersFromFormData = Object(___WEBPACK_IMPORTED_MODULE_3__["useGetPriceModifiersFromFormData"])(prices);
  var updatePriceModifiers = Object(___WEBPACK_IMPORTED_MODULE_3__["useUpdatePriceModifiersFromFormData"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(
  /**
   * recalculates ticket base or total price
   *
   * @param {Object} formData
   */
  function (formData) {
    if (!formData.updated) {
      return;
    }

    var priceModifiers = getPriceModifiersFromFormData(formData);
    updatePriceModifiers(priceModifiers, formData);
    var formChanges = formData.reverseCalculate ? Object(_utils___WEBPACK_IMPORTED_MODULE_4__["calculateTicketBasePriceFromTotal"])(formData, priceModifiers, calculateTicketBasePrice) : Object(_utils___WEBPACK_IMPORTED_MODULE_4__["calculateTicketTotalFromModifiers"])(formData, priceModifiers, calculateTicketTotal);
    formData = _objectSpread({}, formData, {}, formChanges);
    formData.updated = false;
    setFormData(formData);
  }, [prices]);
};

/* harmony default export */ __webpack_exports__["default"] = (useCalculateTicketPrices);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-default-price-type.js":
/*!*********************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-default-price-type.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */




var useDefaultPriceType = function useDefaultPriceType() {
  var _usePriceTypes = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__["usePriceTypes"])(),
      priceTypes = _usePriceTypes.priceTypes;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["first"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(priceTypes, function (priceType) {
      return priceType.id !== 1;
    }));
  }, [priceTypes]);
};

/* harmony default export */ __webpack_exports__["default"] = (useDefaultPriceType);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-generate-price-modifier-row.js":
/*!******************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-generate-price-modifier-row.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _price_modifier_row___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../price-modifier-row/ */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/index.js");
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/index.js");


/**
 * External imports
 */




/**
 * Internal dependencies
 */



/**
 * @param {string} ticketPrefix
 * @param {Object} values
 * @return {Object} rendered price modifier form row
 */

var useGeneratePriceModifierRow = function useGeneratePriceModifierRow(ticketPrefix, values) {
  var _usePriceTypes = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__["usePriceTypes"])(),
      priceTypes = _usePriceTypes.priceTypes;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (ticket, price, priceTypeOptions, lastRow) {
    var priceId = Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_3__["shortenCuid"])(price.id);
    var prefix = "".concat(ticketPrefix, "-price-").concat(priceId);
    var priceTypeId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["normalizeEntityId"])(values["".concat(prefix, "-type")]) || 0;
    var priceType = Object(_utils___WEBPACK_IMPORTED_MODULE_5__["getPriceType"])(priceTypeId, priceTypes);
    return {
      key: "price-row-".concat(priceId),
      type: 'row',
      class: 'ee-ticket-price-calculator-price-row',
      cells: [{
        key: 'id',
        type: 'cell',
        class: 'ee-ticket-price-calculator-price-id ee-number-column',
        value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_price_modifier_row___WEBPACK_IMPORTED_MODULE_4__["PriceIdInput"], {
          prefix: prefix,
          values: values
        })
      }, {
        key: 'type',
        type: 'cell',
        class: 'ee-ticket-price-calculator-price-type',
        value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_price_modifier_row___WEBPACK_IMPORTED_MODULE_4__["PriceTypeInput"], {
          price: price,
          prefix: prefix,
          values: values,
          basePriceType: priceType.PBT_ID,
          priceTypeOptions: priceTypeOptions
        })
      }, {
        key: 'name',
        type: 'cell',
        class: 'ee-ticket-price-calculator-price-name',
        value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_price_modifier_row___WEBPACK_IMPORTED_MODULE_4__["PriceNameInput"], {
          prefix: prefix,
          values: values,
          priceEntity: price
        })
      }, {
        key: 'desc',
        type: 'cell',
        class: 'ee-ticket-price-calculator-price-desc',
        value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_price_modifier_row___WEBPACK_IMPORTED_MODULE_4__["PriceDescriptionInput"], {
          prefix: prefix,
          values: values,
          priceEntity: price
        })
      }, {
        key: 'amount',
        type: 'cell',
        class: 'ee-ticket-price-calculator-price-amount ee-number-column',
        value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_price_modifier_row___WEBPACK_IMPORTED_MODULE_4__["PriceAmountInput"], {
          prefix: prefix,
          values: values,
          price: price,
          priceType: priceType,
          reverseCalculate: ticket.reverseCalculate
        })
      }, {
        key: 'actions',
        type: 'cell',
        class: 'ee-ticket-price-calculator-price-actions',
        value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_price_modifier_row___WEBPACK_IMPORTED_MODULE_4__["DeletePriceModifierActionButton"], {
          price: price,
          ticket: ticket,
          priceType: priceType
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_price_modifier_row___WEBPACK_IMPORTED_MODULE_4__["AddPriceModifierActionButton"], {
          ticket: ticket,
          lastRow: lastRow,
          lastPrice: price,
          priceTypes: priceTypes
        }))
      }]
    };
  }, [values, ticketPrefix]);
};

/* harmony default export */ __webpack_exports__["default"] = (useGeneratePriceModifierRow);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-get-price-modifiers-from-form-data.js":
/*!*************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-get-price-modifiers-from-form-data.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_get_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/get-price */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-price.js");
/**
 * External imports
 */


/**
 * Internal imports
 */


/**
 * @function
 * @param {BaseEntity[]} prices,
 * @return {Function} callback for retrieving price modifiers from form data
 */

var useGetPriceModifiersFromFormData = function useGetPriceModifiersFromFormData(prices) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (formData) {
    var priceIDs = formData.priceIDs ? formData.priceIDs.split(',') : [];
    return priceIDs.map(function (priceID) {
      return Object(_utils_get_price__WEBPACK_IMPORTED_MODULE_2__["default"])(priceID, prices);
    }).filter(function (price) {
      return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(price, 'price');
    });
  }, [prices]);
};

/* harmony default export */ __webpack_exports__["default"] = (useGetPriceModifiersFromFormData);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-base-price-calculator.js":
/*!*******************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-base-price-calculator.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/index.js");
/**
 * External imports
 */


/**
 * Internal dependencies
 */


/**
 * @function
 * @param {BaseEntity[]} prices,
 * @param {BaseEntity[]} priceTypes,
 * @return {Function} callback for calculating ticket base price from total
 */

var useTicketBasePriceCalculator = function useTicketBasePriceCalculator(prices, priceTypes) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(
  /**
   * @function
   * @param {number} total
   * @return {number|null}    new ticket base price reverse calculated
   *                          from supplied prices and total
   */
  function (total) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(prices)) {
      return null;
    }

    prices = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reverse"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(prices, ['order', 'id']));
    return prices.reduce(function (currentTotal, priceEntity) {
      var priceTypeEntity = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getPriceTypeForPrice"])(priceEntity, priceTypes);
      return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["basePriceCalculations"])(currentTotal, priceTypeEntity.PBT_ID, priceTypeEntity.isPercent, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getPriceAmount"])(priceEntity));
    }, total);
  }, [prices, priceTypes]);
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketBasePriceCalculator);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-editor-id.js":
/*!************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-editor-id.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */



var useTicketPriceCalculatorEditorId = function useTicketPriceCalculatorEditorId(ticket) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(ticket, 'ticket') ? "ticket-price-calculator-editor-".concat(ticket.id) : '';
  }, []);
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketPriceCalculatorEditorId);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-data.js":
/*!************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-data.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_ticket_price_calculator_form_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-ticket-price-calculator-form-schema */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-schema.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External imports
 */

/**
 * Internal imports
 */


/**
 * a hook for managing form data
 *
 * @param {BaseEntity} ticket model object
 * @param {BaseEntity[]} prices array of prices
 * @return {Function}  decorator callback for react-final-form
 */

var useTicketPriceCalculatorFormData = function useTicketPriceCalculatorFormData(ticket, prices) {
  var formData = Object(_use_ticket_price_calculator_form_schema__WEBPACK_IMPORTED_MODULE_3__["default"])(ticket, prices);

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(formData),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      currentFormData = _useState2[0],
      setFormData = _useState2[1];

  return {
    formData: _objectSpread({}, formData, {}, currentFormData, {
      priceIDs: formData.priceIDs,
      priceTypes: formData.priceTypes
    }),
    setFormData: setFormData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketPriceCalculatorFormData);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-decorator.js":
/*!*****************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-decorator.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var final_form_calculate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! final-form-calculate */ "./node_modules/final-form-calculate/dist/final-form-calculate.es.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



var DEFAULT_OBJECT = {};
/**
 * a form decorator used for capturing form data
 * so that the ticket price calculator can process changes
 *
 * @param {Function} setFormData
 * @return {Function}  decorator callback for react-final-form
 */

var useTicketPriceCalculatorFormDecorator = function useTicketPriceCalculatorFormDecorator(setFormData) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(Object(final_form_calculate__WEBPACK_IMPORTED_MODULE_0__["default"])({
    field: /^(.*?(\b-amount\b))$/,
    updates: function updates(value, name, formData, prevData) {
      if (prevData[name] !== undefined && !Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__["amountsMatch"])(formData[name], prevData[name])) {
        formData.updated = true;
        setFormData(formData);
      }

      return DEFAULT_OBJECT;
    }
  }, {
    field: /^(.*?(\b-type\b))$/,
    updates: function updates(value, name, formData, prevData) {
      if (prevData[name] !== undefined && formData[name] !== prevData[name]) {
        formData.updated = true;
        setFormData(formData);
      }

      return DEFAULT_OBJECT;
    }
  }, {
    field: 'ticketTotal',
    updates: function updates(value, name, formData, prevData) {
      if (prevData[name] !== undefined && !Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__["amountsMatch"])(formData[name], prevData[name])) {
        formData.updated = true;
        setFormData(formData);
      }

      return DEFAULT_OBJECT;
    }
  }), []);
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketPriceCalculatorFormDecorator);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-header.js":
/*!**************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-header.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



/**
 * ticketPriceCalculatorFormHeader
 *
 * @function
 * @return {Array} form header data
 */

var useTicketPriceCalculatorFormHeader = function useTicketPriceCalculatorFormHeader() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      type: 'row',
      primary: true,
      key: 'price-header-row',
      class: 'ee-ticket-price-calculator-header-row',
      cells: [{
        key: 'id',
        type: 'cell',
        class: 'ee-ticket-price-calculator-id ee-number-column',
        value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('ID', 'event_espresso')
      }, {
        key: 'type',
        type: 'cell',
        class: 'ee-ticket-price-calculator-type',
        value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Price Type', 'event_espresso')
      }, {
        key: 'name',
        type: 'cell',
        class: 'ee-ticket-price-calculator-name',
        value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Label', 'event_espresso')
      }, {
        key: 'desc',
        type: 'cell',
        class: 'ee-ticket-price-calculator-desc',
        value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description', 'event_espresso')
      }, {
        key: 'amount',
        type: 'cell',
        class: 'ee-ticket-price-calculator-amount ' + 'ee-number-column ' + Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["currencySignPositionClass"])(),
        value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Amount', 'event_espresso')
      }, {
        key: 'actions',
        type: 'cell',
        class: 'ee-ticket-price-calculator-actions',
        value: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Actions', 'event_espresso')
      }]
    };
  });
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketPriceCalculatorFormHeader);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-rows.js":
/*!************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-rows.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _use_generate_price_modifier_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-generate-price-modifier-row */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-generate-price-modifier-row.js");
/* harmony import */ var _helpers_forms_use_price_type_options_for_select_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../helpers/forms/use-price-type-options-for-select-input */ "./assets/src/editor/helpers/forms/use-price-type-options-for-select-input.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style.css */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
/**
 * External imports
 */



/**
 * Internal dependencies
 */




var BASE_PRICE_TYPES = _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["priceTypeModel"].BASE_PRICE_TYPES;
/**
 * @function
 * @param {BaseEntity} ticket
 * @param {string} ticketPrefix
 * @param {BaseEntity[]} prices
 * @param {Object} values form data
 * @return {Array} array of useGeneratePriceModifierRow objects
 */

var useTicketPriceCalculatorFormRows = function useTicketPriceCalculatorFormRows(ticket, ticketPrefix, prices, values) {
  var formRows = [];

  var _usePriceTypeOptionsF = Object(_helpers_forms_use_price_type_options_for_select_input__WEBPACK_IMPORTED_MODULE_4__["default"])([BASE_PRICE_TYPES.BASE_PRICE]),
      priceTypeOptions = _usePriceTypeOptionsF.priceTypeOptions,
      filteredPriceTypeOptions = _usePriceTypeOptionsF.filteredPriceTypeOptions;

  var priceCount = prices.length;
  var priceModifierRow = Object(_use_generate_price_modifier_row__WEBPACK_IMPORTED_MODULE_3__["default"])(ticketPrefix, values);

  if (priceCount > 0) {
    var sortedPrices = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(prices, ['order', 'name']);

    for (var i = 0; i < priceCount; i++) {
      var price = sortedPrices[i];

      if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(price, 'price')) {
        // we don't want "Base Price" to be an option for
        // price modifiers because THERE CAN ONLY BE ONE!!!
        var options = price.PRT_ID === BASE_PRICE_TYPES.BASE_PRICE ? priceTypeOptions : filteredPriceTypeOptions;
        var lastRow = i === priceCount - 1;
        formRows.push(priceModifierRow(ticket, price, options, lastRow));
      }
    }
  }

  return formRows;
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketPriceCalculatorFormRows);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-schema.js":
/*!**************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-schema.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js");
/**
 * External imports
 */






/**
 * Internal imports
 */


/**
 * @function
 * @param {BaseEntity} money
 * @param {number|null} amount used if incoming money is not valid
 * @return {number|null} amount
 */

var getMoneyAmount = function getMoneyAmount(money) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (money instanceof _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["Money"]) {
    amount = money.formatter.formatNumber(money.amount.toNumber());
  }

  return amount;
};
/**
 * @function
 * @param {Object} formData
 * @param {Object} ticket
 * @return {Object} form data
 */


var buildTicketData = function buildTicketData(formData, ticket) {
  formData.ticketID = ticket.id;
  formData.ticketIsTaxable = ticket.taxable;
  formData.ticketTotal = getMoneyAmount(ticket.price, null);
  formData.reverseCalculate = !!ticket.reverseCalculate;
  return formData;
};
/**
 * @function
 * @param {Object} formData
 * @param {Object} ticket
 * @param {Array} prices
 * @return {Object} form data
 */


var buildPricesData = function buildPricesData(formData, ticket, prices) {
  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(prices) || prices.length === 0) {
    return {};
  }

  var prefix = _constants__WEBPACK_IMPORTED_MODULE_6__["TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX"];
  prefix += '-ticket-' + ticket.id + '-price';
  var priceIDs = [];
  var priceTypes = [];
  prices.forEach(function (price) {
    if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(price, 'price')) {
      var priceId = Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__["shortenCuid"])(price.id);
      priceIDs.push(priceId);
      priceTypes.push(price.PRT_ID);
      var pricePrefix = "".concat(prefix, "-").concat(priceId);
      formData["".concat(pricePrefix, "-id")] = priceId;
      formData["".concat(pricePrefix, "-type")] = parseInt(price.PRT_ID, 10);
      formData["".concat(pricePrefix, "-name")] = price.name || '';
      formData["".concat(pricePrefix, "-desc")] = price.desc || '';
      formData["".concat(pricePrefix, "-amount")] = getMoneyAmount(price.amount);
      formData["".concat(pricePrefix, "-order")] = parseInt(price.order, 10);
    }
  });
  formData.priceIDs = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(priceIDs) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(priceIDs) ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(priceIDs).join() : '';
  formData.priceTypes = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(priceTypes) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(priceTypes) ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniq"])(priceTypes).join() : '';
  return formData;
};
/**
 * @function
 * @param {Object} ticket
 * @param {Array} prices
 * @return {Object} form data
 */


var useTicketPriceCalculatorFormSchema = function useTicketPriceCalculatorFormSchema(ticket, prices) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(ticket, 'ticket')) {
      return {};
    }

    var formData = {};
    formData = buildTicketData(formData, ticket);
    formData = buildPricesData(formData, ticket, prices);
    return formData;
  }, [ticket.id, ticket.taxable, ticket.price.amount, ticket.reverseCalculate, prices]);
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketPriceCalculatorFormSchema);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-total-row.js":
/*!*****************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-total-row.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__);


/**
 * External imports
 */






var FormInput = _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["twoColumnAdminFormLayout"].FormInput,
    InputLabel = _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["twoColumnAdminFormLayout"].InputLabel;
/**
 * @function
 * @param {Object} ticket
 * @param {string} ticketPrefix
 * @param {Object} values form data
 * @param {Function} updateField
 * @return {Object} rendered form footer
 */

var useTicketPriceCalculatorFormTotalRow = function useTicketPriceCalculatorFormTotalRow(ticket, ticketPrefix, values, updateField) {
  var calcDirIcon = ticket.reverseCalculate ? 'up' : 'down';
  var calcDirText = ticket.reverseCalculate ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('reverse calculate base price from total', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('calculate total from base price', 'event_espresso');
  return {
    key: 'price-total-row',
    type: 'row',
    class: 'ee-ticket-price-calculator-total-row',
    cells: [{
      key: 'id',
      type: 'cell',
      class: '',
      value: ''
    }, {
      key: 'type',
      type: 'cell',
      class: '',
      value: ''
    }, {
      key: 'name',
      type: 'cell',
      class: '',
      value: ''
    }, {
      key: 'desc',
      type: 'cell',
      class: 'ee-ticket-price-calculator-total-label' + ' ee-number-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputLabel, {
        label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Total', 'event_espresso'),
        htmlFor: "".concat(ticketPrefix, "-total")
      })
    }, {
      key: 'amount',
      type: 'cell',
      class: 'ee-ticket-price-calculator-total ee-number-column',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["CurrencySign"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInput, {
        key: "total",
        type: "text",
        name: "ticketTotal",
        htmlId: "ticketTotal",
        htmlClass: Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["usePriceTypeHtmlClass"])(),
        value: ticket.price.formatter.formatNumber(Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__["parseMoneyValue"])(values.ticketTotal)),
        changeListener: function changeListener(value, prev) {
          if (!Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__["amountsMatch"])(value, prev)) {
            ticket.price = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["Money"](Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__["parseMoneyValue"])(value), _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["SiteCurrency"]);
          }
        },
        disabled: ticket.reverseCalculate === false,
        format: function format(value) {
          return ticket.price.formatter.formatNumber(Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_5__["parseMoneyValue"])(value));
        },
        formatOnBlur: true
      }))
    }, {
      key: 'actions',
      type: 'cell',
      class: 'ee-ticket-price-calculator-total-actions',
      value: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        text: calcDirText,
        position: 'top left'
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInput, {
        type: "iconButton",
        name: "reverseCalculate",
        htmlId: "reverseCalculate",
        value: !!ticket.reverseCalculate,
        icon: "arrow-".concat(calcDirIcon, "-alt2"),
        helpText: calcDirText,
        onClick: function onClick() {
          var value = !ticket.reverseCalculate;
          ticket.reverseCalculate = value;
          updateField('reverseCalculate', value);
        }
      }))
    }]
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketPriceCalculatorFormTotalRow);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-total-calculator.js":
/*!**************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-total-calculator.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/index.js");
/**
 * External imports
 */


/**
 * Internal dependencies
 */


/**
 * @function
 * @param {BaseEntity[]} prices,
 * @param {BaseEntity[]} priceTypes,
 * @return {Function} callback for calculating ticket total from base price
 */

var useTicketTotalCalculator = function useTicketTotalCalculator(prices, priceTypes) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(
  /**
   * @function
   * @param {number} initial
   * @return {number|null} new ticket total as calculated by supplied prices
   */
  function () {
    var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(prices)) {
      return null;
    }

    prices = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["sortBy"])(prices, ['order', 'id']);
    return prices.reduce(function (newTotal, priceEntity) {
      var priceTypeEntity = Object(_utils___WEBPACK_IMPORTED_MODULE_2__["getPriceTypeForPrice"])(priceEntity, priceTypes);
      return Object(_utils___WEBPACK_IMPORTED_MODULE_2__["ticketTotalCalculations"])(newTotal, priceTypeEntity.PBT_ID, priceTypeEntity.isPercent, Object(_utils___WEBPACK_IMPORTED_MODULE_2__["getPriceAmount"])(priceEntity));
    }, initial);
  }, [prices, priceTypes]);
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketTotalCalculator);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-update-price-modifiers-from-form-data.js":
/*!****************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-update-price-modifiers-from-form-data.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js");
/**
 * External imports
 */




/**
 * Internal imports
 */


/**
 * Updates price modifiers based on the supplied form data.
 * This should mostly be unnecessary as the form inputs should update
 * the price modifiers directly upon change. So this is merely some added
 * redundancy to ensure that price modifiers are in sync with form data.
 *
 * @function
 * @return {Function} callback for updating price modifiers from form data
 */

var useUpdatePriceModifiersFromFormData = function useUpdatePriceModifiersFromFormData() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(
  /**
   * @function
   * @param {BaseEntity[]} priceModifiers,
   * @param {Object} formData,
   */
  function (priceModifiers, formData) {
    var ticketId = formData.ticketID ? formData.ticketID : null;

    if (!ticketId) {
      return;
    }

    var basePrefix = _constants__WEBPACK_IMPORTED_MODULE_4__["TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX"] + "-ticket-".concat(ticketId, "-price");
    priceModifiers.forEach(function (price) {
      if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(price, 'price')) {
        return;
      }

      var key = "".concat(basePrefix, "-").concat(price.id, "-amount");
      var newPrice = formData[key] ? Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_1__["parseMoneyValue"])(formData[key]) : null;

      if (newPrice !== null && newPrice !== price.amount.toNumber()) {
        price.amount = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_3__["Money"](newPrice, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_3__["SiteCurrency"]);
      }
    });
  }, []);
};

/* harmony default export */ __webpack_exports__["default"] = (useUpdatePriceModifiersFromFormData);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/index.js":
/*!**********************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/index.js ***!
  \**********************************************************************************/
/*! exports provided: TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX, TicketPriceCalculatorForm, useTicketPriceCalculatorFormSchema, TicketPriceCalculatorFormModal, TicketPriceCalculatorMenuItem, FormInfoTicketPriceReverseCalculation, FormInfoWarningNoTicketPrices, TicketPriceCalculatorFormHiddenInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX"]; });

/* harmony import */ var _ticket_price_calculator_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-price-calculator-form */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketPriceCalculatorForm", function() { return _ticket_price_calculator_form__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _hooks_use_ticket_price_calculator_form_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/use-ticket-price-calculator-form-schema */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-ticket-price-calculator-form-schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketPriceCalculatorFormSchema", function() { return _hooks_use_ticket_price_calculator_form_schema__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ticket_price_calculator_form_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-price-calculator-form-modal */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form-modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketPriceCalculatorFormModal", function() { return _ticket_price_calculator_form_modal__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ticket_price_calculator_menu_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticket-price-calculator-menu-item */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-menu-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketPriceCalculatorMenuItem", function() { return _ticket_price_calculator_menu_item__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _form_info_ticket_price_reverse_calculation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-info-ticket-price-reverse-calculation */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/form-info-ticket-price-reverse-calculation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormInfoTicketPriceReverseCalculation", function() { return _form_info_ticket_price_reverse_calculation__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _form_info_warning_no_ticket_prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-info-warning-no-ticket-prices */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/form-info-warning-no-ticket-prices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormInfoWarningNoTicketPrices", function() { return _form_info_warning_no_ticket_prices__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ticket_price_calculator_form_hidden_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ticket-price-calculator-form-hidden-inputs */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form-hidden-inputs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketPriceCalculatorFormHiddenInputs", function() { return _ticket_price_calculator_form_hidden_inputs__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/add-price-modifier-action-button.js":
/*!********************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/add-price-modifier-action-button.js ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/index.js");


/**
 * External imports
 */







var INITIAL_ORDER = 99;

var AddPriceModifierActionButton = function AddPriceModifierActionButton(_ref) {
  var ticket = _ref.ticket,
      lastRow = _ref.lastRow,
      lastPrice = _ref.lastPrice,
      priceTypes = _ref.priceTypes;
  var addPriceModifier = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useAddPriceModifier"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return lastRow ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      position: 'top left',
      text: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('click to add price modifier', 'event_espresso')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      "aria-label": Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('click to add price modifier', 'event_espresso'),
      icon: "plus-alt",
      onClick: function onClick() {
        // First let's change the initial order for
        // the last price to match its price type order.
        // Then the price order can be changed manually
        // if the user doesn't like the set default order
        if (parseInt(lastPrice.order, 10) === INITIAL_ORDER) {
          var priceType = Object(_utils___WEBPACK_IMPORTED_MODULE_6__["getPriceType"])(lastPrice.PRT_ID, priceTypes);
          lastPrice.order = priceType.order;
        }

        addPriceModifier(ticket, {
          PRT_ID: 0,
          PRC_name: '',
          PRC_desc: '',
          PRC_amount: new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["Money"](0, _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_4__["SiteCurrency"]),
          PRC_order: INITIAL_ORDER
        });
      },
      className: 'ee-add-price-modifier-btn'
    })) : null;
  }, [ticket.id, lastRow]);
};

AddPriceModifierActionButton.propTypes = {
  ticket: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  lastRow: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  lastPrice: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  priceTypes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object).isRequired
};
AddPriceModifierActionButton.defaultProps = {
  lastRow: false
};
/* harmony default export */ __webpack_exports__["default"] = (AddPriceModifierActionButton);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/delete-price-modifier-action-button.js":
/*!***********************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/delete-price-modifier-action-button.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);


/**
 * External imports
 */






var BASE_PRICE_TYPES = _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["priceTypeModel"].BASE_PRICE_TYPES;

var DeletePriceModifierActionButton = function DeletePriceModifierActionButton(_ref) {
  var price = _ref.price,
      priceType = _ref.priceType,
      ticket = _ref.ticket;
  var trashPriceModifier = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_2__["useTrashPriceModifier"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return priceType.PRT_ID !== BASE_PRICE_TYPES.BASE_PRICE ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
      position: 'top left',
      text: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('click to delete price modifier', 'event_espresso')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      "aria-label": Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('click to delete price modifier', 'event_espresso'),
      icon: "trash",
      onClick: function onClick() {
        return trashPriceModifier(price, ticket);
      }
    })) : null;
  }, [ticket.id, price.id, priceType.PRT_ID]);
};

DeletePriceModifierActionButton.propTypes = {
  price: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  priceType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  ticket: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DeletePriceModifierActionButton);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/index.js":
/*!*****************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: AddPriceModifierActionButton, DeletePriceModifierActionButton, PriceAmountInput, PriceDescriptionInput, PriceIdInput, PriceNameInput, PriceTypeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_price_modifier_action_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-price-modifier-action-button */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/add-price-modifier-action-button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPriceModifierActionButton", function() { return _add_price_modifier_action_button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _delete_price_modifier_action_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-price-modifier-action-button */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/delete-price-modifier-action-button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePriceModifierActionButton", function() { return _delete_price_modifier_action_button__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _price_amount_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./price-amount-input */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-amount-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PriceAmountInput", function() { return _price_amount_input__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _price_description_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./price-description-input */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-description-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PriceDescriptionInput", function() { return _price_description_input__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _price_id_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./price-id-input */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-id-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PriceIdInput", function() { return _price_id_input__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _price_name_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./price-name-input */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-name-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PriceNameInput", function() { return _price_name_input__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _price_type_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./price-type-input */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-type-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PriceTypeInput", function() { return _price_type_input__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-amount-input.js":
/*!******************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-amount-input.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);


/**
 * External imports
 */







var BASE_PRICE_TYPES = _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["priceTypeModel"].BASE_PRICE_TYPES;
var FormInput = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormInput,
    InputLabel = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].InputLabel;
/**
 * @param {string} prefix
 * @param {Object} values
 * @param {BaseEntity} price
 * @param {BaseEntity} priceType
 * @param {boolean} reverseCalculate
 * @return {Object} rendered text input and label for setting price amount
 */

var PriceAmountInput = function PriceAmountInput(_ref) {
  var prefix = _ref.prefix,
      values = _ref.values,
      price = _ref.price,
      priceType = _ref.priceType,
      reverseCalculate = _ref.reverseCalculate;
  var key = "".concat(prefix, "-amount");
  var priceTypeHtmlClass = Object(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["usePriceTypeHtmlClass"])(priceType);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputLabel, {
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Amount', 'event_espresso'),
      htmlFor: key,
      htmlClass: "ee-hidden-label"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["PriceTypeSign"], {
      priceType: priceType
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInput, {
      key: "price",
      type: "text",
      name: key,
      htmlId: key,
      htmlClass: priceTypeHtmlClass,
      value: price.amount.formatter.formatNumber(Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__["parseMoneyValue"])(values[key] || 0)),
      changeListener: function changeListener(value, prev) {
        if (!Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__["amountsMatch"])(value, prev)) {
          price.amount = new _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_5__["Money"](Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__["parseMoneyValue"])(value), _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_5__["SiteCurrency"]);
        }
      },
      disabled: price.PRT_ID === BASE_PRICE_TYPES.BASE_PRICE && reverseCalculate === true,
      format: function format(value) {
        return price.amount.formatter.formatNumber(Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_2__["parseMoneyValue"])(value));
      },
      formatOnBlur: true
    }));
  }, [prefix, values[key], price.PRT_ID, price.amount.toNumber(), priceType.isPercent, reverseCalculate]);
};

PriceAmountInput.propTypes = {
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  price: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  priceType: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  reverseCalculate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (PriceAmountInput);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-description-input.js":
/*!***********************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-description-input.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External imports
 */



var FormInput = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormInput,
    InputLabel = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].InputLabel;


var PriceDescriptionInput = function PriceDescriptionInput(_ref) {
  var prefix = _ref.prefix,
      values = _ref.values,
      priceEntity = _ref.priceEntity;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputLabel, {
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description', 'event_espresso'),
      htmlFor: "".concat(prefix, "-desc"),
      htmlClass: "ee-hidden-label"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInput, {
      key: "desc",
      type: "textarea",
      name: "".concat(prefix, "-desc"),
      htmlId: "".concat(prefix, "-desc"),
      value: values["".concat(prefix, "-desc")] || '',
      changeListener: function changeListener(value) {
        return priceEntity.desc = value;
      }
    }));
  }, [prefix, values["".concat(prefix, "-desc")], priceEntity.desc]);
};

PriceDescriptionInput.propTypes = {
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  priceEntity: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PriceDescriptionInput);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-id-input.js":
/*!**************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-id-input.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External imports
 */




var FormInput = _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["twoColumnAdminFormLayout"].FormInput,
    InputLabel = _eventespresso_components__WEBPACK_IMPORTED_MODULE_2__["twoColumnAdminFormLayout"].InputLabel;
/**
 * @param {string} prefix
 * @param {Object} values
 * @return {Function} rendered text input and label for viewing price ID
 */

var PriceIdInput = function PriceIdInput(_ref) {
  var prefix = _ref.prefix,
      values = _ref.values;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputLabel, {
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Price ID', 'event_espresso'),
      htmlFor: "".concat(prefix, "-id"),
      htmlClass: "ee-hidden-label"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInput, {
      key: "id",
      type: "text",
      name: "".concat(prefix, "-id"),
      htmlId: "".concat(prefix, "-id"),
      value: values["".concat(prefix, "-id")],
      disabled: true
    }));
  }, [prefix, values["".concat(prefix, "-id")]]);
};

PriceIdInput.propTypes = {
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PriceIdInput);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-name-input.js":
/*!****************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-name-input.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External imports
 */



var FormInput = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormInput,
    InputLabel = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].InputLabel;

/**
 * @param {string} prefix
 * @param {Object} values
 * @param {BaseEntity} priceEntity
 * @return {Function} rendered text input and label for setting price name
 */

var PriceNameInput = function PriceNameInput(_ref) {
  var prefix = _ref.prefix,
      values = _ref.values,
      priceEntity = _ref.priceEntity;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputLabel, {
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Label', 'event_espresso'),
      htmlFor: "".concat(prefix, "-name"),
      htmlClass: "ee-hidden-label"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInput, {
      key: "name",
      type: "text",
      name: "".concat(prefix, "-name"),
      htmlId: "".concat(prefix, "-name"),
      value: values["".concat(prefix, "-name")] || '',
      changeListener: function changeListener(value) {
        return priceEntity.name = value;
      }
    }));
  }, [prefix, values["".concat(prefix, "-name")], priceEntity.name]);
};

PriceNameInput.propTypes = {
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  priceEntity: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PriceNameInput);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-type-input.js":
/*!****************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/price-modifier-row/price-type-input.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_use_default_price_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/use-default-price-type */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/use-default-price-type.js");


/**
 * External imports
 */







var BASE_PRICE_TYPES = _eventespresso_model__WEBPACK_IMPORTED_MODULE_4__["priceTypeModel"].BASE_PRICE_TYPES;
var FormInput = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormInput,
    InputLabel = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].InputLabel;
/**
 * @param {BaseEntity} price
 * @param {string} prefix
 * @param {Object} values
 * @param {number} basePriceType
 * @param {Array} priceTypeOptions
 * @return {Object} rendered select input and label for setting price type
 */

var PriceTypeInput = function PriceTypeInput(_ref) {
  var price = _ref.price,
      prefix = _ref.prefix,
      values = _ref.values,
      basePriceType = _ref.basePriceType,
      priceTypeOptions = _ref.priceTypeOptions;
  var key = "".concat(prefix, "-type");
  var defaultPriceType = Object(_hooks_use_default_price_type__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var isBasePriceType = basePriceType === BASE_PRICE_TYPES.BASE_PRICE;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputLabel, {
      label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Price Type', 'event_espresso'),
      htmlFor: key,
      htmlClass: "ee-hidden-label"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInput, {
      key: "type",
      type: "select",
      htmlClass: isBasePriceType && 'ee-base-price-type',
      name: key,
      value: Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(values[key]) || 0,
      options: priceTypeOptions,
      htmlId: key,
      changeListener: function changeListener(value, prev) {
        if (value !== prev) {
          price.PRT_ID = value ? Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(value) : defaultPriceType.id;
        }
      },
      disabled: isBasePriceType
    }));
  }, [prefix, price.id, price.order, price.PRT_ID, basePriceType, priceTypeOptions, values[key]]);
};

PriceTypeInput.propTypes = {
  price: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  priceTypeOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  basePriceType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired
};
PriceTypeInput.defaultProps = {
  priceTypeOptions: []
};
/* harmony default export */ __webpack_exports__["default"] = (PriceTypeInput);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/style.css":
/*!***********************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/style.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"ee-ticket-price-calculator":"ee-ticket-price-calculator","ee-col-0":"ee-col-0","ee-col-1":"ee-col-1","ee-col-2":"ee-col-2","ee-col-3":"ee-col-3","ee-col-4":"ee-col-4","ee-col-5":"ee-col-5","ee-rspnsv-table-body-td":"ee-rspnsv-table-body-td","ee-ticket-price-calculator-price-actions":"ee-ticket-price-calculator-price-actions","components-icon-button":"components-icon-button","ee-ticket-price-calculator-amount":"ee-ticket-price-calculator-amount","ee-sign-before":"ee-sign-before","ee-sign-after":"ee-sign-after","ee-ticket-price-calculator-total-label":"ee-ticket-price-calculator-total-label","col-form-label":"col-form-label","ee-rspnsv-table-footer":"ee-rspnsv-table-footer","ee-ticket-price-calculator-total-row":"ee-ticket-price-calculator-total-row","ee-ticket-price-calculator-total":"ee-ticket-price-calculator-total","ee-currency-sign":"ee-currency-sign","ee-money-field":"ee-money-field","ee-percent-field":"ee-percent-field","ee-curSign-2":"ee-curSign-2","ee-curSign-3":"ee-curSign-3","ee-curSign-4":"ee-curSign-4","ee-percent-sign":"ee-percent-sign","ee-add-price-modifier-btn":"ee-add-price-modifier-btn","ee-tpc-new-modifier-update":"ee-tpc-new-modifier-update","shake":"shake","ee-rspnsv-table":"ee-rspnsv-table","ee-rspnsv-table-body":"ee-rspnsv-table-body","ee-ticket-price-calculator-price-row":"ee-ticket-price-calculator-price-row","ee-rspnsv-table-mobile-only-column-header":"ee-rspnsv-table-mobile-only-column-header","ee-rspnsv-table-mobile-only-column-value":"ee-rspnsv-table-mobile-only-column-value","ee-number-column":"ee-number-column","ee-ticket-price-calculator-add-price-id":"ee-ticket-price-calculator-add-price-id","ee-ticket-price-calculator-add-price-actions":"ee-ticket-price-calculator-add-price-actions","ee-ticket-price-calculator-add-price-row":"ee-ticket-price-calculator-add-price-row","ee-rspnsv-table-body-row":"ee-rspnsv-table-body-row","ee-rspnsv-table-footer-row":"ee-rspnsv-table-footer-row","ee-ticket-price-calculator-total-actions":"ee-ticket-price-calculator-total-actions","ee-col-form-label":"ee-col-form-label"};

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form-hidden-inputs.js":
/*!***********************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form-hidden-inputs.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External imports
 */



var FormInput = _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["twoColumnAdminFormLayout"].FormInput;
/**
 * @function
 * @param {Object} values form data
 * @return {Object} hidden inputs
 */

var TicketPriceCalculatorFormHiddenInputs = function TicketPriceCalculatorFormHiddenInputs(_ref) {
  var values = _ref.values;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInput, {
      type: "hidden",
      key: "ticketID",
      name: "ticketID",
      htmlId: "ee-ticketID",
      value: values.ticketID
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInput, {
      type: "hidden",
      key: "priceIDs",
      name: "priceIDs",
      htmlId: "ee-priceIDs",
      value: values.priceIDs
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormInput, {
      type: "hidden",
      key: "priceTypes",
      name: "priceTypes",
      htmlId: "ee-priceTypes",
      value: values.priceTypes
    }));
  }, [values.ticketID, values.priceIDs, values.priceTypes]);
};

TicketPriceCalculatorFormHiddenInputs.propTypes = {
  values: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TicketPriceCalculatorFormHiddenInputs);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form-modal.js":
/*!***************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form-modal.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/index.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External imports
 */





/**
 * Internal dependencies
 */



/**
 * Enhanced TicketPriceCalculatorForm with EditorModal and FormHandler
 *
 * @param {BaseEntity} ticket
 * @param {BaseEntity[]} prices
 * @param {boolean} pricesLoaded
 * @param {Object} otherProps
 * @return {Object} rendered form modal
 */

var TicketPriceCalculatorFormModal = function TicketPriceCalculatorFormModal(_ref) {
  var ticket = _ref.ticketEntity,
      prices = _ref.prices,
      pricesLoaded = _ref.pricesLoaded,
      otherProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref, ["ticketEntity", "prices", "pricesLoaded"]);

  var priceCount = prices.length;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      prevPriceCount = _useState2[0],
      setPrevPriceCount = _useState2[1];

  var editorId = Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["useTicketPriceCalculatorEditorId"])(ticket);
  var isEditorOpen = Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__["useIsEditorOpen"])(editorId);

  var _useTicketPriceCalcul = Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["useTicketPriceCalculatorFormData"])(ticket, prices),
      formData = _useTicketPriceCalcul.formData,
      setFormData = _useTicketPriceCalcul.setFormData;

  var calculateTicketPrices = Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["useCalculateTicketPrices"])(prices, setFormData);
  var formDecorator = Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["useTicketPriceCalculatorFormDecorator"])(setFormData);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var data = _objectSpread({}, formData, {
      updated: priceCount !== prevPriceCount ? true : formData.updated
    });

    if (pricesLoaded && data.updated) {
      calculateTicketPrices(data);
      setPrevPriceCount(priceCount);
    }
  }, [calculateTicketPrices, formData, prices]);
  return editorId && pricesLoaded && isEditorOpen ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__["EditorModal"], {
    editorId: editorId,
    editorTitle: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Ticket Price Calculator', 'event_espresso'),
    editorHtmlClass: 'ee-ticket-price-calculator-modal',
    editorCloseButtonLabel: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('close ticket price calculator', 'event_espresso')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_7__["FormHandler"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    ticketEntity: ticket,
    priceEntities: prices,
    FormComponent: ___WEBPACK_IMPORTED_MODULE_9__["TicketPriceCalculatorForm"],
    decorators: formDecorator,
    formData: formData,
    loading: !pricesLoaded,
    loadingNotice: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6__["sprintf"])(Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_6__["_x"])('loading ticket prices%s', 'loading ticket prices...', 'event_espresso'), String.fromCharCode(8230))
  }, otherProps))) : null;
};

TicketPriceCalculatorFormModal.propTypes = {
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  prices: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  pricesLoaded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_5__["ifValidTicketEntity"])(TicketPriceCalculatorFormModal));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form.js":
/*!*********************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-form.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);


/**
 * External imports
 */






/**
 * Internal dependencies
 */





var FormSection = _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["twoColumnAdminFormLayout"].FormSection,
    FormWrapper = _eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["twoColumnAdminFormLayout"].FormWrapper;
/**
 * TicketPriceCalculatorForm
 *
 * @function
 * @param {BaseEntity} ticketEntity ticket model object
 * @param {BaseEntity[]} priceEntities array of prices
 * @param {Function} updateField
 * @param {Object} initialValues
 * @param {Object} currentValues
 * @return {Object} rendered form
 */

var TicketPriceCalculatorForm = function TicketPriceCalculatorForm(_ref) {
  var ticketEntity = _ref.ticketEntity,
      priceEntities = _ref.priceEntities,
      updateField = _ref.updateField,
      initialValues = _ref.initialValues,
      currentValues = _ref.currentValues;

  var _useAddTicketBasePric = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useAddTicketBasePrice"])(ticketEntity),
      addTicketBasePrice = _useAddTicketBasePric.addTicketBasePrice,
      inProgress = _useAddTicketBasePric.inProgress;

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(priceEntities) && !inProgress) {
      addTicketBasePrice();
    }
  }, [priceEntities]);
  var ticketPrefix = _constants__WEBPACK_IMPORTED_MODULE_8__["TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX"];
  ticketPrefix += '-ticket-' + ticketEntity.id;
  var values = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(currentValues) ? initialValues : currentValues;
  var headerRows = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useTicketPriceCalculatorFormHeader"])();
  var totalRow = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useTicketPriceCalculatorFormTotalRow"])(ticketEntity, ticketPrefix, values, updateField);
  var formRows = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useTicketPriceCalculatorFormRows"])(ticketEntity, ticketPrefix, priceEntities, values);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormWrapper, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormSection, {
    htmlId: "".concat(ticketPrefix, "-form-section"),
    htmlClass: "ee-ticket-price-calculator-form-section"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(___WEBPACK_IMPORTED_MODULE_6__["FormInfoWarningNoTicketPrices"], {
    priceCount: priceEntities.length,
    inProgress: inProgress
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_3__["ResponsiveTable"], {
    headerRows: [headerRows],
    tableRows: formRows,
    footerRows: [totalRow],
    metaData: {
      tableId: ticketPrefix,
      tableCaption: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ticket Price Modifiers', 'event_espresso')
    },
    classes: {
      tableClass: 'ee-ticket-price-calculator'
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(___WEBPACK_IMPORTED_MODULE_6__["TicketPriceCalculatorFormHiddenInputs"], {
    values: values
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormSection, {
    htmlClass: "ee-ticket-price-calculator-form-info"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(___WEBPACK_IMPORTED_MODULE_6__["FormInfoTicketPriceReverseCalculation"], {
    reverseCalculate: ticketEntity.reverseCalculate
  })));
};

TicketPriceCalculatorForm.propTypes = {
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  priceEntities: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  updateField: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  currentValues: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
TicketPriceCalculatorForm.defaultProps = {
  initialValues: {},
  currentValues: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__["ifValidTicketEntity"])(TicketPriceCalculatorForm));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-menu-item.js":
/*!**************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/ticket-price-calculator-menu-item.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/hooks/index.js");


/**
 * External imports
 */





/**
 * Internal imports
 */




var TicketPriceCalculatorMenuItem = function TicketPriceCalculatorMenuItem(_ref) {
  var ticketEntity = _ref.ticketEntity;
  var editorId = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useTicketPriceCalculatorEditorId"])(ticketEntity);

  var _useTicketPrices = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_3__["useTicketPrices"])(ticketEntity),
      prices = _useTicketPrices.prices,
      pricesLoaded = _useTicketPrices.pricesLoaded,
      noBasePrice = _useTicketPrices.noBasePrice;

  var tooltip = noBasePrice ? Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('warning! no ticket price set - click to fix', 'event_espresso') : Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('ticket price calculator', 'event_espresso');
  var calculator = pricesLoaded ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(___WEBPACK_IMPORTED_MODULE_6__["TicketPriceCalculatorFormModal"], {
    ticketEntity: ticketEntity,
    pricesLoaded: pricesLoaded,
    prices: prices
  }) : null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["IconMenuItem"], {
    index: 2,
    tooltip: tooltip,
    id: "ee-calculate-ticket-price-ticket-".concat(ticketEntity.id),
    htmlClass: 'ee-calculate-tickets-price',
    dashicon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_1__["EspressoIcon"], {
      icon: "calculator"
    }),
    tooltipPosition: "top right",
    onClick: Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["useOpenEditor"])(editorId),
    itemCount: noBasePrice ? 0 : null,
    disabled: !pricesLoaded
  }), calculator);
};

TicketPriceCalculatorMenuItem.propTypes = {
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_2__["ifValidTicketEntity"])(TicketPriceCalculatorMenuItem));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/base-price-calculations.js":
/*!**********************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/base-price-calculations.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

var BASE_PRICE_TYPES = _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["priceTypeModel"].BASE_PRICE_TYPES;
/**
 * @function
 * @param {number} currentTotal
 * @param {number} priceTypeId
 * @param {boolean} isPercent,
 * @param {number} amount
 * @return {Object} calculations based on price modifier
 */

var basePriceCalculations = function basePriceCalculations(currentTotal, priceTypeId, isPercent, amount) {
  // NOTE: there's no case for handling base price types
  // because that is what we are calculating
  switch (priceTypeId) {
    case BASE_PRICE_TYPES.DISCOUNT:
      // increase base price by amount of percent or dollar discount
      return isPercent ? currentTotal / ((100 - amount) / 100) : currentTotal + amount;

    case BASE_PRICE_TYPES.SURCHARGE:
      // reduce base price by amount of percent or dollar surcharge
      return isPercent ? currentTotal / ((100 + amount) / 100) : currentTotal - amount;

    case BASE_PRICE_TYPES.TAX:
      return currentTotal / ((100 + amount) / 100);
  }

  return currentTotal;
};

/* harmony default export */ __webpack_exports__["default"] = (basePriceCalculations);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/calculate-ticket-base-price-from-total.js":
/*!*************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/calculate-ticket-base-price-from-total.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _get_base_price_form_field_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-base-price-form-field-id */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-base-price-form-field-id.js");
/* harmony import */ var _get_ticket_id_from_form_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-ticket-id-from-form-data */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-ticket-id-from-form-data.js");
/* harmony import */ var _get_ticket_total_from_form_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-ticket-total-from-form-data */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-ticket-total-from-form-data.js");


/**
 * External imports
 */


/**
 * Internal imports
 */




var DEFAULT_OBJECT = {};
/**
 * @function
 * @param {Object} formData
 * @param {BaseEntity[]} priceModifiers
 * @param {function} calculator  A calculator for calculating the total.
 * @return {Object} new field data
 */

var calculateTicketBasePriceFromTotal = function calculateTicketBasePriceFromTotal(formData, priceModifiers, calculator) {
  var ticketId = Object(_get_ticket_id_from_form_data__WEBPACK_IMPORTED_MODULE_4__["default"])(formData);

  if (!ticketId) {
    return DEFAULT_OBJECT;
  }

  var basePriceFormFieldID = Object(_get_base_price_form_field_id__WEBPACK_IMPORTED_MODULE_3__["default"])(ticketId, formData);

  if (basePriceFormFieldID === '') {
    return DEFAULT_OBJECT;
  }

  var newPrice = Object(_get_ticket_total_from_form_data__WEBPACK_IMPORTED_MODULE_5__["default"])(formData);

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(priceModifiers) && !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(priceModifiers)) {
    newPrice = calculator(newPrice, priceModifiers);
  }

  return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, basePriceFormFieldID, newPrice ? newPrice.toFixed(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_2__["SiteCurrency"].decimalPlaces) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (calculateTicketBasePriceFromTotal);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/calculate-ticket-total-from-modifiers.js":
/*!************************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/calculate-ticket-total-from-modifiers.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_ticket_total_from_form_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-ticket-total-from-form-data */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-ticket-total-from-form-data.js");
/**
 * External imports
 */


/**
 * Internal imports
 */
// import useGetPriceModifiersFromFormData
// 	from './use-get-price-modifiers-from-form-data';
// import getTicketIdFromFormData from './get-ticket-id-from-form-data';

 // const DEFAULT_OBJECT = {};

/**
 * @function
 * @param {Object} formData
 * @param {BaseEntity[]} priceModifiers
 * @param {function} calculator  A calculator for calculating the total.
 * @return {Object} new field data
 */

var calculateTicketTotalFromModifiers = function calculateTicketTotalFromModifiers(formData, priceModifiers, calculator) {
  var total = Object(_get_ticket_total_from_form_data__WEBPACK_IMPORTED_MODULE_2__["default"])(formData);

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(priceModifiers) && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(priceModifiers)) {
    total = calculator(0, priceModifiers);
  }

  return {
    ticketTotal: total ? total.toFixed(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_1__["SiteCurrency"].decimalPlaces) : null
  };
};

/* harmony default export */ __webpack_exports__["default"] = (calculateTicketTotalFromModifiers);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-base-price-form-field-id.js":
/*!***************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-base-price-form-field-id.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/constants.js");
/**
 * External imports
 */


/**
 * Internal imports
 */


var BASE_PRICE_TYPES = _eventespresso_model__WEBPACK_IMPORTED_MODULE_1__["priceTypeModel"].BASE_PRICE_TYPES;
/**
 * @function
 * @param {number|string} ticketId
 * @param {Object} formData
 * @return {string} form field name
 */

var getBasePriceFormFieldId = function getBasePriceFormFieldId(ticketId, formData) {
  var basePrefix = _constants__WEBPACK_IMPORTED_MODULE_2__["TICKET_PRICE_CALCULATOR_FORM_INPUT_PREFIX"] + "-ticket-".concat(ticketId, "-price");

  if (!formData.priceIDs) {
    return '';
  }

  var priceIDs = formData.priceIDs.split(',');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = priceIDs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var priceID = _step.value;
      var prefix = "".concat(basePrefix, "-").concat(priceID);
      var priceTypeId = typeof formData["".concat(prefix, "-type")] !== 'undefined' ? Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_0__["normalizeEntityId"])(formData["".concat(prefix, "-type")]) : null; // base prices have a type id of 1

      if (priceTypeId === BASE_PRICE_TYPES.BASE_PRICE) {
        var basePrice = typeof formData["".concat(prefix, "-amount")] !== 'undefined' ? formData["".concat(prefix, "-amount")] : null;

        if (basePrice !== null) {
          return "".concat(prefix, "-amount");
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return '';
};

/* harmony default export */ __webpack_exports__["default"] = (getBasePriceFormFieldId);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-price-amount.js":
/*!***************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-price-amount.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/value-objects */ "@eventespresso/value-objects");
/* harmony import */ var _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

/**
 * @function
 * @param {BaseEntity} price,
 * @return {number} amount as float
 */

var getPriceAmount = function getPriceAmount(price) {
  return price.amount && price.amount instanceof _eventespresso_value_objects__WEBPACK_IMPORTED_MODULE_0__["Money"] ? price.amount.toNumber() : parseFloat(price.amount || 0);
};

/* harmony default export */ __webpack_exports__["default"] = (getPriceAmount);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-price-type-for-price.js":
/*!***********************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-price-type-for-price.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/**
 * External imports
 */


/**
 * @function
 * @param {BaseEntity} price
 * @param {BaseEntity[]} priceTypes
 * @return {BaseEntity} priceType for supplied price
 */

var getPriceTypeForPrice = function getPriceTypeForPrice(price, priceTypes) {
  var priceType = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(priceTypes, ['id', price.PRT_ID]);

  if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(priceType, 'price_type')) {
    return priceType;
  }

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["first"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["filter"])(priceTypes, function (pt) {
    return pt.id !== 1;
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (getPriceTypeForPrice);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-price-type.js":
/*!*************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-price-type.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */



/**
 * @param {number|string} priceTypeId
 * @param {BaseEntity[]} priceTypes
 * @return {BaseEntity} price type entity for the given ID
 */

var getPriceType = function getPriceType(priceTypeId, priceTypes) {
  priceTypeId = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_2__["normalizeEntityId"])(priceTypeId);
  var priceType = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(priceTypes, ['id', priceTypeId]);
  return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_1__["isModelEntityOfModel"])(priceType, 'price_type') ? priceType : Object(lodash__WEBPACK_IMPORTED_MODULE_0__["last"])(priceTypes);
};

/* harmony default export */ __webpack_exports__["default"] = (getPriceType);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-price.js":
/*!********************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-price.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! memize */ "./node_modules/memize/index.js");
/* harmony import */ var memize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(memize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/**
 * External imports
 */
// import { find, last } from 'lodash';



/**
 * @param {number|string} priceID
 * @param {BaseEntity[]} prices
 * @return {BaseEntity} price type entity for the given ID
 */

var getPrice = memize__WEBPACK_IMPORTED_MODULE_0___default()(function (priceID, prices) {
  priceID = Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_1__["normalizeEntityId"])(priceID);
  var price = prices.find(function (p) {
    return p.id === priceID;
  });
  return Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntityOfModel"])(price, 'price') ? price : prices.slice(-1)[0];
});
/* harmony default export */ __webpack_exports__["default"] = (getPrice);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-ticket-id-from-form-data.js":
/*!***************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-ticket-id-from-form-data.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @function getTicketIdFromFormData
 * @param {Object} formData
 * @return {number|string} ticketId
 */
var getTicketIdFromFormData = function getTicketIdFromFormData(formData) {
  return formData.ticketID || 0;
};

/* harmony default export */ __webpack_exports__["default"] = (getTicketIdFromFormData);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-ticket-total-from-form-data.js":
/*!******************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-ticket-total-from-form-data.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/utils */ "@eventespresso/utils");
/* harmony import */ var _eventespresso_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Internal imports
 */

/**
 * @function getTicketTotalFromFormData
 * @param {Object} formData
 * @return {number} total
 */

var getTicketTotalFromFormData = function getTicketTotalFromFormData(formData) {
  var total = formData.ticketTotal || 0;
  return Object(_eventespresso_utils__WEBPACK_IMPORTED_MODULE_0__["parseMoneyValue"])(total);
};

/* harmony default export */ __webpack_exports__["default"] = (getTicketTotalFromFormData);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/index.js":
/*!****************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/index.js ***!
  \****************************************************************************************/
/*! exports provided: basePriceCalculations, getPriceAmount, getPriceType, getPriceTypeForPrice, ticketTotalCalculations, calculateTicketBasePriceFromTotal, calculateTicketTotalFromModifiers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_price_calculations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-price-calculations */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/base-price-calculations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basePriceCalculations", function() { return _base_price_calculations__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _get_price_amount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-price-amount */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-price-amount.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPriceAmount", function() { return _get_price_amount__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _get_price_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-price-type */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-price-type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPriceType", function() { return _get_price_type__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _get_price_type_for_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-price-type-for-price */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/get-price-type-for-price.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPriceTypeForPrice", function() { return _get_price_type_for_price__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ticket_total_calculations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticket-total-calculations */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/ticket-total-calculations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticketTotalCalculations", function() { return _ticket_total_calculations__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _calculate_ticket_base_price_from_total__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculate-ticket-base-price-from-total */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/calculate-ticket-base-price-from-total.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateTicketBasePriceFromTotal", function() { return _calculate_ticket_base_price_from_total__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _calculate_ticket_total_from_modifiers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculate-ticket-total-from-modifiers */ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/calculate-ticket-total-from-modifiers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateTicketTotalFromModifiers", function() { return _calculate_ticket_total_from_modifiers__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/ticket-total-calculations.js":
/*!************************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/price-calculator/utils/ticket-total-calculations.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @eventespresso/model */ "@eventespresso/model");
/* harmony import */ var _eventespresso_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_model__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External imports
 */

var BASE_PRICE_TYPES = _eventespresso_model__WEBPACK_IMPORTED_MODULE_0__["priceTypeModel"].BASE_PRICE_TYPES;
/**
 * @function
 * @param {number} currentTotal
 * @param {number} priceTypeId
 * @param {boolean} isPercent,
 * @param {number} amount
 * @return {Object} calculations based on price modifier
 */

var ticketTotalCalculations = function ticketTotalCalculations(currentTotal, priceTypeId, isPercent, amount) {
  switch (priceTypeId) {
    case BASE_PRICE_TYPES.BASE_PRICE:
      // basic addition
      return currentTotal + amount;

    case BASE_PRICE_TYPES.DISCOUNT:
      // subtract percent or dollar discount
      return isPercent ? currentTotal - amount / 100 * currentTotal : currentTotal - amount;

    case BASE_PRICE_TYPES.SURCHARGE:
      // add percent or dollar surcharge
      return isPercent ? currentTotal + amount / 100 * currentTotal : currentTotal + amount;

    case BASE_PRICE_TYPES.TAX:
      // add percent tax
      return currentTotal + amount / 100 * currentTotal;
  }

  return currentTotal;
};

/* harmony default export */ __webpack_exports__["default"] = (ticketTotalCalculations);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/ticket-registrations-link.js":
/*!*************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/ticket-registrations-link.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/editor-hocs */ "@eventespresso/editor-hocs");
/* harmony import */ var _eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @eventespresso/eejs */ "@eventespresso/eejs");
/* harmony import */ var _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__);


/**
 * External imports
 */








var ADMIN_ROUTES = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5__["routes"].ADMIN_ROUTES,
    ADMIN_ROUTE_ACTION_DEFAULT = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5__["routes"].ADMIN_ROUTE_ACTION_DEFAULT,
    getAdminUrl = _eventespresso_eejs__WEBPACK_IMPORTED_MODULE_5__["routes"].getAdminUrl;
/**
 * returns a rendered Dashicon wrapped in an HTML <a> tag that links to
 * the registrations admin list table filtered for the provided ticket
 *
 * @param {BaseEntity} ticketEntity    The ticket object.
 * @return {Object} rendered link to registrations list table for datetime
 */

var TicketRegistrationsLink = function TicketRegistrationsLink(_ref) {
  var ticket = _ref.ticketEntity;

  var _useEventEditorEvent = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_6__["useEventEditorEvent"])(),
      eventEntity = _useEventEditorEvent.eventEntity;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var regListUrl = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__["addQueryArgs"])(getAdminUrl(ADMIN_ROUTES.REGISTRATIONS, ADMIN_ROUTE_ACTION_DEFAULT), {
      event_id: eventEntity.id,
      ticket_id: ticket.id,
      return: 'edit'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      text: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('view registrations for this ticket.', 'event_espresso')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: regListUrl,
      className: 'ee-editor-details-reg-url-link',
      target: '_blank',
      rel: 'noopener norefferer'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
      icon: "groups",
      size: 24
    })));
  }, [eventEntity.id, ticket.id]);
};

TicketRegistrationsLink.propTypes = {
  ticketEntity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_eventespresso_editor_hocs__WEBPACK_IMPORTED_MODULE_4__["ifValidTicketEntity"])(TicketRegistrationsLink));

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/use-tickets-for-event-editor-ticket-list.js":
/*!****************************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/use-tickets-for-event-editor-ticket-list.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dates_and_times_editor_date_filter_bar_use_dates_list_filter_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dates-and-times/editor-date/filter-bar/use-dates-list-filter-state */ "./assets/src/editor/events/dates-and-times/editor-date/filter-bar/use-dates-list-filter-state.js");


/**
 * External imports.
 */



var EMPTY_ARRAY = [];
/**
 * useTicketsForEventEditorTicketList
 *
 * A custom react hook for retrieving the related ticket entities
 * for the given event date entities from the eventespresso/core store state.
 *
 * @param {boolean} isChained
 * @return {Object} - an array of event dates
 *                  - boolean indicating if loading is completed
 */

var useTicketsForEventEditorTicketList = function useTicketsForEventEditorTicketList(isChained) {
  var _useDatesListFilterSt = Object(_dates_and_times_editor_date_filter_bar_use_dates_list_filter_state__WEBPACK_IMPORTED_MODULE_3__["default"])({
    listId: 'event-editor-dates-list'
  }),
      filteredDateIds = _useDatesListFilterSt.filteredDateIds;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      finishedResolution = _useState2[0],
      setFinishedResolution = _useState2[1];

  var _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])('eventespresso/core'),
      resolveGetRelatedEntitiesForIds = _dispatch.resolveGetRelatedEntitiesForIds;

  if (!finishedResolution && Array.isArray(filteredDateIds) && filteredDateIds.length) {
    // Finish the resolution for visible datetimes.
    resolveGetRelatedEntitiesForIds('datetime', {
      ticket: filteredDateIds
    }, false);
    setFinishedResolution(true);
  }

  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useSelect"])(function (select) {
    if (filteredDateIds === null) {
      return {
        tickets: EMPTY_ARRAY,
        ticketsLoaded: false
      };
    }

    var _select = select('eventespresso/core'),
        getEntitiesForModel = _select.getEntitiesForModel,
        getRelatedEntitiesForIds = _select.getRelatedEntitiesForIds;

    var _select2 = select('core/data'),
        hasFinishedResolution = _select2.hasFinishedResolution;

    var tickets = EMPTY_ARRAY;
    var ticketsLoaded = false;

    if (isChained) {
      tickets = getRelatedEntitiesForIds('datetime', filteredDateIds, 'ticket');
      ticketsLoaded = hasFinishedResolution('eventespresso/core', 'getRelatedEntitiesForIds', ['datetime', filteredDateIds, 'ticket']);
    } else {
      tickets = getEntitiesForModel('ticket');
      ticketsLoaded = Array.isArray(tickets) && tickets.length > 0;
    }

    return {
      tickets: tickets,
      ticketsLoaded: ticketsLoaded
    };
  }, [isChained, filteredDateIds]);
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketsForEventEditorTicketList);

/***/ }),

/***/ "./assets/src/editor/events/tickets/editor-ticket/use-tickets-registration-count.js":
/*!******************************************************************************************!*\
  !*** ./assets/src/editor/events/tickets/editor-ticket/use-tickets-registration-count.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * useTicketsRegistrationCount
 *
 * A custom react hook for retrieving the ticket to
 * registration count mapping.
 *
 * @return {Object} A mapping from ticket ID to registration count;
 */
var useTicketsRegistrationCount = function useTicketsRegistrationCount() {
  var _window$eeEditorEvent = window.eeEditorEventData.tktRegCount,
      tktRegCount = _window$eeEditorEvent === void 0 ? {} : _window$eeEditorEvent;
  return tktRegCount;
};

/* harmony default export */ __webpack_exports__["default"] = (useTicketsRegistrationCount);

/***/ }),

/***/ "./assets/src/editor/events/tickets/index.js":
/*!***************************************************!*\
  !*** ./assets/src/editor/events/tickets/index.js ***!
  \***************************************************/
/*! exports provided: TicketsMetabox, EditorTicketEntitiesList, useTicketsForEventEditorTicketList, EditorTicketActionsMenu, EditTicketForm, EditTicketFormModal, NewTicketFormModal, useTicketEditorId, useTicketEntityFormInputPrefix, TicketsListFilterBar, useTicketsListFilterState, useTicketsListFilterStateSetters, useFilteredTicketsList, EditorTicketEntityDetails, EditorTicketEntityGridItem, EditorTicketEntitiesGridView, EditorTicketEntitiesListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_ticket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor-ticket */ "./assets/src/editor/events/tickets/editor-ticket/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesList", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntitiesList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketsForEventEditorTicketList", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["useTicketsForEventEditorTicketList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketActionsMenu", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketActionsMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTicketForm", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditTicketForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditTicketFormModal", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditTicketFormModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewTicketFormModal", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["NewTicketFormModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketEditorId", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["useTicketEditorId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketEntityFormInputPrefix", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["useTicketEntityFormInputPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketsListFilterBar", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["TicketsListFilterBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketsListFilterState", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["useTicketsListFilterState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTicketsListFilterStateSetters", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["useTicketsListFilterStateSetters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFilteredTicketsList", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["useFilteredTicketsList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityDetails", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntityDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntityGridItem", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntityGridItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesGridView", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntitiesGridView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditorTicketEntitiesListView", function() { return _editor_ticket__WEBPACK_IMPORTED_MODULE_0__["EditorTicketEntitiesListView"]; });

/* harmony import */ var _tickets_tickets_metabox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tickets/tickets-metabox */ "./assets/src/editor/events/tickets/tickets-metabox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TicketsMetabox", function() { return _tickets_tickets_metabox__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/src/editor/events/tickets/tickets-metabox.js":
/*!*************************************************************!*\
  !*** ./assets/src/editor/events/tickets/tickets-metabox.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../editor.css */ "./assets/src/editor/editor.css");
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tickets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tickets */ "./assets/src/editor/events/tickets/index.js");


/**
 * External dependencies
 */



/**
 * Internal imports
 */



/**
 * TicketsMetabox
 *
 * displays a "metabox" for managing an event's tickets
 *
 * @param {number} eventId
 * @return {Object} rendered event dates metabox
 */

var TicketsMetabox = function TicketsMetabox(_ref) {
  var eventId = _ref.eventId;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
    className: "ee-metabox-heading"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
    icon: "tickets-alt"
  }), Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Available Tickets', 'event_espresso')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    id: "ee-editor-event-tickets-".concat(eventId),
    className: "ee-editor-event-tickets espresso-editor"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelRow"], {
    className: "ee-editor-event-tickets ee-form-row"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tickets__WEBPACK_IMPORTED_MODULE_5__["EditorTicketEntitiesList"], {
    for: 'event-tickets-metabox'
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null));
};

TicketsMetabox.propTypes = {
  eventId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TicketsMetabox);

/***/ }),

/***/ "./assets/src/editor/helpers/forms/generate-form-input-from-config.js":
/*!****************************************************************************!*\
  !*** ./assets/src/editor/helpers/forms/generate-form-input-from-config.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @eventespresso/components */ "@eventespresso/components");
/* harmony import */ var _eventespresso_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal imports
 */

var defaultInputConfig = {
  id: null,
  type: 'text',
  label: null,
  default: null,
  changeListener: null,
  validations: function validations() {},
  required: false,
  disabled: false,
  minLength: null,
  min: null,
  inputWidth: null,
  helpText: {
    regular: null,
    ifChecked: null,
    ifNotChecked: null
  },
  afterInput: null,
  step: null
};
/**
 * returns a rendered FormInput component based on the provided config object
 *
 * @function
 * @param {string} formDataKeyPrefix  string prepended to form data keys
 * @param {Object} formDataValues form input values
 * @param {Object} inputConfig input generation details
 * @return {Array} form inputs
 */

var generateFormInputFromConfig = function generateFormInputFromConfig(formDataKeyPrefix, formDataValues, inputConfig) {
  if (!inputConfig.id) {
    return null;
  }

  var config = _objectSpread({}, defaultInputConfig, {}, inputConfig);

  var id = config.id,
      type = config.type,
      label = config.label,
      defaultValue = config.default,
      changeListener = config.changeListener,
      validations = config.validations,
      required = config.required,
      disabled = config.disabled,
      minLength = config.minLength,
      min = config.min,
      step = config.step,
      inputWidth = config.inputWidth,
      _config$helpText = config.helpText,
      ifChecked = _config$helpText.ifChecked,
      ifNotChecked = _config$helpText.ifNotChecked,
      regular = _config$helpText.regular,
      afterInput = config.afterInput,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(config, ["id", "type", "label", "default", "changeListener", "validations", "required", "disabled", "minLength", "min", "step", "inputWidth", "helpText", "afterInput"]);

  var name = "".concat(formDataKeyPrefix, "-").concat(id);
  return type === 'toggle' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["FormInput"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    key: id,
    type: type,
    name: name,
    htmlId: name,
    label: label,
    initialValue: formDataValues[name] || defaultValue,
    changeListener: changeListener,
    validations: validations,
    required: required,
    disabled: disabled,
    minLength: minLength,
    min: min,
    inputWidth: inputWidth,
    helpTextIfChecked: ifChecked,
    helpTextIfNotChecked: ifNotChecked,
    afterInput: afterInput
  }, rest)) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_eventespresso_components__WEBPACK_IMPORTED_MODULE_4__["FormInput"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    key: id,
    type: type,
    name: name,
    htmlId: name,
    label: label,
    initialValue: formDataValues[name] || defaultValue,
    changeListener: changeListener,
    validations: validations,
    disabled: disabled,
    required: required,
    minLength: minLength,
    min: min,
    step: step,
    inputWidth: inputWidth,
    helpText: regular,
    afterInput: afterInput
  }, rest));
};

/* harmony default export */ __webpack_exports__["default"] = (generateFormInputFromConfig);

/***/ }),

/***/ "./assets/src/editor/helpers/forms/index.js":
/*!**************************************************!*\
  !*** ./assets/src/editor/helpers/forms/index.js ***!
  \**************************************************/
/*! exports provided: useEditEntityFormInputs, generateFormInputFromConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_edit_entity_form_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-edit-entity-form-inputs */ "./assets/src/editor/helpers/forms/use-edit-entity-form-inputs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEditEntityFormInputs", function() { return _use_edit_entity_form_inputs__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _generate_form_input_from_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-form-input-from-config */ "./assets/src/editor/helpers/forms/generate-form-input-from-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateFormInputFromConfig", function() { return _generate_form_input_from_config__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/src/editor/helpers/forms/use-edit-entity-form-inputs.js":
/*!************************************************************************!*\
  !*** ./assets/src/editor/helpers/forms/use-edit-entity-form-inputs.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/helpers */ "@eventespresso/helpers");
/* harmony import */ var _eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _generate_form_input_from_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generate-form-input-from-config */ "./assets/src/editor/helpers/forms/generate-form-input-from-config.js");
/**
 * External imports
 */




/**
 * External imports
 */


/**
 * returns an array of inputs corresponding to
 * the properties of an EE model Entity
 *
 * @function
 * @param {Object} entity  EE model object
 * @param {Object} inputConfig input generation details
 * @param {string} formDataKeyPrefix  string prepended to form data keys
 * @param {Object} formDataValues form input values
 * @param {Array} exclude  Array of field ids to not display inputs for
 * @return {Array} form inputs
 */

var useEditEntityFormInputs = function useEditEntityFormInputs(entity, inputConfig, formDataKeyPrefix) {
  var formDataValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var exclude = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (!Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_2__["isModelEntity"])(entity)) {
      return [];
    }

    var inputs = [];
    inputConfig.forEach(function (config) {
      if ( // if config id exists
      config.id && // and input is not excluded from form
      Object(lodash__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(exclude, config.id) < 0 && ( // and input is either for a property other than the entity ID
      // OR it IS for the entity ID and the ID checks out okay
      config.id !== 'id' || config.id === 'id' && Object(_eventespresso_helpers__WEBPACK_IMPORTED_MODULE_3__["normalizeEntityId"])(entity.id))) {
        var input = Object(_generate_form_input_from_config__WEBPACK_IMPORTED_MODULE_4__["default"])(formDataKeyPrefix, formDataValues, config);

        if (input) {
          inputs.push(input);
        }
      }
    });
    return inputs;
  }, [entity, inputConfig, formDataKeyPrefix, formDataValues, exclude]);
};

/* harmony default export */ __webpack_exports__["default"] = (useEditEntityFormInputs);

/***/ }),

/***/ "./assets/src/editor/helpers/forms/use-price-type-options-for-select-input.js":
/*!************************************************************************************!*\
  !*** ./assets/src/editor/helpers/forms/use-price-type-options-for-select-input.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @eventespresso/hooks */ "@eventespresso/hooks");
/* harmony import */ var _eventespresso_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @eventespresso/i18n */ "@eventespresso/i18n");
/* harmony import */ var _eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @eventespresso/validators */ "@eventespresso/validators");
/* harmony import */ var _eventespresso_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__);
/**
 * External imports
 */




var chooseOption = {
  value: 0,
  label: Object(_eventespresso_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('- select type -', 'event_espresso')
};
var EMPTY_ARRAY = [];
/**
 * creates an array of price type options for use in a form select input
 * where values are the price type ID and labels are the price type name
 *
 * @function
 * @param {Array} removeTypes
 * @return {Array} price type options for use in select input
 */

var usePriceTypeOptionsForSelectInput = function usePriceTypeOptionsForSelectInput() {
  var removeTypes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_ARRAY;

  var _usePriceTypes = Object(_eventespresso_hooks__WEBPACK_IMPORTED_MODULE_1__["usePriceTypes"])(),
      priceTypes = _usePriceTypes.priceTypes,
      priceTypesLoaded = _usePriceTypes.priceTypesLoaded;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (!priceTypesLoaded) {
      return EMPTY_ARRAY;
    }

    var priceTypeOptions = [chooseOption];
    var filteredPriceTypeOptions = [chooseOption];

    for (var i = 0; i < priceTypes.length; i++) {
      var priceType = priceTypes[i];

      if (Object(_eventespresso_validators__WEBPACK_IMPORTED_MODULE_3__["isModelEntityOfModel"])(priceType, 'price_type')) {
        priceTypeOptions.push({
          value: priceType.id,
          label: priceType.name
        });

        if (!removeTypes.includes(priceType.PBT_ID)) {
          filteredPriceTypeOptions.push({
            value: priceType.id,
            label: priceType.name
          });
        }
      }
    }

    return {
      priceTypeOptions: priceTypeOptions,
      filteredPriceTypeOptions: filteredPriceTypeOptions
    };
  }, [priceTypes, priceTypesLoaded, removeTypes]);
};

/* harmony default export */ __webpack_exports__["default"] = (usePriceTypeOptionsForSelectInput);

/***/ }),

/***/ "./assets/src/editor/helpers/index.js":
/*!********************************************!*\
  !*** ./assets/src/editor/helpers/index.js ***!
  \********************************************/
/*! exports provided: useEditEntityFormInputs, generateFormInputFromConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./assets/src/editor/helpers/forms/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEditEntityFormInputs", function() { return _forms__WEBPACK_IMPORTED_MODULE_0__["useEditEntityFormInputs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateFormInputFromConfig", function() { return _forms__WEBPACK_IMPORTED_MODULE_0__["generateFormInputFromConfig"]; });



/***/ }),

/***/ "./assets/src/editor/index.js":
/*!************************************!*\
  !*** ./assets/src/editor/index.js ***!
  \************************************/
/*! exports provided: useEditEntityFormInputs, generateFormInputFromConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.css */ "./assets/src/editor/editor.css");
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./assets/src/editor/events/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./assets/src/editor/helpers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEditEntityFormInputs", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["useEditEntityFormInputs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateFormInputFromConfig", function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__["generateFormInputFromConfig"]; });





/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/AsyncGenerator.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/AsyncGenerator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AwaitValue = __webpack_require__(/*! ./AwaitValue */ "./node_modules/@babel/runtime/helpers/AwaitValue.js");

function AsyncGenerator(gen) {
  var front, back;

  function send(key, arg) {
    return new Promise(function (resolve, reject) {
      var request = {
        key: key,
        arg: arg,
        resolve: resolve,
        reject: reject,
        next: null
      };

      if (back) {
        back = back.next = request;
      } else {
        front = back = request;
        resume(key, arg);
      }
    });
  }

  function resume(key, arg) {
    try {
      var result = gen[key](arg);
      var value = result.value;
      var wrappedAwait = value instanceof AwaitValue;
      Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
        if (wrappedAwait) {
          resume("next", arg);
          return;
        }

        settle(result.done ? "return" : "normal", arg);
      }, function (err) {
        resume("throw", err);
      });
    } catch (err) {
      settle("throw", err);
    }
  }

  function settle(type, value) {
    switch (type) {
      case "return":
        front.resolve({
          value: value,
          done: true
        });
        break;

      case "throw":
        front.reject(value);
        break;

      default:
        front.resolve({
          value: value,
          done: false
        });
        break;
    }

    front = front.next;

    if (front) {
      resume(front.key, front.arg);
    } else {
      back = null;
    }
  }

  this._invoke = send;

  if (typeof gen["return"] !== "function") {
    this["return"] = undefined;
  }
}

if (typeof Symbol === "function" && Symbol.asyncIterator) {
  AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
    return this;
  };
}

AsyncGenerator.prototype.next = function (arg) {
  return this._invoke("next", arg);
};

AsyncGenerator.prototype["throw"] = function (arg) {
  return this._invoke("throw", arg);
};

AsyncGenerator.prototype["return"] = function (arg) {
  return this._invoke("return", arg);
};

module.exports = AsyncGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/AwaitValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/AwaitValue.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _AwaitValue(value) {
  this.wrapped = value;
}

module.exports = _AwaitValue;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncIterator.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncIterator.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _asyncIterator(iterable) {
  var method;

  if (typeof Symbol !== "undefined") {
    if (Symbol.asyncIterator) {
      method = iterable[Symbol.asyncIterator];
      if (method != null) return method.call(iterable);
    }

    if (Symbol.iterator) {
      method = iterable[Symbol.iterator];
      if (method != null) return method.call(iterable);
    }
  }

  throw new TypeError("Object is not async iterable");
}

module.exports = _asyncIterator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/awaitAsyncGenerator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AwaitValue = __webpack_require__(/*! ./AwaitValue */ "./node_modules/@babel/runtime/helpers/AwaitValue.js");

function _awaitAsyncGenerator(value) {
  return new AwaitValue(value);
}

module.exports = _awaitAsyncGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapAsyncGenerator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var AsyncGenerator = __webpack_require__(/*! ./AsyncGenerator */ "./node_modules/@babel/runtime/helpers/AsyncGenerator.js");

function _wrapAsyncGenerator(fn) {
  return function () {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}

module.exports = _wrapAsyncGenerator;

/***/ }),

/***/ "./node_modules/final-form-calculate/dist/final-form-calculate.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/final-form-calculate/dist/final-form-calculate.es.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var final_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! final-form */ "./node_modules/final-form/dist/final-form.es.js");


var isPromise = (function (obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
});

//      

var tripleEquals = function tripleEquals(a, b) {
  return a === b;
};

var createDecorator = function createDecorator() {
  for (var _len = arguments.length, calculations = new Array(_len), _key = 0; _key < _len; _key++) {
    calculations[_key] = arguments[_key];
  }

  return function (form) {
    var previousValues = {};
    var unsubscribe = form.subscribe(function (_ref) {
      var values = _ref.values;
      form.batch(function () {
        var runUpdates = function runUpdates(field, isEqual, updates) {
          var next = values && Object(final_form__WEBPACK_IMPORTED_MODULE_0__["getIn"])(values, field);
          var previous = previousValues && Object(final_form__WEBPACK_IMPORTED_MODULE_0__["getIn"])(previousValues, field);

          if (!isEqual(next, previous)) {
            if (typeof updates === 'function') {
              var results = updates(next, field, values, previousValues);

              if (isPromise(results)) {
                results.then(function (resolved) {
                  Object.keys(resolved).forEach(function (destField) {
                    form.change(destField, resolved[destField]);
                  });
                });
              } else {
                Object.keys(results).forEach(function (destField) {
                  form.change(destField, results[destField]);
                });
              }
            } else {
              Object.keys(updates).forEach(function (destField) {
                var update = updates[destField];
                var result = update(next, values, previousValues);

                if (isPromise(result)) {
                  result.then(function (resolved) {
                    form.change(destField, resolved);
                  });
                } else {
                  form.change(destField, result);
                }
              });
            }
          }
        };

        var fields = form.getRegisteredFields();
        calculations.forEach(function (_ref2) {
          var field = _ref2.field,
              isEqual = _ref2.isEqual,
              updates = _ref2.updates;

          if (typeof field === 'string') {
            runUpdates(field, isEqual || tripleEquals, updates);
          } else {
            // field is a either array or regex
            var matches = Array.isArray(field) ? function (name) {
              return ~field.indexOf(name) || field.findIndex(function (f) {
                return f instanceof RegExp && f.test(name);
              }) !== -1;
            } : function (name) {
              return field.test(name);
            };
            fields.forEach(function (fieldName) {
              if (matches(fieldName)) {
                runUpdates(fieldName, isEqual || tripleEquals, updates);
              }
            });
          }
        });
        previousValues = values;
      });
    }, {
      values: true
    });
    return unsubscribe;
  };
};

//

/* harmony default export */ __webpack_exports__["default"] = (createDecorator);


/***/ }),

/***/ "./node_modules/final-form/dist/final-form.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/final-form/dist/final-form.es.js ***!
  \*******************************************************/
/*! exports provided: ARRAY_ERROR, FORM_ERROR, configOptions, createForm, fieldSubscriptionItems, formSubscriptionItems, getIn, setIn, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_ERROR", function() { return ARRAY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_ERROR", function() { return FORM_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configOptions", function() { return configOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForm", function() { return createForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldSubscriptionItems", function() { return fieldSubscriptionItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formSubscriptionItems", function() { return formSubscriptionItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");



//      
var toPath = function toPath(key) {
  if (key === null || key === undefined || !key.length) {
    return [];
  }

  if (typeof key !== 'string') {
    throw new Error('toPath() expects a string');
  }

  return key.split(/[.[\]]+/).filter(Boolean);
};

//      

var getIn = function getIn(state, complexKey) {
  // Intentionally using iteration rather than recursion
  var path = toPath(complexKey);
  var current = state;

  for (var i = 0; i < path.length; i++) {
    var key = path[i];

    if (current === undefined || current === null || typeof current !== 'object' || Array.isArray(current) && isNaN(key)) {
      return undefined;
    }

    current = current[key];
  }

  return current;
};

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var setInRecursor = function setInRecursor(current, index, path, value, destroyArrays) {
  if (index >= path.length) {
    // end of recursion
    return value;
  }

  var key = path[index]; // determine type of key

  if (isNaN(key)) {
    var _extends2;

    // object set
    if (current === undefined || current === null) {
      var _ref;

      // recurse
      var _result2 = setInRecursor(undefined, index + 1, path, value, destroyArrays); // delete or create an object


      return _result2 === undefined ? undefined : (_ref = {}, _ref[key] = _result2, _ref);
    }

    if (Array.isArray(current)) {
      throw new Error('Cannot set a non-numeric property on an array');
    } // current exists, so make a copy of all its values, and add/update the new one


    var _result = setInRecursor(current[key], index + 1, path, value, destroyArrays);

    if (_result === undefined) {
      var numKeys = Object.keys(current).length;

      if (current[key] === undefined && numKeys === 0) {
        // object was already empty
        return undefined;
      }

      if (current[key] !== undefined && numKeys <= 1) {
        // only key we had was the one we are deleting
        if (!isNaN(path[index - 1]) && !destroyArrays) {
          // we are in an array, so return an empty object
          return {};
        } else {
          return undefined;
        }
      }

      var _removed = current[key],
          _final = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(current, [key].map(_toPropertyKey));

      return _final;
    } // set result in key


    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current, (_extends2 = {}, _extends2[key] = _result, _extends2));
  } // array set


  var numericKey = Number(key);

  if (current === undefined || current === null) {
    // recurse
    var _result3 = setInRecursor(undefined, index + 1, path, value, destroyArrays); // if nothing returned, delete it


    if (_result3 === undefined) {
      return undefined;
    } // create an array


    var _array = [];
    _array[numericKey] = _result3;
    return _array;
  }

  if (!Array.isArray(current)) {
    throw new Error('Cannot set a numeric property on an object');
  } // recurse


  var existingValue = current[numericKey];
  var result = setInRecursor(existingValue, index + 1, path, value, destroyArrays); // current exists, so make a copy of all its values, and add/update the new one

  var array = [].concat(current);

  if (destroyArrays && result === undefined) {
    array.splice(numericKey, 1);

    if (array.length === 0) {
      return undefined;
    }
  } else {
    array[numericKey] = result;
  }

  return array;
};

var setIn = function setIn(state, key, value, destroyArrays) {
  if (destroyArrays === void 0) {
    destroyArrays = false;
  }

  if (state === undefined || state === null) {
    throw new Error("Cannot call setIn() with " + String(state) + " state");
  }

  if (key === undefined || key === null) {
    throw new Error("Cannot call setIn() with " + String(key) + " key");
  } // Recursive function needs to accept and return State, but public API should
  // only deal with Objects


  return setInRecursor(state, 0, toPath(key), value, destroyArrays);
};

var FORM_ERROR = 'FINAL_FORM/form-error';
var ARRAY_ERROR = 'FINAL_FORM/array-error';

//      
/**
 * Converts internal field state to published field state
 */

function publishFieldState(formState, field) {
  var errors = formState.errors,
      initialValues = formState.initialValues,
      lastSubmittedValues = formState.lastSubmittedValues,
      submitErrors = formState.submitErrors,
      submitFailed = formState.submitFailed,
      submitSucceeded = formState.submitSucceeded,
      submitting = formState.submitting,
      values = formState.values;
  var active = field.active,
      blur = field.blur,
      change = field.change,
      data = field.data,
      focus = field.focus,
      modified = field.modified,
      name = field.name,
      touched = field.touched,
      validating = field.validating,
      visited = field.visited;
  var value = getIn(values, name);
  var error = getIn(errors, name);

  if (error && error[ARRAY_ERROR]) {
    error = error[ARRAY_ERROR];
  }

  var submitError = submitErrors && getIn(submitErrors, name);
  var initial = initialValues && getIn(initialValues, name);
  var pristine = field.isEqual(initial, value);
  var dirtySinceLastSubmit = !!(lastSubmittedValues && !field.isEqual(getIn(lastSubmittedValues, name), value));
  var valid = !error && !submitError;
  return {
    active: active,
    blur: blur,
    change: change,
    data: data,
    dirty: !pristine,
    dirtySinceLastSubmit: dirtySinceLastSubmit,
    error: error,
    focus: focus,
    initial: initial,
    invalid: !valid,
    length: Array.isArray(value) ? value.length : undefined,
    modified: modified,
    name: name,
    pristine: pristine,
    submitError: submitError,
    submitFailed: submitFailed,
    submitSucceeded: submitSucceeded,
    submitting: submitting,
    touched: touched,
    valid: valid,
    value: value,
    visited: visited,
    validating: validating
  };
}

//      
var fieldSubscriptionItems = ['active', 'data', 'dirty', 'dirtySinceLastSubmit', 'error', 'initial', 'invalid', 'length', 'modified', 'pristine', 'submitError', 'submitFailed', 'submitSucceeded', 'submitting', 'touched', 'valid', 'value', 'visited', 'validating'];

//      
var shallowEqual = function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== 'object' || !a || typeof b !== 'object' || !b) {
    return false;
  }

  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(b);

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};

//      
function subscriptionFilter (dest, src, previous, subscription, keys, shallowEqualKeys) {
  var different = false;
  keys.forEach(function (key) {
    if (subscription[key]) {
      dest[key] = src[key];

      if (!previous || (~shallowEqualKeys.indexOf(key) ? !shallowEqual(src[key], previous[key]) : src[key] !== previous[key])) {
        different = true;
      }
    }
  });
  return different;
}

//      
var shallowEqualKeys = ['data'];
/**
 * Filters items in a FieldState based on a FieldSubscription
 */

var filterFieldState = function filterFieldState(state, previousState, subscription, force) {
  var result = {
    blur: state.blur,
    change: state.change,
    focus: state.focus,
    name: state.name
  };
  var different = subscriptionFilter(result, state, previousState, subscription, fieldSubscriptionItems, shallowEqualKeys) || !previousState;
  return different || force ? result : undefined;
};

//      
var formSubscriptionItems = ['active', 'dirty', 'dirtyFields', 'dirtySinceLastSubmit', 'error', 'errors', 'hasSubmitErrors', 'hasValidationErrors', 'initialValues', 'invalid', 'modified', 'pristine', 'submitting', 'submitError', 'submitErrors', 'submitFailed', 'submitSucceeded', 'touched', 'valid', 'validating', 'values', 'visited'];

//      
var shallowEqualKeys$1 = ['touched', 'visited'];
/**
 * Filters items in a FormState based on a FormSubscription
 */

function filterFormState(state, previousState, subscription, force) {
  var result = {};
  var different = subscriptionFilter(result, state, previousState, subscription, formSubscriptionItems, shallowEqualKeys$1) || !previousState;
  return different || force ? result : undefined;
}

//      

var memoize = function memoize(fn) {
  var lastArgs;
  var lastResult;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!lastArgs || args.length !== lastArgs.length || args.some(function (arg, index) {
      return !shallowEqual(lastArgs[index], arg);
    })) {
      lastArgs = args;
      lastResult = fn.apply(void 0, args);
    }

    return lastResult;
  };
};

var isPromise = (function (obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
});

var version = "4.18.5";

var configOptions = ['debug', 'initialValues', 'keepDirtyOnReinitialize', 'mutators', 'onSubmit', 'validate', 'validateOnBlur'];

var tripleEquals = function tripleEquals(a, b) {
  return a === b;
};

var hasAnyError = function hasAnyError(errors) {
  return Object.keys(errors).some(function (key) {
    var value = errors[key];

    if (value && typeof value === 'object' && !(value instanceof Error)) {
      return hasAnyError(value);
    }

    return typeof value !== 'undefined';
  });
};

function convertToExternalFormState(_ref) {
  var active = _ref.active,
      dirtySinceLastSubmit = _ref.dirtySinceLastSubmit,
      error = _ref.error,
      errors = _ref.errors,
      initialValues = _ref.initialValues,
      pristine = _ref.pristine,
      submitting = _ref.submitting,
      submitFailed = _ref.submitFailed,
      submitSucceeded = _ref.submitSucceeded,
      submitError = _ref.submitError,
      submitErrors = _ref.submitErrors,
      valid = _ref.valid,
      validating = _ref.validating,
      values = _ref.values;
  return {
    active: active,
    dirty: !pristine,
    dirtySinceLastSubmit: dirtySinceLastSubmit,
    error: error,
    errors: errors,
    hasSubmitErrors: !!(submitError || submitErrors && hasAnyError(submitErrors)),
    hasValidationErrors: !!(error || hasAnyError(errors)),
    invalid: !valid,
    initialValues: initialValues,
    pristine: pristine,
    submitting: submitting,
    submitFailed: submitFailed,
    submitSucceeded: submitSucceeded,
    submitError: submitError,
    submitErrors: submitErrors,
    valid: valid,
    validating: validating > 0,
    values: values
  };
}

function notifySubscriber(subscriber, subscription, state, lastState, filter, force) {
  var notification = filter(state, lastState, subscription, force);

  if (notification) {
    subscriber(notification);
    return true;
  }

  return false;
}

function notify(_ref2, state, lastState, filter, force) {
  var entries = _ref2.entries;
  Object.keys(entries).forEach(function (key) {
    var entry = entries[Number(key)]; // istanbul ignore next

    if (entry) {
      var subscription = entry.subscription,
          subscriber = entry.subscriber,
          notified = entry.notified;

      if (notifySubscriber(subscriber, subscription, state, lastState, filter, force || !notified)) {
        entry.notified = true;
      }
    }
  });
}

function createForm(config) {
  if (!config) {
    throw new Error('No config specified');
  }

  var debug = config.debug,
      destroyOnUnregister = config.destroyOnUnregister,
      keepDirtyOnReinitialize = config.keepDirtyOnReinitialize,
      initialValues = config.initialValues,
      mutators = config.mutators,
      onSubmit = config.onSubmit,
      validate = config.validate,
      validateOnBlur = config.validateOnBlur;

  if (!onSubmit) {
    throw new Error('No onSubmit function specified');
  }

  var state = {
    subscribers: {
      index: 0,
      entries: {}
    },
    fieldSubscribers: {},
    fields: {},
    formState: {
      dirtySinceLastSubmit: false,
      errors: {},
      initialValues: initialValues && Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialValues),
      invalid: false,
      pristine: true,
      submitting: false,
      submitFailed: false,
      submitSucceeded: false,
      valid: true,
      validating: 0,
      values: initialValues ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialValues) : {}
    },
    lastFormState: undefined
  };
  var inBatch = false;
  var validationPaused = false;
  var validationBlocked = false;
  var nextAsyncValidationKey = 0;
  var asyncValidationPromises = {};

  var clearAsyncValidationPromise = function clearAsyncValidationPromise(key) {
    return function (result) {
      delete asyncValidationPromises[key];
      return result;
    };
  };

  var changeValue = function changeValue(state, name, mutate) {
    var before = getIn(state.formState.values, name);
    var after = mutate(before);
    state.formState.values = setIn(state.formState.values, name, after) || {};
  };

  var renameField = function renameField(state, from, to) {
    if (state.fields[from]) {
      var _extends2, _extends3;

      state.fields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fields, (_extends2 = {}, _extends2[to] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fields[from], {
        name: to,
        // rebind event handlers
        blur: function blur() {
          return api.blur(to);
        },
        change: function change(value) {
          return api.change(to, value);
        },
        focus: function focus() {
          return api.focus(to);
        },
        lastFieldState: undefined
      }), _extends2));
      delete state.fields[from];
      state.fieldSubscribers = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fieldSubscribers, (_extends3 = {}, _extends3[to] = state.fieldSubscribers[from], _extends3));
      delete state.fieldSubscribers[from];
      var value = getIn(state.formState.values, from);
      state.formState.values = setIn(state.formState.values, from, undefined) || {};
      state.formState.values = setIn(state.formState.values, to, value);
      delete state.lastFormState;
    }
  }; // bind state to mutators


  var getMutatorApi = function getMutatorApi(key) {
    return function () {
      // istanbul ignore next
      if (mutators) {
        // ^^ causes branch coverage warning, but needed to appease the Flow gods
        var mutatableState = {
          formState: state.formState,
          fields: state.fields,
          fieldSubscribers: state.fieldSubscribers,
          lastFormState: state.lastFormState
        };

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var returnValue = mutators[key](args, mutatableState, {
          changeValue: changeValue,
          getIn: getIn,
          renameField: renameField,
          resetFieldState: api.resetFieldState,
          setIn: setIn,
          shallowEqual: shallowEqual
        });
        state.formState = mutatableState.formState;
        state.fields = mutatableState.fields;
        state.fieldSubscribers = mutatableState.fieldSubscribers;
        state.lastFormState = mutatableState.lastFormState;
        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
        return returnValue;
      }
    };
  };

  var mutatorsApi = mutators ? Object.keys(mutators).reduce(function (result, key) {
    result[key] = getMutatorApi(key);
    return result;
  }, {}) : {};

  var runRecordLevelValidation = function runRecordLevelValidation(setErrors) {
    var promises = [];

    if (validate) {
      var errorsOrPromise = validate(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.formState.values)); // clone to avoid writing

      if (isPromise(errorsOrPromise)) {
        promises.push(errorsOrPromise.then(setErrors));
      } else {
        setErrors(errorsOrPromise);
      }
    }

    return promises;
  };

  var getValidators = function getValidators(field) {
    return Object.keys(field.validators).reduce(function (result, index) {
      var validator = field.validators[Number(index)]();

      if (validator) {
        result.push(validator);
      }

      return result;
    }, []);
  };

  var runFieldLevelValidation = function runFieldLevelValidation(field, setError) {
    var promises = [];
    var validators = getValidators(field);

    if (validators.length) {
      var error;
      validators.forEach(function (validator) {
        var errorOrPromise = validator(getIn(state.formState.values, field.name), state.formState.values, validator.length === 3 ? publishFieldState(state.formState, state.fields[field.name]) : undefined);

        if (errorOrPromise && isPromise(errorOrPromise)) {
          field.validating = true;
          var promise = errorOrPromise.then(function (error) {
            field.validating = false;
            setError(error);
          }); // errors must be resolved, not rejected

          promises.push(promise);
        } else if (!error) {
          // first registered validator wins
          error = errorOrPromise;
        }
      });
      setError(error);
    }

    return promises;
  };

  var runValidation = function runValidation(fieldChanged, callback) {
    if (validationPaused) {
      validationBlocked = true;
      callback();
      return;
    }

    var fields = state.fields,
        formState = state.formState;

    var safeFields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields);

    var fieldKeys = Object.keys(safeFields);

    if (!validate && !fieldKeys.some(function (key) {
      return getValidators(safeFields[key]).length;
    })) {
      callback();
      return; // no validation rules
    } // pare down field keys to actually validate


    var limitedFieldLevelValidation = false;

    if (fieldChanged) {
      var changedField = safeFields[fieldChanged];

      if (changedField) {
        var validateFields = changedField.validateFields;

        if (validateFields) {
          limitedFieldLevelValidation = true;
          fieldKeys = validateFields.length ? validateFields.concat(fieldChanged) : [fieldChanged];
        }
      }
    }

    var recordLevelErrors = {};
    var fieldLevelErrors = {};
    var promises = [].concat(runRecordLevelValidation(function (errors) {
      recordLevelErrors = errors || {};
    }), fieldKeys.reduce(function (result, name) {
      return result.concat(runFieldLevelValidation(fields[name], function (error) {
        fieldLevelErrors[name] = error;
      }));
    }, []));
    var hasAsyncValidations = promises.length > 0;
    var asyncValidationPromiseKey = ++nextAsyncValidationKey;
    var promise = Promise.all(promises).then(clearAsyncValidationPromise(asyncValidationPromiseKey)); // backwards-compat: add promise to submit-blocking promises iff there are any promises to await

    if (hasAsyncValidations) {
      asyncValidationPromises[asyncValidationPromiseKey] = promise;
    }

    var processErrors = function processErrors() {
      var merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, limitedFieldLevelValidation ? formState.errors : {}, recordLevelErrors);

      var forEachError = function forEachError(fn) {
        fieldKeys.forEach(function (name) {
          if (fields[name]) {
            // make sure field is still registered
            // field-level errors take precedent over record-level errors
            var recordLevelError = getIn(recordLevelErrors, name);
            var errorFromParent = getIn(merged, name);
            var hasFieldLevelValidation = getValidators(safeFields[name]).length;
            var fieldLevelError = fieldLevelErrors[name];
            fn(name, hasFieldLevelValidation && fieldLevelError || validate && recordLevelError || (!recordLevelError && !limitedFieldLevelValidation ? errorFromParent : undefined));
          }
        });
      };

      forEachError(function (name, error) {
        merged = setIn(merged, name, error) || {};
      });
      forEachError(function (name, error) {
        if (error && error[ARRAY_ERROR]) {
          var existing = getIn(merged, name);
          var copy = [].concat(existing);
          copy[ARRAY_ERROR] = error[ARRAY_ERROR];
          merged = setIn(merged, name, copy);
        }
      });

      if (!shallowEqual(formState.errors, merged)) {
        formState.errors = merged;
      }

      formState.error = recordLevelErrors[FORM_ERROR];
    }; // process sync errors


    processErrors(); // sync errors have been set. notify listeners while we wait for others

    callback();

    if (hasAsyncValidations) {
      state.formState.validating++;
      callback();

      var afterPromise = function afterPromise() {
        state.formState.validating--;
        callback();
      };

      promise.then(function () {
        if (nextAsyncValidationKey > asyncValidationPromiseKey) {
          // if this async validator has been superseded by another, ignore its results
          return;
        }

        processErrors();
      }).then(afterPromise, afterPromise);
    }
  };

  var notifyFieldListeners = function notifyFieldListeners(name) {
    if (inBatch) {
      return;
    }

    var fields = state.fields,
        fieldSubscribers = state.fieldSubscribers,
        formState = state.formState;

    var safeFields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields);

    var notifyField = function notifyField(name) {
      var field = safeFields[name];
      var fieldState = publishFieldState(formState, field);
      var lastFieldState = field.lastFieldState;
      field.lastFieldState = fieldState;
      var fieldSubscriber = fieldSubscribers[name];

      if (fieldSubscriber) {
        notify(fieldSubscriber, fieldState, lastFieldState, filterFieldState, lastFieldState === undefined);
      }
    };

    if (name) {
      notifyField(name);
    } else {
      Object.keys(safeFields).forEach(notifyField);
    }
  };

  var markAllFieldsTouched = function markAllFieldsTouched() {
    Object.keys(state.fields).forEach(function (key) {
      state.fields[key].touched = true;
    });
  };

  var hasSyncErrors = function hasSyncErrors() {
    return !!(state.formState.error || hasAnyError(state.formState.errors));
  };

  var calculateNextFormState = function calculateNextFormState() {
    var fields = state.fields,
        formState = state.formState,
        lastFormState = state.lastFormState;

    var safeFields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields);

    var safeFieldKeys = Object.keys(safeFields); // calculate dirty/pristine

    var foundDirty = false;
    var dirtyFields = safeFieldKeys.reduce(function (result, key) {
      var dirty = !safeFields[key].isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));

      if (dirty) {
        foundDirty = true;
        result[key] = true;
      }

      return result;
    }, {});
    formState.pristine = !foundDirty;
    formState.dirtySinceLastSubmit = !!(formState.lastSubmittedValues && !safeFieldKeys.every(function (key) {
      // istanbul ignore next
      var nonNullLastSubmittedValues = formState.lastSubmittedValues || {}; // || {} is for flow, but causes branch coverage complaint

      return safeFields[key].isEqual(getIn(formState.values, key), getIn(nonNullLastSubmittedValues, key));
    }));
    formState.valid = !formState.error && !formState.submitError && !hasAnyError(formState.errors) && !(formState.submitErrors && hasAnyError(formState.submitErrors));
    var nextFormState = convertToExternalFormState(formState);

    var _safeFieldKeys$reduce = safeFieldKeys.reduce(function (result, key) {
      result.modified[key] = safeFields[key].modified;
      result.touched[key] = safeFields[key].touched;
      result.visited[key] = safeFields[key].visited;
      return result;
    }, {
      modified: {},
      touched: {},
      visited: {}
    }),
        modified = _safeFieldKeys$reduce.modified,
        touched = _safeFieldKeys$reduce.touched,
        visited = _safeFieldKeys$reduce.visited;

    nextFormState.dirtyFields = lastFormState && shallowEqual(lastFormState.dirtyFields, dirtyFields) ? lastFormState.dirtyFields : dirtyFields;
    nextFormState.modified = lastFormState && shallowEqual(lastFormState.modified, modified) ? lastFormState.modified : modified;
    nextFormState.touched = lastFormState && shallowEqual(lastFormState.touched, touched) ? lastFormState.touched : touched;
    nextFormState.visited = lastFormState && shallowEqual(lastFormState.visited, visited) ? lastFormState.visited : visited;
    return lastFormState && shallowEqual(lastFormState, nextFormState) ? lastFormState : nextFormState;
  };

  var callDebug = function callDebug() {
    return debug && "development" !== 'production' && debug(calculateNextFormState(), Object.keys(state.fields).reduce(function (result, key) {
      result[key] = state.fields[key];
      return result;
    }, {}));
  };

  var notifying = false;
  var scheduleNotification = false;

  var notifyFormListeners = function notifyFormListeners() {
    if (notifying) {
      scheduleNotification = true;
    } else {
      notifying = true;
      callDebug();

      if (!inBatch && !validationPaused) {
        var lastFormState = state.lastFormState;
        var nextFormState = calculateNextFormState();

        if (nextFormState !== lastFormState) {
          state.lastFormState = nextFormState;
          notify(state.subscribers, nextFormState, lastFormState, filterFormState);
        }
      }

      notifying = false;

      if (scheduleNotification) {
        scheduleNotification = false;
        notifyFormListeners();
      }
    }
  };

  var beforeSubmit = function beforeSubmit() {
    return Object.keys(state.fields).some(function (name) {
      return state.fields[name].beforeSubmit && state.fields[name].beforeSubmit() === false;
    });
  };

  var afterSubmit = function afterSubmit() {
    return Object.keys(state.fields).forEach(function (name) {
      return state.fields[name].afterSubmit && state.fields[name].afterSubmit();
    });
  }; // generate initial errors


  runValidation(undefined, function () {
    notifyFormListeners();
  });
  var api = {
    batch: function batch(fn) {
      inBatch = true;
      fn();
      inBatch = false;
      notifyFieldListeners();
      notifyFormListeners();
    },
    blur: function blur(name) {
      var fields = state.fields,
          formState = state.formState;
      var previous = fields[name];

      if (previous) {
        // can only blur registered fields
        delete formState.active;
        fields[name] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, {
          active: false,
          touched: true
        });

        if (validateOnBlur) {
          runValidation(name, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        } else {
          notifyFieldListeners();
          notifyFormListeners();
        }
      }
    },
    change: function change(name, value) {
      var fields = state.fields,
          formState = state.formState;

      if (getIn(formState.values, name) !== value) {
        changeValue(state, name, function () {
          return value;
        });
        var previous = fields[name];

        if (previous) {
          // only track modified for registered fields
          fields[name] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, {
            modified: true
          });
        }

        if (validateOnBlur) {
          notifyFieldListeners();
          notifyFormListeners();
        } else {
          runValidation(name, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        }
      }
    },

    get destroyOnUnregister() {
      return !!destroyOnUnregister;
    },

    set destroyOnUnregister(value) {
      destroyOnUnregister = value;
    },

    focus: function focus(name) {
      var field = state.fields[name];

      if (field && !field.active) {
        state.formState.active = name;
        field.active = true;
        field.visited = true;
        notifyFieldListeners();
        notifyFormListeners();
      }
    },
    mutators: mutatorsApi,
    getFieldState: function getFieldState(name) {
      var field = state.fields[name];
      return field && field.lastFieldState;
    },
    getRegisteredFields: function getRegisteredFields() {
      return Object.keys(state.fields);
    },
    getState: function getState() {
      return calculateNextFormState();
    },
    initialize: function initialize(data) {
      var fields = state.fields,
          formState = state.formState;

      var safeFields = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fields);

      var values = typeof data === 'function' ? data(formState.values) : data;

      if (!keepDirtyOnReinitialize) {
        formState.values = values;
      }

      Object.keys(safeFields).forEach(function (key) {
        var field = safeFields[key];
        field.modified = false;
        field.touched = false;
        field.visited = false;

        if (keepDirtyOnReinitialize) {
          var pristine = field.isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));

          if (pristine) {
            // only update pristine values
            formState.values = setIn(formState.values, key, getIn(values, key));
          }
        }
      });
      formState.initialValues = values;
      runValidation(undefined, function () {
        notifyFieldListeners();
        notifyFormListeners();
      });
    },
    isValidationPaused: function isValidationPaused() {
      return validationPaused;
    },
    pauseValidation: function pauseValidation() {
      validationPaused = true;
    },
    registerField: function registerField(name, subscriber, subscription, fieldConfig) {
      if (subscription === void 0) {
        subscription = {};
      }

      if (!state.fieldSubscribers[name]) {
        state.fieldSubscribers[name] = {
          index: 0,
          entries: {}
        };
      }

      var index = state.fieldSubscribers[name].index++; // save field subscriber callback

      state.fieldSubscribers[name].entries[index] = {
        subscriber: memoize(subscriber),
        subscription: subscription,
        notified: false
      };

      if (!state.fields[name]) {
        // create initial field state
        state.fields[name] = {
          active: false,
          afterSubmit: fieldConfig && fieldConfig.afterSubmit,
          beforeSubmit: fieldConfig && fieldConfig.beforeSubmit,
          blur: function blur() {
            return api.blur(name);
          },
          change: function change(value) {
            return api.change(name, value);
          },
          data: fieldConfig && fieldConfig.data || {},
          focus: function focus() {
            return api.focus(name);
          },
          isEqual: fieldConfig && fieldConfig.isEqual || tripleEquals,
          lastFieldState: undefined,
          modified: false,
          name: name,
          touched: false,
          valid: true,
          validateFields: fieldConfig && fieldConfig.validateFields,
          validators: {},
          validating: false,
          visited: false
        };
      }

      var haveValidator = false;

      if (fieldConfig) {
        haveValidator = !!(fieldConfig.getValidator && fieldConfig.getValidator());

        if (fieldConfig.getValidator) {
          state.fields[name].validators[index] = fieldConfig.getValidator;
        }

        if (fieldConfig.initialValue !== undefined) {
          state.formState.initialValues = setIn(state.formState.initialValues || {}, name, fieldConfig.initialValue);
          state.formState.values = setIn(state.formState.values, name, fieldConfig.initialValue);
        }

        if (fieldConfig.defaultValue !== undefined) {
          state.formState.values = setIn(state.formState.values, name, fieldConfig.defaultValue);
        }
      }

      if (haveValidator) {
        runValidation(undefined, function () {
          notifyFormListeners();
          notifyFieldListeners();
        });
      } else {
        notifyFormListeners();
        notifyFieldListeners(name);
      }

      return function () {
        var validatorRemoved = false; // istanbul ignore next

        if (state.fields[name]) {
          // state.fields[name] may have been removed by a mutator
          validatorRemoved = !!(state.fields[name].validators[index] && state.fields[name].validators[index]());
          delete state.fields[name].validators[index];
        }

        delete state.fieldSubscribers[name].entries[index];
        var lastOne = !Object.keys(state.fieldSubscribers[name].entries).length;

        if (lastOne) {
          delete state.fieldSubscribers[name];
          delete state.fields[name];

          if (validatorRemoved) {
            state.formState.errors = setIn(state.formState.errors, name, undefined) || {};
          }

          if (destroyOnUnregister) {
            state.formState.values = setIn(state.formState.values, name, undefined, true) || {};
          }
        }

        if (validatorRemoved) {
          runValidation(undefined, function () {
            notifyFormListeners();
            notifyFieldListeners();
          });
        } else if (lastOne) {
          // values or errors may have changed
          notifyFormListeners();
        }
      };
    },
    reset: function reset(initialValues) {
      if (initialValues === void 0) {
        initialValues = state.formState.initialValues;
      }

      if (state.formState.submitting) {
        throw Error('Cannot reset() in onSubmit(), use setTimeout(form.reset)');
      }

      state.formState.submitFailed = false;
      state.formState.submitSucceeded = false;
      delete state.formState.submitError;
      delete state.formState.submitErrors;
      delete state.formState.lastSubmittedValues;
      api.initialize(initialValues || {});
    },

    /**
     * Resets all field flags (e.g. touched, visited, etc.) to their initial state
     */
    resetFieldState: function resetFieldState(name) {
      state.fields[name] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.fields[name], {
        active: false,
        lastFieldState: undefined,
        modified: false,
        touched: false,
        valid: true,
        validating: false,
        visited: false
      });
      runValidation(undefined, function () {
        notifyFieldListeners();
        notifyFormListeners();
      });
    },
    resumeValidation: function resumeValidation() {
      validationPaused = false;

      if (validationBlocked) {
        // validation was attempted while it was paused, so run it now
        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
      }

      validationBlocked = false;
    },
    setConfig: function setConfig(name, value) {
      switch (name) {
        case 'debug':
          debug = value;
          break;

        case 'destroyOnUnregister':
          destroyOnUnregister = value;
          break;

        case 'initialValues':
          api.initialize(value);
          break;

        case 'keepDirtyOnReinitialize':
          keepDirtyOnReinitialize = value;
          break;

        case 'mutators':
          mutators = value;

          if (value) {
            Object.keys(mutatorsApi).forEach(function (key) {
              if (!(key in value)) {
                delete mutatorsApi[key];
              }
            });
            Object.keys(value).forEach(function (key) {
              mutatorsApi[key] = getMutatorApi(key);
            });
          } else {
            Object.keys(mutatorsApi).forEach(function (key) {
              delete mutatorsApi[key];
            });
          }

          break;

        case 'onSubmit':
          onSubmit = value;
          break;

        case 'validate':
          validate = value;
          runValidation(undefined, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
          break;

        case 'validateOnBlur':
          validateOnBlur = value;
          break;

        default:
          throw new Error('Unrecognised option ' + name);
      }
    },
    submit: function submit() {
      var formState = state.formState;

      if (formState.submitting) {
        return;
      }

      if (hasSyncErrors()) {
        markAllFieldsTouched();
        state.formState.submitFailed = true;
        notifyFormListeners();
        notifyFieldListeners();
        return; // no submit for you!!
      }

      var asyncValidationPromisesKeys = Object.keys(asyncValidationPromises);

      if (asyncValidationPromisesKeys.length) {
        // still waiting on async validation to complete...
        Promise.all(asyncValidationPromisesKeys.map(function (key) {
          return asyncValidationPromises[Number(key)];
        })).then(api.submit, api.submit);
        return;
      }

      var submitIsBlocked = beforeSubmit();

      if (submitIsBlocked) {
        return;
      }

      var resolvePromise;
      var completeCalled = false;

      var complete = function complete(errors) {
        formState.submitting = false;

        if (errors && hasAnyError(errors)) {
          formState.submitFailed = true;
          formState.submitSucceeded = false;
          formState.submitErrors = errors;
          formState.submitError = errors[FORM_ERROR];
          markAllFieldsTouched();
        } else {
          formState.submitFailed = false;
          formState.submitSucceeded = true;
          afterSubmit();
        }

        notifyFormListeners();
        notifyFieldListeners();
        completeCalled = true;

        if (resolvePromise) {
          resolvePromise(errors);
        }

        return errors;
      };

      delete formState.submitErrors;
      delete formState.submitError;
      formState.submitting = true;
      formState.submitFailed = false;
      formState.submitSucceeded = false;
      formState.lastSubmittedValues = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formState.values); // onSubmit is either sync, callback or async with a Promise

      var result = onSubmit(formState.values, api, complete);

      if (!completeCalled) {
        if (result && isPromise(result)) {
          // onSubmit is async with a Promise
          notifyFormListeners(); // let everyone know we are submitting

          notifyFieldListeners(); // notify fields also

          return result.then(complete, function (error) {
            complete();
            throw error;
          });
        } else if (onSubmit.length >= 3) {
          // must be async, so we should return a Promise
          notifyFormListeners(); // let everyone know we are submitting

          notifyFieldListeners(); // notify fields also

          return new Promise(function (resolve) {
            resolvePromise = resolve;
          });
        } else {
          // onSubmit is sync
          complete(result);
        }
      }
    },
    subscribe: function subscribe(subscriber, subscription) {
      if (!subscriber) {
        throw new Error('No callback given.');
      }

      if (!subscription) {
        throw new Error('No subscription provided. What values do you want to listen to?');
      }

      var memoized = memoize(subscriber);
      var subscribers = state.subscribers;
      var index = subscribers.index++;
      subscribers.entries[index] = {
        subscriber: memoized,
        subscription: subscription,
        notified: false
      };
      var nextFormState = calculateNextFormState();
      notifySubscriber(memoized, subscription, nextFormState, nextFormState, filterFormState, true);
      return function () {
        delete subscribers.entries[index];
      };
    }
  };
  return api;
}

//




/***/ }),

/***/ "./node_modules/memize/index.js":
/*!**************************************!*\
  !*** ./node_modules/memize/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function memize( fn, options ) {
	var size = 0,
		maxSize, head, tail;

	if ( options && options.maxSize ) {
		maxSize = options.maxSize;
	}

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				head.prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args )
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === maxSize ) {
			tail = tail.prev;
			tail.next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( false ) {}

	return memoized;
};


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "@eventespresso/components":
/*!***********************************************!*\
  !*** external {"this":["eejs","components"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["components"]; }());

/***/ }),

/***/ "@eventespresso/editor-hocs":
/*!***********************************************!*\
  !*** external {"this":["eejs","editorHocs"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["editorHocs"]; }());

/***/ }),

/***/ "@eventespresso/eejs":
/*!**********************************!*\
  !*** external {"this":["eejs"]} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]; }());

/***/ }),

/***/ "@eventespresso/helpers":
/*!********************************************!*\
  !*** external {"this":["eejs","helpers"]} ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["helpers"]; }());

/***/ }),

/***/ "@eventespresso/hooks":
/*!******************************************!*\
  !*** external {"this":["eejs","hooks"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["hooks"]; }());

/***/ }),

/***/ "@eventespresso/i18n":
/*!*****************************************!*\
  !*** external {"this":["eejs","i18n"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["i18n"]; }());

/***/ }),

/***/ "@eventespresso/model":
/*!******************************************!*\
  !*** external {"this":["eejs","model"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["model"]; }());

/***/ }),

/***/ "@eventespresso/model-schema":
/*!************************************************!*\
  !*** external {"this":["eejs","modelSchema"]} ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["modelSchema"]; }());

/***/ }),

/***/ "@eventespresso/utils":
/*!******************************************!*\
  !*** external {"this":["eejs","utils"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["utils"]; }());

/***/ }),

/***/ "@eventespresso/validators":
/*!***********************************************!*\
  !*** external {"this":["eejs","validators"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["validators"]; }());

/***/ }),

/***/ "@eventespresso/value-objects":
/*!*************************************************!*\
  !*** external {"this":["eejs","valueObjects"]} ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["valueObjects"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/keycodes":
/*!*******************************************!*\
  !*** external {"this":["wp","keycodes"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["keycodes"]; }());

/***/ }),

/***/ "@wordpress/url":
/*!**************************************!*\
  !*** external {"this":["wp","url"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["url"]; }());

/***/ }),

/***/ "classnames":
/*!********************************************************!*\
  !*** external {"this":["eejs","vendor","classnames"]} ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["vendor"]["classnames"]; }());

/***/ }),

/***/ "cuid":
/*!**************************************************!*\
  !*** external {"this":["eejs","vendor","cuid"]} ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["eejs"]["vendor"]["cuid"]; }());

/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });