export default class Cl_vInvitacion {
    constructor() {
        this.btnSi = document.getElementById('btnSi');
        this.btnNo = document.getElementById('btnNo');
        this.title = document.getElementById('pregunta');
    }

    updateSiButton(scale) {
        if (this.btnSi) {
            this.btnSi.style.transform = `scale(${scale})`;
        }
    }

    updateNoButton(text, hide) {
        if (this.btnNo) {
            this.btnNo.innerText = text;
            if (hide) {
                this.btnNo.style.display = 'none';
            }
        }
    }

    showSuccess(message) {
        if (this.title) {
            this.title.innerText = message;
            this.btnNo.style.display = 'none';
            this.btnSi.style.transform = 'scale(1)';
            this.btnSi.innerText = "❤️";
        }
    }

    bindNoClick(handler) {
        this.btnNo?.addEventListener('click', handler);
    }

    bindSiClick(handler) {
        this.btnSi?.addEventListener('click', handler);
    }
}
