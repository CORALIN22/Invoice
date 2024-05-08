"use strict";

const modalCust = document.querySelector(".modal-cust");
const modalComp = document.querySelector(".modal-comp");
const overlay = document.querySelector(".overlay");
const btnCloseModalComp = document.querySelector(".close-modal-comp");
const btnCloseModalCust = document.querySelector(".close-modal-cust");
const showModalbtnComp = document.querySelector(".show-modal-comp");
const showModalbtnCust = document.querySelector(".show-modal-cust");

//Opening the modal company and customer

const openModalComp = () => {
  modalComp.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openModalCust = () => {
  modalCust.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

showModalbtnComp.addEventListener("click", openModalComp);
showModalbtnCust.addEventListener("click", openModalCust);

//Closing the modal

const closeModalComp = () => {
  modalComp.classList.add("hidden");
  overlay.classList.add("hidden");
};

const closeModalCust = () => {
  modalCust.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModalComp.addEventListener("click", closeModalComp);
btnCloseModalCust.addEventListener("click", closeModalCust);
