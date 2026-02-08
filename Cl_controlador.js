import Cl_mInvitacion from './Cl_mInvitacion.js';
import Cl_vInvitacion from './Cl_vInvitacion.js';

export default class Cl_controlador {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Suscribirse a los eventos de la vista
        this.view.bindNoClick(this.handleNoClick.bind(this));
        this.view.bindSiClick(this.handleSiClick.bind(this));
    }

    handleNoClick() {
        const newScale = this.model.incrementScale();
        const nextPhrase = this.model.getNextPhrase();
        const hideNo = this.model.shouldHideNo();

        this.view.updateSiButton(newScale);
        this.view.updateNoButton(nextPhrase, hideNo);
    }

    handleSiClick() {
        this.view.showSuccess("¡Sabía que dirías que sí! ❤️");
    }
}

// Inicialización segura: espera a que el DOM esté cargado
window.onload = () => {
    const app = new Cl_controlador(new Cl_mInvitacion(), new Cl_vInvitacion());
};
