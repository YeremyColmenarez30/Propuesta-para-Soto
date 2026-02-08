export default class Cl_mInvitacion {
    #scaleSi = 1;
    #clickCount = 0;
    #maxClicks = 6;
    #phrases = [
        "¿Seguro/a?", 
        "Piénsalo bien...", 
        "¡Di que sí!", 
        "Voy a llorar...", 
        "¡Última oportunidad!", 
        "Ya no tienes opción"
    ];

    incrementScale() {
        this.#scaleSi += 0.5;
        return this.#scaleSi;
    }

    getNextPhrase() {
        this.#clickCount++;
        const index = Math.min(this.#clickCount - 1, this.#phrases.length - 1);
        return this.#phrases[index];
    }

    shouldHideNo() {
        return this.#clickCount >= this.#maxClicks;
    }
}
