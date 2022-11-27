/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data. */
/* Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

const {createApp} = Vue;

createApp ({
    data() {
        return {
            userName: "",
            greetingMessage: "",
            image: "https://media.istockphoto.com/id/177122214/it/foto/tenuta.jpg?s=612x612&w=0&k=20&c=vvUctyfXxnslgZeZYPISMd3NeV6wEGX-2EaCHQ1AgUk=",
        }
    },
    methods: {
        message: function () {
            this.greetingMessage = `Ciao ${this.userName}!`;
        }
    }
}).mount("#app");

