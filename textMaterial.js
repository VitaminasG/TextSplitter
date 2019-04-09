export const materials = {

    /** Debug boolean value to turn on/off the console.log debugging. */
    debug: false,

    /**
     * result - An empty object to split in to the separate characters.
     * content - Your desirable Object to be split into result Object.
     */
    store: {
        result: {},
        content: {
            first: {
                text1 : 'Your first.text1 random text here...',
                text2 : 'Your first.text2 random text here...',
            },
            second: { text1 : 'Your Second random text here...', },
            third: { text1 : 'Your Third random text here...', }
        }
    },

    /**
     * Create an Empty object in the Store.result.
     * @param {string} name - Name of Empty Object.
     */
    create(name){

        if(this.debug){
            console.log('Object Created: ' + name);
        }

        this.store.result[name] = {};

    },

    /**
     *  Split your text to a separate characters and store.
     * @param {string} text - Your string from Content.
     * @param {string} name - Name of Empty Object.
     * @param {string} key - name of the text string example: first.text1, first.text2...
     */
    strSplit(text, name, key){

        if(this.debug){
            console.log('Splitting :' + key);
        }

        this.store.result[name][key] = [];

        Object.assign(this.store.result[name][key], text.split(''));

        if(this.debug){
            console.log('Splitted and Displaying :' + ' Object->' + name + ', With Key : ' + key );
            console.log(this.store.result[name][key]);
        }

    },

    /**
     * Builder to create object to and from the string.
     * @param {string} name - Name of an Empty Object of your choice.
     * @param {object} textObj - destination of your string, example: first.text1...
     * @returns {object} - Object of divided string.
     */
    builder(name, textObj){

        this.create(name);

        for ( let [key, value] of Object.entries(this.store.content[textObj])) {
            this.strSplit(value, name, key);
        }

        return this.store.result[name]
    },

};