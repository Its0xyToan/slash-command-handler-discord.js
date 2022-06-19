class commandhelp {
    constructor() {
        this.name = "help"
        this.description = "Toutes mes commandes"
    }

    async execute(interaction, client) {

	interaction.reply("Voici mes commandes: \n\n> `help`: affiche ceci\n\n> `embed`: creer un embed très personnalisable.\n\n> `slowmode`: Change le slow mode du salon.")

    }
}

module.exports = commandhelp